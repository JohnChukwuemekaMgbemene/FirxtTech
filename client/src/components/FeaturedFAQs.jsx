import React from 'react';

export default function FeaturedFAQs() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-8">
      <h2 className="text-2xl font-bold mb-4">Top FAQs</h2>
      <ul className="space-y-2">
        <li>
          <a href="#" className="text-blue-600 hover:underline">How do I reset my password?</a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">How can I track my support ticket?</a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">Where can I download product updates?</a>
        </li>
      </ul>
    </section>
  );
}