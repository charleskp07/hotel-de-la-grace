import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, BedDouble, ArrowRight, Heart, MapPin, MessageCircle } from "lucide-react";
import styles from "./HeroBanner.module.scss";
import { heroSlides } from "../../../data/ui/heroSlides";
import { useLanguage } from "../../../context/LanguageContext";

const AUTOPLAY_DELAY = 6000;


const textVariants: Variants = {
    hidden: { opacity: 0, x: -36 },
    visible: (delay: number) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] as const },
    }),
};

export default function HeroBanner() {
    const { t } = useLanguage();
    const [index, setIndex] = useState(0);

    const paginate = useCallback((dir: number) => {
        setIndex((prev) => (prev + dir + heroSlides.length) % heroSlides.length);
    }, []);

    useEffect(() => {
        const id = setInterval(() => paginate(1), AUTOPLAY_DELAY);
        return () => clearInterval(id);
    }, [paginate, index]);

    const slide = heroSlides[index];
    const title = t(slide.titleKey);
    const accent = t(slide.accentKey);
    const titleParts = title.split(accent);

    return (
        <section className={styles.hero} aria-label="Main banner">
            <div className={styles.bgLayer} aria-hidden>
                <AnimatePresence initial={false}>
                    {slide.type === "video" ? (
                        <motion.video
                            key={slide.id}
                            className={styles.bgPhoto}
                            src={slide.video}
                            poster={slide.image}
                            autoPlay
                            muted
                            loop
                            playsInline
                            initial={{ opacity: 0, scale: 1.06 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
                        />
                    ) : (
                        <motion.div
                            key={slide.id}
                            className={styles.bgPhoto}
                            style={{ backgroundImage: `url(${slide.image})` }}
                            initial={{ opacity: 0, scale: 1.06 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
                        />
                    )}
                </AnimatePresence>

                <div className={styles.overlay} />
                <div className={styles.bottomFade} />
            </div>

            <div className={styles.shapeRing} aria-hidden />
            <div className={styles.shapeDot} aria-hidden />

            <div className={styles.content}>
                <div className={styles.container}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slide.id + "-text"}
                            className={styles.textBlock}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, x: 24, transition: { duration: 0.3 } }}
                        >
                            <motion.div className={styles.eyebrow} custom={0} variants={textVariants}>
                                <span className={styles.pulseDot} />
                                {t(slide.eyebrowKey)}
                            </motion.div>

                            <motion.h1 className={styles.headline} custom={0.12} variants={textVariants}>
                                {titleParts.map((part, i, arr) =>
                                    i < arr.length - 1 ? (
                                        <React.Fragment key={i}>
                                            {part}
                                            <em className={styles.accent}>{accent}</em>
                                        </React.Fragment>
                                    ) : (
                                        part
                                    )
                                )}
                            </motion.h1>

                            <motion.p className={styles.subline} custom={0.24} variants={textVariants}>
                                {t(slide.sublineKey)}
                            </motion.p>

                            <motion.div className={styles.actions} custom={0.36} variants={textVariants}>
                                <Link to="/contact" className={styles.ctaPrimary}>
                                    <BedDouble size={16} strokeWidth={2.5} />
                                    {t("hero.ctaPrimary")}
                                </Link>
                                <Link to="/rooms" className={styles.ctaSecondary}>
                                    {t("hero.ctaSecondary")}
                                    <ArrowRight size={16} strokeWidth={2.5} />
                                </Link>
                            </motion.div>

                            <motion.div className={styles.trust} custom={0.48} variants={textVariants}>
                                <div className={styles.trustItem}>
                                    <Heart size={16} />
                                    <span>{t("highlights.item1.title")}</span>
                                </div>
                                <div className={styles.trustItem}>
                                    <MapPin size={16} />
                                    <span>{t("highlights.item2.title")}</span>
                                </div>
                                <div className={styles.trustItem}>
                                    <MessageCircle size={16} />
                                    <span>{t("highlights.item3.title")}</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <div className={styles.controls} aria-label="Slideshow controls">
                <button className={styles.arrow} onClick={() => paginate(-1)} aria-label="Previous slide">
                    <ChevronLeft size={18} />
                </button>
                <div className={styles.dots} role="tablist">
                    {heroSlides.map((s, i) => (
                        <button
                            key={s.id}
                            role="tab"
                            aria-selected={i === index}
                            aria-label={`Slide ${i + 1}`}
                            className={`${styles.pill} ${i === index ? styles.active : ""}`}
                            onClick={() => setIndex(i)}
                        >
                            {i === index && (
                                <motion.span
                                    key={index}
                                    className={styles.pillFill}
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
                                />
                            )}
                        </button>
                    ))}
                </div>
                <button className={styles.arrow} onClick={() => paginate(1)} aria-label="Next slide">
                    <ChevronRight size={18} />
                </button>
            </div>
        </section>
    );
}