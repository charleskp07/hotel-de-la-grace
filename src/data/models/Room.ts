import type { Lang } from "../i18n/translations";

export interface Room {
    id: string;
    name: Record<Lang, string>;
    description: Record<Lang, string>;
    pricePerNight: number;
    capacity: number;
    size: string;
    image: string;
}