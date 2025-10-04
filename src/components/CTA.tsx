// src/components/CTA.tsx
'use client';

import Link from 'next/link';
import * as React from 'react';

export type CTAVariant = 'primary' | 'ghost' | 'back' | 'alert' | 'dark';

export default function CTA({
                                href,
                                children,
                                variant,
                                // Legacy-Support (falls irgendwo noch primary/ghost genutzt wird)
                                primary,
                                ghost,
                                className = '',
                                ariaLabel,
                            }: {
    href: string;
    children: React.ReactNode;
    variant?: CTAVariant;
    primary?: boolean; // alt
    ghost?: boolean;   // alt
    className?: string;
    ariaLabel?: string;
}) {
    const base =
        'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 ' +
        'text-sm font-semibold transition ' +
        'focus-visible:outline-none focus-visible:ring-2';

    // Priorität: variant > primary/ghost > default(primary)
    const resolved: CTAVariant =
        variant ?? (primary ? 'primary' : ghost ? 'ghost' : 'primary');

    const styles: Record<CTAVariant, string> = {
        // Ocean-Primary
        primary:
            'bg-gradient-to-r from-[var(--accent-600)] to-[var(--accent-400)] text-white ' +
            'hover:brightness-110 ' +
            'focus-visible:ring-[color-mix(in oklab,var(--accent-400)45%,transparent)]',

        // Neutral (weiß)
        ghost:
            'bg-white text-[var(--accent-600)] border border-neutral-200 ' +
            'hover:shadow-sm ' +
            'focus-visible:ring-[color-mix(in oklab,var(--accent-400)45%,transparent)]',

        // 🔆 High-Visibility „Zurück“ – Amber, sehr gut erkennbar
        back:
            'bg-gradient-to-b from-amber-50 to-amber-100 text-amber-950 ' + // sanfter Verlauf, Top-Lesbarkeit
            'border border-amber-300 shadow-sm ' +                          // klare Kontur
            'hover:from-amber-100 hover:to-amber-200 hover:border-amber-400 ' + // deutlicher Hover
            'active:from-amber-200 active:to-amber-300 active:translate-y-px ' + // Klick-Feedback
            'focus-visible:ring-amber-300',                                  // sauberer Fokus-Ring

        // Notruf / Störung
        alert:
            'bg-gradient-to-r from-rose-600 via-red-600 to-orange-500 text-white ' +
            'hover:brightness-110 ' +
            'focus-visible:ring-rose-400',

        // Dunkelblau (seriös)
        dark:
            'bg-gradient-to-r from-sky-900 to-blue-900 text-white ' +
            'hover:brightness-110 ' +
            'focus-visible:ring-blue-800',
    };

    return (
        <Link
            href={href}
            className={[base, styles[resolved], className].join(' ')}
            aria-label={ariaLabel}
        >
            {children}
        </Link>
    );
}
