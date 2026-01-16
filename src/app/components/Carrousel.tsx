'use client'

import React, { useState, ReactNode } from 'react';

interface CarousselProps {
  children?: ReactNode;
}

const Caroussel = ({ children }: CarousselProps) => {
  const [current, setCurrent] = useState(0);
  const length = React.Children.count(children);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
        {React.Children.map(children, (child, index) => (
          <div className="w-full flex-shrink-0">{child}</div>
        ))}
      </div>

      {/* Buttons */}
      {length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 hover:bg-black/50"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 hover:bg-black/50"
          >
            &#8594;
          </button>
        </>
      )}
    </div>
  );
};

export default Caroussel;
