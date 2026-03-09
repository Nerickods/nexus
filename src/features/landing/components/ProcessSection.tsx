"use client";

import { motion } from "framer-motion";
import { Search, Cog, Rocket, ArrowRight } from "lucide-react";
import Image from "next/image";
import { GlassCard } from "@/shared/components/GlassCard";

const processSteps = [
    {
        icon: Search,
        title: "1. Identify: Alineación",
        description:
            "Antes de construir algo, nos alineamos. Entendemos cómo funciona realmente el trabajo en tu organización: dónde se pierde tiempo, dónde se toman decisiones lentas y dónde se acumula el esfuerzo manual.",
        features: ["Workshops de Alineación Ejecutiva", "Entrevistas con el Equipo", "Modelado de ROI"],
    },
    {
        icon: Cog,
        title: "2. Develop: Ejecución",
        description:
            "Traducimos las prioridades en un plan de construcción claro. Construimos sistemas de IA que se integran limpiamente en tus herramientas actuales, diseñados para confiabilidad urbana, seguridad y uso real.",
        features: ["Arquitectura Técnica", "Integración de Datos", "Paso a Producción Seguro"],
    },
    {
        icon: Rocket,
        title: "3. Adopt: Apropiación",
        description:
            "Lanzar software no es el éxito. La adopción sí lo es. Trabajamos codo a codo con tus equipos para asegurar que los nuevos sistemas se entiendan, se confíen y se usen todos los días.",
        features: ["Rollout Controlado", "Sesiones de Capacitación", "Soporte de Integración"],
    },
];

export default function ProcessSection() {
    return (
        <section id="process" className="relative py-24 bg-white dark:bg-deep-navy transition-colors duration-700 overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 z-0 opacity-0 dark:opacity-10 mix-blend-color-dodge transition-opacity duration-700">
                    <Image
                        src="/assets/backgrounds/bg-services.png"
                        alt="Engineering Blueprints"
                        fill
                        className="object-cover"
                        quality={90}
                    />
                </div>
            </div>

            {/* Transition Gradients */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent dark:from-deep-navy dark:to-transparent z-10 pointer-events-none transition-colors duration-700" />
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-deep-navy dark:via-deep-navy/80 to-transparent z-10 pointer-events-none transition-colors duration-700" />

            <div className="absolute inset-0 bg-white/60 dark:bg-deep-navy/60 pointer-events-none transition-colors duration-700" />

            {/* Background Décor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-electric-blue/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-cyber-purple/5 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-electric-blue dark:text-neon-cyan font-mono text-sm tracking-widest uppercase mb-2 block transition-colors duration-700">
                        // La Caja de Cristal
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-deep-navy dark:text-white mb-6 transition-colors duration-700">
                        Construimos Sistemas. <span className="text-gradient">No Demos.</span>
                    </h2>
                    <p className="text-slate-600 dark:text-silver-mist max-w-2xl text-lg transition-colors duration-700">
                        Este es el proceso exacto que aplicamos para garantizar que la transición a IA
                        tenga un impacto real en el balance de tu empresa. Cero suposiciones.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop only) */}
                    <div className="hidden md:block absolute top-[100px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent z-0" />

                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10"
                        >
                            <GlassCard
                                variant="basic"
                                className="h-full group hover:border-electric-blue/30 flex flex-col backdrop-blur-sm bg-gray-50 dark:bg-[#0a0f1c] relative"
                                hoverEffect
                            >
                                {/* Step Number Indicator */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-electric-blue/10 dark:bg-cyber-purple/20 flex items-center justify-center border border-white/10 backdrop-blur-md">
                                    <span className="font-mono text-xl font-bold text-electric-blue dark:text-neon-cyan opacity-50">{index + 1}</span>
                                </div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-16 h-16 rounded-xl bg-gray-200 dark:bg-white/5 flex items-center justify-center mb-8 group-hover:bg-electric-blue/20 group-hover:text-electric-blue transition-all duration-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                                        <step.icon className="w-8 h-8 text-slate-500 dark:text-silver-mist group-hover:text-electric-blue transition-colors duration-700" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-deep-navy dark:text-white mb-4 group-hover:text-electric-blue transition-colors duration-700">
                                        {step.title.split(":")[1]}
                                    </h3>
                                    <p className="text-slate-600 dark:text-silver-mist text-base leading-relaxed mb-8 flex-grow transition-colors duration-700">
                                        {step.description}
                                    </p>

                                    <div className="border-t border-gray-200 dark:border-white/5 pt-6 mt-auto transition-colors duration-700">
                                        <ul className="space-y-3">
                                            {step.features.map((f, i) => (
                                                <li key={i} className="flex items-start text-sm text-slate-600 dark:text-silver-mist">
                                                    <ArrowRight className="w-4 h-4 mr-2 text-electric-blue flex-shrink-0 mt-0.5" />
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
