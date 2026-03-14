import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageCircle, Ban, MoveRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/shared/FadeUp";
import { ContactForm } from "@/components/shared/ContactForm";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with BIJA, Kigali's digital agency. Start a project, book a free discovery call, or ask us anything.",
  alternates: { canonical: "/contact" },
};

const EYEBROW = "text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#9aaabf]";
const CARD    = "bg-[#e0e5ec] rounded-[16px] shadow-[6px_6px_14px_#a3b1c6,-6px_-6px_14px_#ffffff]";

const INFO_CARDS = [
  { Icon: MapPin, label: "Location",         value: SITE.location, href: undefined },
  { Icon: Mail,   label: "Email",            value: SITE.email,    href: `mailto:${SITE.email}` },
  { Icon: Phone,  label: "Phone / WhatsApp", value: SITE.phone,    href: `https://wa.me/${SITE.whatsapp}` },
] as const;

const DISCOVERY_BULLETS = [
  { Icon: Clock,         text: "30 minutes, completely free" },
  { Icon: MessageCircle, text: "Google Meet or WhatsApp call" },
  { Icon: Ban,           text: "No pitch, no pushy sales tactics" },
] as const;

const QUICK_FAQS = [
  { q: "How quickly can you start?",            a: "Usually within 1-2 weeks of signing. We keep a limited client roster to give each project proper attention." },
  { q: "Do you work with international clients?", a: "Yes. We've worked with clients in the UK, USA, and across East Africa. Time zones are very manageable." },
  { q: "Can you handle payment in RWF?",         a: "Yes, we accept MoMo, bank transfer (RWF & USD), and international wire. We're flexible." },
] as const;

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-40 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <p className={`${EYEBROW} mb-4 shadow-neu-in-sm w-fit px-2 rounded-md`}>Get In Touch</p>
            <h1 className="font-display text-6xl md:text-7xl text-ink leading-[1.05] tracking-tight mb-6 max-w-2xl">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-muted text-xl leading-relaxed max-w-xl">
              Whether you have a clear brief or just a rough idea,  we&apos;d love to hear it.
              We respond within one business day.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* ── Info cards ── */}
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {INFO_CARDS.map(({ Icon, label, value, href }) => (
              <StaggerItem key={label}>
                <div className={`${CARD} p-8 text-center`}>
                  <Icon className="size-6 text-muted mx-auto mb-3" />
                  <p className={`${EYEBROW} mb-2`}>{label}</p>
                  {href ? (
                    <a href={href} className="font-semibold text-ink text-sm hover:opacity-70 transition-opacity">
                      {value}
                    </a>
                  ) : (
                    <p className="font-semibold text-ink text-sm">{value}</p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* ── Form + sidebar ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 items-start">

            {/* Form */}
            <FadeUp>
              <div className={`${CARD} p-10 md:p-12`}>
                <h2 className="font-display text-3xl text-ink mb-2">Send Us a Message</h2>
                <p className="text-muted text-sm mb-8">We respond within 1 business day.</p>
                <ContactForm />
              </div>
            </FadeUp>

            {/* Sidebar */}
            <div className="flex flex-col gap-7">

              {/* Discovery call */}
              <FadeUp delay={0.15}>
                <div className={`${CARD} p-8`}>
                  <h3 className="font-display text-2xl text-ink mb-3">Book a Discovery Call</h3>
                  <p className="text-muted text-sm leading-7 mb-7">
                    Prefer to talk? Book a free 30-minute call. We&apos;ll listen to your goals, answer your
                    questions, and give you an honest assessment, no sales pressure whatsoever.
                  </p>
                  <ul className="flex flex-col gap-4 mb-7">
                    {DISCOVERY_BULLETS.map(({ Icon, text }) => (
                      <li key={text} className="flex items-center gap-3">
                        <div className="size-9 rounded-full bg-[#e0e5ec] shadow-neu-out-sm flex items-center justify-center shrink-0">
                          <Icon className="size-4 text-muted" />
                        </div>
                        <span className="text-sm text-muted">{text}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full text-ink shadow-neu-out-sm cursor-pointer" asChild>
                    <a
                      href={`https://wa.me/${SITE.whatsapp}?text=Hi%20BIJA%2C%20I'd%20like%20to%20book%20a%20discovery%20call.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book via WhatsApp <MoveRight />
                    </a>
                  </Button>
                </div>
              </FadeUp>

              {/* Quick FAQs */}
              <FadeUp delay={0.25}>
                <div className={`${CARD} p-8`}>
                  <h3 className="font-semibold text-ink text-base mb-5">Quick Answers</h3>
                  <div className="flex flex-col gap-5">
                    {QUICK_FAQS.map(({ q, a }) => (
                      <div key={q}>
                        <p className="font-semibold text-ink text-sm mb-1.5">{q}</p>
                        <p className="text-muted text-xs leading-6">{a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
