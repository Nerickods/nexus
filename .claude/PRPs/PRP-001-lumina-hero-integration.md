# PRP-001: Integración LuminaInteractiveList en Hero Scroll-Expansion

> **Estado**: COMPLETADO
> **Fecha**: 2026-03-09
> **Proyecto**: Nexus Landing Page

---

## Objetivo

Reemplazar la imagen estática del hero expandido (`/images/hero/media.png`) por el componente `LuminaInteractiveList` — un slider WebGL con transiciones de vidrio (Three.js + GSAP) y 6 slides narrativos. El componente debe escalar dinámicamente con el scroll de expansión, apareciendo progresivamente mientras el media box crece hasta llenar el viewport.

## Por Qué

| Problema | Solución |
|----------|----------|
| El hero actual muestra una imagen estática al expandirse — cero interactividad y engagement bajo. | Un slider WebGL con efectos de vidrio, auto-play y navegación genera un impacto visual premium que refuerza la narrativa de marca. |

**Valor de negocio**: Incrementar el tiempo de permanencia en hero >25%, fortalecer la percepción de marca "tech avanzado" y dar soporte narrativo a la propuesta de valor con 6 slides de storytelling visual.

## Qué

### Criterios de Éxito
- [ ] El componente Lumina aparece dentro del media box del hero y escala con el scroll
- [ ] Las 6 imágenes de visión se cargan correctamente con transiciones WebGL glass
- [ ] El auto-slide funciona cuando el hero está completamente expandido
- [ ] El canvas de Three.js se redimensiona dinámicamente según el tamaño del media box
- [ ] La navegación inferior y el counter funcionan correctamente
- [ ] Performance: sin jank ni layout shifts durante la expansión por scroll
- [ ] El componente se destruye y limpia recursos (WebGL, timers) al desmontar
- [ ] Mobile responsive: funciona correctamente en touch devices

### Comportamiento Esperado (Happy Path)

```
1. Usuario llega a la landing → Ve el hero con split titles + media box (55vw × 35vh)
2. Usuario hace scroll → El media box se expande progresivamente hacia fullscreen
3. Durante la expansión (0% → 100% scroll):
   - El canvas WebGL del Lumina se redimensiona en tiempo real
   - Los controles (nav, counter) se mantienen fijos DENTRO del media box
   - La opacidad de los títulos split se desvanece
4. Al 100% de expansión (mediaFullyExpanded = true):
   - El auto-slide se activa → Las transiciones glass entre slides comienzan
   - El contenido de texto (título + descripción del slide) se anima con GSAP
   - La navegación inferior se vuelve interactiva (clickeable)
5. Si el usuario scrollea hacia arriba → Se contrae y vuelve al estado inicial
```

---

## Contexto

### Referencias de Código Fuente

| Archivo | Proyecto | Propósito |
|---------|----------|-----------|
| `src/features/portfolio/components/LuminaInteractiveList.tsx` | `/perfil` | Componente original a portar (503 líneas) |
| `src/shared/components/ui/scroll-expansion-hero.tsx` | `/landing-page` | Wrapper de scroll expansion actual (246 líneas) |
| `src/features/landing/components/HeroSection.tsx` | `/landing-page` | Consumer actual del hero (70 líneas) |

### Assets Requeridos (Copiar de `/perfil`)
```
/perfil/public/images/vision/
├── vision_darkness_1770192366548.png   → Slide 1: "El Cuello de Botella"
├── vision_spark_1770192390146.png      → Slide 2: "El Despertar"
├── vision_fire_1770192411318.png       → Slide 3: "Maestría Digital"
├── vision_tribe_1770192429510.png      → Slide 4: "Liderando el Cambio"
├── vision_forge_1770192484871.png      → Slide 5: "Producción Sin Límites"
└── vision_dawn_1770192605237.png       → Slide 6: "El Siguiente Paso"
```

### Dependencias a Instalar

| Paquete | Versión | Motivo |
|---------|---------|--------|
| `three` | `^0.170.0` | Motor WebGL para shaders y texturas |
| `@types/three` | `^0.170.0` | Tipos TypeScript |
| `gsap` | `^3.12.0` | Animaciones de texto + tween de transiciones |

