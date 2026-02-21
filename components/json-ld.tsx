export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Create Your Portfolio",
    url: "https://createyourportfolio.manishdev.tech",
    description:
      "AI-powered portfolio builder that creates stunning professional portfolios in minutes. Perfect for students, developers, and job seekers. Build your dream portfolio today.",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web Browser",
    offers: [
      {
        "@type": "Offer",
        name: "Free Demo Portfolio",
        price: "0",
        priceCurrency: "USD",
        description: "Free portfolio with watermarks for testing",
      },
      {
        "@type": "Offer",
        name: "Portfolio Starter",
        price: "199",
        priceCurrency: "INR",
        description: "Basic professional portfolio with essential features",
      },
      {
        "@type": "Offer",
        name: "Portfolio Pro Student",
        price: "499",
        priceCurrency: "INR",
        description: "Advanced portfolio with premium features for students",
      },
      {
        "@type": "Offer",
        name: "Portfolio Premium",
        price: "999",
        priceCurrency: "INR",
        description: "Complete portfolio with all features and priority support",
      },
    ],
    provider: {
      "@type": "Organization",
      name: "Create Your Portfolio Team",
      url: "https://createyourportfolio.manishdev.tech",
      email: "manishprajapati.cs1@gmail.com",
    },
    featureList: [
      "AI-powered portfolio generation",
      "Multiple professional templates",
      "Responsive design",
      "Customizable layouts",
      "Instant deployment",
      "SEO optimization",
      "Contact form integration",
      "Social media links",
      "Project showcase",
      "Skills section",
      "Experience timeline",
    ],
    screenshot: "https://createyourportfolio.manishdev.tech/screenshot-desktop.png",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://createyourportfolio.manishdev.tech",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
