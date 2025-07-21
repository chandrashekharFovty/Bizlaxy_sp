import React, { useEffect, useRef, useState } from "react";
import { UserAvatar } from "../ui/UserAvatar";
import { FollowButton } from "../ui/FollowButton";
import { CountBadge } from "../ui/CountBadge";
import officialIcon from "/Official Icon.png";
import SavePostBadge from "../ui/SavePostBadge";
import PostPopover, { PostModal } from "./PostPopover";
import { LuHeart } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { FaHeart, FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { HiDocument } from "react-icons/hi2";
import { CgFileDocument } from "react-icons/cg";
import * as Dialog from "@radix-ui/react-dialog";
import { Transition } from "@headlessui/react";

const images = ["/poster03.png", "/poster01.png", "/poster02.png"];
interface CommentReply {
  replyId: number;
  replyname:string;
  replyText: string;
  likes: number;
}

interface CommentItem {
  id: number;
  name:string;
  text: string;
  likes: number;
  replies: CommentReply[];
}

// Extend MediaItem to hold comments
interface CommentListItem {
  id: number;
  comments: CommentItem[];
}
interface PostProps {
  user: {
    name: string;
    avatar: string;
    timeAgo: string;
  };
  content: {
    title: string;
    titleLimit: number;
    description: string;
    descpLimit: number;
    isFileImage?: string;
    isFileVideo?: string;
    isFileDocument?: string;
    documentUrl?: string; // add this prop
    documentName?: string; // optional custom file name
  };
  engagement: {
    likes: string;
    shares: string;
  };
  showFollowButton?: boolean;
  showMoreOptions?: boolean;
  isLiked?: boolean;
  showOfficialIcon?: boolean;
  isMediaContent?: boolean;
  showComment?: boolean;
  onclose?: () => void;
  commentsList: CommentListItem[]; // Post media
}

export function Post({
  user,
  content,
  engagement,
  commentsList,
  showFollowButton = false,
  showMoreOptions = false,
  showOfficialIcon = false,
  isMediaContent = false,
  showComment = true,
}: PostProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [comment, setComment] = useState(parseInt(engagement.comments));
  const [shares, setShares] = useState(parseInt(engagement.shares));
  // const [likes, setLikes] = useState(parseInt(engagement.likes));
  // const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState<number>(parseInt(engagement.likes));
  const [isLiked, setIsLiked] = useState<boolean>(false);
  //const [showComment, setShowComment] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [postComment, setPostComment] = useState<string[]>([]);
  const [showShareUsers, setShowShareUsers] = useState(false);
  const [sharedUsers, setSharedUsers] = useState<string[]>([]);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(" ");
  const [commentList, setCommentList] = useState<CommentListItem[]>(() => [
    ...(Array.isArray(commentsList) ? commentsList : []),
  ]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openReplyIndex, setOpenReplyIndex] = useState<number | null>(null);
  const [commentInput, setCommentInput] = useState("");
  const [commentReplyInput, setCommentReplyInput] = useState("");

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

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleShare = () => setIsShareOpen(true);

  const handleLike = () => {
    if (!isLiked) {
      setLikes((prev) => prev + 1);
      setIsLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setIsLiked(false);
    }
  };

  const handleFollowToggle = () => setIsFollowing(!isFollowing);
  const addComment = (mediaId: number) => {
    if (!commentInput.trim()) return;
    setCommentList((prev) =>
      prev.map((item) =>
        item.id === mediaId
          ? {
              ...item,
              comments: [
                ...item.comments,
                {
                  id: Date.now(),
                  name:"",
                  text: commentInput.trim(),
                  likes: 0,
                  replies: [],
                },
              ],
            }
          : item
      )
    );
    setCommentInput("");
  };

  const addCommentReply = (mediaId: number, commentId: number) => {
    if (!commentReplyInput.trim()) return;
    setCommentList((prev) =>
      prev.map((item) =>
        item.id === mediaId
          ? {
              ...item,
              comments: item.comments.map((c) =>
                c.id === commentId
                  ? {
                      ...c,
                      replies: [
                        ...c.replies,
                        {
                          replyId: Date.now(),
                          replyname:"",
                          replyText: commentReplyInput.trim(),
                          likes: 0,
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
    setOpenReplyIndex(null);
  };
  //const handleComment = () => setShowComment((prev) => !prev);
  // const handleShare = () => {
  //   setShares((prev) => prev + 1);
  //   setSharedUsers((prev) => [...prev, user.name]);
  //   setShowShareUsers(true);
  // };

  // const handleCommentSend = () => {
  //   if (commentText.trim() !== "") {
  //     setPostComment((prev) => [...prev, commentText.trim()]);
  //     setComment((prev) => prev + 1);
  //     setCommentText("");
  //   }
  // };

  const handleDoubleClick = () => {
    const heart = heartRef.current;
    heart.classList.remove("scale-0", "opacity-0");
    heart.classList.add("scale-[1000%]", "opacity-100");

    setTimeout(() => {
      heart.classList.remove("scale-500");
      heart.classList.add("scale-0");
    }, 3000);

    setTimeout(() => {
      heart.classList.remove("opacity-100");
      heart.classList.add("opacity-0");
    }, 2000);
    handleLike();
  };

  const heartRef = useRef(null);

  const handleDownload = () => {
    if (!content.documentUrl) return;
    const link = document.createElement("a");
    link.href = content.documentUrl;
    link.download =
      content.documentName || content.documentUrl.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const truncatedDescription =
    content.description.length > content.descpLimit
      ? content.description.slice(0, content.descpLimit)
      : content.description;

  return (
    <>
      <div className="shadow-xl dark:shadow  dark:border dark:border-gray-300 dark:glass-bg-dark  max-md:w-screen max-md:mr-4 bg-white p-5 rounded-xl w-full relative z-10">
        <div className=" flex justify-between py-[7px]">
          <div className="max-md:w-11/12 flex gap-2">
            <UserAvatar src={user.avatar} />
            <div className="">
              <div className="flex items-center gap-2">
                <span className="max-md:text-xs dark:text-white font-medium text-base">
                  {user.name}
                </span>
                {showMoreOptions && (
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/9e55e48d50c24f504973bb6ca3fab7e2ea80bba0?placeholderIfAbsent=true"
                    className="w-5 max-md:w-4"
                  />
                )}
                {showOfficialIcon && (
                  <img src={officialIcon} className="w-3 h-3" />
                )}
                {showFollowButton && <FollowButton />}
              </div>
              <span className="dark:text-gray-400 text-xs text-gray-500">
                {user.timeAgo}
              </span>
            </div>
          </div>
          <div className="absolute max-md:w-1/12 dark:text-white top-4 right-4 z-10">
            <PostModal />
          </div>
        </div>

        <div className="text-sm mt-2.5 w-full">
          <div className="w-[660px]">
            <div className="max-md:text-sm max-md:w-72 font-semibold">
              {content.title}
            </div>
            <div className="max-md:text-xs max-md:w-72 dark:text-gray-500 text-[#464646] font-normal mt-2">
              {showFullDescription ? content.description : truncatedDescription}
              {content.description.length > content.descpLimit && (
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="dark:dark-color  text-[#1C4BC4] text-[12px] ml-1 hover:underline"
                >
                  {showFullDescription ? "see less" : "see more"}
                </button>
              )}
            </div>

            {isMediaContent && (
              <div onDoubleClick={handleDoubleClick}>
                <div className="max-md:w-[300px] max-md:h-[300px] max-md:object-cover relative mt-5 border w-[650px] h-[650px] overflow-hidden rounded-2xl">
                  <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full max-md:w-[300px] h-[650px] max-md:h-[280px] object-cover"
                  />
                  <p className="absolute top-8 right-4 -translate-y-1/2 p-1 text-[#777676] border text-sm rounded-full">
                    {currentIndex + 1}/{images.length}
                  </p>
                  <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-2 -translate-y-1/2 p-1 text-[#777676] border text-xl rounded-full"
                  >
                    &lt;
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-2 -translate-y-1/2 p-1 text-[#777676] border text-xl rounded-full"
                  >
                    &gt;
                  </button>
                </div>
                <div className="max-md:w-[280px] flex justify-center py-4 gap-2">
                  {images.map((_, index) => (
                    <hr
                      key={index}
                      className={`h-3 w-3 max-md:w-2 max-md:h-2 max-md:border border-2 cursor-pointer rounded-full ${
                        currentIndex === index
                          ? "bg-blue-800 dark:bg-gray-800"
                          : "bg-[#BABABA] dark:bg-gray-200"
                      }`}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>
                <i
                  ref={heartRef}
                  className="ri-heart-fill text-red-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 transition-transform duration-500 ease-in-out"
                ></i>
                {/* <HeartIcon ref={heartRef} className="ri-heart-fill text-red-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 transition-transform duration-500 ease-in-out"/> */}
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between text-xs font-medium mt-3">
          <div className=" max-md:gap-1 flex items-center gap-4">
            {/* <div
              onClick={handleLike}
              className="flex items-center gap-1 cursor-pointer border border-gray-400 h-8 px-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              {isLiked ? (
                <FaHeart className="text-lg text-red-500" />
              ) : (
                <LuHeart className="text-lg text-gray-700 dark:text-white" />
              )}
              <span className={`text-sm ${isLiked ? "text-red-500" : ""}`}>
                {likes}
              </span>
            </div> */}
            <div
              onClick={handleLike}
              className={`flex items-center gap-1 cursor-pointer border border-gray-400 h-8 px-3 rounded-full transition hover:bg-gray-100 dark:hover:bg-black ${
                isLiked
                  ? "text-red-500 bg-red-50 border-red-200 dark:text-white dark:border-white dark:bg-black "
                  : "text-black dark:text-white"
              }`}
            >
              {isLiked ? (
                <FaHeart className="text-lg" />
              ) : (
                <LuHeart className="text-lg" />
              )}
              <span>{likes}</span>
            </div>

            <div
              onClick={() =>
                setOpenIndex(openIndex === currentIndex ? null : currentIndex)
              }
              className="flex items-center gap-1 cursor-pointer border border-gray-400 h-8 px-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <FaRegComment className="text-lg" />
              <span className="text-sm">
                {commentList[currentIndex]?.comments.length ?? 0}
              </span>
            </div>

            {/* Share */}
            <div
              onClick={handleShare}
              className="flex items-center gap-1 cursor-pointer border border-gray-400 h-8 px-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <FiSend className="text-lg" />
              <span className="text-sm">{shares}</span>
            </div>
          </div>

          <div className="cursor-pointer flex gap-1">
            {content.documentUrl && (
              <CgFileDocument
                onClick={handleDownload}
                className="text-2xl mt-[0.7px] cursor-pointer hover:text-blue-600 transition"
                title={`Download ${content.documentName || "attachment"}`}
              />
            )}
            <SavePostBadge />
          </div>
        </div>
      </div>

      {/* Desktop */}
      {showComment &&
        commentList.map((media, idx) => {
          return (
            <>
              {/* Moving pitch card when tray opens */}
              {/* <div
                className={`absolute inset-0 transition-transform duration-1000 ease-out ${
                  openIndex === idx ? "-translate-x-80" : "translate-x-0"
                }`}
              /> */}
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
                          media.comments.map((comm, cidx) => (
                            <div
                              key={cidx}
                              className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-md text-sm"
                            >
                              <p className="text-sm">
                                <strong className="font-semibold mr-2">
                                  {comm.name} :
                                </strong>
                                {comm.text}
                              </p>
                              <div className="flex text-xs gap-4 mt-1 text-gray-500">
                                <button>
                                  <div
                                    onClick={handleLike}
                                    className={`flex items-center gap-1 cursor-pointer h-2 transition hover:bg-gray-100 dark:hover:bg-gray-300 ${
                                      isLiked
                                        ? "text-red-500 bg-red-50 border-red-200"
                                        : "text-gray-700 dark:text-white"
                                    }`}
                                  >
                                    {isLiked ? (
                                      <FaHeart size={16} />
                                    ) : (
                                      <LuHeart size={16} />
                                    )}
                                    <span>{likes}</span>
                                  </div>
                                </button>
                                <button
                                  onClick={() =>
                                    setOpenReplyIndex(
                                      openReplyIndex === cidx ? null : cidx
                                    )
                                  }
                                >
                                  {openReplyIndex === cidx
                                    ? "Hide replies"
                                    : "Reply"}
                                </button>

                                {/* Comment Reply Box */}
                                <Transition
                                  show={openReplyIndex === cidx}
                                  enter="transition-opacity duration-300"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition-opacity duration-200"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <div className="max-h-full overflow-y-auto space-y-2">
                                    <div className="relative mb-4">
                                      {/* Comment Reply Input */}
                                      <input
                                        type="text"
                                        placeholder="Reply..."
                                        value={commentReplyInput}
                                        onChange={(e) =>
                                          setCommentReplyInput(e.target.value)
                                        }
                                        className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                      />
                                      {commentReplyInput.trim() && (
                                        <FiSend
                                          onClick={() =>
                                            addCommentReply(media.id, comm.id)
                                          }
                                          className="absolute top-1/2 right-3 -translate-y-1/2 text-blue-600 cursor-pointer text-xl hover:scale-110 transition"
                                        />
                                      )}
                                    </div>
                                    {media.comments.length === 0 ? (
                                      <p className="text-sm text-gray-500 dark:text-gray-400">
                                        No Replies yet.
                                      </p>
                                    ) : (
                                      comm.replies.map((reply) => (
                                        <div
                                          key={reply.replyId}
                                          className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-md text-sm"
                                        >
                                          <p className="text-sm">
                                            <strong className="font-semibold mr-2">
                                              {reply.replyname} :
                                            </strong>
                                            {reply.replyText}
                                          </p>
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
            </>
          );
        })}

      {/* Share Dialog */}
      <Dialog.Root open={isShareOpen} onOpenChange={setIsShareOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" />
          <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="w-full h-[500px] max-w-md rounded-xl bg-white dark:dark-color dark:border dark:border-white p-6">
              <Dialog.Title className="text-lg text-center font-bold mb-4">
                Send Post To
              </Dialog.Title>
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="dark:dark-color  dark:border dark:border-white w-full mb-4 p-2 border border-gray-300 rounded"
              />

              <div className="space-y-2 max-h-[300px] scrollbar-hide overflow-y-auto">
                {filteredUsers.length > 1 ? (
                  filteredUsers.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={user.img}
                          alt={user.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-gray-500">@{user.title}</p>
                        </div>
                      </div>
                      <button className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                        Send
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">No users found.</p>
                )}
              </div>

              <button
                onClick={() => setIsShareOpen(false)}
                className="mt-4 w-full px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
export default Post;
