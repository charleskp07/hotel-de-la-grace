export interface GalleryItem {
    id: string;
    type: "image" | "video";
    src: string;
    poster?: string;
    alt: string;
    size: "small" | "medium" | "large";
}


const PHOTOS = [
    "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80", 
    "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80", 
    "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80", 
    "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80", 
    "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80", 
    "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80", 
    "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80", 
    "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80", 
    "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80", 
    "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80", 
    "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80", 
    "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80", 
    "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80", 
    "https://images.unsplash.com/photo-1725962441765-6aaa75327f3b?auto=format&fit=crop&w=1200&q=80", 
];

const VIDEOS = [
    {
        src: "https://videos.pexels.com/video-files/19403230/19403230-hd_1920_1080_25fps.mp4",
        poster: "https://images.pexels.com/videos/19403230/hotel-interior-hotel-rooms-19403230.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Elegant modern hotel room tour",
    },
    {
        src: "https://videos.pexels.com/video-files/29532420/12712643_1440_2560_30fps.mp4",
        poster: "https://images.pexels.com/videos/29532420/pexels-photo-29532420.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Warm and cozy hotel room ambiance",
    },
];

const SIZES: GalleryItem["size"][] = ["large", "medium", "small", "medium", "small"];
const LABELS = [
    "Lobby", "Guest Room", "Garden Courtyard", "Pool", "Bathroom", "Rooftop",
    "Pool View", "Resort View", "Reception", "Suite", "Corridor", "Exterior",
];

const TOTAL_PHOTOS = 26;

const photoItems: GalleryItem[] = Array.from({ length: TOTAL_PHOTOS }, (_, i) => ({
    id: `photo-${i + 1}`,
    type: "image" as const,
    src: PHOTOS[i % PHOTOS.length],
    alt: `Hôtel La Grâce - ${LABELS[i % LABELS.length]}`,
    size: SIZES[i % SIZES.length],
}));

const videoItems: GalleryItem[] = VIDEOS.map((v, i) => ({
    id: `video-${i + 1}`,
    type: "video" as const,
    src: v.src,
    poster: v.poster,
    alt: v.alt,
    size: "large" as const,
}));



const SPACING = 9;
export const galleryImages: GalleryItem[] = [];
let vIndex = 0;
photoItems.forEach((photo, i) => {
    galleryImages.push(photo);
    if ((i + 1) % SPACING === 0 && vIndex < videoItems.length) {
        galleryImages.push(videoItems[vIndex]);
        vIndex++;
    }
});
while (vIndex < videoItems.length) {
    galleryImages.push(videoItems[vIndex]);
    vIndex++;
}