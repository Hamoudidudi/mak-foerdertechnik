// src/components/HeroSlideshow.tsx
'use client';

import Image from 'next/image';
import * as React from 'react';

type Overlay = 'dark' | 'light' | 'none';

// Query/Hash entfernen (z. B. /hero/01.jpg?v=6)
function stripQuery(p: string) {
    const i = p.indexOf('?');
    const j = p.indexOf('#');
    const k = i === -1 ? j : j === -1 ? i : Math.min(i, j);
    return k === -1 ? p : p.slice(0, k);
}

export default function HeroSlideshow({
                                          images,
                                          interval = 6000,
                                          kenBurns = true,
                                          overlay = 'dark',
                                      }: {
    images: string[];
    interval?: number;
    kenBurns?: boolean;
    overlay?: Overlay;
}) {
    const safeImages = React.useMemo(
        () => Array.from(new Set((images ?? []).filter(Boolean).map(stripQuery))),
        [images]
    );
    const hasSlides = safeImages.length > 1;

    // Hooks NIE bedingt aufrufen
    const [curr, setCurr] = React.useState(0);
    const [frontA, setFrontA] = React.useState(true);
    const [nextLoaded, setNextLoaded] = React.useState(false);

    const nextIndex = hasSlides ? (curr + 1) % safeImages.length : 0;
    const currSrc = safeImages[hasSlides ? curr : 0] ?? '';
    const nextSrc = safeImages[hasSlides ? nextIndex : 0] ?? '';

    // Preload (nur wenn mehrere Slides)
    React.useEffect(() => {
        if (!hasSlides || !nextSrc) return;
        let cancelled = false;
        const img = new window.Image();
        img.onload = () => !cancelled && setNextLoaded(true);
        img.onerror = () => { if (!cancelled) setNextLoaded(false); };
        img.src = nextSrc;
        return () => { cancelled = true; setNextLoaded(false); };
    }, [hasSlides, nextSrc]);

    // Wechsel nur, wenn next geladen
    React.useEffect(() => {
        if (!hasSlides || !nextLoaded) return;
        const id = window.setTimeout(() => {
            setCurr(nextIndex);
            setFrontA((v) => !v);
            setNextLoaded(false);
        }, interval);
        return () => window.clearTimeout(id);
    }, [hasSlides, nextLoaded, nextIndex, interval]);

    const overlayClasses =
        overlay === 'dark'
            ? 'bg-black/50'
            : overlay === 'light'
                ? 'bg-white/35'
                : 'bg-transparent';

    const kb = kenBurns
        ? 'motion-safe:scale-[1.05] motion-safe:animate-[kb_14s_ease-in-out_infinite_alternate]'
        : '';

    return (
        <div className="absolute inset-0 -z-10 bg-neutral-900">
            {hasSlides ? (
                <>
                    <SlideLayer src={frontA ? currSrc : nextSrc} active={frontA} kenBurnsClass={kb} />
                    <SlideLayer src={frontA ? nextSrc : currSrc} active={!frontA} kenBurnsClass={kb} />
                </>
            ) : (
                <SlideLayer src={currSrc} active kenBurnsClass={kb} />
            )}

            <div className={`absolute inset-0 ${overlayClasses}`} />
            <style jsx global>{`
                @keyframes kb {
                    0% { transform: scale(1.03) translate3d(0,0,0); }
                    100% { transform: scale(1.12) translate3d(8px,6px,0); }
                }
            `}</style>
        </div>
    );
}

function SlideLayer({
                        src,
                        active,
                        kenBurnsClass,
                    }: {
    src: string;
    active?: boolean;
    kenBurnsClass: string;
}) {
    return (
        <div
            className={[
                'absolute inset-0 will-change-transform transition-opacity duration-700',
                active ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
        >
            <Image
                src={src}
                alt=""
                fill
                priority={!!active}
                sizes="100vw"
                className={['object-cover', kenBurnsClass].join(' ')}
            />
        </div>
    );
}
