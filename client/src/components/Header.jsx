import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex items-center justify-between flex-wrap px-4 sm:px-8 py-4 bg-white shadow">
      {/* Company Name Left */}
      <div className="font-bold text-2xl text-blue-600">FirxtTech</div>
      {/* Nav Buttons Right */}
      <nav className="flex flex-wrap gap-x-4 sm:gap-x-8 md:gap-x-12 gap-y-2 justify-end">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-orange-600"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/knowledge-base"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-orange-600"
          }
        >
          Knowledge Base
        </NavLink>
        <NavLink
          to="/submit-ticket"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-orange-600"
          }
        >
          Submit a Ticket
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-orange-600"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-orange-600"
          }
        >
          Login
        </NavLink>
      </nav>
    </header>
  );
}