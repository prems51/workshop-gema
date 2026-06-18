import React from 'react';
import { RobotIcon, ChipIcon, RocketIcon } from './icons';
import { WORKSHOP_SPECS } from '../data/workshopData.jsx';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-blue-50/50 via-purple-50/20 to-white pt-8 pb-16 lg:pt-16 lg:pb-28">
      
      {/* Floating Decorative Shapes in Background */}
      <div className="absolute top-1/4 left-5 w-16 h-16 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob-spin"></div>
      <div className="absolute top-1/3 right-10 w-24 h-24 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob-spin" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob-spin" style={{ animationDelay: '4s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left text column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-linear-to-r from-orange-100 to-orange-200 text-orange-800 shadow-sm border border-orange-200/50">
                <span className="w-2 h-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
                Summer 2026 Workshop
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              AI & Robotics <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600">
                Summer Workshop
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Empower your child with future-ready skills! A fun, hands-on, live online bootcamp designed to teach children the magic of Artificial Intelligence, visual programming, and robotics simulator projects.
            </p>
            
            {/* Hero Call-to-Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#register"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-2xl text-white bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-100 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Enroll Now
              </a>
              <a
                href="#curriculum"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-bold rounded-2xl text-slate-700 bg-white hover:bg-slate-50 shadow-sm hover:shadow transition-all duration-200"
              >
                View Curriculum
              </a>
            </div>

            {/* Quick Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100/80">
              <div className="flex items-center space-x-2 text-slate-600 justify-center lg:justify-start">
                <span className="text-xl">🎓</span>
                <span className="text-xs sm:text-sm font-semibold">Age {WORKSHOP_SPECS.ageGroup}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600 justify-center lg:justify-start">
                <span className="text-xl">📅</span>
                <span className="text-xs sm:text-sm font-semibold">{WORKSHOP_SPECS.duration}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600 justify-center lg:justify-start">
                <span className="text-xl">💻</span>
                <span className="text-xs sm:text-sm font-semibold">{WORKSHOP_SPECS.mode}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600 justify-center lg:justify-start">
                <span className="text-xl">🏆</span>
                <span className="text-xs sm:text-sm font-semibold">{WORKSHOP_SPECS.fee} Only</span>
              </div>
            </div>
          </div>

          {/* Right illustration column */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Outer decorative ring */}
            <div className="absolute inset-0 bg-linear-to-tr from-blue-300/10 via-purple-300/20 to-orange-300/15 rounded-full filter blur-3xl opacity-70"></div>
            
            {/* Floating tech graphics */}
            <div className="absolute -top-4 left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100/50 animate-float-slow flex items-center space-x-3 z-10">
              <span className="p-2 bg-purple-100 rounded-xl text-purple-600"><RobotIcon className="w-5 h-5" /></span>
              <span className="text-xs font-bold text-slate-800">Learn Coding</span>
            </div>

            <div className="absolute bottom-6 -left-8 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100/50 animate-float-fast flex items-center space-x-3 z-10" style={{ animationDelay: '1.5s' }}>
              <span className="p-2 bg-orange-100 rounded-xl text-orange-600"><ChipIcon className="w-5 h-5" /></span>
              <span className="text-xs font-bold text-slate-800">AI Basics</span>
            </div>

            <div className="absolute top-1/3 -right-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100/50 animate-float-slow flex items-center space-x-3 z-10" style={{ animationDelay: '3s' }}>
              <span className="p-2 bg-teal-100 rounded-xl text-teal-600"><RocketIcon className="w-5 h-5" /></span>
              <span className="text-xs font-bold text-slate-800">STEM Projects</span>
            </div>

            {/* Main Image Frame */}
            <div className="relative w-full max-w-md aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100/60 p-1 flex items-center justify-center transition-all duration-500 hover:rotate-1">
              <img
                src="/hero-robotics.png"
                alt="Children learning robotics and artificial intelligence"
                className="w-full h-full object-cover rounded-[2.2rem]"
                loading="eager"
                width="500"
                height="500"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
