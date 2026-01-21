import { create } from 'zustand';

interface UIState {
    isBookingModalOpen: boolean;
    openBookingModal: () => void;
    closeBookingModal: () => void;
    toggleBookingModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
    isBookingModalOpen: false,
    openBookingModal: () => set({ isBookingModalOpen: true }),
    closeBookingModal: () => set({ isBookingModalOpen: false }),
    toggleBookingModal: () => set((state) => ({ isBookingModalOpen: !state.isBookingModalOpen })),
}));
