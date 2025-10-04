export async function verifyRecaptchaV3(token: string): Promise<{ ok: boolean; score?: number; reason?: string }> {
    if (process.env.MOCK_RECAPTCHA === "true") {
        return { ok: true, score: 0.9 };
    }

    const secret = process.env.RECAPTCHA_SECRET!;
    try {
        const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({ secret, response: token }),
        });
        const data = await res.json();
        if (!data.success) return { ok: false, reason: "recaptcha_failed" };
        if (typeof data.score === "number" && data.score < 0.4) {
            return { ok: false, score: data.score, reason: "low_score" };
        }
        return { ok: true, score: data.score };
    } catch {
        return { ok: false, reason: "recaptcha_error" };
    }
}