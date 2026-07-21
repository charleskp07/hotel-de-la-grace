import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import Reveal from "../../components/Reveal/Reveal";
import { ADDRESS, PHONE, EMAIL, MAP_QUERY } from "../../utils/constants";
import styles from "./Contact.module.scss";
import ContactForm from "../../components/ui/ContactForm/ContactForm";
import FaqAccordion from "../../components/ui/FaqAccordion/FaqAccordion";

export default function Contact() {
    const { t } = useLanguage();

    return (
        <>
            <section className={styles.page}>
                <div className={styles.container}>
                    <Reveal className={styles.header}>
                        <p className={styles.eyebrow}>{t("contact.eyebrow")}</p>
                        <h1>{t("contact.title")}</h1>
                        <p className={styles.subtitle}>{t("contact.subtitle")}</p>
                    </Reveal>


                    <div className={styles.layout}>
                        <Reveal className={styles.formCard} delay={0.05}>
                            <ContactForm />
                        </Reveal>

                        <div className={styles.divider} aria-hidden="true" />

                        <Reveal className={styles.infoColumn} delay={0.15}>
                            <div className={styles.infoCard}>
                                <h2>{t("contact.infoTitle")}</h2>

                                <div className={styles.infoRow}>
                                    <MapPin size={18} />
                                    <div>
                                        <p className={styles.infoLabel}>{t("contact.addressLabel")}</p>
                                        <p>{ADDRESS}</p>
                                    </div>
                                </div>

                                <div className={styles.infoRow}>
                                    <Phone size={18} />
                                    <div>
                                        <p className={styles.infoLabel}>{t("contact.phoneLabel")}</p>
                                        <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>
                                    </div>
                                </div>

                                <div className={styles.infoRow}>
                                    <Mail size={18} />
                                    <div>
                                        <p className={styles.infoLabel}>{t("contact.emailLabel")}</p>
                                        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                                    </div>
                                </div>

                                <div className={styles.infoRow}>
                                    <Clock size={18} />
                                    <div>
                                        <p className={styles.infoLabel}>{t("contact.hoursLabel")}</p>
                                        <p>{t("contact.hoursValue")}</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.mapWrap}>
                                <iframe
                                    title="map"
                                    src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section id="faq" className={styles.faqSection}>
                <div className={styles.container}>
                    <Reveal className={styles.header}>
                        <p className={styles.eyebrow}>{t("contact.faqEyebrow")}</p>
                        <h2>{t("contact.faqTitle")}</h2>
                        <p className={styles.subtitle}>{t("contact.faqIntro")}</p>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <FaqAccordion />
                    </Reveal>
                </div>
            </section>
        </>
    );
}