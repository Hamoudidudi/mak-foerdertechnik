'use client';
import { useState } from 'react';
export default function MobileNav() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button onClick={()=>setOpen(true)} className="md:hidden inline-flex items-center rounded-lg border px-3 py-2">Menü</button>
            {open && (
                <div className="fixed inset-0 z-50 bg-black/40" onClick={()=>setOpen(false)}>
                    <nav className="absolute right-0 top-0 h-full w-[84%] max-w-[360px] bg-white shadow-soft p-6 space-y-4" onClick={e=>e.stopPropagation()}>
                        <button onClick={()=>setOpen(false)} className="mb-4 rounded-md border px-3 py-1.5">Schließen</button>
                        <a href="/" className="block py-2">Start</a>
                        <a href="/leistungen/wartung-service" className="block py-2">Wartung & Service</a>
                        <a href="/leistungen/modernisierung" className="block py-2">Modernisierung</a>
                        <a href="/faq" className="block py-2">FAQ</a>
                        <a href="/downloads" className="block py-2">Downloads</a>
                        <a href="/kontakt" className="block py-2">Kontakt</a>
                    </nav>
                </div>
            )}
        </>
    );
}