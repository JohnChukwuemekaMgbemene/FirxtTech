import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BookOpen, Send, Newspaper, LogIn, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand links to Home */}
          <NavLink
            to="/"
            className="font-bold text-2xl text-blue-600 hover:text-blue-700"
            aria-label="FirxtTech Home"
          >
            FirxtTech
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-10">
            <NavLink
              to="/knowledge-base"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-orange-600"
              }
            >
              <span className="inline-flex items-center gap-1.5">
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                <span>Knowledge Base</span>
              </span>
            </NavLink>
            <NavLink
              to="/submit-ticket"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-orange-600"
              }
            >
              <span className="inline-flex items-center gap-1.5">
                <Send className="h-4 w-4" aria-hidden="true" />
                <span>Submit a Ticket</span>
              </span>
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-orange-600"
              }
            >
              <span className="inline-flex items-center gap-1.5">
                <Newspaper className="h-4 w-4" aria-hidden="true" />
                <span>Blog</span>
              </span>
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-orange-600"
              }
            >
              <span className="inline-flex items-center gap-1.5">
                <LogIn className="h-4 w-4" aria-hidden="true" />
                <span>Login</span>
              </span>
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      <div id="mobile-menu" className={`${mobileOpen ? 'block' : 'hidden'} md:hidden border-t border-gray-200 bg-white`}> 
        <div className="px-4 py-3 space-y-1">
          <NavLink
            to="/knowledge-base"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded px-3 py-2 ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'}`
            }
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            <span>Knowledge Base</span>
          </NavLink>
          <NavLink
            to="/submit-ticket"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded px-3 py-2 ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'}`
            }
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            <span>Submit a Ticket</span>
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded px-3 py-2 ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'}`
            }
          >
            <Newspaper className="h-4 w-4" aria-hidden="true" />
            <span>Blog</span>
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded px-3 py-2 ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'}`
            }
          >
            <LogIn className="h-4 w-4" aria-hidden="true" />
            <span>Login</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}