import { Link } from "react-router";
import { ArrowRight, Heart, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import Reveal from "../../components/Reveal/Reveal";
import styles from "./Home.module.scss";
import HeroBanner from "../../components/ui/HeroBanner/HeroBanner";
import RoomCard from "../../components/ui/RoomCard/RoomCard";
import { rooms } from "../../data/ui/rooms";

const HIGHLIGHT_ICONS = [Heart, MapPin, MessageCircle];

export default function Home() {
    const { t } = useLanguage();

    return (
        <>
            <HeroBanner />

            <section className={styles.highlights}>
                <div className={styles.container}>
                    <Reveal className={styles.sectionHeader}>
                        <p className={styles.eyebrow}>{t("highlights.eyebrow")}</p>
                        <h2>{t("highlights.title")}</h2>
                    </Reveal>

                    <div className={styles.highlightGrid}>
                        {[1, 2, 3].map((n, i) => {
                            const Icon = HIGHLIGHT_ICONS[i];
                            return (
                                <Reveal key={n} delay={i * 0.1}>
                                    <div className={styles.highlight}>
                                        <div className={styles.highlightIcon}>
                                            <Icon size={22} strokeWidth={2} />
                                        </div>
                                        <h3>{t(`highlights.item${n}.title`)}</h3>
                                        <p>{t(`highlights.item${n}.text`)}</p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className={styles.roomsPreview}>
                <div className={styles.container}>
                    <Reveal className={styles.sectionHeader}>
                        <p className={styles.eyebrow}>{t("home.roomsEyebrow")}</p>
                        <h2>{t("home.roomsTitle")}</h2>
                    </Reveal>

                    <div className={styles.roomsGrid}>
                        {rooms.slice(0, 3).map((room, i) => (
                            <Reveal key={room.id} delay={i * 0.08}>
                                <RoomCard room={room} />
                            </Reveal>
                        ))}
                    </div>

                    <Reveal className={styles.seeAllWrap}>
                        <Link to="/rooms" className={styles.seeAll}>
                            {t("home.seeAll")}
                            <ArrowRight size={16} />
                        </Link>
                    </Reveal>
                </div>
            </section>
        </>
    );
}