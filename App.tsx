import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Features from './components/Features';
import Footer from './components/Footer';
import WhyLinkedIn from './components/WhyLinkedIn';
import Comparison from './components/Comparison';
import WhoWeAre from './components/WhoWeAre';
import ScheduleCall from './components/ScheduleCall';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navbar />
        <main className="overflow-hidden">
          <Hero />
          <Features />
          <Showcase />
          <WhyLinkedIn />
          <Comparison />
          <WhoWeAre />
          <ScheduleCall />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
