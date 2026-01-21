import HeroSection from "@/features/landing/components/HeroSection";
import ProblemSection from "@/features/landing/components/ProblemSection";
import NewEraSection from "@/features/landing/components/NewEraSection";
import SolutionSection from "@/features/landing/components/SolutionSection";
import IdentitySection from "@/features/landing/components/IdentitySection";
import ServicesSection from "@/features/landing/components/ServicesSection";
import PricingSection from "@/features/landing/components/PricingSection";
import CaseStudySection from "@/features/landing/components/CaseStudySection";
import CTASection from "@/features/landing/components/CTASection";
import FooterSection from "@/features/landing/components/FooterSection";

export default function Home() {
    return (
        <main className="min-h-screen bg-deep-navy">
            {/* 1. Hero - Primera impresión + CTA */}
            <HeroSection />

            {/* 2. Problema - Pain points del target */}
            <ProblemSection />

            {/* 3. Nueva Era - Contexto histórico IA */}
            <NewEraSection />

            {/* 4. Solución - Cómo resolvemos (NEXUS.AI) */}
            <SolutionSection />

            {/* 4.5. Identidad - Misión/Visión */}
            <IdentitySection />

            {/* 5. Servicios - Catálogo detallado */}
            <ServicesSection />

            {/* 6. Precios - Planes accesibles */}
            <PricingSection />

            {/* 7. Caso de Éxito - Academia MMA */}
            <CaseStudySection />

            {/* 8. CTA Final - Calendly + Urgencia */}
            <CTASection />

            {/* 9. Footer - Legal + Redes */}
            <FooterSection />
        </main>
    );
}
