import React from "react";
import {PostList} from "@/components/feed/PostList";
import Sidebar, { Footer, Header } from "@/components/layout/Sidebar";
import { RightSidebar } from "@/components/layout/RightSidebar";

const Homepage = () => {
  return (
    <div className="dark:dark-color relative w-full min-h-screen bg-white overflow-hidden">
      {/* Decorative Circles */}
      {/* <div className="absolute top-[7%] left-[40%] w-[400px] h-[400px] rounded-full bg-purple-500 z-0" /> */}
      {/* <div className="absolute top-[40%] left-[15%] w-[400px] h-[400px] rounded-full bg-purple-500 z-0" /> */}

      {/* Glass effect */}
      <div className="absolute inset-0 backdrop-blur-[60px] z-10" />

      {/* Page Content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        {/* Mobile Header */}
        <div className="xl:hidden">
          <Header />
        </div>

        <div className="flex flex-1 dark:dark-color">
          {/* Sidebar */}
          <aside className="max-md:hidden  lg:block w-[240px] flex-shrink-0">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 px-4 max-md:px-0 md:px-8 lg:px-12 py-4">
            < PostList />
          </main>

          {/* Right Sidebar */}
          <aside className="hidden xl:block w-[350px] flex-shrink-0">
            <RightSidebar />
          </aside>
        </div>

        {/* Mobile Footer */}
        <div className="lg:hidden z-40">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
