"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useUIStore } from "@/shared/stores/uiStore";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useUIStore();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-deep-navy/90 dark:bg-white/10 border border-white/10 backdrop-blur-lg shadow-glow hover:scale-110 active:scale-95 transition-all group"
            aria-label="Toggle Theme"
        >
            <div className="relative w-6 h-6">
                <Sun
                    className={`absolute inset-0 w-full h-full text-warning-amber transition-all duration-500 ${theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
                        }`}
                />
                <Moon
                    className={`absolute inset-0 w-full h-full text-electric-blue transition-all duration-500 ${theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                        }`}
                />
            </div>
            {/* Tooltip */}
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-deep-navy dark:bg-white text-white dark:text-deep-navy text-xs font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
            </span>
        </button>
    );
}
