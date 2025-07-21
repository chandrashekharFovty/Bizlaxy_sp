import React, { useState } from 'react';
import { MdExpandLess } from 'react-icons/md';
import { Link } from 'react-router-dom';

const myItems= [
  {
    id: "1",
    comments: 10,
    likes: 20,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/c286384ab9a94f6ae63dddaf2109347578dc9fa7?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "2",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/215def76e11b54522b5f2ccb29cfa4f5dc529575?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "3",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/60ac0ced6ed1b523e975126699b3b75ffc79d062?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "4",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/96687f4430bb048dcaed31fd494fd3f319acc078?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "5",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/3cce3ea5bd280ad35322625e6ab9d5bb70d53a5b?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "6",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "7",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2e38cb955f8f2ccb06020da42c8984342a22a98f?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "8",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/349d0a7e73189f2186de6ab524fda161e2ea2e0d?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "9",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/1e7b1a459b8534a84114f833bc76783b8cb7df3a?placeholderIfAbsent=true",
  },
 
];

function SavePosts() {
const [active, setActive] = useState("all");
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:dark-color">
      {/* Fixed Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white dark:dark-color z-10 border-b border-gray-200 dark:border-gray-700 flex items-center">
        <Link
          to="/settings"
          className="flex items-center font-semibold py-4 px-4"
        >
          <MdExpandLess className="transform rotate-[-90deg] text-2xl" />
          <p className="font-bold flex text-center text-xl ">Saved Posts</p>
        </Link>
      </div>

<div className="dark:dark-color lg:pt-0 pt-24 p-4 space-x-4">
  <div className="border border-gray-400 lg:w-full w-[390px] max-md:w-full max-lg:w-full rounded-full flex overflow-hidden">
    <button
      onClick={() => setActive("all")}
      className={`px-4 py-2 w-1/2 text-center transition 
        ${active === "all" 
          ? "bg-gradient-to-l rounded-full from-[#9645FF] to-[#1C4BC4] text-white" 
          : "dark:dark-color bg-white text-black"}`}
    >
      All Saved
    </button>

    <button
      onClick={() => setActive("product")}
      className={`px-4 py-2 w-1/2 text-center transition 
        ${active === "product" 
          ? "bg-gradient-to-r rounded-full from-[#9645FF] to-[#1C4BC4] text-white" 
          : "dark:dark-color bg-white text-black"}`}
    >
      Product
    </button>
  </div>
</div>
 

      {/* Posts Grid */}
      <div className=" px-4 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {myItems.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg  transition"
          >
            <img
              src={item.imageUrl}
              alt={`Post ${item.id}`}
              className="w-full h-40 object-cover"
            />
            {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white flex justify-between p-2 text-xs">
              <span>❤️ {item.likes}</span>
              <span>💬 {item.comments}</span>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavePosts;
