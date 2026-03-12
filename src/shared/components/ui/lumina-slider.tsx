'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

interface LuminaSliderProps {
    /** Controls whether auto-slide and overlay content are active */
    isActive: boolean;
    /** Optional className for the container */
    className?: string;
}

// --- SLIDE DATA (Nexus Agency narrative) ---
const SLIDES = [
    {
        title: "El Cuello de Botella",
        description: "Antes, la innovación era costosa. Validar una idea requería meses de desarrollo y un presupuesto que mataba proyectos antes de nacer.",
        media: "/images/vision/vision_darkness_1770192366548.png"
    },
    {
        title: "El Despertar",
        description: "Pero el paradigma cambió. La inteligencia artificial no llegó para escribir código por nosotros, sino para eliminar la fricción entre tu visión y el mercado.",
        media: "/images/vision/vision_spark_1770192390146.png"
    },
    {
        title: "Maestría Digital",
        description: "No es magia, es ingeniería avanzada. Hemos dominado estas herramientas para que tú no tengas que preocuparte por el 'cómo', sino por el 'qué'.",
        media: "/images/vision/vision_fire_1770192411318.png"
    },
    {
        title: "Liderando el Cambio",
        description: "El mercado no espera. Hoy ganan los que se atreven a construir rápido y fallar barato. Esa es nuestra especialidad.",
        media: "/images/vision/vision_tribe_1770192429510.png"
    },
    {
        title: "Producción Sin Límites",
        description: "Construimos a la velocidad de la estrategia. Si puedes imaginar el modelo de negocio, podemos materializar la plataforma en días.",
        media: "/images/vision/vision_forge_1770192484871.png"
    },
    {
        title: "El Siguiente Paso",
        description: "Las reglas del juego cambiaron a tu favor. Ya no necesitas un ejército de desarrolladores, solo necesitas al aliado correcto. ¿Estás listo para liderar tu industria?",
        media: "/images/vision/vision_dawn_1770192605237.png"
    }
];

// --- SHADER CONFIG ---
const SLIDER_CONFIG = {
    transitionDuration: 2.5,
    autoSlideSpeed: 5000,
    glassRefractionStrength: 1.0,
    glassChromaticAberration: 1.0,
    glassBubbleClarity: 1.0,
    glassEdgeGlow: 1.0,
    glassLiquidFlow: 1.0,
};

const VERTEX_SHADER = `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;

const FRAGMENT_SHADER = `
    uniform sampler2D uTexture1, uTexture2;
    uniform float uProgress;
    uniform vec2 uResolution, uTexture1Size, uTexture2Size;
    uniform float uGlassRefractionStrength, uGlassChromaticAberration, uGlassBubbleClarity, uGlassEdgeGlow, uGlassLiquidFlow;
    varying vec2 vUv;

    vec2 getCoverUV(vec2 uv, vec2 textureSize) {
        vec2 s = uResolution / textureSize;
        float scale = max(s.x, s.y);
        vec2 scaledSize = textureSize * scale;
        vec2 offset = (uResolution - scaledSize) * 0.5;
        return (uv * uResolution - offset) / scaledSize;
    }

    vec4 glassEffect(vec2 uv, float progress) {
        float time = progress * 5.0;
        vec2 uv1 = getCoverUV(uv, uTexture1Size);
        vec2 uv2 = getCoverUV(uv, uTexture2Size);
        float maxR = length(uResolution) * 0.85;
        float br = progress * maxR;
        vec2 p = uv * uResolution;
        vec2 c = uResolution * 0.5;
        float d = length(p - c);
        float nd = d / max(br, 0.001);
        float param = smoothstep(br + 3.0, br - 3.0, d);
        vec4 img;
        if (param > 0.0) {
            float ro = 0.08 * uGlassRefractionStrength * pow(smoothstep(0.3 * uGlassBubbleClarity, 1.0, nd), 1.5);
            vec2 dir = (d > 0.0) ? (p - c) / d : vec2(0.0);
            vec2 distUV = uv2 - dir * ro;
            distUV += vec2(sin(time + nd * 10.0), cos(time * 0.8 + nd * 8.0)) * 0.015 * uGlassLiquidFlow * nd * param;
            float ca = 0.02 * uGlassChromaticAberration * pow(smoothstep(0.3, 1.0, nd), 1.2);
            img = vec4(
                texture2D(uTexture2, distUV + dir * ca * 1.2).r,
                texture2D(uTexture2, distUV + dir * ca * 0.2).g,
                texture2D(uTexture2, distUV - dir * ca * 0.8).b,
                1.0
            );
            if (uGlassEdgeGlow > 0.0) {
                float rim = smoothstep(0.95, 1.0, nd) * (1.0 - smoothstep(1.0, 1.01, nd));
                img.rgb += rim * 0.08 * uGlassEdgeGlow;
            }
        } else {
            img = texture2D(uTexture2, uv2);
        }
        vec4 oldImg = texture2D(uTexture1, uv1);
        if (progress > 0.95) img = mix(img, texture2D(uTexture2, uv2), (progress - 0.95) / 0.05);
        return mix(oldImg, img, param);
    }

    void main() {
        gl_FragColor = glassEffect(vUv, uProgress);
    }
