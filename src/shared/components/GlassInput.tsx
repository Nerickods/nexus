import React from 'react';
import { cn } from '@/lib/utils';

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export function GlassInput({ className, ...props }: GlassInputProps) {
    return (
        <input
            className={cn(
                "w-full bg-white/5 hover:bg-white/10 focus:bg-white/15",
                "backdrop-blur-md border border-white/10 focus:border-white/30",
                "rounded-xl px-4 py-3 text-white placeholder-white/40",
                "outline-none transition-all duration-300",
                "shadow-inner",
                className
            )}
            {...props}
        />
    );
}
