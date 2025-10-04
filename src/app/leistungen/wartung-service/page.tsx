// src/app/leistungen/wartung-service/page.tsx
'use client';

import * as React from 'react';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Wrench,
    Shield,
    Clock,
    Cpu,
    Bell,
    Battery,
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    Sparkles,
    PhoneCall,
    ChevronDown,
} from 'lucide-react';
import CTA from '@/components/CTA';

/* =========================================================================
   /leistungen/wartung-service – subtil belebt, Ocean only
   ========================================================================= */

export default function WartungServicePage() {
    /* Client-Fallback: /leistungen/wartung -> /leistungen/wartung-service */
    const router = useRouter();
    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.pathname === '/leistungen/wartung') {
            router.replace('/leistungen/wartung-service');
        }
    }, [router]);

    /* JSON-LD SEO */
    const jsonLd = useMemo(
        () => ({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Wartung & 24/7-Service – MAK Fördertechnik',
            description:
                'Regelmäßige Aufzugswartung, Inspektion, Störungsdienst und 24/7-Notruf. Höchste Verfügbarkeit, Sicherheit und Normkonformität – mit schneller Reaktionszeit.',
            areaServed: 'Berlin & Brandenburg',
            provider: { '@type': 'Organization', name: 'MAK Fördertechnik' },
            offers: {
                '@type': 'Offer',
                availability: 'InStock',
                priceCurrency: 'EUR',
                description: 'Individueller Wartungsvertrag – transparent & bedarfsgerecht.',
            },
        }),
        []
    );

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <main data-theme="ocean" className="min-h-screen bg-neutral-50 text-neutral-900">
                {/* HERO (näher an Haupt-Navi) */}
                <section
                    id="hero"
                    className="relative overflow-hidden border-b bg-white pt-[calc(var(--header-h,64px)+16px)] md:pt-[calc(var(--header-h,64px)+20px)]"
                >
                    {/* sehr dezente, weiche Lichtflächen */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -z-10 opacity-35"
                        style={{
                            background:
                                'radial-gradient(60% 60% at 22% 18%, color-mix(in oklab, var(--accent-300) 36%, transparent) 0%, transparent 70%), radial-gradient(60% 60% at 78% 28%, color-mix(in oklab, var(--accent-400) 28%, transparent) 0%, transparent 70%)',
                        }}
                    />
                    <div
                        aria-hidden
                        className="absolute inset-0 -z-10 opacity-50"
                        style={{
                            background:
                                'linear-gradient(180deg, rgba(2,6,23,0.03) 0%, rgba(2,6,23,0) 55%), radial-gradient(50% 35% at 50% 0%, rgba(255,255,255,.55) 0%, rgba(255,255,255,0) 65%)',
                        }}
                    />

                    <Container>
                        <div className="grid items-center gap-10 md:grid-cols-12">
                            <div className="md:col-span-7">
                                {/* Keine Badge über dem Titel */}
                                <h1
                                    className="bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl"
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, var(--accent-700), var(--accent-500), var(--accent-600))',
                                    }}
                                >
                                    Wartung & 24/7-Service
                                </h1>
                                <p className="mt-4 max-w-prose text-lg text-neutral-700">
                                    Höchste Verfügbarkeit, Sicherheit und Komfort – durch regelmäßige Wartung, schnelle Störungsbehebung und
                                    einen echten 24/7-Notruf. <strong>Proaktiv statt reaktiv.</strong>
                                </p>

                                <div className="mt-6 flex flex-wrap items-center gap-3">
                                    <CTA href="#kontakt" variant="primary">
                                        Wartungsvertrag anfragen <ArrowRight className="size-4" />
                                    </CTA>

                                    {/* Auffälliger Zurück-CTA (Ocean-Tint) */}
                                    <CTA href="/leistungen" variant="back" ariaLabel="Zurück zur Übersicht Leistungen">
                                        <ArrowLeft className="size-4" />
                                        Zurück zu Leistungen
                                    </CTA>
                                </div>

                                <ul className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-600">
                                    {['EN-konforme Dokumentation', '24/7-Notrufzentrale', 'Schnelle Reaktionszeiten'].map((t) => (
                                        <li key={t} className="inline-flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-[var(--accent-500)]" /> {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="md:col-span-5">
                                <div
                                    className="rounded-3xl p-[1px]"
                                    style={{
                                        background:
                                            'linear-gradient(135deg, color-mix(in oklab, var(--accent-300) 36%, transparent), color-mix(in oklab, var(--accent-500) 36%, transparent))',
                                    }}
                                >
                                    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                                        <div className="flex items-center gap-3">
                                            <PhoneCall className="size-6 text-[var(--accent-600)]" />
                                            <p className="text-sm font-medium">Störung? Wir sind da.</p>
                                        </div>
                                        <p className="mt-3 text-neutral-700">
                                            Präventive Pflege, dokumentierte Inspektionen, Ersatzteile vorrätig – damit Ihr Aufzug zuverlässig bleibt.
                                        </p>
                                        <div className="mt-4">
                                            <CTA href="/kontakt" variant="primary">
                                                24/7-Kontakt <ArrowRight className="size-4" />
                                            </CTA>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sehr dezente KPI-Leiste als Besonderheit */}
                        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                            {[
                                { k: 'Ø Reaktionszeit', v: '≤ 60 min' },
                                { k: 'Verfügbarkeit', v: '99,5 %' },
                                { k: 'SLA-Erfüllung', v: '98 %' },
                            ].map((x) => (
                                <div
                                    key={x.k}
                                    className="flex items-center justify-between rounded-xl border border-[var(--tint-border)] bg-[var(--tint-bg)] px-4 py-2 text-sm"
                                >
                                    <span className="font-medium text-[var(--tint-text)]">{x.k}</span>
                                    <span className="font-semibold text-neutral-900">{x.v}</span>
                                </div>
                            ))}
                        </div>

                        <AccentBar className="mx-auto mt-8" />
                    </Container>

                    {/* Sticky Subnav */}
                    <SectionSubnav
                        items={[
                            { href: '#leistungen', label: 'Leistungen' },
                            { href: '#pakete', label: 'Pakete' },
                            { href: '#mehrwert', label: 'Mehrwert' },
                            { href: '#faq', label: 'FAQ' },
                            { href: '#kontakt', label: 'Kontakt' },
                        ]}
                    />
                </section>

                {/* LEISTUNGEN */}
                <section id="leistungen" className="bg-neutral-50 py-14 md:py-20">
                    <Container>
                        <SectionHeader
                            eyebrow="Leistungen"
                            title="Wartung, Inspektion & Störungsdienst"
                            intro="Wir halten Ihre Anlage betriebsbereit – dokumentiert, planbar und wirtschaftlich."
                        />

                        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
                            {[
                                { icon: Wrench, title: 'Regelmäßige Wartung', text: 'Geplante Inspektionen nach Herstellervorgaben & Normen.' },
                                { icon: Shield, title: 'Sicherheit', text: 'Notrufsysteme, Türsensorik, Prüfprotokolle – alles im Blick.' },
                                { icon: Clock, title: 'Schnelle Reaktion', text: 'Störungsdienst mit klaren Reaktionszeiten.' },
                                { icon: Battery, title: 'Langlebigkeit', text: 'Justage & Pflege verlängern die Lebensdauer.' },
                                { icon: Bell, title: 'Monitoring', text: 'Optionales Monitoring und vorbeugende Hinweise.' },
                                { icon: Cpu, title: 'Digitale Diagnose', text: 'Schnelle Auswertung & zielgenaue Behebung.' },
                            ].map(({ icon: Icon, title, text }) => (
                                <li
                                    key={title}
                                    className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--tint-border)] hover:shadow-md"
                                >
                                    <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl border border-[var(--tint-border)] bg-[var(--tint-bg)] text-[var(--tint-text)]">
                      <Icon className="size-5" />
                    </span>
                                        <h3 className="font-semibold">{title}</h3>
                                    </div>
                                    <p className="mt-2 text-neutral-700">{text}</p>
                                    <AccentBar className="mt-4 opacity-0 transition group-hover:opacity-100" />
                                </li>
                            ))}
                        </ul>
                    </Container>
                </section>

                {/* PAKETE */}
                <section id="pakete" className="border-t bg-white py-14 md:py-20">
                    <Container>
                        <SectionHeader
                            eyebrow="Pakete"
                            title="Der passende Wartungsvertrag"
                            intro="Sie wählen den Servicegrad – wir sorgen für verlässliche Verfügbarkeit."
                        />
                        <div className="mt-10 grid gap-6 md:grid-cols-3">
                            {[
                                { name: 'Basis', points: ['Inspektion gemäß Norm', 'Sichtprüfung & Schmierung', 'Dokumentation'] },
                                { name: 'Plus', points: ['Alles aus Basis', 'Priorisierter Störungsdienst', 'Kleinmaterial inkl.'] },
                                { name: 'Premium', points: ['Alles aus Plus', '24/7-Notruf inklusive', 'Erweitertes Monitoring'] },
                            ].map((p, idx) => (
                                <div
                                    key={p.name}
                                    className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--tint-border)] hover:shadow-md"
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold">{p.name}</h3>
                                        <div
                                            aria-hidden
                                            className="h-1 w-24 rounded-full"
                                            style={{
                                                background:
                                                    idx === 0
                                                        ? 'linear-gradient(90deg, var(--accent-400), var(--accent-300), var(--accent-500))'
                                                        : idx === 1
                                                            ? 'linear-gradient(90deg, var(--accent-500), var(--accent-400), var(--accent-600))'
                                                            : 'linear-gradient(90deg, var(--accent-600), var(--accent-400), var(--accent-500))',
                                            }}
                                        />
                                    </div>
                                    <ul className="mt-4 space-y-2 text-neutral-700">
                                        {p.points.map((t) => (
                                            <li key={t} className="flex items-start gap-2">
                                                <CheckCircle2 className="mt-0.5 size-4 text-[var(--accent-500)]" /> {t}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-5">
                                        <CTA href="#kontakt" variant="primary">
                                            Anfragen <ArrowRight className="size-4" />
                                        </CTA>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* MEHRWERT */}
                <section id="mehrwert" className="border-t bg-neutral-50 py-14 md:py-20">
                    <Container>
                        <SectionHeader
                            eyebrow="Mehrwert"
                            title="Technisch stark, optisch klar"
                            intro="Unsere Lösungen verbinden Effizienz mit Nutzererlebnis – für Betreiber und Bewohner."
                        />
                        <div className="mt-8 grid gap-6 md:grid-cols-3">
                            {[
                                { icon: Shield, title: 'Sicherheit & Normen', text: 'EN-konform, dokumentiert und nachvollziehbar.' },
                                { icon: Cpu, title: 'Moderne Technik', text: 'Digitale Steuerung & Diagnose verkürzen Standzeiten.' },
                                { icon: Sparkles, title: 'Komfort & Erscheinungsbild', text: 'Saubere Haptik, klare Signale, gute Wahrnehmung.' },
                            ].map(({ icon: Icon, title, text }) => (
                                <div
                                    key={title}
                                    className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--tint-border)] hover:shadow-md"
                                >
                                    <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl border border-[var(--tint-border)] bg-[var(--tint-bg)] text-[var(--tint-text)]">
                      <Icon className="size-5" />
                    </span>
                                        <h3 className="font-semibold">{title}</h3>
                                    </div>
                                    <p className="mt-2 text-neutral-700">{text}</p>
                                    <AccentBar className="mt-4" />
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* FAQ – dezenter Card-Stil */}
                <section id="faq" className="border-t bg-white py-14 md:py-20">
                    <Container>
                        <SectionHeader eyebrow="FAQ" title="Wissen, worauf man sich verlassen kann" />
                        <div className="mx-auto mt-8 max-w-3xl space-y-3">
                            {FAQ_ITEMS.map((it, i) => (
                                <FaqCard key={i} q={it.q} a={it.a} />
                            ))}
                        </div>
                    </Container>
                </section>

                {/* KONTAKT */}
                <section id="kontakt" className="border-t bg-neutral-50 py-14 md:py-20">
                    <Container>
                        <div className="mx-auto max-w-3xl text-center">
                            <h2
                                className="bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
                                style={{
                                    backgroundImage: 'linear-gradient(90deg, var(--accent-700), var(--accent-500), var(--accent-600))',
                                }}
                            >
                                Wartungsvertrag anfragen
                            </h2>
                            <p className="mx-auto mt-3 max-w-prose text-neutral-700">
                                Wir prüfen Ihre Anlage, empfehlen das passende Paket und erstellen ein verbindliches Angebot.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                                <CTA href="/kontakt" variant="primary">
                                    Jetzt Kontakt aufnehmen <ArrowRight className="size-4" />
                                </CTA>

                                {/* Auffälliger Zurück-CTA (Ocean-Tint) */}
                                <CTA href="/leistungen" variant="back" ariaLabel="Zurück zur Übersicht Leistungen">
                                    <ArrowLeft className="size-4" />
                                    Zurück zu Leistungen
                                </CTA>
                            </div>
                            <AccentBar className="mx-auto mt-6" />
                        </div>
                    </Container>
                </section>
            </main>
        </>
    );
}

/* =========================================================================
   UI-Bausteine
   ========================================================================= */

function Container({ children }: { children: React.ReactNode }) {
    return <div className="container mx-auto max-w-6xl px-4">{children}</div>;
}

function AccentBar({ className = '' }: { className?: string }) {
    return (
        <div
            aria-hidden
            className={`h-1 w-24 rounded-full ${className}`}
            style={{ background: 'linear-gradient(90deg, var(--accent-400), var(--accent-300), var(--accent-500))' }}
        />
    );
}

/* Sektionstitel: gut lesbare Eyebrow-Badge (Tint) */
function SectionHeader({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
    return (
        <div className="text-center">
            {eyebrow && (
                <div className="mx-auto mb-2 inline-flex items-center gap-2 rounded-full border border-[var(--tint-border)] bg-[var(--tint-bg)] px-3 py-1 text-xs font-semibold text-[var(--tint-text)] shadow-sm">
                    {eyebrow}
                </div>
            )}
            <h2
                className="bg-clip-text text-2xl font-bold text-transparent md:text-3xl"
                style={{
                    backgroundImage: 'linear-gradient(90deg, var(--accent-700), var(--accent-500), var(--accent-600))',
                }}
            >
                {title}
            </h2>
            <AccentBar className="mx-auto mt-3" />
            {intro && <p className="mx-auto mt-4 max-w-prose text-neutral-700">{intro}</p>}
        </div>
    );
}

/* Sticky Subnav mit Header-Offset */
function SectionSubnav({ items }: { items: { href: string; label: string }[] }) {
    const navRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const links = navRef.current?.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
        if (!links) return;

        const onClick = (e: MouseEvent) => {
            const a = e.currentTarget as HTMLAnchorElement;
            const targetId = a.getAttribute('href');
            if (!targetId) return;
            const target = document.querySelector(targetId) as HTMLElement | null;
            if (!target) return;
            e.preventDefault();

            const header = document.querySelector<HTMLElement>('.site-header');
            const headerH = header?.offsetHeight ?? 72;
            const subnavH = navRef.current?.offsetHeight ?? 48;
            const gap = 8;

            const y = target.getBoundingClientRect().top + window.scrollY - headerH - subnavH - gap;
            window.scrollTo({ top: y, behavior: 'smooth' });
        };

        links.forEach((a) => a.addEventListener('click', onClick));
        return () => links.forEach((a) => a.removeEventListener('click', onClick));
    }, []);

    return (
        <div ref={navRef} className="sticky top-[var(--header-h,64px)] z-40 border-y border-neutral-200 bg-white/85 backdrop-blur">
            <Container>
                <ul className="flex justify-center gap-2 overflow-x-auto py-2">
                    {items.map((i) => (
                        <li key={i.href}>
                            <a className="pill anchor-offset" href={i.href}>
                                {i.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </Container>
        </div>
    );
}

/* FAQ – Daten */
const FAQ_ITEMS = [
    { q: 'Wie oft wird gewartet?', a: 'In der Regel monatlich bis vierteljährlich – je nach Nutzung und Anlage.' },
    { q: 'Gilt der 24/7-Notruf für alle Pakete?', a: 'Im Premiumpaket inklusive, in Plus optional zubuchbar.' },
    { q: 'Wie schnell ist der Störungsdienst vor Ort?', a: 'Wir arbeiten mit klaren Reaktionszeiten – Details im Vertrag.' },
    { q: 'Erhalte ich Prüfprotokolle?', a: 'Ja, alle Leistungen werden dokumentiert und bereitgestellt.' },
    { q: 'Betreuen Sie auch Fremdfabrikate?', a: 'Ja, wir warten Anlagen vieler Hersteller. Sprechen Sie uns an.' },
];

/* FAQ – hübsche, aber dezente Karten */
function FaqCard({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [maxH, setMaxH] = useState(0);

    useEffect(() => {
        if (!contentRef.current) return;
        setMaxH(open ? contentRef.current.scrollHeight : 0);
    }, [open]);

    return (
        <div
            className={[
                'overflow-hidden rounded-2xl border bg-white transition shadow-sm',
                open ? 'border-[var(--tint-border)] shadow-md' : 'border-neutral-200 hover:shadow-md',
            ].join(' ')}
        >
            <button className="flex w-full items-center gap-3 px-4 py-4 text-left" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span
            aria-hidden
            className={['h-8 w-1 rounded-full', open ? 'bg-gradient-to-b' : 'bg-neutral-200'].join(' ')}
            style={
                open
                    ? { backgroundImage: 'linear-gradient(180deg, var(--accent-500), var(--accent-400), var(--accent-600))' }
                    : undefined
            }
        />
                <span className="flex-1 pr-3 text-base font-medium text-neutral-900">{q}</span>
                <ChevronDown className={`size-5 shrink-0 text-[var(--accent-600)] transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>

            <div className="px-5 transition-[max-height] duration-300 ease-in-out" style={{ maxHeight: maxH }} aria-hidden={!open}>
                <div ref={contentRef} className="pb-5 text-neutral-700">
                    {a}
                </div>
            </div>
        </div>
    );
}
