import type { Lang } from "../i18n/translations";

export interface FaqItem {
    id: string;
    question: Record<Lang, string>;
    answer: Record<Lang, string>;
}

export const faqItems: FaqItem[] = [
    {
        id: "faq-checkin",
        question: {
            en: "What are the check-in and check-out times?",
            fr: "Quels sont les horaires d'arrivée et de départ ?",
        },
        answer: {
            en: "Check-in is from 2:00 PM, and check-out is until 12:00 PM (noon). Early check-in or late check-out can sometimes be arranged on request, depending on availability.",
            fr: "L'arrivée se fait à partir de 14h, et le départ jusqu'à 12h. Une arrivée anticipée ou un départ tardif peut parfois être arrangé sur demande, selon les disponibilités.",
        },
    },
    {
        id: "faq-breakfast",
        question: {
            en: "Is breakfast included in the room rate?",
            fr: "Le petit-déjeuner est-il inclus dans le tarif de la chambre ?",
        },
        answer: {
            en: "Breakfast can be included depending on the rate you book. Please confirm with us when booking, or ask about adding it to your stay.",
            fr: "Le petit-déjeuner peut être inclus selon le tarif réservé. Merci de confirmer avec nous lors de la réservation, ou de demander à l'ajouter à votre séjour.",
        },
    },
    {
        id: "faq-cancellation",
        question: {
            en: "What is your cancellation policy?",
            fr: "Quelle est votre politique d'annulation ?",
        },
        answer: {
            en: "Cancellation terms depend on the rate booked. In general, free cancellation is available up to 48 hours before arrival - we'll confirm the exact terms when you book.",
            fr: "Les conditions d'annulation dépendent du tarif réservé. En général, l'annulation est gratuite jusqu'à 48h avant l'arrivée - les conditions exactes vous seront confirmées lors de la réservation.",
        },
    },
    {
        id: "faq-airport",
        question: {
            en: "Do you offer airport pickup?",
            fr: "Proposez-vous un service de transfert depuis l'aéroport ?",
        },
        answer: {
            en: "Yes, airport transfers can be arranged for an additional fee. Let us know your flight details in advance so we can plan your pickup.",
            fr: "Oui, un transfert depuis l'aéroport peut être organisé moyennant un supplément. Communiquez-nous vos informations de vol à l'avance pour planifier votre prise en charge.",
        },
    },
    {
        id: "faq-parking",
        question: {
            en: "Is parking available on-site?",
            fr: "Un parking est-il disponible sur place ?",
        },
        answer: {
            en: "Yes, secure on-site parking is available free of charge for all guests.",
            fr: "Oui, un parking sécurisé est disponible gratuitement sur place pour tous nos clients.",
        },
    },
    {
        id: "faq-payment",
        question: {
            en: "How can I pay for my stay?",
            fr: "Comment puis-je régler mon séjour ?",
        },
        answer: {
            en: "We accept cash, mobile money, and major cards on-site. A deposit may be requested to confirm your reservation.",
            fr: "Nous acceptons les espèces, le mobile money et les principales cartes sur place. Un acompte peut être demandé pour confirmer votre réservation.",
        },
    },
];