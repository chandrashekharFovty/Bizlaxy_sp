import { useState } from "react";

// Single toggleable save badge
export default function SavePostBadge({
  size = 24,
  color = "#000",
  filled = false,
}: {
  size?: number;
  color?: string;
  filled?: boolean;
}) {
  const [isFilled, setIsFilled] = useState(filled);

  return isFilled ? (
    <svg
      onClick={() => setIsFilled(false)}
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill={color}
      stroke={color}
      strokeWidth="2"
      className="dark:stroke-white dark:fill-[#181818] fill-black cursor-pointer"
    >
      <path d="M6 4C5.447 4 5 4.447 5 5v15l7-6 7 6V5c0-.553-.447-1-1-1H6z" />
    </svg>
  ) : (
    <svg
      onClick={() => setIsFilled(true)}
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      stroke={color}
      strokeWidth="2"
      className="dark:stroke-white cursor-pointer"
    >
      <path d="M6 4c-.553 0-1 .447-1 1v15l7-6 7 6V5c0-.553-.447-1-1-1H6z" />
    </svg>
  );
}

// Another version for popover context (optional)
export function PostPopoverSaveBadge({
  size = 24,
  color = "#000",
  filled = false,
}: {
  size?: number;
  color?: string;
  filled?: boolean;
}) {
  const [isFilled, setIsFilled] = useState(filled);

  return isFilled ? (
    <svg
      onClick={() => setIsFilled(false)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      stroke={color}
      strokeWidth="2"
      className="dark:stroke-black cursor-pointer"
    >
      <path d="M6 4C5.447 4 5 4.447 5 5v15l7-6 7 6V5c0-.553-.447-1-1-1H6z" />
    </svg>
  ) : (
    <svg
      onClick={() => setIsFilled(true)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      className="dark:stroke-black cursor-pointer"
    >
      <path d="M6 4c-.553 0-1 .447-1 1v15l7-6 7 6V5c0-.553-.447-1-1-1H6z" />
    </svg>
  );
}
