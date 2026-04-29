import { BusinessCard } from '../components/BusinessCard';
import { SEO } from '../components/SEO';

export default function BusinessCardPage() {
  return (
    <>
      <SEO 
        title="Mike Lee - Founder & President"
        description="Mike Lee, Founder & President of the Global Student Startup Foundation. Connect via LinkedIn or email."
        path="/mike-lee"
      />
      <BusinessCard />
    </>
  );
}
