// src/components/BackToLeistungen.tsx
"use client";

import Link from "next/link";

export default function BackToLeistungen({
                                             className = "",
                                         }: {
    className?: string;
}) {
    return (
        <div className={["flex items-center", className].join(" ")}>
            <Link
                href="/leistungen"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-sm text-slate-700 shadow-sm backdrop-blur hover:bg-white transition-colors"
                aria-label="Zurück zur Leistungsübersicht"
            >
                <span aria-hidden>←</span>
                Zurück zu Leistungen
            </Link>
        </div>
    );
}
