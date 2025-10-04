// src/app/datenschutz/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Datenschutzerklärung | MAK Fördertechnik',
    description:
        'Datenschutzhinweise der MAK Fördertechnik gemäß DSGVO: Verantwortlicher, Zwecke, Rechtsgrundlagen, Betroffenenrechte.',
};

export default function DatenschutzPage() {
    return (
        <main data-theme="ocean" className="min-h-screen bg-neutral-50">
            {/* Hero */}
            <section id="top" className="pt-24 pb-12 bg-white">
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900">
                        Datenschutzerklärung
                    </h1>
                    <p className="mt-3 text-neutral-600">
                        Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO
                    </p>
                    <div
                        aria-hidden
                        className="mx-auto my-6 h-px w-full bg-[radial-gradient(theme(colors.sky.300)_1px,transparent_1px)] [background-size:8px_8px]"
                    />
                </div>
            </section>

            {/* Content */}
            <section className="pt-8 pb-20">
                <div className="mx-auto max-w-3xl px-4 space-y-12 text-neutral-700 leading-relaxed">
                    {/* Verantwortlicher */}
                    <div>
                        <h2 className="text-xl font-semibold text-neutral-900">Verantwortlicher</h2>
                        <p className="mt-2 text-sm">
                            MAK Fördertechnik GmbH <br />
                            Karl-Marx-Allee 94 <br />
                            10243 Berlin <br />
                            E-Mail: info@mak-foerdertechnik.de
                        </p>
                        <p className="mt-2 text-sm">
                            Vertretungsberechtigt: Hamod Tammae (Geschäftsführung)
                        </p>
                    </div>

                    {/* Zwecke */}
                    <div>
                        <h2 className="text-xl font-semibold text-neutral-900">Zwecke und Rechtsgrundlagen</h2>
                        <p className="mt-2 text-sm">
                            Wir verarbeiten personenbezogene Daten zur Bereitstellung dieser Website (Art. 6 Abs. 1 lit. f DSGVO),
                            zur Bearbeitung von Anfragen (Art. 6 Abs. 1 lit. b/f DSGVO) und zur Erfüllung gesetzlicher Pflichten
                            (Art. 6 Abs. 1 lit. c DSGVO). Soweit eine Einwilligung erforderlich ist, verarbeiten wir Daten auf Basis
                            von Art. 6 Abs. 1 lit. a DSGVO.
                        </p>
                    </div>

                    {/* Hosting */}
                    <div>
                        <h2 className="text-xl font-semibold text-neutral-900">Hosting & Logfiles</h2>
                        <p className="mt-2 text-sm">
                            Unser Provider erhebt automatisch sogenannte Server-Logfiles (z. B. IP-Adresse, Datum/Uhrzeit, Browser,
                            Betriebssystem, Referrer-URL). Die Verarbeitung dient der technischen Bereitstellung, Sicherheit und
                            Stabilität der Website und wird regelmäßig gelöscht (Art. 6 Abs. 1 lit. f DSGVO).
                        </p>
                    </div>

                    {/* Cookies */}
                    <div>
                        <h2 className="text-xl font-semibold text-neutral-900">Cookies</h2>
                        <p className="mt-2 text-sm">
                            Wir verwenden nur technisch notwendige Cookies, soweit nicht anders angegeben. Für optionale Dienste
                            (z. B. Analyse, Karten) holen wir – sofern erforderlich – Ihre Einwilligung ein (Art. 6 Abs. 1 lit. a DSGVO).
                        </p>
                    </div>

                    {/* Kontaktformular */}
                    <div>
                        <h2 className="text-xl font-semibold text-neutral-900">Kontaktformular</h2>
                        <p className="mt-2 text-sm">
                            Bei Nutzung des Kontaktformulars verarbeiten wir Ihre Angaben (Name, E-Mail, Nachricht) zur Bearbeitung
                            der Anfrage (Art. 6 Abs. 1 lit. b/f DSGVO). Die Daten werden gelöscht, sobald sie nicht mehr benötigt werden
                            und keine gesetzlichen Pflichten entgegenstehen.
                        </p>
                    </div>

                    {/* Rechte */}
                    <div>
                        <h2 className="text-xl font-semibold text-neutral-900">Ihre Rechte</h2>
                        <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                            <li>Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung</li>
                            <li>Widerspruch gegen die Verarbeitung, Datenübertragbarkeit</li>
                            <li>Widerruf erteilter Einwilligungen</li>
                            <li>Beschwerde bei einer Aufsichtsbehörde</li>
                        </ul>
                    </div>

                    {/* Auftragsverarbeitung */}
                    <div>
                        <h2 className="text-xl font-semibold text-neutral-900">Auftragsverarbeitung</h2>
                        <p className="mt-2 text-sm">
                            Soweit Dienstleister in unserem Auftrag Daten verarbeiten, bestehen entsprechende Verträge
                            zur Auftragsverarbeitung (Art. 28 DSGVO). Eine Übermittlung in Drittländer erfolgt nur mit
                            geeigneten Garantien (z. B. EU-Standardvertragsklauseln).
                        </p>
                    </div>

                    <p className="pt-6 text-xs text-neutral-500">
                        Diese Datenschutzerklärung wurde erstellt auf Basis der DSGVO und an unsere Prozesse angepasst.
                    </p>
                </div>
            </section>
        </main>
    );
}
