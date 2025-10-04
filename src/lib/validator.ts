import { z } from "zod";

const base = {
    name: z.string().min(2, "Bitte vollständigen Namen angeben."),
    email: z.string().email("Bitte gültige E-Mail angeben."),
    phone: z.string().min(6, "Bitte Telefonnummer angeben."),
    message: z.string().min(10, "Bitte Nachricht mit mind. 10 Zeichen."),
    hp: z.string().max(0, "Spam erkannt."), // Honeypot
    token: z.string().min(10, "Sicherheitsprüfung fehlgeschlagen."),
};

export const AngebotSchema = z.object({
    ...base,
    objectType: z
        .enum(["Aufzug", "Treppenlift", "Plattformlift", "Sonstiges"])
        .optional(),
});

export const StoerungSchema = z.object({
    ...base,
    urgency: z.enum(["niedrig", "mittel", "hoch"]),
    location: z.string().min(3, "Bitte Einsatzort angeben."),
});

export const RueckrufSchema = z.object({
    name: base.name,
    phone: base.phone,
    timeSlot: z.string().min(3, "Bitte Zeitraum für Rückruf angeben."),
    hp: base.hp,
    token: base.token,
    email: base.email.optional(),
    message: z.string().optional(),
});

export type AngebotInput = z.infer<typeof AngebotSchema>;
export type StoerungInput = z.infer<typeof StoerungSchema>;
export type RueckrufInput = z.infer<typeof RueckrufSchema>;