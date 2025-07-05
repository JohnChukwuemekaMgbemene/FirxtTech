import React from 'react';

export default function Tools() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Tools</h1>
      <p className="text-gray-700 mb-4">
        Explore our collection of helpful tools to make your tech experience easier!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <span className="font-semibold text-blue-600">Password Generator</span>
          <p className="text-gray-600 text-sm">Create strong, secure passwords instantly.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <span className="font-semibold text-blue-600">System Checker</span>
          <p className="text-gray-600 text-sm">Quickly check your system's specs and health.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <span className="font-semibold text-blue-600">Network Speed Test</span>
          <p className="text-gray-600 text-sm">Test your internet connection speed.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <span className="font-semibold text-blue-600">Network Monitor</span>
          <p className="text-gray-600 text-sm">Monitor your network traffic in real-time.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <span className="font-semibold text-blue-600">File Organizer</span>
          <p className="text-gray-600 text-sm">Organize and manage your files efficiently.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <span className="font-semibold text-blue-600">System Optimizer</span>
          <p className="text-gray-600 text-sm">Optimize your system for better performance.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <span className="font-semibold text-blue-600">Backup Tool</span>
          <p className="text-gray-600 text-sm">Create backups of your important files easily.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <span className="font-semibold text-blue-600">Format Converter</span>
          <p className="text-gray-600 text-sm">Convert files between different formats easily.</p>
        </div>
      </div>
    </section>
  );
}