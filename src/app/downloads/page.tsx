// src/app/downloads/page.tsx
'use client';

/**
 * Downloads – reduziert & sauber
 * - Zentrierte Titel
 * - Keine Suche/Tags (nur 4 Beispiele)
 * - Karten mit typbasierten Gradient-Ribbons
 * - EN 81-80 (d3) erhält eine eigene Farbwelt (violett → sky) – klar unterscheidbar
 * - FAQ mittig, Eyebrow gut lesbar (heller Chip + dunkler Text)
 */

import * as React from 'react';
import Link from 'next/link';
import {
    Archive,
    FileText,
    File as FileDoc,
    Table,
    Download,
} from 'lucide-react';

type FileType = 'pdf' | 'docx' | 'xlsx' | 'zip';

type DownloadItem = {
    id: string;
    title: string;
    description: string;
    href: string;
    type: FileType;
    size: string; // z.B. "1.1 MB"
    updated: string; // ISO, z.B. "2025-08-12"
    tags: string[];
};

const DOWNLOADS: DownloadItem[] = [
    {
        id: 'd1',
        title: 'Muster-Wartungsvertrag Aufzüge',
        description:
            'Transparenter Standardvertrag für die regelmäßige Wartung Ihrer Anlagen – inkl. SLA-Passagen.',
        href: '/files/muster-wartungsvertrag.pdf',
        type: 'pdf',
        size: '1.1 MB',
        updated: '2025-08-12',
        tags: ['Verträge', 'Wartung'],
    },
    {
        id: 'd2',
        title: 'Wartungs-Checkliste (Monat)',
        description:
            'Praktische Checkliste für die monatliche Prüfung – zum Ausdrucken oder digital ausfüllbar.',
        href: '/files/wartung-checkliste.xlsx',
        type: 'xlsx',
        size: '220 KB',
        updated: '2025-07-30',
        tags: ['Checklisten', 'Wartung'],
    },
    {
        id: 'd3',
        title: 'EN 81-80: Überblick & Pflichten',
        description:
            'Kurzleitfaden zur Gefährdungsanalyse nach EN 81-80 und den häufigsten Maßnahmen.',
        href: '/files/en-81-80-ueberblick.pdf',
        type: 'pdf',
        size: '980 KB',
        updated: '2025-06-18',
        tags: ['Normbezug', 'EN 81-80', 'Broschüren'],
    },
    {
        id: 'd4',
        title: 'Brandfallsteuerung – Abnahmeprotokoll',
        description:
            'Vorlage für das strukturierte Abnahmeprotokoll inkl. Prüfpositionen.',
        href: '/files/brandfallsteuerung-abnahme.docx',
        type: 'docx',
        size: '350 KB',
        updated: '2025-05-25',
        tags: ['Formulare', 'Brandfallsteuerung'],
    },
];

/** Dateityp → Icon + Standard-Gradient (Ribbon) + Chip-Farben
 *  Zusätzlich: Sonderfall je ID (z.B. d3 = EN 81-80) mit eigener Farbwelt.
 */
function typeIcon(type: FileType, id?: string) {
    // Sonderfall: EN 81-80 (d3) – eigenes, nicht mit anderen geteiltes Farbschema
    if (id === 'd3') {
        return {
            Icon: FileText,
            // Violett → Sky Verlauf
            ribbon: 'from-violet-600 via-fuchsia-500 to-sky-500',
            chip: 'bg-violet-50 text-violet-700 border-violet-200',
        };
    }

    switch (type) {
        case 'pdf':
            return {
                Icon: FileText,
                ribbon: 'from-rose-600 via-red-500 to-orange-400',
                chip: 'bg-rose-50 text-rose-700 border-rose-200',
            };
        case 'docx':
            return {
                Icon: FileDoc,
                ribbon: 'from-indigo-600 via-sky-600 to-cyan-500',
                chip: 'bg-indigo-50 text-indigo-700 border-indigo-200',
            };
        case 'xlsx':
            return {
                Icon: Table,
                ribbon: 'from-emerald-600 via-green-600 to-lime-500',
                chip: 'bg-emerald-50 text-emerald-700 border-emerald-200',
            };
        case 'zip':
            return {
                Icon: Archive,
                ribbon: 'from-amber-600 via-yellow-500 to-orange-500',
                chip: 'bg-amber-50 text-amber-800 border-amber-200',
            };
    }
}

function formatDate(iso: string) {
    try {
        return new Date(iso).toLocaleDateString('de-DE');
    } catch {
        return iso;
    }
}

