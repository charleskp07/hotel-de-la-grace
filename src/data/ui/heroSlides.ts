export interface HeroSlide {
    id: string;
    type: "image" | "video";
    image: string; // for "image": the photo shown. For "video": the poster/fallback.
    video?: string;
    eyebrowKey: string;
    titleKey: string;
    accentKey: string; // must be an exact substring of the resolved titleKey text
    sublineKey: string;
}


export const heroSlides: HeroSlide[] = [
    {
        id: "hero-1",
        type: "image",
        image: "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1740&q=80",
        eyebrowKey: "hero.slide1.eyebrow",
        titleKey: "hero.slide1.title",
        accentKey: "hero.slide1.accent",
        sublineKey: "hero.slide1.subline",
    },
    {
        id: "hero-2",
        type: "image",
        image: "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1740&q=80",
        eyebrowKey: "hero.slide2.eyebrow",
        titleKey: "hero.slide2.title",
        accentKey: "hero.slide2.accent",
        sublineKey: "hero.slide2.subline",
    },
    {
        id: "hero-3",
        type: "image",
        image: "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1740&q=80",
        eyebrowKey: "hero.slide3.eyebrow",
        titleKey: "hero.slide3.title",
        accentKey: "hero.slide3.accent",
        sublineKey: "hero.slide3.subline",
    },
    {
        id: "hero-4",
        type: "image",
        image: "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1740&q=80",
        eyebrowKey: "hero.slide4.eyebrow",
        titleKey: "hero.slide4.title",
        accentKey: "hero.slide4.accent",
        sublineKey: "hero.slide4.subline",
    },
    {
        id: "hero-5",
        type: "image",
        image: "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1740&q=80",
        eyebrowKey: "hero.slide5.eyebrow",
        titleKey: "hero.slide5.title",
        accentKey: "hero.slide5.accent",
        sublineKey: "hero.slide5.subline",
    },
];