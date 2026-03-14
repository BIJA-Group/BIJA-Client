import { FadeUp } from "@/components/shared/FadeUp";
import { TRUSTED_BY } from "@/lib/constants";

export function TrustedBy() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <p className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-subtle text-center mb-7">
            Trusted by forward-thinking organisations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {TRUSTED_BY.map(brand => (
              <div key={brand} className="bg-[#e0e5ec] rounded-full shadow-neu-out-sm px-7 py-3.5">
                <span className="font-semibold text-sm text-muted">{brand}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
