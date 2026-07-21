import { Link } from "react-router";
import { useLanguage } from "../../../context/LanguageContext";
import { ADDRESS, MAP_QUERY, HOTEL_LOGO, HOTEL_NAME } from "../../../utils/constants";
import styles from "./Footer.module.scss";
import SocialLinks from "../SocialLinks/SocialLinks";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <img src={HOTEL_LOGO} alt={HOTEL_NAME} className={styles.logoImg} />
                    <p className={styles.name}>{HOTEL_NAME}</p>
                    <p className={styles.address}>{ADDRESS} - {MAP_QUERY}</p>
                    <SocialLinks variant="footer" />
                </div>

                <nav className={styles.nav}>
                    <p className={styles.navTitle}>{t("footer.navTitle")}</p>
                    <Link to="/">{t("nav.home")}</Link>
                    <Link to="/rooms">{t("nav.rooms")}</Link>
                    <Link to="/gallery">{t("nav.gallery")}</Link>
                    <Link to="/contact">{t("nav.contact")}</Link>
                </nav>

                <nav className={styles.legal}>
                    <p className={styles.navTitle}>{t("footer.legalTitle")}</p>
                    <Link to="/politique-de-confidentialite">{t("footer.privacy")}</Link>
                    <Link to="/conditions-generales-utilisation">{t("footer.terms")}</Link>
                </nav>
            </div>

            <p className={styles.copy}>
                © {new Date().getFullYear()} {HOTEL_NAME}. {t("footer.rights")}
            </p>
        </footer>
    );
}