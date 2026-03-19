import { Globe, Monitor, Palette, Search, ShoppingCart, Wrench, CheckCircle2, MoveRight } from "lucide-react";
import { SERVICES, PROCESS_STEPS } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FadeUp } from "@/components/shared/FadeUp";
import { CtaSection } from "@/components/shared/CtaSection";
import { generateMetadata } from "@/lib/generate-metadata";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = generateMetadata("services");


const ICON_MAP: Record<string, React.ElementType> = {
  Globe, Monitor, Palette, Search, ShoppingCart, Wrench,
};

/* -- Reusable atoms -- */
const EYEBROW = "text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#9aaabf] text-ink";
const CARD = "bg-[#e0e5ec] rounded-[16px] shadow-[6px_6px_14px_#a3b1c6,-6px_-6px_14px_#ffffff]";
const INSET = "bg-[#e0e5ec] rounded-[10px] shadow-[inset_2px_2px_6px_#a3b1c6,inset_-2px_-2px_6px_#ffffff]";
const DIVIDER = "h-px bg-[#a3b1c6] opacity-30 my-7";

export default function ServicesPage() {
  return (
    <>
      {/* -- Hero -- */}
      <section className="pt-40 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <p className={`${EYEBROW} mb-4 shadow-neu-in-sm w-fit rounded-md px-2`}>What We Offer</p>
            <h1 className="font-display text-6xl md:text-7xl text-ink leading-[1.05] tracking-tight mb-6 max-w-2xl">
              Digital Services Built for Results
            </h1>
            <p className="text-muted text-xl leading-relaxed max-w-xl">
              A focused suite of services we&apos;ve mastered. Expert-level delivery, not generalist work.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* -- Service cards -- */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] ?? Globe;
            const flip = i % 2 !== 0;
            return (
              <FadeUp key={service.slug} delay={0.05 * i}>
                <div className={`${CARD} overflow-hidden`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Info */}
                    <div className={`p-12 ${flip ? "lg:order-2" : ""}`}>
                      <div className="size-14 rounded-neu-sm bg-[#e0e5ec] shadow-neu-in-sm flex items-center justify-center mb-6">
                        <Icon className="size-6 text-muted" />
                      </div>
                      <h2 className="font-display text-3xl text-ink mb-4">{service.title}</h2>
                      <p className="text-muted leading-7 mb-7">{service.description}</p>
                      <ul className="flex flex-col gap-3">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-sm text-muted">
                            <CheckCircle2 className="size-4 text-green-500 mt-0.5 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right panel */}
                    <div className={`m-4 p-10 flex flex-col gap-4 rounded-neu-sm bg-[#e0e5ec] shadow-neu-in ${flip ? "lg:order-1" : ""}`}>

                      {/* Timeline */}
                      <div>
                        <p className={`${EYEBROW} mb-1`}>Timeline</p>
                        <p className="font-display text-4xl text-ink">{service.timeline}</p>
                      </div>

                      <div className={DIVIDER} />

                      {/* Best for */}
                      <div>
                        <p className={`${EYEBROW} mb-2 font-semibold`}>Best For</p>
                        <p className="text-ink text-sm leading-relaxed">{service.bestFor}</p>
                      </div>

                      <div className={DIVIDER} />

                      <Button size="sm" asChild className="shadow-neu-in-sm w-fit">
                        <Link href="/contact">Start This Service <MoveRight /> </Link>
                      </Button>

                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* -- Process -- */}
      <section className="py-24 bg-neu-alt">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="How We Work"
            title="The BIJA Process"
            description="From your first message to go-live and beyond, here's exactly what to expect."
          />
          <div className="max-w-3xl mx-auto flex flex-col gap-5">
            {PROCESS_STEPS.map((step, i) => (
              <FadeUp key={step.num} delay={0.08 * i}>
                <div className={`${CARD} overflow-hidden`}>
                  <div className="grid grid-cols-[88px_1fr] items-start">
                    <div className="flex items-start justify-center pt-8 pb-8">
                      <p className="font-display text-4xl text-neu-shadow leading-none">{step.num}</p>
                    </div>
                    <div className="py-8 pr-8">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-ink text-base">{step.title}</h3>
                        <span className={`${INSET} px-3 py-1 text-[10px] font-semibold tracking-widest uppercase text-subtle`}>
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-muted text-sm leading-7">{step.long}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Next Step"
        title="Not Sure What You Need?"
        description="That's what the discovery call is for. Let's talk through your situation and figure out the right path, together."
        primaryLabel="Book a Free Discovery Call"
      />
    </>
  );
}
