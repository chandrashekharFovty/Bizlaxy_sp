import React from "react";
import { Link } from "react-router-dom";

interface SuggestedContentProps {
  title: string;
  items: Array<{
    image: string;
    title: string;
  }>;
}

export function SuggestedContent({ title, items }: SuggestedContentProps) {
  return (
    <div className="max-md:w-screen  w-full mt-4 rounded-[0px_0px_0px_0px]">
      <div className="flex items-center gap-[40px_100px] justify-between flex-wrap">
        <div className="dark:text-white  text-[#050505] text-lg font-bold self-stretch my-auto">
          {title}
        </div>
      <Link to="/eduvid">
        <div className="text-[#1C4BC4] cursor-pointer text-sm font-medium self-stretch my-auto">
          See all
        </div>
      </Link>
      </div>
      <div className="mt-[22px]  border-transparent rounded-xl">
           <Link to="/eduvid">
        <div className="max-md:flex  max-md:overflow-scroll gap-5 flex max-md:flex-row max-md:items-stretch border-transparent rounded-xl">
          {items.map((item, index) => (
            <div key={index} className=" w-[33%] max-md:w-full max-md:ml-0 border-transparent rounded-xl">
              <div className="max-md:w-[160px]  max-md:h-[250px] max-md:flex  flex flex-col relative aspect-[0.478] grow text-sm text-white font-medium tracking-[-0.14px] pt-[166px] rounded-xl max-md:mt-[18px] max-md:pt-[100px]">
                <img
                  src={item.image}
                  className="absolute h-full w-full object-cover inset-0 border-transparent rounded-xl"
                />
                {/* <div className="relative pt-[200px] pb-[32px] px-[17px] rounded-[0px_0px_12px_12px] max-md:pr-5 max-md:pt-[80px]">
                  {item.title}
                </div> */}
              </div>
            </div>
    
          ))}
        </div>   </Link>
      </div>
    </div>
  );
}
