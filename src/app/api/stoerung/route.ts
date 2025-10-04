// app/api/stoerung/route.ts
import { NextResponse } from "next/server";
import { StoerungSchema } from "@/lib/validator";
import { verifyRecaptchaV3 } from "@/lib/recaptcha";
import { sendMail, renderHtml } from "@/lib/mailer";
import { rateLimitOk } from "@/lib/ratelimit";
import { getClientIp } from "@/lib/ip";

export async function POST(req: Request) {
    const ip = await getClientIp();
    if (!rateLimitOk(ip)) {
        return NextResponse.json({ ok: false, code: "RATE_LIMIT" }, { status: 429 });
    }

    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ ok: false, code: "INVALID_JSON" }, { status: 400 });
    }

    const parsed = StoerungSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json({ ok: false, code: "VALIDATION", errors: parsed.error.flatten() }, { status: 400 });
    }

    const { name, email, phone, message, location, urgency, hp, token } = parsed.data;

    if (hp && hp.trim().length > 0) {
        return NextResponse.json({ ok: false, code: "SPAM_HONEYPOT" }, { status: 400 });
    }

    const v = await verifyRecaptchaV3(token);
    if (!v.ok) {
        return NextResponse.json({ ok: false, code: "RECAPTCHA", reason: v.reason, score: v.score }, { status: 400 });
    }

    const subject = "🚨 Störungsmeldung (Website)";
    const html = renderHtml("Störungsmeldung", {
        Name: name,
        Email: email,
        Telefon: phone,
        Einsatzort: location,
        Priorität: urgency,
        Beschreibung: message,
        IP: ip,
        "reCAPTCHA-Score": String(v.score ?? "n/a"),
    });

    try {
        await sendMail({ subject, html, replyTo: email });
        return NextResponse.json({ ok: true, message: "Störung aufgenommen. Wir melden uns kurzfristig." });
    } catch {
        return NextResponse.json({ ok: false, code: "MAIL_ERROR" }, { status: 500 });
    }
}