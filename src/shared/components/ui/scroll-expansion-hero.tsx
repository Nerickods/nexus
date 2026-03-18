"use client";

import {
    useEffect,
    useRef,
    useState,
    useCallback,
    ReactNode,
} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const LuminaSlider = dynamic(
    () => import("@/shared/components/ui/lumina-slider"),
    { ssr: false }
);

interface ScrollExpandMediaProps {
    mediaType?: "video" | "image" | "lumina";
    mediaSrc?: string;
    posterSrc?: string;
    bgImageSrc?: string;
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
    // Only mediaFullyExpanded needs to be state (triggers child React updates)
    const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [mounted, setMounted] = useState(false);

    // Scroll progress as a ref to avoid re-renders on every wheel event
    const scrollProgressRef = useRef<number>(0);
    const touchStartYRef = useRef<number>(0);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    // Direct DOM refs for flicker-free updates
    const mediaBoxRef = useRef<HTMLDivElement | null>(null);
    const bgRef = useRef<HTMLDivElement | null>(null);
    const titleLeftRef = useRef<HTMLHeadingElement | null>(null);
    const titleRightRef = useRef<HTMLHeadingElement | null>(null);
    const childrenRef = useRef<HTMLDivElement | null>(null);
    const internalTextRef = useRef<HTMLDivElement | null>(null);
    const mediaContentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Apply visual updates directly to DOM — no React re-renders
    const applyProgress = useCallback((progress: number) => {
        const startW = isMobile ? 90 : 55;
        const startH = isMobile ? 35 : 35;
        const currentW = startW + progress * (100 - startW);
        const currentH = startH + progress * (100 - startH);
        // Optimized non-linear opacity (accelerated fade)
        const safeOpacity = Math.max(0, 1 - Math.pow(progress, 1.5) * 4);
        
        // INTERACTION GATE: Disable clicks immediately on scroll
        const pointerEvents = progress > 0.02 ? 'none' : 'auto';
        
        const translateX = progress * 150;
        const borderRadius = Math.max(0, 24 * (1 - progress));
        const boxShadow = progress < 0.5 ? "0px 20px 50px rgba(0, 212, 255, 0.2)" : "none";

        // Media box
        if (mediaBoxRef.current) {
            mediaBoxRef.current.style.width = `${currentW}vw`;
            mediaBoxRef.current.style.height = `${currentH}vh`;
            mediaBoxRef.current.style.borderRadius = `${borderRadius}px`;
            mediaBoxRef.current.style.boxShadow = boxShadow;
        }

        // Background fade
        if (bgRef.current) {
            bgRef.current.style.opacity = String(1 - progress * 0.5);
        }

        // Split titles (No opacity fade for title)
        if (titleLeftRef.current) {
            titleLeftRef.current.style.transform = `translateX(-${translateX}vw)`;
        }
        if (titleRightRef.current) {
            titleRightRef.current.style.transform = `translateX(${translateX}vw)`;
        }

        // Children and internal text
        if (childrenRef.current) {
            childrenRef.current.style.opacity = String(safeOpacity);
            childrenRef.current.style.pointerEvents = pointerEvents;
        }
        if (titleLeftRef.current?.parentElement) {
            titleLeftRef.current.parentElement.style.pointerEvents = pointerEvents;
        }
        if (internalTextRef.current) {
            internalTextRef.current.style.opacity = String(safeOpacity);
        }

        // 3. New Reveal Effect: Blur and Transparency on the media content
        if (mediaContentRef.current) {
            // Blur: starts at 20px (progress=0) and reaches 0px (progress=1)
            const blurAmount = Math.max(0, 20 * (1 - progress));
            // Saturation: starts at 0 (grayscale) and reaches 1 (full color)
            const saturation = progress;
            // Opacity: starts at 0.3 and reaches 1.0 (fully opaque)
            const mediaOpacity = 0.3 + (progress * 0.7);

            mediaContentRef.current.style.filter = `blur(${blurAmount}px) saturate(${saturation})`;
            mediaContentRef.current.style.opacity = String(mediaOpacity);
        }
    }, [isMobile]);

