import React, { useEffect, useRef, useState } from "react";
import { UserAvatar } from "../ui/UserAvatar";
import { FollowButton, FollowButtonCard } from "../ui/FollowButton";
// import FollowButton from "@/components/ui/FollowButton";
import { SearchIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

type User = { username: string; avatar: string };
// const searchables: User[] = [
//   /* your users */
// ];

export function RightSidebar() {
  const searchables = [
    {
      username: "MayaCreates",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/7345a8532057b754287bb824f71612da4b4c4ae8?placeholderIfAbsent=true",
      followedBy: "chirag_singla17",
    },
    {
      username: "JadenLearns",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/ed958142a456b9ce0f762c8bc0124207bf905fe4?placeholderIfAbsent=true",
      followedBy: "chirag_singla17",
    },
    {
      username: "SophieInvests",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/99fe2150dc124eb86d639f275ffc619b429aea39?placeholderIfAbsent=true",
      followsYou: true,
    },
    {
      username: "Riya.Builds",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/6fa4bd40ca41e8fe266dc19430980767ca123b8c?placeholderIfAbsent=true",
      followsYou: true,
    },
  ];
  const suggestions = [
    {
      username: "AlexVentureX",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/919c5bbbf5f5e1e77a95971dd94c4d8d3126d1a0?placeholderIfAbsent=true",
      followsYou: true,
    },
    {
      username: "MayaCreates",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/7345a8532057b754287bb824f71612da4b4c4ae8?placeholderIfAbsent=true",
      followedBy: "chirag_singla17",
    },
    {
      username: "JadenLearns",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/ed958142a456b9ce0f762c8bc0124207bf905fe4?placeholderIfAbsent=true",
      followedBy: "chirag_singla17",
    },
    {
      username: "SophieInvests",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/99fe2150dc124eb86d639f275ffc619b429aea39?placeholderIfAbsent=true",
      followsYou: true,
    },
   
  ];

  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const recommendedScrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
   const [showLeftArrow, setShowLeftArrow] = useState(false);
const [showRightArrow, setShowRightArrow] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [recommended, setRecommended] = useState([
    {
      id:1,
      name: "NebuloTech",
      role: "Investor",
       profile: "  /investerprofile",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/dedfa53dcf0b27896852b3e4617af3cfe52b12a1?placeholderIfAbsent=true",
    },
    {
        id:2,
      name: "Aarav Mehta",
      role: "Investor",
      profile: "/profile",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/72e44816435fc8367dbf89a3696574c30b417c68?placeholderIfAbsent=true",
    },
    {
        id:3,
      name: "NebuloTech",
      role: "Investor",
         profile: "  /investerprofile",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/dedfa53dcf0b27896852b3e4617af3cfe52b12a1?placeholderIfAbsent=true",
    },
    {
        id:4,
      name: "Aarav Mehta",
      role: "Investor",
      profile: "/profile",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/72e44816435fc8367dbf89a3696574c30b417c68?placeholderIfAbsent=true",
    },
    {
        id:5,
      name: "NebuloTech",
      role: "Investor",
      profile: "  /investerprofile",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/dedfa53dcf0b27896852b3e4617af3cfe52b12a1?placeholderIfAbsent=true",
    },
    {
      name: "Aarav Mehta",
      role: "Investor",
      profile: "/profile",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/72e44816435fc8367dbf89a3696574c30b417c68?placeholderIfAbsent=true",
    },
  ]);
 



useEffect(() => {
  const checkArrows = () => {
    const scrollEl = recommendedScrollRef.current;
    if (scrollEl) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollEl;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scrollEl = recommendedScrollRef.current;
  if (scrollEl) {
    scrollEl.addEventListener("scroll", checkArrows);
    checkArrows(); // Initial
  }

  return () => {
    if (scrollEl) scrollEl.removeEventListener("scroll", checkArrows);
  };
}, [recommendedScrollRef]);


  const HandleRemoveProfile = (indexToRemove) => {
    setRecommended((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  // const handleMouseDown = (e) => {
  //   setIsDragging(true);
  //   setStartX(e.pageX - recommendedScrollRef.current.offsetLeft);
  //   setScrollLeft(recommendedScrollRef.current.scrollLeft);
  // };

  // const handleMouseLeave = () => {
  //   setIsDragging(false);
  // };

  // const handleMouseUp = () => {
  //   setIsDragging(false);
  // };

  // const handleMouseMove = (e) => {
  //   if (!isDragging) return;
  //   e.preventDefault();
  //   const x = e.pageX - recommendedScrollRef.current.offsetLeft;
  //   const walk = (x - startX) * 2;
  //   recommendedScrollRef.current.scrollLeft = scrollLeft - walk;
  // };

  const filtered = query
    ? searchables.filter((u) =>
        u.username.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const [isFollowing, setIsFollowing] = useState(false);
  const handleFollowToggle = () => setIsFollowing(!isFollowing);

    const handleRemove = (id: number) => {
    setRecommended(recommended.filter((profile) => profile.id !== id));
  };


  return (
    <>
      <div className="max-md:hidden bg-white fixed overflow-hidden flex w-[300px] h-[982px] flex-col items-stretch border-[rgb(28, 75, 196, 100)] border-l">
        <div className="dark:dark-color overflow-hidden dark:text-white fixed w-[370px] h-screen scrollbar-hide bg-white flex flex-col items-stretch px-3">
          <div
            style={{ position: "relative", width: 300 }}
            className="mt-3 dark:dark-color grid w-[370px] h-[40px] cursor-default grid-cols-1 bg-white text-left rounded-3xl border-[2px] border-solid border-gradient font-normal outline-white focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          >
            <div className="flex flex-row items-center ">
              <SearchIcon className="text-gray-400 ml-2 w-5 h-5" />
              <input
                type="text"
                placeholder="Search users..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
                className="w-[95%] h-full bg-transparent outline-none"
              />
            </div>
            {filtered.length > 0 && (
              <ul
                style={{
                  position: "absolute",
                  top: 38,
                  left: 0,
                  right: 0,

                  listStyle: "none",
                  margin: 0,
                  marginTop: 5,

                  maxHeight: 200,
                  overflowY: "auto",
                  zIndex: 10,
                }}
                className="dark:dark-color py-1  bg-white text-black border border-[#a89bfc] rounded-xl shadow-lg"
              >
                {filtered.map((user) => (
                  <li
                    key={user.username}
                    onClick={() => {
                      navigate(`/profile/${user.username}`);
                      //  navigate("/investerprofile");
                      setQuery("");
                    }}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    className="dark:dark-color  gap-3 px-6 py-1"
                  >
                    <div className="">
                      <img
                        src={user.avatar}
                        alt=""
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          marginRight: 0,
                        }}
                      />
                    </div>
                    <div className="overflow-hidden flex flex-col gap-1 justify-center text-sm text-left font-normal leading-none">
                      {user.username}
                      <p className="text-gray-400 text-[10px]">
                        {user.followsYou
                          ? "Follows you"
                          : `Followed by ${user.followedBy}`}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex items-stretch whitespace-nowrap w-[370px] h-[56px]  mt-3">
            <div className="w-full h-full flex items-center text-sm text-[rgba(5,5,5,1)] font-bold tracking-[-0.14px] grow shrink basis-auto">
              <Link to="/profile">
                <div className="w-[56px] h-[56px] cursor-pointer border rounded-full">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/8e190579b007ca56ec01ed9bd9da85e43500ed52?placeholderIfAbsent=true"
                    className="object-cover w-[56px] h-[56px] rounded-full"
                  />
                </div>
              </Link>
              <div className="w-[260px] flex justify-between my-auto">
                <div className="flex w-[190px] items-center overflow-hidden pl-2">
                  <div className="dark:text-white self-stretch font-semibold text-sm overflow-hidden my-auto">
                    mike_invests
                  </div>
                </div>
                <div className="text-[#1C4BC4] text-center text-[11px] font-semibold leading-none my-auto">
                  {/* Switch */}
                </div>
              </div>
            </div>
          </div>

          <div className="dark:dark-color bg-white w-[370px] h-[289px] mt-4 max-md:ml-[5px] ">
            <div className=" dark:dark-color flex items-center w-[320px] h-[18px] justify-between">
              <div className="dark:dark-color text-[#050505] text-base font-bold">
                Suggestions for you
              </div>
              {/* <div className="text-[#1C4BC4] text-sm font-medium">See All</div> */}
            </div>

       <div className="flex w-full overflow-hidden mt-[9px]">
  <div className="w-[320px] h-[250px] py-2 overflow-y-auto">
    {suggestions.map((suggestion, index) => (
      <Link
        key={index}
        to={"/profile"}

        // to={`/profile/${suggestion.username}`}
        className={`flex w-[320px] h-[44px] items-stretch gap-[8px] 
          ${index > 0 ? "mt-4" : ""} hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition`}
      >
        <img
          src={suggestion.avatar}
          alt={suggestion.username}
          className="object-contain w-[37px] shrink-0 my-auto"
        />
        <div className="flex justify-between w-full items-center">
          <div className="flex flex-col items-stretch">
            <div className="dark:dark-color text-neutral-800 dark:text-white text-sm font-semibold leading-none w-[110px]">
              {suggestion.username}
            </div>
            <div className="overflow-hidden py-2 text-left text-[11px] text-gray-400 font-normal leading-none">
              {suggestion.followsYou
                ? "Follows you"
                : `Followed by ${suggestion.followedBy}`}
            </div>
          </div>
          <div
            className="dark:dark-color text-center cursor-pointer text-xs font-medium leading-none my-auto"
            onClick={(e) => e.stopPropagation()} // Prevents click bubbling
          >
            <FollowButton />
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>
          </div>

        <div
      className="relative w-[320px] h-[231px] max-md:mx-[5px]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Header */}
      <div className="dark:dark-color flex w-full h-[25px] items-center justify-between">
        <div className="dark:dark-color text-[#050505] text-lg font-bold">
          Recommended for You
        </div>
        <div className="text-[#1C4BC4] text-sm font-medium">{/* See all */}</div>
      </div>

      {/* Left Arrow */}
      {isHovering && showLeftArrow && (
        <button
          onClick={() =>
            recommendedScrollRef.current.scrollBy({ left: -200, behavior: "smooth" })
          }
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
        >
          <SlArrowLeft />
        </button>
      )}

      {/* Right Arrow */}
      {isHovering && showRightArrow && (
        <button
          onClick={() =>
            recommendedScrollRef.current.scrollBy({ left: 200, behavior: "smooth" })
          }
          className="absolute  right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
        >
          <SlArrowRight />
        </button>
      )}

      {/* Scrollable container */}
      <div
        ref={recommendedScrollRef}
        // onMouseDown={handleMouseDown}
        // onMouseLeave={handleMouseLeave}
        // onMouseUp={handleMouseUp}
        // onMouseMove={handleMouseMove}
        className={"flex w-full h-[190px] items-stretch gap-[9px] overflow-x-auto scrollbar-hide mt-4" 
        //   ${
        //   isDragging ? "cursor-grabbing" : "cursor-grab"
        // }`
        }
      >
     {recommended.map((profile) => (
        <div
          key={profile.id}
          className="relative dark:dark-color bg-white shadow-[0px_0px_4px_-1px_rgba(0,0,0,0.25)] border flex flex-col flex-1 w-[135px] h-[164px] px-3 py-2 rounded-[10px] border-[rgba(220,220,220,1)] border-solid"
        >
          <button
            onClick={() => handleRemove(profile.id)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          >
            &#10005;
          </button>

          <div className="flex gap-4 ml-3 max-md:ml-2.5">
            <a href={profile.profile} className="cursor-pointer text-white">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-14 h-14 rounded-full mt-[7px] ml-4"
              />
            </a>
          </div>

          <div className="flex min-h-[35px] flex-col items-center whitespace-nowrap text-center justify-center mt-1.5">
            <div className="dark:text-white text-[#050505] text-[13px] font-medium">
              {profile.name}
            </div>
            <div className="dark:text-gray-300 text-[#707070] text-[10px] font-normal">
              {profile.role}
            </div>
          </div>

          <div className="cursor-pointer btn-gradient text-white self-stretch min-h-7 w-[114px] h-[27px] pt-1 mt-[4px] text-center rounded-[5px] ">
            Follow
          </div>
        </div>
      ))}
      </div>
    </div>
        </div>
      </div>
    </>
  );
}
