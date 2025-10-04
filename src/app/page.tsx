// src/app/page.tsx
import fs from 'node:fs';
import path from 'node:path';

import Link from 'next/link';
import HeroSlideshow from '@/components/HeroSlideshow';
import { btn } from '@/components/ui';
import StartSections from '@/components/StartSections';
import ServicesTicker from '@/components/ServicesTicker';

/** Dateien aus /public/hero automatisch einsammeln */
function getHeroImages(): string[] {
    try {
        const dir = path.join(process.cwd(), 'public', 'hero');
        const files = fs.readdirSync(dir);

        // nur Bilder, natürlich sortiert (01,02,10 …)
        return files
            .filter((f) => /\.(?:jpe?g|png|webp|avif)$/i.test(f))
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
            .map((f) => `/hero/${f}`);
    } catch {
        return []; // Ordner fehlt -> Slideshow rendert einfach nichts im Hintergrund
    }
}

export default function HomePage() {
    const HERO_IMAGES = getHeroImages();

    return (
        <>
            {/* HERO */}
            <section className="relative border-b">
                <div className="relative">
                    <HeroSlideshow
                        images={HERO_IMAGES}
                        interval={7000}
                        kenBurns
                        overlay="light"
                    />

                    {/* Hero-Content */}
                    <div className="relative z-10 mx-auto grid min-h-[70vh] max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-12 lg:py-24">
                        <div className="md:col-span-7 space-y-6 pl-2 md:pl-6">
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
                                MAK Fördertechnik
                                <br className="hidden md:block" />
                                Aufzüge. Lifte{' '}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-700)] via-[var(--accent-500)] to-[var(--accent-600)]">
                  Verantwortung.
                </span>
                            </h1>

                            {/* Satz: fetter + farbige, sanft animierte Keywords */}
                            <p className="max-w-prose text-[20px] leading-7 text-slate-900 font-semibold">
                <span className="text-gradient-slow">
                  Wartung, Modernisierung und Störungsdienst
                </span>{' '}
                                mit eigener Meistertruppe in Berlin&nbsp;&amp;&nbsp;Brandenburg.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/kontakt#angebot"
                                    className={`${btn.base} bg-slate-900 text-white hover:bg-slate-950`}
                                >
                                    Angebot anfordern
                                </Link>
                                <Link
                                    href="/kontakt#stoerung"
                                    className={`${btn.base} bg-blue-600 text-white hover:bg-blue-700`}
                                >
                                    Störung melden
                                </Link>
                            </div>
                        </div>
                        <div className="md:col-span-5" />
                    </div>
                </div>

                {/* Marquee */}
                <ServicesTicker speed={60} direction="left" pauseOnHover />
            </section>

            {/* Startseiten-Sektionen */}
            <StartSections />
        </>
    );
}
