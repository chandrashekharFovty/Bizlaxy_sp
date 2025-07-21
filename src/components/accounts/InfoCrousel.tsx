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
      setCurrentIndex((i) => (i + 1) % InfoBoxes.length);
    }, 3000);
    return () => clearInterval(id);
  }, [InfoBoxes.length]);

  const { title, descp } = InfoBoxes[currentIndex];

  return (
    <div className="w-full h-full flex flex-col justify-center items-start">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-lg font-normal mb-6">{descp}</p>
      <div className="flex gap-2">
        {InfoBoxes.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-[6px] rounded-full cursor-pointer transition-all duration-300
            ${idx === currentIndex ? "w-16 bg-white" : "w-8 bg-white/50"}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
