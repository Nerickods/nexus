"use client";

import { motion } from "framer-motion";
import { Trophy, TrendingUp, Users, Clock } from "lucide-react";

const results = [
    { icon: TrendingUp, value: "+340%", label: "Leads captados" },
    { icon: Users, value: "2.1X", label: "Tasa de conversión" },
    { icon: Clock, value: "<10", label: "Días de desarrollo" },
];

export default function CaseStudySection() {
    return (
        <section className="relative py-24 md:py-32 bg-deep-navy">
            <div className="max-w-5xl mx-auto px-6">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Resultados <span className="text-gradient">Reales</span>, No
                        Promesas
                    </h2>
                </motion.div>

                {/* Case Study Card */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative glassmorphism rounded-3xl overflow-hidden"
                >
                    {/* Trophy Badge */}
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-warning-amber rounded-full flex items-center justify-center shadow-lg z-10">
                        <Trophy className="w-10 h-10 text-deep-navy" />
                    </div>

                    <div className="p-8 md:p-12 pt-16">
                        {/* Badge */}
                        <span className="inline-block px-4 py-2 bg-electric-blue/20 text-electric-blue text-sm font-semibold rounded-full mb-6">
                            🏆 CASO DE ÉXITO
                        </span>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold mb-8">
                            Academia de MMA — Transformación Digital
                        </h3>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* Challenge */}
                            <div>
                                <h4 className="text-lg font-semibold text-warning-amber mb-3">
                                    EL DESAFÍO
                                </h4>
                                <p className="text-silver-mist">
                                    Una academia de artes marciales mixtas con excelente
                                    reputación local pero casi nula presencia digital. Dependían
                                    100% del boca a boca y publicidad impresa.
                                </p>
                            </div>

                            {/* Solution */}
                            <div>
                                <h4 className="text-lg font-semibold text-success-green mb-3">
                                    LA SOLUCIÓN
                                </h4>
                                <p className="text-silver-mist">
                                    Diseñamos una landing page optimizada para captura de leads
                                    con una identidad visual que reflejaba la energía y
                                    profesionalismo de su marca.
                                </p>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="glassmorphism p-4 rounded-xl mb-8">
                            <p className="text-sm text-silver-mist">
                                ▸ Diseño dark/premium acorde a la identidad MMA &nbsp;•&nbsp; ▸
                                Formulario de registro para clase de prueba gratis &nbsp;•&nbsp;
                                ▸ Testimonios de alumnos &nbsp;•&nbsp; ▸ Galería de
                                instalaciones &nbsp;•&nbsp; ▸ Integración WhatsApp Business
                            </p>
                        </div>

                        {/* Results Grid */}
                        <div className="grid grid-cols-3 gap-4 p-6 bg-electric-blue/10 rounded-xl mb-8">
                            {results.map((result, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="text-center"
                                >
                                    <result.icon className="w-6 h-6 text-neon-cyan mx-auto mb-2" />
                                    <p className="text-3xl md:text-4xl font-bold text-neon-cyan">
                                        {result.value}
                                    </p>
                                    <p className="text-xs text-silver-mist">{result.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Testimonial */}
                        <div className="border-l-4 border-electric-blue pl-6">
                            <p className="text-lg md:text-xl italic text-white mb-4">
                                &quot;Por primera vez tenemos un flujo constante de prospectos
                                interesado llegando directamente. La landing se paga sola cada
                                mes.&quot;
                            </p>
                            <p className="text-silver-mist">— Propietario, Academia MMA</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
