# PRP-001: Wave Background — Fondo General Animado

> **Estado**: PENDIENTE
> **Fecha**: 2026-03-12
> **Proyecto**: NEXUS.AI Landing Page

---

## Objetivo

Reemplazar el actual `LiquidBackground` (CSS-only aurora blobs) con un nuevo fondo interactivo animado basado en **ondas SVG generadas con simplex-noise**. El componente `Waves` reacciona al cursor del usuario y genera un efecto inmersivo de líneas ondulantes. Se adaptará a la paleta de branding de NEXUS.AI.

## Por Qué

| Problema | Solución |
|----------|----------|
| El fondo actual (`LiquidBackground`) es estático con blobs CSS difuminados — visualmente genérico | Fondo interactivo con ondas SVG que reaccionan al mouse, creando una experiencia premium y diferenciada |
| No hay interactividad en el fondo — el usuario no siente la página "viva" | El cursor genera distorsiones en las ondas, creando engagement inmediato |

**Valor de negocio**: Mayor percepción de calidad → más confianza → mejor conversión en leads.

## Qué

### Criterios de Éxito
- [ ] El componente `Waves` renderiza como fondo global de toda la landing page
- [ ] Las ondas usan colores del branding (`#0066FF` electric-blue sobre `#0A0F1C` deep-navy)
- [ ] La animación es fluida (60fps) y responde al movimiento del cursor
- [ ] El fondo NO interfiere con la interactividad de los elementos de la página (clics, scroll, formularios)
- [ ] `npm run typecheck` pasa sin errores
- [ ] `npm run build` exitoso

### Comportamiento Esperado
1. Al cargar la página, ondas azules se mueven suavemente sobre fondo deep-navy
2. Al mover el mouse, las ondas cercanas al cursor se deforman suavemente creando un efecto "repulsión"
3. Un punto luminoso sigue el cursor (dot pointer)
4. El efecto es visible detrás de todas las secciones (fixed, z-index negativo)
5. En mobile, responde a touch events

---

## Contexto

### Branding Actual (de `tailwind.config.ts` y `globals.css`)

| Token | Valor | Uso en Waves |
|-------|-------|--------------|
| `deep-navy` | `#0A0F1C` | `backgroundColor` del componente |
| `electric-blue` | `#0066FF` | `strokeColor` principal de las ondas |
| `neon-cyan` | `#00D4FF` | Color del pointer dot (glow) |
| `cyber-purple` | `#7B2FE0` | Alternativa para variantes futuras |

### Referencias
- [LiquidBackground.tsx](file:///home/nerick_ods/solutions/landing-page/src/shared/components/LiquidBackground.tsx) — Componente actual a reemplazar
- [layout.tsx](file:///home/nerick_ods/solutions/landing-page/src/app/layout.tsx) — Donde se monta el fondo global
- [globals.css](file:///home/nerick_ods/solutions/landing-page/src/app/globals.css) — Estilos globales y utilidades glass

### Arquitectura Propuesta

No se crea feature nueva; es un componente de UI compartido:

```
src/shared/components/
├── ui/
│   └── wave-background.tsx   ← [NEW] Componente Waves
├── LiquidBackground.tsx      ← [MODIFY] Se importa y usa Waves internamente
```

### Dependencia Externa Nueva
```bash
npm install simplex-noise
```

> [!IMPORTANT]
> `simplex-noise` es una librería ligera (~2KB gzip) que genera ruido Perlin/Simplex. Es necesaria para la animación orgánica de las ondas. No tiene subdependencias.

---

## Blueprint (Assembly Line)

### Fase 1: Setup — Dependencia e infraestructura

**Objetivo**: Instalar `simplex-noise` y crear el archivo del componente `Waves` en `src/shared/components/ui/wave-background.tsx`, adaptado al branding.

**Adaptaciones al branding**:
- `strokeColor`: `"rgba(0, 102, 255, 0.35)"` (electric-blue con opacidad para sutileza)
- `backgroundColor`: `"transparent"` (hereda del body `deep-navy`)
- Pointer dot color: `#00D4FF` (neon-cyan)
- Opacidad general baja para no competir con el contenido

**Validación**: El archivo existe, TypeScript compila, la dependencia está en `package.json`.

### Fase 2: Integración — Reemplazar LiquidBackground

**Objetivo**: Modificar `LiquidBackground.tsx` para renderizar `<Waves />` como fondo principal, manteniendo la misma API (sin cambios en `layout.tsx`).

**Decisiones clave**:
- Mantener `fixed inset-0 -z-50 pointer-events-none` del wrapper actual
- Agregar `pointer-events-none` al contenedor del componente Waves para que no capture clics
- **Excepto** `pointer-events-auto` en el SVG oculto para capturar mouse position (via `mousemove` en `window`)

**Validación**: La landing page muestra las ondas animadas como fondo.

### Fase 3: Polish — Ajustes visuales y performance

**Objetivo**: Ajustar opacidad, velocidad y tamaño de las ondas para que sean un fondo sutil y no distraigan del contenido.

**Ajustes contemplados**:
- Reducir opacidad del stroke (`0.2–0.4` range)
- Verificar que no hay jank en scroll
- Verificar en viewport mobile (`< 768px`)

**Validación**: Experiencia fluida sin conflictos con secciones existentes.

### Fase 4: Validación Final

**Objetivo**: Sistema funcionando end-to-end.

**Validación**:
- [ ] `npm run typecheck` pasa
- [ ] `npm run build` exitoso
- [ ] Verificación visual en browser confirma ondas animadas
- [ ] Formulario de contacto sigue funcional (no bloqueado por overlay)
- [ ] Criterios de éxito cumplidos

---

## 🧠 Aprendizajes (Self-Annealing)

> Esta sección CRECE con cada error encontrado durante la implementación.

*(Vacío — se llenará durante la ejecución)*

---

## Gotchas

- [ ] `simplex-noise` usa `createNoise2D` — verificar que la versión instalada exporta esta función (v4+)
- [ ] El componente usa `document.createElementNS` para crear paths SVG dinámicamente — requiere `'use client'`
- [ ] `window.scrollY` en el cálculo de posición del mouse — puede causar offset en secciones scrolleadas
- [ ] `pointer-events: none` en el contenedor principal es **crítico** para no bloquear interactividad
- [ ] Performance: muchas líneas SVG + `requestAnimationFrame` pueden impactar FPS en dispositivos lentos — considerar reducir `totalLines` en mobile

## Anti-Patrones

- NO montar el componente Waves dentro de cada sección — es un fondo global fijo
- NO usar colores hardcodeados — usar los tokens del branding
- NO ignorar el cleanup del `useEffect` (cancelar `requestAnimationFrame`, remover listeners)
- NO hacer el fondo opaco — debe ser sutil para no competir con el contenido

---

*PRP pendiente aprobación. No se ha modificado código.*
