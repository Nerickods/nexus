"use client";

import { motion } from "framer-motion";
import { Laptop, Code, Brain, Cpu, ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
    {
        icon: Laptop,
        title: "Landing Pages de Alta Conversión",
        description:
            "Diseño persuasivo + Arquitectura técnica. Convertimos tráfico frío en clientes calientes.",
        tech: ["Next.js", "Framer Motion", "CRO"],
    },
    {
        icon: Brain,
        title: "Chatbots IA Avanzados",
        description:
            "No más respuestas genéricas. Entrenamos modelos con TU data para atención 24/7 indistinguible de un humano.",
        tech: ["OpenAI API", "Vector DB", "Python"],
    },
    {
        icon: Cpu,
        title: "Automatización de Procesos (RPA)",
        description:
            "Scripts inteligentes que conectan tus apps. Si lo haces más de 3 veces, lo podemos automatizar.",
        tech: ["Zapier/Make", "Webhooks", "APIs"],
    },
    {
        icon: Code,
        title: "Desarrollo a Medida",
        description:
            "¿Necesitas algo único? Construimos soluciones full-stack escalables y seguras.",
        tech: ["React/Node", "Supabase", "Cloud"],
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="relative py-24 bg-deep-navy overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 opacity-10 mix-blend-color-dodge pointer-events-none">
                <Image
                    src="/assets/backgrounds/bg-services.png"
                    alt="Engineering Blueprints"
                    fill
                    className="object-cover"
                    quality={90}
                />
            </div>

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
                    <span className="text-neon-cyan font-mono text-sm tracking-widest uppercase mb-2 block">
                        // Nuestros Servicios
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Soluciones Para Cada <span className="text-gradient">Necesidad</span>
                    </h2>
                    <p className="text-silver-mist max-w-2xl text-lg">
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
                            className="group relative bg-[#0a0f1c] border border-white/5 rounded-2xl p-6 hover:border-electric-blue/30 transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/10 flex flex-col h-full backdrop-blur-sm"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 group-hover:text-electric-blue transition-all">
                                    <service.icon className="w-6 h-6 text-silver-mist group-hover:text-electric-blue transition-colors" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-silver-mist text-sm leading-relaxed mb-6 flex-grow">
                                    {service.description}
                                </p>

                                <div className="border-t border-white/5 pt-4 mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {service.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="text-[10px] uppercase tracking-wider font-mono text-white/40 bg-white/5 px-2 py-1 rounded-sm"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-4 flex items-center gap-2 text-neon-cyan text-sm font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                                        Ver detalles <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
