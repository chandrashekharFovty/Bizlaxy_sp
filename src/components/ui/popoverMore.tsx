import React, { useState, useRef, useEffect } from 'react';
import moonIcon from "../../assets/moon.png";
import settings from "../../assets/settings.png";

const PopoverClick = () => {
  const [visible, setVisible] = useState(false);
  const popoverRef = useRef(null);

  const togglePopover = () => {
    setVisible(!visible);
  };

  // Optional: Hide popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block">
      <button
        onClick={togglePopover}
        className="px-4 py-2 text-blacl font-medium text-[16px] text-left  rounded hover:text-blue-700"
      >
        More
      </button>

      {visible && (
        <div
          ref={popoverRef}
          role="tooltip"
          className="w-[347px] h-[344px] absolute z-50 inline-block bg-black -mt-[250px] text-sm text-gray-500 transition-opacity duration-300 border border-gray-200 rounded-lg shadow-xs dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 top-full"
        >
          <div className="w-full px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">More Options</h3>
          </div>
          <div className="w-full px-3 py-2 flex flex-col gap-5">
            <div>
                <div><img src={settings} alt="📐" />Settings</div>
                <div><img src={moonIcon} alt="🌙" />Switch Appearance</div>
            </div>
            <div><hr /></div>
            <div className='text-blue-700'><button>Add Account</button></div>
            <div className='text-blue-700'><button>Switch Account</button></div>
            <div className='text-red-700'><button>Log out</button></div>
          </div>
          <div data-popper-arrow className="absolute w-3 h-3 bg-white border border-gray-200 rotate-45 -top-1 left-1/2 transform -translate-x-1/2 dark:bg-gray-800 dark:border-gray-600"></div>
        </div>
      )}
    </div>
  );
};

export default PopoverClick;
