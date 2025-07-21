import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Deshboard from "../components/addManagement/AddManagement";
import CreateAddOptions from "@/components/addManagement/CreateAddOptions";

const AddsManager = () => {
  return (
    <>
       <div className="w-screen h-screen flex  bg-gray-100">
      <div className="w-2/12 z-50"><Sidebar/></div>
      <div className="w-10/12 bg-gray-100 max-lg:ml-[-100px] max-md:w-full overflow-X-hidden z-0">
        <Deshboard/>
      </div>
    </div>
    {/* <div className="ml-[235px] z-0">
       <CreateAddOptions/>
    </div> */}
     
    </>
  );
};

export default AddsManager;
