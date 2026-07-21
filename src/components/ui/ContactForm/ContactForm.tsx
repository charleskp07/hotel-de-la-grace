import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.scss";
import { useLanguage } from "../../../context/LanguageContext";
import { rooms } from "../../../data/ui/rooms";


const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

interface BookingFormData {
    prenom: string;
    nom: string;
    email: string;
    telephone: string;
    checkIn: string;
    checkOut: string;
    guests: string;
    roomType: string;
    message: string;
    rgpd: boolean;
}

const initialState: BookingFormData = {
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    roomType: "any",
    message: "",
    rgpd: false,
};

export default function ContactForm() {
    const { t, lang } = useLanguage();
    const [formData, setFormData] = useState<BookingFormData>(initialState);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!formData.rgpd) return;

        setStatus("sending");
        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                { ...formData },
                { publicKey: EMAILJS_PUBLIC_KEY }
            );
            setStatus("success");
            setFormData(initialState);
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
                <div className={styles.field}>
                    <label htmlFor="prenom">{t("form.firstName")} *</label>
                    <input
                        id="prenom"
                        name="prenom"
                        placeholder={t("form.firstName.placeholder")}
                        value={formData.prenom}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="nom">{t("form.lastName")} *</label>
                    <input
                        id="nom"
                        name="nom"
                        placeholder={t("form.lastName.placeholder")}
                        value={formData.nom}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.field}>
                    <label htmlFor="email">{t("form.email")} *</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder={t("form.email.placeholder")}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="telephone">{t("form.phone")} *</label>
                    <input
                        id="telephone"
                        name="telephone"
                        placeholder={t("form.phone.placeholder")}
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.field}>
                    <label htmlFor="checkIn">{t("form.checkIn")}</label>
                    <input id="checkIn" type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                    <label htmlFor="checkOut">{t("form.checkOut")}</label>
                    <input id="checkOut" type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.field}>
                    <label htmlFor="guests">{t("form.guests")}</label>
                    <select id="guests" name="guests" value={formData.guests} onChange={handleChange}>
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                            <option key={n} value={n}>
                                {n}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.field}>
                    <label htmlFor="roomType">{t("form.roomType")}</label>
                    <select id="roomType" name="roomType" value={formData.roomType} onChange={handleChange}>
                        <option value="any">{t("form.roomType.any")}</option>
                        {rooms.map((room) => (
                            <option key={room.id} value={room.id}>
                                {room.name[lang]}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className={styles.field}>
                <label htmlFor="message">{t("form.message")}</label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={t("form.message.placeholder")}
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>

            <label className={styles.checkbox}>
                <input type="checkbox" name="rgpd" checked={formData.rgpd} onChange={handleChange} required />
                {t("form.consent")}{" "}
                <a href="/politique-de-confidentialite">{t("form.consentLink")}</a>.
            </label>

            <button type="submit" disabled={status === "sending"} className={styles.submit}>
                {status === "sending" ? t("form.submitting") : t("form.submit")}
            </button>

            {status === "success" && <p className={styles.success}>{t("form.success")}</p>}
            {status === "error" && <p className={styles.error}>{t("form.error")}</p>}
        </form>
    );
}