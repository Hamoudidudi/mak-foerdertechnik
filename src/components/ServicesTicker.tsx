"use client";

import * as React from "react";
import Link from "next/link";

type Direction = "left" | "right";

export default function ServicesTicker({
                                           speed = 60,              // px/Sekunde (größer = schneller)
                                           direction = "left",      // "left" | "right"
                                           pauseOnHover = true,
                                           className = "",
                                       }: {
    speed?: number;
    direction?: Direction;
    pauseOnHover?: boolean;
    className?: string;
}) {
    const baseItems = React.useMemo(
        () => [
            { label: "Wartung & 24/7", href: "/leistungen/wartung-service" },
            { label: "Modernisierung", href: "/leistungen/modernisierung" },
            { label: "Barrierefreiheit", href: "/leistungen/barrierefreiheit" },
            { label: "EN 81-80", href: "/leistungen/en-81-80" },
            { label: "Brandfallsteuerung", href: "/leistungen/brandfallsteuerung" },
            { label: "Energieeffizienz", href: "/leistungen/energieeffizienz" },
            { label: "Planung & Beratung", href: "/leistungen/beratung-planung" },
        ],
        []
    );

    // Duplizieren, bis ein Track >= Viewportbreite ist
    const [repeat, setRepeat] = React.useState(2);

    const wrapRef = React.useRef<HTMLDivElement | null>(null);
    const trackARef = React.useRef<HTMLDivElement | null>(null);
    const trackBRef = React.useRef<HTMLDivElement | null>(null);

    const widthRef = React.useRef(0);
    const offsetRef = React.useRef(0);
    const pausedRef = React.useRef(false);

    const items = React.useMemo(() => {
        const out: { label: string; href: string }[] = [];
        for (let r = 0; r < repeat; r++) out.push(...baseItems);
        return out;
    }, [baseItems, repeat]);

    // Breite messen & sicherstellen
    React.useEffect(() => {
        const ensureWidth = () => {
            const wrap = wrapRef.current;
            const a = trackARef.current;
            if (!wrap || !a) return;

            if (a.scrollWidth < wrap.clientWidth && repeat < 8) {
                setRepeat((r) => Math.min(8, r + 1));
                return;
            }

            widthRef.current = a.scrollWidth;
            offsetRef.current = 0;
            applyTransforms(0, widthRef.current, direction);
        };

        ensureWidth();

        let ro: ResizeObserver | null = null;
        if (typeof window !== "undefined") {
            if ("ResizeObserver" in window) {
                ro = new ResizeObserver(ensureWidth);
                wrapRef.current && ro.observe(wrapRef.current);
                trackARef.current && ro.observe(trackARef.current);
            }
            window.addEventListener("resize", ensureWidth);
            const ready: any = (document as any).fonts?.ready;
            ready?.then?.(ensureWidth);
            const id = window.setTimeout(ensureWidth, 150);
            return () => {
                ro?.disconnect();
                window.removeEventListener("resize", ensureWidth);
                window.clearTimeout(id);
            };
        }
    }, [direction, repeat]);

    // Hover-Pause (optional)
    React.useEffect(() => {
        if (!pauseOnHover) return;
        const wrap = wrapRef.current;
        if (!wrap) return;
        const onEnter = () => (pausedRef.current = true);
        const onLeave = () => (pausedRef.current = false);
        wrap.addEventListener("mouseenter", onEnter);
        wrap.addEventListener("mouseleave", onLeave);
        return () => {
            wrap.removeEventListener("mouseenter", onEnter);
            wrap.removeEventListener("mouseleave", onLeave);
        };
    }, [pauseOnHover]);

    // rAF-Loop (immer aktiv – ignoriert OS „reduced motion“, damit es sicher läuft)
    React.useEffect(() => {
        let raf = 0;
        let last = performance.now();
        const dir = direction === "left" ? -1 : 1;

        const step = (now: number) => {
            const dt = (now - last) / 1000;
            last = now;

            const w = widthRef.current;
            if (w > 0 && !pausedRef.current) {
                let off = offsetRef.current + dir * speed * dt;

                if (direction === "left") {
                    if (off <= -w) off += w;
                } else {
                    if (off >= w) off -= w;
                }

                offsetRef.current = off;
                applyTransforms(off, w, direction);
            }

            raf = requestAnimationFrame(step);
        };

        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [speed, direction]);

    function applyTransforms(off: number, w: number, dir: Direction) {
        const a = trackARef.current;
        const b = trackBRef.current;
        if (!a || !b) return;

        if (dir === "left") {
            a.style.transform = `translate3d(${off}px,0,0)`;
            b.style.transform = `translate3d(${off + w}px,0,0)`;
        } else {
            a.style.transform = `translate3d(${off}px,0,0)`;
            b.style.transform = `translate3d(${off - w}px,0,0)`;
        }
    }

    return (
        <section aria-label="Leistungen" className={`relative ${className}`}>
            {/* nutzt die globale .marq-Optik (heller Hintergrund & Linien) */}
            <div className="marq">
                {/* Wrapper */}
                <div ref={wrapRef} className="relative flex h-12 w-full items-center overflow-hidden">
                    {/* Track A */}
                    <div
                        ref={trackARef}
                        className="flex flex-nowrap items-center gap-8 will-change-transform whitespace-nowrap select-none"
                    >
                        {items.map((it, i) => (
                            <React.Fragment key={`a-${i}-${it.label}`}>
                                <TickerLink href={it.href}>{it.label}</TickerLink>
                                <Dot />
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Track B */}
                    <div
                        ref={trackBRef}
                        className="absolute left-0 top-0 flex h-full flex-nowrap items-center gap-8 will-change-transform whitespace-nowrap select-none"
                    >
                        {items.map((it, i) => (
                            <React.Fragment key={`b-${i}-${it.label}`}>
                                <TickerLink href={it.href}>{it.label}</TickerLink>
                                <Dot />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- UI-Elemente ---------- */

function TickerLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            prefetch={false}
            className="inline-flex items-center text-sm font-medium leading-none text-neutral-700 hover:text-neutral-900 transition whitespace-nowrap select-none"
            style={{ textDecoration: "none" }}
        >
            {children}
        </Link>
    );
}

function Dot() {
    return <span aria-hidden className="marq__dot" />;
}
