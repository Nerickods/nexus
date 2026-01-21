"use client";

import { motion } from "framer-motion";

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
        <section className="relative py-24 md:py-32 bg-deep-navy">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
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
                            className="holo-card p-8 rounded-2xl hover:border-electric-blue/50 
                       hover:-translate-y-2 transition-all duration-300 cursor-default group"
                        >
                            <span className="text-5xl mb-6 block filter drop-shadow-glow">{point.emoji}</span>
                            <h3 className="text-xl font-display font-bold mb-4 text-white group-hover:text-electric-blue transition-colors">
                                &quot;{point.quote}&quot;
                            </h3>
                            <p className="text-silver-mist leading-relaxed font-body">
                                {point.description}
                            </p>
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
                    <p className="text-lg md:text-xl text-silver-mist mb-4">
                        No estás solo. El{" "}
                        <span className="text-neon-cyan font-semibold">73%</span> de los
                        emprendedores mexicanos sienten que la tecnología avanza más rápido
                        de lo que pueden adaptarse.
                    </p>
                    <p className="text-xl md:text-2xl font-semibold text-white">
                        Pero hay una forma de ponerte al día.{" "}
                        <span className="text-warning-amber">Rápido.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
