import { FileText, Globe, Copyright, ShieldAlert, Link2, Scale } from "lucide-react";
import styles from "../PrivacyPolicy/PrivacyPolicy.module.scss";
import { useLanguage } from "../../../context/LanguageContext";
import Reveal from "../../../components/Reveal/Reveal";

const sections = [
    {
        icon: FileText,
        title: { en: "1. Purpose", fr: "1. Objet" },
        body: {
            en: "These Terms of Use govern access to and use of the Hôtel De La Grâce website by any visitor. Browsing this site implies full acceptance of these terms.",
            fr: "Les présentes Conditions d'Utilisation encadrent l'accès et l'usage du site Hôtel De La Grâce par tout visiteur. La navigation sur ce site implique l'acceptation pleine et entière de ces conditions.",
        },
    },
    {
        icon: Globe,
        title: { en: "2. Access to the Site", fr: "2. Accès au site" },
        body: {
            en: "The site is accessible free of charge to anyone with an internet connection. Hôtel De La Grâce works to keep the site available at all times but cannot guarantee uninterrupted access (maintenance, technical issues, force majeure).",
            fr: "Le site est accessible gratuitement à toute personne disposant d'un accès à internet. Hôtel De La Grâce s'efforce d'assurer une disponibilité permanente mais ne peut garantir un accès sans interruption (maintenance, incident technique, cas de force majeure).",
        },
    },
    {
        icon: Copyright,
        title: { en: "3. Intellectual Property", fr: "3. Propriété intellectuelle" },
        body: {
            en: "All content on this site - text, photos, videos, logos and graphic design - is the property of Hôtel De La Grâce, unless otherwise stated, and is protected by copyright. Any reproduction without prior written consent is prohibited.",
            fr: "L'ensemble du contenu de ce site - textes, photos, vidéos, logo et design graphique - est la propriété d'Hôtel De La Grâce, sauf mention contraire, et est protégé par le droit d'auteur. Toute reproduction sans autorisation écrite préalable est interdite.",
        },
    },
    {
        icon: ShieldAlert,
        title: { en: "4. Bookings and Liability", fr: "4. Réservations et responsabilité" },
        body: {
            en: "Bookings made through this site are requests, confirmed once validated by our team. Room photos are for illustration and may vary slightly from the actual room. Hôtel De La Grâce cannot be held liable for booking errors caused by inaccurate information provided by the guest.",
            fr: "Les réservations effectuées via ce site sont des demandes, confirmées une fois validées par notre équipe. Les photos des chambres sont fournies à titre illustratif et peuvent différer légèrement de la chambre réelle. Hôtel De La Grâce ne saurait être tenu responsable d'erreurs de réservation dues à des informations inexactes fournies par le client.",
        },
    },
    {
        icon: Link2,
        title: { en: "5. External Links", fr: "5. Liens externes" },
        body: {
            en: "This site may link to third-party services (Facebook, Instagram, WhatsApp, Google Maps). Hôtel De La Grâce is not responsible for the content or privacy practices of these external platforms.",
            fr: "Ce site peut renvoyer vers des services tiers (Facebook, Instagram, WhatsApp, Google Maps). Hôtel De La Grâce n'est pas responsable du contenu ni des pratiques de confidentialité de ces plateformes externes.",
        },
    },
    {
        icon: Scale,
        title: { en: "6. Governing Law", fr: "6. Droit applicable" },
        body: {
            en: "These Terms of Use are governed by the laws of Togo. Any dispute will be submitted to the competent courts of Lomé, after an attempt at an amicable resolution.",
            fr: "Les présentes Conditions d'Utilisation sont soumises au droit togolais. Tout litige sera soumis aux juridictions compétentes de Lomé, après tentative de résolution amiable.",
        },
    },
];

export default function Terms() {
    const { t, lang } = useLanguage();

    return (
        <section className={styles.page}>
            <div className={styles.container}>
                <Reveal className={styles.header}>
                    <h1>{t("terms.title")}</h1>
                    <p className={styles.updated}>
                        {lang === "en" ? "Last updated: [date]" : "Dernière mise à jour : [date]"}
                    </p>
                </Reveal>

                <div className={styles.grid}>
                    {sections.map((section, i) => {
                        const Icon = section.icon;
                        return (
                            <Reveal key={section.title.en} delay={(i % 3) * 0.06}>
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