'use client';

import CTA from '@/components/CTA';
import { ArrowLeft } from 'lucide-react';

import * as React from 'react';
import { useMemo, useRef, useState, useEffect } from 'react';
import {
    Flame,
    Bell,
    AlertTriangle,
    ArrowDownToLine,
    Unlock,
    Wrench,
    Shield,
    Cpu,
    Battery,
    Sparkles,
    Building2,
    ArrowRight,
    CheckCircle2,
    PhoneCall,
    ChevronDown,
} from 'lucide-react';

/* =========================================================================
   /leistungen/brandfallsteuerung – clean Ocean, ganz leichte Brand-Anmutung
   ========================================================================= */

export default function BrandfallsteuerungPage() {
    /* JSON-LD SEO */
    const jsonLd = useMemo(
        () => ({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Brandfallsteuerung & Evakuierung – MAK Fördertechnik',
            description:
                'Definierte Abläufe im Brandfall: Evakuierungsebene, Türlogik, Feuerwehr-Ansteuerung und Dokumentation – sauber parametriert und getestet.',
            areaServed: 'Berlin & Brandenburg',
            provider: { '@type': 'Organization', name: 'MAK Fördertechnik' },
            offers: {
                '@type': 'Offer',
                availability: 'InStock',
                priceCurrency: 'EUR',
                description: 'Check, Parametrierung und Begleitung der Umsetzung – transparent & modular.',
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
                    {/* dezente Lichtflächen (Ocean) */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -z-10 opacity-35"
                        style={{
                            background:
                                'radial-gradient(60% 60% at 22% 18%, color-mix(in oklab, var(--accent-300) 36%, transparent) 0%, transparent 70%), radial-gradient(60% 60% at 78% 28%, color-mix(in oklab, var(--accent-400) 28%, transparent) 0%, transparent 70%)',
                        }}
                    />
                    {/* mini-warmes Glühen (sehr subtil) */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full blur-3xl"
                        style={{ background: 'rgba(251, 146, 60, 0.06)' /* amber-400 @ 6% */ }}
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
                                    Brandfallsteuerung & Evakuierung
                                </h1>
                                <p className="mt-4 max-w-prose text-lg text-neutral-700">
                                    Definierte Abläufe für den Ernstfall: Evakuierungsebene, Türverhalten, Feuerwehrschnittstelle – sauber
                                    parametriert, getestet und dokumentiert.
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

                                {/* ganz leichte Besonderheit: Ablauf in 3 Schritten */}
                                <ol className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
                                    {[
                                        { icon: Bell, t: 'Alarm-Eingang', d: 'Signal von BMZ/Detektor wird erkannt' },
                                        { icon: ArrowDownToLine, t: 'Rückruf zur Ebene', d: 'Fahrt zur definierten Evakuierungsebene' },
                                        { icon: Unlock, t: 'Türlogik', d: 'Tür öffnen/halten nach Vorgabe, Priorisierung' },
                                    ].map(({ icon: Icon, t, d }, i) => (
                                        <li key={t} className="rounded-xl border border-[var(--tint-border)] bg-[var(--tint-bg)] p-3">
                                            <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-2 text-[var(--tint-text)] font-semibold">
                          <Icon className="size-4" /> {t}
                        </span>
                                                <span className="text-xs font-medium text-neutral-500">0{i + 1}</span>
                                            </div>
                                            <p className="mt-1 text-neutral-700">{d}</p>
                                        </li>
                                    ))}
                                </ol>
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
                                            <p className="text-sm font-medium">Abstimmung & Dokumente</p>
                                        </div>
                                        <p className="mt-3 text-neutral-700">
                                            Wir klären Pflichten & Szenarien, definieren den Ablauf und bereiten die Unterlagen verständlich auf.
                                        </p>
                                        <div className="mt-4">
                                            <CTA href="/kontakt" variant="primary">
                                                Gespräch vereinbaren <ArrowRight className="size-4" />
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
                            title="Abläufe sauber definieren & parametrieren"
                            intro="Vom Eingangssignal bis zur Türlogik – klar abgestimmt, dokumentiert und getestet."
                        />
                        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
                            {[
                                { icon: Flame, title: 'Brandfall-Ablauf', text: 'Szenarien definieren, Evakuierungsebene festlegen.' },
                                { icon: Shield, title: 'Feuerwehrschnittstelle', text: 'Anbindung & Priorisierung sauber umsetzen.' },
                                { icon: ArrowDownToLine, title: 'Rückruf-Strategie', text: 'Fahrprofil & Verhalten bei belegtem Aufzug.' },
                                { icon: Unlock, title: 'Türverhalten', text: 'Öffnen/Halten nach Vorgabe, sichere Zeitfenster.' },
                                { icon: Cpu, title: 'Parametrierung', text: 'Steuerung konfigurieren, Signalwege prüfen.' },
                                { icon: Sparkles, title: 'Dokumentation & Test', text: 'Protokoll, Übergabe & Wiederholtests.' },
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
                            title="Drei Wege zur klaren Brandfallsteuerung"
                            intro="Vom schnellen Check bis zur vollständigen Umsetzung – modular & nachvollziehbar."
                        />
                        <div className="mt-10 grid gap-6 md:grid-cols-3">
                            {[
                                { name: 'Check & Plan', points: ['Vor-Ort-Check', 'Soll-Ablauf definieren', 'Kurzprotokoll'] },
                                { name: 'Parametrierung', points: ['Steuerung einstellen', 'Signalwege prüfen', 'Test & Nachweis'] },
                                { name: 'Umsetzung+', points: ['Abstimmung mit Schnittstellen', 'Erweiterungen (z. B. Türen)', 'Dokupaket & Übergabe'] },
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
                            title="Sicher, klar, dokumentiert"
                            intro="Verlässliche Abläufe, saubere Protokolle, ruhiger Betrieb – im Ernstfall zählt Klarheit."
                        />
                        <div className="mt-8 grid gap-6 md:grid-cols-3">
                            {[
                                { icon: Shield, title: 'Sicherheit erhöhen', text: 'Definierte Prioritäten & verlässliche Reaktionen.' },
                                { icon: Cpu, title: 'Konsequent umgesetzt', text: 'Konfiguration & Test schaffen Vertrauen.' },
                                { icon: Sparkles, title: 'Nachvollziehbar', text: 'Dokumente & Übergabe ohne Lücken.' },
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
                        <SectionHeader eyebrow="FAQ" title="Häufige Fragen zur Brandfallsteuerung" />
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
                                Projekt zur Brandfallsteuerung anfragen
                            </h2>
                            <p className="mx-auto mt-3 max-w-prose text-neutral-700">
                                Wir definieren den Ablauf, parametrieren die Steuerung und erstellen die Dokumentation – klar und nachvollziehbar.
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
                style={{ backgroundImage: 'linear-gradient(90deg, var(--accent-700), var(--accent-500), var(--accent-600))' }}
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
    { q: 'Müssen alle Funktionen sofort umgesetzt werden?', a: 'Nein. Wir priorisieren die wirksamen Schritte und planen Etappen mit klaren Übergabepunkten.' },
    { q: 'Begleiten Sie Tests vor Ort?', a: 'Ja. Wir führen Funktionstests durch und dokumentieren sie verständlich.' },
    { q: 'Arbeiten Sie mit der Feuerwehrschnittstelle?', a: 'Ja. Wir stimmen Signalwege und Prioritäten ab und prüfen die Funktion.' },
    { q: 'Wie lange dauert die Parametrierung?', a: 'Je nach Anlage von wenigen Stunden bis zu 1–2 Tagen inklusive Test & Protokoll.' },
    { q: 'Sind Sie herstellerunabhängig?', a: 'Ja, wir parametrieren und dokumentieren herstellerunabhängig.' },
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
            <button className="flex w-full items-center gap-3 px-4 py-4 text-left" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span
            aria-hidden
            className={['h-8 w-1 rounded-full', open ? 'bg-gradient-to-b' : 'bg-neutral-200'].join(' ')}
            style={open ? { backgroundImage: 'linear-gradient(180deg, var(--accent-500), var(--accent-400), var(--accent-600))' } : undefined}
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
