import { type Metadata } from 'next';
import { COMPANY_NAME, PRODUCT_NAME, TAGLINE, SEO_KEYWORDS } from './company-config';

interface MetadataProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

const defaultUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://leaseiq.in';

export const siteMetadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: `${COMPANY_NAME} | ${TAGLINE}`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: 'One intelligent platform for society finance, security, maintenance, vendors, residents and everyday community operations.',
  keywords: SEO_KEYWORDS,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: defaultUrl,
    siteName: PRODUCT_NAME,
    title: `${COMPANY_NAME} | ${TAGLINE}`,
    description: 'One intelligent platform for society finance, security, maintenance, vendors, residents and everyday community operations.',
    images: [
      {
        url: `${defaultUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} OpenGraph Image`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_NAME} | ${TAGLINE}`,
    description: 'One intelligent platform for society finance, security, maintenance, vendors, residents and everyday community operations.',
    images: [`${defaultUrl}/twitter-image.jpg`],
  },
};

export function createMetadata({
  title,
  description,
  path = '',
  image,
}: MetadataProps = {}): Metadata {
  const url = `${defaultUrl}${path}`;
  
  return {
    ...siteMetadata,
    title: title ? `${title} | ${COMPANY_NAME}` : siteMetadata.title,
    description: description || siteMetadata.description,
    openGraph: {
      ...siteMetadata.openGraph,
      title: title ? `${title} | ${COMPANY_NAME}` : siteMetadata.openGraph?.title,
      description: description || siteMetadata.openGraph?.description,
      url,
      ...(image && {
        images: [
          {
            url: `${defaultUrl}${image}`,
            width: 1200,
            height: 630,
            alt: title || COMPANY_NAME,
          },
        ],
      }),
    },
    twitter: {
      ...siteMetadata.twitter,
      title: title ? `${title} | ${COMPANY_NAME}` : siteMetadata.twitter?.title,
      description: description || siteMetadata.twitter?.description,
      ...(image && {
        images: [`${defaultUrl}${image}`],
      }),
    },
    alternates: {
      canonical: url,
    },
  };
}
