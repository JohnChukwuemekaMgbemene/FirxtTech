import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import HelpCategories from '../components/HelpCategories';
import FeaturedFAQs from '../components/FeaturedFAQs';
import ContactTeaser from '../components/ContactTeaser';

const images = [
  "/stefan-stefancik-5p_7M5MP2Iw-unsplash.jpg",
  "/5196806681_1fa12aa36e_k.jpg",
  "/sigmund-Fa9b57hffnM-unsplash.jpg",
  // Add more image paths as needed (all should be in your public folder)
];

export default function Home() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HeroSection />
      <section
        className="relative py-10 px-8 transition-all duration-700"
        style={{
          backgroundImage: `url('${images[bgIndex]}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/10 pointer-events-none transition-all duration-700"></div>
        <div className="relative z-10">
          <HelpCategories />
          <FeaturedFAQs />
        </div>
      </section>
      <ContactTeaser />
    </>
  );
}