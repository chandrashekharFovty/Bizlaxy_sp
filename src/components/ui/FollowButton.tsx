import React, { useState } from "react";
export const FollowButton: React.FC = () => {
    const [isFollowing, setIsFollowing] = useState(false);

  return (
    <button
      onClick={() => setIsFollowing(!isFollowing)}
      className={`px-1 py-1 text-sm font-semibold ${
        isFollowing ? " text-[#1C4BC4] dark:text-white" : "dark:text-white text-[#1C4BC4]"
      }`}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
};
export const FollowButtonCard: React.FC = () => {
    const [isFollowing, setIsFollowing] = useState(false);

  return (
    <button
      onClick={() => setIsFollowing(!isFollowing)}
      className={`px-1 py-2 text-xs font-mediam ${
        isFollowing ? "text-white " : "text-white"
      }`}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
};


// import React, { useState, useEffect } from "react";

// export default function FollowButton({
//   username,
//   onFollow,
// }: {
//   username: string;
//   onFollow: () => void;
// }) {
//   const [isFollowing, setIsFollowing] = useState(false);

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("followedUsers") || "[]");
//     setIsFollowing(stored.includes(username));
//   }, [username]);

//   const handleClick = () => {
//     const stored = JSON.parse(localStorage.getItem("followedUsers") || "[]");
//     let updated;

//     if (isFollowing) {
//       updated = stored.filter((u: string) => u !== username);
//     } else {
//       updated = [...stored, username];
//     }

//     localStorage.setItem("followedUsers", JSON.stringify(updated));
//     setIsFollowing(!isFollowing);
//     onFollow();
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className="text-xs text-[#1C4BC4] font-medium cursor-pointer"
//     >
//       {isFollowing ? "Following" : "Follow"}
//     </button>
//   );
// }
