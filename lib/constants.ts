//
// BIJA - Site Constants
// Single source of truth for all content data.
//

export const SITE = {
  name: "BIJA",
  tagline: "Digital Agency, Kigali Rwanda",
  description:
    "BIJA is Kigali's premier digital craft studio. We design and engineer high-performance websites, platforms, and digital products that drive real business results.",
  email: "bija@gmail.com",
  phone: "+250 783 309 468",
  whatsapp: "250783309468",
  location: "Kigali, Rwanda",
  url: "https://bija.rw",
} as const;

export const SERVICES = [
  {
    icon: "Globe",
    title: "Website Development",
    slug: "web-development",
    short: "Custom websites engineered for speed, SEO, and conversion. No templates, no shortcuts.",
    description:
      "Custom-engineered websites built for speed, search rankings, and conversions. We build in React, Next.js, or WordPress - whichever is right for your goals.",
    features: [
      "Custom design - zero templates",
      "Sub-2 second load times guaranteed",
      "Mobile-first, accessible, SEO-ready",
      "CMS integration for easy self-editing",
    ],
    investment: "$1,500+",
    timeline: "3–8 weeks from kickoff",
  },
  {
    icon: "Monitor",
    title: "Web Applications",
    slug: "web-apps",
    short: "Complex platforms, dashboards, and tools - from MVPs to enterprise-scale systems.",
    description:
      "Complex platforms, portals, dashboards, and SaaS tools. We architect, design, and build full-stack web applications from scratch.",
    features: [
      "Full-stack React / Node.js development",
      "API design & third-party integrations",
      "Authentication, roles, and permissions",
      "Scalable cloud infrastructure",
    ],
    investment: "$4,000+",
    timeline: "8–20 weeks depending on scope",
  },
  {
    icon: "Palette",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    short: "Interfaces that feel intuitive. We design for humans first, technology second.",
    description:
      "Great design is invisible. We create interfaces so intuitive that users never have to think - they just accomplish their goals.",
    features: [
      "User research & journey mapping",
      "Wireframes & interactive prototypes",
      "Design systems & component libraries",
      "Usability testing & iteration",
    ],
    investment: "$800+",
    timeline: "2–5 weeks for full design phase",
  },
  {
    icon: "Search",
    title: "SEO & Performance",
    slug: "seo-performance",
    short: "Technical SEO, Core Web Vitals, and performance tuning to get you found and keep users.",
    description:
      "We audit, fix, and optimise your site for search engines and real-world performance - so you rank higher and load faster.",
    features: [
      "Technical SEO audit & implementation",
      "Core Web Vitals optimisation",
      "Schema markup & structured data",
      "Ongoing rank tracking & reporting",
    ],
    investment: "$500+",
    timeline: "2–4 weeks initial audit + ongoing",
  },
  {
    icon: "ShoppingCart",
    title: "E-Commerce",
    slug: "ecommerce",
    short: "Sell online with confidence. Integrated payments, inventory, and beautiful storefronts.",
    description:
      "Complete e-commerce solutions with MoMo, card payments, inventory management, and admin dashboards. Built for Rwanda's market.",
    features: [
      "MoMo & international card payments",
      "Product catalogue & inventory system",
      "Order management & notifications",
      "Mobile-optimised checkout flows",
    ],
    investment: "$2,500+",
    timeline: "5–10 weeks",
  },
  {
    icon: "Wrench",
    title: "Maintenance & Growth",
    slug: "maintenance",
    short: "Ongoing support, updates, and strategic improvements to grow your digital presence.",
    description:
      "Retain us after launch for continuous improvements, security updates, performance monitoring, and growth-focused iterations.",
    features: [
      "Monthly security & dependency updates",
      "Performance monitoring & alerts",
      "A/B testing & conversion optimisation",
      "Priority support response",
    ],
    investment: "From $200/month",
    timeline: "Ongoing retainer",
  },
] as const;

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery Call",
    short: "Free 30-minute conversation to understand your goals, audience, and challenges.",
    long: "We get on a call to understand your goals, users, constraints, and timeline. No sales pitch - just honest conversation. By the end, you'll have a clear sense of what's possible and what it takes.",
    duration: "30 min · Free",
  },
  {
    num: "02",
    title: "Strategy",
    short: "A detailed proposal: scope, approach, timeline, and fixed investment.",
    long: "We prepare a detailed proposal with no ambiguity. You'll know exactly what you're getting, when you'll get it, and what it costs. No hidden fees, ever.",
    duration: "1 week",
  },
  {
    num: "03",
    title: "Execution",
    short: "We design first, get approval, then engineer - with regular check-ins throughout.",
    long: "We design first, get your approval, then engineer. You'll receive regular updates and have access to a live staging environment throughout. Feedback loops are built in - not bolted on.",
    duration: "3–16 weeks",
  },
  {
    num: "04",
    title: "Delivery",
    short: "We launch together, conduct thorough QA, and hand over everything.",
    long: "We launch together, conduct thorough QA, and hand over all assets, credentials, and training documentation. You'll never feel abandoned after launch.",
    duration: "1 week",
  },
] as const;

