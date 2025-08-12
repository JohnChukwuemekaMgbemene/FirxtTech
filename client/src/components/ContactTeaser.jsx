import React from 'react';
import { MessageSquare, LifeBuoy } from 'lucide-react';

export default function ContactTeaser() {
  return (
    <section className="bg-blue-50 py-6 text-center">
      <p className="text-lg text-gray-700">
        Can’t find what you’re looking for?{' '}
        <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
          <MessageSquare className="h-5 w-5" aria-hidden="true" />
          <span>Chat with us</span>
        </a>{' '}or{' '}
        <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
          <LifeBuoy className="h-5 w-5" aria-hidden="true" />
          <span>contact support</span>
        </a>.
      </p>
    </section>
  );
}