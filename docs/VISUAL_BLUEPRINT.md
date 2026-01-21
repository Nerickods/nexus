
# 🎨 Nexus AI Visual Blueprint

> **Propósito**: Este documento actúa como el "ADN Visual y Técnico" del proyecto. Cualquier desarrollador o agente de IA debe leer esto para replicar instantáneamente la estética "Premium High-Impact" y la base técnica sin necesidad de analizar todo el codebase.

---

## 1. Design Philosophy

-   **Concept**: *Boutique Luxury Sports* (Mezcla de elegancia minimalista y energía agresiva).
-   **Core Feelings**: Exclusividad, Poder, Transformación.
-   **Mantra**: "Si no se ve premium, no entra en producción."
-   **Architecture**: `Glassmorphism` + `High Contrast` + `Micro-Interactions`.

---

## 2. Visual Tokens

### 🎨 Color Palette
| Token | Hex | Uso |
| :--- | :--- | :--- |
| `Background` | `#000000` | Negro puro. Fondo principal. |
| `Foreground` | `#ffffff` | Blanco puro. Texto principal. |
| `Accent` | `#FFD700` | Oro. CTAs, bordes destacados, glows. |
| `Success` | `#10B981` | Verde esmeralda. Testimonios positivos. |
| `Warning` | `#F59E0B` | Ámbar. Plazas limitadas (FOMO). |

### 🔠 Typography
-   **Font Family**: `Poppins` (Google Fonts).
-   **Weights**:
    -   `300/400`: Texto cuerpo.
    -   `600`: Subtítulos y botones.
    -   `800/900`: Títulos de impacto (Hero sections).
-   **Styles**: `uppercase` para títulos, `tracking-tighter` para headers grandes.

### ✨ Effects & Shadows
-   **Glow Principal**: `drop-shadow-[0_0_25px_rgba(255,215,0,0.4)]` (Usar en textos de acento).
-   **Glassmorphism**: `bg-black/60 backdrop-blur-xl border border-white/10`.
-   **Hover Lift**: `transition-all duration-300 hover:-translate-y-1`.

---

## 3. Motion System (Framer Motion)

### Patrón: `FadeInUp` (Estándar para secciones)
```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>
  {children}
</motion.div>
```

### Patrón: `StaggerChildren` (Listas/Grids)
```typescript
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
```

---

## 4. Key Component Patterns

### 💎 Hero Double Carousel (Visual Landmark)
**Concepto**: Dos filas de imágenes infinitas moviéndose en direcciones opuestas como fondo, con un contenedor de cristal (Glassmorphism) centrado encima.

**Estructura**:
1.  **Layers**: Background (Carousels) -> Overlay (Black/40) -> Content (Glass Box).
2.  **Glass Box**: `bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.6)]`.

### 🟡 CTA Button (Premium Gold)
Botón de alta conversión con "Glow" dorado y animación de presión.

```typescript
<button className="
  bg-[#FFD700] text-black font-bold 
  px-8 py-4 rounded-lg 
  hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] 
  hover:-translate-y-1 
  transition-all duration-300
">
  RESERVA GRATIS
</button>
```

---

## 5. Technical Foundation (Critical Dependencies)

> No usar `package-lock.json` para contexto. Usar estas versiones base para compatibilidad asegurada.

### Core Stack
-   **Framework**: `next@^16.0.7`
-   **Language**: `typescript@^5`
-   **Styling**: `tailwindcss@^3.4.1`

### UI & Animation (Critical)
-   **Motion**: `framer-motion@^12.23.12` (Motor de animaciones principal)
-   **Icons**: `lucide-react@^0.560.0`, `react-icons@^5.5.0`
-   **Utilities**: `clsx`, `tailwind-merge`, `class-variance-authority` (Para componentes variantes)

### Forms & Validation
-   `react-hook-form` + `@hookform/resolvers`
-   `zod` (Schema Validation)

---

## 6. Zero-Shot Agent Prompt (🤖 Copy-Paste)

> Copia este bloque y pégalo al inicio de una nueva sesión con tu Agente de IA para "hidratarlo" con el contexto visual y técnico.

```markdown
ACTING AS: Senior Frontend Designer & UX Engineer and Full Stack Developer.

YOUR MISSION: Implement UI components following the "Nexus AI Visual System".

TECHNICAL BASE:
- Stack: Next.js 16 (App Router), TypeScript, Tailwind CSS 3.4.
- Core Libs: framer-motion (Animations), lucide-react (Icons), zod (Validation).

VISUAL DNA:
1.  **Theme**: Dark Mode Only (#000000 Check-mate Black).
2.  **Accent**: Gold (#FFD700) is SACRED. Use it ONLY for high-value actions (CTAs) and key highlights.
3.  **Typography**: 'Poppins'. Headings are usually UPPERCASE, BLACK weight (900), and TIGHT tracking.
4.  **Glassmorphism**: All cards/containers over backgrounds must use: `bg-black/60 backdrop-blur-xl border border-white/10`.
5.  **Motion**: Nothing appears statically. Everything `FadeInUp` or `ScaleIn`.
6.  **Simplicity**: If it doesn't add value, remove it. KISS principle applies to UI noise.

KEY BEHAVIORS:
-   Never use plain CSS colors (red, blue). Use the defined Palette.
-   Always wrap interactive elements in `framer-motion` components.
-   When creating a Hero, defaulting to the "Double Infinite Carousel" pattern is often the right choice for impact.

START_MODE: VISUAL_EXECUTION
```
