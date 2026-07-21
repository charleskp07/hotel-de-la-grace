export type BookingSubject = "quote" | "catalog" | "info" | "appointment" | "other";

export interface ContactFormData {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    objet: BookingSubject;
    message: string;
    rgpd: boolean;
}