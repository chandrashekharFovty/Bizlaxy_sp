import Sidebar from "../layout/Sidebar";
import React, { useState } from "react";
import Shop from "../../../public/ShopProfile.png";
import profile from "../../../public/ShopProfile2.png";
import { IoShareSocialOutline } from "react-icons/io5";
import { PiBuildings, PiPackage } from "react-icons/pi";
import MostView from "./MostView";
import { BsCheckCircleFill } from "react-icons/bs";

function ShopProfile() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <>
    <div className="dark:dark-color max-lg:hidden"><Sidebar /></div>
      
      <div className="dark:dark-color ml-[244px] max-lg:ml-0">
      <div className="relative">
        {/* Cover Image */}
        <img
          src={Shop}
          alt="shopprofile"
          className="w-full h-[334px] max-md:h-[200px] object-cover"
        />

        {/* Profile Image & Stats */}
        <div className="flex justify-between">
         <div className="">
             <img
            src={profile}
            alt="profile"
            className="fixed object-cover rounded-full w-32 h-32 max-md:w-24 max-md:h-24 absolute max-md:left-5 left-5  bottom-4 border-4 border-white"
          />
                <div className="flex items-center mt-2 ml-[120px]">
            <div className="flex flex-col items-center ml-10 max-md:ml-5">
              <span className="font-bold max-md:text-base text-xl">8,429</span>
              <p className="text-smc text-gray-500  font-normal max-md:text-xs">Followers</p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <span className="font-bold max-md:text-base text-xl">125</span>
              <p className="text-sm text-gray-500 font-normal  max-md:text-xs">Products</p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <span className="font-bold max-md:text-base text-xl">80%</span>
              <p className="text-sm text-gray-500 font-normal max-md:text-xs">Engagement</p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <span className="font-bold max-md:text-base text-xl">310</span>
              <p className="text-sm text-gray-500 font-normal max-md:text-xs">Requirement</p>
            </div>
              </div>
         </div>


         <div className="flex">
             <button className="dark:dark-color  mt-4 px-4 h-10 py-2 bg-white text-black border border-gray-400 rounded-xl">
              Edit Profile
            </button>

            <IoShareSocialOutline className=" m-4 dark:dark-color bg-white text-black border border-gray-400 rounded-xl w-10 h-10 p-2" />
         </div>
          </div>
        </div>

        {/* Basic Info */}
        <div className=" m-6 px-5">
          <h1 className="text-xl font-bold flex">TechNest Gadgets<BsCheckCircleFill className="text-green-600 ml-2 mt-1"/></h1>
          <p className="text-gray-400 text-sm mt-2">Cutting-edge gadgets, crafted for performance<br/> and built to last.</p>
          <p className="text-sm mt-4">
            <span className="font-semibold ">IEC Code:</span> IEC0891746532
          </p>
          <p className="text-sm mt-1">
            <span className="font-semibold ">GST Number:</span> 27AACCB1234F1Z5
          </p>
           <p className="text-sm mt-1">Mumbai, Maharashtra, India</p>
        </div>

          <div className="lg:hidden flex items-center mt-6">
            <div className="flex flex-col items-center ml-10 max-md:ml-5">
              <span className="font-bold max-md:text-base text-xl">8,429</span>
              <p className="text-smc text-gray-500  font-normal max-md:text-xs">Followers</p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <span className="font-bold max-md:text-base text-xl">125</span>
              <p className="text-sm text-gray-500 font-normal  max-md:text-xs">Products</p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <span className="font-bold max-md:text-base text-xl">80%</span>
              <p className="text-sm text-gray-500 font-normal max-md:text-xs">Engagement</p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <span className="font-bold max-md:text-base text-xl">310</span>
              <p className="text-sm text-gray-500 font-normal max-md:text-xs">Requirement</p>
            </div>
              </div>
        {/* Tabs */}
        <div className=" m-6 max-md:ml-0 ">
          {/* Tab Buttons */}
        <div className="border border-gray-200 max-md:border-none rounded-xl space-x-4 ">
        <div className="w-[80%] flex justify-between ml-[150px] max-md:m-auto max-md:w-[100%]">
          <button
          className={`px-4  py-2  relative ${
            activeTab === "Overview" ? "border-b-4 border-gradient-2  roubded-full w-[200px] max-md:w-[144px]   font-semibold" : ""
          }`}
          onClick={() => setActiveTab("Overview")}
        >
          Overview
        </button>


        <button
          className={`px-4  py-2 relative ${
            activeTab === "Products" ?"border-b-4 border-gradient-2  roubded-full w-[200px] max-md:w-[144px]  font-semibold" : ""
          }`}
          onClick={() => setActiveTab("Products")}
        >
          Products
        </button>

        <button
          className={`px-4  py-2 mr-20 max-md:mr-0 relative ${
            activeTab === "Contact" ?"border-gradient-2   roubded-full w-[200px] max-md:w-[144px]  font-semibold": ""
          }`}
          onClick={() => setActiveTab("Contact")}
        >
          Contact
        </button>
        </div>
      </div>

          {/* Tab Content */}
          <div className="   mt-6 max-md:ml-4">
            {activeTab === "Overview" && (
              <>
                <h1 className="font-bold flex items-center">
                  <PiBuildings className="text-xl mr-4 bg-gray-400 rounded-xl" />{" "}
                  Company Overview
                </h1>
                <div className="grid grid-cols-2  mt-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Business Type</p>
                    <p className="text-sm">Wholesaler</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">
                      Legal Status of Firm
                    </p>
                    <p className="text-sm">Partnership</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mt-4 mb-2">
                      Business Model
                    </p>
                    <p className="text-sm">B2B</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2 mt-4">
                      Stage of Company
                    </p>
                    <p className="text-sm">Growing</p>
                  </div>
                  <div>
                    
                    <p className="text-sm mt-3 text-blue-500 ">Read more</p>
                  </div>
                </div>
              </>
            )}

            {activeTab === "Products" && (
              <div className="mt-10">
                <h1 className="flex font-bold text-2xl items-center">
                  <PiPackage className="mr-4" /> Product & Services
                </h1>
                <p className="mt-2 text-gray-400 text-sm">
                  Supplier of electronic gadgets and accessories — Headphones,
                  Smartwatches.
                </p>
                <ol className="mt-2 text-gray-400 text-sm list-disc pl-5">
                  <li>Headphones</li>
                  <li>Smartwatches</li>
                </ol>
              </div>
            )}

            {activeTab === "Contact" && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h1 className="text-gray-400 text-sm">Registered Address:</h1>
                  <p className="text-sm">123 MG Road, Mumbai, India</p>
                </div>
                <div>
                  <h1 className="text-gray-400 text-sm">Website</h1>
                  <p className="text-sm">info@technest.com</p>
                </div>
                <div>
                  <h1 className="text-gray-400 text-sm">Phone Number</h1>
                  <p className="text-sm">+91 98765 43210</p>
                </div>
              </div>
            )}
          </div>
        </div>
    
    <div className="m-6">
      <MostView/></div>
      </div>
    </>
  );
}

export default ShopProfile;
