"use client";

import {
    useEffect,
    useRef,
    useState,
    ReactNode,
    TouchEvent,
    WheelEvent,
} from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ScrollExpandMediaProps {
    mediaType?: "video" | "image";
    mediaSrc: string;
    posterSrc?: string;
    bgImageSrc: string;
    titleLeft?: string;
    titleRight?: string;
    date?: string;
    scrollToExpand?: string;
    textBlend?: boolean;
    children?: ReactNode;
}

const ScrollExpandMedia = ({
    mediaType = "video",
    mediaSrc,
    posterSrc,
    bgImageSrc,
    titleLeft,
    titleRight,
    date,
    scrollToExpand,
    textBlend,
    children,
}: ScrollExpandMediaProps) => {
    const [scrollProgress, setScrollProgress] = useState<number>(0);
    const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
    const [touchStartY, setTouchStartY] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [mounted, setMounted] = useState(false);

    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        setScrollProgress(0);
        setMediaFullyExpanded(false);
    }, [mediaType]);

    useEffect(() => {
        if (!mounted) return;

        const handleWheel = (e: globalThis.WheelEvent) => {
            if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
                setMediaFullyExpanded(false);
                e.preventDefault();
            } else if (!mediaFullyExpanded) {
                e.preventDefault();
                const scrollDelta = e.deltaY * 0.0009;
                const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
                setScrollProgress(newProgress);

                if (newProgress >= 1) {
                    setMediaFullyExpanded(true);
                }
            }
        };

        const handleTouchStart = (e: globalThis.TouchEvent) => {
            setTouchStartY(e.touches[0].clientY);
        };

        const handleTouchMove = (e: globalThis.TouchEvent) => {
            if (!touchStartY) return;
            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;

            if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
                setMediaFullyExpanded(false);
                e.preventDefault();
            } else if (!mediaFullyExpanded) {
                e.preventDefault();
                const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
                const newProgress = Math.min(Math.max(scrollProgress + deltaY * scrollFactor, 0), 1);
                setScrollProgress(newProgress);

                if (newProgress >= 1) {
                    setMediaFullyExpanded(true);
                }
                setTouchStartY(touchY);
            }
        };

        const handleTouchEnd = () => setTouchStartY(0);

        const handleScroll = () => {
            if (!mediaFullyExpanded) window.scrollTo(0, 0);
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("touchstart", handleTouchStart, { passive: false });
        window.addEventListener("touchmove", handleTouchMove, { passive: false });
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [scrollProgress, mediaFullyExpanded, touchStartY, mounted]);

    // Safety fallback for SSR
    const currentProgress = Number.isNaN(scrollProgress) ? 0 : scrollProgress;
    const safeOpacity = Math.max(0, 1 - currentProgress * 2);

    // Scale Box logic
    const startW = isMobile ? 90 : 55;
    const startH = isMobile ? 35 : 35; // Reducido el alto inicial en desktop de 50 a 35 para mejor espaciado
    const currentW = startW + currentProgress * (100 - startW);
    const currentH = startH + currentProgress * (100 - startH);

    const translateX = currentProgress * 150;

    return (
        <div ref={sectionRef} className="bg-[#050B14] overflow-hidden w-full relative">
            <section className="relative flex flex-col items-center justify-start min-h-screen">

                {/* 1. Background Image */}
                <motion.div
                    className="absolute inset-0 z-0 h-full w-full pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 - currentProgress * 0.5 }}
                    transition={{ duration: 0.1 }}
                >
                    <Image
                        src={bgImageSrc}
                        alt="Hero Background"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </motion.div>

                {/* Main Viewport Container */}
                <div className="flex flex-col items-center justify-center w-full min-h-screen relative z-10">

                    {/* MEDIA BOX WRAPPER (to keep z-index correct regarding the texts) */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        {/* EXPANDING MEDIA BOX */}
                        <div
                            className="transform overflow-hidden bg-black/20 backdrop-blur-sm pointer-events-none"
                            style={{
                                width: `${currentW}vw`,
                                height: `${currentH}vh`,
                                borderRadius: `${Math.max(0, 24 * (1 - currentProgress))}px`,
                                boxShadow: currentProgress < 0.5 ? "0px 20px 50px rgba(0, 212, 255, 0.2)" : "none",
                            }}
                        >
                            {mediaType === "video" ? (
                                <div className="relative w-full h-full pointer-events-none">
                                    <video
                                        src={mediaSrc}
                                        poster={posterSrc}
                                        autoPlay muted loop playsInline
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30" />
                                </div>
                            ) : (
                                <div className="relative w-full h-full pointer-events-none">
                                    <Image
                                        src={mediaSrc}
                                        alt="Hero expanding media"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-black/20" />
                                </div>
                            )}

                            {/* Internal Box Text (Fades out) */}
                            <motion.div
                                style={{ opacity: safeOpacity }}
                                className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none"
                            >
                                {date && <p className="text-sm md:text-xl text-white font-mono tracking-widest font-semibold drop-shadow-md">{date}</p>}
                                {scrollToExpand && <p className="text-[10px] md:text-xs text-neon-cyan/90 mt-2 font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-md border border-white/20 uppercase tracking-wider">{scrollToExpand}</p>}
                            </motion.div>
                        </div>
                    </div>

                    {/* CENTERED SPLIT TEXT (Original UX Logic) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 md:gap-3 z-20 pointer-events-none">
                        <motion.h1
                            className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white whitespace-nowrap tracking-tight"
                            style={{
                                transform: `translateX(-${translateX}vw)`,
                                opacity: safeOpacity,
                                textShadow: "0 0 15px rgba(0, 212, 255, 0.8), 0 0 30px rgba(0, 212, 255, 0.6), 0 0 45px rgba(0, 212, 255, 0.4)"
                            }}
                        >
                            {titleLeft}
                        </motion.h1>
                        <motion.h1
                            className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white whitespace-nowrap tracking-tight"
                            style={{
                                transform: `translateX(${translateX}vw)`,
                                opacity: safeOpacity,
                                textShadow: "0 0 15px rgba(0, 212, 255, 0.8), 0 0 30px rgba(0, 212, 255, 0.6), 0 0 45px rgba(0, 212, 255, 0.4)"
                            }}
                        >
                            {titleRight}
                        </motion.h1>
                    </div>

                    {/* 4. STATIC CHILDREN */}
                    <motion.div
                        className="absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-center w-full h-full"
                        style={{ opacity: safeOpacity }}
                    >
                        {children}
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default ScrollExpandMedia;
