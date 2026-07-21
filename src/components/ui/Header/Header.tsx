import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import { Phone, Menu, X } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { FRFlagIcon, USFlagIcon } from "../icons/Flags";
import { PHONE, HOTEL_LOGO, HOTEL_NAME } from "../../../utils/constants";
import styles from "./Header.module.scss";

export default function Header() {
    const { t, lang, toggleLang } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        if (!isHome) {
            setScrolled(true);
            return;
        }
        setScrolled(window.scrollY > 60);
        function handleScroll() {
            setScrolled(window.scrollY > 60);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const transparent = isHome && !scrolled && !menuOpen;

    return (
        <header className={`${styles.header} ${transparent ? styles.transparent : ""}`}>
            <div className={styles.inner}>
                <NavLink to="/" className={styles.logo} onClick={closeMenu}>
                    <img src={HOTEL_LOGO} alt={HOTEL_NAME} className={styles.logoImg} />
                    {HOTEL_NAME}
                </NavLink>

                <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
                    <NavLink to="/" end className={({ isActive }) => (isActive ? styles.active : "")} onClick={closeMenu}>
                        {t("nav.home")}
                    </NavLink>
                    <NavLink to="/rooms" className={({ isActive }) => (isActive ? styles.active : "")} onClick={closeMenu}>
                        {t("nav.rooms")}
                    </NavLink>
                    <NavLink to="/gallery" className={({ isActive }) => (isActive ? styles.active : "")} onClick={closeMenu}>
                        {t("nav.gallery")}
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : "")} onClick={closeMenu}>
                        {t("nav.contact")}
                    </NavLink>
                    <NavLink to="/contact#faq" className={styles.faqLink} onClick={closeMenu}>
                        {t("nav.faq")}
                    </NavLink>

                    <a href={`tel:${PHONE.replace(/\s/g, "")}`} className={styles.phoneMobile}>
                        <Phone size={16} /> {t("nav.callUs")}
                    </a>
                </nav>

                <div className={styles.actions}>
                    <button type="button" className={styles.langSwitch} onClick={toggleLang} aria-label="Switch language">
                        {lang === "en" ? <FRFlagIcon /> : <USFlagIcon />}
                        <span>{t("lang.switchTo")}</span>
                    </button>

                    <a href={`tel:${PHONE.replace(/\s/g, "")}`} className={styles.phone}>
                        <Phone size={16} />
                        {t("nav.callUs")}
                    </a>

                    <button
                        type="button"
                        className={styles.burger}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>
        </header>
    );
}