// src/app/faq/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Faq, { type FAQItem } from '@/components/Faq';

export const metadata: Metadata = {
    title: 'FAQ – Häufige Fragen | MAK Fördertechnik',
    description:
        'Antworten zu Wartung, Störung, Modernisierung, Barrierefreiheit, EN 81-80, Kosten und Reaktionszeiten.',
};

const ITEMS: FAQItem[] = [
    {
        q: 'Wie schnell reagiert der 24/7-Notdienst?',
        a: 'Eingehende Störungsmeldungen werden priorisiert. Reaktions- und Anfahrtszeiten hängen von Ort und Auslastung ab – im Regelfall zügig. Bei akuten Notlagen bitte immer anrufen (Nummer unter Kontakt).',
    },
    {
        q: 'Betreut ihr herstellerunabhängig?',
        a: 'Ja. Wir betreuen verschiedene Hersteller und Anlagentypen. Spezialteile beschaffen wir in Abstimmung mit den jeweiligen OEMs/Lieferanten.',
    },
    {
        q: 'Was kostet eine Wartung?',
        a: 'Die Kosten hängen von Anlagenart, Zustand, Fahrtenzahl und Leistungsumfang ab. Für ein Angebot nennen Sie uns bitte die Eckdaten – wir melden uns mit einer transparenten Kalkulation.',
    },
    {
        q: 'Übernehmt ihr bestehende Wartungsverträge?',
        a: 'Ja. Wir prüfen die aktuelle Vertragslage und den Anlagenzustand und schlagen einen sauberen Übergangs- bzw. Optimierungsplan vor.',
    },
    {
        q: 'Was bringt eine Modernisierung – und wie lange dauert sie?',
        a: 'Je nach Baustein (Steuerung, Antrieb, Türen, Kabine) sinken Ausfälle und Energieverbrauch deutlich. Die Dauer reicht von wenigen Tagen bis mehrere Wochen; Stillstandszeiten planen wir so kurz wie möglich.',
    },
    {
        q: 'Barrierefreiheit: Was ist Pflicht, was ist sinnvoll?',
        a: 'Maßgeblich sind EN 81-70 und DIN 18040. Häufige Maßnahmen: größere Taster (Braille), hohe Kontraste, optische/akustische Anzeigen, Sprachansagen, barrierefreier Notruf.',
    },
    {
        q: 'EN 81-80: Wozu dient die Gefährdungsanalyse?',
        a: 'Die Analyse bewertet Risiken an Bestandsaufzügen und leitet priorisierte Maßnahmen (P1–P3) ab. So erhöhen wir systematisch die Sicherheit im Bestand.',
    },
    {
        q: 'Brandfallsteuerung: Was passiert im Brandfall?',
        a: 'Der Aufzug führt eine definierte Evakuierungsfahrt aus, hält im Sperrgeschoss, sperrt Rufe und kann für die Feuerwehr freigegeben werden.',
    },
    {
        q: 'Wie erreiche ich euch am schnellsten?',
        a: 'Für akute Störungen bitte direkt anrufen (24/7). Für Angebote und Rückrufwünsche nutzen Sie das Kontaktformular – wir melden uns kurzfristig.',
    },
];

export default function FAQPage() {
    return (
        <main data-theme="ocean" className="min-h-screen bg-neutral-50">
            {/* FAQ */}
            <section className="pt-[calc(var(--header-h,64px)+32px)]">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-700 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                        Das Wichtigste auf einen Blick
                    </h2>

                    <p className="mt-2 text-neutral-600">
                        Von Reaktionszeiten bis EN 81-80: Die häufigsten Fragen unserer
                        Kundinnen und Kunden.
                    </p>

                    <div
                        aria-hidden="true"
                        className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-sky-400 via-cyan-600 to-sky-500"
                    />
                </div>

                <Faq
                    id="faq"
                    items={ITEMS}
                    eyebrow=""   // Badge ausblenden
                    title=""     // Titel manuell gesetzt (oben)
                    intro=""     // Intro manuell gesetzt (oben)
                    className="mb-16"
                    containerClassName="max-w-3xl mt-8"
                    showHeader={false}
                />
            </section>

            {/* CTA */}
            <section aria-label="Kontakt" className="pb-24">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center">
                        <Link
                            href="/kontakt"
                            className="rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                            aria-label="Zum Kontaktformular wechseln"
                        >
                            Frage nicht dabei? → Kontakt
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
