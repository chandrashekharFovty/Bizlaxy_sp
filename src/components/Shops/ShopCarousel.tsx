import React, { useEffect, useState } from "react";
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';

const images = [
  "/Banner01.png",
  "/Banner02.png",
  "/Banner03.png",
  "/Banner04.png",
];

export default function ShopCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative w-full h-[320px] mx-auto overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && (
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full z-10 hover:bg-black/50"
        >
          <SlArrowLeft size={20} />
        </button>
      )}

      {isHovering && (
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full z-10 hover:bg-black/50"
        >
          <SlArrowRight size={20} />
        </button>
      )}

      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-[300px] max-md:h-48 object-cover transition duration-700 ease-in-out rounded-2xl"
      />

      <div className="flex justify-center gap-2 py-2">
        {images.map((img, index) => (
          <hr
            key={index}
            className={`h-2 cursor-pointer rounded-3xl bg-blue-800 dark:bg-white ${
              currentIndex === index
                ? "bg-blue-800 w-16 opacity-100"
                : "bg-blue-200 opacity-50 w-8"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
