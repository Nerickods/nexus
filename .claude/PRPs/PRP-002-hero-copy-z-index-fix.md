# PRP-002: Fix Hero Copy Z-Index — Texto Siempre Visible Sobre Lumina Slider

> **Estado**: EN PROGRESO (código aplicado, pendiente validación visual)
> **Fecha**: 2026-03-10
> **Proyecto**: Nexus Landing Page

---

## Objetivo

Garantizar que **todo el contenido de copy del hero** (subtítulo, descripción, CTAs) sea siempre visible por encima del componente Lumina Slider expandible **antes de que el usuario haga scroll**. Actualmente el canvas WebGL del slider tapa el texto.

## Por Qué

| Problema | Solución |
|----------|----------|
| El copy del hero (h3, párrafo, botones CTA) queda oculto detrás del canvas WebGL del Lumina Slider porque `transform: translateZ(0)` crea un stacking context GPU que ignora los `z-index` relativos de los hermanos. | Eliminar la creación de stacking contexts GPU conflictivos y controlar el apilamiento exclusivamente con `z-index` CSS 2D estándar. |

**Valor de negocio**: Sin el copy visible, el hero pierde 100% de su capacidad de conversión — los usuarios no ven la propuesta de valor ni los CTAs.

## Qué

### Criterios de Éxito
- [ ] El copy completo (h3 + p + botones) es visible al cargar la página (scroll = 0%)
- [ ] El copy se mantiene visible mientras el media box se expande (0% → 100% scroll)
- [ ] El canvas WebGL del Lumina Slider permanece DETRÁS del copy en todo momento
- [ ] Los split titles (h1) permanecen visibles sobre el slider
- [ ] Al completar la expansión (100%), el overlay del Lumina Slider aparece correctamente
- [ ] No hay regresiones: la expansión por scroll sigue fluida sin jank
- [ ] `npm run typecheck` pasa sin errores
- [ ] `npm run build` exitoso

### Comportamiento Esperado (Happy Path)

```
1. Usuario carga la página → Ve los split titles + copy + CTAs ENCIMA del media box
2. El Lumina Slider renderiza dentro del media box PERO debajo del texto
3. Usuario scrollea → El media box se expande, el copy hace fade out (opacity), los titles se deslizan
4. Al 100% expansión → Los controles internos del Lumina (overlay) se activan
5. Si scrollea arriba → Vuelve al estado 1 con copy visible
```

---

## Contexto

### Análisis del Bug — Root Cause

#### Estructura de Capas Actual (`scroll-expansion-hero.tsx`)

```
<section> (relative)
  ├── [z-0]  Background Image (bgRef)
  │
  └── [z-10] Main Viewport Container (relative)
        │
        ├── [z-10] MEDIA BOX WRAPPER (absolute, pointer-events-none)
        │     └── MEDIA BOX (mediaBoxRef, overflow:hidden)
        │           └── LuminaSlider (transform: translateZ(0)) ← ⚠️ PROBLEMA
        │
        ├── [z-20] SPLIT TITLES (absolute, pointer-events-none)
        │     ├── h1 titleLeft
        │     └── h1 titleRight
        │
        └── [z-30] CHILDREN / COPY (absolute, pointer-events-none)
              └── HeroSection children (h3, p, botones)
```

#### El Problema Exacto

**Línea 450 de `lumina-slider.tsx`:**
```tsx
style={{ transform: 'translateZ(0)' }}
```

`transform: translateZ(0)` crea un **nuevo stacking context con aceleración GPU**. Cuando el navegador promueve este elemento a una capa de composición GPU, **ignora la jerarquía `z-index` normal del DOM** entre hermanos. El canvas WebGL pintado por la GPU queda "flotando" por encima de los divs z-20 y z-30 que sólo usan z-index CSS 2D.

#### Aprendizaje Previo (PRP-001)

> **2026-03-10: WebGL Canvas Z-Fighting (GPU Flattening)**
> - **Error**: `translateZ(0)` causa que navegadores aplanen capas y WebGL ignore z-index
> - **Fix**: Eliminar TODOS los `translateZ`, `perspective` e `isolation`

### Referencias

| Archivo | Líneas Clave | Rol |
|---------|-------------|-----|
| `src/shared/components/ui/lumina-slider.tsx` | L450: `translateZ(0)` | 🔴 Causa del bug |
| `src/shared/components/ui/scroll-expansion-hero.tsx` | L224,276,300-302 | Capas z-10, z-20, z-30 |
| `src/features/landing/components/HeroSection.tsx` | L18-65 | Children / copy |

---

## Evaluación de Opciones

### Opción A: Eliminar `translateZ(0)` del LuminaSlider ✅ SELECCIONADA

**Qué**: Quitar `transform: translateZ(0)` de la línea 450 de `lumina-slider.tsx` y confiar en z-index CSS 2D puro.

