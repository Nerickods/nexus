"use client";

import { useEffect } from "react";
import { useUIStore } from "@/shared/stores/uiStore";

/**
 * ThemeProvider - Sincroniza el estado del tema con el DOM
 * 
 * Best Practices implementadas:
 * 1. Aplica la clase 'dark' al HTML element inmediatamente al cargar
 * 2. Maneja el hydration mismatch correctamente
 * 3. Sincroniza con localStorage via Zustand persist
 * 4. Previene flash of incorrect theme (FOIT)
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const { theme } = useUIStore();

    // Sincronizar tema con DOM al montar y cuando cambie
    useEffect(() => {
        const root = document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [theme]);

    // Script inline para prevenir flash (se ejecuta antes del render)
    // Esto es manejado por el store toggle, pero aseguramos consistencia aquí

    return <>{children}</>;
}

/**
 * Script de inicialización de tema para SSR
 * Se inyecta en el <head> para evitar flash
 */
export const themeInitScript = `
(function() {
    try {
        const stored = localStorage.getItem('ui-storage');
        if (stored) {
            const parsed = JSON.parse(stored);
            if (parsed.state && parsed.state.theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        } else {
            // Default to dark
            document.documentElement.classList.add('dark');
        }
    } catch (e) {
        document.documentElement.classList.add('dark');
    }
})();
`;
