import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="backdrop-blur-sm bg-white/60 px-6 py-4 shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center shadow">
            <img
              src="assets/Logo.jpg"
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
          </div>

          <div>
            <h1 className="text-lg md:text-2xl font-extrabold tracking-tight text-slate-900">
              Earthway Engineering & Infra
            </h1>
            <div className="text-sm text-slate-600">
              Construction • Architecture • Interiors
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-slate-700">
          <Link to="/" className="hover:text-slate-900">
            Home
          </Link>
          <Link to="/services" className="hover:text-slate-900">
            Services
          </Link>
          <Link to="/about" className="hover:text-slate-900">
            About
          </Link>
          <Link to="/events" className="hover:text-slate-900">
            Events
          </Link>
          <Link to="/contact" className="hover:text-slate-900">
            Contact
          </Link>
          <Link to="/" className="btn-primary">
            Get a Quote
          </Link>
        </div>

        {/* Mobile: hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md text-slate-700 hover:bg-slate-100"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-white/95 shadow-md">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col space-y-3">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="text-slate-800 font-medium"
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className="text-slate-800 font-medium"
            >
              Services
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="text-slate-800 font-medium"
            >
              About
            </Link>
            <Link
              to="/events"
              onClick={() => setOpen(false)}
              className="text-slate-800 font-medium"
            >
              Events
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="text-slate-800 font-medium"
            >
              Contact
            </Link>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="btn-primary inline-block text-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
