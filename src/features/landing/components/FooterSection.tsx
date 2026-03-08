"use client";

import { Globe, MessageSquare, Cog, Code, Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const services = [
    { icon: Globe, label: "Landing Pages" },
    { icon: MessageSquare, label: "Chatbots IA" },
    { icon: Cog, label: "Automatización" },
    { icon: Code, label: "Desarrollo Custom" },
];

const socials = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
];

export default function FooterSection() {
    return (
        <footer className="relative bg-gray-100 dark:bg-deep-navy border-t border-gray-200 dark:border-white/10 overflow-hidden transition-colors duration-700">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 mix-blend-multiply pointer-events-none transition-opacity duration-700">
                <Image
                    src="/assets/backgrounds/bg-footer.png"
                    alt="Footer Network"
                    fill
                    className="object-cover"
                    quality={90}
                />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gray-100/90 dark:bg-deep-navy/90 pointer-events-none transition-colors duration-700" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold text-gradient mb-4">NEXUS.AI</h3>
                        <p className="text-slate-600 dark:text-silver-mist text-sm transition-colors duration-700">
                            Conectando tu negocio con el futuro a través de soluciones de
                            Inteligencia Artificial a medida.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold mb-4 text-deep-navy dark:text-white transition-colors duration-700">Servicios</h4>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href="#pricing"
                                        className="flex items-center gap-2 text-slate-600 dark:text-silver-mist hover:text-deep-navy dark:hover:text-white transition-colors text-sm group"
                                    >
                                        <service.icon className="w-4 h-4 group-hover:text-electric-blue transition-colors" />
                                        {service.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4 text-deep-navy dark:text-white transition-colors duration-700">Contacto</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:hola@nexus.ai"
                                    className="flex items-center gap-2 text-slate-600 dark:text-silver-mist hover:text-deep-navy dark:hover:text-white transition-colors text-sm group"
                                >
                                    <Mail className="w-4 h-4 group-hover:text-electric-blue transition-colors" />
                                    hola@nexus.ai
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/521234567890"
                                    className="flex items-center gap-2 text-slate-600 dark:text-silver-mist hover:text-deep-navy dark:hover:text-white transition-colors text-sm group"
                                >
                                    <Phone className="w-4 h-4 group-hover:text-electric-blue transition-colors" />
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <span className="flex items-center gap-2 text-slate-600 dark:text-silver-mist text-sm group transition-colors duration-700">
                                    <MapPin className="w-4 h-4 group-hover:text-electric-blue transition-colors" />
                                    México
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-semibold mb-4 text-deep-navy dark:text-white transition-colors duration-700">Síguenos</h4>
                        <div className="flex gap-3">
                            {socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center
                           hover:bg-electric-blue hover:text-white hover:scale-110 transition-all duration-300 text-slate-600 dark:text-silver-mist border border-gray-300 dark:border-white/5 hover:border-electric-blue/50 hover:shadow-glow"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-white/5 mt-12 pt-8 transition-colors duration-700">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600 dark:text-silver-mist transition-colors duration-700">
                        <p>© 2025 NEXUS.AI — Todos los derechos reservados</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-deep-navy dark:hover:text-white transition-colors">
                                Aviso de Privacidad
                            </a>
                            <a href="#" className="hover:text-deep-navy dark:hover:text-white transition-colors">
                                Términos y Condiciones
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

