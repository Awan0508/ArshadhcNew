// src/app/layout.js
import './globals.css';
import ClientProviders from './ClientProviders';

// Static viewport export (fixes the warning)
export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

// Static metadata (site-wide defaults)
export const metadata = {
  title: {
    default: "Best Homeopathic Clinic in Rawalpindi | Excellent Treatment for Anal Fistula, PCOS, IBS, IBD & More",
    template: "%s | Arshad Homeopathic Clinic", // Appends to page titles (e.g., "Contact Us | Arshad Homeopathic Clinic")
  },
  description: "Arshad Homeopathic Clinic offers natural treatments for IBS, IBD, PCOS, Kidney Stones, Arthritis & chronic diseases. Rated #1 in Rawalpindi with 18+ years experience. Call +92 332 9622164 , +92 312 5122488",
  keywords: "best homeopathic clinic Rawalpindi, top homeopathic doctor Islamabad, homeopathy treatment Pakistan, best homeopathic clinic in Rawalpindi, best homeopathic clinic in Islamabad, best homeopathic doctor in pakistan, best homeopathic doctors, Best Homeopathic Clinic, Arshad Homeopathic Clinic, homeopathy clinic, homeo clinic near me, IBS treatment, IBD cure, PCOS natural treatment, kidney stone removal without surgery, anal fistula homeopathic cure, ovarian cyst treatment, rheumatoid arthritis relief, sciatica pain treatment, thyroid disorder cure, fatty liver treatment, peptic ulcer healing, chronic disease specialist, Dr. Asma Arshad, Dr. Asad Awan, certified homeopathic practitioners, non-surgical treatment, side-effect free medicine, natural healing center, trusted homeopath in Punjab",
  authors: [{ name: "Dr. Mrs Asma Arshad - Arshad Homeopathic Clinic" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.arshadhc.com",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Arshad Homeopathic Clinic",
    title: "Best Homeopathic Treatment in Rawalpindi | IBS, PCOS & Chronic Diseases",
    description: "17+ years experience treating IBS, PCOS, Kidney Stones & autoimmune disorders naturally. Call +92 332 9622164 in Muslim Town, Rawalpindi",
    url: "https://www.arshadhc.com",
    images: [
      {
        url: "https://www.arshadhc.com/images/clinic-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Arshad Homeopathic Clinic Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Homeopathic Treatment in Rawalpindi | IBS, PCOS & Chronic Diseases",
    description: "17+ years experience treating IBS, PCOS, Kidney Stones & autoimmune disorders naturally. Call +92 332 9622164",
    image: "https://www.arshadhc.com/images/clinic-banner.jpg",
  },
};

export default function RootLayout({ children }) {
  // Define static schemas (same across all pages)
  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Arshad Homeopathic Clinic",
    "image": "https://www.arshadhc.com/images/clinic-logo.jpg",
    "@id": "https://www.arshadhc.com",
    "url": "https://www.arshadhc.com",
    "telephone": ["+923329622164", "+923125122488"],
    "priceRange": "$$",
    "foundingDate": "2006", // Added for consistency
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Building 306, Street 09",
      "addressLocality": "Muslim Town, Rawalpindi",
      "addressRegion": "Punjab",
      "postalCode": "46000",
      "addressCountry": "PK",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.628861",
      "longitude": "73.089944",
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "11:00",
        "closes": "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "17:00",
        "closes": "21:00",
      },
    ],
    "medicalSpecialty": [
      "Homeopathy",
      "IBS Treatment",
      "IBD Treatment",
      "PCOS Treatment",
      "Kidney Stone Treatment",
      "Anal Fistula Treatment",
      "Rheumatoid Arthritis Treatment",
      "Thyroid Disorder Treatment",
      "Ovary Cyst Treatment",
      "Sciatica Treatment",
    ],
    "sameAs": [
      "https://www.facebook.com/Arshad.H.Clinic?mibextid=ZbWKwL", // Update to real link
      "https://www.youtube.com/c/ArshadHomeopathicClinicOfficial",
      "https://www.instagram.com/arshadhc.official/?hl=en",
      "https://www.tiktok.com/@arshadhomeoclinic", // Update to real link
    ],
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Arshad Homeopathic Clinic",
    "description": "Leading homeopathic treatment center in Rawalpindi specializing in chronic diseases",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Building 306, Street 09",
      "addressLocality": "Rawalpindi",
      "addressRegion": "Punjab",
      "postalCode": "46000",
      "addressCountry": "PK",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.628861",
      "longitude": "73.089944",
    },
    "telephone": ["+923329622164", "+923125122488"],
    "openingHours": "Mo-Sa 11:00-21:00",
    "priceRange": "$$",
  };

  // Sanitize JSON to prevent XSS
  const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Inject JSON-LD scripts early in body for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizeJson(clinicSchema) }}
          key="clinic-schema"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizeJson(businessSchema) }}
          key="business-schema"
        />
       <ClientProviders/>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-T6NMZQPK`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}