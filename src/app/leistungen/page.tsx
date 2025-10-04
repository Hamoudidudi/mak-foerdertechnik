// src/app/leistungen/page.tsx
'use client';

/**
 * /leistungen – Übersicht
 * Ocean-Theme, oben Einzelseiten (inkl. „Planung & Beratung“), unten Kategorien mit Suche.
 * WICHTIG: Slugs passen jetzt zu deinen Ordnern (beratung-planung, wartung-service).
 */

import * as React from 'react';
import Link from 'next/link';
import {
    ArrowUpDown,
    MoveRight,
    Car,
    Ruler,
    Wrench,
    Shield,
    Download,
    Search,
    ChevronRight,
    Accessibility,
    Gauge,
    FileWarning,
    X,
} from 'lucide-react';
import FAQ from '@/components/Faq'; // ✅ Fix: case-sensitiver Pfad (statt '@/components/FAQ')

/* ----------------------------- Typen ----------------------------- */

type Category = 'Aufzüge' | 'Fahrtreppen' | 'Fahrsteige' | 'Autoparksysteme' | 'Planung';

type ServiceItem = {
    id: string;
    title: string;
    description: string;
    category: Category;
    tags: string[];
    href: string;
};

/* ---------------------- Einzelseiten (oben) ---------------------- */

const SINGLE_PAGES = [
    {
        slug: '/leistungen/wartung-service', // ✅
        title: 'Wartung & 24/7-Service',
        text: 'Präventive Wartung, SLAs, Störungsdienst und Remote-Diagnose.',
        Icon: Shield,
        ribbon: 'from-lime-500 via-emerald-500 to-teal-500',
    },
    {
        slug: '/leistungen/modernisierung',
        title: 'Modernisierung',
        text: 'Retrofit von Antrieb, Steuerung und Kabine – mit Minimal-Stillstand.',
        Icon: Wrench,
        ribbon: 'from-cyan-500 via-sky-500 to-blue-500',
    },
    {
        slug: '/leistungen/barrierefreiheit',
        title: 'Barrierefreiheit',
        text: 'A11y-Upgrades, Bedienelemente, taktile/visuelle Leitsysteme.',
        Icon: Accessibility,
        ribbon: 'from-indigo-500 via-sky-500 to-cyan-500',
    },
    {
        slug: '/leistungen/en-81-80',
        title: 'EN 81-80 (GA)',
        text: 'Gefährdungsanalyse, Maßnahmenkatalog, Priorisierung und Umsetzung.',
        Icon: FileWarning,
        ribbon: 'from-rose-500 via-red-500 to-orange-500',
    },
    {
        slug: '/leistungen/brandfallsteuerung',
        title: 'Brandfallsteuerung',
        text: 'Szenarien planen, Komponenten parametrieren, Abnahme begleiten.',
        Icon: Shield,
        ribbon: 'from-orange-500 via-amber-500 to-yellow-500',
    },
    {
        slug: '/leistungen/energieeffizienz',
        title: 'Energieeffizienz',
        text: 'Verbrauch senken: Antrieb, Steuerung, LED, Standby-Konzepte.',
        Icon: Gauge,
        ribbon: 'from-emerald-500 via-teal-500 to-green-500',
    },
    {
        slug: '/leistungen/beratung-planung', // ✅ FIX (vorher planung-beratung)
        title: 'Planung & Beratung',
        text: 'Analyse, Ausschreibung, BIM/CAD, LCC & Betreiberpflichten.',
        Icon: Ruler,
        ribbon: 'from-fuchsia-500 via-violet-500 to-purple-500',
    },
] as const;

/* ---------- Übergeordnete Leistungen (unten, keine Duplikate) ---- */

const TOP_SERVICES: ServiceItem[] = [
    {
        id: 'ts1',
        title: 'Personen- & Lastenaufzüge',
        description:
            'Neuanlagen, energieeffiziente Steuerungen, Premium-Kabinen, barrierearme Lösungen.',
        category: 'Aufzüge',
        tags: ['Neuanlage', 'Komfort', 'Effizienz'],
        href: '/kontakt',
    },
    {
        id: 'ts2',
        title: 'Fahrtreppen',
        description:
            'Hohe Verfügbarkeit für Retail, ÖPNV & Flughäfen – robust, leise, normkonform.',
        category: 'Fahrtreppen',
        tags: ['ÖPNV', 'Retail', 'Sicherheit'],
        href: '/kontakt',
    },
    {
        id: 'ts3',
        title: 'Fahrsteige',
        description:
            'Bequeme horizontale Förderung großer Distanzen – effizient & komfortabel.',
        category: 'Fahrsteige',
        tags: ['Effizienz', 'Komfort', 'Leise'],
        href: '/kontakt',
    },
    {
        id: 'ts4',
        title: 'Autoparksysteme',
        description:
            'Platzsparend und smart – halb-/vollautomatische Systeme mit Remote-Support.',
        category: 'Autoparksysteme',
        tags: ['Smart', 'Platzsparend', 'Remote'],
        href: '/kontakt',
    },
    {
        id: 'ts5',
        title: 'Planung & Beratung',
        description:
            'Machbarkeitsanalyse, Ausschreibung, BIM/CAD, Lebenszyklus-Kosten, Betreiberpflichten.',
        category: 'Planung',
        tags: ['Ausschreibung', 'BIM', 'LCC'],
        href: '/leistungen/beratung-planung', // ✅ FIX (vorher planung-beratung)
    },
];

