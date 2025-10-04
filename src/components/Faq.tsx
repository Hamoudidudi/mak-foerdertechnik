'use client';

import * as React from 'react';
import { useEffect, useId, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export type FAQItem = { q: string; a: string };

export type FAQProps = {
    items: FAQItem[];
    /** Optionaler Abschnittstitel */
    title?: string;
    /** Optionales Eyebrow/Badge */
    eyebrow?: string;
    /** Optionales Intro */
    intro?: string;
    /** Mehrere Panels gleichzeitig offen erlauben */
    multiOpen?: boolean;
    /** Indizes, die initial offen sein sollen */
    defaultOpen?: number[];
    /** Header explizit anzeigen (hat Vorrang vor hideHeader) */
    showHeader?: boolean;
    /** Header verstecken (Kompatibilität) */
    hideHeader?: boolean;
    /** Zusätzliche Klassen für den <section>-Wrapper */
    className?: string;
    /** Zusätzliche Klassen für das innere Container-Grid */
    containerClassName?: string;
    /** Optional eine feste ID setzen (sonst generiert) */
    id?: string;
};

type PanelState = { open: boolean; maxHeight: number };

export default function Faq({
                                items,
                                title = 'Häufige Fragen',
                                eyebrow,
                                intro,
                                multiOpen = true,
                                defaultOpen = [],
                                showHeader,
                                hideHeader = false,
                                className,
                                containerClassName,
                                id,
                            }: FAQProps) {
    // Header-Sichtbarkeit bestimmen
    const t = (title ?? '').trim();
    const i = (intro ?? '').trim();
    const e = (eyebrow ?? '').trim();
    const hasHeaderContent = Boolean(e || t || i);
    const headerVisibleFlag = showHeader !== undefined ? showHeader : !hideHeader;
    const headerVisible = headerVisibleFlag && hasHeaderContent;

    const [focused, setFocused] = useState(0);
    const [panels, setPanels] = useState<PanelState[]>(
        () =>
            items.map((_, idx) => ({
                open: defaultOpen.includes(idx),
                maxHeight: defaultOpen.includes(idx) ? 9999 : 0,
            }))
    );

    const panelRefs = useRef<Array<HTMLDivElement | null>>([]);
    const baseId = useId();
    const sectionId = id ?? 'faq';

    const toggle = (index: number) => {
        setPanels((prev) => {
            const next = [...prev];
            if (multiOpen) {
                const el = panelRefs.current[index];
                const willOpen = !next[index].open;
                next[index] = {
                    open: willOpen,
                    maxHeight: willOpen ? (el?.scrollHeight ?? 0) : 0,
                };
            } else {
                next.forEach((p, i) => {
                    const el = panelRefs.current[i];
                    const willOpen = i === index ? !p.open : false;
                    next[i] = {
                        open: willOpen,
                        maxHeight: willOpen ? (el?.scrollHeight ?? 0) : 0,
                    };
                });
            }
            return next;
        });
    };

    // Recompute maxHeights on resize
    useEffect(() => {
        const onResize = () =>
            setPanels((prev) =>
                prev.map((p, i) => ({
                    ...p,
                    maxHeight: p.open ? panelRefs.current[i]?.scrollHeight ?? 0 : 0,
                }))
            );
        window.addEventListener('resize', onResize, { passive: true });
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const n = items.length;
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setFocused((i) => (i + 1) % n);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setFocused((i) => (i - 1 + n) % n);
        } else if (e.key === 'Home') {
            e.preventDefault();
            setFocused(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            setFocused(n - 1);
        } else if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            toggle(focused);
        }
    };

    return (
        <section
            id={sectionId}
            aria-label="Häufige Fragen"
            className={`anchor-offset ${className ?? ''}`}
        >
            {/* Header nur wenn Inhalt vorhanden & erlaubt */}
            {headerVisible && (
                <div className="container mx-auto max-w-3xl px-4 text-center">
                    {e && (
                        <div className="mb-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                {e}
              </span>
                        </div>
                    )}

                    {t && (
                        <h2 className="bg-gradient-to-r from-sky-700 via-cyan-600 to-blue-700 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                            {t}
                        </h2>
                    )}

                    {i && <p className="mx-auto mt-2 max-w-2xl text-neutral-600">{i}</p>}

                    {(t || i) && (
                        <div
                            aria-hidden
                            className="mx-auto mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500"
                        />
                    )}
                </div>
            )}

            {/* Liste */}
            <div
                role="list"
                className={`container mx-auto mt-6 max-w-3xl px-4 ${containerClassName ?? ''}`}
                onKeyDown={onKeyDown}
            >
                {items.map((item, i) => {
                    const btnId = `${baseId}-faq-btn-${i}`;
                    const panelId = `${baseId}-faq-panel-${i}`;
                    const isOpen = panels[i]?.open;

                    return (
                        <div
                            key={i}
                            role="listitem"
                            className="group mb-4 overflow-hidden rounded-2xl border border-sky-100 bg-sky-50/70 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:border-sky-200"
                        >
                            <h3 className="m-0">
                                <button
                                    id={btnId}
                                    aria-controls={panelId}
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left outline-none transition hover:bg-sky-50 focus-visible:ring-2 focus-visible:ring-sky-500/60"
                                    onClick={() => toggle(i)}
                                    onFocus={() => setFocused(i)}
                                    tabIndex={focused === i ? 0 : -1}
                                >
                  <span className="text-base md:text-lg font-semibold text-neutral-900">
                    {item.q}
                  </span>
                                    <ChevronDown
                                        className={`shrink-0 text-sky-600 transition-transform duration-300 ${
                                            isOpen ? 'rotate-180' : ''
                                        }`}
                                        aria-hidden
                                    />
                                </button>
                            </h3>

                            <div
                                id={panelId}
                                role="region"
                                aria-labelledby={btnId}
                                ref={(el) => (panelRefs.current[i] = el)}
                                style={{
                                    maxHeight: panels[i]?.maxHeight ?? 0,
                                    transition: 'max-height 300ms cubic-bezier(.22,.61,.36,1)',
                                }}
                                className="overflow-hidden"
                            >
                                <div className="px-4 pb-4 pt-0">
                                    <div
                                        className={`rounded-xl bg-sky-50/30 px-3 py-2 text-neutral-700 transition-opacity duration-300 ${
                                            isOpen ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    >
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