export const CASE_STUDIES = [
  {
    slug: "umucyo-fashion",
    category: "E-Commerce",
    year: "2024",
    emoji: "🛍️",
    bgClass: "from-amber-100 to-orange-100",
    title: "Umucyo Fashion Store",
    subtitle: "From Instagram DMs to a full e-commerce engine",
    challenge:
      "Umucyo, a Kigali-based fashion boutique, was selling exclusively through Instagram DMs. Manual order management was costing hours daily. Customers abandoned purchases due to no real checkout. Payment was cash-only, limiting reach significantly.",
    solution:
      "Full e-commerce platform with product catalogue, cart, MoMo & card payments, order tracking, and an admin dashboard. Integrated with their Instagram for seamless social commerce and automated fulfilment notifications.",
    result:
      "Within 3 months of launch: online sales up 280%, load time dropped from 4.2s to 1.1s, and conversion rate improved by 60%. The founder reclaimed 3 hours per day from manual order processing.",
    metrics: [
      { value: "+280%", label: "Online Sales" },
      { value: "1.1s", label: "Load Time" },
      { value: "+60%", label: "Conversion Rate" },
      { value: "3 hrs", label: "Saved Daily" },
    ],
    stack: ["Next.js", "Stripe", "MoMo API", "Sanity CMS"],
    url: "#",
  },
  {
    slug: "ubuzima-health",
    category: "Healthcare",
    year: "2024",
    emoji: "🏥",
    bgClass: "from-blue-100 to-sky-100",
    title: "Ubuzima Health Portal",
    subtitle: "Modernising patient care across three Kigali clinics",
    challenge:
      "Ubuzima runs a network of three clinics in Kigali. Appointments were phone-only, records were paper-based, and patient no-shows were costing thousands each month. Staff handled 200+ calls per day with no unified system.",
    solution:
      "Patient booking portal with real-time availability, automated SMS reminders, a unified admin dashboard across all three clinics, and optional telemedicine video consultations. Fully GDPR-informed and locally compliant.",
    result:
      "2,400+ monthly bookings now handled automatically. No-show rate dropped 40%. Staff reclaimed 6 hours daily from phone duty. Patient satisfaction score reached 4.8 stars.",
    metrics: [
      { value: "2,400+", label: "Bookings/month" },
      { value: "99.9%", label: "Uptime" },
      { value: "-40%", label: "No-show Rate" },
      { value: "4.8★", label: "Patient Rating" },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Twilio"],
    url: "#",
  },
  {
    slug: "iga-learning",
    category: "Education",
    year: "2023",
    emoji: "📚",
    bgClass: "from-green-100 to-emerald-100",
    title: "Iga Learning Platform",
    subtitle: "Bringing affordable online education to Rwandan students",
    challenge:
      "A Rwandan edtech startup wanted to bring affordable online learning to secondary school students. They had the curriculum but no platform. Constraints: low-bandwidth connectivity, budget Android phones, and a Kinyarwanda-language requirement.",
    solution:
      "Progressive Web App optimised for low bandwidth, offline-capable video lessons, gamified progress tracking, and a lightweight CMS for the content team. MoMo subscription payments built in from day one.",
    result:
      "8,200 registered students in 6 months. 74% weekly retention rate - above global edtech benchmarks. Featured in RwandaTech 2024 as a standout digital product.",
    metrics: [
      { value: "8,200", label: "Students" },
      { value: "74%", label: "Retention Rate" },
      { value: "6 mo", label: "To Scale" },
      { value: "PWA", label: "Offline Ready" },
    ],
    stack: ["React PWA", "Firebase", "MoMo API", "Cloudinary"],
    url: "#",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "BIJA didn't just build us a website - they built us a growth engine. Our online sales tripled within three months of launch. The team was professional, responsive, and delivered everything they promised.",
    author: "Amahoro Mukamana",
    role: "CEO, Umucyo Fashion",
    initials: "AM",
  },
  {
    quote:
      "Working with BIJA felt like having a senior tech team in-house. They understood our healthcare constraints, built something reliable, and continue to support us months later. Truly exceptional.",
    author: "Dr. David Kalisa",
    role: "Director, Ubuzima Clinics",
    initials: "DK",
  },
  {
    quote:
      "The attention to detail is remarkable. They took time to understand the low-bandwidth realities our students face and built around them - not around what's easy.",
    author: "Celestine Uwase",
    role: "Founder, Iga Learning",
    initials: "CU",
  },
  {
    quote:
      "Clear communication, on-time delivery, and a product we're proud of. BIJA is the only agency I've worked with that genuinely cared about our outcomes, not just the deliverable.",
    author: "Patrick Niyonzima",
    role: "MD, Kigali Heights Realty",
    initials: "PN",
  },
] as const;

export const FAQS = [
  {
    question: "How much does a website cost?",
    answer:
      "Every project is different. A brochure site starts around $1,500. A full e-commerce platform or web application typically ranges from $4,000–$15,000+. We provide a detailed, fixed-price proposal after a discovery call - no surprises.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A standard website takes 3–6 weeks. Web applications take 8–20 weeks. We'll give you a precise timeline in your proposal. We don't miss deadlines.",
  },
  {
    question: "Do you work with clients outside Rwanda?",
    answer:
      "Yes - we've worked with clients in the UK, USA, and across East Africa. We communicate asynchronously with occasional calls, and it works very well.",
  },
  {
    question: "Do I own everything after the project?",
    answer:
      "Absolutely. You own 100% of your code, design files, and all content. We transfer everything at handover. No lock-in, ever.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We offer maintenance retainers and ongoing growth partnerships. Many clients stay with us for years. But there's no obligation - you're fully equipped to manage independently if you choose.",
  },
  {
    question: "Can you accept payment in Rwandan Francs?",
    answer:
      "Yes - we accept MoMo, bank transfer (RWF & USD), and international wire. We're flexible and happy to discuss a payment structure that works for you.",
  },
  {
    question: "Do you build with no-code tools or page builders?",
    answer:
      "No. Everything we build is custom-coded. This means better performance, no vendor lock-in, and a codebase you can hand to any developer in the future.",
  },
] as const;

export const TEAM = [
  {
    name: "Mugisha Bija",
    role: "Founder & Lead Engineer",
    initials: "MB",
    bio: "Full-stack developer with 8+ years experience. Previously at Andela. Passionate about clean code and measurable outcomes.",
  },
  {
    name: "Isimbi Claire",
    role: "Lead Designer",
    initials: "IC",
    bio: "UX specialist focused on conversion-driven design. She's designed interfaces used by over 500,000 people across East Africa.",
  },
  {
    name: "Habimana Eric",
    role: "Senior Developer",
    initials: "HE",
    bio: "Backend architecture expert. Builds systems that scale. Formerly at Rwanda Coding Academy.",
  },
] as const;

export const STATS = [
  { value: "40+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years in Kigali" },
  { value: "$2M+", label: "Revenue Generated for Clients" },
] as const;

export const TRUSTED_BY = [
  "RwandAir", "Kigali Heights", "BK Group", "MTN Rwanda", "Inyarwanda",
] as const;
