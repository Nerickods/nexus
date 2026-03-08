import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface UIState {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
    isMenuOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
}

export const useUIStore = create<UIState>()(
    persist(
        (set) => ({
            theme: 'dark', // Default to dark
            toggleTheme: () =>
                set((state) => {
                    const newTheme = state.theme === 'light' ? 'dark' : 'light';
                    // Side effect to update DOM immediately
                    if (typeof window !== 'undefined') {
                        if (newTheme === 'dark') {
                            document.documentElement.classList.add('dark');
                        } else {
                            document.documentElement.classList.remove('dark');
                        }
                    }
                    return { theme: newTheme };
                }),
            setTheme: (theme) => {
                set({ theme });
                if (typeof window !== 'undefined') {
                    if (theme === 'dark') {
                        document.documentElement.classList.add('dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                    }
                }
            },
            isMenuOpen: false,
            toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
            closeMenu: () => set({ isMenuOpen: false }),
        }),
        {
            name: 'ui-storage',
            partialize: (state) => ({ theme: state.theme }), // Only persist theme
        }
    )
);
