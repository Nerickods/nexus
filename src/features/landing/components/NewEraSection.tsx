"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Clock } from "lucide-react";

const timeline = [
    { year: "2019", event: "GPT-2 demuestra que las máquinas pueden escribir" },
    { year: "2020", event: "La pandemia acelera la digitalización 10 años" },
    { year: "2022", event: "ChatGPT alcanza 100M usuarios en 2 meses" },
    { year: "2023", event: "La IA generativa revoluciona TODAS las industrias" },
    { year: "2024-25", event: "Empresas con IA crecen 40% más rápido" },
];

const stats = [
    { icon: TrendingUp, value: "40%", label: "Aumento en productividad" },
    { icon: Users, value: "73%", label: "Empresas planean implementar IA" },
    { icon: Zap, value: "3X", label: "Mayor conversión con chatbots" },
    { icon: Clock, value: "24/7", label: "Disponibilidad sin más personal" },
];

export default function NewEraSection() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-deep-navy/95 to-cyber-purple/20" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                        Bienvenido a la Era Más{" "}
                        <span className="text-gradient">Transformadora</span>
                        <br />
                        de la Historia Humana
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Vertical Line */}
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue via-cyber-purple to-neon-cyan" />

                        <div className="space-y-8">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-6 pl-12 relative"
                                >
                                    {/* Node */}
                                    <div className="absolute left-0 w-8 h-8 rounded-full bg-cyber-purple flex items-center justify-center shadow-glow-sm">
                                        <div className="w-3 h-3 rounded-full bg-neon-cyan" />
                                    </div>

                                    <div>
                                        <span className="text-neon-cyan font-bold text-lg">
                                            {item.year}
                                        </span>
                                        <p className="text-silver-mist mt-1">{item.event}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg md:text-xl text-silver-mist mb-6 leading-relaxed">
                            Hace apenas 5 años, la Inteligencia Artificial era ciencia ficción
                            reservada para gigantes como Google o Tesla.
                        </p>

                        <p className="text-lg md:text-xl text-white mb-6 leading-relaxed">
                            Hoy, esa misma tecnología está disponible para{" "}
                            <span className="text-neon-cyan font-semibold">TU</span> negocio.
                        </p>

                        <p className="text-lg md:text-xl text-silver-mist mb-8 leading-relaxed">
                            Por primera vez en la historia, un emprendedor con una laptop
                            puede competir con corporaciones usando las mismas herramientas
                            que antes costaban millones de dólares.
                        </p>

                        <p className="text-xl md:text-2xl font-semibold text-white">
                            La única pregunta es:
                            <br />
                            <span className="text-warning-amber">
                                ¿Serás de los que se adaptan...
                            </span>
                            <br />o de los que se quedan atrás?
                        </p>
                    </motion.div>
                </div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 glassmorphism rounded-3xl p-8 md:p-12"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <stat.icon className="w-8 h-8 text-electric-blue mx-auto mb-3" />
                                <p className="text-4xl md:text-5xl font-bold text-electric-blue mb-2">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-silver-mist">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
