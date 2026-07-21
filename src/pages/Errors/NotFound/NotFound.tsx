import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import styles from "./NotFound.module.scss";
import { useLanguage } from "../../../context/LanguageContext";

export default function NotFound() {
    const { t } = useLanguage();

    return (
        <section className={styles.page}>
            <motion.p
                className={styles.code}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                404
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <h1>{t("notFound.title")}</h1>
                <p className={styles.text}>{t("notFound.text")}</p>
                <Link to="/" className={styles.link}>
                    <ArrowLeft size={15} />
                    {t("notFound.backHome")}
                </Link>
            </motion.div>
        </section>
    );
}