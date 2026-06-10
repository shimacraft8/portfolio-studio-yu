import { site, plans } from "@/src/data/site";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-studio-yu.vercel.app";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: site.name,
    description: site.description,
    url: siteUrl,
    telephone: site.tel,
    email: site.email,
    image: `${siteUrl}/images/gym-interior.jpg`,
    priceRange: site.priceRange,
    address: {
      "@type": "PostalAddress",
      addressRegion: "岡山県",
      addressLocality: "苫田郡鏡野町",
      addressCountry: "JP",
    },
    sameAs: [site.instagram],
    makesOffer: plans.map((p) => ({
      "@type": "Offer",
      name: p.name,
      price: p.price.replace(/,/g, ""),
      priceCurrency: "JPY",
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
