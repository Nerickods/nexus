"use client";

import { motion } from "framer-motion";
import { Palette, Bot, Zap, Check } from "lucide-react";
import Image from "next/image";

const pillars = [
    {
        icon: Palette,
        title: "Presencia Digital Premium",
        description:
            "Websites y landing pages que no solo se ven increíbles, sino que están diseñados para CONVERTIR visitantes en clientes.",
        features: [
            "Diseño personalizado a tu marca",
            "Optimizados para captura de leads",
            "Velocidad de carga ultrarrápida",
        ],
    },
    {
        icon: Bot,
        title: "Automatización Inteligente",
        description:
            "Chatbots con IA que atienden a tus clientes 24/7. Responden preguntas, agendan citas y capturan leads mientras tú duermes.",
        features: [
            "Disponibles en WhatsApp, Instagram, Web",
            "Entrenados con tu información",
            "Escalan sin contratar personal",
        ],
    },
    {
        icon: Zap,
        title: "Procesos Optimizados",
        description:
            "Automatizamos las tareas repetitivas que consumen tu tiempo. Desde emails hasta facturación.",
        features: [
            "Integraciones con tus herramientas",
            "Flujos de trabajo personalizados",
            "ROI visible desde el primer mes",
        ],
    },
];

export default function SolutionSection() {
    return (
        <section className="relative py-24 md:py-32 bg-deep-navy overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 opacity-15 mix-blend-screen pointer-events-none">
                <Image
                    src="/assets/backgrounds/bg-solution.png"
                    alt="Architectural Order"
                    fill
                    className="object-cover"
                    quality={90}
                />
            </div>
            {/* Deepening Gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-deep-navy via-deep-navy/80 to-deep-navy pointer-events-none" />


            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Logo Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <motion.h2
                        animate={{
                            textShadow: [
                                "0 0 20px rgba(0, 102, 255, 0.5)",
                                "0 0 40px rgba(0, 102, 255, 0.8)",
                                "0 0 20px rgba(0, 102, 255, 0.5)",
                            ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-5xl md:text-7xl font-bold text-gradient"
                    >
                        NEXUS.AI
                    </motion.h2>
                    <p className="text-xl md:text-2xl text-silver-mist mt-2">
                        Conectamos Tu Negocio Con El Futuro
                    </p>
                </motion.div>

                {/* Intro */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-lg md:text-xl text-silver-mist max-w-3xl mx-auto mb-16"
                >
                    Somos especialistas en traducir el poder de la Inteligencia Artificial
                    a soluciones prácticas para tu negocio.
                    <br />
                    <span className="text-white font-semibold">
                        Sin importar tu industria. Sin importar tu nivel técnico.
                    </span>
                </motion.p>

                {/* Pillars */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative p-8 rounded-3xl holo-card group backdrop-blur-md bg-deep-navy/50"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(0,102,255,0.3)] transition-all">
                                <pillar.icon className="w-8 h-8 text-electric-blue group-hover:text-neon-cyan transition-colors" />
                            </div>

                            <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-electric-blue transition-colors">{pillar.title}</h3>
                            <p className="text-silver-mist mb-6 font-body leading-relaxed">{pillar.description}</p>

                            <ul className="space-y-3">
                                {pillar.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan/50" />
                                        <span className="text-sm text-silver-mist group-hover:text-white transition-colors">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Differentiator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative text-center max-w-3xl mx-auto"
                >
                    {/* Quote Decoration */}
                    <span className="absolute -top-8 left-0 text-9xl text-electric-blue/10 font-serif">
                        &quot;
                    </span>

                    <h3 className="text-2xl font-bold mb-6">¿Qué nos hace diferentes?</h3>

                    <p className="text-lg text-silver-mist mb-6">
                        Llevamos <span className="text-neon-cyan font-semibold">+2 años</span>{" "}
                        perfeccionando el arte de adaptar tecnología de punta a negocios reales.
                    </p>

                    <p className="text-xl font-semibold text-white mb-4">
                        No vendemos plantillas genéricas.
                        <br />
                        Construimos soluciones a <span className="text-warning-amber">TU</span> medida.
                    </p>

                    <p className="text-silver-mist">
                        Desde los colores de tu marca hasta la voz de tu chatbot.
                        <br />
                        Todo es diseñado para que se sienta{" "}
                        <span className="text-neon-cyan font-semibold">100% TUYO</span>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
