import React from 'react';

export default function LiquidBackground() {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
            {/* Aurora Effects - Subtle, no solid background */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyber-purple/10 dark:bg-cyber-purple/20 rounded-full blur-[120px] animate-float-bg transition-colors duration-700" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-electric-blue/10 dark:bg-electric-blue/20 rounded-full blur-[120px] animate-float-bg transition-colors duration-700" style={{ animationDelay: '5s' }} />

            {/* Center Glow - More subtle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-neon-cyan/5 dark:bg-neon-cyan/10 rounded-full blur-[100px] animate-pulse-slow transition-colors duration-700" />

            {/* Grid Overlay (Optional for tech feel) */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] dark:opacity-[0.03] mix-blend-overlay transition-opacity duration-700" />
        </div>
    );
}

