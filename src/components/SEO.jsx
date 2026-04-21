import { Helmet } from 'react-helmet-async';

const SEO = () => {
  return (
    <Helmet>
      <title>Kisense Solomon | Web Designer Kampala Uganda – Affordable Websites 48hrs</title>
      <meta name="description" content="Kisense Solomon is a freelance web designer in Kampala Uganda. Fast, affordable websites for small businesses — delivered in 48 hours, priced in UGX, WhatsApp-first. View portfolio at solomantalgo.online" />
      <meta name="keywords" content="web designer Kampala, website design Uganda, affordable websites Kampala, freelance web designer Uganda, small business websites Kampala, Solomon Kisense, solomantalgo, web developer Uganda" />
      <meta name="author" content="Kisense Solomon" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://solomantalgo.online" />

      {/* Open Graph — for WhatsApp and Facebook link previews */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Kisense Solomon | Web Designer Kampala – Affordable, Fast, Local" />
      <meta property="og:description" content="Fast websites for small businesses in Kampala. 48hr delivery, UGX pricing, WhatsApp-first. 10+ demos built across different industries." />
      <meta property="og:url" content="https://solomantalgo.online" />
      <meta property="og:image" content="https://solomantalgo.online/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_UG" />
      <meta property="og:site_name" content="Kisense Solomon — Web Designer Kampala" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Kisense Solomon | Web Designer Kampala Uganda" />
      <meta name="twitter:description" content="Fast, affordable websites for Kampala businesses. 48hr delivery, UGX pricing." />
      <meta name="twitter:image" content="https://solomantalgo.online/og-image.jpg" />

      {/* Geo tags for Uganda/Kampala local SEO */}
      <meta name="geo.region" content="UG-102" />
      <meta name="geo.placename" content="Kampala, Uganda" />
      <meta name="geo.position" content="0.3476;32.5825" />
      <meta name="ICBM" content="0.3476, 32.5825" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Kisense Solomon",
          "alternateName": "Solo",
          "jobTitle": "Freelance Web Designer & Developer",
          "url": "https://solomantalgo.online",
          "email": "kmantalgosolo@gmail.com",
          "telephone": "+256775224728",
          "image": "https://solomantalgo.online/og-image.jpg",
          "sameAs": [
            "https://wa.me/256775224728"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kampala",
            "addressCountry": "UG"
          },
          "knowsAbout": ["Web Design", "React", "HTML", "CSS", "JavaScript", "Spring Boot", "Supabase", "SEO", "Google My Business"],
          "offers": {
            "@type": "Offer",
            "name": "Website Design Services",
            "priceCurrency": "UGX",
            "priceRange": "150000-700000",
            "areaServed": "Uganda"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
