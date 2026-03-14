import Link from "next/link";
import { CASE_STUDIES } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerChildren, StaggerItem, FadeUp } from "@/components/shared/FadeUp";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export function CaseStudyTeaser() {
  return (
    <section className="py-24 bg-neu-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Proof of Work"
          title="Selected Case Studies"
          description="Real projects, real results. See how we've helped clients achieve measurable growth."
        />
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-12">
          {CASE_STUDIES.slice(0,2).map(cs => (
            <StaggerItem key={cs.slug}>
              <Link href="/case-studies" className="block group">
                <div className="bg-[#e0e5ec] rounded-[16px] shadow-neu-out overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-neu-out-lg">
                  <div className={`h-52 flex items-center justify-center text-6xl bg-linear-to-br ${cs.bgClass}`}>{cs.emoji}</div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#e0e5ec] shadow-neu-in-sm text-xs font-semibold text-subtle uppercase tracking-[0.08em]">{cs.category}</span>
                      <span className="text-xs text-subtle">{cs.year}</span>
                    </div>
                    <h3 className="font-display text-2xl text-ink mb-2">{cs.title}</h3>
                    <p className="text-muted text-sm leading-6 mb-6">{cs.subtitle}</p>
                    <div className="grid grid-cols-3 gap-3">
                      {cs.metrics.slice(0,3).map(m => (
                        <div key={m.label} className="bg-[#e0e5ec] rounded-neu-sm shadow-neu-in-sm p-3 text-center">
                          <p className="font-display text-xl text-ink leading-none mb-1">{m.value}</p>
                          <p className="text-[9px] font-semibold uppercase tracking-widest text-subtle">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
        <FadeUp className="text-center">
          <Button variant="default" size="lg" asChild>
            <Link href="/case-studies">View All Case Studies <MoveRight /></Link>
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}
