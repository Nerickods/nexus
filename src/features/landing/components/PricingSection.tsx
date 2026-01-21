"use client";

import { motion } from "framer-motion";
import { Check, Star, Sparkles } from "lucide-react";

const plans = [
    {
        name: "STARTER",
        tagline: "Tu primer paso hacia el futuro",
        price: "5,900",
        popular: false,
        features: [
            "Landing Page Profesional",
            "Diseño 100% personalizado",
            "Responsive completo",
            "Dominio 1 año incluido",
            "Hosting 1 año incluido",
            "Formulario de contacto",
            "Integración Google Analytics",
        ],
        delivery: "7-10 días hábiles",
    },
    {
        name: "GROWTH",
        tagline: "Automatiza y escala",
        price: "14,900",
        popular: true,
        features: [
            "Todo lo de Starter, más:",
            "Chatbot IA personalizado",
            "Integración WhatsApp o Instagram",
            "1,000 conversaciones/mes",
            "Panel de métricas",
            "Soporte prioritario 60 días",
        ],
        delivery: "15-20 días hábiles",
    },
    {
        name: "ENTERPRISE",
        tagline: "Transformación completa",
        price: "24,900",
        popular: false,
        features: [
            "Todo lo de Growth, más:",
            "Automatización de 1 proceso clave",
            "Integración con tu CRM/email",
            "Capacitación personalizada",
            "Soporte extendido 90 días",
            "Sesión estratégica trimestral",
        ],
        delivery: "25-30 días hábiles",
    },
];

export default function PricingSection() {
    return (
        <section id="pricing" className="relative py-24 md:py-32 overflow-hidden">
            {/* Background Pattern - Cyber Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[#0A0F1C]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-electric-blue/10 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Launch Offer Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-warning-amber text-deep-navy font-bold rounded-full text-sm md:text-base">
                        <Sparkles className="w-5 h-5" />
                        OFERTA DE LANZAMIENTO — Primeros 10 clientes
                    </span>
                </motion.div>

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Precios <span className="text-gradient">Transparentes</span>
                    </h2>
                    <p className="text-lg md:text-xl text-silver-mist">
                        Para Negocios Reales
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-3xl p-8 transition-all duration-500 group
                                ${plan.popular
                                    ? "bg-deep-navy/80 border-2 border-electric-blue shadow-glow-strong scale-105 z-10"
                                    : "holo-card hover:border-electric-blue/30"
                                }
                            `}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-full text-center">
                                    <span className="inline-flex items-center gap-2 px-6 py-2 bg-electric-blue text-white font-bold font-display tracking-widest text-sm rounded-full shadow-neon">
                                        <Star className="w-4 h-4 fill-white animate-pulse" />
                                        MÁS POPULAR
                                    </span>
                                </div>
                            )}

                            {/* Plan Name */}
                            <h3 className={`text-2xl font-display font-bold mb-2 ${plan.popular ? "text-gradient" : "text-white"}`}>
                                {plan.name}
                            </h3>
                            <p className="text-sm text-silver-mist italic mb-8 border-b border-white/5 pb-6">
                                &quot;{plan.tagline}&quot;
                            </p>

                            {/* Price */}
                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold text-silver-mist">$</span>
                                    <span className={`text-6xl font-display font-bold tracking-tighter ${plan.popular ? "text-white drop-shadow-neon" : "text-white"}`}>
                                        {plan.price}
                                    </span>
                                    <span className="text-silver-mist font-medium">MXN</span>
                                </div>
                            </div>

                            {/* Features List */}
                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className={`mt-1 p-0.5 rounded-full ${plan.popular ? "bg-neon-cyan/20 text-neon-cyan" : "bg-white/10 text-silver-mist"}`}>
                                            <Check className="w-3.5 h-3.5" />
                                        </div>
                                        <span className={`text-sm ${plan.popular ? "text-white" : "text-silver-mist group-hover:text-white transition-colors"}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Delivery Time */}
                            <div className="text-xs font-mono text-center text-silver-mist/50 mb-6 uppercase tracking-wider">
                                Tiempo Estimado: <span className={plan.popular ? "text-neon-cyan" : "text-silver-mist"}>{plan.delivery}</span>
                            </div>

                            {/* CTA Button */}
                            <a
                                href="#cta"
                                className={`block w-full py-4 rounded-xl font-bold text-center transition-all duration-300 relative overflow-hidden
                                    ${plan.popular
                                        ? "bg-gradient-cta text-white shadow-neon hover:scale-105 hover:shadow-glow-strong"
                                        : "border border-white/20 text-white hover:bg-white/5 hover:border-electric-blue/50"
                                    }
                                `}
                            >
                                <span className="relative z-10">Agendar Llamada</span>
                                {plan.popular && <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />}
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Payment Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 text-center glassmorphism max-w-3xl mx-auto p-6 rounded-2xl"
                >
                    <div className="grid md:grid-cols-3 gap-4 text-sm text-silver-mist">
                        <div>
                            <p className="font-semibold text-white mb-1">💳 Métodos de pago</p>
                            <p>Transferencia, PayPal, MercadoPago</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white mb-1">📅 Facilidades</p>
                            <p>Hasta 3 pagos sin intereses</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white mb-1">🛡️ Garantía</p>
                            <p>15 días o te devolvemos tu dinero</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
