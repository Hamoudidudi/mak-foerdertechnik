// app/api/angebot/route.ts
import { NextResponse } from "next/server";
import { AngebotSchema } from "@/lib/validator";
import { verifyRecaptchaV3 } from "@/lib/recaptcha";
import { sendMail, renderHtml } from "@/lib/mailer";
import { rateLimitOk } from "@/lib/ratelimit";
import { getClientIp } from "@/lib/ip";

export async function POST(req: Request) {
    const ip = await getClientIp();
    if (!rateLimitOk(ip)) {
        return NextResponse.json(
            { ok: false, code: "RATE_LIMIT", message: "Zu viele Anfragen. Bitte später erneut versuchen." },
            { status: 429 }
        );
    }

    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ ok: false, code: "INVALID_JSON" }, { status: 400 });
    }

    const parsed = AngebotSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json({ ok: false, code: "VALIDATION", errors: parsed.error.flatten() }, { status: 400 });
    }

    const { name, email, phone, message, objectType, hp, token } = parsed.data;

    // Honeypot
    if (hp && hp.trim().length > 0) {
        return NextResponse.json({ ok: false, code: "SPAM_HONEYPOT" }, { status: 400 });
    }

    // reCAPTCHA
    const v = await verifyRecaptchaV3(token);
    if (!v.ok) {
        return NextResponse.json({ ok: false, code: "RECAPTCHA", reason: v.reason, score: v.score }, { status: 400 });
    }

    const subject = "📩 Angebotsanfrage (Website)";
    const html = renderHtml("Angebotsanfrage", {
        Name: name,
        Email: email,
        Telefon: phone,
        Objekttyp: objectType,
        Nachricht: message,
        IP: ip,
        "reCAPTCHA-Score": String(v.score ?? "n/a"),
    });

    try {
        await sendMail({ subject, html, replyTo: email });
        return NextResponse.json({ ok: true, message: "Vielen Dank! Wir melden uns zeitnah." });
    } catch {
        return NextResponse.json({ ok: false, code: "MAIL_ERROR" }, { status: 500 });
    }
}