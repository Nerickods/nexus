# PRP-001: Header Profesional con Theme Toggle

> **Estado**: EN PROGRESO
> **Fecha**: 2026-02-03
> **Proyecto**: NEXUS.AI Landing Page

---

## Objetivo

Crear un header fijo, profesional y minimalista que integre el logo de NEXUS.AI, navegación sutil y el toggle de tema existente, reemplazando el botón flotante actual en la esquina inferior derecha.

## Por Qué

| Problema | Solución |
|----------|----------|
| El ThemeToggle está en posición fija abajo-derecha, poco profesional para una landing de alto nivel | Header glassmorphism con toggle integrado elegantemente |
| No hay navegación visible en la landing | Links de navegación sutiles (anchor links) |
| Falta branding visible al scroll | Logo persistente en header |

**Valor de negocio**: Aumenta percepción de profesionalismo y credibilidad. Mejora UX con navegación accesible.

## Qué

### Criterios de Éxito
- [ ] Header fijo transparente que se vuelve glassmorphism al scroll
- [ ] Logo "NEXUS.AI" visible con tipografía del design system
- [ ] Navegación minimalista con 3-4 anchor links
- [ ] ThemeToggle integrado elegantemente (ya no flotante)
- [ ] Animaciones sutiles al aparecer y al scroll
- [ ] Mobile responsive con hamburger menu (opcional, fase 2)
- [ ] `npm run typecheck` pasa
- [ ] `npm run build` exitoso

### Comportamiento Esperado

**Desktop:**
1. Header transparente al cargar (sobre el Hero)
2. Al scrollear 50px+, transición suave a glassmorphism (blur + borde sutil)
3. Logo a la izquierda, nav links al centro, ThemeToggle a la derecha
4. ThemeToggle mantiene la animación sol/luna actual

**Mobile:**
1. Logo a la izquierda, ThemeToggle a la derecha
2. Sin nav links (el contenido ya está visible al scroll)

---

## Contexto

### Referencias
- `src/shared/components/ThemeToggle.tsx` - Lógica existente de toggle
- `src/shared/stores/uiStore.ts` - Store Zustand para tema
- `src/features/landing/components/HeroSection.tsx` - Patrón de animaciones
- `src/app/globals.css` - Clases glassmorphism definidas

### Arquitectura Propuesta

```
src/
├── features/
│   └── landing/
│       └── components/
│           └── Header.tsx  ← [NEW] Componente header
│
├── shared/
│   └── components/
│       └── ThemeToggle.tsx ← [MODIFY] Variante inline (sin fixed positioning)
│
└── app/
    └── layout.tsx          ← [MODIFY] Reemplazar ThemeToggle por Header
```

### Diseño Visual (Liquid Glass + Minimalismo)

```
┌─────────────────────────────────────────────────────────────────┐
│ ◇ NEXUS.AI          Servicios   Precios   Nosotros      ☀️/🌙  │
└─────────────────────────────────────────────────────────────────┘
         │                         │                        │
         │                         │                        │
   Space Grotesk            Links con hover         ThemeToggle
   font-display             line-animation          icono minimalista
   text-gradient            text-silver-mist        transición suave
```

---

## Blueprint (Assembly Line)

> IMPORTANTE: Solo definir FASES. Las subtareas se generan al entrar a cada fase.

### Fase 1: Componente Header Base
**Objetivo**: Header funcional con logo, navegación y estructura glassmorphism
**Validación**: Header visible sobre Hero, blur al scroll funciona

### Fase 2: Integración ThemeToggle
**Objetivo**: Mover toggle al header, eliminar posición fija anterior
**Validación**: Toggle funciona correctamente desde el header

### Fase 3: Polish y Animaciones
**Objetivo**: Animaciones de entrada, hover states, responsive refinement
**Validación**: UX fluida, transiciones suaves, typecheck pasa

### Fase 4: Validación Final
**Objetivo**: Sistema funcionando end-to-end
**Validación**:
- [ ] `npm run typecheck` pasa
- [ ] `npm run build` exitoso
- [ ] Header visible y funcional
- [ ] ThemeToggle cambia tema correctamente
- [ ] Responsive en mobile

---

## 🧠 Aprendizajes (Self-Annealing)

> Esta sección CRECE con cada error encontrado durante la implementación.

---

## Gotchas

> Cosas críticas a tener en cuenta ANTES de implementar

- [ ] Header debe ser `"use client"` por useEffect para scroll detection
- [ ] ThemeToggle ya tiene manejo de hydration (mounted state) - reutilizar
- [ ] z-index del header debe ser mayor que elementos de HeroSection (z-50)
- [ ] En light mode, el header debe ajustar contraste

## Anti-Patrones

- NO crear nuevo store para scroll state (usar useState local)
- NO duplicar lógica de ThemeToggle (modificar para variante)
- NO hardcodear colores (usar clases Tailwind del design system)
- NO romper el diseño existente del Hero

---

*PRP pendiente aprobación. No se ha modificado código.*
