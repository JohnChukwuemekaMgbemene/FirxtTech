import React from 'react';

export default function FeaturedFAQs() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-8 text-center">
      <h2 className="text-2xl font-bold mb-4 text-orange-500 px-12 drop-shadow">Featured Articles</h2>
      <ul className="space-y-4">
        <li>
          <a
            href="#"
            className="block bg-gray/80 hover:bg-white/80 transition rounded-lg px-8 py-3 shadow text-white text-left font-medium backdrop-blur"
          >
            ◉ How do I reset my password?
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block bg-gray/80 hover:bg-white/80 transition rounded-lg px-8 py-3 shadow text-white text-left font-medium backdrop-blur"
          >
            ◉ How can I track my support ticket?
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block bg-gray/80 hover:bg-white/80 transition rounded-lg px-8 py-3 shadow text-white text-left font-medium backdrop-blur"
          >
            ◉ Where can I download product updates?
          </a>
        </li>
      </ul>
    </section>
  );
}