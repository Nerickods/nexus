"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Image from "next/image";

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
        <section id="pricing" className="relative py-24 bg-deep-navy overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 opacity-15 mix-blend-overlay pointer-events-none">
                <Image
                    src="/assets/backgrounds/bg-pricing.png"
                    alt="Premium Vault"
                    fill
                    className="object-cover"
                    quality={90}
                />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-deep-navy via-deep-navy/90 to-deep-navy/50 pointer-events-none" />


            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Precios <span className="text-gradient">Transparentes</span>
                    </h2>
                    <p className="text-silver-mist text-lg max-w-2xl mx-auto">
                        Sin costos ocultos ni mensualidades forzosas. Inversión única para resultados continuos.
                    </p>
                </motion.div>

                {/* Launch Offer Banner */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-electric-blue/10 border border-electric-blue/30 rounded-2xl p-4 mb-12 max-w-3xl mx-auto text-center backdrop-blur-sm"
                >
                    <p className="text-neon-cyan font-semibold flex items-center justify-center gap-2">
                        <Star className="w-5 h-5 fill-neon-cyan" />
                        OFERTA DE LANZAMIENTO NEXUS.AI:
                        <span className="text-white font-normal">15% de descuento en todos los servicios durante el mes de lanzamiento.</span>
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className={`p-8 rounded-3xl border relative flex flex-col backdrop-blur-md bg-deep-navy/80 h-full ${plan.highlight
                                ? "border-neon-cyan/50 shadow-neon bg-deep-navy/60"
                                : "border-white/10 hover:border-white/20"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-cyan text-deep-navy font-bold px-4 py-1 rounded-full text-sm shadow-glow">
                                    {plan.tag}
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                            <div className="text-3xl md:text-4xl font-display font-bold text-electric-blue mb-4">
                                {plan.price}
                                {plan.price !== "Cotizar" && <span className="text-lg text-silver-mist font-normal"> mxn</span>}
                            </div>
                            <p className="text-silver-mist text-sm mb-8">{plan.description}</p>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-neon-cyan" : "text-electric-blue"}`} />
                                        <span className="text-sm text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.highlight
                                ? "bg-neon-cyan text-deep-navy hover:bg-white hover:scale-105 shadow-glow"
                                : "bg-white/5 text-white hover:bg-white/10 border border-white/5"
                                }`}>
                                Empezar Ahora
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
