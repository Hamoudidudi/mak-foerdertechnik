type Props = {
    title: string;
    subtitle?: string;
};

export default function SectionHeading({ title, subtitle }: Props) {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
            {subtitle && (
                <p className="mt-2 text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
            )}
        </div>
    );
}
