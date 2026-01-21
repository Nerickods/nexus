"use client";

import { motion } from "framer-motion";
import { MoveRight, Zap } from "lucide-react";
import Image from "next/image";

export default function NewEraSection() {
    return (
        <section className="relative py-32 overflow-hidden bg-deep-navy">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 opacity-20 mix-blend-color-dodge pointer-events-none">
                <Image
                    src="/assets/backgrounds/bg-new-era.png"
                    alt="New Era Dawn"
                    fill
                    className="object-cover"
                    quality={90}
                />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-deep-navy/95 to-cyber-purple/20 opacity-90 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                {/* Visual Content - Timeline/Grid */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-electric-blue/20 blur-[100px] rounded-full" />
                    <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
                        {/* Fake Dashboard Elements */}
                        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <span className="text-xs font-mono text-silver-mist">EVOLUTION_TRACKER_v1.0</span>
                        </div>

                        <div className="space-y-6">
                            {[
                                { year: "1990", label: "Internet Era", color: "bg-white/20" },
                                { year: "2005", label: "Mobile Era", color: "bg-white/40" },
                                { year: "2015", label: "Cloud Era", color: "bg-white/60" },
                                { year: "2024", label: "AI Revolution", color: "bg-neon-cyan active" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <span className="text-sm font-mono text-silver-mist w-12">{item.year}</span>
                                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 1, delay: i * 0.2 }}
                                            className={`h-full ${item.color.includes("active") ? "bg-neon-cyan shadow-glow" : "bg-white/30"}`}
                                        />
                                    </div>
                                    <span className={`text-sm font-bold ${item.color.includes("active") ? "text-neon-cyan" : "text-white/50"}`}>
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple text-sm font-medium mb-6">
                        <Zap className="w-4 h-4 fill-cyber-purple" />
                        <span className="tracking-wide">CAMBIO DE PARADIGMA</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                        Bienvenido a la Era Más Transformadora de la
                        <span className="text-gradient"> Historia Humana</span>.
                    </h2>

                    <p className="text-lg text-silver-mist mb-6 leading-relaxed">
                        La Inteligencia Artificial no es una "tendencia". Es un cambio fundamental
                        en cómo funciona el mundo, similar a la invención de la electricidad o internet.
                    </p>

                    <div className="p-6 bg-white/5 border-l-4 border-neon-cyan rounded-r-xl mb-8">
                        <p className="text-white text-lg font-medium italic">
                            &quot;En los próximos 5 años, habrá dos tipos de negocios: los que usan IA
                            y los que ya no existen.&quot;
                        </p>
                    </div>

                    <a href="#cta" className="inline-flex items-center gap-2 text-neon-cyan font-bold hover:gap-4 transition-all">
                        PREPARA TU NEGOCIO <MoveRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
