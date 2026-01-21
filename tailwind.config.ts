import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'deep-navy': '#0A0F1C',
                'electric-blue': '#0066FF',
                'neon-cyan': '#00D4FF',
                'cyber-purple': '#7B2FE0',
                'warning-amber': '#FF9500',
                'success-green': '#10B981',
                'silver-mist': '#94A3B8',
                'pure-white': '#FFFFFF',
            },
            fontFamily: {
                display: ['var(--font-space-grotesk)', 'sans-serif'],
                body: ['var(--font-inter)', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-hero': 'linear-gradient(135deg, #0A0F1C 0%, #1A1F3C 50%, #0A0F1C 100%)',
                'gradient-cta': 'linear-gradient(90deg, #0066FF 0%, #7B2FE0 100%)',
                'gradient-cyber': 'linear-gradient(90deg, #0066FF 0%, #00D4FF 100%)',
            },
            boxShadow: {
                'glow': '0 0 40px rgba(0, 102, 255, 0.4)',
                'glow-strong': '0 0 50px rgba(0, 212, 255, 0.5)',
                'neon': '0 0 10px rgba(0, 212, 255, 0.5), 0 0 20px rgba(0, 212, 255, 0.3)',
            },
            dropShadow: {
                'neon': '0 0 15px rgba(0, 102, 255, 0.4)',
            },
            animation: {
                'cyber-reveal': 'cyber-reveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
                'slow-scan': 'scan 4s linear infinite',
                'pulse-glow': 'pulse-glow 3s infinite',
            },
            keyframes: {
                'cyber-reveal': {
                    '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)', filter: 'blur(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0) scale(1)', filter: 'blur(0)' },
                },
                'scan': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '100%': { backgroundPosition: '100% 50%' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
                    '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
                }
            }
        },
    },
    plugins: [],
};

export default config;
