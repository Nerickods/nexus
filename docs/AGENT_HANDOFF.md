#  handover: Protocolo de Continuidad - NEXUS.AI

## 🧠 Contexto del Proyecto

> **Nombre**: NEXUS.AI
> **Tagline**: "Conectando tu negocio con el futuro"
> **Objetivo**: Vender servicios de software IA (Landing pages, Chatbots, Automatización) a emprendedores y PYMES.

Esta landing page no es solo un sitio web; es una **herramienta de conversión** basada en una narrativa de urgencia: *"El futuro comenzó hace 5 años. Adáptate o desaparece"*.

### 💎 Identidad Visual & Filosofía
*   **Diseño**: Futurista, Dark Mode Premium, Glassmorphism, Neon Glows.
*   **Paleta**: Deep Navy (`#0A0F1C`), Electric Blue (`#0066FF`), Cyber Purple (`#7B2FE0`), Neon Cyan (`#00D4FF`).
*   **Tipografía**: `Space Grotesk` (Headlines) para impacto, `Inter` (Body) para legibilidad.
*   **Tono**: Autoridad tecnológica, directo, urgente pero accesible.

---

## 🏗️ Estado Actual del Desarrollo (Snapshot)

Hemos completado la fase de **Construcción (MVP 1.0)**. El código fuente está completo, pero faltan pasos de configuración y despliegue.

### ✅ Lo Construido (100% Código)
1.  **Arquitectura**: Next.js 15 (App Router), Tailwind CSS, Framer Motion, Lucide React.
2.  **Estructura de Carpetas**: Feature-First / Component-based en `src/components/sections/`.
3.  **9 Secciones Implementadas**:
    *   `HeroSection`: Impacto visual + CTA Principal.
    *   `ProblemSection`: Agitación de dolores (Pain Points).
    *   `NewEraSection`: Contexto histórico y validación de mercado.
    *   `SolutionSection`: Los 3 pilares de NEXUS.
    *   `ServicesSection`: Catálogo detallado.
    *   `PricingSection`: 3 Planes ($5.9k, $14.9k, $24.9k MXN).
    *   `CaseStudySection`: Social Proof (Academia MMA).
    *   `CTASection`: Cierre con Calendly placeholder.
    *   `FooterSection`: Navegación y legal.
4.  **Imágenes**: Se generaron 2 imágenes con IA (`hero` y `cta`) y se implementaron **gradientes CSS de fallback** para que el sitio no rompa si faltan las imágenes.

---

## 🚦 Cabos Sueltos & Pendientes (Hoja de Ruta para el Siguiente Agente)

Si eres el agente retomando esto, aquí es donde debes enfocar tu energía.

### 1. 🔴 Instalación de Dependencias (CRÍTICO)
*   **Situación**: Intentamos correr `npm install` pero PowerShell bloqueó los scripts.
*   **Acción**: Verificar si el usuario ya corrió `npm install`. Si no, pedirle que lo haga desde **WSL** o **CMD**.
*   **Comando**: `npm install` y luego `npm run dev`.

### 2. 🖼️ Gestión de Assets
*   **Situación**: Las imágenes generadas con IA existen en la carpeta de artefactos del usuario, pero NO se han movido automáticamente a `public/` debido a restricciones de acceso en ese momento.
*   **Acción**: Preguntar al usuario si ya movió las imágenes o intentar moverlas nuevamente si se tienen permisos.
    *   `hero-bg.jpg` -> `public/hero-bg.jpg`
    *   `cta-bg.jpg` -> `public/cta-bg.jpg`

### 3. 📅 Integración Real de Calendly
*   **Situación**: `CTASection.tsx` tiene un placeholder visual y el código comentado de cómo integrar `react-calendly`.
*   **Acción**: Pedir al usuario su URL real de Calendly (ej: `calendly.com/usuario/30min`) e implementar el componente `InlineWidget` real.

### 4. 📱 Validación Responsive (Fine-tuning)
*   **Situación**: El código tiene clases de Tailwind `md:` y `lg:`, pero no se ha verificado visualmente en un navegador móvil.
*   **Acción**: Una vez corra el servidor, usar `read_browser_page` o pedir screenshots para ajustar paddings o tamaños de fuente en móviles si algo se ve apretado.

### 5. 🚀 Despliegue (Deploy)
*   **Situación**: Configurado para Vercel.
*   **Acción**: Guiar al usuario para hacer el deploy final (`vercel` CLI o git push).

---

## 🛠️ Stack Tecnológico

*   **Framework**: Next.js 16 (App Router)
*   **Lenguaje**: TypeScript
*   **Estilos**: Tailwind CSS 3.4
*   **Animaciones**: Framer Motion 11
*   **Iconos**: Lucide React
*   **Fuentes**: Google Fonts (Next/font)
*   **State Management**: Zustand
*   **Testing**: Jest + React Testing Library
*   **Validation**: Zod

## 📂 Archivos Clave para Leer

1.  `src/app/page.tsx` → Orquestador de todas las secciones.
2.  `src/app/globals.css` → Configuración de variables CSS y utilidades custom (Glassmorphism).
3.  `tailwind.config.ts` → Definición de colores NEXUS.AI y theme.
4.  `src/components/sections/` → Lógica individual de cada bloque.

---

**Nota Final**: El principio de este proyecto fue **Pareto (80/20)**. Lo que existe es el 20% del esfuerzo que genera el 80% del impacto. Cualquier mejora futura debe cuestionarse: "¿Esto ayuda a vender más o es solo vanidad?". Mantén el foco en la conversión.
