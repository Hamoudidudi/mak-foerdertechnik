// src/components/StartSections.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import {
    LifeBuoy,
    PlugZap,
    Sparkles,
    Shield,
    Gauge,
    Battery,
    Clock,
    PhoneCall,
    ChevronRight,
    Star,
    Sparkles as SparkleIcon,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

/**
 * StartSections – unter der Marquee
 * - Nur Divider überarbeitet: zarte, neutrale Doppellinie (kein Glow/keine Fläche)
 * - PromoBadge entfernt, Feature-Liste im Banner bleibt mit sanftem Hover
 * - Headline-Gradient bleibt dezent
 */

export default function StartSections() {
    return (
        <>
            {/* 1) PromoBanner */}
            <Section bg="white">
                <Reveal>
                    <PromoBanner />
                </Reveal>
            </Section>

            <SectionDivider />

            {/* 2) Schnellzugriff */}
            <Section bg="white">
                <Reveal>
                    <Header
                        title="Schnell zum Ziel"
                        intro="Was brauchen Sie gerade? Wir sind direkt da – ohne Umwege."
                        icon={SparkleIcon}
                    />
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <QuickCard
                            href="/leistungen/wartung-service"
                            icon={LifeBuoy}
                            title="Wartung & 24/7"
                            desc="Reaktionszeit, Notruf, Dokumentation."
                            chip="Service"
                        />
                        <QuickCard
                            href="/leistungen/modernisierung"
                            icon={PlugZap}
                            title="Modernisierung"
                            desc="Steuerung, Antrieb, Türen & Kabine."
                            chip="Upgrade"
                        />
                        <QuickCard
                            href="/leistungen/barrierefreiheit"
                            icon={Sparkles}
                            title="Barrierefreiheit"
                            desc="Kontrast, Anzeigen, Türsensorik."
                            chip="Komfort"
                        />
                        <QuickCard
                            href="/leistungen/en-81-80"
                            icon={Shield}
                            title="EN 81-80 Check"
                            desc="Risiken priorisieren, Maßnahmenplan."
                            chip="Sicherheit"
                        />
                    </div>
                </Reveal>
            </Section>

            <SectionDivider />

            {/* 3) Differenzierer + KPIs */}
            <Section bg="neutral">
                <Reveal>
                    <Header title="Warum MAK Fördertechnik?" icon={Star} />
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        <ValueCard
                            icon={SparkleIcon}
                            title="Herstellerunabhängig"
                            text="Wir wählen, was zu Ihrer Anlage passt – objektiv, transparent, normkonform."
                            badge="Neutral"
                        />
                        <ValueCard
                            icon={Clock}
                            title="Schnell & planbar"
                            text="Klare Reaktionszeiten, saubere Terminierung, dokumentierte Übergaben."
                            badge="24/7"
                        />
                        <ValueCard
                            icon={Battery}
                            title="Wirtschaftlich"
                            text="Energie & Standzeiten im Blick – Maßnahmen mit echter Wirkung."
                            badge="Effizienz"
                        />
                    </div>
                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                        <Kpi label="Ø Kundenzufriedenheit" value="97 %" />
                        <Kpi label="Notruf / Störung" value="≤ 60 min" />
                        <Kpi label="Ø Energieeinsparung" value="10–30 %" />
                    </div>
                </Reveal>
            </Section>

            <SectionDivider />

            {/* 4) Leistungen-Preview */}
            <Section bg="white">
                <Reveal>
                    <Header
                        title="Leistungen im Überblick"
                        intro="Alles aus einem Guss – von der Analyse bis zur Umsetzung."
                        icon={SparkleIcon}
                    />
                    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
                        {SERVICES.map((s) => (
                            <li
                                key={s.href}
                                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--tint-border)] hover:shadow-md"
                            >
                                {/* weiches Licht oben rechts */}
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full blur-2xl opacity-20"
                                    style={{
                                        background:
                                            "radial-gradient(60% 60% at 50% 50%, color-mix(in oklab, var(--accent-300) 40%, transparent), transparent)",
                                    }}
                                />
                                <div className="flex items-start gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl border border-[var(--tint-border)] bg-[var(--tint-bg)] text-[var(--tint-text)]">
                    <s.icon className="size-5" />
                  </span>
                                    <div className="min-w-0">
                                        <h3 className="font-semibold text-neutral-900">{s.title}</h3>
                                        <p className="mt-1 text-sm text-neutral-700">{s.text}</p>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <AccentBar />
                                    <Link
                                        href={s.href}
                                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent-600)]"
                                    >
                                        Mehr <ChevronRight className="size-4" />
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </Section>

            <SectionDivider />

            {/* 5) Testimonials */}
            <Section bg="white">
                <Reveal>
                    <Header title="Was unsere Kunden sagen" icon={Star} />
                </Reveal>
                <Reveal>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <Testimonial
                            quote="Seit der Modernisierung laufen die Anlagen merklich ruhiger – und das Team ist bei Fragen sofort erreichbar."
                            author="WEG-Verwaltung Mitte"
                            rating={5}
                        />
                        <Testimonial
                            quote="Transparente Planung, klare Abläufe, schnelle Reaktion bei Störungen. So macht Zusammenarbeit Sinn."
                            author="Gewerbekunde Berlin"
                            rating={5}
                        />
                    </div>
                </Reveal>
            </Section>

            <SectionDivider />

            {/* 6) Abschluss-CTA */}
            <Section bg="neutral">
                <Reveal>
                    <CtaBanner />
                </Reveal>
            </Section>
        </>
    );
}