export default function DownloadsPage() {
    // sortiert neu → alt
    const items = React.useMemo(
        () => [...DOWNLOADS].sort((a, b) => (a.updated < b.updated ? 1 : -1)),
        []
    );

    return (
        <main data-theme="ocean" className="min-h-screen bg-neutral-50 text-neutral-900">
            {/* HERO */}
            <section className="border-b bg-white">
                <div
                    className="container mx-auto max-w-4xl px-4 py-12 text-center"
                    style={{ paddingTop: 'calc(var(--header-h, 64px) + 16px)' }}
                >
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky-50 px-2 py-1 text-xs font-medium text-sky-700">
                        Downloads &amp; Vorlagen
                    </div>

                    <h1 className="bg-gradient-to-r from-sky-700 via-cyan-600 to-blue-700 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                        Alle Dokumente an einem Ort
                    </h1>

                    <div
                        aria-hidden
                        className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500"
                    />

                    <p className="mx-auto mt-4 max-w-2xl text-neutral-700">
                        Broschüren, Checklisten, Normbezüge und Formulare – direkt herunterladen.
                    </p>
                </div>
            </section>

            {/* LISTE */}
            <section id="downloads" className="anchor-offset bg-white">
                <div className="container mx-auto max-w-5xl px-4 py-12">
                    {/* Karten */}
                    <ul className="grid gap-6 sm:grid-cols-2">
                        {items.map((d) => {
                            const { Icon, ribbon, chip } = typeIcon(d.type, d.id);
                            return (
                                <li
                                    key={d.id}
                                    className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-md"
                                >
                                    {/* Typ-Ribbon */}
                                    <div
                                        aria-hidden
                                        className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${ribbon}`}
                                    />

                                    <div className="flex items-start gap-3">
                                        {/* Typ-Badge */}
                                        <span
                                            className={`inline-flex items-center justify-center rounded-xl border px-2.5 py-2 ${chip}`}
                                            aria-hidden="true"
                                        >
                      <Icon size={18} />
                    </span>

                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-base font-semibold text-neutral-900">{d.title}</h3>
                                            <p className="mt-1 line-clamp-3 text-sm text-neutral-700">{d.description}</p>

                                            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-neutral-500">
                                                <span>Stand: {formatDate(d.updated)}</span>
                                                <span aria-hidden>•</span>
                                                <span>Größe: {d.size}</span>
                                                {d.tags.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="rounded-full bg-neutral-100 px-2 py-0.5 text-neutral-700"
                                                    >
                            {t}
                          </span>
                                                ))}
                                            </div>

                                            <div className="mt-4">
                                                <a
                                                    href={d.href}
                                                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 px-3 py-2 text-sm text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
                                                    download
                                                    aria-label={`Download: ${d.title} (${d.size})`}
                                                >
                                                    <Download size={18} />
                                                    Download
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* sanfter Schimmer unten beim Hover */}
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute inset-x-0 bottom-0 h-10 translate-y-6 bg-gradient-to-t from-sky-100/0 via-sky-100/40 to-transparent opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>

            {/* FAQ – zentriert & Eyebrow gut lesbar */}
            <section id="faq" className="anchor-offset bg-neutral-50">
                <div className="container mx-auto max-w-5xl px-4 py-12">
                    {/* Eyebrow */}
                    <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700">
              Gut zu wissen
            </span>
                    </div>

                    <div className="mt-3 text-center">
                        <h2 className="text-2xl font-bold md:text-3xl">Fragen zu Downloads</h2>
                        <p className="mx-auto mt-2 max-w-2xl text-neutral-600">
                            Wie lange bleiben Dateien verfügbar? Gibt es editierbare Versionen?
                            Hier die wichtigsten Antworten.
                        </p>
                    </div>

                    {/* Schlichte FAQ */}
                    <div className="mx-auto mt-8 max-w-3xl divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
                        <details className="group p-5 [&_summary]:list-none">
                            <summary className="flex cursor-pointer items-center justify-between text-left">
                <span className="text-base font-medium text-neutral-900">
                  Sind die Dateien immer aktuell?
                </span>
                                <span className="text-neutral-400 transition group-open:rotate-180">⌄</span>
                            </summary>
                            <p className="mt-3 text-sm text-neutral-700">
                                Wir prüfen und aktualisieren die Dokumente regelmäßig. Das Feld „Stand“
                                zeigt das letzte Aktualisierungsdatum an.
                            </p>
                        </details>

                        <details className="group p-5 [&_summary]:list-none">
                            <summary className="flex cursor-pointer items-center justify-between text-left">
                <span className="text-base font-medium text-neutral-900">
                  Gibt es editierbare Vorlagen?
                </span>
                                <span className="text-neutral-400 transition group-open:rotate-180">⌄</span>
                            </summary>
                            <p className="mt-3 text-sm text-neutral-700">
                                Ja – wo sinnvoll, stellen wir DOCX/XLSX bereit. PDFs dienen der verlässlichen Ansicht.
                            </p>
                        </details>

                        <details className="group p-5 [&_summary]:list-none">
                            <summary className="flex cursor-pointer items-center justify-between text-left">
                <span className="text-base font-medium text-neutral-900">
                  Darf ich Dokumente weitergeben?
                </span>
                                <span className="text-neutral-400 transition group-open:rotate-180">⌄</span>
                            </summary>
                            <p className="mt-3 text-sm text-neutral-700">
                                Innerhalb Ihres Unternehmens ja. Öffentliche Weitergabe bitte nur nach Rücksprache,
                                damit Inhalte aktuell bleiben.
                            </p>
                        </details>
                    </div>

                    {/* Kontakt-Hinweis */}
                    <div className="mt-8 text-center">
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 px-3 py-2 text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
                        >
                            Weitere Frage stellen
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
