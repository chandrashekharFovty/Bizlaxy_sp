import React from "react";

interface UserAvatarProps {
  src: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function UserAvatar({ 
  src, 
  size = "md", 
  className = "" 
}: UserAvatarProps) {
  const sizeClasses = {
    sm: "w-5 h-5",
    md: "w-10 h-10",
    lg: "w-[84px] h-[84px]"
  };

  return (
    <img
      src={src}
      className={`aspect-[1] object-contain ${sizeClasses[size]} shrink-0 rounded-[50px] ${className}`}
      alt="User avatar"
    />
  );
}