| Pro | Contra |
|-----|--------|
| Fix más simple y directo (1 línea) | Podría afectar suavidad del canvas WebGL |
| Sigue el aprendizaje documentado en PRP-001 | — |
| No crea dependencias nuevas | — |
| Zero risk de romper otras capas | — |

**Riesgo**: Bajo. Three.js/WebGL ya crea su propia capa GPU para el `<canvas>`. El `translateZ(0)` en el **container div** es redundante y perjudicial.

### Opción B: Mover children y titles a `position: fixed` durante el hero

**Qué**: Sacar los elementos de texto del flujo normal y posicionarlos con `fixed` mientras el hero está activo.

| Pro | Contra |
|-----|--------|
| Evita completamente conflictos de stacking | Complejidad alta: gestionar scroll locking + fixed positioning |
| — | Puede romper en mobile (teclado virtual, address bar) |
| — | Requiere refactor significativo del scroll-expansion-hero |

**Riesgo**: Alto. Romper el sistema de scroll existente.

### Opción C: Usar `isolation: isolate` en media box wrapper

**Qué**: Añadir `isolation: isolate` al wrapper del media box para contener su stacking context.

| Pro | Contra |
|-----|--------|
| CSS estándar, bien soportado | `isolation` + WebGL canvas tiene comportamiento impredecible entre navegadores |
| No toca el LuminaSlider | La combinación `isolation` + `backdrop-blur` puede causar render artifacts |

**Riesgo**: Medio. Los navegadores no garantizan consistencia con `isolation` + GPU layers.

### Decisión: **Opción A**

Es la más fiable, simple, y está validada por el aprendizaje previo del PRP-001. El `translateZ(0)` del container div es innecesario — el `<canvas>` WebGL ya tiene su propia capa GPU por defecto.

---

## Blueprint (Assembly Line)

> IMPORTANTE: Solo definir FASES. Las subtareas se generan al entrar a cada fase.

### Fase 1: Fix del Stacking Context
**Objetivo**: Eliminar la creación de stacking context GPU conflictivo en el LuminaSlider
**Trabajo**:
- Eliminar `transform: 'translateZ(0)'` de `lumina-slider.tsx` línea 450
- Verificar que no hay otros `translateZ`, `perspective` o `will-change: transform` en la cadena de componentes que puedan recrear el problema
- Verificar que `scroll-expansion-hero.tsx` no tiene transforms conflictivos en sus capas

**Validación**: El copy del hero es visible sobre el slider al cargar la página

### Fase 2: Hardening de Z-Index
**Objetivo**: Garantizar la jerarquía correcta con z-index explícitos y consistentes
**Trabajo**:
- Verificar que la jerarquía es: bg(z-0) < mediaBox(z-10) < titles(z-20) < children(z-30)
- Asegurar que ningún `will-change` en la cadena padre cree stacking contexts involuntarios
- Remover `willChange: 'width, height, border-radius'` del mediaBox si crea stacking context (L234)

**Validación**: Inspeccionar en DevTools que el computed z-index es correcto en todas las capas

### Fase 3: Validación Visual y Build
**Objetivo**: Confirmar que todo funciona end-to-end sin regresiones
**Validación**:
- [ ] `npm run typecheck` pasa
- [ ] `npm run build` exitoso
- [ ] Copy visible al cargar (scroll=0)
- [ ] Copy visible durante expansión (0→100%)
- [ ] Copy hace fade out correctamente al expandir
- [ ] Slider WebGL se expande sin jank
- [ ] Al 100% expansión: overlay del Lumina se activa correctamente
- [ ] Scroll arriba: copy reaparece correctamente

---

## 🧠 Aprendizajes (Self-Annealing)

> Esta sección CRECE con cada error encontrado durante la implementación.

*(Se poblará durante la ejecución)*

---

## Gotchas

- [ ] **`will-change` crea stacking context**: `will-change: transform` o `will-change: opacity` en un padre puede crear un nuevo stacking context, rompiendo la jerarquía z-index esperada
- [ ] **Three.js canvas auto-GPU**: El `<canvas>` WebGL ya es promovido a capa GPU por el navegador automáticamente — no necesita `translateZ(0)` en ningún ancestro
- [ ] **`backdrop-blur` crea stacking context**: Cualquier `backdrop-filter` en un elemento crea un nuevo stacking context. El `backdrop-blur-sm` en el mediaBox (L228) podría interferir

## Anti-Patrones

- NO usar `translateZ(0)`, `translate3d(0,0,0)` ni `perspective` en containers que necesitan respetar z-index de hermanos
- NO usar `will-change: transform` como hack de rendimiento en elementos que participan en jerarquías z-index
- NO asumir que z-index funciona entre stacking contexts diferentes — CSS solo garantiza z-index entre hermanos en el MISMO stacking context

---

*PRP pendiente aprobación. No se ha modificado código.*
