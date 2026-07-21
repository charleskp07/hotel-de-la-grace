import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = window.setTimeout(() => {
                const el = document.getElementById(hash.replace("#", ""));
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 80);
            return () => window.clearTimeout(id);
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }, [pathname, hash]);

    return null;
}