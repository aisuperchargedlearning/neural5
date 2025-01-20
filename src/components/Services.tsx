import React from 'react';
import { Warehouse, Home, Building, Plane } from 'lucide-react';

const services = [
  {
    title: 'Garages & Shops',
    description: 'Custom-designed spaces for vehicles and workshops, built to your specifications.',
    icon: Home,
    video: 'https://player.vimeo.com/external/517090081.hd.mp4?s=60c86037945bd10c5b78d1c38e550ef7ff4c3ad0&profile_id=175',
  },
  {
    title: 'Barns & Stables',
    description: 'Durable agricultural buildings designed for functionality and longevity.',
    icon: Warehouse,
    video: 'https://player.vimeo.com/external/517090081.hd.mp4?s=60c86037945bd10c5b78d1c38e550ef7ff4c3ad0&profile_id=175',
  },
  {
    title: 'Commercial Buildings',
    description: 'Versatile commercial spaces engineered for your business needs.',
    icon: Building,
    video: 'https://player.vimeo.com/external/517090081.hd.mp4?s=60c86037945bd10c5b78d1c38e550ef7ff4c3ad0&profile_id=175',
  },
  {
    title: 'Specialty Structures',
    description: 'Airplane hangars, boat storage, and other specialized building solutions.',
    icon: Plane,
    video: 'https://player.vimeo.com/external/517090081.hd.mp4?s=60c86037945bd10c5b78d1c38e550ef7ff4c3ad0&profile_id=175',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-brand-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Our Building Solutions
          </h2>
          <p className="mt-4 text-xl text-brand-secondary">
            Quality post-frame construction tailored to your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-brand-primary rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={service.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-brand-dark/60"></div>
              </div>
              <div className="relative z-10">
                <span className="rounded-lg inline-flex p-3 bg-brand-light text-brand-primary ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-brand-dark group-hover:text-white transition-colors">
                    <a href="#" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {service.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-brand-secondary group-hover:text-brand-light transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;