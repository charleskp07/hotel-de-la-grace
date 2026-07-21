import { useState } from "react";
import { Play } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

import Reveal from "../../components/Reveal/Reveal";
import styles from "./Gallery.module.scss";
import { galleryImages } from "../../data/ui/gallery";
import Lightbox from "../../components/ui/Lightbox/Lightbox";

export default function Gallery() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className={styles.page}>
            <div className={styles.container}>
                <Reveal className={styles.header}>
                    <p className={styles.eyebrow}>{t("gallery.eyebrow")}</p>
                    <h1>{t("gallery.title")}</h1>
                    <p className={styles.intro}>{t("gallery.intro")}</p>
                </Reveal>

                <div className={styles.grid}>
                    {galleryImages.map((item, index) => (
                        <button
                            key={item.id}
                            type="button"
                            className={`${styles.tile} ${styles[item.size]}`}
                            onClick={() => setOpenIndex(index)}
                            aria-label={item.alt}
                        >
                            {item.type === "video" ? (
                                item.poster ? (
                                    <img src={item.poster} alt={item.alt} />
                                ) : (
                                    <video src={`${item.src}#t=0.1`} muted preload="metadata" playsInline aria-hidden="true" />
                                )
                            ) : (
                                <img src={item.src} alt={item.alt} />
                            )}
                            {item.type === "video" && (
                                <span className={styles.playBadge}>
                                    <Play size={16} fill="currentColor" />
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {openIndex !== null && (
                <Lightbox items={galleryImages} startIndex={openIndex} onClose={() => setOpenIndex(null)} />
            )}
        </section>
    );
}