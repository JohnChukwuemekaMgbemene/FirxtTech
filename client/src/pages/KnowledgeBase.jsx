import React from 'react';

export default function KnowledgeBase() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Knowledge Base</h1>
      <input
        type="text"
        placeholder="Search articles..."
        className="w-full max-w-xl mb-8 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-50 text-blue-900 placeholder-blue-400"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-600 hover:underline">How to create an account</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Setting up your profile</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Troubleshooting</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-600 hover:underline">I forgot my password</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">App is not loading</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-700">
          Can't find what you're looking for?{' '}
          <a href="/submit-ticket" className="text-orange-600 font-semibold hover:underline">Contact Support</a>
        </p>
      </div>
    </section>
  );
}