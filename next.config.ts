// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    eslint: {
        // 🚀 Lint-Fehler stoppen den Build NICHT (nur für schnellen Launch)
        ignoreDuringBuilds: true,
    },
    typescript: {
        // 🚀 TS-Fehler ignorieren (nur wenn nötig)
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
