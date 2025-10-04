// src/app/not-found.tsx
'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="h-screen flex items-center justify-center bg-neutral-50 px-4">
            <div className="text-center relative max-w-md">
                {/* Abstrakter Hintergrund */}
                <div
                    aria-hidden
                    className="absolute inset-0 -z-10 bg-[radial-gradient(theme(colors.sky.200)_1px,transparent_1px)] [background-size:20px_20px] opacity-40"
                />

                {/* Große 404 */}
                <h1 className="text-7xl md:text-8xl font-extrabold text-neutral-900 tracking-tight">
                    404
                </h1>

                {/* Untertitel */}
                <p className="mt-3 text-lg font-medium text-neutral-700">
                    Seite nicht gefunden
                </p>
                <p className="mt-1 text-sm text-neutral-500">
                    Vielleicht haben wir uns im Aufzug verfahren 🚪⬆️
                </p>

                {/* Button zurück */}
                <div className="mt-6">
                    <Link
                        href="/"
                        className="inline-flex items-center rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 transition"
                    >
                        Zur Startseite
                    </Link>
                </div>
            </div>
        </main>
    );
}
