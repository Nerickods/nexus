"use client";

import { motion } from "framer-motion";
import { ArrowDown, Rocket, Sparkles, Terminal, Activity, ShieldCheck } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-navy">
            {/* 1. Background Universe with Portal Effect */}
            <div className="absolute inset-0 z-0">
                {/* Dynamic Background Gradient */}
                <div className="absolute inset-0 bg-gradient-hero animate-pulse-glow opacity-80" />

                {/* Abstract Grid Floor (Cyber Landscape) */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                        transform: 'perspective(1000px) rotateX(60deg) translateY(100px) scale(2)',
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)'
                    }}
                />

                {/* Floating "Portal" Elements (Glass Panels in 3D Space) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, x: 100, rotateY: -20 }}
                        animate={{ opacity: 1, x: 0, rotateY: -10 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute top-[20%] right-[5%] w-[500px] h-[350px] glass-panel rounded-3xl border-l-[1px] border-t-[1px] border-electric-blue/30 hidden lg:flex flex-col p-8 transform preserve-3d shadow-glow-sm"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex gap-2">
                                <Activity className="w-5 h-5 text-neon-cyan animate-pulse" />
                                <span className="text-xs font-mono text-neon-cyan/80">SYSTEM_OPTIMIZED</span>
                            </div>
                            <div className="flex gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-electric-blue" />
                                <div className="w-2 h-2 rounded-full bg-white/20" />
                            </div>
                        </div>
                        {/* Abstract Data Visualization */}
                        <div className="flex-1 space-y-4">
                            <div className="flex items-end gap-2 h-32 border-b border-white/5 pb-2">
                                {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                        className="w-full bg-gradient-to-t from-electric-blue/20 to-neon-cyan/60 rounded-t-sm"
                                    />
                                ))}
                            </div>
                            <div className="flex justify-between text-xs font-mono text-silver-mist">
                                <span>GROWTH_METRICS</span>
                                <span className="text-success-green">+124.5%</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -100, rotateY: 20 }}
                        animate={{ opacity: 1, x: 0, rotateY: 10 }}
                        transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
                        className="absolute bottom-[20%] left-[5%] w-[350px] h-[220px] glass-panel rounded-3xl border-r-[1px] border-t-[1px] border-cyber-purple/30 hidden lg:flex flex-col p-6 transform preserve-3d shadow-neon"
                    >
                        <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
                            <Terminal className="w-5 h-5 text-cyber-purple" />
                            <span className="text-xs font-mono text-cyber-purple">AUTO_RESPONSE_LOG</span>
                        </div>
                        <div className="space-y-2 font-mono text-[10px] text-silver-mist/80">
                            <p>&gt; Initializing Neural Link...</p>
                            <p className="text-neon-cyan">&gt; Connection Established (14ms)</p>
                            <p>&gt; Loading User Context...</p>
                            <p className="text-success-green">&gt; Conversion Probability: 98%</p>
                        </div>
                    </motion.div>
                </div>

                {/* Ambient Glows */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric-blue/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cyber-purple/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 mix-blend-screen" />
            </div>

            {/* 2. Hero Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-electric-blue/20 backdrop-blur-md shadow-glow-sm hover:border-neon-cyan/50 transition-colors"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-cyan"></span>
                    </span>
                    <span className="text-xs font-mono tracking-widest text-neon-cyan uppercase">Nexus_System v2.0 Online</span>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-9xl font-display font-bold leading-[0.95] mb-8 tracking-tight"
                >
                    El Futuro <span className="text-silver-mist opacity-50 font-light italic">YA</span> Llegó.
                    <br />
                    <span className="text-gradient drop-shadow-neon">Adáptate o Muere.</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl text-lg md:text-xl text-silver-mist leading-relaxed mb-12 font-body"
                >
                    Consultoría de Inteligencia Artificial de alto nivel.
                    <br className="hidden md:block" />
                    Entendemos que <span className="text-pure-white font-semibold border-b border-warning-amber/50 pb-0.5">la velocidad es la única divisa que importa</span>.
                    <br />
                    No vendemos herramientas. Instalamos superpoderes.
                </motion.p>

                {/* CTA Buttons - Reactor Core Logic */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-6 items-center"
                >
                    <a
                        href="#cta"
                        className="group relative overflow-hidden bg-gradient-cta text-white font-bold tracking-wide px-10 py-5 rounded-xl shadow-glow hover:shadow-glow-strong hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                        <span className="relative z-10 flex items-center gap-3 text-lg">
                            INICIAR TRANSFORMACIÓN <Rocket className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                        </span>
                        {/* Internal Shine Effect */}
                        <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12" />
                    </a>

                    <a
                        href="#services"
                        className="text-silver-mist font-medium hover:text-white transition-colors flex items-center gap-2 group px-6 py-4 rounded-xl hover:bg-white/5"
                    >
                        Explorar Sistemas <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform text-electric-blue" />
                    </a>
                </motion.div>
            </div>

            {/* 3. Bottom Gradient Fade */}
            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-deep-navy via-deep-navy/80 to-transparent z-10 pointer-events-none" />
        </section>
    );
}
