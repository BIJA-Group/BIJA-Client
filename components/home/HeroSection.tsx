"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const wrap = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] as const } } };

export function HeroSection() {
  return (
    <section className="min-h-[95vh] flex items-center pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div variants={wrap} initial="hidden" animate="show">
            <motion.div variants={item}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#e0e5ec] shadow-neu-in-sm mb-8">
                <span className="size-2 rounded-full bg-green-500 shadow-[0_0_6px_#4CAF5080]" />
                <span className="text-[0.72rem] font-semibold tracking-widest uppercase text-subtle">Available for New Projects</span>
              </div>
            </motion.div>

            <motion.h1 variants={item} className="font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05] tracking-tight mb-6">
              We Build the Web{" "}
              <em className="not-italic block">World Deserves</em>
            </motion.h1>

            <motion.p variants={item} className="text-muted text-lg leading-relaxed mb-10 max-w-lg">
              BIJA is Kigali&apos;s digital craft studio. We design and engineer high-performance websites, platforms, and digital products that drive real business results.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="shadow-neu-in-sm">
                <Link href="/contact">Start a Project <ArrowRight className="size-4" /></Link>
              </Button>
              <Button variant="default" size="lg" asChild>
                <Link href="/case-studies">View Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-[#e0e5ec] rounded-[16px] shadow-neu-out p-9 mb-5 relative"
            >
              <p className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-subtle mb-4">Latest Project</p>
              <h3 className="font-display text-3xl text-ink mb-2">Umucyo<br />Fashion Store</h3>
              <p className="text-sm text-muted mb-5 leading-relaxed">E-commerce platform for Kigali&apos;s fastest-growing boutique brand. Launched Q1 2024 - sales up 280%.</p>
              <div className="flex gap-2">
                {["E-Commerce", "Next.js"].map(tag => (
                  <span key={tag} className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#e0e5ec] shadow-neu-in-sm text-xs font-semibold text-subtle uppercase tracking-[0.08em]">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="absolute top-6 right-6 text-4xl">🛍️</span>
            </motion.div>

            <div className="grid grid-cols-2 gap-5 mb-5">
              {[{ n: "40+", l: "Projects" }, { n: "3x", l: "Avg. Growth" }].map(({ n, l }) => (
                <div key={l} className="bg-[#e0e5ec] rounded-neu-sm shadow-neu-in-sm p-5 text-center">
                  <p className="font-display text-4xl text-ink leading-none mb-1">{n}</p>
                  <p className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-subtle">{l}</p>
                </div>
              ))}
            </div>

            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#e0e5ec] shadow-neu-in-sm text-sm font-medium text-muted">
              <MapPin /> Kigali, Rwanda
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
