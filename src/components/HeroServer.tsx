// src/components/HeroServer.tsx
// Server-Komponente: sammelt alle Bilder aus /public/hero und übergibt sie an Hero (Client)
import fs from 'node:fs';
import path from 'node:path';
import Hero from './Hero';

function naturalSort(a: string, b: string) {
    // sortiert 01,02,10 korrekt
    return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

export default function HeroServer() {
    const heroDir = path.join(process.cwd(), 'public', 'hero');
    let images: string[] = [];

    try {
        const files = fs.readdirSync(heroDir);
        images = files
            .filter((f) => /\.(?:jpe?g|png|webp|avif)$/i.test(f))
            .sort(naturalSort)
            .map((f) => `/hero/${f}`);
    } catch {
        images = [];
    }

    return <Hero images={images} />;
}
