import React from 'react';
import { outcomes } from '../data/workshopData.jsx';

const Outcomes = () => {
  return (
    <section id="outcomes" className="py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-purple-600 tracking-wider uppercase">Curriculum Goals</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            What Your Child Will Learn
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            We focus on project-based outcomes. By the time the workshop finishes, your child will have successfully understood these key technical concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Icon wrap */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${item.color}`}>
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-50">
                <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${item.pill}`}>
                  Module {idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Outcomes;
