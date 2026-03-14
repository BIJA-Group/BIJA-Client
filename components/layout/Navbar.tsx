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

const LINK_DELAYS = [0.15, 0.30, 0.45, 0.60, 0.75] as const;

const mobileContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const mobileItem = {
  hidden: { opacity: 0, x: -14 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.26, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setOpen(false), 0);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-4">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            key={pathname}
            initial={{ y: -72, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.52, ease: [0.4, 0, 0.2, 1] }}
            className={cn(
              "flex items-center justify-between px-6 py-3.5 rounded-[16px] bg-[#e0e5ec] transition-all duration-300",
              scrolled ? "shadow-neu-out" : "shadow-neu-out-sm"
            )}
          >

            <motion.div
              key={`logo-${pathname}`}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.10, ease: [0.4, 0, 0.2, 1] }}
            >
              <Link href="/" className="font-display text-2xl text-ink hover:opacity-75 transition-opacity">
                {SITE.name}
              </Link>
            </motion.div>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.div
                  key={`${href}-${pathname}`}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.38,
                    delay: LINK_DELAYS[i],
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <Link
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
                </motion.div>
              ))}
            </nav>

            {/* CTA + hamburger - slide in from right, arrives last */}
            <motion.div
              key={`cta-${pathname}`}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.55, ease: [0.4, 0, 0.2, 1] }}
            >
              <Button size="sm" className="hidden md:inline-flex text-ink shadow-neu-in-sm" asChild>
                <Link href="/contact">Start a Project</Link>
              </Button>

              <button
                onClick={() => setOpen(v => !v)}
                aria-label="Toggle menu"
                className="md:hidden flex items-center justify-center size-10 rounded-full bg-[#e0e5ec] shadow-neu-out-sm active:shadow-neu-press transition-all duration-200"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {open ? (
                    <motion.span
                      key="x"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.16 }}
                    >
                      <X className="size-4 text-ink" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.16 }}
                    >
                      <Menu className="size-4 text-ink" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>

          </motion.div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-21.5 left-4 right-4 z-40 p-5 rounded-[16px] bg-[#e0e5ec] shadow-neu-out md:hidden"
          >
            <motion.nav
              className="flex flex-col gap-2"
              variants={mobileContainer}
              initial="hidden"
              animate="show"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <motion.div key={href} variants={mobileItem}>
                  <Link
                    href={href}
                    className={cn(
                      "block px-5 py-3 rounded-neu-sm font-medium transition-all duration-200",
                      pathname === href
                        ? "text-ink shadow-neu-in-sm"
                        : "text-muted hover:text-ink hover:shadow-neu-in-sm"
                    )}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={mobileItem} className="mt-2">
                <Button className="w-full text-ink shadow-neu-in-sm" asChild>
                  <Link href="/contact">Start a Project <MoveRight /></Link>
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