/* -------------------------- Daten -------------------------- */
const SERVICES = [
    { href: "/leistungen/wartung-service", icon: LifeBuoy, title: "Wartung & 24/7", text: "Reaktionszeit, Notruf, Dokumentation." },
    { href: "/leistungen/modernisierung", icon: PlugZap, title: "Modernisierung", text: "Steuerung, Antrieb, Türen, Kabine." },
    { href: "/leistungen/barrierefreiheit", icon: Sparkles, title: "Barrierefreiheit", text: "Kontrast, Anzeigen, Türsensorik." },
    { href: "/leistungen/en-81-80", icon: Shield, title: "EN 81-80", text: "Risiken priorisieren, Maßnahmenplan." },
    { href: "/leistungen/brandfallsteuerung", icon: Shield, title: "Brandfallsteuerung", text: "Abläufe definieren & testen." },
    { href: "/leistungen/energieeffizienz", icon: Gauge, title: "Energieeffizienz", text: "Verbrauch senken – messbar." },
];

/* ---------------------- Bausteine & Helfer ---------------------- */

function Section({ children, bg }: { children: React.ReactNode; bg: "white" | "neutral" }) {
    // keine Linien in der Section selbst
    return (
        <section className={bg === "neutral" ? "bg-neutral-50" : "bg-white"}>
            <div className="container mx-auto max-w-6xl px-4 py-12">{children}</div>
        </section>
    );
}

/** Divider – neutrale, sehr subtile DOPPELLINIE; kein Blau, kein Glow */
function SectionDivider() {
    return (
        <div className="my-8" role="separator" aria-hidden="true">
            <div className="h-px w-full bg-neutral-200" />
            <div className="mt-1 h-px w-full bg-neutral-100" />
        </div>
    );
}

function Header({ title, intro, icon: Icon }: { title: string; intro?: string; icon?: React.ElementType }) {
    return (
        <div className="text-center">
            {Icon ? (
                <span className="mx-auto mb-2 inline-flex size-9 items-center justify-center rounded-full border border-[var(--tint-border)] bg-[var(--tint-bg)] text-[var(--tint-text)]">
          <Icon className="size-4" />
        </span>
            ) : null}
            <h2
                className="bg-clip-text text-2xl font-bold text-transparent md:text-3xl"
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, color-mix(in oklab, var(--accent-700) 88%, #4f46e5 12%), var(--accent-500), color-mix(in oklab, var(--accent-600) 82%, #0ea5a4 18%))",
                }}
            >
                {title}
            </h2>
            <AccentBar className="mx-auto mt-3" />
            {intro && <p className="mx-auto mt-3 max-w-prose text-neutral-700">{intro}</p>}
        </div>
    );
}

function AccentBar({ className = "" }: { className?: string }) {
    return (
        <div
            aria-hidden
            className={`h-1 w-24 rounded-full ${className}`}
            style={{
                background: "linear-gradient(90deg, var(--accent-400), var(--accent-300), var(--accent-500))",
                backgroundSize: "200% 100%",
                transition: "background-position .6s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundPosition = "100% 0")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundPosition = "0 0")}
        />
    );
}

function CTA({
                 href,
                 children,
                 ghost,
             }: {
    href: string;
    children: React.ReactNode;
    ghost?: boolean;
}) {
    const base =
        "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color-mix(in oklab,var(--accent-400) 45%,transparent)]";
    const style = ghost
        ? "bg-white text-[var(--accent-600)] border border-neutral-200"
        : "bg-gradient-to-r from-[var(--accent-600)] to-[var(--accent-400)] text-white";
    return (
        <Link href={href} className={`${base} ${style}`}>
            {children}
        </Link>
    );
}

/** Sanfter Reveal */
function Reveal({ children, y = 12 }: { children: React.ReactNode; y?: number }) {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(([entry]) => entry.isIntersecting && setShow(true), {
            threshold: 0.12,
        });
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                opacity: show ? 1 : 0,
                transform: show ? "translateY(0px)" : `translateY(${y}px)`,
                transition: "opacity .5s ease, transform .5s ease",
            }}
        >
            {children}
        </div>
    );
}

