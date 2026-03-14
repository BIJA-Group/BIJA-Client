import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/types/metadata";

// Helpers
function buildTitle(raw: string, custom?: string): string {
    return custom ? `${custom} | ${SITE.name}` : raw;
}

function buildDescription(raw: string, custom?: string): string {
    return custom ?? raw;
}

export function generateMetadata(key: keyof typeof pageMetadata): Metadata {
    const data = pageMetadata[key];

    return {
        title: data.title,
        description: data.description,
        openGraph: data.openGraph,
        twitter: data.twitter,
        alternates: { canonical: data.openGraph.url },
        ...(data.robots && { robots: data.robots }),
    };
}

export function generateDynamicMetadata(
    key: keyof typeof pageMetadata,
    customTitle?: string,
    customDescription?: string
): Metadata {
    const data = pageMetadata[key];
    const title = buildTitle(data.title, customTitle);
    const description = buildDescription(data.description, customDescription);

    return {
        title,
        description,
        openGraph: {
            ...data.openGraph,
            title: customTitle ?? data.openGraph.title,
            description: customDescription ?? data.openGraph.description,
        },
        twitter: {
            ...data.twitter,
            title: customTitle ?? data.twitter.title,
            description: customDescription ?? data.twitter.description,
        },
        alternates: { canonical: data.openGraph.url },
        ...(data.robots && { robots: data.robots }),
    };
}


export function generateAsyncMetadata(
    key: keyof typeof pageMetadata,
    customTitle?: string,
    customDescription?: string,
    customImage?: string
): Metadata {
    const data = pageMetadata[key];
    const title = buildTitle(data.title, customTitle);
    const description = buildDescription(data.description, customDescription);

    const ogImages = customImage
        ? [{ url: customImage, width: 1200, height: 630, alt: customTitle ?? data.title }]
        : data.openGraph.images;

    const twitterImages = customImage
        ? [customImage]
        : data.twitter.images;

    return {
        title,
        description,
        openGraph: {
            ...data.openGraph,
            title: customTitle ?? data.openGraph.title,
            description: customDescription ?? data.openGraph.description,
            images: ogImages,
        },
        twitter: {
            ...data.twitter,
            title: customTitle ?? data.twitter.title,
            description: customDescription ?? data.twitter.description,
            images: twitterImages,
        },
        alternates: { canonical: data.openGraph.url },
        ...(data.robots && { robots: data.robots }),
    };
}
