// src/app/page.tsx
import fs from 'node:fs';
import path from 'node:path';

import Link from 'next/link';
import HeroSlideshow from '@/components/HeroSlideshow';
import { btn } from '@/components/ui';
import StartSections from '@/components/StartSections';
import ServicesTicker from '@/components/ServicesTicker';

export const dynamic = 'force-static';

/** Dateien aus /public/hero automatisch einsammeln (Server-side) */
function getHeroImages(): string[] {
    try {
        const dir = path.join(process.cwd(), 'public', 'hero');
        const files = fs.readdirSync(dir);

        return files
            .filter((f) => /\.(?:jpe?g|png|webp|avif)$/i.test(f))
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
            .map((f) => `/hero/${f}`);
    } catch {
        return [];
    }
}

export default function HomePage() {
    const autoImages = getHeroImages();
    const heroImages =
        autoImages.length > 0 ? autoImages : ['/hero/01.jpg', '/hero/02.jpg', '/hero/03.jpg'];

    return (
        <>
            {/* HERO-Bereich (Slideshow als echter Background) */}
            <section className="relative overflow-hidden">
                <HeroSlideshow
                    images={heroImages}
                    interval={7000}
                    fadeMs={900}
                    overlay="light"
                    kenBurns={true}
                    priorityFirst={true}
                    className="!inset-0 !h-full !w-full" // bleibt absolut, weil Komponente schon absolute/-z-10 setzt
                    mode="slide"        // ⬅️ Neu: 'fade' | 'slide' | 'zoom' | 'blur'
                    direction="left"    // ⬅️ Nur für 'slide': 'left' | 'right'
                />

                {/* Hero-Content */}
                <div className="relative z-10 mx-auto grid min-h-[70vh] max-w-7xl items-center gap-10 px-4 pt-28 md:pt-36 pb-16 md:grid-cols-12">
                    <div className="md:col-span-7 space-y-6 pl-2 md:pl-6">
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
                            MAK Fördertechnik
                            <br className="hidden md:block" />
                            Aufzüge. Lifte{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-700)] via-[var(--accent-500)] to-[var(--accent-600)]">
                Verantwortung.
              </span>
                        </h1>

                        <p className="max-w-prose text-[20px] leading-7 text-slate-900 font-semibold">
              <span className="text-gradient-slow">
                Wartung, Modernisierung und Störungsdienst mit eigener Meistertruppe in Berlin & Brandenburg.
              </span>
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <Link href="/kontakt#angebot" className={`${btn.base} bg-slate-900 text-white hover:bg-slate-950`}>
                                Angebot anfordern
                            </Link>
                            <Link href="/kontakt#stoerung" className={`${btn.base} bg-blue-600 text-white hover:bg-blue-700`}>
                                Störung melden
                            </Link>
                        </div>
                    </div>
                    <div className="md:col-span-5" />
                </div>

                {/* Marquee direkt unter dem Hero-Content */}
                <div className="relative z-10">
                    <ServicesTicker speed={60} direction="left" pauseOnHover />
                </div>
            </section>

            {/* Startseiten-Sektionen */}
            <StartSections />
        </>
    );
}
