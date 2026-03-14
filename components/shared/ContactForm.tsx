"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SERVICES = ["Website Development", "Web Application", "UI/UX Design", "E-Commerce", "SEO & Performance", "Maintenance & Growth", "Not sure yet"];
const BUDGETS = ["Under $1,000", "$1,000 - $3,000", "$3,000 - $8,000", "$8,000 - $20,000", "$20,000+", "Not sure"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_: ContactFormData) => {
    await new Promise(r => setTimeout(r, 800));
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div key="ok" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-[#e0e5ec] rounded-[16px] shadow-neu-in p-12 text-center">
          <CheckCircle2 className="size-12 text-green-500 mx-auto mb-4" />
          <h3 className="font-display text-2xl text-ink mb-2">Message Received!</h3>
          <p className="text-muted leading-relaxed">We&apos;ll be in touch within one business day.</p>
        </motion.div>
      ) : (
        <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" placeholder="Amahoro" className="shadow-neu-in-sm border-none" hasError={!!errors.firstName} {...register("firstName")} />
              {errors.firstName && <p className="text-red-500 text-xs mt-1.5">{errors.firstName.message}</p>}
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" placeholder="Mukamana" className="shadow-neu-in-sm border-none" hasError={!!errors.lastName} {...register("lastName")} />
              {errors.lastName && <p className="text-red-500 text-xs mt-1.5">{errors.lastName.message}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" type="email" placeholder="you@company.com" className="shadow-neu-in-sm border-none" hasError={!!errors.email} {...register("email")} />
            {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>}
          </div>

          <div>
            <Label htmlFor="phone">Phone / WhatsApp</Label>
            <Input id="phone" type="tel" placeholder="+250 7XX XXX XXX" className="shadow-neu-in-sm border-none" hasError={!!errors.phone} {...register("phone")} />
            {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone.message}</p>}
          </div>

          <div>
            <Label>Service</Label>
            <Select onValueChange={v => setValue("service", v)}>
              <SelectTrigger className="shadow-neu-in-sm border-none"><SelectValue placeholder="Select a service..." /></SelectTrigger>
              <SelectContent className="bg-[#e0e5ec]">{SERVICES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
            </Select>
          </div>

          <div>
            <Label>Budget Range</Label>
            <Select onValueChange={v => setValue("budget", v)}>
              <SelectTrigger className="shadow-neu-in-sm border-none"><SelectValue placeholder="Select a range..." /></SelectTrigger>
              <SelectContent className="bg-[#e0e5ec]">{BUDGETS.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}</SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Tell Us About Your Project *</Label>
            <Textarea id="message" className="shadow-neu-in-sm border-none" placeholder="What are you trying to achieve? What's the timeline?" hasError={!!errors.message} rows={5} {...register("message")} />
            {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message.message}</p>}
          </div>

          <Button size="lg" type="submit" disabled={isSubmitting} className="w-fit cursor-pointer shadow-neu-out-sm">
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
