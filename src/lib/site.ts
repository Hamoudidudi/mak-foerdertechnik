// src/lib/site.ts
export type NavItem = { label: string; href: string };

export const SITE = {
    name: "MAK Fördertechnik",
    claim: "Über 100 Jahre kumulierte Erfahrung im Team",
    addressLine: "Karl-Marx-Allee 94, 10243 Berlin",
    email: process.env.FORM_TO_EMAIL ?? "mohamad.tammae@gmail.com",
    notruf: process.env.NOTRUF_PHONE ?? "017624661824",
    nav: [
        { label: "Start", href: "/" },
        { label: "Leistungen", href: "/leistungen" },           // ← wichtig: Übersicht!
        { label: "FAQ", href: "/faq" },
        { label: "Downloads", href: "/downloads" },
        { label: "Über uns", href: "/ueber-uns" },
        { label: "Kontakt", href: "/kontakt" },
    ] as NavItem[],
} as const;
