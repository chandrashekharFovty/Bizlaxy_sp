import React from 'react';
import { MdExpandLess } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { SearchInput } from '../ui/SearchInput';

function HelpCenter() {
  return (
    <div className='h-screen  dark:dark-color'>
      {/* Fixed Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white dark:dark-color  z-10 border-b border-gray-200 dark:border-gray-700">
        <Link
          to="/settings"
          className="flex items-center font-semibold text-black dark:text-white py-4 px-4"
        >
          <MdExpandLess className="transform rotate-[-90deg] text-2xl" />
          <span className="font-bold text-xl ml-28">Help Center</span>
        </Link>
      </div>

      <div className=" dark:dark-color lg:pt-0 pt-20 p-4">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Find answers to common questions and learn how to use features.
        </p>
        <SearchInput />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Getting Started</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          <li>How to create an account</li>
          <li>Setting up your profile</li>
          <li>Choosing your account type</li>
        </ul>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Posting & Content</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          <li>How to post a video or image  s</li>
          <li>Using hashtags and mentions</li>
          <li>Creating polls or live session</li>
        </ul>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Privacy & Security</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          <li>Managing who sees your posts </li>
          <li>How to block or report users</li>
          <li> Enabling two-factor authentication</li>
        </ul>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Verification</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          <li>Green vs Blue verification How to apply and check status</li>
          <li> How to block or report users </li>
          <li>postsEnabling two-factor authentication</li>
        </ul>
      </div>
    </div>
  );
}

export default HelpCenter;
