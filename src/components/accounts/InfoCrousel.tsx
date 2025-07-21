// InfoCarousel.tsx
import React, { useEffect, useState } from "react";

export interface InfoBox {
  title: string;
  descp: string;
}

export interface InfoBoxProps {
  InfoBoxes: InfoBox[];
}

export default function InfoCarousel({ InfoBoxes }: InfoBoxProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex(i => (i + 1) % InfoBoxes.length);
    }, 3000);
    return () => clearInterval(id);
  }, [InfoBoxes.length]);

  const { title, descp } = InfoBoxes[currentIndex];

  return (
    <div className="max-md:w-screen max-md:h-full flex justify-center bg-indigo-600 h-screen overflow-hidden px-5">
      <div className="w-full h-full overflow-hidden">
      <h2 className="text-2xl max-md:text-[16px] font-semibold mb-2 h-12 max-md:h-5">{title}</h2>
      <p className="text-lg max-md:text-xs font-normal h-28 max-md:h-12 mt-3 max-md:mt-1 overflow-hidden">{descp}</p>
      <div className="flex mt-5 gap-2 max-md:justify-center">
        {InfoBoxes.map((_, idx) => (
          <hr
            key={idx}
            className={`h-[6px] cursor-pointer rounded-3xl bg-white 
                ${idx === currentIndex ? "active w-16 max-md:w-12 opacity-100 -space-x-4" : "inactive bg-blue-200 opacity-50 -space-x-1 w-8"}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
      </div>
    </div>
  );
}
