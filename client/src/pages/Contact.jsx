import React from 'react';

export default function Contact() {
  return (
    <section className="max-w-xl mx-auto px-4 py-10 space-y-8">
      {/* About Us Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">About Us</h1>
        <p className="text-gray-700">
          FirxtTech is dedicated to providing top-notch tech support and solutions for individuals and businesses.
          Our team of experts is passionate about helping you solve your tech challenges quickly and efficiently.
        </p>
      </div>
      {/* Contact Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-2 text-blue-700">Contact Us</h2>
        <p className="text-gray-700">
          Have questions or need help? Reach out to our support team!
        </p>
        <div className="space-y-2">
          <div>
            <span className="font-semibold text-gray-800">Email:</span>{' '}
            <a href="mailto:support@firxttech.com" className="text-blue-600 hover:underline">
              support@firxttech.com
            </a>
          </div>
          <div>
            <span className="font-semibold text-gray-800">Phone:</span>{' '}
            <a href="tel:+1234567890" className="text-blue-600 hover:underline">
              +1 (234) 567-890
            </a>
          </div>
          <div>
            <span className="font-semibold text-gray-800">Address:</span>{' '}
            123 FirxtTech Avenue, Lagos, Nigeria
          </div>
        </div>
        <div className="pt-4">
          <a
            href="/submit-ticket"
            className="inline-block bg-orange-600 text-white font-semibold px-6 py-2 rounded hover:bg-orange-700 transition"
          >
            Submit a Ticket
          </a>
        </div>
      </div>
    </section>
  );
}