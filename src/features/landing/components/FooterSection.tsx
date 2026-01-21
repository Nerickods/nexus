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
        <footer className="relative bg-deep-navy border-t border-white/10 overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 opacity-10 mix-blend-multiply pointer-events-none">
                <Image
                    src="/assets/backgrounds/bg-footer.png"
                    alt="Footer Network"
                    fill
                    className="object-cover"
                    quality={90}
                />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-deep-navy/90 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold text-gradient mb-4">NEXUS.AI</h3>
                        <p className="text-silver-mist text-sm">
                            Conectando tu negocio con el futuro a través de soluciones de
                            Inteligencia Artificial a medida.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Servicios</h4>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href="#pricing"
                                        className="flex items-center gap-2 text-silver-mist hover:text-white transition-colors text-sm"
                                    >
                                        <service.icon className="w-4 h-4" />
                                        {service.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Contacto</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:hola@nexus.ai"
                                    className="flex items-center gap-2 text-silver-mist hover:text-white transition-colors text-sm"
                                >
                                    <Mail className="w-4 h-4" />
                                    hola@nexus.ai
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/521234567890"
                                    className="flex items-center gap-2 text-silver-mist hover:text-white transition-colors text-sm"
                                >
                                    <Phone className="w-4 h-4" />
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <span className="flex items-center gap-2 text-silver-mist text-sm">
                                    <MapPin className="w-4 h-4" />
                                    México
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Síguenos</h4>
                        <div className="flex gap-3">
                            {socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center
                           hover:bg-electric-blue transition-colors text-white"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-silver-mist">
                        <p>© 2025 NEXUS.AI — Todos los derechos reservados</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">
                                Aviso de Privacidad
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                Términos y Condiciones
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
