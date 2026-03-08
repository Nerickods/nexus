"use client";

import { motion } from "framer-motion";
import { Send, Zap, MessageSquare } from "lucide-react";
import Image from "next/image";
import { GlassCard } from "@/shared/components/GlassCard";
import { GlassInput } from "@/shared/components/GlassInput";
import { LiquidButton } from "@/shared/components/LiquidButton";

export default function CTASection() {
    return (
        <section id="cta" className="relative py-32 bg-white dark:bg-deep-navy overflow-hidden flex items-center justify-center transition-colors duration-700">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                {/* Dark Mode Texture */}
                <div className="absolute inset-0 z-0 opacity-0 dark:opacity-50 mix-blend-screen transition-opacity duration-700">
                    <Image
                        src="/assets/backgrounds/bg-cta.png"
                        alt="Warp Speed Action"
                        fill
                        className="object-cover"
                        quality={90}
                    />
                </div>
                {/* Light Mode Texture */}
                <div className="absolute inset-0 z-0 opacity-50 dark:opacity-0 mix-blend-multiply transition-opacity duration-700">
                    <Image
                        src="/assets/backgrounds/bg-cta-light.png"
                        alt="Warp Speed Action Light"
                        fill
                        className="object-cover"
                        quality={90}
                    />
                </div>
            </div>

            {/* Reactor Core Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/10 dark:bg-electric-blue/20 rounded-full blur-[100px] animate-pulse-glow transition-colors duration-700" />

            {/* Overlay for form visibility */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#ffffff_80%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#0A0F1C_80%)] pointer-events-none transition-all duration-700" />

            {/* Top Transition Gradient */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent dark:from-deep-navy dark:to-transparent z-10 pointer-events-none transition-colors duration-700" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-deep-navy dark:text-white text-shadow-glow transition-colors duration-700">
                        ¿Listo Para Conectar Tu Negocio <span className="text-gradient">Con El Futuro</span>?
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-silver-mist max-w-2xl mx-auto transition-colors duration-700">
                        Agenda una consulta gratuita de 15 minutos. Sin ventas agresivas.
                        Solo estrategia pura para ver si somos el match correcto.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    {/* Holo Terminal Style Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard variant="premium" className="text-left relative overflow-hidden h-full">
                            {/* Scanline Effect */}
                            <div className="absolute inset-0 bg-scanline opacity-5 pointer-events-none" />

                            <div className="flex items-center gap-2 mb-6 border-b border-gray-200 dark:border-white/10 pb-4 transition-colors duration-700">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                <span className="ml-auto font-mono text-xs text-electric-blue">SECURE_CHANNEL_v1.2</span>
                            </div>

                            <form className="space-y-4 relative z-10">
                                <div>
                                    <label className="block text-slate-500 dark:text-silver-mist text-sm font-mono mb-2 transition-colors duration-700">IDENTIFIER_NAME</label>
                                    <GlassInput type="text" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-slate-500 dark:text-silver-mist text-sm font-mono mb-2 transition-colors duration-700">COMM_CHANNEL (Email)</label>
                                    <GlassInput type="email" placeholder="john@company.com" />
                                </div>
                                <div>
                                    <label className="block text-slate-500 dark:text-silver-mist text-sm font-mono mb-2 transition-colors duration-700">TARGET_OBJECTIVE</label>
                                    <div className="relative">
                                        <select className="w-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-deep-navy dark:text-white focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all appearance-none cursor-pointer hover:bg-white/70 dark:hover:bg-white/10">
                                            <option className="bg-white dark:bg-deep-navy text-deep-navy dark:text-white">One-Page Website</option>
                                            <option className="bg-white dark:bg-deep-navy text-deep-navy dark:text-white">Chatbot IA</option>
                                            <option className="bg-white dark:bg-deep-navy text-deep-navy dark:text-white">Automatización</option>
                                            <option className="bg-white dark:bg-deep-navy text-deep-navy dark:text-white">Consultoría General</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                            <svg className="w-4 h-4 text-slate-500 dark:text-silver-mist" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <LiquidButton variant="glow" className="w-full mt-6 group">
                                    <span className="flex items-center justify-center gap-2">
                                        INICIAR TRANSMISIÓN <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                </LiquidButton>
                            </form>
                        </GlassCard>
                    </motion.div>

                    {/* Floating Stats Card - Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center gap-6"
                    >
                        <GlassCard variant="basic" className="hover:border-warning-amber/30 dark:hover:border-neon-cyan/30 bg-gray-50/50 dark:bg-white/5" hoverEffect>
                            <Zap className="w-8 h-8 text-warning-amber mb-4" />
                            <h3 className="text-xl font-bold text-deep-navy dark:text-white mb-2 transition-colors duration-700">Velocidad Extrema</h3>
                            <p className="text-slate-600 dark:text-silver-mist text-sm transition-colors duration-700">Entregables funcionales en días, no meses. Tu competencia sigue planeando mientras tú ya estás vendiendo.</p>
                        </GlassCard>

                        <GlassCard variant="basic" className="hover:border-electric-blue/30 bg-gray-50/50 dark:bg-white/5" hoverEffect>
                            <MessageSquare className="w-8 h-8 text-electric-blue dark:text-neon-cyan mb-4 transition-colors duration-700" />
                            <h3 className="text-xl font-bold text-deep-navy dark:text-white mb-2 transition-colors duration-700">Soporte Directo</h3>
                            <p className="text-slate-600 dark:text-silver-mist text-sm transition-colors duration-700">Hablas con ingenieros, no con vendedores. Comunicación directa por WhatsApp durante todo el proyecto.</p>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
