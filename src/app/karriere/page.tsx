// src/app/karriere/page.tsx
import Link from "next/link";
import {
    Briefcase,
    MapPin,
    Shield,
    Wrench,
    Sparkles,
    ArrowRight,
    Mail,
} from "lucide-react";

/**
 * Karriere – kompakt & klar
 * - Zentrierter Hero mit Eyebrow + Aurora-Ribbon
 * - Zwei kompakte Job-Boxen (max-w-5xl), mit zartem Gradient-Frame
 * - Fakten: 3 Pill-Boxen in einer Reihe (ab sm), kompakter
 * - Abschnitte als Fließtext, fette Zwischenüberschriften
 * - Dezente Mikro-Animationen (respect prefers-reduced-motion)
 */

export default function KarrierePage() {
    const today = new Date().toISOString().split("T")[0];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "JobPosting",
                title: "Aufzugsmonteur (m/w/d) – Kundendienst",
                description:
                    "Wartung, Inspektion und Reparatur von Aufzugsanlagen im Bestand. Strukturierte Dokumentation, geregelte Bereitschaft. Region Berlin & Brandenburg.",
                datePosted: today,
                employmentType: "FULL_TIME",
                hiringOrganization: { "@type": "Organization", name: "MAK Fördertechnik" },
                jobLocation: {
                    "@type": "Place",
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: "Berlin",
                        addressRegion: "Berlin/Brandenburg",
                        addressCountry: "DE",
                    },
                },
            },
            {
                "@type": "JobPosting",
                title: "Aufzugsmonteur (m/w/d) – Neu- & Umbau",
                description:
                    "Montage, Modernisierung und Inbetriebnahme von Aufzugsanlagen. Strukturierte Prüfungen und Übergabe. Region Berlin & Brandenburg.",
                datePosted: today,
                employmentType: "FULL_TIME",
                hiringOrganization: { "@type": "Organization", name: "MAK Fördertechnik" },
                jobLocation: {
                    "@type": "Place",
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: "Berlin",
                        addressRegion: "Berlin/Brandenburg",
                        addressCountry: "DE",
                    },
                },
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main data-theme="ocean" className="min-h-screen bg-neutral-50 text-neutral-900">
                {/* HERO */}
                <section className="relative border-b bg-white pt-[calc(var(--header-h,64px)+28px)] pb-8 md:pb-10">
                    {/* Aurora-Ribbon */}
                    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                        <div className="mx-auto mt-12 h-48 w-[820px] max-w-[92%] rounded-full bg-gradient-to-r from-sky-200/40 via-cyan-200/30 to-blue-200/40 blur-3xl" />
                    </div>

                    <Container>
                        <div className="mx-auto max-w-3xl text-center">
                            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--tint-border)] bg-[var(--tint-bg)] px-3 py-1 text-xs font-semibold text-[var(--tint-text)]">
                                <Briefcase className="size-3.5" />
                                Wir stellen ein
                                <span
                                    aria-hidden
                                    className="ml-1 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500/85 motion-safe:animate-pulse"
                                />
                            </div>

                            <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">
                                Karriere bei MAK Fördertechnik
                            </h1>

                            <div
                                aria-hidden
                                className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500"
                            />

                            <p className="mx-auto mt-4 max-w-[40ch] text-[15px] text-neutral-700">
                                Aufzugsmonteure (m/w/d) für Kundendienst sowie Neu- & Umbau in Berlin/Brandenburg.
                            </p>

                            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                                <CTA href="#jobs" primary>
                                    Offene Stellen <ArrowRight className="size-4" />
                                </CTA>
                                <CTA href="/kontakt#karriere">Kurzbewerbung</CTA>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* JOBS */}
                <section id="jobs" className="bg-neutral-50 py-14 md:py-20 anchor-offset">
                    <Container>
                        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 md:gap-6">
                            <JobCard
                                id="kundendienst"
                                accent="ocean"
                                title="Aufzugsmonteur (m/w/d) – Kundendienst"
                                teaser="Sie halten Bestandsanlagen verlässlich am Laufen. Wartung, Inspektion und Reparatur – mit klaren Prozessen und sauberer Dokumentation."
                                facts={[
                                    { k: "Art", v: "Vollzeit" },
                                    { k: "Bereich", v: "Kundendienst" },
                                    { k: "Erfahrung", v: "Berufserfahrung" },
                                ]}
                                role="Sie prüfen, warten und reparieren Aufzüge nach Hersteller- und Normvorgaben. Störungen analysieren Sie strukturiert, koordinieren Maßnahmen und übergeben die Anlage transparent dokumentiert."
                                profile="Elektro-/Mechatronik-Ausbildung oder ähnlich, Erfahrung im Aufzugsdienst und sicherer Umgang mit Schaltplänen. Führerschein B, verlässliche Kommunikation in Deutsch."
                                benefits={[
                                    { icon: Shield, label: "Unbefristet & fair" },
                                    { icon: Wrench, label: "Fahrzeug & Werkzeug" },
                                    { icon: Sparkles, label: "Weiterbildung" },
                                ]}
                            />

                            <JobCard
                                id="neuumbau"
                                accent="teal"
                                title="Aufzugsmonteur (m/w/d) – Neu- & Umbau"
                                teaser="Sie bauen modernste Technik ein und nehmen Anlagen in Betrieb. Montage, Modernisierung und Funktionsprüfungen – präzise und effizient."
                                facts={[
                                    { k: "Art", v: "Vollzeit" },
                                    { k: "Bereich", v: "Neu- & Umbau" },
                                    { k: "Erfahrung", v: "von Vorteil" },
                                ]}
                                role="Sie demontieren Altkomponenten, montieren und verdrahten neue Baugruppen, führen Prüfungen durch und übergeben die Anlage strukturiert an den Betrieb."
                                profile="Ausbildung in Elektro/Mechanik/Mechatronik, idealerweise Erfahrung im Neu-/Umbau. Sorgfalt, Sicherheitsbewusstsein und Teamfähigkeit zeichnen Sie aus. Führerschein B."
                                benefits={[
                                    { icon: Shield, label: "Sicherer Arbeitgeber" },
                                    { icon: Wrench, label: "Gute Ausstattung" },
                                    { icon: Sparkles, label: "Herstellertrainings" },
                                ]}
                            />
                        </div>
                    </Container>
                </section>
            </main>
        </>
    );
}

