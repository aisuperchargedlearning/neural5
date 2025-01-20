import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Employment', href: '#employment' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-[#1a0f0f] shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <img 
              src="https://ik.imagekit.io/a7tech/texmo/texmo%20logo.jpg?updatedAt=1737404815191" 
              alt="Texmo Pole Buildings Logo" 
              className="h-16 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-brand-light hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#quote"
              className="bg-brand-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brand-secondary transition-colors"
            >
              Request Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-light hover:text-brand-accent focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1a0f0f]">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-brand-light hover:text-brand-accent block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#quote"
              className="bg-brand-primary text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-secondary"
              onClick={() => setIsOpen(false)}
            >
              Request Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;