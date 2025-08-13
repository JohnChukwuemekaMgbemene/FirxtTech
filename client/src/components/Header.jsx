import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, Send, Newspaper, LogIn } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between flex-wrap px-4 sm:px-8 py-4 bg-white shadow">
      {/* Logo/Brand links to Home */}
      <NavLink to="/" className="font-bold text-2xl text-blue-600 hover:text-blue-700" aria-label="FirxtTech Home">
        FirxtTech
      </NavLink>
      {/* Nav Buttons Right */}
      <nav className="flex flex-wrap gap-x-4 sm:gap-x-8 md:gap-x-12 gap-y-2 justify-end">
  {/* Home link removed — use brand on the left as the Home link */}
        <NavLink
          to="/knowledge-base"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-orange-600"
          }
        >
          <span className="inline-flex items-center gap-1">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            <span>Knowledge Base</span>
          </span>
        </NavLink>
        <NavLink
          to="/submit-ticket"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-orange-600"
          }
        >
          <span className="inline-flex items-center gap-1">
            <Send className="h-4 w-4" aria-hidden="true" />
            <span>Submit a Ticket</span>
          </span>
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-orange-600"
          }
        >
          <span className="inline-flex items-center gap-1">
            <Newspaper className="h-4 w-4" aria-hidden="true" />
            <span>Blog</span>
          </span>
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-orange-600"
          }
        >
          <span className="inline-flex items-center gap-1">
            <LogIn className="h-4 w-4" aria-hidden="true" />
            <span>Login</span>
          </span>
        </NavLink>
      </nav>
    </header>
  );
}