> ⚠️ `framer-motion` ya está instalado (`^11.15.0`). No hay conflicto con GSAP porque operan en capas diferentes (Framer → scroll/layout, GSAP → text/WebGL).

### Arquitectura Propuesta

No se crea una nueva feature. Se modifica la feature `landing` existente:

```
src/features/landing/components/
├── HeroSection.tsx                # [MODIFICAR] - Pasar nueva prop al scroll hero
└── ...

src/shared/components/ui/
├── scroll-expansion-hero.tsx      # [MODIFICAR] - Soportar mediaType="lumina"
└── lumina-slider.tsx              # [NUEVO] - Componente Lumina adaptado

public/images/vision/              # [NUEVO] - 6 imágenes de los slides
```

---

## Blueprint (Assembly Line)

> IMPORTANTE: Solo definir FASES. Las subtareas se generan al entrar a cada fase
> siguiendo el bucle agéntico (mapear contexto → generar subtareas → ejecutar)

### Fase 1: Preparación de Assets y Dependencias
**Objetivo**: Tener todas las dependencias instaladas y los assets listos
**Trabajo**:
- Instalar `three`, `@types/three`, `gsap` via npm
- Copiar las 6 imágenes de `/perfil/public/images/vision/` a `/landing-page/public/images/vision/`
- Verificar que `npm run dev` levanta sin errores
**Validación**: `npm ls three gsap` muestra las deps instaladas; las imágenes existen en `public/images/vision/`

### Fase 2: Portar LuminaInteractiveList como `lumina-slider.tsx`
**Objetivo**: Componente standalone funcional ubicado en `src/shared/components/ui/lumina-slider.tsx`
**Trabajo**:
- Crear el componente nuevo adaptado del original:
  - Recibe props: `width`, `height`, `isActive` (controla cuándo activar auto-slide)
  - El canvas se dimensiona según las props `width` × `height` (NO hardcoded a `window.innerWidth/Height`)
  - Resize handler escucha cambios en las props, no solo `window.resize`
  - El auto-slide SOLO se activa cuando `isActive === true`
  - Limpieza completa en cleanup del useEffect (dispose renderer, clear timers)
- Adaptar slides content a la narrativa de Nexus (reescribir títulos y descripciones para la marca de agencia)
- Mover los estilos inline del componente original a clases de Tailwind donde sea posible
**Validación**: Se puede renderizar el componente de forma independiente con props de test

### Fase 3: Integración con Scroll-Expansion Hero
**Objetivo**: El media box expandible renderiza `LuminaSlider` en lugar de una imagen estática
**Trabajo**:
- Modificar `scroll-expansion-hero.tsx`:
  - Añadir `mediaType: "lumina"` como opción
  - Cuando `mediaType === "lumina"`: renderizar `LuminaSlider` en lugar de `<Image>`
  - Pasar `width={currentW}vw`, `height={currentH}vh` y `isActive={mediaFullyExpanded}` al slider
  - El canvas de Three.js se redimensiona reactivamente con `ResizeObserver` en el container
- Modificar `HeroSection.tsx`:
  - Cambiar `mediaType="image"` → `mediaType="lumina"`
  - Remover `mediaSrc="/images/hero/media.png"` (ya no aplica)
**Validación**: El hero muestra el slider Lumina al expandirse; las transiciones son suaves

### Fase 4: Lógica de Escala Dinámica y Performance
**Objetivo**: El slider se redimensiona fluidamente con el scroll sin jank
**Trabajo**:
- Implementar `ResizeObserver` en el container del slider para detectar cambios de tamaño
- Usar `requestAnimationFrame` throttling para limitar updates del renderer a 60fps max
- El renderer de Three.js se actualiza con `renderer.setSize()` + `shaderMaterial.uniforms.uResolution` en cada resize
- Deshabilitar la animación render loop cuando el componente no es visible (Intersection Observer)
- Validar que no hay memory leaks en las texturas de Three.js al hacer resize
**Validación**: Scroll expansion 0→100% sin dropped frames (usar Chrome DevTools Performance tab)

