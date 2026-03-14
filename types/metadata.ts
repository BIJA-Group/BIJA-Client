import { SITE } from "@/lib/constants";

export interface MetaProps {
    title: string;
    description: string;
    url?: string;
    image?: string;
}

export interface FullMetaConfig {
    title: string;
    description: string;
    openGraph: {
        type: string;
        url: string;
        title: string;
        description: string;
        images: { url: string; width: number; height: number; alt: string }[];
    };
    twitter: {
        card: string;
        title: string;
        description: string;
        images: string[];
    };
    robots?: {
        index: boolean;
        follow: boolean;
    };
}

const OG_IMAGE = "/og-image.png";
const TWITTER_IMAGE = "/twitter-banner.png";
const OG_DIMENSIONS = { width: 1200, height: 630 };

export const pageMetadata: Record<string, FullMetaConfig> = {
    home: {
        title: `${SITE.name} — ${SITE.tagline}`,
        description: SITE.description,
        openGraph: {
            type: "website",
            url: `${SITE.url}/`,
            title: `${SITE.name} — ${SITE.tagline}`,
            description:
                "Kigali's digital craft studio. We design and engineer high-performance websites, platforms, and digital products that drive real business results across Rwanda and beyond.",
            images: [
                {
                    url: OG_IMAGE,
                    ...OG_DIMENSIONS,
                    alt: `${SITE.name} — Digital Agency, Kigali Rwanda`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${SITE.name} — ${SITE.tagline}`,
            description:
                "Website development, web applications & digital design based in Kigali, Rwanda.",
            images: [TWITTER_IMAGE],
        },
        robots: { index: true, follow: true },
    },

    services: {
        title: `Services | ${SITE.name}`,
        description: `Explore BIJA's digital services: website development, web applications, UI/UX design, e-commerce, SEO, and ongoing maintenance — all built for Rwanda and beyond.`,
        openGraph: {
            type: "website",
            url: `${SITE.url}/services`,
            title: `Services | ${SITE.name}`,
            description:
                "A focused suite of digital services we've mastered — website development, web apps, UI/UX design, e-commerce, SEO, and maintenance. Expert delivery for Rwanda and Africa.",
            images: [
                {
                    url: OG_IMAGE,
                    ...OG_DIMENSIONS,
                    alt: `Digital Services — ${SITE.name}`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `Services | ${SITE.name}`,
            description:
                "Website development, web applications, UI/UX design and more — by BIJA, Kigali's digital agency.",
            images: [TWITTER_IMAGE],
        },
        robots: { index: true, follow: true },
    },

    caseStudies: {
        title: `Case Studies | ${SITE.name}`,
        description: `See how BIJA has helped Rwandan businesses grow with custom digital products. Real challenges, real solutions, real results.`,
        openGraph: {
            type: "website",
            url: `${SITE.url}/case-studies`,
            title: `Case Studies | ${SITE.name}`,
            description:
                "Real projects, real results. Discover how BIJA helped clients across Rwanda achieve measurable growth through custom digital products.",
            images: [
                {
                    url: OG_IMAGE,
                    ...OG_DIMENSIONS,
                    alt: `Case Studies — ${SITE.name}`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `Case Studies | ${SITE.name}`,
            description:
                "How BIJA helped Rwandan businesses grow with custom websites and web applications.",
            images: [TWITTER_IMAGE],
        },
        robots: { index: true, follow: true },
    },

    about: {
        title: `About | ${SITE.name}`,
        description: `Meet the BIJA team — Kigali-born digital craftspeople who believe African businesses deserve world-class digital products.`,
        openGraph: {
            type: "website",
            url: `${SITE.url}/about`,
            title: `About | ${SITE.name}`,
            description:
                "Built by engineers, driven by purpose. Discover the team and mission behind BIJA — Kigali's digital craft studio.",
            images: [
                {
                    url: OG_IMAGE,
                    ...OG_DIMENSIONS,
                    alt: `About ${SITE.name}`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `About | ${SITE.name}`,
            description:
                "Meet the team behind BIJA — engineers and designers based in Kigali, Rwanda.",
            images: [TWITTER_IMAGE],
        },
        robots: { index: true, follow: true },
    },

    contact: {
        title: `Contact | ${SITE.name}`,
        description: `Get in touch with BIJA — Kigali's digital agency. Start a project, book a free discovery call, or ask us anything.`,
        openGraph: {
            type: "website",
            url: `${SITE.url}/contact`,
            title: `Contact | ${SITE.name}`,
            description:
                "Ready to build something? Get in touch with BIJA — book a free discovery call or send us a message. Based in Kigali, Rwanda.",
            images: [
                {
                    url: OG_IMAGE,
                    ...OG_DIMENSIONS,
                    alt: `Contact ${SITE.name}`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `Contact | ${SITE.name}`,
            description:
                "Start a project with BIJA — Kigali's digital agency. Book a free discovery call today.",
            images: [TWITTER_IMAGE],
        },
        robots: { index: true, follow: true },
    },
};
