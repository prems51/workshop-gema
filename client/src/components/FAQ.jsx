import React, { useState } from 'react';
import { faqs } from '../data/workshopData.jsx';

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <section id="faq" className="py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-teal-600 tracking-wider uppercase">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <span className={`shrink-0 ml-2 flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 ${isOpen ? 'bg-indigo-600 text-white rotate-180' : 'bg-slate-100 text-slate-600'}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                
                {/* Expandable Panel */}
                <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 border-t border-slate-50' : 'max-h-0 overflow-hidden'}`}>
                  <div className="p-6 text-sm text-slate-600 leading-relaxed bg-slate-50/30">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
