import type { Room } from "../models/Room";

export const rooms: Room[] = [
    {
        id: "standard",
        name: { en: "Standard Room", fr: "Chambre Standard" },
        description: {
            en: "A cozy, well-appointed room with everything you need for a comfortable stay - AC, hot water, and satellite TV.",
            fr: "Une chambre cosy et bien équipée avec tout le nécessaire pour un séjour confortable - climatisation, eau chaude et TV satellite.",
        },
        pricePerNight: 20000,
        capacity: 2,
        size: "18 m²",
        image: "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "comfort",
        name: { en: "Comfort Room", fr: "Chambre Confort" },
        description: {
            en: "A larger room with a workspace and a more spacious bathroom - a favorite with business travelers.",
            fr: "Une chambre plus spacieuse avec un coin bureau et une salle de bain plus généreuse - appréciée des voyageurs d'affaires.",
        },
        pricePerNight: 28000,
        capacity: 2,
        size: "22 m²",
        image: "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "superior-garden",
        name: { en: "Superior Room - Garden View", fr: "Chambre Supérieure - Vue Jardin" },
        description: {
            en: "Overlooking our shaded courtyard garden, this room offers a quiet, green view right in the city.",
            fr: "Donnant sur notre jardin ombragé, cette chambre offre une vue calme et verdoyante en plein cœur de la ville.",
        },
        pricePerNight: 35000,
        capacity: 2,
        size: "26 m²",
        image: "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "terrace-room",
        name: { en: "Terrace Room", fr: "Chambre Terrasse" },
        description: {
            en: "A private terrace overlooking the garden - a quiet spot for your morning coffee before heading out to explore.",
            fr: "Une terrasse privée donnant sur le jardin - un coin tranquille pour votre café du matin avant de partir explorer.",
        },
        pricePerNight: 42000,
        capacity: 2,
        size: "26 m²",
        image: "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "family-suite",
        name: { en: "Family Suite", fr: "Suite Familiale" },
        description: {
            en: "Two connecting rooms and a shared living area, so the whole family can travel together comfortably.",
            fr: "Deux chambres communicantes et un espace de vie partagé, pour voyager confortablement en famille.",
        },
        pricePerNight: 55000,
        capacity: 4,
        size: "38 m²",
        image: "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "junior-suite",
        name: { en: "Junior Suite", fr: "Suite Junior" },
        description: {
            en: "A separate lounge area, premium furnishings, and a few extra touches for a more elevated stay.",
            fr: "Un salon séparé, des finitions haut de gamme et quelques attentions en plus pour un séjour plus raffiné.",
        },
        pricePerNight: 68000,
        capacity: 3,
        size: "32 m²",
        image: "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "honeymoon-suite",
        name: { en: "Honeymoon Suite", fr: "Suite Lune de Miel" },
        description: {
            en: "Our most intimate suite - a private terrace, soft lighting, and thoughtful details for a special stay.",
            fr: "Notre suite la plus intimiste - terrasse privée, éclairage tamisé et attentions particulières pour un séjour spécial.",
        },
        pricePerNight: 85000,
        capacity: 2,
        size: "35 m²",
        image: "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "presidential-suite",
        name: { en: "Presidential Suite", fr: "Suite Présidentielle" },
        description: {
            en: "Our largest and most complete suite - a private lounge, dining area, and a rooftop-facing terrace.",
            fr: "Notre plus grande et plus complète suite - salon privé, coin repas et terrasse donnant sur le toit.",
        },
        pricePerNight: 150000,
        capacity: 4,
        size: "60 m²",
        image: "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80",
    },
];