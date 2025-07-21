import React from "react";
import ReelCard from "../components/eduvid/eduvidCard";
import Sidebar, { Footer } from "@/components/layout/Sidebar";
import { RightSidebar } from "@/components/layout/RightSidebar";

const reelsData = [
  {
    username: "john_doe",
    caption: "Enjoying the view from the mountains 🏔️ #travel #adventure",
    videoUrl: "/videos/reel1.mp4",
    profileImage: "/images/user1.jpg",
  },
  {
    username: "emma_w",
    caption: "Behind the scenes of our latest shoot 🎬✨ #bts #film",
    videoUrl: "/videos/reel2.mp4",
    profileImage: "/images/user2.jpg",
  },
  {
    username: "techguru",
    caption: "AI is changing the game 🤖💡 #tech #future",
    videoUrl: "/videos/reel3.mp4",
    profileImage: "/images/user3.jpg",
  },
];

const ReelsPage = () => {
  return (
    <div className="flex h-screen overflow-x-hidden">
      {/* Sidebar */}
      <div className="fixed max-md:hidden left-0 top-0 w-[245px] max-md:w-0 h-full z-50 dark:bg-[#0f001a]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="dark:dark-color flex flex-1 ml-[245px] mr-[350px] justify-center max-md:ml-0 max-md:mr-0 dark:bg-[#0f001a]">
        <ReelCard />
        <div className='lg:hidden z-40 dark:bg-[#0f001a]'> <Footer/></div>
      </main>
        
   

      {/* Right Sidebar */}
      <div className="fixed max-md:hidden right-0 top-0 w-[350px] max-md:w-0 h-full z-40 bg-white dark:bg-[#0f001a]">
        <RightSidebar />
      </div>
    </div>
    
  );
};

export default ReelsPage;
