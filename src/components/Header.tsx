// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const NAV = [
    { href: '/', label: 'Start' },
    { href: '/leistungen', label: 'Leistungen' },
    { href: '/faq', label: 'FAQ' },
    { href: '/downloads', label: 'Downloads' },
    { href: '/ueber-uns', label: 'Über uns' },
    { href: '/karriere', label: 'Karriere' }, // ⬅️ NEU
    { href: '/kontakt', label: 'Kontakt' },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // dezenter Schatten/Style beim Scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 2);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            {/* FIXED Header (bleibt beim Scrollen sichtbar) */}
            <header
                className={[
                    'site-header', // ⬅️ wichtig für Sticky-Subnav/Offsets
                    'fixed inset-x-0 top-0 z-50',
                    'bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70',
                    'transition-shadow border-b',
                    scrolled ? 'shadow-sm border-neutral-200/80' : 'border-transparent',
                ].join(' ')}
                role="banner"
            >
                {/* zarte Ocean-Linie oben */}
                <div
                    aria-hidden
                    className="h-0.5 w-full bg-gradient-to-r from-sky-200 via-cyan-200 to-sky-200 opacity-60"
                />

                <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
                    {/* Brand – MAK Fördertechnik */}
                    <Link
                        href="/"
                        aria-label="MAK Fördertechnik – Startseite"
                        title="MAK Fördertechnik"
                        className="group flex items-center gap-2"
                    >
            <span
                className={[
                    'rounded-xl px-3 py-1 text-sm font-black tracking-wide text-white',
                    'bg-gradient-to-br from-sky-600 to-blue-700',
                    'shadow-[inset_0_1px_0_rgba(255,255,255,.25),0_8px_18px_-10px_rgba(2,132,199,.6)] ring-1 ring-white/30',
                    'group-hover:-translate-y-0.5 transition-transform',
                ].join(' ')}
            >
              MAK
            </span>
                        <span className="text-[15px] font-extrabold leading-none text-neutral-900">
              Fördertechnik
            </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav aria-label="Hauptnavigation" className="hidden md:block">
                        <ul className="flex items-center gap-4">
                            {NAV.map((item) => (
                                <li key={item.href}>
                                    <NavLink href={item.href}>{item.label}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Notruf + Mobile Toggle */}
                    <div className="flex items-center gap-2">
                        <Link
                            href="/kontakt#notruf"
                            aria-label="24/7 Notruf"
                            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-sky-700 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                        >
                            <Zap className="h-4 w-4" />
                            <span>24/7 Notruf</span>
                        </Link>

                        <button
                            type="button"
                            aria-label="Menü öffnen"
                            aria-expanded={open}
                            onClick={() => setOpen(true)}
                            className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white/80 p-2 shadow-sm md:hidden"
                        >
                            <Menu className="h-5 w-5 text-neutral-700" />
                        </button>
                    </div>
                </div>

                {/* Mobile Panel (Overlay) */}
                <div
                    className={[
                        'fixed inset-0 z-[60] bg-white/95 backdrop-blur transition-transform duration-300 md:hidden',
                        open ? 'translate-x-0' : 'translate-x-full',
                    ].join(' ')}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
                        {/* Brand auch im Panel */}
                        <span className="flex items-center gap-2">
              <span className="rounded-xl bg-gradient-to-br from-sky-600 to-blue-700 px-3 py-1 text-sm font-black tracking-wide text-white ring-1 ring-white/30">
                MAK
              </span>
              <span className="text-[15px] font-extrabold text-neutral-900">
                Fördertechnik
              </span>
            </span>

                        <button
                            type="button"
                            aria-label="Menü schließen"
                            onClick={() => setOpen(false)}
                            className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white/80 p-2 shadow-sm"
                        >
                            <X className="h-5 w-5 text-neutral-700" />
                        </button>
                    </div>

                    <nav aria-label="Mobile Navigation" className="mx-auto max-w-5xl px-4">
                        <ul className="space-y-1 py-4">
                            {NAV.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="block rounded-xl px-3 py-3 text-base font-medium text-neutral-800 hover:bg-sky-50"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="border-t border-neutral-200/80 pt-4 pb-6">
                            <Link
                                href="/kontakt#notruf"
                                onClick={() => setOpen(false)}
                                className="inline-flex items-center gap-2 rounded-full bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                            >
                                <Zap className="h-4 w-4" />
                                24/7 Notruf
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Spacer damit Content nicht unter dem FIXED Header liegt */}
            <div aria-hidden className="h-16" />
        </>
    );
}

function NavLink({
                     href,
                     children,
                 }: {
    href: string;
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isActive =
        href === '/'
            ? pathname === '/'
            : pathname === href || pathname.startsWith(`${href}/`);

    return (
        <Link
            href={href}
            aria-current={isActive ? 'page' : undefined}
            className={[
                'relative px-2 py-1.5 text-sm font-medium transition-colors',
                isActive ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900',
                // animierte Ocean-Underline
                'after:absolute after:left-1 after:right-1 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-sky-600 after:to-cyan-500 after:transition-all after:duration-300',
                isActive ? 'after:opacity-100 after:scale-x-100' : 'after:opacity-0 hover:after:opacity-100',
            ].join(' ')}
        >
            {children}
        </Link>
    );
}
