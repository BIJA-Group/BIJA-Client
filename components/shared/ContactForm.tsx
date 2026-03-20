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
import { SERVICES } from "@/lib/constants";
import emailjs from "@emailjs/browser"

// const SERVICES = ["CRM Automations", "Workflow Automations", "Website Development", "Automation Audit", "UI/UX Design", "E-Commerce", "SEO & Performance", "Maintenance & Growth", "Not sure yet"];
const BUDGETS = ["Under $1,000", "$1,000 - $3,000", "$3,000 - $8,000", "$8,000 - $20,000", "$20,000+", "Not sure"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState(false);

  const { register, handleSubmit, setValue, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema as unknown as Parameters<typeof zodResolver>[0]),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY!,
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone ?? "",
          service: data.service ?? "",
          budget: data.budget ?? "",
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setSendError(true);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="ok"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#e0e5ec] rounded-[16px] shadow-neu-in p-12 text-center"
        >
          <CheckCircle2 className="size-12 text-green-500 mx-auto mb-4" />
          <h3 className="font-display text-2xl text-ink mb-2">Message Received!</h3>
          <p className="text-muted leading-relaxed">We&apos;ll be in touch within one business day.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
          noValidate
        >
          {/* Name row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                placeholder="Amahoro"
                {...register("firstName")}
                className={`shadow-neu-in-sm border-none ${errors.firstName ? "border-destructive" : ""}`}
              />
              {errors.firstName && (
                <p className="text-xs text-destructive">{errors.firstName.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                placeholder="Mukamana"
                {...register("lastName")}
                className={`shadow-neu-in-sm border-none ${errors.lastName ? "border-destructive" : ""}`}
              />
              {errors.lastName && (
                <p className="text-xs text-destructive">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              {...register("email")}
              className={`shadow-neu-in-sm border-none ${errors.email ? "border-destructive" : ""}`}
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">Phone / WhatsApp</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+250 7XX XXX XXX"
              {...register("phone")}
              className={`shadow-neu-in-sm border-none ${errors.phone ? "border-destructive" : ""}`}
            />
            {errors.phone && (
              <p className="text-xs text-destructive">{errors.phone.message}</p>
            )}
          </div>

          {/* Service */}
          <div className="flex flex-col gap-2">
            <Label>Service</Label>
            <Select onValueChange={v => setValue("service", v)}>
              <SelectTrigger className="shadow-neu-in-sm border-none">
                <SelectValue placeholder="Select a service..." />
              </SelectTrigger>
              <SelectContent className="bg-[#e0e5ec]">
                {SERVICES.map(s => <SelectItem key={s.slug} value={s.title}>{s.title}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          {/* Budget */}
          <div className="flex flex-col gap-2">
            <Label>Budget Range</Label>
            <Select onValueChange={v => setValue("budget", v)}>
              <SelectTrigger className="shadow-neu-in-sm border-none">
                <SelectValue placeholder="Select a range..." />
              </SelectTrigger>
              <SelectContent className="bg-[#e0e5ec]">
                {BUDGETS.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Tell Us About Your Project *</Label>
            <Textarea
              id="message"
              placeholder="What are you trying to achieve? What's the timeline?"
              rows={5}
              {...register("message")}
              className={`shadow-neu-in-sm border-none ${errors.message ? "border-destructive" : ""}`}
            />
            {errors.message && (
              <p className="text-xs text-destructive">{errors.message.message}</p>
            )}
          </div>

          {sendError && (
            <div className="flex items-center gap-3 p-4 rounded-neu-sm bg-[#e0e5ec] shadow-[inset_3px_3px_8px_#c0392b33,inset_-2px_-2px_6px_#ffffff]">
              <span className="text-red-500 text-lg">✕</span>
              <div>
                <p className="text-sm font-semibold text-red-500">Message failed to send.</p>
                <p className="text-xs text-muted mt-0.5">Please try again or reach us directly at groupbija@gmail.com</p>
              </div>
            </div>
          )}

          <Button
            size="lg"
            type="submit"
            disabled={isSubmitting}
            className="w-fit cursor-pointer shadow-neu-out-sm"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
