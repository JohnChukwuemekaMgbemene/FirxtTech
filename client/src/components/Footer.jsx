import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-4 text-center mt-auto">
      <div className="space-x-4">
        <Link to="/contact" className="text-gray-400 hover:text-white">
          About
        </Link>
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