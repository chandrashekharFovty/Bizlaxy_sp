import { Input, Transition } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import {
  FaThumbsUp,
  FaComment,
  FaShare,
  FaExpand,
  FaRegComment,
  FaRegThumbsUp,
  FaWhatsapp,
} from "react-icons/fa";
import { Ellipsis, ExpandIcon } from "lucide-react";
import { Item } from "@radix-ui/react-accordion";
import { FiSend } from "react-icons/fi";
import { FollowButton, FollowButtonCard } from "../ui/FollowButton";
import { IoMdMore } from "react-icons/io";
import { PiCheckCircleFill } from "react-icons/pi";
import { MdOutlineInsertLink } from "react-icons/md";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsChatDots } from "react-icons/bs";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { HiMiniArrowTurnUpRight } from "react-icons/hi2";

type Reply = {
  replyId: number;
  replyText: string;
  likes: number;
  replies: Reply[];
};

type Comment = {
  id: number;
  text: string;
  likes: number;
  replies: Reply[];
};

type MediaItem = {
  id: number;
  type: "video" | "image" | "youtube";
  src: string;
  profile: string;
  description: string;
  likes: number;
  comments: Comment[];

  shares: number;
  user: {
    name: string;
    isVerified: boolean;
  };
};

const pitchMedia: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/pitch.png",
    profile: "/pitch.png",
    description:
      "⚡ We’re not waiting for the future—we’re creating it. Neoseland is building sustainable solutions that tackle tomorrow’s problems, starting right now.We’re not waiting for the future—we’re creating it. [Your Startup] is building sustainable solutions that tackle tomorrow’s problems, starting right now.",
    likes: 3000,
    comments: [
      {
        id: 1,
        text: "First comment!",
        likes: 5,
        replies: [{ replyId: 11, replyText: "Nice!", likes: 2, replies: [] }],
      },
    ],
    shares: 50,
    user: { name: "Brian Turner", isVerified: true },
  },
  {
    id: 2,
    type: "image",
    src: "/pitch.png",
    profile: "/pitch.png",
    description:
      "🚀 Complex problems demand simple solutions. Our AI-driven framework abstracts away the noise, letting you focus on innovation—not integration.",
    likes: 2100,
    comments: [
      {
        id: 1,
        text: "First comment!",
        likes: 5,
        replies: [{ replyId: 11, replyText: "Nice!", likes: 2, replies: [] }],
      },
    ],
    shares: 20,
    user: { name: "Brian Turner", isVerified: false },
  },
  {
    id: 3,
    type: "youtube",
    src: "https://www.youtube.com/embed/IuxxSldSvYw",
    profile: "/pitch.png",
    description:
      "⚡ Our platform transforms visionary concepts into real-world impact. With cutting-edge tech and market-first features, we empower startups to leap high—and fast.",
    likes: 5000,
    comments: [
      {
        id: 1,
        text: "First comment!",
        likes: 5,
        replies: [{ replyId: 11, replyText: "Nice!", likes: 2, replies: [] }],
      },
    ],
    shares: 60,
    user: { name: "Brian Turner", isVerified: true },
  },
  {
    id: 4,
    type: "image",
    src: "/pitch.png",
    profile: "/pitch.png",
    description:
      "🌿 We’re not waiting for the future—we’re creating it. [Your Startup] is building sustainable solutions that tackle tomorrow’s problems, starting right now.",
    likes: 1500,
    comments: [
      {
        id: 1,
        text: "First comment!",
        likes: 5,
        replies: [{ replyId: 11, replyText: "Nice!", likes: 2, replies: [] }],
      },
    ],
    shares: 25,
    user: { name: "Brian Turner", isVerified: false },
  },
];

