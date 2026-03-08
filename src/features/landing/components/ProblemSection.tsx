"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GlassCard } from "@/shared/components/GlassCard";

const painPoints = [
    {
        emoji: "😰",
        quote: "Pierdo clientes porque no me encuentran online",
        description:
            "Tu competencia ya tiene presencia digital. Cada día que pasas invisible, son clientes que nunca sabrán que existes.",
    },
    {
        emoji: "⏰",
        quote: "Paso horas en tareas repetitivas que me consumen",
        description:
            "Responder las mismas preguntas. Agendar citas manualmente. Horas que podrías dedicar a hacer crecer tu negocio.",
    },
    {
        emoji: "💸",
        quote: "Gasto en publicidad pero no veo resultados",
        description:
            "Sin una landing optimizada y automatización, cada peso en ads es dinero que se evapora sin convertir.",
    },
    {
        emoji: "😵",
        quote: "La tecnología me abruma y no sé por dónde empezar",
        description:
            'Escuchas "IA", "automatización", "chatbots"... pero todo suena demasiado complicado o caro para tu negocio.',
    },
];

export default function ProblemSection() {
    return (
        <section className="relative py-24 md:py-32 bg-white dark:bg-deep-navy overflow-hidden transition-colors duration-700">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                {/* Dark Mode Texture */}
                <div className="absolute inset-0 z-0 opacity-0 dark:opacity-40 mix-blend-color-dodge transition-opacity duration-700">
                    <Image
                        src="/assets/backgrounds/bg-problem.png"
                        alt="Digital Chaos"
                        fill
                        className="object-cover"
                        quality={90}
                    />
                </div>
                {/* Light Mode Texture */}
                <div className="absolute inset-0 z-0 opacity-40 dark:opacity-0 mix-blend-color-dodge transition-opacity duration-700">
                    <Image
                        src="/assets/backgrounds/bg-problem-light.png"
                        alt="Digital Chaos Light"
                        fill
                        className="object-cover"
                        quality={90}
                    />
                </div>
            </div>
            {/* Dark Overlay for readability - Radial Gradient */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#ffffff_90%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#0A0F1C_90%)] pointer-events-none transition-all duration-700" />

            {/* Top Transition Gradient */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent dark:from-deep-navy dark:to-transparent z-10 pointer-events-none transition-colors duration-700" />

            {/* Bottom Transition Gradient */}
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-deep-navy dark:via-deep-navy/80 z-10 pointer-events-none transition-colors duration-700" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-deep-navy dark:text-white transition-colors duration-700">
                        ¿Te Suena <span className="text-gradient">Familiar</span>?
                    </h2>
                </motion.div>

                {/* Pain Point Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard
                                variant="basic"
                                className="h-full p-8 hover:border-electric-blue/50 group bg-white/50 dark:bg-white/5"
                                hoverEffect
                            >
                                <span className="text-5xl mb-6 block filter drop-shadow-glow">{point.emoji}</span>
                                <h3 className="text-xl font-display font-bold mb-4 text-deep-navy dark:text-white group-hover:text-electric-blue transition-colors duration-700">
                                    &quot;{point.quote}&quot;
                                </h3>
                                <p className="text-slate-600 dark:text-silver-mist leading-relaxed font-body transition-colors duration-700">
                                    {point.description}
                                </p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                {/* Closing Statement */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <p className="text-lg md:text-xl text-slate-600 dark:text-silver-mist mb-4 transition-colors duration-700">
                        No estás solo. El{" "}
                        <span className="text-electric-blue dark:text-neon-cyan font-semibold">73%</span> de los
                        emprendedores mexicanos sienten que la tecnología avanza más rápido
                        de lo que pueden adaptarse.
                    </p>
                    <p className="text-xl md:text-2xl font-semibold text-deep-navy dark:text-white transition-colors duration-700">
                        Pero hay una forma de ponerte al día.{" "}
                        <span className="text-warning-amber">Rápido.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
