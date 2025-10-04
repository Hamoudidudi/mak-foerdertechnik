'use client';

import CTA from '@/components/CTA';
import { ArrowLeft } from 'lucide-react';

import * as React from 'react';
import { useMemo, useRef, useState, useEffect } from 'react';
import {
    Wrench,
    Shield,
    Cpu,
    Bell,
    Battery,
    Sparkles,
    ArrowRight,
    CheckCircle2,
    PhoneCall,
    ChevronDown,
} from 'lucide-react';

/* =========================================================================
   /leistungen/barrierefreiheit – subtil belebt, Ocean only
   ========================================================================= */

export default function BarrierefreiheitPage() {
    /* JSON-LD SEO */
    const jsonLd = useMemo(
        () => ({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Barrierefreiheit & Komfort – MAK Fördertechnik',
            description:
                'Taktile und akustische Hinweise, gut erreichbare Bedienelemente, sichere Türen und klare Signale – für komfortable und zugängliche Aufzüge.',
            areaServed: 'Berlin & Brandenburg',
            provider: { '@type': 'Organization', name: 'MAK Fördertechnik' },
            offers: {
                '@type': 'Offer',
                availability: 'InStock',
                priceCurrency: 'EUR',
                description: 'Individuelle Nachrüstungen und Optimierungen für Barrierefreiheit – modular und wirtschaftlich.',
            },
        }),
        []
    );

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main data-theme="ocean" className="min-h-screen bg-neutral-50 text-neutral-900">
                {/* HERO */}
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

                    <Container>
                        <div className="grid items-center gap-10 md:grid-cols-12">
                            <div className="md:col-span-7">
                                <h1
                                    className="bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl"
                                    style={{
                                        backgroundImage:
                                            'linear-gradient(90deg, var(--accent-700), var(--accent-500), var(--accent-600))',
                                    }}
                                >
                                    Barrierefreiheit & Komfort
                                </h1>
                                <p className="mt-4 max-w-prose text-lg text-neutral-700">
                                    Zugänglich, verständlich, sicher – wir optimieren Anzeigen, Taster, Türsysteme und Kommunikation, damit
                                    Aufzüge von allen Nutzergruppen komfortabel bedient werden können.
                                </p>

                                <div className="mt-6 flex flex-wrap items-center gap-3">
                                    <CTA href="#kontakt" variant="primary">
                                        Beratung anfragen <ArrowRight className="size-4" />
                                    </CTA>
                                    <CTA href="/leistungen" variant="back" ariaLabel="Zurück zur Übersicht Leistungen">
                                        <ArrowLeft className="size-4" />
                                        Zurück zu Leistungen
                                    </CTA>
                                </div>

                                <ul className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-600">
                                    {[
                                        'Taktile & akustische Hinweise',
                                        'Gut erreichbare Bedienelemente',
                                        'Sichere Tür- & Lichtschrankensysteme',
                                    ].map((t) => (
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
                                            <p className="text-sm font-medium">Nutzerorientierte Nachrüstung</p>
                                        </div>
                                        <p className="mt-3 text-neutral-700">
                                            Wir prüfen Kabine, Anzeigen, Bedienelemente und Türen und schlagen passende, wirtschaftliche
                                            Optimierungen vor.
                                        </p>
                                        <div className="mt-4">
                                            <CTA href="/kontakt" variant="primary">
                                                Termin vereinbaren <ArrowRight className="size-4" />
                                            </CTA>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <AccentBar className="mx-auto mt-8" />
                    </Container>

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
                            title="Zugänglichkeit gezielt verbessern"
                            intro="Von der Beschilderung bis zur Tür – modular nachrüstbar und klar dokumentiert."
                        />

                        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
                            {[
                                { icon: Sparkles, title: 'Bedienelemente & Beschriftung', text: 'Kontrast, taktile Elemente, klare Piktogramme.' },
                                { icon: Bell, title: 'Akustik & Anzeige', text: 'Etagenansage, Gong, gut erkennbare Anzeigen.' },
                                { icon: Shield, title: 'Türsysteme & Spalt', text: 'Feinfühlige Lichtschranken, reduzierte Schwellen.' },
                                { icon: Cpu, title: 'Ruf- & Notrufsysteme', text: 'Erreichbar, verständlich, sicher kommunizieren.' },
                                { icon: Battery, title: 'Beleuchtung & Orientierung', text: 'Helle Kabinen, Leitsysteme, gute Sichtbarkeit.' },
                                { icon: Wrench, title: 'Ergonomie in der Kabine', text: 'Griffe/Handlauf, Bedienhöhe, Wendekreis berücksichtigen.' },
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
                            title="Passende Nachrüst-Pakete"
                            intro="Von schnellen Quick-Wins bis zur umfassenden Barrierefreiheit – modular kombinierbar."
                        />
                        <div className="mt-10 grid gap-6 md:grid-cols-3">
                            {[
                                { name: 'Basis', points: ['Beschriftung & Kontrast', 'Anzeige/Signal prüfen', 'Kleine Optimierungen'] },
                                { name: 'Plus', points: ['Erweiterte Türsensorik', 'Notruf optimieren', 'Beleuchtung verbessern'] },
                                { name: 'Premium', points: ['Umfassende Nachrüstung', 'Ergonomie Kabine', 'Dokumentation & Übergabe'] },
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
                                            Angebot anfragen <ArrowRight className="size-4" />
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
                            title="Komfortabel, sicher, verständlich"
                            intro="Bessere Orientierung, weniger Hemmschwellen, zufriedene Nutzer – mit klarer Dokumentation."
                        />
                        <div className="mt-8 grid gap-6 md:grid-cols-3">
                            {[
                                { icon: Shield, title: 'Sicherheit & Vertrauen', text: 'Saubere Signale und Türsensorik vermeiden Risiken.' },
                                { icon: Cpu, title: 'Nutzerzentriert', text: 'Bedienhöhe, Haptik, Klarheit – intuitiv für alle.' },
                                { icon: Sparkles, title: 'Wert der Anlage', text: 'Modernes Erlebnis steigert Akzeptanz und Attraktivität.' },
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

                {/* FAQ */}
                <section id="faq" className="border-t bg-white py-14 md:py-20">
                    <Container>
                        <SectionHeader eyebrow="FAQ" title="Häufige Fragen zur Barrierefreiheit" />
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
                                    backgroundImage:
                                        'linear-gradient(90deg, var(--accent-700), var(--accent-500), var(--accent-600))',
                                }}
                            >
                                Beratung zur Barrierefreiheit anfragen
                            </h2>
                            <p className="mx-auto mt-3 max-w-prose text-neutral-700">
                                Wir analysieren Ihren Aufzug, priorisieren Maßnahmen und erstellen ein klares Angebot.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                                <CTA href="/kontakt" variant="primary">
                                    Jetzt Kontakt aufnehmen <ArrowRight className="size-4" />
                                </CTA>
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
                    backgroundImage:
                        'linear-gradient(90deg, var(--accent-700), var(--accent-500), var(--accent-600))',
                }}
            >
                {title}
            </h2>
            <AccentBar className="mx-auto mt-3" />
            {intro && <p className="mx-auto mt-4 max-w-prose text-neutral-700">{intro}</p>}
        </div>
    );
}
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

/* FAQ */
const FAQ_ITEMS = [
    { q: 'Was sind typische Quick-Wins?', a: 'Kontraste erhöhen, Beschriftung ergänzen, Anzeigen/Signale optimieren – oft ohne großen Umbau.' },
    { q: 'Müssen Türen ersetzt werden?', a: 'Nicht zwingend. Häufig reicht eine Optimierung der Lichtschranke und Türparameter.' },
    { q: 'Sind die Maßnahmen herstellerabhängig?', a: 'Wir arbeiten herstellerunabhängig und wählen passende Komponenten aus.' },
    { q: 'Unterstützen Sie bei der Dokumentation?', a: 'Ja, wir dokumentieren Änderungen und stellen Unterlagen bereit.' },
    { q: 'Bleibt der Aufzug nutzbar?', a: 'Wir planen Eingriffe so, dass Ausfallzeiten möglichst gering bleiben.' },
];
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
            <button
                className="flex w-full items-center gap-3 px-4 py-4 text-left"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
        <span
            aria-hidden
            className={['h-8 w-1 rounded-full', open ? 'bg-gradient-to-b' : 'bg-neutral-200'].join(' ')}
            style={
                open
                    ? {
                        backgroundImage:
                            'linear-gradient(180deg, var(--accent-500), var(--accent-400), var(--accent-600))',
                    }
                    : undefined
            }
        />
                <span className="flex-1 pr-3 text-base font-medium text-neutral-900">{q}</span>
                <ChevronDown
                    className={`size-5 shrink-0 text-[var(--accent-600)] transition-transform ${
                        open ? 'rotate-180' : ''
                    }`}
                />
            </button>

            <div
                className="px-5 transition-[max-height] duration-300 ease-in-out"
                style={{ maxHeight: maxH }}
                aria-hidden={!open}
            >
                <div ref={contentRef} className="pb-5 text-neutral-700">
                    {a}
                </div>
            </div>
        </div>
    );
}
