const buckets = new Map<string, { tokens: number; last: number }>();
const WINDOW_MS = 60_000; // 1 Minute
const CAPACITY = 5;       // 5 Requests / Minute / IP

export function rateLimitOk(ip: string) {
    const now = Date.now();
    const bucket = buckets.get(ip) ?? { tokens: CAPACITY, last: now };
    const elapsed = now - bucket.last;
    const refill = Math.floor(elapsed / WINDOW_MS) * CAPACITY;
    bucket.tokens = Math.min(CAPACITY, bucket.tokens + refill);
    bucket.last = now;
    if (bucket.tokens <= 0) {
        buckets.set(ip, bucket);
        return false;
    }
    bucket.tokens -= 1;
    buckets.set(ip, bucket);
    return true;
}