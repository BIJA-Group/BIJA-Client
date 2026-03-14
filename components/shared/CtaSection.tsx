import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/shared/FadeUp";
import { MoveRight } from "lucide-react";

interface Props {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaSection({
  eyebrow = "Ready to Start?",
  title,
  description,
  primaryLabel = "Book a Free Discovery Call",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: Props) {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="bg-[#e0e5ec] rounded-[16px] shadow-neu-out px-12 py-20 text-center">
            <p className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-subtle mb-4">{eyebrow}</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-5 tracking-tight">{title}</h2>
            <p className="text-muted text-lg leading-relaxed max-w-lg mx-auto mb-10">{description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="shadow-neu-in-sm" size="lg" asChild>
                <Link href={primaryHref}>{primaryLabel}<MoveRight /></Link>
              </Button>
              {secondaryLabel && secondaryHref && (
                <Button variant="default" size="lg" asChild>
                  <Link href={secondaryHref}>{secondaryLabel}</Link>
                </Button>
              )}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
