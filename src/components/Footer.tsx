import React from 'react';
import { Phone, Mail, MapPin, Clock, Building2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-brand-light" />
              <span className="ml-2 text-xl font-bold text-white">Texmo Pole Buildings</span>
            </div>
            <p className="mt-4 text-brand-accent">
              Quality post-frame construction serving Whatcom, Skagit, and San Juan Counties since 1965.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-brand-accent tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-accent mr-2" />
                <a href="tel:360-734-3480" className="text-brand-light hover:text-white">
                  (360) 734-3480
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-accent mr-2" />
                <a href="mailto:Sales@TexmoBuildings.com" className="text-brand-light hover:text-white">
                  Sales@TexmoBuildings.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-accent mr-2 mt-1" />
                <div className="text-brand-light">
                  <p>2700 Meridian Street</p>
                  <p>Bellingham, WA 98225</p>
                  <p className="mt-2 text-sm">
                    One block South of Meridian Haggen<br />
                    Located in the Fountain District<br />
                    Next to H&R Block and Northwest Dental
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-brand-accent tracking-wider uppercase">Hours</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-brand-accent mr-2" />
                <span className="text-brand-light">
                  Mon-Fri: 8AM-5PM
                </span>
              </li>
              <li className="text-brand-light ml-7">
                Sat-Sun: Closed
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-brand-secondary pt-8">
          <p className="text-base text-brand-accent text-center">
            © {new Date().getFullYear()} Texmo Pole Buildings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;