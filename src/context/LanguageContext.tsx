import { createContext, useContext, useState, useMemo, type ReactNode } from "react";
import { translations, type Lang } from "../data/i18n/translations";

interface LanguageContextValue {
    lang: Lang;
    setLang: (lang: Lang) => void;
    toggleLang: () => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "site-lang";

function getInitialLang(): Lang {
    if (typeof window === "undefined") return "en";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "fr") return stored;
    return "en"; 
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>(getInitialLang);

    const setLang = (newLang: Lang) => {
        setLangState(newLang);
        window.localStorage.setItem(STORAGE_KEY, newLang);
        document.documentElement.lang = newLang;
    };

    const toggleLang = () => setLang(lang === "en" ? "fr" : "en");

    const t = useMemo(() => {
        return (key: string) => translations[lang][key] ?? key;
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage(): LanguageContextValue {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
    return ctx;
}