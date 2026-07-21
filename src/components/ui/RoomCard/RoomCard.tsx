import { Link } from "react-router";
import { Users, Maximize, ArrowRight } from "lucide-react";
import styles from "./RoomCard.module.scss";
import type { Room } from "../../../data/models/Room";
import { useLanguage } from "../../../context/LanguageContext";

interface RoomCardProps {
    room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
    const { lang, t } = useLanguage();

    return (
        <article className={styles.card}>
            <div className={styles.imageWrap}>
                <img src={room.image} alt={room.name[lang]} className={styles.image} />
                <span className={styles.price}>
                    {room.pricePerNight.toLocaleString("fr-FR")} FCFA
                    <span className={styles.perNight}>{t("rooms.perNight")}</span>
                </span>
            </div>
            <div className={styles.content}>
                <h3>{room.name[lang]}</h3>
                <p>{room.description[lang]}</p>
                <div className={styles.meta}>
                    <span>
                        <Users size={14} /> {room.capacity}
                    </span>
                    <span>
                        <Maximize size={14} /> {room.size}
                    </span>
                </div>
                <Link to={`/rooms/${room.id}`} className={styles.learnMore}>
                    {t("rooms.learnMore")}
                    <ArrowRight size={14} />
                </Link>
            </div>
        </article>
    );
}