import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-4 text-center mt-auto">
      <div className="space-x-4">
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms</a>
        <span>|</span>
        <a href="#" className="hover:text-blue-400">🐦</a>
        <a href="#" className="hover:text-blue-600">📘</a>
      </div>
      <div className="mt-2 text-sm">&copy; {new Date().getFullYear()} FirxtTech. All rights reserved.</div>
    </footer>
  );
}