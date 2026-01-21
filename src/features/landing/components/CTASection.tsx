"use client";

import { motion } from "framer-motion";
import { Send, Zap, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function CTASection() {
    return (
        <section id="cta" className="relative py-32 bg-deep-navy overflow-hidden flex items-center justify-center">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 opacity-25 mix-blend-screen pointer-events-none">
                <Image
                    src="/assets/backgrounds/bg-cta.png"
                    alt="Warp Speed Action"
                    fill
                    className="object-cover"
                    quality={90}
                />
            </div>

            {/* Reactor Core Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/20 rounded-full blur-[100px] animate-pulse-glow" />

            {/* Overlay for form visibility */}
            <div className="absolute inset-0 bg-deep-navy/40 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white text-shadow-glow">
                        ¿Listo Para Conectar Tu Negocio <span className="text-gradient">Con El Futuro</span>?
                    </h2>
                    <p className="text-xl text-silver-mist max-w-2xl mx-auto">
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
                        className="bg-[#0a0f1c]/90 border border-electric-blue/30 rounded-2xl p-8 text-left shadow-2xl relative overflow-hidden backdrop-blur-md"
                    >
                        {/* Scanline Effect */}
                        <div className="absolute inset-0 bg-scanline opacity-5 pointer-events-none" />

                        <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                            <span className="ml-auto font-mono text-xs text-electric-blue">SECURE_CHANNEL_v1.2</span>
                        </div>

                        <form className="space-y-4 relative z-10">
                            <div>
                                <label className="block text-silver-mist text-sm font-mono mb-2">IDENTIFIER_NAME</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all placeholder:text-white/20" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-silver-mist text-sm font-mono mb-2">COMM_CHANNEL (Email)</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all placeholder:text-white/20" placeholder="john@company.com" />
                            </div>
                            <div>
                                <label className="block text-silver-mist text-sm font-mono mb-2">TARGET_OBJECTIVE</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all">
                                    <option className="bg-deep-navy">One-Page Website</option>
                                    <option className="bg-deep-navy">Chatbot IA</option>
                                    <option className="bg-deep-navy">Automatización</option>
                                    <option className="bg-deep-navy">Consultoría General</option>
                                </select>
                            </div>
                            <button className="w-full bg-gradient-cta hover:shadow-glow-strong text-white font-bold py-4 rounded-xl mt-4 flex items-center justify-center gap-2 group transition-all transform active:scale-95">
                                INICIAR TRANSMISIÓN <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                    {/* Floating Stats Card - Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center gap-6"
                    >
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-neon-cyan/30 transition-colors">
                            <Zap className="w-8 h-8 text-warning-amber mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Velocidad Extrema</h3>
                            <p className="text-silver-mist text-sm">Entregables funcionales en días, no meses. Tu competencia sigue planeando mientras tú ya estás vendiendo.</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-electric-blue/30 transition-colors">
                            <MessageSquare className="w-8 h-8 text-neon-cyan mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Soporte Directo</h3>
                            <p className="text-silver-mist text-sm">Hablas con ingenieros, no con vendedores. Comunicación directa por WhatsApp durante todo el proyecto.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