/* ======================================================================
   Bausteine
   ====================================================================== */

function Container({ children }: { children: React.ReactNode }) {
    return <div className="container mx-auto max-w-6xl px-4">{children}</div>;
}

function CTA({
                 href,
                 children,
                 primary,
             }: {
    href: string;
    children: React.ReactNode;
    primary?: boolean;
}) {
    const base =
        "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color-mix(in oklab,var(--accent-400)45%,transparent)] motion-safe:active:scale-[0.99]";
    const style = primary
        ? "bg-gradient-to-r from-[var(--accent-600)] to-[var(--accent-400)] text-white"
        : "bg-white text-[var(--accent-700)] border border-neutral-200 hover:shadow-sm";
    return (
        <Link href={href} className={`${base} ${style}`}>
            {children}
        </Link>
    );
}

function AccentBarSmall({ accent = "ocean" }: { accent?: "ocean" | "teal" }) {
    const gradient =
        accent === "teal"
            ? "linear-gradient(90deg, var(--accent-500), #22c55e, #14b8a6)"
            : "linear-gradient(90deg, var(--accent-500), var(--accent-400), var(--accent-300))";
    return (
        <div
            aria-hidden
            className="h-1 w-14 rounded-full mx-auto"
            style={{ background: gradient }}
        />
    );
}

/**
 * JobCard – kompakte Version
 * - Schlankere Paddings & Typo
 * - Gradient-Frame + zarte Card-Surface
 * - Fakten als kompakte Pills (3 Spalten ab sm)
 * - Dezente Farbakzente über `accent`
 */
