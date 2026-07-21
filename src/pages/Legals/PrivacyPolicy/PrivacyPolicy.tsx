import { Building2, Database, Target, Clock, UserCheck, Cookie, Lock, RefreshCw } from "lucide-react";
import styles from "./PrivacyPolicy.module.scss";
import { useLanguage } from "../../../context/LanguageContext";
import Reveal from "../../../components/Reveal/Reveal";
import { ADDRESS, EMAIL } from "../../../utils/constants";

const sections = [
    {
        icon: Building2,
        title: {
            en: "1. Data Controller",
            fr: "1. Responsable du traitement"
        },
        body: {
            en: `Hôtel De La Grâce, ${ADDRESS}, Lomé, Togo - ${EMAIL}. Hôtel De La Grâce is the controller responsible for the personal data collected through this website.`,
            fr: `Hôtel De La Grâce, ${ADDRESS}, Lomé, Togo - ${EMAIL}. Hôtel De La Grâce est responsable du traitement des données personnelles collectées via ce site.`,
        },
    },
    {
        icon: Database,
        title: {
            en: "2. Data We Collect",
            fr: "2. Données collectées"
        },
        body: {
            en: "When you use our booking form, we collect: first name, last name, email address, phone number, dates of stay, number of guests, and the content of your message. We do not collect any data beyond what you voluntarily submit.",
            fr: "Lorsque vous utilisez notre formulaire de réservation, nous collectons : nom, prénom, adresse e-mail, numéro de téléphone, dates de séjour, nombre de voyageurs et le contenu de votre message. Nous ne collectons aucune donnée au-delà de ce que vous transmettez volontairement.",
        },
    },
    {
        icon: Target,
        title: {
            en: "3. Why We Use It",
            fr: "3. Finalité du traitement"
        },
        body: {
            en: "Your data is used solely to process your booking request and to follow up if needed. It is never sold, rented, or shared with third parties for marketing purposes.",
            fr: "Vos données sont utilisées uniquement pour traiter votre demande de réservation et assurer un suivi si nécessaire. Elles ne sont jamais vendues, louées ou partagées à des fins commerciales.",
        },
    },
    {
        icon: Lock,
        title: {
            en: "4. Third-Party Services",
            fr: "4. Services tiers"
        },
        body: {
            en: "Our booking form is processed through EmailJS, a third-party service that securely delivers your message to our inbox. EmailJS may process your data solely for this purpose, under its own privacy policy.",
            fr: "Notre formulaire de réservation est traité via EmailJS, un service tiers qui transmet votre message de façon sécurisée à notre boîte mail. EmailJS peut traiter vos données uniquement dans ce but, selon sa propre politique de confidentialité.",
        },
    },
    {
        icon: Clock,
        title: {
            en: "5. Data Retention",
            fr: "5. Durée de conservation"
        },
        body: {
            en: "Your data is kept for up to 3 years from your last contact with us, or until you request its deletion - whichever comes first.",
            fr: "Vos données sont conservées pendant 3 ans maximum à compter de votre dernier contact avec nous, ou jusqu'à votre demande de suppression - selon la première échéance atteinte.",
        },
    },
    {
        icon: UserCheck,
        title: {
            en: "6. Your Rights",
            fr: "6. Vos droits"
        },
        body: {
            en: "You have the right to access, correct, or delete your personal data at any time. To exercise this right, simply contact us at reservation@[hotel].com.",
            fr: "Vous disposez à tout moment d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour l'exercer, il vous suffit de nous contacter à reservation@[hotel].com.",
        },
    },
    {
        icon: Cookie,
        title: {
            en: "7. Cookies",
            fr: "7. Cookies"
        },
        body: {
            en: "This site only stores your language preference (English/French) locally in your browser, so it's remembered on your next visit. No advertising or tracking cookies are used.",
            fr: "Ce site enregistre uniquement votre préférence de langue (anglais/français) localement dans votre navigateur, pour s'en souvenir à votre prochaine visite. Aucun cookie publicitaire ou de suivi n'est utilisé.",
        },
    },
    {
        icon: RefreshCw,
        title: {
            en: "8. Changes to This Policy",
            fr: "8. Modifications de cette politique"
        },
        body: {
            en: "This policy may be updated from time to time to reflect changes in our practices. The date at the top of this page indicates the last revision.",
            fr: "Cette politique peut être mise à jour ponctuellement pour refléter l'évolution de nos pratiques. La date en haut de page indique la dernière révision.",
        },
    },
];

export default function PrivacyPolicy() {
    const { t, lang } = useLanguage();

    return (
        <section className={styles.page}>
            <div className={styles.container}>
                <Reveal className={styles.header}>
                    <h1>{t("privacy.title")}</h1>
                    <p className={styles.updated}>
                        {lang === "en" ? "Last updated: [date]" : "Dernière mise à jour : [date]"}
                    </p>
                </Reveal>

                <div className={styles.grid}>
                    {sections.map((section, i) => {
                        const Icon = section.icon;
                        return (
                            <Reveal key={section.title.en} delay={(i % 4) * 0.06}>
                                <div className={styles.card}>
                                    <div className={styles.iconBadge}>
                                        <Icon size={20} />
                                    </div>
                                    <h2>{section.title[lang]}</h2>
                                    <p>{section.body[lang]}</p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}