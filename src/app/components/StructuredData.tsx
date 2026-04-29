import { Helmet } from 'react-helmet-async';

export function OrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NonprofitOrganization",
    "name": "Global Student Startup Foundation",
    "alternateName": "GSSF",
    "url": "https://gssf.org",
    "logo": "https://gssf.org/logo.png",
    "description": "A 501(c)(3) nonprofit organization dedicated to fostering undergraduate entrepreneurship and global leadership through competitions, academy programs, and venture support.",
    "taxID": "92-2847355",
    "nonprofitStatus": "501(c)(3)",
    "foundingDate": "2023-12-13",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      // Add your social media URLs here when available
      // "https://www.linkedin.com/company/gssf",
      // "https://twitter.com/gssf",
    ],
    "founder": [
      {
        "@type": "Person",
        "name": "Mike Lee",
        "jobTitle": "Co-Founder & Chairman"
      },
      {
        "@type": "Person",
        "name": "Elizabeth Lee",
        "jobTitle": "Co-Founder & Chairman"
      }
    ],
    "knowsAbout": [
      "Entrepreneurship Education",
      "Startup Competitions",
      "Student Innovation",
      "Global Leadership",
      "Artificial Intelligence Education"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}

export function EventStructuredData() {
  const gsscWorldsEvent = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "GSSC Worlds 2026",
    "description": "Global Student Startup Competition - The flagship annual competition bringing undergraduate teams from around the world to compete at the Asian Leadership Conference in Seoul.",
    "startDate": "2026-05-17",
    "endDate": "2026-05-22",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Asian Leadership Conference",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Seoul",
        "addressCountry": "KR"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Global Student Startup Foundation",
      "url": "https://gssf.org"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(gsscWorldsEvent)}
      </script>
    </Helmet>
  );
}