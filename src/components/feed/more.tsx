import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [showMorePopover, setShowMorePopover] = useState(false);
  const [showCreatePopover, setShowCreatePopover] = useState(false);
  const moreRef = useRef(null);
  const createRef = useRef(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      moreRef.current && !moreRef.current.contains(e.target as Node) &&
      createRef.current && !createRef.current.contains(e.target as Node)
    ) {
      setShowMorePopover(false);
      setShowCreatePopover(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClass = (path: string) =>
    `${location.pathname === path ? "text-blue-700 font-bold" : "text-neutral-500"}`;

  const profileClass = (path: string) =>
    `${location.pathname === path ? "text-black-900 font-bold" : "text-neutral-500"}`;

  return (
    <div className="bg-white fixed flex min-h-[982px] font-normal max-w-[245px] xl:w-full lg:w-[80%] md:[40%] pr-px">
      <div className="bg-white flex min-w-60 w-[244px] flex-col items-stretch pt-[50px] px-3 border-solid border-r-2 border-[#f3f2fa]">
        <div className="text-[rgba(5,5,5,1)] text-[22px] md:font-semibold uppercase ml-2.5 w-[124px] h-[28px] font-sans tracking-[3px] font-medium">
          Bizlaxy
        </div>

        <div className="z-10 w-[220px] h-[608px] mt-8 max-md:mt-[8px] ml-2">
          <div className="w-full max-w-[220px] max-h-[496px] h-auto text-[16px] whitespace-nowrap rounded-3xl sidebar-text">
            {/* existing sidebar links here... */}

            {/* CREATE POPOVER */}
            <div ref={createRef} className="relative">
              <div
                className="flex w-full leading-[1.6] pl-3 pb-3 pt-3 pr-[112px] rounded-3xl max-md:pr-5 cursor-pointer"
                onClick={() => {
                  setShowCreatePopover(!showCreatePopover);
                  setShowMorePopover(false);
                }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/c293cbaba4e54351666fe2231928139d3ebcc7dc?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-6 shrink-0"
                />
                <div className="flex overflow-hidden pl-4">
                  <div className="hover:text-blue-700 font-medium overflow-hidden pr-0.5">
                    Create
                  </div>
                </div>
              </div>
              {showCreatePopover && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-white shadow-lg rounded-md w-40 p-2 z-50">
                  <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">Post</button>
                  <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">Story</button>
                  <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">Reel</button>
                </div>
              )}
            </div>

            {/* PROFILE LINK */}
            <Link to="/profile" className={profileClass("/profile")}>...</Link>

            {/* MORE POPOVER */}
            <div ref={moreRef} className="relative">
              <div
                className="flex w-full text-sm whitespace-nowrap leading-6 pl-3 pb-3 pt-3 pr-[70px] rounded-3xl max-md:pr-5 cursor-pointer"
                onClick={() => {
                  setShowMorePopover(!showMorePopover);
                  setShowCreatePopover(false);
                }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/3c6978c80d010158ee48a627d513e225bb92bf06?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-6 shrink-0"
                />
                <div className="flex pl-4">
                  <div className="hover:text-blue-700 font-medium overflow-hidden pr-px">More</div>
                </div>
              </div>
              {showMorePopover && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-white shadow-lg rounded-md w-40 p-2 z-50">
                  <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">Settings</button>
                  <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">Help</button>
                  <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">Logout</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
