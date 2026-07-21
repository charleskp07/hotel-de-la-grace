import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./FaqAccordion.module.scss";
import { useLanguage } from "../../../context/LanguageContext";
import { faqItems } from "../../../data/ui/faq";

export default function FaqAccordion() {
    const { lang } = useLanguage();
    const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

    return (
        <div className={styles.list}>
            {faqItems.map((item) => {
                const isOpen = openId === item.id;
                return (
                    <div key={item.id} className={styles.item}>
                        <button
                            type="button"
                            className={styles.question}
                            onClick={() => setOpenId(isOpen ? null : item.id)}
                            aria-expanded={isOpen}
                        >
                            <span>{item.question[lang]}</span>
                            <motion.span
                                className={styles.chevron}
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ChevronDown size={18} />
                            </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    className={styles.answerWrap}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                                >
                                    <p className={styles.answer}>{item.answer[lang]}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}