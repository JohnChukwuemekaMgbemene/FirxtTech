import React from 'react';
import HeroSection from '../components/HeroSection';
import HelpCategories from '../components/HelpCategories';
import FeaturedFAQs from '../components/FeaturedFAQs';
import ContactTeaser from '../components/ContactTeaser';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HelpCategories />
      <FeaturedFAQs />
      <ContactTeaser />
    </>
  );
}