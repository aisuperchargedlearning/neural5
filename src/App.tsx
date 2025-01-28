import React from 'react';
import { Building2, Phone, Mail, MapPin, Clock, Menu } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Reviews />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;