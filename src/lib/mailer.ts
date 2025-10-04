import nodemailer from "nodemailer";

export function createTransport() {
    const host = process.env.SMTP_HOST!;
    const port = Number(process.env.SMTP_PORT ?? 587);
    const secure = String(process.env.SMTP_SECURE).toLowerCase() === "true";
    const user = process.env.SMTP_USER!;
    const pass = process.env.SMTP_PASS!;
    return nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
}

type MailParams = { subject: string; html: string; replyTo?: string };

// ➜ Dry-Run: schickt nichts, gibt aber „ok“ zurück
export async function sendMail({ subject, html, replyTo }: MailParams) {
    const dry = String(process.env.MAIL_DRY_RUN).toLowerCase() === "true";
    if (dry) {
        console.info("[MAIL_DRY_RUN] Would send mail:", { subject, replyTo });
        return { accepted: ["dry-run"], rejected: [] } as any;
    }
    const transporter = createTransport();
    const from = process.env.SMTP_FROM!;
    const to = process.env.SMTP_TO!;
    return transporter.sendMail({ from, to, subject, html, replyTo });
}

export function renderHtml(title: string, pairs: Record<string, string | undefined>) {
    const rows = Object.entries(pairs)
        .filter(([, v]) => v && v.trim().length > 0)
        .map(([k, v]) => `<tr><td style="padding:6px 10px;background:#f8fafc;border-bottom:1px solid #e2e8f0;"><b>${k}</b></td><td style="padding:6px 10px;border-bottom:1px solid #e2e8f0;">${v}</td></tr>`)
        .join("");
    return `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Arial,sans-serif;line-height:1.5;color:#0f172a">
    <h2>${title}</h2>
    <table style="border-collapse:collapse;width:100%;margin-top:8px">${rows}</table>
    <p style="font-size:12px;color:#64748b;margin-top:12px">Gesendet von mak-foerdertechnik.de • ${new Date().toLocaleString("de-DE")}</p>
  </div>`;
}