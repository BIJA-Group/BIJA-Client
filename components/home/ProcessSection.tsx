import { PROCESS_STEPS } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerChildren, StaggerItem } from "@/components/shared/FadeUp";

export function ProcessSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Our Process"
          title="How We Work"
          description="A clear, collaborative process that eliminates guesswork and delivers results on time."
        />
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map(step => (
            <StaggerItem key={step.num}>
              <div className="border-t-2 border-color-neu-bg bg-color-neu-bg rounded-[16px] shadow-neu-out p-8 text-center h-full hover:-translate-y-1 transition-transform duration-300">
                <p className="font-display text-6xl text-neu-shadow leading-none mb-5">{step.num}</p>
                <h3 className="font-semibold text-ink mb-2 text-base">{step.title}</h3>
                <p className="text-muted text-sm leading-6 mb-4">{step.short}</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-color-neu-bg shadow-neu-in-sm text-[10px] font-semibold tracking-widest uppercase text-subtle">
                  {step.duration}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