/* ---- PromoBanner ------------------------------------------------------- */

function PromoBanner() {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 md:p-10 shadow-sm">
            {/* zartes Licht im Banner (sehr dezent) */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                    background:
                        "radial-gradient(60% 60% at 20% 20%, color-mix(in oklab, var(--accent-300) 28%, transparent), transparent 70%), radial-gradient(50% 40% at 85% 15%, color-mix(in oklab, var(--accent-400) 20%, transparent), transparent 70%)",
                    opacity: 0.5,
                }}
            />
            <div className="grid items-center gap-6 md:grid-cols-12">
                <div className="md:col-span-8">
                    {/* Badge entfernt */}
                    <h3 className="mt-1 text-2xl font-bold md:text-3xl">
                        Spürbar ruhiger Betrieb.{" "}
                        <span className="bg-gradient-to-r from-[var(--accent-700)] via-[var(--accent-500)] to-[var(--accent-600)] bg-clip-text text-transparent">
              Messbar weniger Ausfälle.
            </span>
                    </h3>
                    <p className="mt-3 max-w-2xl text-neutral-700">
                        Wartung, Modernisierung und 24/7-Notruf – aus einer Hand, herstellerunabhängig, mit klarer Dokumentation.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                        <CTA href="/kontakt">
                            Jetzt anfragen <ArrowRight className="size-4" />
                        </CTA>
                        <CTA href="/leistungen" ghost>
                            Leistungen ansehen
                        </CTA>
                    </div>

                    {/* Feature-Liste mit dezentem Hover/Fokus */}
                    <ul className="mt-5 flex flex-wrap gap-3 text-sm text-neutral-700">
                        {["EN- & UVV-konform", "Reaktionszeit ≤ 60 min", "Transparent dokumentiert"].map((t) => (
                            <li
                                key={t}
                                tabIndex={0}
                                className="group inline-flex items-center gap-2 rounded-full px-3 py-1.5 -mx-1 transition
                           hover:bg-[var(--tint-bg)] hover:shadow-[inset_0_0_0_1px_var(--tint-border)]
                           focus:outline-none focus:bg-[var(--tint-bg)] focus:shadow-[inset_0_0_0_1px_var(--tint-border)]"
                            >
                                <CheckCircle2
                                    className="size-4 text-[var(--accent-600)] transition-transform duration-200 group-hover:scale-110 group-focus:scale-110"
                                    aria-hidden="true"
                                />
                                <span>{t}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-4">
                    <div className="rounded-2xl border border-[var(--tint-border)] bg-[var(--tint-bg)] p-5">
                        <div className="flex items-center gap-3">
                            <PhoneCall className="size-6 text-[var(--accent-600)]" />
                            <div>
                                <div className="text-sm font-semibold text-neutral-900">Schneller Draht</div>
                                <div className="text-xs text-neutral-600">Unverbindlich sprechen</div>
                            </div>
                        </div>
                        <p className="mt-3 text-neutral-700">
                            Wir klären Ziele & Rahmen und empfehlen den passenden Weg – inkl. klarem Angebot.
                        </p>
                        <div className="mt-3">
                            <CTA href="/kontakt">
                                Termin vereinbaren <ArrowRight className="size-4" />
                            </CTA>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ---- Schnellzugriff ---------------------------------------------------- */

function QuickCard({
                       href,
                       icon: Icon,
                       title,
                       desc,
                       chip,
                   }: {
    href: string;
    icon: React.ElementType;
    title: string;
    desc: string;
    chip: string;
}) {
    return (
        <Link
            href={href}
            className="group relative block overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--tint-border)] hover:shadow-md"
        >
            <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl opacity-20"
                style={{
                    background:
                        "radial-gradient(60% 60% at 50% 50%, color-mix(in oklab, var(--accent-300) 35%, transparent), transparent)",
                }}
            />
            <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--tint-border)] bg-[var(--tint-bg)] px-2.5 py-1 text-xs font-semibold text-[var(--tint-text)]">
          {chip}
        </span>
                <ChevronRight className="size-4 text-[var(--accent-600)] transition group-hover:translate-x-0.5" />
            </div>
            <div className="mt-3 flex items-center gap-3">
        <span className="inline-flex size-11 items-center justify-center rounded-xl border border-[var(--tint-border)] bg-[var(--tint-bg)] text-[var(--tint-text)]">
          <Icon className="size-5" />
        </span>
                <div>
                    <h3 className="font-semibold text-neutral-900">{title}</h3>
                    <p className="text-sm text-neutral-700">{desc}</p>
                </div>
            </div>
            <AccentBar className="mt-4 opacity-0 transition group-hover:opacity-100" />
        </Link>
    );
}

/* ---- Differenzierer ---------------------------------------------------- */

function ValueCard({
                       icon: Icon,
                       title,
                       text,
                       badge,
                   }: {
    icon: React.ElementType;
    title: string;
    text: string;
    badge: string;
}) {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--tint-border)] hover:shadow-md">
            <div
                aria-hidden
                className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full blur-2xl opacity-20"
                style={{
                    background:
                        "radial-gradient(60% 60% at 50% 50%, color-mix(in oklab, var(--accent-400) 35%, transparent), transparent)",
                }}
            />
            <div className="flex items-center gap-3">
        <span className="inline-flex size-10 items-center justify-center rounded-xl border border-[var(--tint-border)] bg-[var(--tint-bg)] text-[var(--tint-text)]">
          <Icon className="size-5" />
        </span>
                <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{title}</h3>
                    <span className="badge-accent text-[11px]">{badge}</span>
                </div>
            </div>
            <p className="mt-2 text-neutral-700">{text}</p>
            <AccentBar className="mt-4" />
        </div>
    );
}

