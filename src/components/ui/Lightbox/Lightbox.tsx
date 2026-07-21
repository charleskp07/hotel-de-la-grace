import { useEffect, useState, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Lightbox.module.scss";
import type { GalleryItem } from "../../../data/ui/gallery";

const IMAGE_DURATION = 4500;

interface LightboxProps {
    items: GalleryItem[];
    startIndex: number;
    onClose: () => void;
}

export default function Lightbox({ items, startIndex, onClose }: LightboxProps) {
    const [index, setIndex] = useState(startIndex);
    const [paused, setPaused] = useState(false);
    const progressKey = useRef(0);
    progressKey.current += 1;

    const total = items.length;
    const current = items[index];

    const goPrev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
    const goNext = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

    // Auto-advance like stories - only for images; videos advance on "ended".
    useEffect(() => {
        if (paused || current.type === "video") return;
        const id = setTimeout(goNext, IMAGE_DURATION);
        return () => clearTimeout(id);
    }, [index, paused, current.type, goNext]);

    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
        }
        window.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [onClose, goPrev, goNext]);

    // Rendered via a portal straight into <body> - guarantees the overlay
    // truly covers the whole viewport, regardless of any ancestor with a CSS
    // `transform` (e.g. framer-motion's <Reveal>), which would otherwise
    // become the containing block for `position: fixed` and break the layout.
    return createPortal(
        <div
            className={styles.overlay}
            onClick={onClose}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {current.type === "video" ? (
                // A blurred, muted video (not a CSS background-image, which cannot
                // render a video file) so the backdrop works even without a poster.
                <video className={styles.backdrop} src={current.src} muted loop autoPlay playsInline aria-hidden="true" />
            ) : (
                <div className={styles.backdrop} style={{ backgroundImage: `url(${current.src})` }} aria-hidden="true" />
            )}

            <div className={styles.progressTrack} aria-hidden="true">
                {current.type === "image" && !paused && (
                    <motion.div
                        key={progressKey.current}
                        className={styles.progressFill}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: IMAGE_DURATION / 1000, ease: "linear" }}
                    />
                )}
                {current.type === "video" && <div className={styles.progressFillStatic} />}
            </div>

            <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
                <X size={22} />
            </button>

            <button
                type="button"
                className={`${styles.nav} ${styles.navPrev}`}
                onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                }}
                aria-label="Previous"
            >
                <ChevronLeft size={26} />
            </button>

            <AnimatePresence mode="wait">
                <motion.div
                    key={current.id}
                    className={styles.mediaWrap}
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    {current.type === "video" ? (
                        <video
                            src={current.src}
                            className={styles.media}
                            controls
                            autoPlay
                            muted
                            playsInline
                            onEnded={goNext}
                        />
                    ) : (
                        <img src={current.src} alt={current.alt} className={styles.media} />
                    )}
                </motion.div>
            </AnimatePresence>

            <button
                type="button"
                className={`${styles.nav} ${styles.navNext}`}
                onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                }}
                aria-label="Next"
            >
                <ChevronRight size={26} />
            </button>
        </div>,
        document.body
    );
}