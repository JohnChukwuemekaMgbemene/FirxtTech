import React from 'react';
import HeroSection from '../components/HeroSection';
import HighlightsSlideshow from '../components/HighlightsSlideshow';
import ContactTeaser from '../components/ContactTeaser';
import SEO from '../components/SEO';
 
export default function Home() {

  return (
    <div>
      <SEO 
        title="Professional Computer Support & Tech Solutions"
        description="Get expert computer repair, remote support, and technical assistance. Fix Windows problems, performance issues, and hardware troubles."
        keywords="computer repair, remote support, tech help, PC troubleshooting"
      />
      <HeroSection />
      <section className="relative px-0 sm:px-8 py-10 min-h-[32rem] md:min-h-[42rem]">
        <div className="absolute inset-0">
          <HighlightsSlideshow />
        </div>
      </section>
      <ContactTeaser />
    </div>
  );
}