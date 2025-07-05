import React from 'react';

export default function Services() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Our Services</h1>
      <p className="text-gray-700 mb-4">
        Discover the range of services we offer to support your tech needs.
      </p>
      <ul className="space-y-4">
        <li className="bg-white rounded-lg shadow p-4">
          <span className="font-semibold text-blue-600">Technical Support</span>
          <p className="text-gray-600 text-sm">Get help with troubleshooting and resolving technical issues.</p>
        </li>
        <li className="bg-white rounded-lg shadow p-4">
          <span className="font-semibold text-blue-600">Consulting</span>
          <p className="text-gray-600 text-sm">Expert advice for your business or personal tech projects.</p>
        </li>
        <li className="bg-white rounded-lg shadow p-4">
          <span className="font-semibold text-blue-600">Training & Workshops</span>
          <p className="text-gray-600 text-sm">Learn new skills and best practices from our professionals.</p>
        </li>
      </ul>
    </section>
  );
}