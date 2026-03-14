import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerChildren, StaggerItem } from "@/components/shared/FadeUp";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-neu-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Client Voices"
          title="What Our Clients Say"
          description="Don't just take our word for it. Here's what the people we've worked with have to say."
        />
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {TESTIMONIALS.map((t, i) => (
            <StaggerItem key={i}>
              <div className="bg-[#e0e5ec] rounded-[16px] shadow-neu-out p-9 h-full flex flex-col">
                <p className="font-display text-5xl text-neu-shadow leading-none mb-4"></p>
                <p className="text-ink-mid leading-7 text-base italic flex-1 mb-7">{t.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="size-11 rounded-full bg-[#e0e5ec] shadow-neu-out-sm flex items-center justify-center font-semibold text-sm text-ink shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm">{t.author}</p>
                    <p className="text-subtle text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
