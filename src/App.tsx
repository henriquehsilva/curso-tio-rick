import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Technologies from './components/Technologies';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white font-roboto">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;