interface FlagProps {
    size?: number;
    className?: string;
}

export function USFlagIcon({ size = 18, className }: FlagProps) {
    return (
        <svg width={size} height={size * 0.7} viewBox="0 0 30 21" className={className} aria-hidden="true">
            <rect width="30" height="21" rx="2" fill="#B22234" />
            {[0, 2, 4, 6, 8, 10, 12].map((y) => (
                <rect key={y} y={y * 1.5} width="30" height="1.5" fill="#ffffff" />
            ))}
            <rect width="13" height="11" fill="#3C3B6E" />
        </svg>
    );
}

export function FRFlagIcon({ size = 18, className }: FlagProps) {
    return (
        <svg width={size} height={size * 0.7} viewBox="0 0 30 21" className={className} aria-hidden="true">
            <rect width="30" height="21" rx="2" fill="#ffffff" />
            <rect width="10" height="21" fill="#0055A4" />
            <rect x="20" width="10" height="21" fill="#EF4135" />
        </svg>
    );
}