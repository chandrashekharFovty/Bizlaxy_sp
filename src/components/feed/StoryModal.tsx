import React, { useEffect, useState } from "react";
import {
  X,
  Heart,
  Send,
  ArrowRightCircle,
  ArrowLeftCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import StoryPopover from "./StoryPopover";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb"; // ✅ import pause icon too!

export interface MediaItem {
  type: "image" | "video";
  src: string;
}

export interface StoryItem {
  name: string;
  imageSrc: string; // profile pic
  media?: MediaItem[];
}

interface Props {
  story: StoryItem;
  onClose: () => void;
  onNextUserStory?: () => void;
  onPrevUserStory?: () => void;
  hasNextUserStory?: boolean;
  hasPrevUserStory?: boolean;
}

const StoryModal: React.FC<Props> = ({
  story,
  onClose,
  onNextUserStory,
  onPrevUserStory,
  hasNextUserStory,
  hasPrevUserStory,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const duration = 3000; // 3 sec for images
  const [liked, setLiked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [paused, setPaused] = useState(false); 

  const users = [
    { id: 1, name: "imkr", img: "/Hide.jpg" },
    { id: 2, name: "organic__ai", img: "/Hide1.jpg" },
    { id: 3, name: "im_gr", img: "/Hide2.jpg" },
    { id: 4, name: "abhi52", img: "/Hide3.jpg" },
    { id: 5, name: "soktri", img: "/Hide.jpg" },
  ];

  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleSelectUser = (id: number) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter((uid) => uid !== id));
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  };

  const togglePause = () => {
    setPaused((prev) => !prev);
  };

  const media = story.media || [];

  useEffect(() => {
    if (media.length === 0) {
      onClose();
      return;
    }

    const current = media[currentIndex];
    if (current.type === "video") return;

    setProgress(0);
    const start = Date.now();

    const interval = setInterval(() => {
      if (paused) return; // respect pause
      const elapsed = Date.now() - start;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);

      if (percent >= 100) {
        clearInterval(interval);
        handleNext();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentIndex, media, paused]); //depend on paused

  const handleNext = () => {
    if (currentIndex < media.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      if (onNextUserStory) {
        onNextUserStory();
      } else {
        onClose();
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      if (onPrevUserStory) {
        onPrevUserStory();
      }
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, media]);

  if (media.length === 0) return null;

  const current = media[currentIndex];

  return (
    <>
      {/* STORY MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
        <div className="relative flex flex-col w-full h-full md:max-w-[420px] md:max-h-[100%] md:rounded-xl bg-black overflow-hidden px-4 py-2 md:px-6 md:py-6">
          {/* Progress Bar */}
          <div className="flex gap-1 mb-4">
            {media.map((_, index) => (
              <progress
                key={index}
                value={
                  index < currentIndex
                    ? 100
                    : index === currentIndex
                    ? progress
                    : 0
                }
                max={100}
                className="w-full h-[3px] rounded bg-gray-600 [&::-webkit-progress-bar]:bg-gray-600 [&::-webkit-progress-value]:bg-white"
              />
            ))}
          </div>

          {/* User Info & Close */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <img
                src={story.imageSrc}
                alt={story.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="text-white text-sm font-semibold">{story.name}</p>
            </div>
            <div className="flex items-center gap-3">
              {paused ? (
                <TbPlayerPlay
                  className="text-white cursor-pointer"
                  onClick={togglePause}
                />
              ) : (
                <TbPlayerPause
                  className="text-white cursor-pointer"
                  onClick={togglePause}
                />
              )}
              <StoryPopover />
              <X
                onClick={onClose}
                className="text-white w-6 h-6 cursor-pointer"
              />
            </div>
          </div>

          {/* Media */}
          <div className="flex-1 flex items-center justify-center overflow-hidden mb-4">
            {current.type === "image" ? (
              <img
                src={current.src}
                alt={story.name}
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              <video
                src={current.src}
                controls
                playsInline
                onEnded={handleNext}
                className="w-full h-full object-cover rounded-md"
              />
            )}
          </div>

          {/* Bottom Actions */}
          <div className="flex justify-between items-center border-t border-white/10 pt-3">
            <input
              type="text"
              placeholder="Send Message"
              className="flex-1 mr-3 h-9 bg-transparent border border-white/30 outline-none text-white px-3 rounded-full text-sm placeholder-white/60"
            />
            <div className="flex gap-3">
              <Heart
                className={`w-5 h-5 cursor-pointer ${
                  liked ? "fill-red-500 text-red-500" : "fill-none text-white"
                }`}
                onClick={toggleLike}
              />
              <Send
                className="text-white w-5 h-5 cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>
        </div>

        {/* Left Arrow — Go to previous USER story */}
        {hasPrevUserStory && (
          <button
            onClick={() => {
              if (onPrevUserStory) {
                onPrevUserStory();
              }
            }}
            className="max-md:hidden absolute left-[400px] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition"
            aria-label="Previous User Story"
          >
            <ArrowLeftCircle className="w-6 h-6" />
          </button>
        )}

        {hasNextUserStory && (
          <button
            onClick={() => {
              if (onNextUserStory) {
                onNextUserStory();
              }
            }}
            className="max-md:hidden absolute right-[400px] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition"
            aria-label="Next User Story"
          >
            <ArrowRightCircle className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* SLIDE-UP PANEL */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-50 bg-black/50 h-screen"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Modal */}
          <div
            className="
      xl:h-[470px]
        fixed z-50
        bottom-0 left-0 right-0
        bg-white dark:dark-color
        rounded-t-xl shadow-lg
        md:inset-0 md:m-auto md:max-w-md md:rounded-xl md:shadow-2xl md:h-auto
      "
          >
            {/* Drag handle for mobile */}
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto my-2 md:hidden" />

            {/* Search */}
            <div className="px-4 pb-2 ">
              <input
                type="text"
                placeholder="Search for People"
                className="dark:dark-color w-full h-10 mt-2 border border-gray-300 rounded-full px-4 py-2 text-sm"
              />
            </div>

            {/* User list */}
            <ul className="max-h-80 overflow-y-auto  scrollbar-hide px-4">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="flex items-center justify-between py-3 border-b"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={user.img}
                      alt={user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <span>{user.name}</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => toggleSelectUser(user.id)}
                    className="w-4 h-4 appearance-none border border-gray-400 rounded-sm bg-white checked:bg-gradient-to-r checked:from-blue-500 checked:to-purple-500 checked:border-none"
                  />
                </li>
              ))}
            </ul>

            {/* Footer */}
            {selectedUsers.length === 0 ? (
              <div className="flex gap-6 overflow-x-auto px-4 py-4 border-t border-gray-400 shadow-xl">
                {/* Share buttons here */}
              </div>
            ) : (
              <div className="w-full px-4 py-4 border-t">
                <button className="w-full h-12 bg-blue-800 text-white text-center rounded-xl">
                  Send
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default StoryModal;
