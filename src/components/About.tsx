import React from 'react';
import { Shield, Users, Clock } from 'lucide-react';

const features = [
  {
    name: 'Experience Since 1965',
    description: 'Over 55 years of expertise in post-frame construction.',
    icon: Clock,
  },
  {
    name: 'Quality Craftsmanship',
    description: 'Premium materials and superior construction techniques.',
    icon: Shield,
  },
  {
    name: 'Local Focus',
    description: 'Dedicated service to Whatcom, Skagit, and San Juan Counties.',
    icon: Users,
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Building Trust Since 1965
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-brand-secondary lg:mx-auto">
            Texmo Pole Buildings has been the trusted name in post-frame construction,
            delivering quality buildings that stand the test of time.
          </p>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-primary text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-brand-dark">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-brand-secondary">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;