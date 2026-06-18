import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Details from './components/Details';
import Outcomes from './components/Outcomes';
import WhyJoin from './components/WhyJoin';
import FAQ from './components/FAQ';
import Registration from './components/Registration';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-purple-100 selection:text-purple-900">
      <Header />
      <main>
        <Hero />
        <Details />
        <Outcomes />
        <WhyJoin />
        <FAQ />
        <Registration />
      </main>
      <Footer />
    </div>
  );
};

export default App;