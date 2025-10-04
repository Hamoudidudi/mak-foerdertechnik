// src/components/HeroSlideshow.tsx
'use client';

import Image from 'next/image';
import * as React from 'react';

type Overlay = 'dark' | 'light' | 'none';
type Mode = 'fade' | 'slide' | 'zoom' | 'blur';
type Dir = 'left' | 'right';

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
                                          fadeMs = 900,
                                          kenBurns = true,
                                          overlay = 'dark',
                                          className = '',
                                          priorityFirst = true,
                                          mode = 'slide',           // 👈 NEU: 'fade' | 'slide' | 'zoom' | 'blur'
                                          direction = 'left',       // 👈 NEU: 'left' | 'right' (für slide)
                                      }: {
    images: string[];
    interval?: number;
    fadeMs?: number;
    kenBurns?: boolean;
    overlay?: Overlay;
    className?: string;
    priorityFirst?: boolean;
    mode?: Mode;
    direction?: Dir;
}) {
    const safeImages = React.useMemo(
        () => Array.from(new Set((images ?? []).filter(Boolean).map(stripQuery))),
        [images]
    );
    const hasSlides = safeImages.length > 1;

    const [curr, setCurr] = React.useState(0);
    const [frontA, setFrontA] = React.useState(true);      // welche Ebene oben ist
    const [nextReady, setNextReady] = React.useState(!hasSlides);

    // Strict-Mode-sicher: ein „Run“ zur Invalidierung
    const runIdRef = React.useRef(0);
    const timerRef = React.useRef<number | null>(null);

    const nextIndex = hasSlides ? (curr + 1) % safeImages.length : 0;
    const currSrc = safeImages[hasSlides ? curr : 0] ?? '';
    const nextSrc = safeImages[hasSlides ? nextIndex : 0] ?? '';

    const decodeSrc = React.useCallback(async (src: string) => {
        try {
            const img = new window.Image();
            img.src = src;

            if (typeof img.decode === 'function') await img.decode();
            else await new Promise<void>((res) => {
                img.onload = () => res();
                img.onerror = () => res();
            });
        } catch {}
    }, []);

    // Nächstes Bild dekodieren
    React.useEffect(() => {
        runIdRef.current += 1;
        const id = runIdRef.current;

        if (!hasSlides || !nextSrc) { setNextReady(true); return; }
        setNextReady(false);

        let cancelled = false;
        (async () => {
            await decodeSrc(nextSrc);
            if (!cancelled && id === runIdRef.current) setNextReady(true);
        })();

        return () => { cancelled = true; };
    }, [hasSlides, nextSrc, decodeSrc]);

    // Wechsel planen – erst nach voller interval-Zeit und nur wenn nextReady
    React.useEffect(() => {
        if (!hasSlides || !nextReady) return;

        const id = runIdRef.current;
        if (timerRef.current) window.clearTimeout(timerRef.current);

        timerRef.current = window.setTimeout(() => {
            if (id !== runIdRef.current) return;
            setFrontA((v) => !v);     // Ebenen tauschen (Animation übernimmt CSS)
            setCurr(nextIndex);       // Index fortschalten
        }, interval) as unknown as number;

        return () => { if (timerRef.current) window.clearTimeout(timerRef.current); };
    }, [hasSlides, nextReady, nextIndex, interval]);

    const overlayClasses =
        overlay === 'dark' ? 'bg-black/50'
            : overlay === 'light' ? 'bg-white/35'
                : 'bg-transparent';

    const kb =
        kenBurns
            ? 'motion-safe:scale-[1.05] motion-safe:animate-[kb_14s_ease-in-out_infinite_alternate]'
            : '';

    return (
        <div className={`absolute inset-0 -z-10 bg-neutral-900 ${className}`}>
            {hasSlides ? (
                <>
                    {/* Ebene A / Ebene B – wir vertauschen nur „wer oben ist“ */}
                    <SlideLayer src={frontA ? currSrc : nextSrc} active={frontA} fadeMs={fadeMs} mode={mode} dir={direction} kenBurnsClass={kb} priority={priorityFirst} />
                    <SlideLayer src={frontA ? nextSrc : currSrc} active={!frontA} fadeMs={fadeMs} mode={mode} dir={direction} kenBurnsClass={kb} priority={false} />
                </>
            ) : (
                <SlideLayer src={currSrc} active fadeMs={fadeMs} mode={mode} dir={direction} kenBurnsClass={kb} priority={priorityFirst} />
            )}

            <div className={`absolute inset-0 ${overlayClasses}`} />
            <style jsx global>{`
                @keyframes kb {
                    0%   { transform: scale(1.03) translate3d(0,0,0); }
                    100% { transform: scale(1.12) translate3d(8px,6px,0); }
                }
            `}</style>
        </div>
    );
}

function SlideLayer({
                        src,
                        active = false,
                        fadeMs,
                        mode,
                        dir,
                        kenBurnsClass,
                        priority,
                    }: {
    src: string;
    active?: boolean;
    fadeMs: number;
    mode: 'fade' | 'slide' | 'zoom' | 'blur';
    dir: 'left' | 'right';
    kenBurnsClass: string;
    priority: boolean;
}) {
    // Visuelle Modi – nur CSS-Transitionen (performant)
    const base = 'absolute inset-0 will-change-transform will-change-opacity';
    const dur = { transitionDuration: `${fadeMs}ms` };

    let classIn = '';
    let classOut = '';

    switch (mode) {
        case 'slide': {
            const sign = dir === 'left' ? 1 : -1;
            classIn  = `opacity-100 translate-x-0`;
            classOut = `opacity-0 translate-x-[${sign * 4}rem]`; // leicht seitlich raus
            break;
        }
        case 'zoom': {
            classIn  = `opacity-100 scale-100`;
            classOut = `opacity-0 scale-105`;
            break;
        }
        case 'blur': {
            classIn  = `opacity-100 [filter:none]`;
            classOut = `opacity-0 [filter:blur(6px)] scale-[1.02]`;
            break;
        }
        default: // 'fade'
            classIn  = `opacity-100`;
            classOut = `opacity-0`;
    }

    const stateCls = active
        ? `transition-transform transition-opacity ${classIn}`
        : `transition-transform transition-opacity ${classOut}`;

    return (
        <div className={`${base} ${stateCls}`} style={dur}>
            <Image
                src={src}
                alt=""
                fill
                priority={priority}
                sizes="100vw"
                className={['object-cover select-none', kenBurnsClass].join(' ')}
                draggable={false}
            />
        </div>
    );
}
