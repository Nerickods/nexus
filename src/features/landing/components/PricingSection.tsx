"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { GlassCard } from "@/shared/components/GlassCard";
import { LiquidButton } from "@/shared/components/LiquidButton";

const plans = [
    {
        name: "Landing Page",
        price: "$4,500",
        description: "Perfecto para campañas de venta y profesionales independientes.",
        features: [
            "Diseño de Alto Impacto (One-Page)",
            "Copywriting Persuasivo",
            "SEO Técnico Básico",
            "Formulario de Contacto",
            "Entrega en 5 días",
        ],
        highlight: false,
    },
    {
        name: "Web Corporativa + IA",
        price: "$8,500",
        description: "Para negocios que buscan autoridad y automatización.",
        features: [
            "Hasta 5 Secciones",
            "Blog / CMS Básico",
            "Chatbot IA Entrenamiento Básico",
            "Integración con WhatsApp",
            "Optimización de Velocidad",
            "Entrega en 10 días",
        ],
        highlight: true,
        tag: "Más Popular",
    },
    {
        name: "Nexus Custom",
        price: "Cotizar",
        description: "Soluciones complejas para problemas complejos.",
        features: [
            "Desarrollo Full-Stack",
            "Integraciones API Avanzadas",
            "Dashboards de Datos",
            "Automatización de Procesos (RPA)",
            "Soporte Prioritario",
        ],
        highlight: false,
    },
];

export default function PricingSection() {
    return (
        <section id="pricing" className="relative py-24 bg-transparent overflow-hidden">

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-deep-navy dark:text-white mb-6 transition-colors duration-700">
                        Precios <span className="text-gradient">Transparentes</span>
                    </h2>
                    <p className="text-slate-600 dark:text-silver-mist text-lg max-w-2xl mx-auto transition-colors duration-700">
                        Sin costos ocultos ni mensualidades forzosas. Inversión única para resultados continuos.
                    </p>
                </motion.div>

                {/* Launch Offer Banner */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <GlassCard variant="premium" className="flex items-center justify-center gap-2 mb-12 max-w-3xl mx-auto text-center !p-4 !bg-electric-blue/10 !border-electric-blue/30">
                        <p className="text-electric-blue dark:text-neon-cyan font-semibold flex items-center justify-center gap-2 flex-wrap transition-colors duration-700">
                            <Star className="w-5 h-5 fill-electric-blue dark:fill-neon-cyan transition-colors duration-700" />
                            OFERTA DE LANZAMIENTO NEXUS.AI:
                            <span className="text-deep-navy dark:text-white font-normal transition-colors duration-700">15% de descuento en todos los servicios durante el mes de lanzamiento.</span>
                        </p>
                    </GlassCard>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="h-full"
                        >
                            <GlassCard
                                variant={plan.highlight ? "premium" : "basic"}
                                className={`h-full flex flex-col p-8 ${plan.highlight ? "!bg-white/80 dark:!bg-deep-navy/60 !border-electric-blue/50 dark:!border-neon-cyan/50 shadow-lg dark:shadow-neon" : "!bg-white/60 dark:!bg-deep-navy/80 hover:!border-electric-blue/20 dark:hover:!border-white/20"} transition-colors duration-700`}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-electric-blue dark:bg-neon-cyan text-white dark:text-deep-navy font-bold px-4 py-1 rounded-full text-sm shadow-lg dark:shadow-glow transition-colors duration-700">
                                        {plan.tag}
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-deep-navy dark:text-white mb-2 transition-colors duration-700">{plan.name}</h3>
                                <div className="text-3xl md:text-4xl font-display font-bold text-electric-blue mb-4">
                                    {plan.price}
                                    {plan.price !== "Cotizar" && <span className="text-lg text-slate-500 dark:text-silver-mist font-normal transition-colors duration-700"> mxn</span>}
                                </div>
                                <p className="text-slate-600 dark:text-silver-mist text-sm mb-8 transition-colors duration-700">{plan.description}</p>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-electric-blue dark:text-neon-cyan" : "text-electric-blue"} transition-colors duration-700`} />
                                            <span className="text-sm text-slate-600 dark:text-gray-300 transition-colors duration-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <LiquidButton
                                    variant={plan.highlight ? "glow" : "secondary"}
                                    className="w-full"
                                >
                                    Empezar Ahora
                                </LiquidButton>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

