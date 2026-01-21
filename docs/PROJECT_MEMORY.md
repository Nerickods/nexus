# 🧠 NEXUS.AI: Project Memory Core (Master Context)

> **Archivo Maestro de Contexto Agéntico**
> *Creado para asegurar la continuidad perfecta entre diferentes sesiones/agentes de IA.*

---

## 1. 🧬 ADN del Proyecto

### **Misión Técnica**
Desarrollar una landing page de *alta conversión* utilizando tecnologías modernas (Next.js 15) que sirva como el pilar central de ventas para la agencia NEXUS.AI.

### **Filosofía de Código**
*   **Feature-First**: Componentes organizados por secciones lógicas (`src/components/sections`).
*   **Zero-Shot Friendly**: Código limpio, comentado, y auto-contenido para facilitar la lectura por LLMs.
*   **Pareto Driven**: Priorizamos el 20% de las features que dan el 80% del valor (Hero, Pricing, CTA).

### **Estética (La "Vibe")**
*   **Keywords**: Futurista, Neon, Profundo, Profesional, Fluido.
*   **Tech**: Framer Motion para todo lo que se mueve. Glassmorphism para contenedores.
*   **Colores**:
    *   Fondo: `bg-deep-navy` (#0A0F1C)
    *   Acento Primario: `text-electric-blue` (#0066FF)
    *   Highlight: `text-neon-cyan` (#00D4FF)

---

## 2. 🗺️ Mapa de Territorio (Filesystem)

Si necesitas editar algo, aquí es donde vive:

*   **Página Principal**: `src/app/page.tsx` (Aquí se ensamblan las secciones).
*   **Estilos Globales**: `src/app/globals.css` (Variables CSS, utilidades de gradientes).
*   **Configuración UI**: `tailwind.config.ts` (Donde se definen los colores custom).
*   **Secciones**:
    *   `src/components/sections/IdentitySection.tsx` (**NUEVO**: Misión/Visión).
    *   `src/components/sections/PricingSection.tsx` (Lógica de planes).
    *   `src/components/sections/CTASection.tsx` (Integración Calendly).
*   **Imágenes**: Deben estar en `public/`. (Nombres esperados: `hero-bg.jpg`, `cta-bg.jpg`).

---

## 3. 📜 Narrativa & Copywriting (La Lógica de Venta)

La página sigue un **Funnel Psicológico**:
1.  **Hero**: Impacto visual. "Tu negocio + Futuro".
2.  **Problema**: "Te estás quedando atrás" (FOMO - Fear Of Missing Out).
3.  **Nueva Era**: Validación lógica con datos.
4.  **Solución/Identity**: "Nosotros somos el puente" (Autoridad).
5.  **Social Proof**: Caso de éxito real.
6.  **Pricing**: Propuesta irresistible (Precios bajos de lanzamiento).
7.  **CTA**: Urgencia (Escasez de cupos).

---

## 4. 🔗 Herramientas & Comandos (Cheatsheet)

*   **Instalar**: `npm install` (Desde WSL/CMD, cuidado con PowerShell policies).
*   **Correr**: `npm run dev` (Puerto 3000 o 3001 si está ocupado).
*   **Deploy**: Pensado para Vercel (`vercel deploy`).

---

## 5. 🚩 Estado Actual & Deuda Técnica (Lo que falta)

1.  **Imágenes**: Verificar que `public/` tenga los assets correctos. Actualmente hay fallbacks CSS (gradientes) por seguridad.
2.  **Calendly**: El componente de `CTASection` es un placeholder visual. Falta poner el widget real (`react-calendly`).
3.  **Responsive QA**: Se asumió mobile-first con clases Tailwind, pero falta pulido visual en dispositivos reales.

---

## 6. 🤖 Instrucciones para Ti (Agente Futuro)

1.  **Lee primero `docs/AGENT_HANDOFF.md`** para el snapshot rápido.
2.  **Usa este archivo** para entender el "por qué" de las cosas.
3.  **Revisa `docs/prompts/nexus-sales-bot.md`** si necesitas escribir copy nuevo alineado a la voz de la marca.
4.  **No rompas la estética**. Si agregas algo, usa `glassmorphism`, `text-gradient`, y `motion.div`.

---
*Fin del Contexto Maestro. Validado vs Localhost:3001.*