function Kpi({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-center justify-between rounded-xl border border-[var(--tint-border)] bg-[var(--tint-bg)] px-4 py-2">
            <span className="font-medium text-[var(--tint-text)]">{label}</span>
            <span className="font-semibold text-neutral-900">{value}</span>
        </div>
    );
}

/* ---- Testimonials ------------------------------------------------------ */

function Testimonial({
                         quote,
                         author,
                         rating = 5,
                     }: {
    quote: string;
    author: string;
    rating?: number;
}) {
    return (
        <figure className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full blur-2xl opacity-15"
                style={{
                    background:
                        "radial-gradient(60% 60% at 50% 50%, color-mix(in oklab, var(--accent-300) 35%, transparent), transparent)",
                }}
            />
            <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--tint-border)] bg-[var(--tint-bg)] px-2.5 py-1 text-xs font-semibold text-[var(--tint-text)]">
                    Kundenstimme
                </div>
                <Stars count={rating} />
            </div>
            <blockquote className="mt-3 text-neutral-800">“{quote}”</blockquote>
            <figcaption className="mt-3 text-sm text-neutral-600">— {author}</figcaption>
        </figure>
    );
}

function Stars({ count = 5 }: { count?: number }) {
    const label = `Bewertung: ${count} von 5 Sternen`;
    return (
        <div className="flex items-center gap-0.5 text-[var(--accent-600)]" role="img" aria-label={label}>
            {Array.from({ length: count }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" aria-hidden="true" />
            ))}
        </div>
    );
}

/* ---- Abschluss-CTA ------------------------------------------------------ */

function CtaBanner() {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 md:p-10 shadow-sm">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-60"
                style={{
                    background:
                        "radial-gradient(60% 60% at 15% 20%, color-mix(in oklab, var(--accent-300) 32%, transparent), transparent 70%), radial-gradient(50% 40% at 85% 15%, color-mix(in oklab, var(--accent-400) 24%, transparent), transparent 70%)",
                }}
            />
            <h3
                className="bg-clip-text text-center text-2xl font-bold text-transparent md:text-3xl"
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, var(--accent-700), var(--accent-500), var(--accent-600))",
                }}
            >
                Bereit, Ihre Anlage spürbar besser zu machen?
            </h3>
            <p className="mx-auto mt-3 max-w-prose text-center text-neutral-700">
                Kurzes Gespräch, klare Empfehlung, transparentes Angebot.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <CTA href="/kontakt">
                    Jetzt anfragen <ArrowRight className="size-4" />
                </CTA>
                <CTA href="/leistungen" ghost>
                    Leistungen ansehen
                </CTA>
            </div>
        </div>
    );
}
