import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import Reveal from "../../../components/Reveal/Reveal";
import styles from "./Rooms.module.scss";
import { rooms } from "../../../data/ui/rooms";
import RoomCard from "../../../components/ui/RoomCard/RoomCard";

const PAGE_SIZE = 6;

export default function Rooms() {
    const { t } = useLanguage();
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

    const visibleRooms = rooms.slice(0, visibleCount);
    const hasMore = visibleCount < rooms.length;

    return (
        <section className={styles.page}>
            <div className={styles.container}>
                <Reveal className={styles.header}>
                    <p className={styles.eyebrow}>{t("rooms.eyebrow")}</p>
                    <h1>{t("rooms.title")}</h1>
                    <p className={styles.intro}>{t("rooms.intro")}</p>
                </Reveal>

                <div className={styles.grid}>
                    {visibleRooms.map((room, i) => (
                        <Reveal key={room.id} delay={(i % PAGE_SIZE) * 0.06}>
                            <RoomCard room={room} />
                        </Reveal>
                    ))}
                </div>

                {hasMore ? (
                    <div className={styles.loadMoreWrap}>
                        <button type="button" className={styles.loadMore} onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
                            {t("rooms.loadMore")}
                            <ChevronDown size={16} />
                        </button>
                    </div>
                ) : (
                    rooms.length > PAGE_SIZE && <p className={styles.allLoaded}>{t("rooms.allLoaded")}</p>
                )}
            </div>
        </section>
    );
}