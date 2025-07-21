import React from 'react';
import Sidebar, { Footer } from '@/components/layout/Sidebar';
import { RightSidebar } from '@/components/layout/RightSidebar';
import MainContent from '@/components/pitch/MainContent';



// Main Component
const Pitch = () => {
  return (
    <div className="flex h-screen overflow-x-hidden">
      {/* Sidebar */}
      <div className="fixed max-md:hidden left-0 top-0 w-[245px] max-md:w-0 h-full z-50 dark:bg-[#0f001a]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="dark:dark-color flex flex-1 ml-[245px] max-lg:ml-32 mr-[350px] justify-center max-md:ml-0 max-md:mr-0 dark:bg-[#0f001a]">
        <MainContent />
        <div className='lg:hidden z-40 dark:bg-[#0f001a]'> <Footer/></div>
      </main>
        
   

      {/* Right Sidebar */}
      <div className="fixed max-md:hidden max-lg:hidden right-0 top-0 w-[350px] max-md:w-0 h-full z-40 bg-white dark:bg-[#0f001a]">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Pitch;