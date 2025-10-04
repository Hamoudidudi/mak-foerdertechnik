// src/components/StickyNotruf.tsx
"use client";

import { SITE } from "@/lib/site";

export default function StickyNotruf() {
    return (
        <a
            href={`tel:${SITE.notruf}`}
            aria-label="24/7 Notruf anrufen"
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50
                 inline-flex items-center gap-2 rounded-full px-4 py-3
                 bg-blue-900 text-white shadow-lg hover:opacity-90
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
        >
            <span aria-hidden>🛠️</span>
            <span className="font-semibold">24/7 Notruf</span>
        </a>
    );
}
