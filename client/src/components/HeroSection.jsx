import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ConciergeBell, Search } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-blue-100 to-blue-50 px-4">
      <h1 className="text-4xl font-bold mb-2 text-blue-800">Need Help? We’ve Got You Covered.</h1>
      <p className="text-lg text-gray-700 mb-6">Quick solutions and expert support for all your tech needs.</p>
      <div className="w-full max-w-xl mx-auto mb-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <Link
          to="/tools"
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-sm sm:text-base font-semibold text-white bg-orange-600 hover:bg-orange-700 shadow-sm hover:shadow-md ring-1 ring-orange-600/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500 transition-transform duration-200 transform-gpu hover:-translate-y-0.5">
          <Wrench className="mr-2 h-5 w-5" aria-hidden="true" />
          Browse Tools
        </Link>
        <Link
          to="/services"
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-sm sm:text-base font-semibold text-orange-700 bg-white border border-orange-200 hover:bg-orange-50 hover:border-orange-300 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500 transition-transform duration-200 transform-gpu hover:-translate-y-0.5">
          <ConciergeBell className="mr-2 h-5 w-5" aria-hidden="true" />
          Browse Services
        </Link>
      </div>
      <div className="relative w-full mx-auto max-w-[16rem] sm:max-w-sm md:max-w-lg lg:max-w-xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" aria-hidden="true" />
        <input
          type="text"
          aria-label="Search help articles"
          placeholder="Search help articles, topics, or errors…"
          className="w-full pl-10 pr-4 py-2 rounded-full border border-blue-200 bg-white/90 shadow-sm backdrop-blur focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400 text-gray-700 transition"
        />
      </div>
    </section>
  );
}