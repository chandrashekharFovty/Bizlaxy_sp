
import React, { useRef } from 'react';
import { CiCamera, CiImageOn } from 'react-icons/ci';
import { MdExpandLess } from 'react-icons/md';
import { Link } from 'react-router-dom';

function ReportPro() {
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleCameraClick = () => {
    cameraInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Uploaded file:', file);

    }
  };

  const handleCameraChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Captured photo:', file);
  
    }
  };

  return (
    <div className="min-h-screen bg-white  dark:dark-color lg:pt-0 pt-16 px-4">
      {/* Fixed Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white  dark:dark-color z-10 border-b border-gray-200 dark:border-gray-700">
        <Link
          to="/settings"
          className="flex items-center font-semibold text-black dark:text-white py-4 px-4"
        >
          <MdExpandLess className="transform rotate-[-90deg] text-2xl" />
          <span className="font-bold text-xl ml-6">Help Center</span>
        </Link>
      </div>

      <div className="mt-6 lg:mt-0">
        <p className="mb-4 text-gray-700 text-sm dark:text-gray-200">
          Tell us what’s not working or what you experienced.
        </p>
        <textarea
          placeholder="Write your feedback..."
          className=" dark:dark-color w-full border border-gray-400 rounded-lg p-3 mb-4 focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white"
          rows="5"
        />
        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleUploadClick}
            className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <CiImageOn className="text-xl" /> Upload Image
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />

          <button
            type="button"
            onClick={handleCameraClick}
            className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <CiCamera className="text-xl" /> Take Image
          </button>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            ref={cameraInputRef}
            className="hidden"
            onChange={handleCameraChange}
          />
        </div>
           <button className='bg-[#1C4BC4] text-white mt-4 ml-2 w-[95%] h-14  rounded-xl'>Submit Report</button>
      </div>
    </div>
  );
}

export default ReportPro;
