import { RightSidebar } from "@/components/layout/RightSidebar";
import Sidebar from "@/components/layout/Sidebar";
import Notifications from "@/components/notifications/Notifications";
import React from "react";

const Notofications = () => {
  return (
    <>
      <div className="dark:dark-color w-screen h-screen flex  bg-gray-100">
        
        <div className=" dark:dark-color w-full ml-2 overflow-X-hidden z-10 ">
          <Notifications />
        </div>
        {/* Right Sidebar */}
      
      </div>
    </>
  );
};

export default Notofications;
