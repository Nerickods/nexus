"use client";

import { motion } from "framer-motion";
import { ArrowDown, Rocket } from "lucide-react";
import { GlassCard } from "@/shared/components/GlassCard";
import { LiquidButton } from "@/shared/components/LiquidButton";
import ScrollExpandMedia from "@/shared/components/ui/scroll-expansion-hero";

export default function HeroSection() {
    return (
        <ScrollExpandMedia
            mediaType="lumina"
            bgImageSrc="/images/hero/bg.png"
            titleLeft="Descubre el verdadero"
            titleRight="potencial de tu negocio"
            textBlend={true}
        >
            <div className="w-full min-h-[90vh] flex flex-col justify-between items-center px-4 md:px-6 pt-32 pb-8 md:pt-40 md:pb-12 pointer-events-auto">

                {/* MIDDLE: Empty space */}
                <div className="flex-1" />

                {/* BOTTOM: Subheader & CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center text-center max-w-4xl shrink-0 gap-5 md:gap-6 relative"
                >
                    {/* Dark gradient backdrop to push text off the image */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/60 via-black/20 to-transparent -mx-10 blur-xl pointer-events-none -z-10" />

                    <h3
                        className="text-lg md:text-xl lg:text-2xl font-display font-medium leading-relaxed tracking-wide text-white text-balance max-w-3xl drop-shadow-2xl"
                        style={{ textShadow: "0 2px 20px rgba(0,0,0,0.9), 0 0 15px rgba(0, 212, 255, 0.8), 0 0 30px rgba(0, 212, 255, 0.5)" }}
                    >
                        Creamos tu Funnel a Medida y Automatizamos tu{" "}
                        <span className="text-neon-cyan font-bold drop-shadow-md">Atención al Cliente</span>{" "}
                        en Menos de 10 Días.
                    </h3>

                    <p
                        className="text-sm md:text-base lg:text-lg text-white font-medium leading-relaxed font-body max-w-2xl px-4 drop-shadow-2xl"
                        style={{ textShadow: "0 2px 15px rgba(0,0,0,0.9), 0 0 10px rgba(0, 212, 255, 0.6), 0 0 20px rgba(0, 212, 255, 0.4)" }}
                    >
                        Construimos un{" "}
                        <span className="text-white font-bold border-b border-warning-amber/50 pb-[1px]">Stack Invisible</span>{" "}
                        optimizado estrictamente para tus necesidades. Sin software que no usas.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center pt-2">
                        <a href="#cta">
                            <LiquidButton variant="glow" className="text-xs md:text-sm px-6 py-3 font-semibold tracking-wide shadow-lg shadow-neon-cyan/20">
                                AGENDAR LLAMADA <Rocket className="w-3.5 h-3.5 md:w-4 md:h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                            </LiquidButton>
                        </a>
                        <a href="#services">
                            <LiquidButton variant="ghost" className="text-gray-300 hover:text-white text-xs md:text-sm px-4">
                                Explorar Sistemas <ArrowDown className="w-3.5 h-3.5 md:w-4 md:h-4 inline-block ml-1 group-hover:translate-y-1 transition-transform text-electric-blue" />
                            </LiquidButton>
                        </a>
                    </div>
                </motion.div>

            </div>
        </ScrollExpandMedia>
    );
}
