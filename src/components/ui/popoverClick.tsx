import React, { useState } from "react";
import { Popover } from "./popover";

const PopoverClick = () => {
const [pop,setpop] = useState("hidden");

  return (
    <div className="relative z-50">
      <button className="bg-gray-200 p-2 ">Click me</button>
      <div className="absolute top-full left-0 mt-2 w-48 p-4 bg-red-500 text-white shadow-lg z-50">
        Hello I'm a popover
      </div>
    </div>
  );
};

export default PopoverClick;