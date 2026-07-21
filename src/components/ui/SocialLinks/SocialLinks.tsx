import { Phone, Mail } from "lucide-react";
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from "../icons/BrandIcons";
import { FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_NUMBER, PHONE, EMAIL } from "../../../utils/constants";
import styles from "./SocialLinks.module.scss";
import { useLanguage } from "../../../context/LanguageContext";

interface SocialLinksProps {
    variant?: "footer" | "floating";
}

export default function SocialLinks({ variant = "footer" }: SocialLinksProps) {
    const { t } = useLanguage();
    const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("whatsapp.message"))}`;

    if (variant === "floating") {
        return (
            <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className={styles.floatingButton}
                aria-label={t("whatsapp.cta")}
            >
                <WhatsAppIcon size={28} />
            </a>
        );
    }

    return (
        <div className={styles.iconRow}>
            <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp" className={styles.iconLink}>
                <WhatsAppIcon size={19} />
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Facebook" className={styles.iconLink}>
                <FacebookIcon size={19} />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className={styles.iconLink}>
                <InstagramIcon size={19} />
            </a>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} aria-label="Phone" className={styles.iconLink}>
                <Phone size={19} />
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="Email" className={styles.iconLink}>
                <Mail size={19} />
            </a>
        </div>
    );
}
