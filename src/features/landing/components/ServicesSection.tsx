"use client";

import { motion } from "framer-motion";
import { Globe, MessageSquare, Cog, Code, Check } from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Landing Pages IA-Optimized",
        description:
            "Páginas de aterrizaje diseñadas con inteligencia artificial para maximizar conversiones. Perfectas para lanzamientos y captación de leads.",
        features: [
            "Diseño 100% personalizado",
            "Copy optimizado para conversión",
            "Responsive completo",
            "Dominio y hosting 1 año",
            "Formularios inteligentes",
            "Google Analytics integrado",
            "Entrega en 7-10 días",
        ],
    },
    {
        icon: MessageSquare,
        title: "Chatbots IA Personalizados",
        description:
            "Asistentes virtuales que aprenden de tu negocio y atienden a tus clientes 24/7. Responden, agendan y capturan leads.",
        features: [
            "Entrenamiento con tu información",
            "WhatsApp, Instagram o Web",
            "Panel de administración",
            "Reportes de conversaciones",
            "Soporte técnico 30 días",
            "1,000 conversaciones/mes",
        ],
    },
    {
        icon: Cog,
        title: "Automatización de Procesos",
        description:
            "Eliminamos las tareas manuales que consumen tu tiempo. Desde respuestas automáticas hasta flujos de trabajo completos.",
        features: [
            "Auditoría de procesos actuales",
            "Diseño de flujo automatizado",
            "Integración con tu CRM/email",
            "Testing y optimización",
            "Documentación del proceso",
            "Capacitación de uso",
        ],
    },
    {
        icon: Code,
        title: "Desarrollo A Medida",
        description:
            "Para necesidades más complejas: dashboards, aplicaciones web, CRMs personalizados o integraciones especiales.",
        features: [
            "Consultoría inicial detallada",
            "Prototipo interactivo",
            "Desarrollo iterativo",
            "Despliegue en producción",
            "Garantía post-launch",
        ],
    },
];

export default function ServicesSection() {
    return (
        <section className="relative py-24 md:py-32 bg-deep-navy">
            {/* Background Grid & Glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[#0A0F1C]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066FF05_1px,transparent_1px),linear-gradient(to_bottom,#0066FF05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[100px] mix-blend-screen" />
                <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-cyber-purple/5 rounded-full blur-[100px] mix-blend-screen" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
                        Soluciones Para Cada{" "}
                        <span className="text-gradient">Necesidad</span>
                    </h2>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="holo-card p-8 rounded-3xl group relative overflow-hidden"
                        >
                            {/* Internal Gloss Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10
                            flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] group-hover:scale-110 transition-all duration-300 relative z-10">
                                <service.icon className="w-8 h-8 text-electric-blue group-hover:text-neon-cyan transition-colors" />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-electric-blue transition-all relative z-10">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-silver-mist mb-8 font-body leading-relaxed relative z-10 group-hover:text-white/90 transition-colors">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 relative z-10">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-electric-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-electric-blue/20 transition-colors">
                                            <Check className="w-3 h-3 text-electric-blue group-hover:text-neon-cyan transition-colors" />
                                        </div>
                                        <span className="text-sm text-silver-mist group-hover:text-white transition-colors">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
