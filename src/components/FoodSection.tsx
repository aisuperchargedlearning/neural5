import React, { useEffect, useRef } from 'react';

interface FoodSectionProps {
  name: string;
  description: string;
  imageUrl: string;
}

export const FoodSection: React.FC<FoodSectionProps> = ({ name, description, imageUrl }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.3 }
    );

    const container = containerRef.current;
    if (container) {
      observer.observe(container);
    }

    const handleScroll = () => {
      if (containerRef.current && textOverlayRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const scrollProgress = -containerRect.top / (containerRect.height - window.innerHeight);
        
        if (scrollProgress >= 0 && scrollProgress <= 1) {
          // Fade out text overlay and darken background as user scrolls
          const opacity = Math.max(0, 1 - scrollProgress * 2);
          textOverlayRef.current.style.opacity = opacity.toString();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (container) {
        observer.unobserve(container);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[200vh] opacity-0 transition-opacity duration-700">
      <div className="h-screen sticky top-0 overflow-hidden">
        {/* Text overlay */}
        <div 
          ref={textOverlayRef}
          className="absolute inset-0 z-20 bg-black/80 flex items-center justify-center p-8 transition-opacity duration-300"
        >
          <div className="max-w-2xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">{name}</h2>
            <p className="text-lg text-gray-300 leading-relaxed">{description}</p>
          </div>
        </div>
        
        {/* Background image */}
        <div className="absolute inset-0 z-10">
          <img 
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover transform scale-105 transition-transform duration-700"
            style={{ transform: 'scale(1.05)' }}
          />
        </div>
      </div>
    </div>
  );
};