import React from 'react';
import { cn } from '@/lib/utils';

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'glow';
    className?: string;
}

export function LiquidButton({
    children,
    variant = 'primary',
    className,
    ...props
}: LiquidButtonProps) {

    const variants = {
        primary: "bg-electric-blue hover:bg-electric-blue/90 text-white shadow-lg shadow-electric-blue/20",
        secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md",
        ghost: "hover:bg-white/5 text-white/70 hover:text-white",
        glow: "relative bg-gradient-to-r from-electric-blue/20 to-cyber-purple/20 hover:from-electric-blue/30 hover:to-cyber-purple/30 text-white border border-white/20 shadow-glow hover:shadow-glow-strong backdrop-blur-xl group",
    };

    return (
        <button
            className={cn(
                "rounded-xl px-6 py-3 font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
                variants[variant],
                className
            )}
            {...props}
        >
            {variant === 'glow' && (
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-electric-blue to-cyber-purple opacity-0 group-hover:opacity-20 transition-opacity blur-xl duration-500" />
            )}
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );
}
