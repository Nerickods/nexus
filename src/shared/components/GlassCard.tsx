import React from 'react';
import { cn } from '@/lib/utils'; // Assuming standard utils exists, if not I will create it or use clsx/tailwind-merge directly if I check

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: 'basic' | 'premium' | 'holographic';
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({
    children,
    variant = 'basic',
    className,
    hoverEffect = false,
    ...props
}: GlassCardProps) {

    const variants = {
        basic: "bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl",
        premium: "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 shadow-2xl relative overflow-hidden",
        holographic: "holo-card bg-white/5 backdrop-blur-xl border border-white/10",
    };

    return (
        <div
            className={cn(
                variants[variant],
                "rounded-3xl p-6 transition-all duration-300",
                hoverEffect && "hover:bg-white/10 hover:shadow-glow hover:-translate-y-1",
                className
            )}
            {...props}
        >
            {variant === 'premium' && (
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />
            )}
            {children}
        </div>
    );
}
