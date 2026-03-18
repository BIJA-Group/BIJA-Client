import { SectionHeader } from "@/components/shared/SectionHeader";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { StaggerChildren, StaggerItem } from "@/components/shared/FadeUp";
import { FAQS } from "@/lib/constants";

interface Props {
  items?: typeof FAQS;
  eyebrow?: string;
  title?: string;
  altBg?: boolean;
}

export function FaqSection({ items = FAQS, eyebrow = "Questions", title = "Frequently Asked", altBg = false }: Props) {
  return (
    <section className={`py-24 ${altBg ? "bg-neu-alt" : ""}`}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow={eyebrow} title={title} />
        <StaggerChildren className="max-w-3xl mx-auto flex flex-col gap-3">
          {items.map((faq, i) => (
            <StaggerItem key={i}>
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${i}`} className="shadow-neu-out rounded-r-md p-1 border-l px-2">
                  <AccordionTrigger className="cursor-pointer">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
