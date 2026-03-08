"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useUIStore } from "@/shared/stores/uiStore";

const NAV_LINKS = [
    { label: "Servicios", href: "#services" },
    { label: "Precios", href: "#pricing" },
    { label: "Nosotros", href: "#identity" },
    { label: "Contacto", href: "#cta" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, toggleTheme } = useUIStore();
    const { scrollY } = useScroll();

    // Opacity transforms for glassmorphism effect
    const headerBg = useTransform(
        scrollY,
        [0, 100],
        ["rgba(255,255,255,0)", "rgba(255,255,255,0.03)"]
    );
    const headerBorder = useTransform(
        scrollY,
        [0, 100],
        ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"]
    );
    const headerBlur = useTransform(scrollY, [0, 100], [0, 20]);

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
                backgroundColor: headerBg,
                borderColor: headerBorder,
                backdropFilter: `blur(${headerBlur}px)`,
            }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "border-b shadow-lg shadow-black/5" : ""
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#"
                    className="flex items-center gap-2 group"
                >
                    <div className="relative">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-blue to-cyber-purple flex items-center justify-center">
                            <span className="text-white font-bold text-sm">N</span>
                        </div>
                        <div className="absolute inset-0 w-8 h-8 rounded-lg bg-gradient-to-br from-electric-blue to-cyber-purple opacity-50 blur-md group-hover:opacity-80 transition-opacity" />
                    </div>
                    <span className="font-display font-bold text-xl tracking-tight">
                        <span className="text-white">NEXUS</span>
                        <span className="text-electric-blue">.AI</span>
                    </span>
                </a>

                {/* Navigation Links - Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="relative text-sm font-medium text-silver-mist hover:text-white transition-colors duration-300 group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-electric-blue to-neon-cyan group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                </div>

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="relative p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-electric-blue/30 hover:bg-white/10 transition-all duration-300 group"
                    aria-label="Toggle Theme"
                >
                    <div className="relative w-5 h-5">
                        <Sun
                            className={`absolute inset-0 w-full h-full text-warning-amber transition-all duration-500 ${theme === "light"
                                    ? "rotate-0 scale-100 opacity-100"
                                    : "rotate-90 scale-0 opacity-0"
                                }`}
                        />
                        <Moon
                            className={`absolute inset-0 w-full h-full text-electric-blue transition-all duration-500 ${theme === "dark"
                                    ? "rotate-0 scale-100 opacity-100"
                                    : "-rotate-90 scale-0 opacity-0"
                                }`}
                        />
                    </div>

                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 rounded-full bg-electric-blue/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
                </button>
            </nav>
        </motion.header>
    );
}