    useEffect(() => {
        if (!mounted) return;

        // Apply initial state
        applyProgress(scrollProgressRef.current);

        const handleWheel = (e: globalThis.WheelEvent) => {
            const currentProgress = scrollProgressRef.current;
            const isExpanded = mediaFullyExpanded;

            if (isExpanded && e.deltaY < 0 && window.scrollY <= 5) {
                scrollProgressRef.current = 0.99; // Start contracting
                setMediaFullyExpanded(false);
                applyProgress(0.99);
                e.preventDefault();
            } else if (!isExpanded) {
                e.preventDefault();
                const scrollDelta = e.deltaY * 0.0009;
                const newProgress = Math.min(Math.max(currentProgress + scrollDelta, 0), 1);
                scrollProgressRef.current = newProgress;
                applyProgress(newProgress);

                if (newProgress >= 1) {
                    setMediaFullyExpanded(true);
                }
            }
        };

        const handleTouchStart = (e: globalThis.TouchEvent) => {
            touchStartYRef.current = e.touches[0].clientY;
        };

        const handleTouchMove = (e: globalThis.TouchEvent) => {
            if (!touchStartYRef.current) return;
            const touchY = e.touches[0].clientY;
            const deltaY = touchStartYRef.current - touchY;
            const currentProgress = scrollProgressRef.current;
            const isExpanded = mediaFullyExpanded;

            if (isExpanded && deltaY < -20 && window.scrollY <= 5) {
                scrollProgressRef.current = 0.99;
                setMediaFullyExpanded(false);
                applyProgress(0.99);
                e.preventDefault();
            } else if (!isExpanded) {
                e.preventDefault();
                const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
                const newProgress = Math.min(Math.max(currentProgress + deltaY * scrollFactor, 0), 1);
                scrollProgressRef.current = newProgress;
                applyProgress(newProgress);

                if (newProgress >= 1) {
                    setMediaFullyExpanded(true);
                }
                touchStartYRef.current = touchY;
            }
        };

        const handleTouchEnd = () => { touchStartYRef.current = 0; };

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
    }, [mediaFullyExpanded, mounted, applyProgress]);

    useEffect(() => {
        // Reset on media type change
        scrollProgressRef.current = 0;
        setMediaFullyExpanded(false);
        applyProgress(0);
    }, [mediaType, applyProgress]);

    // Compute initial values for SSR / first paint
    const startW = isMobile ? 90 : 55;
    const startH = isMobile ? 35 : 35;

    return (
        <div ref={sectionRef} className="bg-transparent overflow-hidden w-full relative">
            <section className="relative flex flex-col items-center justify-start min-h-screen">

                {/* 1. Background Image */}
                {bgImageSrc && (
                    <div
                        ref={bgRef}
                        className="absolute inset-0 z-0 h-full w-full pointer-events-none"
                    >
                        <Image
                            src={bgImageSrc}
                            alt="Hero Background"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                )}

                {/* Main Viewport Container */}
                <div className="flex flex-col items-center justify-center w-full min-h-screen relative z-10">

                    {/* MEDIA BOX WRAPPER */}
                    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                        {/* EXPANDING MEDIA BOX — initial styles set here, updates via ref */}
                        <div
                            ref={mediaBoxRef}
                            className="overflow-hidden bg-black/20 pointer-events-none"
                            style={{
                                width: `${startW}vw`,
                                height: `${startH}vh`,
                                borderRadius: '24px',
                                boxShadow: "0px 20px 50px rgba(0, 212, 255, 0.2)",
                                isolation: 'isolate',
                                willChange: 'transform, opacity, width, height, border-radius'
                            }}
                        >
                            {/* NEW: Media content wrapper with reveal effect */}
                            <div 
                                ref={mediaContentRef}
                                className="w-full h-full"
                                style={{ 
                                    willChange: 'filter, opacity',
                                    filter: 'blur(20px) saturate(0)',
                                    opacity: 0.3
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
                                ) : mediaType === "lumina" ? (
                                    <div className="relative w-full h-full pointer-events-auto">
                                        <LuminaSlider isActive={mediaFullyExpanded} />
                                    </div>
                                ) : (
                                    <div className="relative w-full h-full pointer-events-none">
                                        <Image
                                            src={mediaSrc || ''}
                                            alt="Hero expanding media"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-black/20" />
                                    </div>
                                )}
                            </div>

                            {/* Internal Box Text (Fades out) */}
                            <div
                                ref={internalTextRef}
                                className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none"
                            >
                                {date && <p className="text-sm md:text-xl text-white font-mono tracking-widest font-semibold drop-shadow-md">{date}</p>}
                                {scrollToExpand && <p className="text-[10px] md:text-xs text-neon-cyan/90 mt-2 font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-md border border-white/20 uppercase tracking-wider">{scrollToExpand}</p>}
                            </div>
                        </div>
                    </div>

                    {/* CENTERED SPLIT TEXT */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 md:gap-3 z-20 pointer-events-none">
                        <h1
                            ref={titleLeftRef}
                            className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white whitespace-nowrap tracking-tight"
                            style={{
                                textShadow: "0 0 15px rgba(0, 212, 255, 0.8), 0 0 30px rgba(0, 212, 255, 0.6), 0 0 45px rgba(0, 212, 255, 0.4)",
                                willChange: 'transform',
                            }}
                        >
                            {titleLeft}
                        </h1>
                        <h1
                            ref={titleRightRef}
                            className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white whitespace-nowrap tracking-tight"
                            style={{
                                textShadow: "0 0 15px rgba(0, 212, 255, 0.8), 0 0 30px rgba(0, 212, 255, 0.6), 0 0 45px rgba(0, 212, 255, 0.4)",
                                willChange: 'transform',
                            }}
                        >
                            {titleRight}
                        </h1>
                    </div>

                    {/* 4. STATIC CHILDREN */}
                    <div
                        ref={childrenRef}
                        className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center w-full h-full"
                    >
                        {children}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ScrollExpandMedia;
