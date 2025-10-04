'use client';

/**
 * Kontakt – MAK Fördertechnik
 * ---------------------------
 * - Hero ohne Eyebrow-Box
 * - Kontaktinfos
 * - Formular mit sichtbarem Betreff-Dropdown (+ „Anderes“ -> Freitext)
 */

import * as React from 'react';
import { AlertTriangle, Phone, Mail, MapPin, ChevronRight, ChevronDown } from 'lucide-react';

export default function KontaktPage() {
    // einfache, harmlose Honeypot-Ref (kein Funktionswechsel)
    const hpRef = React.useRef<HTMLInputElement | null>(null);

    // Betreff-UI: sichtbares Dropdown + optionales Freitextfeld
    const [subjectChoice, setSubjectChoice] = React.useState<string>('');
    const [customSubject, setCustomSubject] = React.useState<string>('');
    const isCustom = subjectChoice === '__custom__';

    return (
        <main data-theme="ocean" className="min-h-screen bg-neutral-50 text-neutral-900">
            {/* HERO */}
            <section className="relative border-b bg-white">
                {/* Ocean-Ribbon: sehr dezent */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 flex items-start justify-center"
                >
                    <div className="mt-10 h-48 w-[720px] max-w-[90%] rounded-full bg-gradient-to-r from-sky-200/40 via-cyan-200/30 to-blue-200/40 blur-3xl" />
                </div>

                <div
                    className="container mx-auto max-w-4xl px-4 py-16 md:py-20 text-center"
                    style={{ paddingTop: 'calc(var(--header-h, 64px) + 32px)' }}
                >
                    {/* ⛔️ Eyebrow "Kontakt" entfernt */}

                    <h1 className="text-3xl font-extrabold md:text-5xl">
                        Kontakt &amp; 24/7-Störungshotline
                    </h1>

                    <div
                        aria-hidden
                        className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500"
                    />

                    <p className="mx-auto mt-6 max-w-prose text-neutral-600">
                        Ob dringender Notfall oder allgemeine Anfrage – wir sind jederzeit für Sie da.
                    </p>
                </div>
            </section>

            {/* KONTAKT-INFOS */}
            <section className="border-b bg-neutral-50">
                <div className="container mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 py-16 md:py-20 md:grid-cols-2">
                    {/* Störung */}
                    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition will-change-transform motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md">
                        <div className="flex items-center gap-3">
              <span className="relative inline-flex">
                <AlertTriangle className="text-red-600" size={22} />
                  {/* sehr dezenter „live“-Puls */}
                  <span className="absolute -right-1 -top-1 inline-flex h-2 w-2 animate-pulse rounded-full bg-red-500/80" aria-hidden />
              </span>
                            <h2 className="text-xl font-bold text-center md:text-left">24/7 Störung / Notruf</h2>
                        </div>

                        <p className="mt-3 text-neutral-600">
                            Rund um die Uhr erreichbar für akute Störungen Ihrer Anlagen.
                        </p>

                        <p className="mt-4 text-2xl font-extrabold text-sky-700">
                            <a className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
                               href="tel:+491234567890">
                                +49 123 456 7890
                            </a>
                        </p>
                    </div>

                    {/* Allgemein */}
                    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition will-change-transform motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md">
                        <h2 className="text-xl font-bold text-center md:text-left">Allgemeiner Kontakt</h2>
                        <ul className="mt-4 space-y-3 text-neutral-700">
                            <li className="flex items-center gap-2">
                                <Phone size={18} className="text-sky-600" />
                                <a className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
                                   href="tel:+49111222333">
                                    +49 111 222 333
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={18} className="text-sky-600" />
                                <a className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
                                   href="mailto:info@mak-foerdertechnik.de">
                                    info@mak-foerdertechnik.de
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin size={18} className="text-sky-600" />
                                <span>Musterstraße 1, 12345 Berlin</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* FORMULAR */}
            <section className="border-b bg-white">
                <div className="container mx-auto max-w-3xl px-4 py-16 md:py-20">
                    <h2 className="text-center text-2xl font-bold md:text-3xl">
                        Schreiben Sie uns
                    </h2>
                    <div
                        aria-hidden
                        className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500"
                    />

                    <form
                        onSubmit={(e) => { e.preventDefault(); }}
                        className="mt-10 space-y-6"
                        aria-label="Kontaktformular"
                    >
                        {/* Honeypot – wird von Menschen ignoriert */}
                        <div className="sr-only" aria-hidden>
                            <label htmlFor="website">Website</label>
                            <input ref={hpRef} type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    autoComplete="name"
                                    className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                                    E-Mail *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    autoComplete="email"
                                    className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
                                Telefon (optional)
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                inputMode="tel"
                                autoComplete="tel"
                                className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40"
                            />
                        </div>

                        {/* Betreff: klares Dropdown + „Anderes“ */}
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-neutral-700">
                                Betreff *
                            </label>
                            <div className="relative mt-1">
                                <select
                                    id="subject"
                                    name="subject"
                                    required
                                    value={subjectChoice}
                                    onChange={(e) => setSubjectChoice(e.target.value)}
                                    className="mt-0 w-full appearance-none rounded-lg border border-neutral-300 bg-white px-3 py-2 pr-9 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40"
                                >
                                    <option value="" disabled>Bitte auswählen …</option>
                                    <option value="Angebot anfordern">Angebot anfordern</option>
                                    <option value="Störung melden">Störung melden</option>
                                    <option value="Wartung / Service">Wartung / Service</option>
                                    <option value="Modernisierung">Modernisierung</option>
                                    <option value="EN 81-80 Bewertung">EN 81-80 Bewertung</option>
                                    <option value="Brandfallsteuerung">Brandfallsteuerung</option>
                                    <option value="Barrierefreiheit">Barrierefreiheit</option>
                                    <option value="Energieeffizienz">Energieeffizienz</option>
                                    <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
                                    <option value="__custom__">Anderes (bitte angeben)</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} aria-hidden />
                            </div>

                            {isCustom && (
                                <div className="mt-3">
                                    <label htmlFor="subjectCustom" className="block text-sm font-medium text-neutral-700">
                                        Eigener Betreff *
                                    </label>
                                    <input
                                        type="text"
                                        id="subjectCustom"
                                        name="subjectCustom"
                                        required
                                        value={customSubject}
                                        onChange={(e) => setCustomSubject(e.target.value)}
                                        placeholder="z. B. Terminabstimmung"
                                        className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40"
                                    />
                                </div>
                            )}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
                                Nachricht *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/40"
                            />
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 px-5 py-3 text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 motion-safe:active:scale-[0.99]"
                            >
                                Nachricht senden <ChevronRight size={18} aria-hidden />
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* OPTIONAL: KARTE */}
            <section className="bg-neutral-50">
                <div className="container mx-auto max-w-5xl px-4 py-16 md:py-20 text-center">
                    <h2 className="text-2xl font-bold md:text-3xl">Standort</h2>
                    <div
                        aria-hidden
                        className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500"
                    />
                    <div className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm motion-safe:transition motion-safe:hover:shadow-md">
                        {/* Platzhalter für Karte / Google Maps */}
                        <iframe
                            title="Standort MAK Fördertechnik"
                            src="https://maps.google.com/maps?q=Berlin&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            className="h-full w-full"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
