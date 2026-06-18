import React, { useState } from 'react';
import { RocketIcon } from './icons';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2.5 group">
            <span className="flex items-center justify-center w-11 h-11 bg-linear-to-tr from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-md group-hover:rotate-6 transition-all duration-300">
              <RocketIcon className="w-6 h-6 text-white" />
            </span>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-slate-900 font-display">
                Kid<span className="text-indigo-600">rove</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-purple-600">AI Academy</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Overview</a>
            <a href="#curriculum" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Curriculum</a>
            <a href="#outcomes" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Learning Outcomes</a>
            <a href="#why-us" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Why Join</a>
            <a href="#faq" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">FAQs</a>
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#register"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-2xl text-white bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-indigo-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-3 bg-white border-t border-slate-100 shadow-lg">
          <a
            href="#overview"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
          >
            Overview
          </a>
          <a
            href="#curriculum"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
          >
            Curriculum
          </a>
          <a
            href="#outcomes"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
          >
            Learning Outcomes
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
          >
            Why Join
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
          >
            FAQs
          </a>
          <div className="pt-4 px-4">
            <a
              href="#register"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-3.5 text-base font-bold text-white bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-md"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
