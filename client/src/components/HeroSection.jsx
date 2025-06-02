import React from 'react';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-blue-100 to-blue-50">
      <h1 className="text-4xl font-bold mb-2 text-blue-800">Need Help? We’ve Got You Covered.</h1>
      <p className="text-lg text-gray-700 mb-6">Quick solutions and expert support for all your tech needs.</p>
      <div className="flex space-x-4 mb-8">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 flex items-center">
          <span className="mr-2">🔍</span> Search Help Articles
        </button>
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 flex items-center">
          <span className="mr-2">🛎️</span> Browse Services
        </button>
      </div>
      <input
        type="text"
        placeholder="Search help articles, topics, or errors…"
        className="w-full max-w-xl px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-700 bg-blue-200 text-gray-700 placeholder-gray-400"
      />
    </section>
  );
}