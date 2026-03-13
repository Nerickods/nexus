import HeroSection from "@/features/landing/components/HeroSection";
import ProblemSection from "@/features/landing/components/ProblemSection";
import NewEraSection from "@/features/landing/components/NewEraSection";
import SolutionSection from "@/features/landing/components/SolutionSection";
import IdentitySection from "@/features/landing/components/IdentitySection";
import ProcessSection from "@/features/landing/components/ProcessSection";
import PricingSection from "@/features/landing/components/PricingSection";
import CaseStudySection from "@/features/landing/components/CaseStudySection";
import FAQSection from "@/features/landing/components/FAQSection";
import CTASection from "@/features/landing/components/CTASection";
import FooterSection from "@/features/landing/components/FooterSection";

export default function Home() {
    return (
        <main className="min-h-screen overflow-hidden">
            {/* 1. Hero */}
            <HeroSection />

            {/* 2. Problema */}
            <ProblemSection />

            {/* 3. El Stack Invisible / Proceso (Nuevo) */}
            <ProcessSection />

            {/* 4. Nueva Era */}
            <NewEraSection />

            {/* 5. Solución */}
            <SolutionSection />

            {/* 4.5. Identidad */}
            <IdentitySection />

            {/* 6. Precios */}
            <PricingSection />

            {/* 7. Caso de Éxito */}
            <CaseStudySection />

            {/* 8. FAQ (Nuevo - Objeciones) */}
            <FAQSection />

            {/* 9. CTA Final */}
            <CTASection />

            {/* 10. Footer */}
            <FooterSection />
        </main>
    );
}
