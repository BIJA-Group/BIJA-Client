import { STATS } from "@/lib/constants";
import { StaggerChildren, StaggerItem } from "@/components/shared/FadeUp";

export function StatsSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map(stat => (
            <StaggerItem key={stat.label}>
              <div className="bord border-color-neu-bg bg-color-neu-bg rounded-neu-sm shadow-neu-in-sm py-10 px-5 text-center">
                <p className="font-display text-5xl text-ink leading-none mb-3">{stat.value}</p>
                <p className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-subtle">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
