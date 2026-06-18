import React from 'react';
import { WORKSHOP_SPECS } from '../data/workshopData.jsx';

const Details = () => {
  return (
    <section id="overview" className="py-20 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-indigo-600 tracking-wider uppercase">Interactive Learning</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Ignite Curiosity, Build the Future
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Our workshop is structured to guide students step-by-step from zero programming background to designing their own smart AI bots. We make education interactive, exciting, and rewarding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Description Column */}
          <div id="curriculum" className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">How the 4-Week Workshop Works</h3>
              <p className="text-slate-600 mt-3 leading-relaxed">
                During this live, highly interactive cohort, students interact with professional instructors twice a week. We combine simulator training, collaborative live challenges, and personal project mentorship to ensure full concept mastery.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl">
                  <span className="font-bold text-lg">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-base">Visual Robot Simulators</h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Children start with drag-and-drop simulators, allowing them to test electronic motors, sound sensors, and robotic arms virtually without safety risks.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl">
                  <span className="font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-base">AI Model Training</h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Kids will train their first Machine Learning models! They will capture camera gestures or voice commands to control physical code objects.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-teal-100 text-teal-600 rounded-2xl">
                  <span className="font-bold text-lg">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-base">Graduation Showcase</h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    In the final week, students present their original robot script or AI game to other parents in a supportive live demonstration!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Information Card Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-linear-to-br from-indigo-50/70 via-purple-50/50 to-white p-8 sm:p-10 rounded-4xl border border-indigo-100/80 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
              
              {/* Glowing decorative gradient ball */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-indigo-300/20 rounded-full filter blur-2xl group-hover:scale-125 transition-transform duration-500"></div>

              <div className="relative">
                <h3 className="text-2xl font-bold text-slate-900 font-display">Workshop Details</h3>
                <p className="text-sm text-slate-500 mt-1">Enrollment confirmation invoice breakdown</p>
                
                {/* Specifications list */}
                <ul className="mt-8 space-y-5">
                  <li className="flex items-center justify-between py-2 border-b border-slate-100">
                    <div className="flex items-center space-x-3 text-slate-600">
                      <span>🧒</span>
                      <span className="text-sm font-semibold">Age Group</span>
                    </div>
                    <span className="text-sm font-bold text-slate-900">{WORKSHOP_SPECS.ageGroup}</span>
                  </li>

                  <li className="flex items-center justify-between py-2 border-b border-slate-100">
                    <div className="flex items-center space-x-3 text-slate-600">
                      <span>⏳</span>
                      <span className="text-sm font-semibold">Duration</span>
                    </div>
                    <span className="text-sm font-bold text-slate-900">{WORKSHOP_SPECS.duration}</span>
                  </li>

                  <li className="flex items-center justify-between py-2 border-b border-slate-100">
                    <div className="flex items-center space-x-3 text-slate-600">
                      <span>📡</span>
                      <span className="text-sm font-semibold">Class Mode</span>
                    </div>
                    <span className="text-sm text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-lg uppercase tracking-wider">{WORKSHOP_SPECS.mode}</span>
                  </li>

                  <li className="flex items-center justify-between py-2 border-b border-slate-100">
                    <div className="flex items-center space-x-3 text-slate-600">
                      <span>🚀</span>
                      <span className="text-sm font-semibold">Start Date</span>
                    </div>
                    <span className="text-sm font-bold text-slate-900">{WORKSHOP_SPECS.startDate}</span>
                  </li>

                  <li className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3 text-slate-600">
                      <span>💰</span>
                      <span className="text-sm font-semibold">Fee</span>
                    </div>
                    <span className="text-lg font-extrabold text-orange-600">{WORKSHOP_SPECS.fee}</span>
                  </li>
                </ul>

                {/* Quick Card button */}
                <div className="mt-8">
                  <a
                    href="#register"
                    className="w-full inline-flex items-center justify-center px-6 py-4 text-center text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl shadow-lg shadow-indigo-100 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Book A Seat Instantly
                  </a>
                  <span className="block text-center text-slate-400 text-[11px] mt-3">
                    ✓ Instant slot verification • Refundable within 48 hours
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Details;
