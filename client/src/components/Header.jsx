import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow">
      <div className="font-bold text-xl text-blue-600">FirxtTech</div>
      <nav className="space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/knowledge-base"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Knowledge Base
        </NavLink>
        <NavLink
          to="/submit-ticket"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Submit a Ticket
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Login
        </NavLink>
      </nav>
    </header>
  );
}