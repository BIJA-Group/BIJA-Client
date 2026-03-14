import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export const metadata: Metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto px-6 text-center">
        <div className="bg-[#e0e5ec] rounded-[16px] shadow-neu-out p-16">
          <p className="font-display text-8xl text-neu-shadow mb-4">404</p>
          <h1 className="font-display text-3xl text-ink mb-4">Page Not Found</h1>
          <p className="text-muted mb-10 leading-relaxed">
            Looks like this page doesn&apos;t exist. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="shadow-neu-in-sm" asChild><Link href="/">Go Home <MoveRight /></Link></Button>
            <Button variant="default" asChild><Link href="/contact">Contact Us</Link></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
