// src/components/Hero.tsx
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import HeroSlideshow from './HeroSlideshow';
import { btn } from './ui';

export default function Hero({ images }: { images: string[] }) {
    const decoRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let raf = 0;
        const onScroll = () => {
            if (!decoRef.current) return;
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const y = window.scrollY;
                const t = Math.min(40, y * 0.06);
                decoRef.current!.style.transform = `translateY(${t}px)`;
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <section className="relative overflow-hidden bg-neutral-900">
            {/* Slideshow als echter Hintergrund */}
            <HeroSlideshow images={images} interval={6000} kenBurns overlay="dark" />

            {/* Content */}
            <div className="container relative grid gap-10 py-16 md:grid-cols-2 md:items-center lg:py-24">
                {/* Text-Spalte */}
                <div className="space-y-6 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,.35)]">
                    <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                        Aufzüge, Lifte,{' '}
                        <span className="bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
              sicher &amp; schnell
            </span>{' '}
                        betreut.
                    </h1>
                    <p className="max-w-prose text-[17px] leading-7 text-white/90">
                        Wartung, Modernisierung und Störungsdienst aus einer Hand. <br />
                        <strong>MAK Fördertechnik</strong> – „Über 100 Jahre kumulierte Erfahrung im Team“.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                        <Link href="/kontakt#angebot" className={`${btn.base} ${btn.primary}`}>
                            Angebot anfordern
                        </Link>
                        <Link
                            href="/kontakt#stoerung"
                            className={`${btn.base} bg-slate-900 text-white hover:bg-slate-950`}
                        >
                            Störung melden
                        </Link>
                    </div>

                    {/* Bullet-Trust */}
                    <ul className="mt-4 grid gap-2 text-sm text-white/90 md:grid-cols-2">
                        <li className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-300" /> EN 81-80 Expertise
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-300" /> 24/7 Notruf: 017624661824
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-300" /> Berlin-weit in{' '}
                            <span className="tabular-nums">≤ 2h</span> vor Ort*
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-300" /> Eigene Meister-/Serviceteams
                        </li>
                    </ul>
                </div>

                {/* Rechte Deko/Visual */}
                <div ref={decoRef} className="relative mx-auto aspect-[4/3] w-full max-w-[560px]">
                    <div className="absolute inset-0 rounded-2xl bg-white/80 shadow-[0_10px_30px_rgba(2,6,23,.12)] backdrop-blur">
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <div className="h-3 w-24 rounded bg-slate-200" />
                                <div className="h-3 w-12 rounded bg-slate-200" />
                            </div>

                            <div className="mt-6 grid grid-cols-3 gap-3">
                                <div className="h-24 rounded-xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20" />
                                <div className="h-24 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
                                <div className="h-24 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20" />
                            </div>

                            <div className="mt-6 h-2 w-3/5 rounded bg-slate-200" />
                            <div className="mt-2 h-2 w-2/5 rounded bg-slate-200" />
                        </div>
                    </div>
                    <div className="absolute left-6 right-6 top-6 -z-10 rounded-2xl bg-white/60 shadow-[0_18px_50px_rgba(2,6,23,.16)]" />
                    <div className="absolute left-12 right-12 top-12 -z-20 rounded-2xl bg-white/50 shadow-[0_20px_66px_rgba(2,6,23,.20)]" />
                </div>
            </div>
        </section>
    );
}