/* --------------------- Kategorie-Metadaten (Icons) ---------------- */

const CATEGORY_META: Record<
    Category,
    { Icon: React.ComponentType<{ size?: number; className?: string }>; ribbon: string }
> = {
    Aufzüge: { Icon: ArrowUpDown, ribbon: 'from-sky-500 via-cyan-500 to-blue-500' },
    Fahrtreppen: { Icon: MoveRight, ribbon: 'from-emerald-500 via-teal-500 to-green-500' },
    Fahrsteige: { Icon: MoveRight, ribbon: 'from-indigo-500 via-sky-500 to-cyan-500' },
    Autoparksysteme: { Icon: Car, ribbon: 'from-amber-500 via-yellow-500 to-orange-500' },
    Planung: { Icon: Ruler, ribbon: 'from-fuchsia-500 via-violet-500 to-purple-500' },
};

const CATEGORIES: Category[] = ['Aufzüge', 'Fahrtreppen', 'Fahrsteige', 'Autoparksysteme', 'Planung'];

/* ============================ Seite ============================== */

export default function LeistungenPage() {
    const [query, setQuery] = React.useState('');
    const [selectedCats, setSelectedCats] = React.useState<Category[]>([]);

    const toggleCat = (c: Category) =>
        setSelectedCats((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));

    const clearFilters = () => {
        setSelectedCats([]);
        setQuery('');
    };

    const filtered = React.useMemo(() => {
        const q = query.trim().toLowerCase();
        const byText = (s: ServiceItem) =>
            !q ||
            s.title.toLowerCase().includes(q) ||
            s.description.toLowerCase().includes(q) ||
            s.tags.some((t) => t.toLowerCase().includes(q)) ||
            s.category.toLowerCase().includes(q);

        const byCat = (s: ServiceItem) => selectedCats.length === 0 || selectedCats.includes(s.category);

        return TOP_SERVICES.filter((s) => byText(s) && byCat(s));
    }, [query, selectedCats]);

    const [inView, setInView] = React.useState(false);
    const processRef = React.useRef<HTMLUListElement | null>(null);
    React.useEffect(() => {
        const el = processRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
            { threshold: 0.2 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <main data-theme="ocean" className="min-h-screen bg-neutral-50 text-neutral-900">
            {/* HERO */}
            <section className="relative border-b bg-white">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 opacity-40"
                    style={{
                        background:
                            'radial-gradient(60% 60% at 20% 20%, rgba(56,189,248,.20) 0%, rgba(56,189,248,0) 70%), radial-gradient(60% 60% at 80% 30%, rgba(59,130,246,.18) 0%, rgba(59,130,246,0) 70%)',
                    }}
                />
                <div className="container mx-auto max-w-6xl px-4 py-14 md:py-18 text-center">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 shadow-sm">
                        Leistungen
                    </div>


                    <h1 className="bg-gradient-to-r from-sky-500 via-cyan-900 to-blue-950 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl">
                        Fördertechnik für heute – und morgen
                    </h1>
                    <p className="mx-auto mt-4 max-w-3xl text-neutral-700">
                        Aufzüge, Fahrtreppen, Fahrsteige & Autoparksysteme – plus Planung, GA nach EN 81-80,
                        Brandfallsteuerung, Modernisierung, Barrierefreiheit & Energieeffizienz.
                    </p>
                    <div
                        aria-hidden
                        className="mx-auto mt-5 h-1 w-32 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500 [background-size:200%_100%] transition-[background-position] duration-700 hover:[background-position:100%_0]"
                    />
                </div>

                {/* Sticky Subnav */}
                <nav
                    aria-label="Leistungen Untermenü"
                    className="sticky top-[var(--header-h)] z-30 border-t border-b border-black/10 bg-white/80 backdrop-blur"
                    style={{ ['--subnav-h' as any]: '52px' }} // ✅ Fix: Subnav-Höhe für anchor-offset/scroll-margin-top
                >
                    <div className="container mx-auto max-w-6xl px-4">
                        <ul className="flex justify-center gap-2 overflow-x-auto py-2">
                            <li><a className="pill anchor-offset" href="#einzelseiten">Einzelseiten</a></li>
                            <li><a className="pill anchor-offset" href="#leistungen">Leistungen</a></li>
                            <li><a className="pill anchor-offset" href="#prozess">Prozess</a></li>
                            <li><a className="pill anchor-offset" href="#faq">FAQ</a></li>
                            <li><a className="pill anchor-offset" href="#kontakt">Kontakt</a></li>
                        </ul>
                    </div>
                </nav>
            </section>

            {/* EINZELSEITEN */}
            <section id="einzelseiten" className="anchor-offset bg-neutral-50">
                <div className="container mx-auto max-w-6xl px-4 py-10 md:py-14">
                    <h2 className="text-center text-2xl font-bold md:text-3xl">Einzelseiten</h2>
                    <div aria-hidden className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500" />

                    {/* Chips */}
                    <div className="mx-auto mt-6 flex flex-wrap justify-center gap-2">
                        {SINGLE_PAGES.map(({ slug, title }) => (
                            <Link
                                key={slug}
                                href={slug}
                                className="pill bg-white hover:bg-sky-50 border border-neutral-200 shadow-sm"
                                aria-label={`${title} öffnen`}
                            >
                                {title}
                            </Link>
                        ))}
                    </div>

                    {/* Grid */}
                    <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
                        {SINGLE_PAGES.map(({ slug, title, text, Icon, ribbon }) => (
                            <li
                                key={slug}
                                className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                            >
                                <div className={`h-1 w-full bg-gradient-to-r ${ribbon}`} aria-hidden />
                                <div className="mt-4 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                    <Icon size={20} />
                  </span>
                                    <h3 className="text-lg font-semibold">{title}</h3>
                                </div>
                                <p className="mt-2 text-neutral-600">{text}</p>
                                <div className="mt-4">
                                    <Link
                                        href={slug}
                                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 px-3 py-2 text-sm text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
                                    >
                                        Mehr erfahren <ChevronRight size={16} />
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* LEISTUNGEN */}
            <section id="leistungen" className="anchor-offset border-t bg-white">
                <div className="container mx-auto max-w-6xl px-4 py-10 md:py-14">

                    {/* ✅ NEU: Titel über der Suche */}
                    <div className="text-center">
                        <h2 className="text-2xl font-bold md:text-3xl">Weitere Leistungen</h2>
                        <div
                            aria-hidden
                            className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500"
                        />
                    </div>

                    {/* Suche */}
                    <div className="mt-8 flex flex-col items-center gap-4">
                        <label className="relative block w-full md:max-w-2xl">
                            <span className="sr-only">Leistungen durchsuchen</span>
                            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-60" size={18} />
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Suche nach Titel, Beschreibung…"
                                className="w-full rounded-xl border border-neutral-300 bg-white py-2 pl-9 pr-10 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40"
                                aria-label="Leistungen durchsuchen"
                            />
                            {(query || selectedCats.length > 0) && (
                                <button
                                    type="button"
                                    onClick={clearFilters}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-neutral-500 hover:bg-neutral-100"
                                    aria-label="Filter zurücksetzen"
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </label>

                        {/* Kategorie-Chips */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {CATEGORIES.map((c) => {
                                const active = selectedCats.includes(c);
                                return (
                                    <button
                                        key={c}
                                        type="button"
                                        onClick={() => toggleCat(c)}
                                        className={`pill transition ${active ? 'bg-sky-50 ring-2 ring-sky-500/60 text-neutral-900' : 'hover:bg-sky-50'}`}
                                        aria-pressed={active}
                                        aria-label={`Kategorie filtern: ${c}`}
                                    >
                                        {c}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Dotted Divider */}
                    <div className="my-6 h-6 rounded-md dotted" aria-hidden />

                    {/* Ergebnis-Zähler */}
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-neutral-600">
                            {filtered.length} {filtered.length === 1 ? 'Leistung' : 'Leistungen'}
                        </p>
                        <p className="text-xs text-neutral-500">Tipp: Kategorien kombinieren (UND-Filter)</p>
                    </div>

                    {/* Karten */}
                    <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
                        {filtered.length === 0 && (
                            <li className="col-span-full rounded-2xl border border-neutral-200 bg-white p-6 text-neutral-600">
                                Nichts gefunden. Begriffe ändern oder Filter löschen.
                            </li>
                        )}
                        {filtered.map((s) => {
                            const { Icon, ribbon } = CATEGORY_META[s.category];
                            return (
                                <li
                                    key={s.id}
                                    className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                                >
                                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${ribbon}`} aria-hidden />
                                    <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700">
                <Icon size={20} />
              </span>
                                        <div className="min-w-0">
                                            <h3 className="text-base font-semibold text-neutral-900">{s.title}</h3>
                                            <p className="mt-1 line-clamp-3 text-sm text-neutral-700">{s.description}</p>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700">{s.category}</span>
                                                {s.tags.map((t) => (
                                                    <span key={t} className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700">{t}</span>
                                                ))}
                                            </div>
                                            <div className="mt-4">
                                                <Link
                                                    href={s.href}
                                                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 px-3 py-2 text-sm text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
                                                    aria-label={`${s.title} – Kontakt / Details`}
                                                >
                                                    Kontakt <ChevronRight size={16} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute inset-x-0 bottom-0 h-10 translate-y-6 bg-gradient-to-t from-sky-100/0 via-sky-100/40 to-transparent opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                                    />
                                </li>
                            );
                        })}
                    </ul>

                    {/* Downloads-Teaser (unverändert) */}
                    <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-neutral-8 00">
                        <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
                            <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
            <Download size={20} />
          </span>
                                <div>
                                    <div className="font-semibold">Downloads & Vorlagen</div>
                                    <div className="text-sm text-neutral-600">
                                        Broschüren, Checklisten, Normbezüge & Formulare – alles an einem Ort.
                                    </div>
                                </div>
                            </div>
                            <Link
                                href="/downloads"
                                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-sky-700 shadow-sm transition hover:shadow-md md:mt-0"
                            >
                                Zur Downloads-Seite
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* PROZESS */}
            <section id="prozess" className="anchor-offset border-t bg-neutral-50">
                <div className="container mx-auto max-w-6xl px-4 py-10 md:py-14 text-center">
                    <h2 className="text-2xl font-bold md:text-3xl">So arbeiten wir</h2>
                    <div aria-hidden className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500" />
                    <ul
                        ref={processRef}
                        className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4"
                        role="list"
                    >
                        {[
                            { title: 'Planung', text: 'Analyse, Konzept, Ausschreibung, BIM/CAD.', Icon: Ruler },
                            { title: 'Montage', text: 'Koordination, Terminierung, Qualitätssicherung.', Icon: Wrench },
                            { title: 'Abnahme', text: 'EN 81-80, Brandfall, Dokumentation, Schulung.', Icon: Shield },
                            { title: 'Betrieb', text: 'Wartung, 24/7-Störung, Modernisierung.', Icon: Shield },
                        ].map(({ title, text, Icon }, i) => (
                            <li
                                key={title}
                                className={[
                                    'rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition',
                                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
                                ].join(' ')}
                                style={{ transition: `opacity .5s ${0.1 + i * 0.08}s, transform .5s ${0.1 + i * 0.08}s` }}
                            >
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                                    <Icon size={22} />
                                </div>
                                <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                                <p className="mt-2 text-sm text-neutral-600">{text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="anchor-offset bg-white">
                <div className="container mx-auto max-w-6xl px-4 py-10 md:py-14 text-center">
                    <h2 className="text-2xl font-bold md:text-3xl">Häufige Fragen</h2>
                    <div
                        aria-hidden
                        className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500"
                    />
                    <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
                        Antworten auf häufige Fragen rund um Aufzüge, Fahrtreppen, Fahrsteige und Autoparksysteme – von EN 81-80 bis 24/7-Service.
                    </p>
                    <FAQ
                        showHeader={false}
                        items={[
                            { q: 'Welche Branchen betreut ihr?', a: 'Vom Wohn- und Bürogebäude über Retail/Verkehr bis zu Parkhäusern. Wir passen Technik und Service an Nutzung und Frequenzen an.' },
                            { q: 'Wie läuft eine Modernisierung ab?', a: 'Wir starten mit einer Analyse (inkl. EN 81-80), priorisieren Maßnahmen und modernisieren modular (Steuerung, Antrieb, Kabine), um Stillstände zu minimieren.' },
                            { q: 'Bietet ihr 24/7-Störungsdienst?', a: 'Ja. Über unsere Hotline erreichen Sie uns rund um die Uhr. Remote-Diagnose verkürzt Reaktionszeiten, Techniker sind schnell vor Ort.' },
                            { q: 'Unterstützt ihr bei Brandfallsteuerung?', a: 'Wir planen Szenarien, liefern/parametrieren Komponenten, begleiten die Abnahme und dokumentieren normkonform.' },
                        ]}
                        multiOpen
                    />
                </div>
            </section>

            {/* KONTAKT */}
            <section id="kontakt" className="anchor-offset border-t bg-neutral-50">
                <div className="container mx-auto max-w-6xl px-4 py-10 md:py-14 text-center">
                    <h2 className="text-2xl font-bold md:text-3xl">Passt zu Ihrem Projekt?</h2>
                    <p className="mx-auto mt-3 max-w-prose text-neutral-600">
                        Senden Sie uns kurz die Eckdaten – wir melden uns schnell und konkret.
                    </p>
                    <div className="mt-6">
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 px-5 py-3 text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
                        >
                            Kontakt aufnehmen <ChevronRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
