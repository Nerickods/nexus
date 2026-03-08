"use client";

import { motion } from "framer-motion";
import { Laptop, Code, Brain, Cpu, ArrowRight } from "lucide-react";
import Image from "next/image";
import { GlassCard } from "@/shared/components/GlassCard";

const services = [
    {
        icon: Laptop,
        title: "Landing Pages de Alta Conversión",
        description:
            "Diseño persuasivo + Arquitectura técnica. Convertimos tráfico frío en clientes calientes.",
        tech: ["Carga Instantánea", "Experiencia Inmersiva", "Diseño Persuasivo"],
    },
    {
        icon: Brain,
        title: "Chatbots IA Avanzados",
        description:
            "No más respuestas genéricas. Entrenamos modelos con TU data para atención 24/7 indistinguible de un humano.",
        tech: ["Lenguaje Natural", "Memoria Contextual", "Aprendizaje Continuo"],
    },
    {
        icon: Cpu,
        title: "Automatización de Procesos (RPA)",
        description:
            "Scripts inteligentes que conectan tus apps. Si lo haces más de 3 veces, lo podemos automatizar.",
        tech: ["Conexión Total", "Tiempo Real", "0% Error Humano"],
    },
    {
        icon: Code,
        title: "Desarrollo a Medida",
        description:
            "¿Necesitas algo único? Construimos soluciones full-stack escalables y seguras.",
        tech: ["Escalabilidad Global", "Seguridad Bancaria", "Infraestructura Robusta"],
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="relative py-24 bg-white dark:bg-deep-navy transition-colors duration-700 overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                {/* Dark Mode Texture */}
                <div className="absolute inset-0 z-0 opacity-0 dark:opacity-10 mix-blend-color-dodge transition-opacity duration-700">
                    <Image
                        src="/assets/backgrounds/bg-services.png"
                        alt="Engineering Blueprints"
                        fill
                        className="object-cover"
                        quality={90}
                    />
                </div>
                {/* Light Mode Texture */}
                <div className="absolute inset-0 z-0 opacity-10 dark:opacity-0 mix-blend-color-dodge transition-opacity duration-700">
                    <Image
                        src="/assets/backgrounds/bg-services-light.png"
                        alt="Services Grid Light"
                        fill
                        className="object-cover"
                        quality={90}
                    />
                </div>
            </div>

            {/* Top Transition Gradient */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent dark:from-deep-navy dark:to-transparent z-10 pointer-events-none transition-colors duration-700" />

            {/* Bottom Transition Gradient */}
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-deep-navy dark:via-deep-navy/80 to-transparent z-10 pointer-events-none transition-colors duration-700" />

            {/* Background Overlay for text readability */}
            <div className="absolute inset-0 bg-white/60 dark:bg-deep-navy/60 pointer-events-none transition-colors duration-700" />

            {/* Background Décor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-electric-blue/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-cyber-purple/5 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-electric-blue dark:text-neon-cyan font-mono text-sm tracking-widest uppercase mb-2 block transition-colors duration-700">
                        // Nuestros Servicios
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-deep-navy dark:text-white mb-6 transition-colors duration-700">
                        Soluciones Para Cada <span className="text-gradient">Necesidad</span>
                    </h2>
                    <p className="text-slate-600 dark:text-silver-mist max-w-2xl text-lg transition-colors duration-700">
                        Cubrimos todo el espectro de necesidades digitales modernas.
                        Desde la primera impresión hasta la automatización total.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard
                                variant="basic"
                                className="h-full group hover:border-electric-blue/30 flex flex-col backdrop-blur-sm bg-gray-50 dark:bg-[#0a0f1c]"
                                hoverEffect
                            >
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 group-hover:text-electric-blue transition-all duration-700">
                                        <service.icon className="w-6 h-6 text-slate-500 dark:text-silver-mist group-hover:text-electric-blue transition-colors duration-700" />
                                    </div>

                                    <h3 className="text-xl font-bold text-deep-navy dark:text-white mb-3 group-hover:text-electric-blue transition-colors duration-700">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-silver-mist text-sm leading-relaxed mb-6 flex-grow transition-colors duration-700">
                                        {service.description}
                                    </p>

                                    <div className="border-t border-gray-200 dark:border-white/5 pt-4 mt-auto transition-colors duration-700">
                                        <div className="flex flex-wrap gap-2">
                                            {service.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="text-[10px] uppercase tracking-wider font-mono text-slate-500 dark:text-white/40 bg-gray-200 dark:bg-white/5 px-2 py-1 rounded-sm transition-colors duration-700"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-4 flex items-center gap-2 text-electric-blue dark:text-neon-cyan text-sm font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0 duration-700">
                                            Ver detalles <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
