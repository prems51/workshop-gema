import React from 'react';
import { RobotIcon, RocketIcon } from './icons';

const Footer = () => {
  return (
    <div className="mt-auto">
      
      {/* 8. FINAL CTA BANNER */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-4xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-xl">
            
            {/* Animated floating icons in banner */}
            <div className="absolute top-4 left-10 text-white/10 animate-float-slow"><RobotIcon className="w-12 h-12" /></div>
            <div className="absolute bottom-6 right-12 text-white/10 animate-float-fast"><RocketIcon className="w-16 h-16" /></div>

            <div className="relative max-w-2xl mx-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display leading-tight">
                Give Your Child a Head Start in AI & Robotics
              </h2>
              <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
                Unlock their creative potential, build high-value logical problem-solving mindsets, and prepare them for tomorrow's technology landscape.
              </p>
              <div className="pt-2">
                <a
                  href="#register"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-2xl text-slate-900 bg-white hover:bg-slate-50 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  Enroll Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER LINKS */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Branding Column */}
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center space-x-2">
                <span className="flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-lg shadow-md">
                  <RocketIcon className="w-4 h-4 text-white" />
                </span>
                <span className="text-xl font-bold text-white font-display">
                  Kid<span className="text-indigo-400">rove</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Curating high-quality technological learning programs for kids globally. Discover the magic of coding, robotics, and creative design.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#overview" className="hover:text-white transition-colors">Overview</a></li>
                <li><a href="#curriculum" className="hover:text-white transition-colors">Curriculum Details</a></li>
                <li><a href="#outcomes" className="hover:text-white transition-colors">What You Learn</a></li>
                <li><a href="#register" className="hover:text-white transition-colors">Register Spot</a></li>
              </ul>
            </div>

            {/* Platform Information Column */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Summer Bootcamps</h4>
              <ul className="space-y-2 text-xs">
                <li>AI & Machine Learning (8-14 Yrs)</li>
                <li>IoT & Sensor Electronics (10-15 Yrs)</li>
                <li>Game Development in Scratch (7-12 Yrs)</li>
                <li>Python Robotics Simulators (12-16 Yrs)</li>
              </ul>
            </div>

            {/* Contact Information Column */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contact & Support</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center space-x-2">
                  <span>✉</span>
                  <span>support@kidrove.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>☏</span>
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>📍</span>
                  <span>Vite Tech Park, Sector 4, Bangalore</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright bar */}
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© 2026 Kidrove Platform. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-slate-350 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-350 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-350 transition-colors">Refund Guidelines</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default Footer;
