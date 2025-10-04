// src/components/ui.ts
export const btn = {
    base: "inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition-all duration-200 ease-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:translate-y-[1px]",
    primary: "bg-brand-600 text-white hover:bg-brand-700 focus-visible:outline-brand-400 shadow-[0_6px_18px_rgba(15,23,42,.06)]",
    danger:  "bg-red-600 text-white hover:bg-red-700 focus-visible:outline-red-400 shadow-[0_6px_18px_rgba(15,23,42,.06)]",
    ghost:   "text-slate-800 hover:bg-slate-100"
};

export const input   = "w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-[15px] placeholder:text-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400";
export const textarea= input + " min-h-[140px]";
export const select  = input;
export const card    = "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm";