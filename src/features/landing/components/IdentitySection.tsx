"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Compass } from "lucide-react";

export default function IdentitySection() {
  return (
    <section className="relative py-24 bg-deep-navy overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-electric-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyber-purple/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                No Somos Solo Programadores.
                <br />
                <span className="text-gradient">Somos Arquitectos del Futuro.</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-electric-blue to-cyber-purple rounded-full" />
            </div>

            <p className="text-lg text-silver-mist leading-relaxed">
              En NEXUS.AI, creemos que la Inteligencia Artificial no debería ser un privilegio de las grandes corporaciones. Es la herramienta más poderosa de nuestra era, y nuestra obsesión es ponerla en manos de quienes mueven la economía real: los emprendedores.
            </p>

            {/* Mision / Vision / Objetivo Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: Target,
                  title: "Nuestra Misión",
                  text: "Democratizar el acceso a tecnologías de automatización de élite para PyMEs latinoamericanas."
                },
                {
                  icon: Compass,
                  title: "Nuestra Visión",
                  text: "Un futuro donde ningún negocio fracasa por falta de adaptación tecnológica, sino que prospera gracias a ella."
                },
                {
                  icon: Lightbulb,
                  title: "Objetivo Central",
                  text: "Transformar 1,000 negocios tradicionales en potencias digitales automatizadas para 2026."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-electric-blue/20 to-cyber-purple/20 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-neon-cyan" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-silver-mist text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Concept */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Abstract Graphic Representation */}
            <div className="relative aspect-square md:aspect-[4/5] glassmorphism rounded-3xl overflow-hidden p-8 flex flex-col justify-between border-t border-white/10">

              {/* Top content */}
              <div className="space-y-4">
                <div className="flex justify-between items-center opacity-50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs font-mono">nexus_core.sys</div>
                </div>
                <div className="space-y-2 font-mono text-xs md:text-sm text-neon-cyan/80">
                  <p>{`> Initializing protocol...`}</p>
                  <p>{`> Loading mission parameters... [OK]`}</p>
                  <p>{`> Target: EMPATHY && EFFICIENCY`}</p>
                  <p>{`> Status: READY_TO_DEPLOY`}</p>
                </div>
              </div>

              {/* Center Abstract Art */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                <div className="w-64 h-64 border border-electric-blue/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="w-48 h-48 border border-cyber-purple/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="w-32 h-32 border border-neon-cyan/30 rounded-full animate-[spin_20s_linear_infinite]" />
              </div>

              {/* Bottom Quote */}
              <div className="relative z-10 glassmorphism p-6 rounded-xl border border-white/5 bg-deep-navy/50">
                <p className="text-lg font-light italic text-white mb-4">
                  &quot;La tecnología por sí sola no es la respuesta. La respuesta es lo que la tecnología te libera para hacer: <span className="text-warning-amber font-semibold not-italic">Crear. Conectar. Crecer.</span>&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-electric-blue to-cyber-purple" />
                  <div>
                    <p className="font-bold text-sm">Equipo NEXUS.AI</p>
                    <p className="text-xs text-silver-mist">Tus Partners Tecnológicos</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
