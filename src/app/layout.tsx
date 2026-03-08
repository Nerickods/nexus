import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/features/landing/components/Header";
import LiquidBackground from "@/shared/components/LiquidBackground";
import { ThemeProvider, themeInitScript } from "@/shared/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
    title: "NEXUS.AI | Conectando tu negocio con el futuro",
    description: "Transforma tu negocio con Inteligencia Artificial. Landing pages, chatbots y automatización diseñados a medida.",
    keywords: ["inteligencia artificial", "automatización", "chatbots", "landing pages", "desarrollo web", "IA México"],
    authors: [{ name: "NEXUS.AI" }],
    openGraph: {
        title: "NEXUS.AI | Software IA para tu negocio",
        description: "El futuro de tu negocio se está reescribiendo. ¿Estás listo para adaptarte?",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth" suppressHydrationWarning>
            <head>
                {/* Script para prevenir flash de tema incorrecto (FOIT) */}
                <script
                    dangerouslySetInnerHTML={{ __html: themeInitScript }}
                />
            </head>
            <body
                className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-white dark:bg-deep-navy text-deep-navy dark:text-pure-white font-body transition-colors duration-700`}
            >
                <ThemeProvider>
                    <Header />
                    {children}
                    <LiquidBackground />
                </ThemeProvider>
            </body>
        </html>
    );
}


