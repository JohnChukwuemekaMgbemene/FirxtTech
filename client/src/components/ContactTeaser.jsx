import React from 'react';

export default function ContactTeaser() {
  return (
    <section className="bg-blue-50 py-6 text-center">
      <p className="text-lg">
        Can’t find what you’re looking for?{' '}
        <a href="#" className="text-blue-600 font-semibold hover:underline">Chat with us</a> or{' '}
        <a href="#" className="text-blue-600 font-semibold hover:underline">contact support</a>.
      </p>
    </section>
  );
}