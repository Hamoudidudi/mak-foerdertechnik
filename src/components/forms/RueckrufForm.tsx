'use client';

import { useState } from 'react';
import { btn, input, textarea } from '../ui';

type State = { loading: boolean; success?: string; error?: string };

export default function RueckrufForm() {
    const [state, setState] = useState<State>({ loading: false });

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        setState({ loading: true });

        const fd = new FormData(form);
        const payload = {
            name: String(fd.get('name') || ''),
            phone: String(fd.get('phone') || ''),
            timeSlot: String(fd.get('timeSlot') || ''),
            email: String(fd.get('email') || ''),
            message: String(fd.get('message') || ''),
            hp: '',
            token: 'LOCAL_TEST_TOKEN_123',
        };

        try {
            const res = await fetch('/api/rueckruf', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.message || data?.code || 'Fehler');
            setState({ loading: false, success: data?.message || 'Rückrufwunsch gesendet.' });
            form.reset();
        } catch (err: any) {
            setState({ loading: false, error: err?.message || 'Senden fehlgeschlagen.' });
        }
    }

    return (
        <form onSubmit={onSubmit} className="space-y-3">
            {state.success && (
                <div className="rounded-xl border border-green-200 bg-green-50/70 px-3 py-2 text-sm text-green-800">
                    {state.success}
                </div>
            )}
            {state.error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
                    {state.error}
                </div>
            )}

            <div className="grid gap-3 md:grid-cols-2">
                <input name="name" className={input} placeholder="Vollständiger Name" required />
                <input name="phone" className={input} placeholder="Telefon" required />
                <input name="timeSlot" className={`${input} md:col-span-2`} placeholder="Bevorzugter Zeitraum (z. B. Heute 14–16 Uhr)" required />
                <input name="email" type="email" className={`${input} md:col-span-2`} placeholder="E-Mail (optional)" />
                <textarea name="message" className={`${textarea} md:col-span-2`} placeholder="Notizen (optional)" />
                <input name="hp" className="hidden" tabIndex={-1} autoComplete="off" />
            </div>

            <button type="submit" disabled={state.loading} className={`${btn.base} ${btn.ghost} bg-slate-900 text-white hover:bg-slate-950`}>
                {state.loading ? 'Senden…' : 'Rückruf anfordern'}
            </button>
        </form>
    );
}