// src/app/ueber-uns/page.tsx
'use client';

/**
 * Über uns – MAK Fördertechnik
 * ----------------------------
 * - Hero ohne Bild (mit dezentem Ocean-Ribbon)
 * - Titel konsequent zentriert
 * - Kompetenzen/Kennzahlen mit leichten Hover-Effekten
 * - "Menschen bei MAK": neu – Portrait-Karten mit Gradient-Ring & sanftem Hover
 * - CTA unten konsistent
 */

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowUpDown,
    MoveRight,
    Car,
    ShieldCheck,
    ChevronRight,
} from 'lucide-react';

export default function AboutPage() {
    return (
        <main data-theme="ocean" className="min-h-screen bg-neutral-50 text-neutral-900">
            {/* HERO */}
            <section className="relative border-b bg-white pt-[calc(var(--header-h,64px)+32px)] pb-12">
                {/* dezentes Ocean-Ribbon */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 flex items-start justify-center"
                >
                    <div className="mt-10 h-48 w-[760px] max-w-[92%] rounded-full bg-gradient-to-r from-sky-200/40 via-cyan-200/30 to-blue-200/40 blur-3xl" />
                </div>

                <div className="container mx-auto max-w-4xl px-4 text-center">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                        Über uns
                    </div>
                    <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
                        Fördertechnik mit Verantwortung.
                        <br className="hidden md:block" />
                        <span className="text-transparent bg-gradient-to-r from-sky-700 via-cyan-600 to-blue-700 bg-clip-text">
              Aufzüge · Fahrtreppen · Fahrsteige · Autoparksysteme
            </span>
                    </h1>
                    <div
                        aria-hidden
                        className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500"
                    />
                    <p className="mx-auto mt-6 max-w-prose text-neutral-600">
                        Seit über 100 Jahren entwickeln, modernisieren und betreuen wir Anlagen der vertikalen
                        und horizontalen Mobilität. Unsere Mission: sichere, nachhaltige und innovative Systeme
                        für Menschen von heute und morgen.
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

            {/* WER WIR SIND */}
            <section className="border-b bg-neutral-50">
                <div className="container mx-auto max-w-5xl px-4 py-20">
                    <h2 className="text-center text-2xl font-bold md:text-3xl">Wer wir sind</h2>
                    <div
                        aria-hidden
                        className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500"
                    />
                    <p className="mx-auto mt-6 max-w-3xl text-neutral-700 leading-relaxed text-center md:text-left">
                        MAK Fördertechnik ist ein familiengeführtes Unternehmen mit klarer Spezialisierung auf
                        moderne und zuverlässige Förderanlagen. Ob im Hochhaus, im Einkaufszentrum oder in der
                        Tiefgarage – wir sorgen für sichere und komfortable Bewegung.
                    </p>
                    <ul className="mx-auto mt-4 max-w-3xl list-disc pl-5 text-neutral-700">
                        <li>Aufzüge in allen Varianten und Größen</li>
                        <li>Fahrtreppen &amp; Fahrsteige für hohe Frequenzen</li>
                        <li>Autoparksysteme für effiziente Flächennutzung</li>
                        <li>24/7-Service, Modernisierung &amp; Wartung</li>
                    </ul>
                </div>
            </section>

            {/* KOMPETENZFELDER mit ICONS */}
            <section className="border-b bg-white">
                <div className="container mx-auto max-w-6xl px-4 py-20">
                    <h2 className="text-center text-2xl font-bold md:text-3xl">Unsere Kompetenzfelder</h2>
                    <div
                        aria-hidden
                        className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500"
                    />
                    <ul className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4" role="list">
                        {[
                            {
                                icon: ArrowUpDown,
                                title: 'Aufzüge',
                                text: 'Von Personen- bis Lastenaufzug – sicher & effizient.',
                            },
                            {
                                icon: MoveRight,
                                title: 'Fahrtreppen & Fahrsteige',
                                text: 'Zuverlässige Systeme für Flughäfen, Bahnhöfe & Malls.',
                            },
                            {
                                icon: Car,
                                title: 'Autoparksysteme',
                                text: 'Innovative Lösungen für platzsparendes Parken.',
                            },
                            {
                                icon: ShieldCheck,
                                title: 'Service & Sicherheit',
                                text: 'Wartung, 24/7-Notruf und Modernisierung aus einer Hand.',
                            },
                        ].map(({ icon: Icon, title, text }, idx) => (
                            <li
                                key={idx}
                                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-md"
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

            {/* KENNZAHLEN */}
            <section className="border-b bg-neutral-50">
                <div className="container mx-auto max-w-6xl px-4 py-20">
                    <h2 className="text-center text-2xl font-bold md:text-3xl">Zahlen &amp; Fakten</h2>
                    <div
                        aria-hidden
                        className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500"
                    />
                    <div className="mt-10 grid gap-6 sm:grid-cols-3">
                        {[
                            { n: '100+', label: 'Jahre Erfahrung' },
                            { n: '1000+', label: 'Anlagen betreut' },
                            { n: '24/7', label: 'Service & Notruf' },
                        ].map((s, i) => (
                            <div
                                key={i}
                                className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-md"
                            >
                                <div className="text-3xl font-extrabold text-sky-700">{s.n}</div>
                                <p className="mt-1 text-sm text-neutral-600">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MENSCHEN BEI MAK – NEU */}
            {/* MENSCHEN BEI MAK – clean ohne blauen Kreis */}
            <section className="border-b bg-white">
                <div className="container mx-auto max-w-6xl px-4 py-20">
                    <h2 className="text-center text-2xl font-bold md:text-3xl">Menschen bei MAK</h2>
                    <div
                        aria-hidden
                        className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500"
                    />

                    <p className="mx-auto mt-6 max-w-2xl text-center text-neutral-600">
                        Hinter über 100 Jahren Erfahrung stehen engagierte Menschen – mit Leidenschaft für
                        Technik, Sicherheit und Service.
                    </p>

                    <ul className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3" role="list">
                        {[
                            {
                                name: 'Hamoudi',
                                role: 'Geschäftsführung',
                                img: '/team/hamod.jpg',
                                quote: 'Verantwortung & Innovation',
                            },
                            {
                                name: 'Gafora',
                                role: 'Leitung Service',
                                img: '/team/g.jpg',
                                quote: 'Zuverlässig für unsere Kunden',
                            },
                            {
                                name: 'Mohamed',
                                role: 'Projektmanagement',
                                img: '/team/w.jpg',
                                quote: 'Qualität von Anfang an',
                            },
                        ].map((p, i) => (
                            <li
                                key={i}
                                className="group rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                            >
                                {/* nur rundes Bild, kein blauer Kreis */}
                                <div className="mx-auto h-28 w-28 overflow-hidden rounded-full bg-neutral-100 shadow-md">
                                    <Image
                                        src={p.img}
                                        alt={`${p.name} – ${p.role}`}
                                        width={112}
                                        height={112}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <h3 className="mt-4 text-base font-semibold">{p.name}</h3>
                                <p className="text-sm text-neutral-600">{p.role}</p>

                                <p className="mt-3 text-sm italic text-sky-700">{p.quote}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>


            {/* ZERTIFIKATE & PARTNER */}
            <section className="border-b bg-neutral-50">
                <div className="container mx-auto max-w-4xl px-4 py-20 text-center">
                    <h2 className="text-2xl font-bold md:text-3xl">Zertifikate &amp; Partnerschaften</h2>
                    <div
                        aria-hidden
                        className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500"
                    />
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {['ISO 9001', 'EN 81-80', 'DGUV', 'VdS', 'Made in EU'].map((t) => (
                            <span
                                key={t}
                                className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 shadow-sm"
                            >
                {t}
              </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-white">
                <div className="container mx-auto max-w-3xl px-4 py-20 text-center">
                    <h2 className="text-2xl font-bold md:text-3xl">Lernen Sie uns kennen</h2>
                    <p className="mx-auto mt-3 max-w-prose text-neutral-600">
                        Wir beraten persönlich, transparent und auf Augenhöhe.
                    </p>
                    <Link
                        href="/kontakt"
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 px-5 py-3 text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
                    >
                        Termin anfragen <ChevronRight size={18} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
