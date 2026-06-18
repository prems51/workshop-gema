import React from 'react';
import { benefits } from '../data/workshopData.jsx';

const WhyJoin = () => {
  return (
    <section id="why-us" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-orange-600 tracking-wider uppercase">The Kidrove Edge</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Why Parents Choose Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            We understand what it takes to keep young minds engaged online. Here is how we ensure this bootcamp is the best experience of your child's summer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, idx) => (
            <div 
              key={idx} 
              className={`p-6 rounded-4xl border bg-linear-to-br ${item.color} shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col space-y-4`}
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
                {item.icon}
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 font-display">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyJoin;
