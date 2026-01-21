"use client";

import { motion } from "framer-motion";
import { Cpu, Users, Code, Target } from "lucide-react";
import Image from "next/image";

export default function IdentitySection() {
  return (
    <section id="identity" className="relative py-24 bg-deep-navy overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-15 mix-blend-color-dodge pointer-events-none">
        <Image
          src="/assets/backgrounds/bg-identity.png"
          alt="Digital DNA"
          fill
          className="object-cover"
          quality={90}
        />
      </div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-deep-navy/90 to-deep-navy/50 pointer-events-none" />

      {/* Decorative Blurred Circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyber-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-neon-cyan font-mono text-sm tracking-widest uppercase mb-4 block">
                            // Quiénes Somos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              No Somos Solo Programadores.
              <br />
              Somos <span className="text-gradient">Arquitectos del Futuro</span>.
            </h2>
            <p className="text-lg text-silver-mist mb-6 leading-relaxed">
              NEXUS.AI nació de una frustración: ver cómo negocios increíbles se
              quedaban atrás por no entender la tecnología.
            </p>
            <p className="text-lg text-silver-mist mb-8 leading-relaxed">
              No somos una agencia de marketing tradicional que solo quiere
              venderte posts en Instagram. Somos ingenieros y estrategas
              obsesionados con la <span className="text-white font-semibold">eficiencia</span> y
              el <span className="text-white font-semibold">crecimiento escalable</span>.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Code, label: "Código Limpio", sub: "Scalable Tech" },
                { icon: Users, label: "Centrado en Usuario", sub: "UX/UI Design" },
                { icon: Cpu, label: "IA Nativa", sub: "Machine Learning" },
                { icon: Target, label: "Resultados", sub: "Data Driven" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-electric-blue/30 transition-colors"
                >
                  <item.icon className="w-8 h-8 text-electric-blue" />
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.label}</h4>
                    <p className="text-xs text-silver-mist font-mono opacity-70">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element - Glass Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-white/10 to-transparent p-1 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl">
              <div className="bg-[#0a0f1c]/80 rounded-[22px] p-8 h-[500px] flex flex-col items-center justify-center text-center relative overflow-hidden">
                {/* Abstract Graphic */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 bg-center" />
                <div className="w-32 h-32 rounded-full border-4 border-electric-blue/30 flex items-center justify-center mb-8 relative">
                  <div className="absolute inset-0 border-4 border-t-neon-cyan border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
                  <Cpu className="w-12 h-12 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Nuestra Misión</h3>
                <p className="text-silver-mist mb-8 max-w-sm">
                  Democratizar el acceso a la Inteligencia Artificial para que
                  ningún negocio se quede obsoleto.
                </p>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient font-display">100%</div>
                    <div className="text-xs text-silver-mist font-mono mt-1">COMPROMISO</div>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient font-display">24/7</div>
                    <div className="text-xs text-silver-mist font-mono mt-1">MONITOREO</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-electric-blue to-cyber-purple opacity-20 blur-xl rounded-[40px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
