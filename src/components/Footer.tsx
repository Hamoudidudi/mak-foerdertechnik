// src/components/Footer.tsx
import Link from "next/link";
import {
    Mail,
    Phone,
    Instagram,
    Facebook,
    Linkedin,
    Youtube,
    MessageCircle,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative border-t bg-gradient-to-b from-white to-sky-50">
            <div className="mx-auto max-w-5xl px-4 py-12">
                <div className="grid gap-10 sm:grid-cols-3">
                    {/* Firma */}
                    <section aria-labelledby="footer-company">
                        <h3 id="footer-company" className="text-sm font-semibold text-neutral-900">
                            MAK Fördertechnik
                        </h3>

                        <address className="not-italic mt-2 text-sm text-neutral-600">
                            Karl-Marx-Allee 94
                            <br />
                            10243 Berlin
                        </address>

                        <div className="mt-3">
              <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700">
                Über 100 Jahre Erfahrung im Team
              </span>
                        </div>
                    </section>

                    {/* Sitemap */}
                    <nav aria-label="Footer Navigation">
                        <h3 className="text-sm font-semibold text-neutral-900">Sitemap</h3>
                        <ul className="mt-2 grid gap-2 text-sm">
                            <li>
                                <Link className="rounded-sm text-sky-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" href="/leistungen">
                                    Leistungen
                                </Link>
                            </li>
                            <li>
                                <Link className="rounded-sm text-sky-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" href="/faq">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link className="rounded-sm text-sky-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" href="/downloads">
                                    Downloads
                                </Link>
                            </li>
                            <li>
                                <Link className="rounded-sm text-sky-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" href="/ueber-uns">
                                    Über uns
                                </Link>
                            </li>
                            <li>
                                <Link className="rounded-sm text-sky-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" href="/kontakt">
                                    Kontakt
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Kontakt + Social */}
                    <section aria-labelledby="footer-contact">
                        <h3 id="footer-contact" className="text-sm font-semibold text-neutral-900">
                            Kontakt
                        </h3>
                        <ul className="mt-2 space-y-2 text-sm text-neutral-700">
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-sky-600" aria-hidden />
                                <a
                                    href="tel:+4930000000"
                                    className="rounded-sm hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                                    aria-label="Telefonnummer anrufen"
                                >
                                    +49 30 000000
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-sky-600" aria-hidden />
                                <a
                                    href="mailto:info@mak-foerdertechnik.de"
                                    className="rounded-sm hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                                    aria-label="E-Mail an info@mak-foerdertechnik.de senden"
                                >
                                    info@mak-foerdertechnik.de
                                </a>
                            </li>
                        </ul>

                        {/* Social: Ocean-Badges mit weißen Icons */}
                        <div className="mt-4">
                            <h4 className="sr-only">Social Media</h4>
                            <ul className="flex items-center gap-2">
                                <li>
                                    <SocialButton href="https://instagram.com/makfoerdertechnik" label="Instagram">
                                        <Instagram className="h-4 w-4 stroke-[2.25]" />
                                    </SocialButton>
                                </li>
                                <li>
                                    <SocialButton href="https://facebook.com/makfoerdertechnik" label="Facebook">
                                        <Facebook className="h-4 w-4 stroke-[2.25]" />
                                    </SocialButton>
                                </li>
                                <li>
                                    <SocialButton href="https://wa.me/4930000000" label="WhatsApp">
                                        <MessageCircle className="h-4 w-4 stroke-[2.25]" />
                                    </SocialButton>
                                </li>
                                <li>
                                    <SocialButton href="https://www.linkedin.com/company/mak-foerdertechnik" label="LinkedIn">
                                        <Linkedin className="h-4 w-4 stroke-[2.25]" />
                                    </SocialButton>
                                </li>
                                <li>
                                    <SocialButton href="https://youtube.com/@makfoerdertechnik" label="YouTube">
                                        <Youtube className="h-4 w-4 stroke-[2.25]" />
                                    </SocialButton>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* Dotted Divider */}
                <div
                    aria-hidden
                    className="my-8 h-px w-full bg-[radial-gradient(theme(colors.sky.300)_1px,transparent_1px)] [background-size:8px_8px]"
                />

                {/* Bottom row */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-neutral-500">
                    <p>© {new Date().getFullYear()} MAK Fördertechnik</p>
                    <ul className="flex items-center gap-4">
                        <li>
                            <Link className="rounded-sm hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" href="/impressum">
                                Impressum
                            </Link>
                        </li>
                        <li>
                            <Link className="rounded-sm hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" href="/datenschutz">
                                Datenschutz
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

/** Runde Ocean-Badge mit weißem Icon – hochwertiger Look */
function SocialButton({
                          href,
                          label,
                          children,
                      }: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={[
                "group inline-flex size-10 items-center justify-center rounded-full text-white",
                "bg-gradient-to-br from-sky-600 to-blue-700",
                "shadow-[inset_0_1px_0_rgba(255,255,255,.25),0_10px_20px_-12px_rgba(2,132,199,.7)]",
                "ring-1 ring-white/30",
                "transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
            ].join(" ")}
        >
            <span className="sr-only">{label}</span>
            {children}
        </a>
    );
}
