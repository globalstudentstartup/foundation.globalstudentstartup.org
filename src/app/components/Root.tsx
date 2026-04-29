import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import logoBlack from "figma:asset/79566f8df6b5c3761b519dc9d46ef31e438a7a0b.png";

export default function Root() {
  const location = useLocation();

  useEffect(() => {
    // Set the favicon to the GSSF logo
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = logoBlack;

    // Add Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-M18F1LG99B';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-M18F1LG99B');
    `;
    document.head.appendChild(script2);
  }, []);

  useEffect(() => {
    // Track page views on route change
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-M18F1LG99B', {
        page_path: location.pathname + location.search + location.hash,
      });
    }
  }, [location]);

  useEffect(() => {
    // Scroll to top on route change, unless there's a hash in the URL
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}