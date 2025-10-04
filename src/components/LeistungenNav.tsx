// src/components/LeistungenNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
    { label: "Wartung/Service", href: "/leistungen/wartung-service" },
    { label: "Modernisierung", href: "/leistungen/modernisierung" },
    { label: "Barrierefreiheit", href: "/leistungen/barrierefreiheit" },
    { label: "Energieeffizienz", href: "/leistungen/energieeffizienz" },
    { label: "EN 81-80", href: "/leistungen/en-81-80" },
    { label: "Brandfallsteuerung", href: "/leistungen/brandfallsteuerung" },
    { label: "Beratung & Planung", href: "/leistungen/beratung-planung" },
];

export default function LeistungenNav() {
    const pathname = usePathname();

    return (
        <nav aria-label="Leistungen" className="mb-4">
            <div className="flex gap-2 overflow-x-auto pb-1">
                {items.map((item) => {
                    const active = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            aria-current={active ? "page" : undefined}
                            className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-sm
                ${active
                                ? "bg-blue-900 text-white border-blue-900"
                                : "bg-white text-gray-800 hover:bg-blue-50"}`}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
