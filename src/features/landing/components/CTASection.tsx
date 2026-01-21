"use client";

import { motion } from "framer-motion";
import { Calendar, Check, AlertTriangle, Cpu } from "lucide-react";

import ContactForm from "./ContactForm";

export default function CTASection() {
    return (
        <section id="cta" className="relative py-24 md:py-32 overflow-hidden bg-deep-navy">
            {/* Background Reactor Core Effect */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[100px] animate-pulse-glow mix-blend-screen" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyber-purple/20 rounded-full blur-[80px] mix-blend-screen" />
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Headline */}
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                            ¿Listo Para Conectar
                            <br />
                            Tu Negocio Con El <span className="text-gradient">Futuro</span>?
                        </h2>

                        {/* Body */}
                        <p className="text-lg md:text-xl text-silver-mist mb-6 font-body">
                            El mejor momento para empezar fue hace 5 años.
                            <br />
                            El segundo mejor momento es <span className="text-warning-amber font-bold">AHORA</span>.
                        </p>

                        <p className="text-base md:text-lg text-silver-mist mb-8 border-l-2 border-electric-blue pl-4">
                            Agenda una llamada gratuita de 30 minutos.
                        </p>

                        {/* Benefits Checklist with Holo-Checks */}
                        <ul className="space-y-4 mb-8">
                            {[
                                "Analizamos tu situación actual",
                                "Identificamos oportunidades de automatización",
                                "Te mostramos cómo la IA puede ayudar a TU negocio",
                                "Sin compromiso, sin presión, solo valor",
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-6 h-6 rounded-full bg-success-green/10 border border-success-green/40 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(0,200,83,0.2)]">
                                        <Check className="w-3.5 h-3.5 text-success-green" />
                                    </div>
                                    <span className="text-base md:text-lg text-white font-medium">{item}</span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* No Tech Needed - Holo Card */}
                        <div className="flex items-center gap-4 text-silver-mist italic mb-8 holo-card p-5 rounded-xl border border-electric-blue/20">
                            <div className="p-2 bg-electric-blue/10 rounded-lg">
                                <Cpu className="w-6 h-6 text-electric-blue" />
                            </div>
                            <p>
                                No necesitas saber de tecnología.
                                <br />
                                <span className="text-white font-semibold not-italic text-gradient">Para eso estamos nosotros.</span>
                            </p>
                        </div>

                        {/* Urgency Badge - Reactor Style */}
                        <motion.div
                            animate={{ opacity: [0.9, 1, 0.9], scale: [0.99, 1, 0.99] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="inline-flex items-center gap-3 px-6 py-4 bg-warning-amber/5 border border-warning-amber/30 rounded-xl shadow-[0_0_20px_rgba(255,149,0,0.15)] relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-warning-amber/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            <AlertTriangle className="w-6 h-6 text-warning-amber flex-shrink-0 relative z-10" />
                            <p className="text-sm md:text-base text-warning-amber relative z-10">
                                <span className="font-bold">Solo 10 espacios disponibles</span> este mes
                                <br className="hidden md:block" />
                                para nuevos proyectos con precio de lanzamiento.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Calendly */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Calendly Container - Holo Terminal Style */}
                        <div className="relative rounded-3xl overflow-hidden glass-panel border border-electric-blue/30 shadow-2xl">
                            {/* Terminal Header */}
                            <div className="bg-deep-navy/90 p-4 border-b border-white/10 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                    </div>
                                    <span className="ml-3 text-xs text-silver-mist font-mono">booking_system.exe</span>
                                </div>
                                <div className="text-xs text-electric-blue font-mono animate-pulse">● LIVE</div>
                            </div>

                            {/* Embed Area */}
                            <div className="p-1 bg-[#FFFFFF] min-h-[600px] flex flex-col items-center justify-center relative">
                                {/* Instructions Placeholder */}
                                <div className="text-center w-full h-full flex items-center justify-center p-4">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>

                        {/* Floating Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="absolute -bottom-6 -left-6 glassmorphism p-4 rounded-lg hidden lg:block border border-success-green/30"
                        >
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-green opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-success-green"></span>
                                </span>
                                <div>
                                    <p className="text-sm font-semibold mb-0.5 text-white">Respuesta Rápida</p>
                                    <p className="text-xs text-silver-mist">Menos de 24 horas</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
