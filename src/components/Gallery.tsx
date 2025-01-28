import React from 'react';

const galleryItems = [
  {
    image: "https://ik.imagekit.io/a7tech/Architectural%20Planning/Hero%20images/Smallhome.jpg?updatedAt=1730594094287",
    title: "Custom Farm Barn",
    description: "40' x 60' Agricultural Building"
  },
  {
    image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Equipment Storage",
    description: "30' x 40' Storage Facility"
  },
  {
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Commercial Workshop",
    description: "50' x 80' Commercial Space"
  },
  {
    image: "https://images.unsplash.com/photo-1513977055326-5675c99cfcb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Custom Garage",
    description: "24' x 36' Personal Garage"
  },
  {
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Horse Stable",
    description: "36' x 48' Equestrian Facility"
  },
  {
    image: "https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "RV Storage",
    description: "40' x 60' Vehicle Storage"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 text-xl text-brand-secondary max-w-2xl mx-auto">
            Browse through our portfolio of custom pole buildings, each crafted with precision and care
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-brand-light">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;