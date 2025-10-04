import Link from "next/link";

type Accent =
    | "blue"
    | "indigo"
    | "violet"
    | "emerald"
    | "teal"
    | "cyan"
    | "rose";

type Props = {
    title: string;
    text: string;
    href: string;
    icon?: string;   // Emoji oder Icon-Char
    accent?: Accent; // steuert die Akzentfarbe des Kreises/Glows
};

const accentMap: Record<Accent, string> = {
    blue: "from-blue-600/20 via-blue-600/10 to-transparent",
    indigo: "from-indigo-600/20 via-indigo-600/10 to-transparent",
    violet: "from-violet-600/20 via-violet-600/10 to-transparent",
    emerald: "from-emerald-600/20 via-emerald-600/10 to-transparent",
    teal: "from-teal-600/20 via-teal-600/10 to-transparent",
    cyan: "from-cyan-600/20 via-cyan-600/10 to-transparent",
    rose: "from-rose-600/20 via-rose-600/10 to-transparent",
};

const circleMap: Record<Accent, string> = {
    blue: "bg-blue-600/15 text-blue-700",
    indigo: "bg-indigo-600/15 text-indigo-700",
    violet: "bg-violet-600/15 text-violet-700",
    emerald: "bg-emerald-600/15 text-emerald-700",
    teal: "bg-teal-600/15 text-teal-700",
    cyan: "bg-cyan-600/15 text-cyan-700",
    rose: "bg-rose-600/15 text-rose-700",
};

export default function LeistungenTile({
                                           title,
                                           text,
                                           href,
                                           icon = "◆",
                                           accent = "blue",
                                       }: Props) {
    return (
        <Link
            href={href}
            className="group relative block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm card-hover overflow-hidden"
        >
            {/* sanfter Farbradius als künstlerischer Akzent */}
            <div
                aria-hidden
                className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full blur-2xl opacity-70 bg-gradient-to-b ${accentMap[accent]}`}
            />

            <div className="flex items-start gap-4">
                <div
                    className={`flex size-10 items-center justify-center rounded-full ${circleMap[accent]} ring-1 ring-slate-200/60`}
                    aria-hidden
                >
                    <span className="text-base">{icon}</span>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                    <p className="mt-1 text-slate-600">{text}</p>
                </div>
            </div>

            <div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-700">
                Mehr erfahren
                <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                >
          →
        </span>
            </div>

            {/* dezent animierte Border beim Hover */}
            <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-blue-600/0 transition-all duration-300 group-hover:ring-2 group-hover:ring-blue-600/20"
            />
        </Link>
    );
}
