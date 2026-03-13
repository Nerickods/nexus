'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamic import with SSR disabled to prevent Math.random() prerender error
// simplex-noise uses Math.random() internally in createNoise2D()
const Waves = dynamic(
    () => import('@/shared/components/ui/wave-background').then(mod => ({ default: mod.Waves })),
    { ssr: false }
);

export default function LiquidBackground() {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
            {/* Wave Background — Interactive SVG waves with simplex-noise */}
            <Waves
                strokeColor="rgba(0, 102, 255, 0.35)"
                backgroundColor="transparent"
                pointerSize={0.5}
                pointerColor="#00D4FF"
            />
        </div>
    );
}
