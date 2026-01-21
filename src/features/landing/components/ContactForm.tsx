"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "../schemas/contact";
import { useUIStore } from "@/shared/stores/uiStore";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form submitted:", data);
        setIsSuccess(true);
        reset();
        // Reset success message after 3 seconds
        setTimeout(() => setIsSuccess(false), 3000);
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <AnimatePresence mode="wait">
                {isSuccess ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-success-green/10 border border-success-green/30 rounded-xl p-8 text-center"
                    >
                        <div className="w-16 h-16 bg-success-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-8 h-8 text-success-green" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                        <p className="text-silver-mist">Nos pondremos en contacto contigo pronto.</p>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-silver-mist">Nombre</label>
                            <input
                                {...register("name")}
                                className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all`}
                                placeholder="Tu nombre"
                            />
                            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-silver-mist">Email</label>
                            <input
                                {...register("email")}
                                className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all`}
                                placeholder="nombre@empresa.com"
                            />
                            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-silver-mist">Empresa (Opcional)</label>
                            <input
                                {...register("company")}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all"
                                placeholder="Nombre de tu empresa"
                            />
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-electric-blue to-neon-cyan/80 hover:from-electric-blue/90 hover:to-neon-cyan text-white font-bold py-3.5 rounded-xl shadow-glow transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                                {isSubmitting ? (
                                    <span className="animate-pulse">Procesando...</span>
                                ) : (
                                    <>
                                        Solicitar Acceso <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>
                        <p className="text-xs text-center text-silver-mist/60 mt-4">
                            Tus datos están protegidos. No SPAM.
                        </p>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