### Fase 5: Validación Final
**Objetivo**: Sistema funcionando end-to-end con quality gates
**Validación**:
- [ ] `npm run typecheck` pasa sin errores
- [ ] `npm run build` exitoso
- [ ] Scroll expansion fluido en desktop (Chrome, Firefox)
- [ ] Touch scroll funcional en mobile viewport
- [ ] Auto-slide se activa SOLO cuando hero está fully expanded
- [ ] Auto-slide se pausa cuando el hero se contrae
- [ ] Counter y nav funcionan correctamente
- [ ] Los 6 slides cargan con transiciones glass
- [ ] Criterios de éxito cumplidos

---

## 🧠 Aprendizajes (Self-Annealing)

> Esta sección CRECE con cada error encontrado durante la implementación.

*(Vacío — se poblará durante la ejecución)*

### 2026-03-09: Node.js version mismatch en WSL
- **Error**: `npm run build` y `npm run dev` fallan porque la versión de Node en WSL es 18.20.8 pero Next.js 16 requiere >=20.9.0
- **Fix**: Actualizar Node.js en WSL a v20+ con `nvm install 20 && nvm use 20`
- **Aplicar en**: Todos los proyectos que usen Next.js 16+

### 2026-03-10: Scroll expansion flicker con WebGL canvas
- **Error**: `ResizeObserver` + `renderer.setSize()` en cada frame de scroll destruye y recrea el canvas buffer → flicker visible. `useState(scrollProgress)` causa React re-renders en cada wheel event → layout thrash
- **Fix (3 cambios críticos)**:
  1. Canvas a tamaño viewport (`100vw × 100vh`) centrado con CSS → el parent lo clipea con `overflow:hidden` → `renderer.setSize()` NUNCA se llama durante scroll
  2. `useRef(scrollProgress)` reemplaza `useState` → manipulación directa del DOM para width/height/opacity/transform → CERO re-renders de React durante scroll
  3. Overlay (texto, nav, counter) oculto con `opacity:0` + `pointer-events:none` durante expansión → visible solo cuando `isActive=true`
### 2026-03-10: WebGL Canvas Z-Fighting (GPU Flattening)
- **Error**: Al usar `transform: translateZ(0)` para arreglar el jitter, navegadores modernos aplanan las capas y el WebGL ignora el `z-index` en `absolute` posicionamiento, tapando los textos superiores.
- **Fix**: Eliminar TODOS los `translateZ`, `perspective` e `isolation`. Volver a la regla de apilamiento CSS 2D estándar (`z-10`, `z-20`, `z-30`) y quitar hackeos de GPU forzados. El motor de Chromium a veces independiza las capas 3D y se pierden del DOM normal.
- **Aplicar en**: Cualquier superposición de divs HTML sobre un componente renderizado por GPU/WebGL.

---

## Gotchas

- [ ] **Three.js + SSR**: Three.js accede a `window` y `document`. El componente DEBE ser `'use client'` y usar `dynamic import` o guards `typeof window !== 'undefined'`
- [ ] **Canvas resize en scroll**: Llamar `renderer.setSize()` en cada frame de scroll puede causar jank. Usar `ResizeObserver` + throttle
- [ ] **GSAP cleanup**: Todos los tweens de GSAP deben matarse en el cleanup (`gsap.killTweensOf`)
- [ ] **Texture disposal**: Las texturas de Three.js deben hacerse `dispose()` explícitamente en el cleanup para evitar GPU memory leaks
- [ ] **z-index stacking**: El canvas WebGL debe estar DETRÁS de los controles de navegación del slider pero DELANTE del background del hero
- [ ] **Mobile performance**: El shader `glass` es costoso. Considerar fallback simplificado si `devicePixelRatio > 2` y mobile

## Anti-Patrones

- NO crear nuevos patrones si los existentes funcionan
- NO ignorar errores de TypeScript
- NO hardcodear valores (usar constantes)
- NO renderizar el canvas si el componente no es visible (waste de GPU)
- NO usar `getElementById` para manipular DOM — migrar a refs de React donde sea posible

---

*PRP pendiente aprobación. No se ha modificado código.*
