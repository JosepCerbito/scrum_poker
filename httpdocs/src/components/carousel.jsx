import React, { useState, useEffect, useRef } from 'react';
import carousel1 from "../resources/images/carousel1.png";
import carousel2 from "../resources/images/carousel2.png";

function Carousel() {
  const images = [carousel1, carousel2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef();

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextImage, 2000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleNext = () => {
    clearInterval(intervalRef.current);
    nextImage();
    intervalRef.current = setInterval(nextImage, 5000);
  };

  const handlePrev = () => {
    clearInterval(intervalRef.current);
    prevImage();
    intervalRef.current = setInterval(nextImage, 5000);
  };

  return (
    <div className="w-screen flex justify-center">
      <div className="border-2 border-stone-700 rounded font-medium w-full md:max-w-7xl m-5 overflow-hidden shadow-md flex relative h-auto md:h-56">
        <div className='absolute right-2 bottom-2 md:right-10 md:bottom-5 font-semibold text-md md:text-xl text-white z-10'>
          <button onClick={handlePrev} className="md:mr-5 p-2">
            Previous
          </button>

          <button onClick={handleNext} className="p-2">
            Next
          </button>
        </div>
        <img className="w-full transition-transform duration-500 transform translate-x-0" src={images[currentIndex]} alt={`carousel${currentIndex + 1}`} />
      </div>
    </div>
  );
}

export default Carousel;
