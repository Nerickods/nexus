# 🎨 Visual Consistency System - Nexus AI

Sistema de diseño centralizado para mantener una identidad visual coherente, futurista y profesional en **Nexus AI**.

## 📋 Overview

El Visual Consistency System define el lenguaje de diseño de Nexus AI:
-   **Tema**: "Futuristic Tech" (Deep Navy + Electric Blue + Neon Purple).
-   **Estética**: Glassmorphism, degradados sutiles y efectos de resplandor (Glow).
-   **Tipografía**: Limpia y moderna (Inter / Geist Sans).

> **Fuente de Verdad**: `src/app/globals.css` implementa las variables CSS base definidas aquí.

## 🎨 Nexus Tech Theme

### Color Palette Principal

Basado en el sistema de variables CSS actual:

```css
:root {
  /* Backgrounds */
  --bg-deep-navy: #0A0F1C;   /* Main Background */
  --bg-card: rgba(255, 255, 255, 0.03); /* Glassmorphism Base */
  
  /* Primary Accents (Electric Blue) */
  --primary-blue: #0066FF;
  --primary-glow: rgba(0, 102, 255, 0.4);

  /* Secondary Accents (Neon Purple) */
  --secondary-purple: #7B2FE0;
  
  /* Text */
  --text-primary: #FFFFFF;
  --text-secondary: #94A3B8; /* Slate 400 */
}
```

### Gradient System

Los degradados son fundamentales para la identidad de Nexus AI.

```typescript
export const gradients = {
  // Hero Section Background
  hero: 'linear-gradient(135deg, #0A0F1C 0%, #1A1F3C 50%, #0A0F1C 100%)',
  
  // Primary CTA & Brand Text
  brand: 'linear-gradient(90deg, #0066FF 0%, #7B2FE0 100%)',
  
  // Subtle Surface (Cards)
  glass: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.00) 100%)',
  
  // Glow Effects
  glowRadial: 'radial-gradient(circle at center, rgba(0, 102, 255, 0.15) 0%, transparent 70%)'
};
```

## 🌟 Visual Effects

### Glassmorphism
Para tarjetas y contenedores flotantes.

```css
.glass-panel {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

### Neon Glow
Para interacciones y estados activos.

```css
/* Definido en globals.css como --glow-effect */
box-shadow: 0 0 40px rgba(0, 102, 255, 0.4);
```

**Uso en Tailwind**:
```html
<button className="hover:shadow-[0_0_40px_rgba(0,102,255,0.4)] transition-all duration-300">
  Get Started
</button>
```

## 📐 Spacing & Layout

### Grid System
Grid de 4px/8px para consistencia.

-   **xs**: 4px (0.25rem)
-   **sm**: 8px (0.5rem)
-   **md**: 16px (1rem)
-   **lg**: 24px (1.5rem)
-   **xl**: 32px (2rem)
-   **section**: 64px - 128px (Spacing entre secciones)

## 🧩 Component Constants

### Buttons
```typescript
export const buttonVariants = {
    primary: {
        background: gradients.brand,
        color: 'white',
        border: 'none',
        hover: { scale: 1.05, glow: true }
    },
    outline: {
        background: 'transparent',
        border: '1px solid rgba(255,255,255,0.2)',
        hover: { borderColor: '#0066FF' }
    }
};
```

## 🎯 Reglas de Aplicación

### ✅ SIEMPRE HACER
1.  Usar **Glassmorphism** para contenedores sobre fondos complejos.
2.  Aplicar el **Brand Gradient** (`#0066FF` -> `#7B2FE0`) en textos destacados (`h1`, `span`) y botones primarios.
3.  Mantener el contraste alto: Texto blanco sobre fondo `--bg-deep-navy`.

### ❌ NUNCA HACER
1.  **NO** usar colores planos aburridos para botones primarios (siempre usar el gradiente o un color vibrante con glow).
2.  **NO** usar sombras negras duras (`box-shadow: 0 0 0 black`). Usar sombras de color (`blue/purple`) para efecto neón.
3.  **NO** usar fondo blanco puro `#FFFFFF`. El tema es estrictamente **Dark Mode**.

---
**Visual System v2.0** | Nexus AI 🤖
*Diseñado para evocar innovación, inteligencia y velocidad.*