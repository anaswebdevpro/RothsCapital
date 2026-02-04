import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import StatsBar from './components/sections/StatsBar';
import Features from './components/sections/Features';
import AccountTypes from './components/sections/AccountTypes';
import Platforms from './components/sections/Platforms';
import Steps from './components/sections/Steps';
import CTA from './components/sections/CTA';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 selection:text-secondary">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <Platforms />
        <AccountTypes />
        <Steps />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;