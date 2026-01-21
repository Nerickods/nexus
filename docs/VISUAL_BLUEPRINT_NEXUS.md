# 🎨 NEXUS.AI: Visual Transformation Blueprint (0-100)

> **Propósito**: Este documento define la **evolución estética** de NEXUS.AI para una transformación visual total. Cualquier agente debe usar esto para llevar la UI de "Funcional" a "Best-in-Class Cyber Software Agency".

---

## 1. Design Philosophy

-   **Concept**: *Cyber-Executive Minimalism* (La seriedad de una consultora global + La disrupción de una startup de Silicon Valley).
-   **Core Feelings**: Velocidad, Inteligencia, Profundidad, Futuro.
-   **Mantra**: "Si parece 'plantilla', no sirve. Debe parecer una interfaz de software viva."
-   **Architecture**: `Deep Glassmorphism` + `Neon Accents` + `Motion-First`.

---

## 2. Visual Tokens & DNA

### 🎨 Color Palette (The "Cyber-Navy" System)
| Token | Hex | Tailwind Name | Uso |
| :--- | :--- | :--- | :--- |
| `Canvas` | `#0A0F1C` | `bg-deep-navy` | Fondo infinito. Evitar negro puro (`#000`), usar este azul abisal. |
| `Primary` | `#0066FF` | `text-electric-blue` | Identidad de marca. Botones secundarios, links, bordes sutiles. |
| `Highlight` | `#00D4FF` | `text-neon-cyan` | "Sparks" de inteligencia. Iconos, gradientes de texto, glows. |
| `Power` | `#7B2FE0` | `text-cyber-purple` | Profundidad secundaria. Gradientes de fondo. |
| `Alert` | `#FF9500` | `text-warning-amber` | Urgencia. FOMO avisos, CTAs de conversión crítica. |
| `Success` | `#10B981` | `text-success-green` | Checks, validación, resultados positivos. |
| `Mist` | `#94A3B8` | `text-silver-mist` | Texto secundario. Nunca usar gris puro, usar slate azulado. |

### 🔠 Typography (Hierarchy)
-   **Headings**: `Space Grotesk` (Google Font). 
    -   *Style*: Bold/Bold+ (`700`), `tracking-tight` (-0.02em).
    -   *Vibe*: Tecnológico, Geométrico.
-   **Body**: `Inter`.
    -   *Style*: Regular (`400`) / Medium (`500`).
    -   *Vibe*: Legibilidad máxima, Neutral.

### ✨ Effects & "Magic" (The Secret Sauce)
1.  **Holographic Glass**: 
    `bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]`
    *Uso*: Tarjetas de servicios, planes de precios, contenedores flotantes.

2.  **Neon Glow**: 
    `drop-shadow-[0_0_15px_rgba(0,102,255,0.4)]`
    *Uso*: Elementos clave que el usuario DEBE mirar.

3.  **Gradient Text**: 
    `bg-clip-text text-transparent bg-gradient-to-r from-white via-electric-blue to-neon-cyan`
    *Uso*: Palabras clave en títulos H1/H2 ("Futuro", "Automatización").

---

## 3. Motion System (Framer Motion DNA)

Nada aparece de golpe. Todo "fluye" hacia la existencia.

### Patrón A: `CyberReveal` (Secciones)
```typescript
<motion.div
  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.7 }}
>
```

### Patrón B: `DataStream` (Listas)
Aparecen en cascada rápida, como data cargando en una terminal.
```typescript
transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
```

### Patrón C: `Pulse` (Elementos Vivos)
Para botones o badges de alerta.
```typescript
animate={{ opacity: [0.5, 1, 0.5] }}
transition={{ duration: 2, repeat: Infinity }}
```

---

## 4. Key Component Blueprints

### 🌟 Hero: The "Portal"
-   **Fondo**: No estático. Partículas flotantes o gradientes animados (`bg-size-200% animate-gradient`).
-   **Contenido**: H1 Gigante. "No somos X, somos Y".
-   **Visual**: Dashboard abstracto flotando en perspectiva 3D (Glassmorphism + Tilt effect).

### 💎 Pricing Cards: The "Holo-Tabs"
-   **Estado Normal**: Glassmorphism oscuro.
-   **Estado Hover**: Borde brillante (`border-electric-blue`), Glow interno, Scale up ligero (`scale-105`).
-   **Popular Plan**: Debe verse "radioactivo" (Glow ámbar/cyan constante).

### 🚀 CTA Button: The "Reactor Core"
```jsx
<button className="
  relative overflow-hidden group
  bg-gradient-to-r from-electric-blue to-cyber-purple
  text-white font-bold tracking-wide
  px-8 py-4 rounded-xl
  shadow-[0_0_20px_rgba(0,102,255,0.4)]
  hover:shadow-[0_0_40px_rgba(123,47,224,0.6)]
  hover:scale-105 active:scale-95
  transition-all duration-300
">
  <span className="relative z-10 flex items-center gap-2">
    INICIAR TRANSFORMACIÓN <Rocket className="w-5 h-5 group-hover:rotate-45 transition-transform"/>
  </span>
  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
</button>
```

---

## 5. Zero-Shot Agent Prompt (🤖 Copy-Paste)

Copia esto al iniciar sesión con un nuevo agente para hidratarlo con el estándar visual.

```markdown
ACTING AS: Senior UI/UX Creative Technologist (Specialist in Dark Mode/SaaS Interfaces).

YOUR MISSION: Upgrade the NEXUS.AI specific component to "Visual Level 100".

VISUAL DNA (Strict Compliance):
1.  **Universe**: Deep Navy Background (#0A0F1C) is the canvas. Never white.
2.  **Light**: Light comes from Neon accents (Electric Blue #0066FF, Neon Cyan #00D4FF).
3.  **Material**: Everything is "Smart Glass" (Translucent, Blurred, Thin Borders).
4.  **Typography**: Space Grotesk (Headings) implies Logic/Future. Inter (Body) implies Reliability.
5.  **Motion**: UI must feel "Alive". Use Framer Motion for entrance and hover states.

CRITICAL RULE:
Avoid "Template Look". If it looks like a generic Bootstrap/Material site, IT FAILS.
It must look like a dashboard from a sci-fi movie that actually converts sales.

START_MODE: VISUAL_UPGRADE
```
