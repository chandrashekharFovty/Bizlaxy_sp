import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import menu from "../../../public/menu.png"
import { SlArrowLeft } from "react-icons/sl";

interface ProfileHeaderProps {
  username: string;
  fullName: string;
  bio: string;
  website: string;
  postsCount: string | number;
  followersCount: string | number;
  followingCount: string | number;
  profileImage: string;
  coverImage: string;
}

const highlightsData = [
  { id: 1, title: "Business", HighlightImg: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/0637cafebd8ce154f8a9a144664dc6f06d3ca299?placeholderIfAbsent=true" },
  { id: 2, title: "Travel", HighlightImg: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/0637cafebd8ce154f8a9a144664dc6f06d3ca299?placeholderIfAbsent=true" },
  { id: 3, title: "Events", HighlightImg: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/0637cafebd8ce154f8a9a144664dc6f06d3ca299?placeholderIfAbsent=true" },
  { id: 4, title: "Public", HighlightImg: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/0637cafebd8ce154f8a9a144664dc6f06d3ca299?placeholderIfAbsent=true" },
   { id: 1, title: "Business", HighlightImg: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/0637cafebd8ce154f8a9a144664dc6f06d3ca299?placeholderIfAbsent=true" },
  { id: 2, title: "Travel", HighlightImg: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/0637cafebd8ce154f8a9a144664dc6f06d3ca299?placeholderIfAbsent=true" },
  { id: 3, title: "Events", HighlightImg: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/0637cafebd8ce154f8a9a144664dc6f06d3ca299?placeholderIfAbsent=true" },
  { id: 4, title: "Public", HighlightImg: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/0637cafebd8ce154f8a9a144664dc6f06d3ca299?placeholderIfAbsent=true" },
  
];

const images = [
  "/profile1.png",
  "/profile2.png",
  "/profile3.png",
  "/profile4.png",
];

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  username,
  fullName,
  bio,
  website,
  postsCount,
  followersCount,
  followingCount,
  profileImage,
  coverImage,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
   const [isImageOpen, setIsImageOpen] = useState(false);

 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col">
      {/* Top Header */}
      <div className="flex items-center gap-2 max-md:h-8 max-md:mt-0 text-xl font-bold text-[#050505] ml-6 mt-2 max-md:ml-3">
        <span className="max-md:text-2xl dark:text-white">{username}</span>
        <img src="/RightMarkInvester.png" alt="Verified" className="max-md:w-6 max-md:h-6  object-cover w-3 h-3" />
        <Link to="/subscription">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/7eb8167ebc03b067106013d277e8da366e8ec872?placeholderIfAbsent=true"
          className="max-md:hidden w-[22px] h-[22px]"
          alt="Icon"
        /></Link>
        <div className=" flex lg:hidden ml-auto m-2">
          <Link to="/subscription">
             <img
          src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/7eb8167ebc03b067106013d277e8da366e8ec872?placeholderIfAbsent=true"
          className="  w-[32px] h-[32px] max-md:justify-end"
          alt="Icon"
        /></Link>
          <Link to="/settings">
            <img src={menu} alt="more" className="h-8 w-8 text-black"/>
          </Link>
        </div>
      </div>

      {/* Cover Image */}
      <div className="w-full mt-4">
        <img
          src={coverImage}
          alt="Cover"
          className="w-full h-[240px] object-cover max-lg:hidden max-md:hidden"
         
        />
        <img
          src={images[currentIndex] }
          alt="Slide"
          className="w-full h-[200px] object-cover lg:hidden"
        />   
      </div>

      {/* Profile & Stats */}
      <div className="flex flex-wrap justify-between items-center px-6 -mt-20 max-md:flex-col max-md:items-start max-md:px-4">
        <div className="flex items-center gap-6 max-md:flex max-md:items-start">
           <div className="w-[168px] h-[168px] rounded-xl overflow-hidden shadow-lg max-md:rounded-xl max-md:mt-4 max-md:w-[120px] max-md:h-[120px]">
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => setIsImageOpen(true)}
        />
      </div>

      {/* Image Modal */}
      {isImageOpen && (
        <div className="fixed inset-0 flex items-center justify-center ">
          <div className="relative">
            <img
              src={profileImage}
              alt="Full Profile"
              className="max-w-full max-h-[90vh] rounded-lg"
            />
            <button
              onClick={() => setIsImageOpen(false)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-lg px-2 py-1"
            >
              X
            </button>
          </div>
        </div>
      )}
    {/* </div> */}

         <div className="flex items-center gap-6 max-md:gap-4 mt-20 max-md:mt-24">
  {[{ count: postsCount, label: "Posts" }, { count: followersCount, label: "Followers" }, { count: followingCount, label: "Following" }].map((item, i, arr) => (
    <React.Fragment key={i}>
      <div className="flex flex-col items-center">
        <span className="text-xl font-semibold">{item.count}</span>
        <span className="text-sm">{item.label}</span>
      </div>
      {i !== arr.length - 1 && (
        <div className="w-px h-8 bg-gray-400"></div>
      )}
    </React.Fragment>
  ))}
</div>

        </div>

       <div className="hidden lg:flex gap-4 mt-20">
  {/* Edit Profile with gradient border */}
  <div className="dark:dark-color p-[2px] rounded-xl hover:bg-gradient-to-r from-blue-600 to-purple-600">
    <Link
      to="/editprofile"
      className=" px-4 py-2  block hover:bg-purple-200 text-black bg-gray-200 border border-gray-400 rounded-xl"
    >
      Edit Profile
    </Link>
  </div>

  {/* Share Profile with gradient border */}
  <div className="dark:dark-color p-[2px] rounded-xl hover:bg-gradient-to-r from-blue-600 to-purple-600">
    <button className=" px-4 py-2  hover:bg-purple-200 text-black bg-gray-200 rounded-xl">
      Share Profile
    </button>
  </div>

  {/* Info with gradient border */}
  <div className="dark:dark-color p-[2px] rounded-xl hover:bg-gradient-to-r from-blue-600 to-purple-600">
    <Link
      to="/infoprofile"
      className=" px-4 py-2  hover:bg-purple-200 text-black bg-gray-200 block  text-black  border border-gray-400 rounded-xl"
    >
      Info
    </Link>
  </div>
</div>

      </div>

     
      {/* Bio & Website */}
      <div className="px-6 mt-4 max-md:px-4">
        <h1 className="text-xl font-bold">{fullName}</h1>
        <p className="mt-1">{bio}</p>
        <a href={website} className="text-blue-600 mt-1 inline-block">{website}</a>
      </div>


       {/* Mobile buttons */}
      <div className="lg:hidden flex gap-3 mt-4 px-6 max-md:px-4">
        <Link to="/editprofile" className="dark:dark-color dark:border dark:border-white flex-1 px-4 py-2 text-sm h-10 w-10 bg-gray-200 rounded hover:bg-blue-50 text-center">Edit Profile</Link>
        <button className="dark:dark-color dark:border dark:border-white flex-1 px-4 py-2 text-xs bg-gray-200 h-10 w-10  rounded hover:bg-blue-50">Share Profile</button>
        <Link to="/infoprofile" className="dark:dark-color dark:border dark:border-white flex-1 px-4 py-2 text-sm bg-gray-200 rounded hover:bg-blue-50 text-center">Info</Link>
      </div>

    {/* Highlights */}
      <div className="flex overflow-x-auto gap-4 px-6 mt-6 pb-4 max-md:px-4">
        {highlightsData.map(item => (
          <div key={item.id} className="flex flex-col items-center min-w-[82px]">
            <img src={item.HighlightImg} alt={item.title} className="w-[82px] h-[82px] rounded-full object-cover" />
            <span className="mt-1 text-sm">{item.title}</span>
          </div>
        ))}
          <div className="flex flex-col items-center min-w-[82px] cursor-pointer">
            <div className="w-[82px] h-[82px] text-4xl border-2 border-gray-300 text-gray-500 rounded-full flex justify-center items-center object-cover">+</div>
            <span className="mt-1 text-sm">Add</span>
          </div>
        
      </div>


      
    </div>
  );
};

export default ProfileHeader;
