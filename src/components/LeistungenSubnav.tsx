'use client';

import Link from 'next/link';
import {
    Wrench, Cog, Accessibility, Leaf, BookOpen, Flame, Shield
} from 'lucide-react';

const items = [
    { href: '/leistungen/wartung-service', label: 'Wartung & Service', icon: Wrench },
    { href: '/leistungen/modernisierung', label: 'Modernisierung', icon: Cog },
    { href: '/leistungen/barrierefreiheit', label: 'Barrierefreiheit', icon: Accessibility },
    { href: '/leistungen/energieeffizienz', label: 'Energieeffizienz', icon: Leaf },
    { href: '/leistungen/en-81-80', label: 'EN 81-80', icon: BookOpen },
    { href: '/leistungen/brandfallsteuerung', label: 'Brandfallsteuerung', icon: Flame },
    { href: '/leistungen/beratung-planung', label: 'Beratung & Planung', icon: Shield },
];

export default function LeistungenSubnav() {
    return (
        <nav className="sticky top-[64px] z-40 bg-white border-b border-neutral-200">
            <div className="mx-auto max-w-6xl px-4 py-3 flex flex-wrap gap-2">
                {items.map((it) => (
                    <Link
                        key={it.href}
                        href={it.href}
                        className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-800 transition hover:border-[var(--accent-400)] hover:text-[var(--accent-600)]"
                    >
                        <it.icon className="size-4" aria-hidden />
                        {it.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
