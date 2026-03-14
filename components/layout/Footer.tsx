import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";

const PAGES = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
const SERVICES = ["Website Development", "Web Applications", "UI/UX Design", "E-Commerce", "SEO & Performance"];

export function Footer() {
  return (
    <footer className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#e0e5ec] rounded-[16px] shadow-neu-out p-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <p className="font-display text-3xl text-ink mb-4">{SITE.name}</p>
              <p className="text-sm text-muted leading-relaxed mb-6">
                Kigali&apos;s digital craft studio. We build websites and applications that drive real business results across Rwanda and beyond.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { Icon: Mail, text: SITE.email, href: `mailto:${SITE.email}` },
                  { Icon: Phone, text: SITE.phone, href: `https://wa.me/${SITE.whatsapp}` },
                  { Icon: MapPin, text: SITE.location, href: undefined },
                ].map(({ Icon, text, href }) => (
                  <div key={text} className="flex items-center gap-2.5">
                    <Icon className="size-4 text-subtle shrink-0" />
                    {href
                      ? <a href={href} className="text-sm text-muted hover:text-ink transition-colors">{text}</a>
                      : <span className="text-sm text-muted">{text}</span>
                    }
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-subtle mb-5">Pages</p>
              <ul className="flex flex-col gap-3">
                {PAGES.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-muted hover:text-ink transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-subtle mb-5">Services</p>
              <ul className="flex flex-col gap-3">
                {SERVICES.map(s => (
                  <li key={s}>
                    <Link href="/services" className="text-sm text-muted hover:text-ink transition-colors">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted">© {new Date().getFullYear()} {SITE.name} Digital Agency. All rights reserved.</p>
      </div>
    </footer>
  );
}
