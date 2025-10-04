// src/components/CTASection.tsx
'use client';

import CTA from '@/components/CTA';
import { ArrowRight, AlertTriangle, PhoneCall } from 'lucide-react';

export default function CTASection() {
    return (
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-10 md:grid-cols-3">
            {/* Angebot anfordern – Ocean Primary */}
            <CTA href="/kontakt" variant="primary" ariaLabel="Angebot anfordern">
                Angebot anfordern <ArrowRight className="size-4" />
            </CTA>

            {/* Störung melden – Alert (rot, sofort sichtbar) */}
            <CTA href="/kontakt#stoerung" variant="alert" ariaLabel="Störung melden">
                <AlertTriangle className="size-4" />
                Störung melden
            </CTA>

            {/* Rückruf anfordern – Dark (kräftiger Kontrast) */}
            <CTA href="/kontakt#rueckruf" variant="dark" ariaLabel="Rückruf anfordern">
                <PhoneCall className="size-4" />
                Rückruf anfordern
            </CTA>
        </div>
    );
}
