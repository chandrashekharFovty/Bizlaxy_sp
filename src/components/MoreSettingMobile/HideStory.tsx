import React, { useEffect } from 'react'
import { MdExpandLess } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

function HideStory() {
   const navigate = useNavigate();

  useEffect(() => {
    navigate('/hidepeople');
  }, [navigate]);

  return (
    <>
    <div className='dark:dark-color lg:w-full h-screen w-screen'>
      {/* Fixed header */}
      <div className=" dark:dark-color fixed top-0 left-0 right-0 bg-white z-10 border-b-2 border-gray-200">
        <Link
          to="/settings"
          className=" dark:dark-color flex items-center font-semibold text-black py-4 px-4"
        >
          <MdExpandLess className="dark:dark-color transform rotate-[-90deg] text-2xl" />
          <span className=" dark:dark-color font-bold text-xl ml-6">Hide Story and Live</span>
        </Link>
      </div>

      {/* Scrollable content */}
      <div className="dark:dark-color pt-28 pb-20 px-4 overflow-y-auto">
        <div className="dark:dark-color flex flex-col gap-4">
          {/* Reusable card structure */}
          <LinkCard to="/switch" title="Select to hide stories from" description="Choose who should not see your posted stories." />
          <LinkCard to="/active" title="Select to hide live videos from" description="Choose who should not see your live broadcasts." />
        </div>
      </div>
      </div>
    </>
  );
}

function LinkCard({ to, title, description }) {
  return (
    <Link to={to}>
      <div className="dark:dark-color flex justify-between items-start border-b border-gray-200 pb-4">
        <div className=" w-[380px]">
          <h1 className="font-semibold text-xl">{title}</h1>
          <p className="text-gray-500 text-xs">
        {description}
          </p>
        </div>
        <MdExpandLess className="transform rotate-[90deg] text-2xl mt-1" />
      </div>
    </Link>
  );
}

export default  HideStory;
;




