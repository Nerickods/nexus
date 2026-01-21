/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react'
import ContactForm from './ContactForm'
import { describe, it, expect, jest } from '@jest/globals'
import '@testing-library/jest-dom'

// Mock useUIStore just in case imports trigger side effects, though unused
jest.mock('@/shared/stores/uiStore', () => ({
    useUIStore: () => ({})
}))

// Mock matchMedia for Framer Motion or other resize observers
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query: any) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
})

describe('ContactForm', () => {
    it('renders form fields', () => {
        // Mock IntersectionObserver for Framer Motion if needed
        window.IntersectionObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        })) as any

        render(<ContactForm />)

        expect(screen.getByPlaceholderText('Tu nombre')).toBeTruthy()
        expect(screen.getByPlaceholderText('nombre@empresa.com')).toBeTruthy()
        expect(screen.getByRole('button', { name: /solicitar acceso/i })).toBeTruthy()
    })
})
