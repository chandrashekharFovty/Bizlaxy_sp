import React, { useRef, useState } from 'react';
import StoryModal from './StoryModal';

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

  //  HANDLERS for switching user stories:
  const handleNextUserStory = () => {
    if (activeStoryIndex !== null && activeStoryIndex < items.length - 1) {
      setActiveStoryIndex(activeStoryIndex + 1);
    } else {
      // Optionally close if last
      setActiveStoryIndex(null);
    }
  };

  const handlePrevUserStory = () => {
    if (activeStoryIndex !== null && activeStoryIndex > 0) {
      setActiveStoryIndex(activeStoryIndex - 1);
    } else {
      // Optionally close if first
      setActiveStoryIndex(null);
    }
  };

  return (
    <>
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`w-[690px] max-md:w-screen max-w-[700px] h-[100px] overflow-x-auto whitespace-nowrap flex items-center gap-4 px-2 scrollbar-hide ${
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
