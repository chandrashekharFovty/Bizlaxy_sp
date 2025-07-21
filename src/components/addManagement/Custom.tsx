import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import { HiMiniComputerDesktop } from "react-icons/hi2";

function Custom() {
  const navigate = useNavigate();
  const handleData = () => {
    navigate("/visibility");
  };
  return (
    <div className="flex dark:dark-color">
      <Sidebar />
      {/* <div className="dark:bg-gray-800  dark:text-white flex"> */}
        <div className=" dark:dark-color  max-md:ml-0  p-6 bg-white w-[800px] min-h-screen max-lg:ml-16 ml-[235px]">
          <Link
            to="/awareness"
            className=" dark:dark-color text-sm text-blue-600 mb-4 inline-block"
          >
            &lt; Back to Target Audience
          </Link>
          <div          className=" max-md:ml-[-22px]">
            {/* <div className="ml-[245px] mx-[300px] p-6  shadow"> */}
            <h2 className="text-xl ml-4 font-semibold mb-4 mt-4">
              Custom Targeting
            </h2>

            <div className="grid ml-4 w-[750px]  max-md:w-[550px] ">
              <p className="mt-2 text-gray-700">Business types</p>
              <select className="focus:outline-none dark:dark-color mt-2 border border-gray-300 rounded-xl text-gray-500 px-4 py-2">
                <option>Select Business Type</option>
              </select>
              <p className="mt-4 text-gray-700">Industry</p>
              <select className="focus:outline-none dark:dark-color mt-2 border border-gray-300 rounded-xl text-gray-500 px-4 py-2">
                <option>Select Industry</option>
              </select>
              <p className="mt-4 text-gray-700">Business model</p>
              <select className="focus:outline-none dark:dark-color mt-2 border border-gray-300 rounded-xl text-gray-500 px-4 py-2">
                <option>Select Business Model</option>
              </select>
              <p className="mt-4 text-gray-700">Geographics Location</p>
              <select className="focus:outline-none dark:dark-color mt-2 border border-gray-300 rounded-xl text-gray-500 px-4 py-2">
                <option>Select Geographic Location</option>
              </select>
              <p className="mt-6 text-gray-700">
                Demagraphic Targeting (optional)
              </p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <select className="focus:outline-none dark:dark-color border border-gray-300 rounded-xl text-gray-500 px-4 py-2">
                  <option>Select Age Group</option>
                </select>
                <select className="focus:outline-none dark:dark-color border border-gray-300 rounded-xl text-gray-500 px-4 py-2">
                  <option>Select Gender</option>
                </select>
                <select className="focus:outline-none dark:dark-color border border-gray-300 rounded-xl text-gray-500 px-4 py-2">
                  <option>Select Language</option>
                </select>
                <select className="focus:outline-none      dark:dark-color border border-gray-300 rounded-xl text-gray-500 px-4 py-2">
                  <option>Select Education</option>
                </select>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                  onClick={handleData}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[450px] ml-2  p-4 ">
       
      </div>
    </div>
  );
}

export default Custom;
