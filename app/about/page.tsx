import type { Metadata } from "next";
import Link from "next/link";
import { Target, Microscope, Handshake, Globe, MoveRight } from "lucide-react";
import { TEAM, STATS } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/shared/FadeUp";
import { TestimonialsSection } from "@/components/shared/TestimonialsSection";
import { FaqSection } from "@/components/shared/FaqSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the BIJA team, Kigali-born digital craftspeople who believe African businesses deserve world-class digital products.",
  alternates: { canonical: "/about" },
};

const EYEBROW = "text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#9aaabf]";
const CARD = "bg-[#e0e5ec] rounded-[16px] shadow-[6px_6px_14px_#a3b1c6,-6px_-6px_14px_#ffffff]";
const CARD_SM = "bg-[#e0e5ec] rounded-[10px] shadow-[3px_3px_8px_#a3b1c6,-3px_-3px_8px_#ffffff]";
const INSET = "bg-[#e0e5ec] rounded-[10px] shadow-[inset_2px_2px_6px_#a3b1c6,inset_-2px_-2px_6px_#ffffff]";

const VALUES = [
  { Icon: Target, title: "Obsessed with Outcomes", desc: "We measure success by your results, not our deliverables." },
  { Icon: Microscope, title: "Craft Over Templates", desc: "Every pixel, every line of code is intentional. Zero shortcuts." },
  { Icon: Handshake, title: "Radical Transparency", desc: "No jargon, no hidden costs, no surprises. Ever." },
  { Icon: Globe, title: "Built for Africa", desc: "We understand local context, bandwidth realities, and user behaviour." },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* -- Hero -- */}
      <section className="pt-40 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            <FadeUp>
              <p className={`${EYEBROW} mb-4 shadow-neu-in-sm w-fit rounded-md px-2`}>Who We Are</p>
              <h1 className="font-display text-6xl md:text-7xl text-ink leading-[1.05] tracking-tight mb-6">
                Kigali-Born,<br />World-Class
              </h1>
              <p className="text-muted text-lg leading-relaxed mb-5">
                BIJA is a digital agency rooted in Rwanda and obsessed with craft.
                We believe African businesses deserve world-class digital products,
                not watered-down solutions.
              </p>
              <p className="text-muted leading-relaxed mb-10">
                Founded in Kigali, we&apos;ve worked with healthcare providers, fashion brands,
                edtech startups, and everything in between. Our team combines deep technical
                expertise with a genuine understanding of the Rwandan and East African market.
              </p>
              <Button size="lg" className="shadow-neu-in-sm" asChild>
                <Link href="/contact">Work With Us <MoveRight /></Link>
              </Button>
            </FadeUp>

            {/* Values grid */}
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {VALUES.map(({ Icon, title, desc }) => (
                  <div key={title} className={`${CARD_SM} p-6`}>
                    <Icon className="size-5 text-muted mb-3" />
                    <h3 className="font-semibold text-ink text-sm mb-1.5">{title}</h3>
                    <p className="text-muted text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* -- Stats -- */}
      <section className="py-16 bg-neu-alt">
        <div className="max-w-6xl mx-auto px-6">
          <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className={`${INSET} py-10 px-5 text-center`}>
                  <p className="font-display text-5xl text-ink leading-none mb-3">{stat.value}</p>
                  <p className={EYEBROW}>{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* -- Team -- */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="The People"
            title="The Team Behind BIJA"
            description="A small, senior team - no juniors handed off to you without warning."
          />
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {TEAM.map((member) => (
              <StaggerItem key={member.name}>
                <div className={`${CARD} p-9 text-center`}>
                  <div className="size-16 rounded-full bg-[#e0e5ec] shadow-neu-out-sm flex items-center justify-center mx-auto mb-5 font-display text-2xl text-ink">
                    {member.initials}
                  </div>
                  <h3 className="font-semibold text-ink text-base mb-1">{member.name}</h3>
                  <p className={`${EYEBROW} mb-4`}>{member.role}</p>
                  <p className="text-sm text-muted leading-6">{member.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* -- Mission quote -- */}
      <section className="py-24 bg-neu-alt">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <div className={`${CARD} p-14 md:p-20 text-center max-w-4xl mx-auto`}>
              <p className={`${EYEBROW} mb-6`}>Our Belief</p>
              <p className="font-display text-3xl md:text-4xl text-ink leading-snug tracking-tight">
                &quot;Rwanda is producing world-class businesses. They deserve world-class digital
                infrastructure to match. That&apos;s why BIJA exists.&quot;
              </p>
              <p className="mt-6 text-subtle text-sm">- Mugisha Bija, Founder</p>
            </div>
          </FadeUp>
        </div>
      </section>

      <TestimonialsSection />
      <FaqSection />
      <CtaSection
        eyebrow="Let's Work Together"
        title="Ready to Build Something Exceptional?"
        description="Book a free discovery call. No pitch, no pressure - just an honest conversation about your goals."
        primaryLabel="Book a Free Call"
      />
    </>
  );
}
