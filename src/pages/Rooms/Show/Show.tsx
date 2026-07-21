import { useParams, Link } from "react-router";
import { ArrowLeft, Users, Maximize, Mail } from "lucide-react";

import styles from "./Show.module.scss";
import { useLanguage } from "../../../context/LanguageContext";
import { rooms } from "../../../data/ui/rooms";
import { EMAIL, WHATSAPP_NUMBER } from "../../../utils/constants";
import Reveal from "../../../components/Reveal/Reveal";
import { WhatsAppIcon } from "../../../components/ui/icons/BrandIcons";
import NotFound from "../../Errors/NotFound/NotFound";

export default function Show() {
    const { id } = useParams();
    const { lang, t } = useLanguage();
    const room = rooms.find((r) => r.id === id);

    if (!room) return <NotFound />;

    const whatsappMessage = `Hello, I'd like to book the "${room.name.en}" room at Hôtel De La Grâce.`;
    const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    const emailSubject = `Booking request - ${room.name.en}`;
    const emailBody = `Hello,\n\nI would like to book the "${room.name.en}" room at Hôtel De La Grâce.\n\nCheck-in date: \nCheck-out date: \nNumber of guests: \n\nThank you.`;
    const emailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    return (
        <section className={styles.page}>
            <div className={styles.container}>
                <Link to="/rooms" className={styles.back}>
                    <ArrowLeft size={15} />
                    {t("rooms.backToAll")}
                </Link>

                <div className={styles.layout}>
                    <Reveal className={styles.imageWrap}>
                        <img src={room.image} alt={room.name[lang]} />
                    </Reveal>

                    <Reveal delay={0.1} className={styles.info}>
                        <h1>{room.name[lang]}</h1>

                        <div className={styles.meta}>
                            <span className={styles.price}>
                                {room.pricePerNight.toLocaleString("fr-FR")} FCFA
                                <span className={styles.perNight}>{t("rooms.perNight")}</span>
                            </span>
                            <span className={styles.metaItem}>
                                <Users size={15} /> {t("rooms.capacity")}: {room.capacity}
                            </span>
                            <span className={styles.metaItem}>
                                <Maximize size={15} /> {t("rooms.size")}: {room.size}
                            </span>
                        </div>

                        <p className={styles.description}>{room.description[lang]}</p>

                        <p className={styles.bookTitle}>{t("rooms.bookTitle")}</p>
                        <div className={styles.bookActions}>
                            <a href={whatsappHref} target="_blank" rel="noreferrer" className={styles.bookWhatsApp}>
                                <WhatsAppIcon size={17} />
                                {t("rooms.bookWhatsApp")}
                            </a>
                            <a href={emailHref} className={styles.bookEmail}>
                                <Mail size={16} />
                                {t("rooms.bookEmail")}
                            </a>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}