export default function MainContent() {
  const [mediaList, setMediaList] = useState<MediaItem[]>(pitchMedia);
  const [openIndex, setOpenIndex] = useState(null);
  const [openReplyIndex, setOpenReplyIndex] = useState(null);
  const [commentInput, setCommentInput] = useState("");
  const [commentReplyInput, setCommentReplyInput] = useState("");
  // const [likedIds, setLikedIds] = useState([]);
  const [likedIds, setLikedIds] = useState<number[]>([]);
  const [animatingLikeIdx, setAnimatingLikeIdx] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [showMoreOptions, setShowMoreOptions] = useState(null);
  const [report, setReport] = useState(false);
  const [block, setBlock] = useState(false);
    const [isShareOpen, setIsShareOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
   const [selectedUsers, setSelectedUsers] = useState([]);
   const scrollRef = useRef(null);
     const [isHovering, setIsHovering] = useState(false);
     const [showLeftArrow, setShowLeftArrow] = useState(false);
     const [showRightArrow, setShowRightArrow] = useState(true);
   
     // Update arrow visibility
     const updateArrows = () => {
       const el = scrollRef.current;
       if (el) {
         setShowLeftArrow(el.scrollLeft > 0);
         setShowRightArrow(el.scrollLeft + el.clientWidth < el.scrollWidth);
       }
     };
   
     useEffect(() => {
       const el = scrollRef.current;
       if (!el) return;
       updateArrows();
       el.addEventListener("scroll", updateArrows);
       return () => el.removeEventListener("scroll", updateArrows);
     }, []);
   
   

  
  const handleSearch = (e) => {
      setSearchTerm(e.target.value);
      setFilteredUsers(users.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase())));
    };
    const users = [
    { id: 1, name: "imkr", title: "Follows you", img: "/Hide.jpg" },
    {
      id: 2,
      name: "organic__ai",
      title: "Followed by xhingg_singh07",
      img: "/Hide1.jpg",
    },
    {
      id: 3,
      name: "im_gr",
      title: "Followed by xhingg_singh07",
      img: "/Hide2.jpg",
    },
    { id: 4, name: "abhi52", title: "Follows you", img: "/Hide3.jpg" },
    { id: 5, name: "soktri", title: "Follows you", img: "/Hide.jpg" },
    { id: 6, name: "imkr", title: "Follows you", img: "/Hide.jpg" },
    {
      id: 7,
      name: "organic__ai",
      title: "Followed by xhingg_singh07",
      img: "/Hide1.jpg",
    },
    {
      id: 8,
      name: "im_gr",
      title: "Followed by xhingg_singh07",
      img: "/Hide2.jpg",
    },
    { id: 9, name: "abhi52", title: "Follows you", img: "/Hide3.jpg" },
    { id: 10, name: "soktri", title: "Follows you", img: "/Hide.jpg" },
  ];


  const toggleLike = (id) => {
    setMediaList((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              likes: likedIds.includes(id) ? item.likes - 1 : item.likes + 1,
            }
          : item
      )
    );
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleDoubleClick = (id: number, idx: number) => {
    if (!likedIds.includes(id)) toggleLike(id);
    setAnimatingLikeIdx(idx);
    setTimeout(() => setAnimatingLikeIdx(null), 800);
  };

  const addComment = (id) => {
    if (!commentInput.trim()) return;
    setMediaList((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              comments: [
                ...item.comments,
                { id: 1, text: commentInput, likes: 0, replies: [] },
              ],
            }
          : item
      )
    );
    setCommentInput("");
  };
  const addCommentReply = (id) => {
    if (!commentInput.trim()) return;
    if (!commentReplyInput.trim()) return;
    // setMediaList((prev) =>
    //   prev.map((item) =>
    //     item.id === id
    //       ? {
    //           ...item,

    //           replies: [...item.comments, { likes: 0, commentsReply: "" }],
    //         }
    //       : item
    //   )
    // );
    // setCommentReplyInput("");
    setMediaList((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              comments: item.comments.map((c, i) =>
                i === i
                  ? {
                      ...c,
                      replies: [
                        ...(c.replies || []),
                        {
                          replyId: 1,
                          replyText: commentReplyInput,
                          likes: 0,
                          replies: [],
                        },
                      ],
                    }
                  : c
              ),
            }
          : item
      )
    );

    setCommentReplyInput("");
    setOpenReplyIndex(null); // hide input
  };
  const addReply = (mediaId: number, commentIdx: number) => {
    if (!commentInput.trim()) return;
    if (!commentReplyInput.trim()) return;

    setMediaList((prev) =>
      prev.map((item) =>
        item.id === mediaId
          ? {
              ...item,
              comments: item.comments.map((c, i) =>
                i === commentIdx
                  ? {
                      ...c,
                      replies: [
                        ...(c.replies || []),
                        {
                          replyId: 1,
                          replyText: commentReplyInput,
                          likes: 0,
                          replies: [],
                        },
                      ],
                    }
                  : c
              ),
            }
          : item
      )
    );

    setCommentReplyInput("");
    setOpenReplyIndex(null); // hide input
  };

  const handleVideoToggle = (idx) => {
    const video = document.getElementById(
      `video-${idx}`
    ) as HTMLVideoElement | null;
    if (video && video.paused) {
      video.play();
      setActiveVideo(idx);
    } else if (video) {
      video.pause();
      setActiveVideo(null);
    }
  };


   function formatNumber(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  }

  return (
    <div className="dark:dark-color snap-y snap-mandatory max-md:w-screen h-[95vh] max-md:my-0 my-5 rounded-xl max-md:rounded-none w-[440px] overflow-y-scroll scrollbar-hide">
      {mediaList.map((media, idx) => {
        const liked = likedIds.includes(media.id);
        const isAnimating = animatingLikeIdx === idx;
        return (
          <div
            key={media.id}
            onDoubleClick={() => handleDoubleClick(media.id, idx)}
            className="snap-start mb-8 max-md:4 dark:bg-black h-screen max-md:w-screen max-md:h-[98vh] w-[440px] flex items-center justify-center relative text-white rounded-xl max-md:rounded-none"
          >
            {media.type === "image" ? (
              <img
                src={media.src}
                alt={media.user.name}
                className="absolute inset-0 w-full h-full object-cover rounded-xl max-md:rounded-none"
              />
            ) : (
              <video
                id={`video-${idx}`}
                src={media.src}
                autoPlay
                muted
                loop
                onClick={() => handleVideoToggle(idx)}
                className="absolute inset-0 w-full h-full object-cover cursor-pointer rounded-xl max-md:rounded-none"
              />
            )}
            <div className="absolute w-full px-5 flex justify-between items-center top-5 z-10">
              {/* Upper-SIDE BUTTON */}
              <div className="dark:text-white text-white cursor-pointer font-bold tracking-[0.8px] text-lg">
                Eduvid
              </div>
              {/* <div className="dark:text-white text-white cursor-pointer font-bold tracking-[0.8px] text-lg"><ExpandIcon/></div> */}
            </div>
            <div className="absolute w-full max-md:mb-5 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent py-2 px-5">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <Link to="/profile" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full cursor-pointer">
                      <img
                        src={media.profile}
                        alt={media.user.name}
                        className="w-full h-full rounded-full"
                      />
                    </div>
                    <span className="font-semibold cursor-pointer">
                      {media.user.name}
                    </span>
                  </Link>
                  {media.user.isVerified && (
                    <span className="text-blue-400 text-xs">
                      <img src="/whiteOfficialIcon.png" alt="✔️" />
                    </span>
                  )}
                  <FollowButtonCard  />
                </div>
              </div>
              <div className="mb-5 pb-5 pr-8">
                {/* <h3 className="text-lg font-bold text-white mb-1">
                  {media.title}
                </h3> */}
                <p className="text-sm text-gray-300 w-[350px] mb-2 line-clamp-3 max-h-16 overflow-y-auto scrollbar-hide">
                  {media.description}
                </p>
                {/* <Link to="/pitch-details" className="flex justify-center">
                  <button className="bg-purple-800 max-md:w-full rounded text-sm text-white text-center py-2 px-5">
                    More Details
                  </button>
                </Link> */}
              </div>
            </div>
            {/* CENTER ANIMATED THUMB */}
            {isAnimating && (
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ animation: "like-pop 1s ease-out forwards" }}
              >
                <FaThumbsUp size={120} className="text-white drop-shadow-lg" />
              </div>
            )}


           <div className="absolute flex flex-col right-4 top-3/4 mt-12 max-md:pb-20 -translate-y-3/4 space-y-4 z-10">
       {/* LIKE BUTTON */}
       <div
         onClick={() => toggleLike(media.id)}
         className="cursor-pointer flex flex-col items-center"
       >
      <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center mb-2">
       {liked ? (
          <FaThumbsUp className="w-5 h-5 text-white" />
       
       ) : (
         <img src="/LikePitch.png" alt="Like" className="w-5 h-5" />
       )}
     </div>
     
         <p className="text-center text-sm text-white">
           {formatNumber(media.likes)}
         </p>
       </div>
     
       {/* COMMENT BUTTON */}
       <div
         onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
         className="cursor-pointer flex flex-col items-center"
       >
         <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center">
           <img
             src="/CommentsPitch.png"
             alt="Comment"
             className="w-5 h-5"
           />
         </div>
         <p className="text-center text-sm text-white">
           {formatNumber(media.comments.length)}
         </p>
       </div>
     
       {/* SHARE BUTTON */}
       <div
          onClick={() => setIsShareOpen(true)}
         className="cursor-pointer flex flex-col items-center"
       >
           <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center">
           <img
             src="/SendPitch.png"
             alt="Share"
             className="w-5 h-5"
           />

       </div>
       
      </div>
       {/* MORE OPTIONS BUTTON */}
       <div
         onClick={() => setShowMoreOptions(idx)}
         className="cursor-pointer flex flex-col items-center"
       >
         <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center mb-2">
         <IoMdMore
             className="text-xl"
           />
         </div>
       </div>
     </div>
            {/* Moving pitch card when tray opens */}
            <div
              className={`absolute inset-0 transition-transform duration-1000 ease-out ${
                openIndex === idx ? "-translate-x-80" : "translate-x-0"
              }`}
            />
            {/* Comment tray */}
            <Transition
              show={openIndex === idx}
              enter="transition ease-out duration-1000 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-[60%] max-md:translate-x-0"
              leave="transition ease-in duration-1000 transform"
              leaveFrom="translate-x-[60%] max-md:translate-x-0"
              leaveTo="translate-x-full"
            >
              <aside className="fixed right-0 top-0 h-full w-full max-w-[440px] text-black z-50 overflow-y-auto">
                <div className="fixed inset-0 p-4 max-w-[440px] left-[62%] max-md:left-0 max-md:right-0 max-md:top-[25%] z-50 bg-opacity-50 flex items-center">
                  <div className="bg-white dark:bg-gray-800 mx-auto dark:text-white rounded-xl shadow-lg w-full h-full max-w-md p-6 relative">
                    {" "}
                    {/* Close Button */}
                    <button
                      onClick={() => setOpenIndex(null)}
                      className="absolute top-2 right-2 text-black dark:text-white"
                    >
                      ✕
                    </button>
                    <h3 className="text-lg font-semibold mb-4">Comments</h3>
                    {/* Comment Input */}
                    <div className="relative mb-4">
                      <input
                        type="text"
                        placeholder="Add a comment..."
                        value={commentInput}
                        onChange={(e) => setCommentInput(e.target.value)}
                        className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                      />
                      {commentInput.trim() && (
                        <FiSend
                          onClick={() => addComment(media.id)}
                          className="absolute top-1/2 right-3 -translate-y-1/2 text-blue-600 cursor-pointer text-xl hover:scale-110 transition"
                        />
                      )}
                    </div>
                    {/* Comment List */}
                    <div className="max-h-[80%] scrollbar-hide overflow-y-auto space-y-2 bg-gray-100 dark:bg-gray-700 dark:text-white">
                      {media.comments.length === 0 ? (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          No comments yet.
                        </p>
                      ) : (
                        media.comments.map((comm, idx) => (
                          <div
                            key={idx}
                            className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-md text-sm"
                          >
                            <p className="text-sm">
                              <span className="font-semibold mr-2">
                                {media.user.name} :
                              </span>
                              {comm.text}
                            </p>
                            <div className="flex text-xs gap-4 mt-1 text-gray-500">
                              <button>
                                <div
                                  onClick={() => toggleLike(media.id)}
                                  className="cursor-pointer"
                                >
                                  {liked ? (
                                    <FaThumbsUp
                                      size={16}
                                      className="dark:text-white text-black  mb-2"
                                    />
                                  ) : (
                                    <FaRegThumbsUp
                                      size={16}
                                      className="dark:text-white text-black mb-2"
                                    />
                                  )}
                                  <p className="text-center text-[8px]">
                                    {media.likes}
                                  </p>
                                </div>
                              </button>
                              <button
                                onClick={() =>
                                  setOpenReplyIndex(
                                    openReplyIndex === idx ? null : idx
                                  )
                                }
                              >
                                {openReplyIndex === idx
                                  ? "Hide replies"
                                  : "Reply"}
                              </button>

                              {/* Comment Reply Box */}
                              <Transition
                                show={openReplyIndex === idx}
                                enter="transition-opacity duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <div className="max-h-full overflow-y-auto space-y-2">
                                  {media.comments.length === 0 ? (
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                      No Replies yet.
                                    </p>
                                  ) : (
                                    media.comments.map((reply, idx) => (
                                      <div
                                        key={idx}
                                        className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-md text-sm"
                                      >
                                        <p className="text-sm">
                                          <span className="font-semibold mr-2">
                                            {media.user.name} :
                                          </span>
                                          {reply.text}
                                        </p>
                                        <div className="relative mb-4">
                                          {/* Comment Reply Input */}
                                          <input
                                            type="text"
                                            placeholder="Add a comment reply..."
                                            value={commentReplyInput}
                                            onChange={(e) =>
                                              setCommentReplyInput(
                                                e.target.value
                                              )
                                            }
                                            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                          />
                                          {commentReplyInput.trim() && (
                                            <FiSend
                                              onClick={() =>
                                                addCommentReply(reply.id)
                                              }
                                              className="absolute top-1/2 right-3 -translate-y-1/2 text-blue-600 cursor-pointer text-xl hover:scale-110 transition"
                                            />
                                          )}
                                        </div>
                                      </div>
                                    ))
                                  )}
                                </div>
                              </Transition>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </aside>
            </Transition>

            {/* More Options Dialog */}
            <Dialog
              open={showMoreOptions === idx}
              onClose={() => setShowMoreOptions(null)}
            >
              <Dialog.Panel className="fixed max-md:w-full max-md:rounded-none max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:top-3/4 w-80 h-40 rounded-xl bottom-1/2 top-1/3 right-1/3 left-1/3 bg-white p-4 z-50 shadow-md">
                <button
                  className="block w-full py-2 text-left text-red-600 "
                  onClick={() => {
                    setReport(true);
                  }}
                >
                  {report ? "you reported this profile" : "Report"}
                </button>
                <button
                  className="block w-full py-2 text-left"
                  onClick={() => {
                    setBlock(true);
                  }}
                >
                  {block ? "Blocked" : "Block"}
                </button>
                <button className="block w-full py-2 text-left">
                  <Link to="/profile">View Profile</Link>
                </button>
              </Dialog.Panel>
            </Dialog>





    {isShareOpen && (
      <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center">
        <div className="w-full max-w-md rounded-xl bg-white dark:bg-gray-800 dark:border dark:border-white p-6 relative">
          {/* Close Button */}
          <button
            onClick={() => setIsShareOpen(false)}
            className="absolute top-4 right-4 text-2xl text-black dark:text-white"
          >
            ×
          </button>
    
          <h2 className="text-lg text-center text-black dark:text-white font-bold mb-4">
            Share Eduvid To
          </h2>
    
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search Users"
            // value={searchTerm}
            onChange={handleSearch}
            className="text-black w-full mb-4 px-4 py-2 rounded-xl border border-gray-300 bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none"
          />
    
          {/* Scrollable Horizontal Users */}
          <div className="relative mb-4">
       <div className="grid grid-cols-3 gap-4 overflow-y-auto max-h-72 pb-2 scrollbar-hide">
              {filteredUsers.map((user) => {
                const isSelected = selectedUsers.includes(user.id);
                return (
                  <div
                    key={user.id}
                    onClick={() =>
                      setSelectedUsers((prev) =>
                        prev.includes(user.id)
                          ? prev.filter((id) => id !== user.id)
                          : [...prev, user.id]
                      )
                    }
                    className={`min-w-[100px] flex-shrink-0 text-center rounded-xl p-2 border ${
                      isSelected ? "bg-gray-200" : ""
                    } cursor-pointer relative`}
                  >
                    <div className="relative w-16 h-16 mx-auto">
                      <img
                        src={user.img}
                        alt={user.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                      />
                      {isSelected && (
                        <PiCheckCircleFill className="absolute bottom-0 right-0 text-blue-600 text-lg bg-white rounded-full" />
                      )}
                    </div>
                    <p className="mt-1 text-sm font-medium text-gray-800 dark:text-white">
                      {user.name}
                    </p>
                    {user.verified && (
                      <span className="text-blue-500 text-xs">✔</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
    
          {/* Conditional Message and Send OR Social Buttons */}
          {selectedUsers.length > 0 ? (
            <div  className="w-full mt-4 p-2 rounded-xl border border-gray-200 bg-white dark:bg-gray-700 dark:text-white focus:outline-none"
             >
              {/* Message Field */}
              <input
                type="text"
                placeholder="Write a message..." 
            className="w-full h-full focus:outline-none text-black"
    
                />
    
              {/* Send Button */}
              <button
                onClick={() => {
                  // your send logic here
                  setIsShareOpen(false);
                }}
                className="w-full mt-4 py-2 rounded-full text-white font-semibold bg-blue-600"
              >
                Send
              </button>
            </div>
          ) : (
            // Social Share Buttons
         <div
              className="relative mt-4"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Scrollable Social Buttons */}
              <div
                ref={scrollRef}
                className="overflow-x-auto h-full scrollbar-hide flex space-x-6 px-2"
              >
                {[
                  { icon: <MdOutlineInsertLink />, label: "Copy Link" },
                  { icon: <RiFacebookCircleLine />, label: "Facebook" },
                  { icon: <BsChatDots />, label: "Messenger" },
                  { icon: <FaWhatsapp />, label: "WhatsApp" },
                  { icon: <FaThreads />, label: "Threads" },
                  { icon: <FaXTwitter/>, label: "X" },
                  { icon: <HiMiniArrowTurnUpRight/>, label: "More" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center flex-shrink-0 w-16"
                  >
                    <button className="bg-gray-200 shadow text-black text-2xl rounded-full p-3">
                      {item.icon}
                    </button>
                    <span className="pt-1 text-black text-xs">{item.label}</span>
                  </div>
                ))}
              </div>
        
              {/* Left Arrow */}
              {isHovering && showLeftArrow && (
                <button
                  onClick={() =>
                    scrollRef.current.scrollBy({ left: -250, behavior: "smooth" })
                  }
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
                >
                  <SlArrowLeft/>
                </button>
              )}
        
              {/* Right Arrow */}
              {isHovering && showRightArrow && (
                <button
                  onClick={() =>
                    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" })
                  }
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
                >
                  <SlArrowRight />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    )}
          </div>
        );
      })}
    </div>
  );
}
