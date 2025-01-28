import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: "Everything was done expertly and I appreciate Brian's, expertise, accommodation and excellent construction skills along with his crew Chris and Brad. The building looks excellent and was done in a timely manner.\nThanks so much for a great job.",
    author: "Rich",
    rating: 5,
    location: "Blaine, WA"
  },
  {
    text: "Professional team from start to finish. They completed our barn on schedule and within budget.",
    author: "Sarah M.",
    rating: 5,
    location: "Mount Vernon, WA"
  },
  {
    text: "Best pole building contractor in the area. Their experience really shows in the quality of their work.",
    author: "Mike R.",
    rating: 5,
    location: "Friday Harbor, WA"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-brand-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl text-center">
          Customer Reviews
        </h2>
        <p className="mt-4 text-xl text-brand-secondary text-center max-w-2xl mx-auto">
          Don't just take our word for it - hear what our satisfied customers have to say
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg border border-brand-light hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-5 w-5 text-brand-primary fill-current" 
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-brand-secondary mb-4 italic">"{review.text}"</p>
              <div className="text-sm text-brand-dark">
                <p className="font-semibold">{review.author}</p>
                <p>{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;