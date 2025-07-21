import React from 'react';
import { MdExpandLess } from 'react-icons/md';
import { Link } from 'react-router-dom';

function ProfilePriv() {
  return (
    <>
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-10 border-b border-gray-200 dark:border-gray-700">
        <Link
          to="/settings"
          className="flex items-center font-semibold text-black dark:text-white py-4 px-4"
        >
          <MdExpandLess className="transform rotate-[-90deg] text-2xl" />
          <span className="font-bold text-xl ml-28">Profile Privacy</span>
        </Link>
      </div>


      <div className="mt-[80px] px-4 space-y-4">
       <div className="flex justify-end items-center">
         <label htmlFor="public" className="ml-2 text-sm+0">Public</label>
  <input
    type="radio"
    name="privacy"
    id="public"
    className="accent-blue-600"
  />
 
</div>

        <div className="flex items-center space-x-3">
               <label htmlFor="followers" className="text-sm font-medium">Only Followers</label>
          <input type="radio" name="privacy" id="followers" className="accent-blue-600" />
       
        </div>

        <div className="flex items-center space-x-3">
             <label htmlFor="close" className="text-sm font-medium">Only Close Connections</label>
          <input type="radio" name="privacy" id="close" className="accent-blue-600" />
         
        </div>
      </div>
    </>
  );
}

export default ProfilePriv;
