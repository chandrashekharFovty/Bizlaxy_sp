import React, { useRef, useState } from "react";
import { UserAvatar } from "../ui/UserAvatar";
import { FollowButton } from "../ui/FollowButton";

const recommended = [
  {
    name: "NebuloTech",
    role: "Investor",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/dedfa53dcf0b27896852b3e4617af3cfe52b12a1?placeholderIfAbsent=true",
  },
  {
    name: "Aarav Mehta",
    role: "Investor",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/72e44816435fc8367dbf89a3696574c30b417c68?placeholderIfAbsent=true",
  },
  {
    name: "NebuloTech",
    role: "Investor",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/dedfa53dcf0b27896852b3e4617af3cfe52b12a1?placeholderIfAbsent=true",
  },
  {
    name: "Aarav Mehta",
    role: "Investor",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/72e44816435fc8367dbf89a3696574c30b417c68?placeholderIfAbsent=true",
  },
  {
    name: "NebuloTech",
    role: "Investor",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/dedfa53dcf0b27896852b3e4617af3cfe52b12a1?placeholderIfAbsent=true",
  },
  {
    name: "Aarav Mehta",
    role: "Investor",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/72e44816435fc8367dbf89a3696574c30b417c68?placeholderIfAbsent=true",
  },
];
function Recommandetion() {
  const recommendedScrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - recommendedScrollRef.current.offsetLeft);
    setScrollLeft(recommendedScrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - recommendedScrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // speed factor
    recommendedScrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="lg:hidden max-md:w-screen ">
      <div className="w-[90%] h-[231px] max-md:h-[300px] mt-4 max-md:mx-[5px]">
        <div className="dark:dark-color flex w-full h-[25px] items-center justify-between">
          <div className=" dark:dark-color  text-[#050505] text-lg font-bold self-stretch">
            Recommended for You
          </div>
          
        </div>

        <div
          ref={recommendedScrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex w-full h-[190px] items-stretch gap-[9px] overflow-x-auto scrollbar-hide mt-4 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {recommended.map((profile, index) => (
            <div
              key={index}
              className="dark:dark-color bg-white shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] border flex flex-col flex-1 w-[135px] h-[184px] px-3 py-2  rounded-[10px] border-[rgba(220,220,220,1)] border-solid"
            >
              <div className="max-md:h-[200px] flex gap-4 ml-3 max-md:ml-2.5">
                <a href="/profile" className="cursor-pointer text-white">
                  <UserAvatar
                    src={profile.avatar}
                    size="lg"
                    className="mt-[7px]"
                  />
                </a>
                <img
                  src={
                    index === 0
                      ? "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/8a2332c653c73f0169c289d1385c98d7c25b92cb?placeholderIfAbsent=true"
                      : "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/42e5a7b14ba5994bef7d3db2325aba7edc120ad7?placeholderIfAbsent=true"
                  }
                  className="aspect-[1] object-contain w-2 h-2 shrink-0"
                />
              </div>
              <div className="flex min-h-[35px] flex-col items-center whitespace-nowrap text-center justify-center mt-1.5">
                <div className="dark:text-white text-[#050505] text-[13px] font-medium">
                  {profile.name}
                </div>
                <div className="dark:text-gray-300 text-[#707070] text-[10px] font-normal">
                  {profile.role}
                </div>
              </div>
              <div className="bg-gradient-to-r cursor-pointer from-blue-400 to-purple-400 text-white self-stretch min-h-7 w-[114px] h-[27px] mt-[4px] text-center rounded-[5px] ">
                <FollowButton />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recommandetion;
