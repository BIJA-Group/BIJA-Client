import Link from "next/link";
import { Globe, Monitor, Palette, Search, ShoppingCart, Wrench } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerChildren, StaggerItem } from "@/components/shared/FadeUp";

const ICONS: Record<string, React.ElementType> = { Globe, Monitor, Palette, Search, ShoppingCart, Wrench };

export function ServicesGrid() {
  return (
    <section className="py-24 bg-neu-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="What We Do"
          title="Comprehensive Digital Services"
          description="From concept to launch and beyond, we handle every layer of your digital presence."
        />
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map(service => {
            const Icon = ICONS[service.icon] ?? Globe;
            return (
              <StaggerItem key={service.slug}>
                <Link href="/services" className="block h-full group">
                  <div className="bg-[#e0e5ec] rounded-[16px] shadow-neu-out p-9 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-neu-out-lg">
                    <div className="size-14 rounded-neu-sm bg-[#e0e5ec] shadow-neu-in-sm flex items-center justify-center mb-6">
                      <Icon className="size-6 text-muted group-hover:text-ink transition-colors" />
                    </div>
                    <h3 className="font-display text-xl text-ink mb-3">{service.title}</h3>
                    <p className="text-muted text-sm leading-7">{service.short}</p>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
