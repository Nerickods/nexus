"use client";

import { motion } from "framer-motion";
import { MoveRight, Zap } from "lucide-react";
import Image from "next/image";

export default function NewEraSection() {
    return (
        <section className="relative py-32 overflow-hidden bg-white dark:bg-deep-navy transition-colors duration-700">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                {/* Dark Mode Texture */}
                <div className="absolute inset-0 z-0 opacity-0 dark:opacity-40 mix-blend-color-dodge transition-opacity duration-700">
                    <Image
                        src="/assets/backgrounds/bg-new-era.png"
                        alt="New Era Dawn"
                        fill
                        className="object-cover"
                        quality={90}
                    />
                </div>
                {/* Light Mode Texture */}
                <div className="absolute inset-0 z-0 opacity-40 dark:opacity-0 mix-blend-overlay transition-opacity duration-700">
                    <Image
                        src="/assets/backgrounds/bg-new-era-light.png"
                        alt="New Era Light"
                        fill
                        className="object-cover"
                        quality={90}
                    />
                </div>
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-cyber-purple/10 dark:from-deep-navy dark:via-deep-navy/90 dark:to-cyber-purple/20 opacity-70 pointer-events-none transition-colors duration-700" />

            {/* Top Transition Gradient */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent dark:from-deep-navy dark:to-transparent z-10 pointer-events-none transition-colors duration-700" />

            {/* Bottom Transition Gradient */}
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-deep-navy dark:via-deep-navy/80 z-10 pointer-events-none transition-colors duration-700" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                {/* Visual Content - Timeline/Grid */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-electric-blue/20 blur-[100px] rounded-full" />
                    <div className="relative bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl transition-colors duration-700">
                        {/* Fake Dashboard Elements */}
                        <div className="flex items-center justify-between mb-8 border-b border-gray-200 dark:border-white/5 pb-4 transition-colors duration-700">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <span className="text-xs font-mono text-slate-500 dark:text-silver-mist">EVOLUTION_TRACKER_v1.0</span>
                        </div>

                        <div className="space-y-6">
                            {[
                                { year: "1990", label: "Internet Era", color: "bg-white/20" },
                                { year: "2005", label: "Mobile Era", color: "bg-white/40" },
                                { year: "2015", label: "Cloud Era", color: "bg-white/60" },
                                { year: "2024", label: "AI Revolution", color: "bg-neon-cyan active" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <span className="text-sm font-mono text-slate-500 dark:text-silver-mist w-12">{item.year}</span>
                                    <div className="flex-1 h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 1, delay: i * 0.2 }}
                                            className={`h-full ${item.color.includes("active") ? "bg-neon-cyan shadow-glow" : "bg-white/30"}`}
                                        />
                                    </div>
                                    <span className={`text-sm font-bold ${item.color.includes("active") ? "text-neon-cyan" : "text-slate-400 dark:text-white/50"}`}>
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

                    <h2 className="text-4xl md:text-6xl font-display font-bold text-deep-navy dark:text-white mb-6 leading-tight transition-colors duration-700">
                        Bienvenido a la Era Más Transformadora de la
                        <span className="text-gradient"> Historia Humana</span>.
                    </h2>

                    <p className="text-lg text-slate-600 dark:text-silver-mist mb-6 leading-relaxed transition-colors duration-700">
                        La Inteligencia Artificial no es una "tendencia". Es un cambio fundamental
                        en cómo funciona el mundo, similar a la invención de la electricidad o internet.
                    </p>

                    <div className="p-6 bg-gray-100/50 dark:bg-white/5 border-l-4 border-neon-cyan rounded-r-xl mb-8 transition-colors duration-700">
                        <p className="text-deep-navy dark:text-white text-lg font-medium italic transition-colors duration-700">
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
