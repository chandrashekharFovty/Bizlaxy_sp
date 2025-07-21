import React, { useRef, useState, useEffect } from 'react';
import StoryModal from './StoryModal';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';

export interface StoryItem {
  name: string;
  imageSrc: string;
  media: { type: "image" | "video"; src: string }[];
}

interface Props {
  items: StoryItem[];
}

const Story: React.FC<Props> = ({ items }) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const checkArrows = () => {
      const scrollEl = scrollRef.current;
      if (scrollEl) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollEl;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1);
      }
    };

    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener("scroll", checkArrows);
      checkArrows();
    }

    return () => {
      if (scrollEl) scrollEl.removeEventListener("scroll", checkArrows);
    };
  }, []);

  const handleNextUserStory = () => {
    if (activeStoryIndex !== null && activeStoryIndex < items.length - 1) {
      setActiveStoryIndex(activeStoryIndex + 1);
    } else {
      setActiveStoryIndex(null);
    }
  };

  const handlePrevUserStory = () => {
    if (activeStoryIndex !== null && activeStoryIndex > 0) {
      setActiveStoryIndex(activeStoryIndex - 1);
    } else {
      setActiveStoryIndex(null);
    }
  };

  return (
  <>
  <div
    className="relative w-[690px] max-md:w-screen max-w-[700px] h-[100px] px-2"
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
  >
    {/* LEFT ARROW */}
    {isHovering && showLeftArrow && (
      <button
        onClick={() =>
          scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" })
        }
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full z-10 hover:bg-black/50"
      >
        <SlArrowLeft size={20} />
      </button>
    )}

    {/* RIGHT ARROW */}
    {isHovering && showRightArrow && (
      <button
        onClick={() =>
          scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" })
        }
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full z-10 hover:bg-black/50"
      >
        <SlArrowRight size={20} />
      </button>
    )}

    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className={`w-full h-full overflow-x-auto whitespace-nowrap flex items-center gap-4 scrollbar-hide ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="w-[70px] h-[70px] border-2 border-purple-500 rounded-full flex justify-center items-center cursor-pointer shrink-0"
          onClick={() => setActiveStoryIndex(index)}
        >
          <img
            src={item.imageSrc}
            alt={item.name}
            className="w-[60px] h-[60px] object-cover rounded-full"
          />
        </div>
      ))}
    </div>
  </div>

  {activeStoryIndex !== null && (
    <StoryModal
      story={items[activeStoryIndex]}
      onClose={() => setActiveStoryIndex(null)}
      onNextUserStory={handleNextUserStory}
      onPrevUserStory={handlePrevUserStory}
      hasPrevUserStory={activeStoryIndex > 0}
      hasNextUserStory={activeStoryIndex < items.length - 1}
    />
  )}
</>

  );
};

export default Story;
