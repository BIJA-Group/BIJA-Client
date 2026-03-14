import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { TestimonialsSection } from "@/components/shared/TestimonialsSection";
import { FaqSection } from "@/components/shared/FaqSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CaseStudyTeaser } from "@/components/home/CaseStudyTeaser";
import { StatsSection } from "@/components/home/StatsSection";
import { TrustedBy } from "@/components/home/TrustedBy";

export const metadata: Metadata = {
  title: `${SITE.name} - Digital Agency, Kigali Rwanda`,
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <ServicesGrid />
      <ProcessSection />
      <CaseStudyTeaser />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection altBg />
      <CtaSection
        eyebrow="Ready to Start?"
        title={`Let's Build Something\nWorth Talking About`}
        description="Book a free 30-minute discovery call. No pitch, just a genuine conversation about your goals."
        primaryLabel="Book Your Free Discovery Call"
        secondaryLabel="View Our Work"
        secondaryHref="/case-studies"
      />
    </>
  );
}
