import { CASE_STUDIES } from "@/lib/constants";
import { FadeUp } from "@/components/shared/FadeUp";
import { CtaSection } from "@/components/shared/CtaSection";
import { generateMetadata } from "@/lib/generate-metadata";

export const metadata = generateMetadata("caseStudies");


const EYEBROW = "text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-subtle";
const CARD = "bg-[#e0e5ec] rounded-[16px] shadow-[6px_6px_14px_#a3b1c6,-6px_-6px_14px_#ffffff]";
const INSET = "bg-[#e0e5ec] rounded-[10px] shadow-[inset_2px_2px_6px_#a3b1c6,inset_-2px_-2px_6px_#ffffff]";
const BADGE = "inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#e0e5ec] shadow-[inset_2px_2px_6px_#a3b1c6,inset_-2px_-2px_6px_#ffffff] text-xs font-semibold text-subtle uppercase tracking-[0.08em]";

export default function CaseStudiesPage() {
  return (
    <>
      {/* -- Hero -- */}
      <section className="pt-40 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <p className={`${EYEBROW} mb-4 shadow-neu-in-sm w-fit rounded-md px-2`}>Proof of Work</p>
            <h1 className="font-display text-6xl md:text-7xl text-ink leading-[1.05] tracking-tight mb-6 max-w-2xl">
              Case Studies
            </h1>
            <p className="text-muted text-xl leading-relaxed max-w-xl">
              The numbers speak for themselves. Select projects where BIJA delivered measurable, meaningful results.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* -- Case study cards -- */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-14">
          {CASE_STUDIES.map((cs, i) => {
            const flip = i % 2 !== 0;
            return (
              <FadeUp key={cs.slug} delay={0.05 * i}>
                <div className={`${CARD} overflow-hidden`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* -- Text side -- */}
                    <div className={`p-12 flex flex-col justify-between ${flip ? "lg:order-2" : ""}`}>
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <span className={BADGE}>{cs.category}</span>
                          <span className="text-xs text-subtle">{cs.year}</span>
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl text-ink mb-3">{cs.title}</h2>
                        <p className="text-muted mb-8 leading-relaxed">{cs.subtitle}</p>

                        {/* Challenge / Solution / Result */}
                        <div className="flex flex-col gap-4">
                          {[
                            { label: "The Challenge", text: cs.challenge },
                            { label: "Our Solution", text: cs.solution },
                            { label: "The Result", text: cs.result },
                          ].map(({ label, text }) => (
                            <div key={label} className={`${INSET} p-5`}>
                              <p className={`${EYEBROW} mb-2`}>{label}</p>
                              <p className="text-muted text-sm leading-7">{text}</p>
                            </div>
                          ))}
                        </div>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2 mt-6">
                          {cs.stack.map((tech) => (
                            <span key={tech} className={BADGE}>{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* -- Visual side -- */}
                    <div className={`bg-linear-to-br ${cs.bgClass} p-12 flex flex-col justify-between ${flip ? "lg:order-1" : ""}`}>
                      <div className="text-8xl text-center mb-8">{cs.emoji}</div>

                      <div className="grid grid-cols-2 gap-4">
                        {cs.metrics.map((m) => (
                          <div key={m.label} className="bg-[#e0e5ec] rounded-neu-sm shadow-neu-in-sm p-4 text-center">
                            <p className="font-display text-3xl text-ink leading-none mb-1.5">{m.value}</p>
                            <p className={`${EYEBROW} text-[10px]`}>{m.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </section>

      <CtaSection
        eyebrow="Your Project"
        title="Ready to Be the Next Success Story?"
        description="Every project starts with a conversation. Tell us about your goals and let's see what we can build."
        primaryLabel="Start a Project"
      />
    </>
  );
}
