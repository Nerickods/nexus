"use client";

import { motion } from "framer-motion";
import { ArrowDown, Rocket } from "lucide-react";
import { GlassCard } from "@/shared/components/GlassCard";
import { LiquidButton } from "@/shared/components/LiquidButton";
import ScrollExpandMedia from "@/shared/components/ui/scroll-expansion-hero";

export default function HeroSection() {
    return (
        <ScrollExpandMedia
            mediaType="image"
            mediaSrc="/images/hero/media.png"
            bgImageSrc="/images/hero/bg.png"
            titleLeft="Descubre el verdadero"
            titleRight="potencial de tu negocio"
            date="NEXUS_SYSTEM"
            scrollToExpand="Desliza para descubrir"
            textBlend={true}
        >
            <div className="w-full h-full flex flex-col justify-between items-center px-4 md:px-6 py-24 md:py-28 pointer-events-auto">

                {/* TOP: Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex shrink-0"
                >
                    <GlassCard variant="basic" className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 md:py-2.5 rounded-full !bg-white/5 !border-white/10 hover:!border-neon-cyan/30">
                        <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-neon-cyan"></span>
                        </span>
                        <span className="text-[10px] md:text-xs font-mono tracking-widest text-neon-cyan uppercase font-semibold">
                            Iniciando protocolo de integración
                        </span>
                    </GlassCard>
                </motion.div>

                {/* MIDDLE: Empty space to let the expanding box and split titles shine */}
                <div className="flex-1" />

                {/* BOTTOM: Subheader & CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center text-center max-w-4xl shrink-0"
                >
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-medium leading-relaxed mb-4 md:mb-6 tracking-wide text-white drop-shadow-lg">
                        Creamos tu Funnel a Medida y Automatizamos tu{" "}
                        <br className="hidden md:block" />
                        <span className="text-neon-cyan font-semibold">Atención al Cliente</span>{" "}
                        en Menos de 10 Días.
                    </h2>

                    <p className="text-xs md:text-sm lg:text-base text-silver-mist leading-relaxed mb-6 md:mb-8 font-body max-w-xl px-4">
                        La mayoría de las agencias construyen software que no usas. Nosotros construimos un{" "}
                        <span className="text-white font-semibold border-b border-warning-amber/50 pb-[1px]">Stack Invisible</span>{" "}
                        optimizado estrictamente para tus necesidades.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <a href="#cta">
                            <LiquidButton variant="glow" className="text-xs md:text-sm px-6 py-3 font-semibold tracking-wide">
                                AGENDAR LLAMADA <Rocket className="w-3.5 h-3.5 md:w-4 md:h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                            </LiquidButton>
                        </a>
                        <a href="#services">
                            <LiquidButton variant="ghost" className="text-silver-mist hover:text-white text-xs md:text-sm px-4">
                                Explorar Sistemas <ArrowDown className="w-3.5 h-3.5 md:w-4 md:h-4 inline-block ml-1 group-hover:translate-y-1 transition-transform text-electric-blue" />
                            </LiquidButton>
                        </a>
                    </div>
                </motion.div>

            </div>
        </ScrollExpandMedia>
    );
}
