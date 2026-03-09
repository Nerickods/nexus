"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ShieldCheck, Database, Zap } from "lucide-react";
import { GlassCard } from "@/shared/components/GlassCard";

const faqs = [
    {
        question: "¿La IA va a filtrar nuestros datos confidenciales?",
        answer: "Absolutamente no. Nuestro sistema implementa métodos de seguridad de grado empresarial. No usamos LLMs públicos que entrenen con tu información. Tus datos viven en un entorno seguro y encriptado, aislado del exterior.",
        icon: ShieldCheck
    },
    {
        question: "¿Es muy caro de mantener y escalar a largo plazo?",
        answer: "A diferencia del software tradicional con costosas licencias mensuales por usuario, con nuestro Stack Invisible solo pagas el costo neto de los servicios externos (API) que consuma tu aplicación. Hablamos de costos extremadamente mínimos, frecuentemente menores a $1 USD al mes por usuario activo.",
        icon: Zap
    },
    {
        question: "¿Qué pasa si mis necesidades cambian en unos meses?",
        answer: "El software que construimos está adaptado a medida y optimizado para que tú mismo puedas actualizar información, reglas de negocio o flujos de trabajo sin depender de nosotros ni de ningún técnico. Te entregamos la llave de tu infraestructura.",
        icon: Database
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative py-24 bg-white dark:bg-[#0a0f1c] transition-colors duration-700 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50 dark:from-deep-navy to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyber-purple/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-cyber-purple font-mono text-sm tracking-widest uppercase mb-2 block">
                        // Objeciones Destruidas
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-deep-navy dark:text-white mb-6">
                        Respuestas Claras. <span className="text-gradient">Cero BS.</span>
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <GlassCard
                                    variant="basic"
                                    className={`cursor-pointer transition-all duration-300 ${isOpen ? 'border-electric-blue/50 bg-electric-blue/5' : 'hover:border-white/20'
                                        }`}
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                >
                                    <div className="p-6">
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className={`p-2 rounded-lg transition-colors duration-300 ${isOpen ? 'bg-electric-blue/20 text-electric-blue' : 'bg-gray-100 dark:bg-white/5 text-slate-400'
                                                    }`}>
                                                    <faq.icon className="w-5 h-5" />
                                                </div>
                                                <h3 className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-electric-blue dark:text-neon-cyan' : 'text-deep-navy dark:text-white'
                                                    }`}>
                                                    {faq.question}
                                                </h3>
                                            </div>
                                            <ChevronDown
                                                className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-electric-blue' : ''
                                                    }`}
                                            />
                                        </div>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="pt-4 text-slate-600 dark:text-silver-mist leading-relaxed pl-14">
                                                        {faq.answer}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
