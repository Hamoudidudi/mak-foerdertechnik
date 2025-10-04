import { headers } from "next/headers";

// Next.js 15: headers() ist async → await notwendig
export async function getClientIp() {
    const h = await headers();
    return (
        h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        h.get("x-real-ip") ||
        "0.0.0.0"
    );
}