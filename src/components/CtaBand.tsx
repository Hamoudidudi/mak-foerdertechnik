// src/components/CtaBand.tsx
import Link from "next/link";

export default function CtaBand() {
    return (
        <section className="mt-16">
            {/* dezenter, hochwertiger Hintergrund statt „harter“ Vollfläche */}
            <div className="relative isolate overflow-hidden">
                {/* softer Blue-Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600" />
                {/* feines Overlay für bessere Lesbarkeit */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,.08),transparent)]" />

                {/* Content */}
                <div className="relative mx-auto max-w-7xl px-4 py-10">
                    {/* Card auf dem Gradient für perfekten Kontrast */}
                    <div className="grid items-center gap-6 rounded-2xl bg-white/95 p-6 shadow-lg ring-1 ring-black/5 md:grid-cols-[1fr_auto]">
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
                                Benötigen Sie Unterstützung?
                            </h3>
                            <p className="mt-1 text-slate-600 text-sm">
                                Wir beraten Sie unverbindlich – und sind im Störungsfall rund um die Uhr erreichbar.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {/* Primär-Button (dunkelblau) – unabhängig vom btn-System klar lesbar */}
                            <Link
                                href="/kontakt"
                                aria-label="Angebot anfordern"
                                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                            >
                                Angebot anfordern
                            </Link>

                            {/* Sekundär-Button (hell) */}
                            <Link
                                href="/kontakt#stoerung"
                                aria-label="Störung melden"
                                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-blue-700 bg-white hover:bg-blue-50 ring-1 ring-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                            >
                                Störung melden
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
