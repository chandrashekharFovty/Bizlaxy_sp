import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Deshboard from "../components/addManagement/AddManagement";
import CreateAddOptions from "@/components/addManagement/CreateAddOptions";

const AddsManager = () => {
  return (
    <>
       <div className="w-screen h-screen flex  bg-gray-100">
      <div className="w-2/10 z-50"><Sidebar/></div>
      <div className="w-10/12 bg-gray-100 md:ml-[60px] lg:ml-[240px] xl:ml-[240px] max-md:w-full overflow-X-hidden z-0">
        <Deshboard/>
      </div>
    </div>
  
     
    </>
  );
};

export default AddsManager;
