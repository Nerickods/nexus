"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/shared/components/GlassCard";

const painPoints = [
    {
        emoji: "💸",
        quote: "Pierdo dinero todos los días en procesos operativos que se repiten.",
        description:
            "Tu equipo invierte horas copiando, pegando y gestionando datos manualmente en lugar de enfocarse en trabajo de alto valor.",
    },
    {
        emoji: "🧱",
        quote: "El negocio está estancado. No sabemos cómo escalar.",
        description:
            "Has llegado a un cuello de botella. Agregar más personas a la plantilla ya no es rentable ni sostenible.",
    },
    {
        emoji: "👻",
        quote: "Invertimos en marketing, pero no conseguimos clientes nuevos.",
        description:
            "El tráfico llega a tu sitio, pero tienes fricción en el embudo. Los leads no se califican y se enfrían antes de hablar contigo.",
    },
    {
        emoji: "😵",
        quote: "La IA suena genial, pero implementar tecnología siempre es un dolor.",
        description:
            'Te preoocupa depender de técnicos caros para actualizar una sola línea o que tu equipo rechace usar el nuevo sistema.',
    },
];

export default function ProblemSection() {
    return (
        <section className="relative py-24 md:py-32 bg-transparent overflow-hidden">

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
                        La mayoría de empresas B2B comparten este diagnóstico. El problema no es tu equipo,
                        <span className="text-electric-blue dark:text-neon-cyan font-semibold"> es tu sistema actual.</span>
                    </p>
                    <p className="text-xl md:text-2xl font-semibold text-deep-navy dark:text-white transition-colors duration-700">
                        Podemos construir un motor predecible para ti.{" "}
                        <span className="text-warning-amber">Y hacerlo increíblemente rápido.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