function JobCard({
                     id,
                     title,
                     teaser,
                     facts,
                     role,
                     profile,
                     benefits,
                     accent = "ocean",
                 }: {
    id: string;
    title: string;
    teaser: string;
    facts: { k: string; v: string }[];
    role: string;
    profile: string;
    benefits: { icon: React.ComponentType<{ className?: string }>; label: string }[];
    accent?: "ocean" | "teal";
}) {
    const frame =
        accent === "teal"
            ? "from-[color-mix(in_oklab,#14b8a6_18%,transparent)] to-[color-mix(in_oklab,#22c55e_10%,transparent)]"
            : "from-[color-mix(in_oklab,var(--accent-400)_14%,transparent)] to-[color-mix(in_oklab,var(--accent-300)_8%,transparent)]";

    return (
        <article
            id={id}
            className={`group relative rounded-3xl p-[1px] bg-gradient-to-br ${frame}`}
        >
            <div className="relative h-full rounded-3xl border border-neutral-200 bg-white/95 p-6 shadow-sm transition will-change-transform group-hover:-translate-y-0.5 group-hover:shadow-md md:p-7">
                {/* Header */}
                <header className="text-center">
                    <h3 className="text-[17px] md:text-lg font-semibold leading-tight">{title}</h3>
                    <div className="mt-2">
                        <AccentBarSmall accent={accent} />
                    </div>
                    <p className="mt-2.5 mx-auto max-w-[50ch] text-[14.5px] text-neutral-700">{teaser}</p>
                </header>

                {/* Fakten – kompakter, 3 Spalten ab sm */}
                <dl className="mt-5 mx-auto grid w-full max-w-[620px] grid-cols-1 gap-2.5 sm:grid-cols-3">
                    {facts.map(({ k, v }) => (
                        <div
                            key={k}
                            className="min-w-0 rounded-xl border border-neutral-200 bg-neutral-50/80 px-2.5 py-1.5 text-center"
                        >
                            <dt className="text-[11.5px] font-medium text-neutral-500 leading-snug break-words">
                                {k}
                            </dt>
                            <dd className="mt-0.5 text-[13.5px] font-semibold text-neutral-900 leading-snug break-words">
                                {v}
                            </dd>
                        </div>
                    ))}
                </dl>

                {/* Inhalte */}
                <section className="mt-5 space-y-5">
                    <div className="mx-auto max-w-[58ch]">
                        <h4 className="text-center text-[13.5px] font-bold text-[var(--accent-700)] tracking-wide">
                            Ihre Rolle
                        </h4>
                        <p className="mt-1.5 text-[14.5px] leading-relaxed text-neutral-800 text-center md:text-left">
                            {role}
                        </p>
                    </div>
                    <div className="mx-auto max-w-[58ch]">
                        <h4 className="text-center text-[13.5px] font-bold text-[var(--accent-700)] tracking-wide">
                            Ihr Profil
                        </h4>
                        <p className="mt-1.5 text-[14.5px] leading-relaxed text-neutral-800 text-center md:text-left">
                            {profile}
                        </p>
                    </div>
                </section>

                {/* Benefits */}
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                    {benefits.map(({ icon: Icon, label }) => (
                        <span
                            key={label}
                            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--tint-border)] bg-[var(--tint-bg)] px-2.5 py-1 text-[12.5px] font-semibold text-[var(--tint-text)]"
                        >
              <Icon className="size-3.5" />
                            {label}
            </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 pt-5">
                    <div className="inline-flex items-center gap-2 text-[13.5px] text-neutral-600">
                        <MapPin className="size-4" />
                        Berlin/Brandenburg
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <CTA href="/kontakt#karriere">Kurzbewerbung</CTA>
                        <a
                            className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3.5 py-2 text-sm transition hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color-mix(in oklab,var(--accent-400)45%,transparent)] motion-safe:active:scale-[0.99]"
                            href="mailto:jobs@mak-foerdertechnik.de?subject=Bewerbung%20Aufzugsmonteur"
                        >
                            <Mail className="size-4" />
                            E-Mail
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}
