import React, { useState } from "react";
import redHeart from  "../../../public/LikeRed.png";
import grayHeart from  "../../../public/likeGray.png";
import postSave from  "../../../public/savePost.png";
import isPostSaved from  "../../../public/issaved.png";
import isCommented from  "../../../public/isCommented.png";
import comment from  "../../../public/isCommented.png";
import share from  "../../../public/share.png";
import isShared from  "../../../public/isShared.png";
import { LuHeart } from "react-icons/lu";

interface CountBadgeProps {
  count: string | number;
  type: "like" | "comment" | "share" | "savePost";
  initialActive?: boolean;
}

export function CountBadge({ count, type, initialActive = false }: CountBadgeProps) {
  const [isActive, setIsActive] = useState(initialActive);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const renderIcon = () => {
    if (type === "like") {
      return (
       <LuHeart/>
      );
    } else if (type === "comment") {
      return (
<img
          src={isActive ? isCommented : isCommented}
          alt="like"
          className="w-4 h-4"
        />      );
    } else if (type === "share") {
      return (
<img
          src={isActive ? isShared : isShared}
          alt="like"
          className="w-4 h-4"
        />      );
    } 
  };

  return (
    <div className="self-stretch my-auto rounded-[50px] cursor-pointer" onClick={handleClick}>
      <div
        className={`${
          isActive
            ? "bg-[rgba(255,244,245,1)]  border border-[#eee0e0] text-[rgba(253,61,57,1)]"
            : "bg-white border border-[rgba(210,210,210,1)] text-[#050505]"
        } flex items-center gap-1.5 justify-center px-2.5 py-1.5 rounded-[50px]`}
      >
        {renderIcon()}
        <div className="self-stretch my-auto">
          {count}
        </div>
      </div>
    </div>
  );
};