`;

const PROGRESS_UPDATE_INTERVAL = 50;

// --- COMPONENT ---
export function LuminaSlider({ isActive, className = '' }: LuminaSliderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const stateRef = useRef({
        currentSlideIndex: 0,
        isTransitioning: false,
        texturesLoaded: false,
        sliderEnabled: false,
        autoSlideTimer: null as NodeJS.Timeout | null,
        progressAnimation: null as ReturnType<typeof setInterval> | null,
        renderer: null as THREE.WebGLRenderer | null,
        shaderMaterial: null as THREE.ShaderMaterial | null,
        slideTextures: [] as THREE.Texture[],
        scene: null as THREE.Scene | null,
        camera: null as THREE.OrthographicCamera | null,
        animFrameId: 0,
    });

    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLSpanElement>(null);
    const totalRef = useRef<HTMLSpanElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    const splitText = useCallback((text: string) => {
        return text.split('').map(char =>
            `<span style="display:inline-block;opacity:0">${char === ' ' ? '&nbsp;' : char}</span>`
        ).join('');
    }, []);

    const stopAutoSlideTimer = useCallback(() => {
        const s = stateRef.current;
        if (s.progressAnimation) clearInterval(s.progressAnimation);
        if (s.autoSlideTimer) clearTimeout(s.autoSlideTimer);
        s.progressAnimation = null;
        s.autoSlideTimer = null;
    }, []);

    const updateCounter = useCallback((idx: number) => {
        if (counterRef.current) counterRef.current.textContent = String(idx + 1).padStart(2, '0');
        if (totalRef.current) totalRef.current.textContent = String(SLIDES.length).padStart(2, '0');
    }, []);

    const updateNavigationState = useCallback((idx: number) => {
        navRef.current?.querySelectorAll('.slide-nav-item').forEach((el, i) =>
            el.classList.toggle('active', i === idx)
        );
    }, []);

    const updateSlideProgress = useCallback((idx: number, prog: number) => {
        const el = navRef.current?.querySelectorAll('.slide-nav-item')[idx]?.querySelector('.slide-progress-fill') as HTMLElement | null;
        if (el) { el.style.width = `${prog}%`; el.style.opacity = '1'; }
    }, []);

    const fadeSlideProgress = useCallback((idx: number) => {
        const el = navRef.current?.querySelectorAll('.slide-nav-item')[idx]?.querySelector('.slide-progress-fill') as HTMLElement | null;
        if (el) { el.style.opacity = '0'; setTimeout(() => { el.style.width = '0%'; }, 300); }
    }, []);

    const quickResetProgress = useCallback((idx: number) => {
        const el = navRef.current?.querySelectorAll('.slide-nav-item')[idx]?.querySelector('.slide-progress-fill') as HTMLElement | null;
        if (el) {
            el.style.transition = 'width 0.2s ease-out';
            el.style.width = '0%';
            setTimeout(() => { el.style.transition = 'width 0.1s ease, opacity 0.3s ease'; }, 200);
        }
    }, []);

    // Main effect: init Three.js at VIEWPORT SIZE (not container size)
    useEffect(() => {
        if (!containerRef.current || !canvasRef.current) return;
        const s = stateRef.current;
        const canvas = canvasRef.current;
        const container = containerRef.current;

        // --- THREE.JS SETUP at full viewport size ---
        // The canvas is always viewport-sized; the parent clips it via overflow:hidden
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        s.scene = new THREE.Scene();
        s.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        s.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false });
        s.renderer.setSize(vw, vh);
        s.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        s.shaderMaterial = new THREE.ShaderMaterial({
            uniforms: {
                uTexture1: { value: null }, uTexture2: { value: null }, uProgress: { value: 0 },
                uResolution: { value: new THREE.Vector2(vw, vh) },
                uTexture1Size: { value: new THREE.Vector2(1, 1) }, uTexture2Size: { value: new THREE.Vector2(1, 1) },
                uGlassRefractionStrength: { value: SLIDER_CONFIG.glassRefractionStrength },
                uGlassChromaticAberration: { value: SLIDER_CONFIG.glassChromaticAberration },
                uGlassBubbleClarity: { value: SLIDER_CONFIG.glassBubbleClarity },
                uGlassEdgeGlow: { value: SLIDER_CONFIG.glassEdgeGlow },
                uGlassLiquidFlow: { value: SLIDER_CONFIG.glassLiquidFlow },
            },
            vertexShader: VERTEX_SHADER,
            fragmentShader: FRAGMENT_SHADER,
        });
        s.scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), s.shaderMaterial));

        // --- TEXTURE LOADING ---
        const loadTexture = (src: string) =>
            new Promise<THREE.Texture>((resolve, reject) => {
                const loader = new THREE.TextureLoader();
                loader.setCrossOrigin('anonymous');
                loader.load(
                    src,
                    (t) => {
                        t.minFilter = t.magFilter = THREE.LinearFilter;
                        t.userData = { size: new THREE.Vector2(t.image.width, t.image.height) };
                        resolve(t);
                    },
                    undefined,
                    (e) => { console.error('Texture load failed', src, e); reject(e); }
                );
            });

        const initTextures = async () => {
            try {
                const textures = await Promise.all(SLIDES.map(sl => loadTexture(sl.media)));
                s.slideTextures = textures;
                if (textures.length >= 2 && s.shaderMaterial) {
                    s.shaderMaterial.uniforms.uTexture1.value = textures[0];
                    s.shaderMaterial.uniforms.uTexture2.value = textures[1];
                    s.shaderMaterial.uniforms.uTexture1Size.value = textures[0].userData.size;
                    s.shaderMaterial.uniforms.uTexture2Size.value = textures[1].userData.size;
                    s.texturesLoaded = true;
                    s.sliderEnabled = true;
                    container.querySelector('.lumina-wrapper')?.classList.add('loaded');
                }
            } catch (e) {
                console.error('Critical: Failed to load slide textures', e);
                container.querySelector('.lumina-wrapper')?.classList.add('loaded');
            }
        };

        // --- RENDER LOOP ---
        const render = () => {
            if (s.renderer && s.scene && s.camera) {
                s.animFrameId = requestAnimationFrame(render);
                s.renderer.render(s.scene, s.camera);
            }
        };

        // --- WINDOW RESIZE (actual viewport changes only — NOT scroll) ---
        const handleResize = () => {
            const newW = window.innerWidth;
            const newH = window.innerHeight;
            if (s.renderer && s.shaderMaterial) {
                s.renderer.setSize(newW, newH);
                s.shaderMaterial.uniforms.uResolution.value.set(newW, newH);
            }
        };
        window.addEventListener('resize', handleResize);

        // --- INIT TEXT ---
        if (titleRef.current && descRef.current) {
            titleRef.current.innerHTML = splitText(SLIDES[0].title);
            descRef.current.textContent = SLIDES[0].description;
            gsap.fromTo(titleRef.current.children, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.03, ease: 'power3.out', delay: 0.5 });
            gsap.fromTo(descRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.8 });
        }
        updateCounter(0);

        // --- BUILD NAVIGATION ---
        if (navRef.current) {
            navRef.current.innerHTML = '';
            SLIDES.forEach((slide, i) => {
                const item = document.createElement('div');
                item.className = `slide-nav-item${i === 0 ? ' active' : ''}`;
                item.dataset.slideIndex = String(i);
                item.innerHTML = `<div class="slide-progress-line"><div class="slide-progress-fill"></div></div><div class="slide-nav-title">${slide.title}</div>`;
                item.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (!s.isTransitioning && i !== s.currentSlideIndex) {
                        stopAutoSlideTimer();
                        quickResetProgress(s.currentSlideIndex);
                        navigateToSlide(i);
                    }
                });
                navRef.current!.appendChild(item);
            });
        }

        initTextures();
        render();

        const safetyTimer = setTimeout(() => {
            container.querySelector('.lumina-wrapper')?.classList.add('loaded');
        }, 3000);

        // --- SLIDE NAVIGATION ---
        function updateContent(idx: number) {
            if (!titleRef.current || !descRef.current) return;
            gsap.to(titleRef.current.children, { y: -20, opacity: 0, duration: 0.5, stagger: 0.02, ease: 'power2.in' });
            gsap.to(descRef.current, { y: -10, opacity: 0, duration: 0.4, ease: 'power2.in' });
            setTimeout(() => {
                if (!titleRef.current || !descRef.current) return;
                titleRef.current.innerHTML = splitText(SLIDES[idx].title);
                descRef.current.textContent = SLIDES[idx].description;
                gsap.set(titleRef.current.children, { opacity: 0, y: 20 });
                gsap.set(descRef.current, { y: 20, opacity: 0 });
                gsap.to(titleRef.current.children, { y: 0, opacity: 1, duration: 0.8, stagger: 0.03, ease: 'power3.out' });
                gsap.to(descRef.current, { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' });
            }, 500);
        }

        function navigateToSlide(targetIndex: number) {
            if (s.isTransitioning || targetIndex === s.currentSlideIndex) return;
            stopAutoSlideTimer();
            quickResetProgress(s.currentSlideIndex);

            const currentTexture = s.slideTextures[s.currentSlideIndex];
            const targetTexture = s.slideTextures[targetIndex];
            const useWebGL = s.texturesLoaded && s.sliderEnabled && currentTexture && targetTexture;

            s.isTransitioning = true;
            updateContent(targetIndex);
            s.currentSlideIndex = targetIndex;
            updateCounter(targetIndex);
            updateNavigationState(targetIndex);

            if (useWebGL && s.shaderMaterial) {
                s.shaderMaterial.uniforms.uTexture1.value = currentTexture;
                s.shaderMaterial.uniforms.uTexture2.value = targetTexture;
                s.shaderMaterial.uniforms.uTexture1Size.value = currentTexture.userData.size;
                s.shaderMaterial.uniforms.uTexture2Size.value = targetTexture.userData.size;

                gsap.fromTo(s.shaderMaterial.uniforms.uProgress,
                    { value: 0 },
                    {
                        value: 1,
                        duration: SLIDER_CONFIG.transitionDuration,
                        ease: 'power2.inOut',
                        onComplete: () => {
                            if (!s.shaderMaterial) return;
                            s.shaderMaterial.uniforms.uProgress.value = 0;
                            s.shaderMaterial.uniforms.uTexture1.value = targetTexture;
                            s.shaderMaterial.uniforms.uTexture1Size.value = targetTexture.userData.size;
                            s.isTransitioning = false;
                            safeStartTimer(100);
                        }
                    }
                );
            } else {
                setTimeout(() => { s.isTransitioning = false; safeStartTimer(2000); }, 1000);
            }
        }

        function handleSlideChange() {
            if (s.isTransitioning) return;
            navigateToSlide((s.currentSlideIndex + 1) % SLIDES.length);
        }

        function startAutoSlideTimer() {
            if (!s.texturesLoaded || !s.sliderEnabled) return;
            stopAutoSlideTimer();
            let progress = 0;
            const increment = (100 / SLIDER_CONFIG.autoSlideSpeed) * PROGRESS_UPDATE_INTERVAL;
            s.progressAnimation = setInterval(() => {
                if (!s.sliderEnabled) { stopAutoSlideTimer(); return; }
                progress += increment;
                updateSlideProgress(s.currentSlideIndex, progress);
                if (progress >= 100) {
                    if (s.progressAnimation) clearInterval(s.progressAnimation);
                    s.progressAnimation = null;
                    fadeSlideProgress(s.currentSlideIndex);
                    if (!s.isTransitioning) handleSlideChange();
                }
            }, PROGRESS_UPDATE_INTERVAL);
        }

        function safeStartTimer(delay = 0) {
            stopAutoSlideTimer();
            if (s.sliderEnabled && s.texturesLoaded) {
                if (delay > 0) s.autoSlideTimer = setTimeout(startAutoSlideTimer, delay);
                else startAutoSlideTimer();
            }
        }

        // Expose to isActive effect
        (stateRef.current as unknown as Record<string, unknown>)._safeStartTimer = safeStartTimer;

        // Visibility handler
        const visibilityHandler = () => {
            if (document.hidden) stopAutoSlideTimer();
            else if (!s.isTransitioning && s.sliderEnabled) safeStartTimer();
        };
        document.addEventListener('visibilitychange', visibilityHandler);

        return () => {
            clearTimeout(safetyTimer);
            stopAutoSlideTimer();
            cancelAnimationFrame(s.animFrameId);
            document.removeEventListener('visibilitychange', visibilityHandler);
            window.removeEventListener('resize', handleResize);
            s.slideTextures.forEach(t => t.dispose());
            s.shaderMaterial?.dispose();
            s.renderer?.dispose();
            if (titleRef.current) gsap.killTweensOf(titleRef.current.children);
            if (descRef.current) gsap.killTweensOf(descRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // --- ISACTIVE EFFECT: toggle overlay visibility + auto-slide ---
    useEffect(() => {
        const s = stateRef.current;
        const safeStartTimer = (s as unknown as Record<string, unknown>)._safeStartTimer as ((delay?: number) => void) | undefined;

        // Fade overlay in/out based on isActive
        if (overlayRef.current) {
            overlayRef.current.style.opacity = isActive ? '1' : '0';
            overlayRef.current.style.pointerEvents = isActive ? 'auto' : 'none';
        }

        if (isActive && s.texturesLoaded && s.sliderEnabled) {
            safeStartTimer?.(500);
        } else {
            stopAutoSlideTimer();
        }
    }, [isActive, stopAutoSlideTimer]);

    return (
        <div
            ref={containerRef}
            className={`relative w-full h-full overflow-hidden bg-black ${className}`}
            style={{}}
            suppressHydrationWarning
        >
            <style jsx global>{`
                .lumina-wrapper {
                    position: relative; width: 100%; height: 100%;
                    opacity: 0; transition: opacity 1s ease;
                }
                .lumina-wrapper.loaded { opacity: 1; }
                .lumina-canvas {
                    /* Canvas renders at full viewport size — parent clips it */
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100vw !important;
                    height: 100vh !important;
                    display: block;
                }
                .lumina-overlay {
                    position: absolute; inset: 0; z-index: 5;
                    opacity: 0; transition: opacity 0.6s ease;
                    pointer-events: none;
                }
                .lumina-content {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                    text-align: center; z-index: 10; width: 100%; max-width: 900px; padding: 40px;
                    pointer-events: none;
                    background: radial-gradient(circle, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%);
                }
                .lumina-title {
                    font-size: clamp(2rem, 6vw, 5rem); line-height: 1; margin: 0 0 20px 0; font-weight: 700;
                    text-shadow: 0 4px 10px rgba(0,0,0,0.5); color: #fff;
                    font-family: var(--font-display, sans-serif);
                }
                .lumina-description {
                    font-size: clamp(0.85rem, 1.3vw, 1.2rem); color: rgba(255,255,255,0.9);
                    max-width: 700px; margin: 0 auto; line-height: 1.6;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.8); font-weight: 400;
                    font-family: var(--font-body, sans-serif);
                }
                .lumina-counter {
                    position: absolute; top: 20px; z-index: 10;
                    font-size: 12px; color: rgba(255,255,255,0.6);
                    font-family: monospace; letter-spacing: 2px;
                }
                .lumina-counter-num { left: 20px; }
                .lumina-counter-total { right: 20px; }
                .lumina-nav {
                    position: absolute; bottom: 20px; left: 0; width: 100%;
                    display: flex; justify-content: center; gap: 24px; z-index: 10;
                }
                .slide-nav-item {
                    cursor: pointer; opacity: 0.5; transition: opacity 0.3s;
                    display: flex; flex-direction: column; align-items: center; gap: 8px;
                }
                .slide-nav-item:hover, .slide-nav-item.active { opacity: 1; }
                .slide-progress-line {
                    width: 32px; height: 2px; background: rgba(255,255,255,0.2);
                    position: relative; overflow: hidden;
                }
                .slide-progress-fill {
                    width: 0%; height: 100%; background: rgb(0,212,255);
                    transition: width 0.1s ease, opacity 0.3s ease;
                }
                .slide-nav-title {
                    font-size: 9px; text-transform: uppercase; letter-spacing: 1px;
                    color: rgba(255,255,255,0.7); font-family: monospace; display: none;
                }
                @media (min-width: 768px) { .slide-nav-title { display: block; } }
            `}</style>

            <div className="lumina-wrapper">
                {/* Canvas at viewport size — clipped by parent overflow:hidden */}
                <canvas className="lumina-canvas" ref={canvasRef} />

                {/* Overlay: hidden during scroll expansion, shown when isActive */}
                <div className="lumina-overlay" ref={overlayRef}>
                    <span className="lumina-counter lumina-counter-num" ref={counterRef}>01</span>
                    <span className="lumina-counter lumina-counter-total" ref={totalRef}>06</span>

                    <div className="lumina-content">
                        <h1 className="lumina-title" ref={titleRef} />
                        <p className="lumina-description" ref={descRef} />
                    </div>

                    <nav className="lumina-nav" ref={navRef} />
                </div>
            </div>
        </div>
    );
}

export default LuminaSlider;
