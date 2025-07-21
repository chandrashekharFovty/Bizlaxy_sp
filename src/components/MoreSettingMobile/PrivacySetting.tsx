import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdExpandLess } from "react-icons/md";
import { Link } from "react-router-dom";

function PrivacySetting() {
  return (
    <>
      <div className="dark:dark-color lg:w-full h-screen w-screen">
        {/* Fixed header */}
        <div className="lg:hidden dark:dark-color fixed top-0 left-0 right-0 bg-white z-10 border-b-2 border-gray-200">
          <Link
            to="/settings"
            className="dark:dark-color flex items-center font-semibold text-black py-4 px-4"
          >
            <MdExpandLess className="dark:dark-color transform rotate-[-90deg] text-2xl" />
            <span className=" dark:dark-color font-bold text-xl ml-28">
              Profile Privacy
            </span>
          </Link>
        </div>

        {/* Scrollable content */}
        <div className="dark:dark-color lg:pt-0 pt-20 pb-20 px-4 overflow-y-auto">
          <div className="dark:dark-color flex flex-col gap-4">
            {/* Reusable card structure */}
            <LinkCard to="/Storyprivacy" title=" Story" />
            <LinkCard to="/Storyprivacy" title=" Posts" />
            <LinkCard to="/Storyprivacy" title=" Eduvid" />
            <LinkCard to="/Storyprivacy" title=" Pitch" />
          </div>
        </div>
      </div>
    </>
  );
}

function LinkCard({ to, title }) {
  return (
    <Link to={to}>
      <div className="dark:dark-color flex justify-between items-start border-b border-gray-200 pb-4">
        <div className=" w-[380px]">
          <h1 className="font-semibold text-xl">{title}</h1>
        </div>
        <MdExpandLess className="transform rotate-[90deg] text-2xl mt-1" />
      </div>
    </Link>
  );
}

export function StoryPrivacy() {
  const [selectedOption, setSelectedOption] = useState("close");
  const [selectedUsers, setSelectedUsers] = useState(["imkir"]);

  const users = [
    {
      id: 1,
      name: "imkr",
      title: "Follows you",
      img: "/Hide.jpg",
      checked: false,
    },
    {
      id: 2,
      name: "organic__ai",
      title: "Followed by xhingg_singh07",
      img: "/Hide1.jpg",
      checked: false,
    },
    {
      id: 3,
      name: "im_gr",
      title: "Followed by xhingg_singh07",
      img: "/Hide2.jpg",
      checked: false,
    },
    {
      id: 4,
      name: "abhi52",
      title: "Follows you",
      img: "/Hide3.jpg",
      checked: false,
    },
    {
      id: 5,
      name: "soktri",
      title: "Follows you",
      img: "/Hide.jpg",
      checked: false,
    },
  ];

  const toggleUser = (id) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((user) => user !== id) : [...prev, id]
    );
  };

  return (
    <div className="dark:dark-color h-screen px-6">
      {/* Fixed header */}
      <div className="lg:hidden dark:dark-color fixed top-0 left-0 right-0 bg-white z-10 border-b-2 border-gray-200">
        <Link
          to="/privacy"
          className="dark:dark-color flex items-center font-semibold text-black py-4 px-4"
        >
          <MdExpandLess className="dark:dark-color transform rotate-[-90deg] text-2xl" />
          <span className=" dark:dark-color font-bold text-xl ml-28">
            Hide Story From
          </span>
        </Link>
      </div>

      <div className="dark:dark-color  pt-20 pb-6">
        <label className="flex justify-between items-center space-x-4 pt-2 cursor-pointer">
          <span className="text-xl ">Public</span>

          <input
            type="radio"
            name="privacy"
            value="public"
            checked={selectedOption === "public"}
            onChange={() => setSelectedOption("public")}
            className="hidden"
          />

          <span
            className={`
      w-6 h-6 rounded-full border-2 flex items-center justify-center
      ${
        selectedOption === "public"
          ? "bg-white border-gray-500"
          : "border-gray-400"
      }
    `}
          >
            {selectedOption === "public" && (
              <span className="w-3 h-3 border-transparent bg-gradient-to-l from-blue-600 to-purple-600 rounded-full"></span>
            )}
          </span>
        </label>

        <label className="flex justify-between space-x-2 pt-4">
          <span className="text-xl font-mediam ">Only Followers</span>
          <input
            type="radio"
            name="privacy"
            value="followers"
            checked={selectedOption === "followers"}
            onChange={() => setSelectedOption("followers")}
            className="hidden"
          />
          <span
            className={`
      w-6 h-6 rounded-full border-2 flex items-center justify-center
      ${
        selectedOption === "followers"
          ? "bg-white border-gray-500"
          : "border-gray-400"
      }
    `}
          >
            {selectedOption === "followers" && (
              <span className="w-3 h-3 border-transparent bg-gradient-to-l from-blue-600 to-purple-600 rounded-full"></span>
            )}
          </span>
        </label>

        <label className="flex justify-between space-x-2 pt-4">
          <span className="text-xl font-mediam ">Only close connection</span>
          <input
            type="radio"
            name="privacy"
            value="close"
            checked={selectedOption === "close"}
            onChange={() => setSelectedOption("close")}
            className="hidden"
          />
          <span
            className={`
      w-6 h-6 rounded-full border-2 flex items-center justify-center
      ${
        selectedOption === "close"
          ? "bg-white border-gray-500"
          : "border-gray-400"
      }
    `}
          >
            {selectedOption === "close" && (
              <span className="w-3 h-3 border-transparent bg-gradient-to-l from-blue-600 to-purple-600 rounded-full"></span>
            )}
          </span>
        </label>

        <label className="flex justify-between space-x-2 pt-4">
          <span className="text-xl font-mediam ">Hide Story</span>
          <input
            type="radio"
            name="privacy"
            value="Hide"
            checked={selectedOption === "Hide"}
            onChange={() => setSelectedOption("Hide")}
            className="hidden"
          />
          <span
            className={`
      w-6 h-6 rounded-full border-2 flex items-center justify-center
      ${
        selectedOption === "Hide"
          ? "bg-white border-gray-500"
          : "border-gray-400"
      }
    `}
          >
            {selectedOption === "Hide" && (
              <span className="w-3 h-3 border-transparent bg-gradient-to-l from-blue-600 to-purple-600 rounded-full"></span>
            )}
          </span>
        </label>
      </div>
      {selectedOption === "close" && (
        <>
          <div className=" dark:bg-white flex w-full border border-gray-300 rounded-xl h-16 px-3 py-2 mb-4">
            <CiSearch className="mt-3 w-6 h-6 dark:text-gray-600" />
            <input
              type="text"
              placeholder="Search for People"
              className="pl-3 text-lg h-full w-full dark:text-black"
            />
          </div>

          <div className="space-y-4">
            {users.map((user) => (
              <div key={user.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src={user.img}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-xs text-gray-500">{user.title}</div>
                  </div>
                </div>

                <label className="cursor-pointer flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => toggleUser(user.id)}
                    className="hidden"
                  />
                  <span
                    className={`
                w-5 h-5 shadow-xl  border-2 flex items-center justify-center
                ${
                  selectedUsers.includes(user.id)
                    ? "bg-gradient-to-l from-blue-600 to-purple-600 text-white text-sm"
                    : "border-gray-400 text-white dark:text-black"
                }
              `}
                  >✓</span>
                </label>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default PrivacySetting;
