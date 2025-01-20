import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen pt-20">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        >
          <source
            src="https://ik.imagekit.io/a7tech/texmo/texmo2a.mp4?updatedAt=1737403845550"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Custom Pole Buildings Since 1965
        </h1>
        <p className="mt-6 text-xl text-brand-light max-w-3xl">
          Serving Whatcom, Skagit, and San Juan Counties with quality Pole Building Construction. 
          From garages and barns to commercial buildings, we build your vision with excellence.
        </p>
        <div className="mt-10 flex space-x-4">
          <a
            href="#quote"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-primary hover:bg-brand-secondary transition-colors"
          >
            Request a Quote
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center px-6 py-3 border border-brand-light text-base font-medium rounded-md text-brand-light bg-transparent hover:bg-brand-light hover:text-brand-dark transition-colors"
          >
            View Our Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;