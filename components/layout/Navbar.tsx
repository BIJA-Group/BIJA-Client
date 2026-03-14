"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, MoveRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-4">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className={cn(
              "flex items-center justify-between px-6 py-3.5 rounded-[16px] bg-[#e0e5ec] transition-all duration-300",
              scrolled ? "shadow-neu-out" : "shadow-neu-out-sm"
            )}
          >
            <Link href="/" className="font-display text-2xl text-ink hover:opacity-75 transition-opacity">
              {SITE.name}
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    pathname === href
                      ? "text-ink shadow-neu-in-sm"
                      : "text-muted hover:text-ink hover:shadow-neu-out-sm"
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button size="sm" className="hidden md:inline-flex text-ink shadow-neu-in-sm" asChild>
                <Link href="/contact">Start a Project</Link>
              </Button>
              <button
                onClick={() => setOpen(v => !v)}
                className="md:hidden flex items-center justify-center size-10 rounded-full bg-[#e0e5ec] shadow-neu-out-sm active:shadow-neu-press transition-all duration-200"
                aria-label="Toggle menu"
              >
                {open ? <X className="size-4 text-ink" /> : <Menu className="size-4 text-ink" />}
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-21.5 left-4 right-4 z-40 p-5 rounded-[16px] bg-[#e0e5ec] shadow-neu-out md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "px-5 py-3 rounded-neu-sm font-medium transition-all duration-200",
                    pathname === href
                      ? "text-ink shadow-neu-in-sm"
                      : "text-muted hover:text-ink hover:shadow-neu-in-sm"
                  )}
                >
                  {label}
                </Link>
              ))}
              <Button className="mt-2 w-full text-ink shadow-neu-in-sm" asChild>
                <Link href="/contact">Start a Project <MoveRight /></Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
