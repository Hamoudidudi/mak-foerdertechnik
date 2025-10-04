// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyNotruf from "@/components/StickyNotruf";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
    title: `${SITE.name} – Aufzüge: Wartung, Service, Modernisierung`,
    description: SITE.claim,
    metadataBase: new URL("http://localhost:3000"),
    openGraph: {
        title: `${SITE.name} – Aufzüge`,
        description: SITE.claim,
        type: "website",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="de">
        <body className="min-h-dvh bg-neutral-50 text-neutral-900 antialiased" data-theme="ocean">
        <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:shadow"
        >
            Zum Inhalt springen
        </a>

        <Header />
        {/* ⬆️ Kein ServicesTicker mehr im Layout */}

        <main id="content" className="pb-24">{children}</main>

        <Footer />
        <StickyNotruf />
        </body>
        </html>
    );
}
