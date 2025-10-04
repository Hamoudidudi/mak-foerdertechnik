// src/app/impressum/page.tsx
import type { Metadata } from 'next';
import { Building2, Phone, Mail, MapPin, FileText } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Impressum | MAK Fördertechnik',
    description:
        'Impressum der MAK Fördertechnik: Anbieterkennzeichnung, Kontakt, Registerangaben, Haftung, Urheberrecht.',
};

export default function ImpressumPage() {
    return (
        <main data-theme="ocean" className="min-h-screen bg-neutral-50">
            {/* Hero */}
            <section id="top" className="pt-24 pb-12 bg-white">
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900">
                        Impressum
                    </h1>
                    <p className="mt-3 text-neutral-600">
                        Angaben gemäß § 5 TMG
                    </p>
                    <div
                        aria-hidden
                        className="mx-auto my-6 h-px w-full bg-[radial-gradient(theme(colors.sky.300)_1px,transparent_1px)] [background-size:8px_8px]"
                    />
                </div>
            </section>

            {/* Content */}
            <section className="pt-8 pb-20"> {/* 👈 mehr Abstand nach oben */}
                <div className="mx-auto max-w-3xl px-4 space-y-12 text-neutral-700 leading-relaxed">
                    {/* Anbieter */}
                    <div>
                        <h2 className="flex items-center gap-2 text-xl font-semibold text-neutral-900">
                            <Building2 className="h-5 w-5 text-sky-600" /> Anbieter
                        </h2>
                        <p className="mt-2">
                            MAK Fördertechnik GmbH <br />
                            Karl-Marx-Allee 94 <br />
                            10243 Berlin
                        </p>
                    </div>

                    {/* Kontakt */}
                    <div>
                        <h2 className="flex items-center gap-2 text-xl font-semibold text-neutral-900">
                            <Phone className="h-5 w-5 text-sky-600" /> Kontakt
                        </h2>
                        <p className="mt-2">
                            Telefon: 030 / 123 456 78 <br />
                            E-Mail: info@mak-foerdertechnik.de
                        </p>
                    </div>

                    {/* Vertretung */}
                    <div>
                        <h2 className="flex items-center gap-2 text-xl font-semibold text-neutral-900">
                            <MapPin className="h-5 w-5 text-sky-600" /> Vertretung
                        </h2>
                        <p className="mt-2">
                            Vertretungsberechtigt: Hamod Tammae (Geschäftsführung)
                        </p>
                    </div>

                    {/* Register */}
                    <div>
                        <h2 className="flex items-center gap-2 text-xl font-semibold text-neutral-900">
                            <FileText className="h-5 w-5 text-sky-600" /> Registerangaben
                        </h2>
                        <p className="mt-2">
                            Handelsregister: Amtsgericht Berlin Charlottenburg, HRB 123456 <br />
                            Umsatzsteuer-ID: DE 123 456 789
                        </p>
                    </div>

                    {/* Haftung */}
                    <div>
                        <h2 className="text-xl font-semibold text-neutral-900">Haftung für Inhalte</h2>
                        <p className="mt-2 text-sm">
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                            forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-neutral-900">Haftung für Links</h2>
                        <p className="mt-2 text-sm">
                            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                            Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
                        </p>
                    </div>

                    {/* Urheberrecht */}
                    <div>
                        <h2 className="text-xl font-semibold text-neutral-900">Urheberrecht</h2>
                        <p className="mt-2 text-sm">
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                        </p>
                    </div>

                    <p className="pt-6 text-xs text-neutral-500">
                        Quelle der Musterformulierungen: eigene Erstellung, angepasst an TMG-Standards.
                    </p>
                </div>
            </section>
        </main>
    );
}
