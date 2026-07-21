import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    y?: number;
}

export default function Reveal({ children, delay = 0, className, y = 24 }: RevealProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
        >
            {children}
        </motion.div>
    );
}