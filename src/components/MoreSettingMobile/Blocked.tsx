import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { MdExpandLess } from 'react-icons/md';
import { Link } from 'react-router-dom';

const UsersData = [
  { name: "imkr", title: "Follows you", img: "/Hide.jpg" },
  { name: "organic__ai", title: "Followed by xhingg_singh07", img: "/Hide1.jpg" },
  { name: "im_gr", title: "Followed by xhingg_singh07", img: "/Hide2.jpg" },
  { name: "abhi52", title: "Follows you", img: "/Hide3.jpg" },
  { name: "soktri", title: "Follows you", img: "/Hide.jpg" },
];

function Blocked() {
  const [users, setUsers] = useState(
    UsersData.map(user => ({ ...user, blocked: true }))
  );

  const toggleBlock = (index) => {
    setUsers(prevUsers =>
      prevUsers.map((user, i) =>
        i === index ? { ...user, blocked: !user.blocked } : user
      )
    );
  };

  return (
    <div className="dark:dark-color h-screen lg:pt-0 pt-16 px-4">
      {/* Fixed header */}
      <div className="lg:hidden dark:dark-color fixed top-0 left-0 right-0 bg-white z-10 border-b-2 border-gray-200 flex items-center py-4 px-4">
        <Link to="/settings" className="flex items-center">
          <MdExpandLess className="transform rotate-[-90deg] text-2xl" />
          <span className="font-bold text-xl ml-6">Block Users</span>
        </Link>
      </div>

      {/* Search input */}
      <div className="relative flex items-center my-4">
        <CiSearch className="absolute left-3 text-xl text-gray-500" />
        <input
          type="text"
          placeholder="Search for People"
          className="dark:dark-color w-full h-14 border border-gray-300 rounded-xl py-2 pl-10 pr-4 focus:outline-none"
        />
      </div>

      {/* User list */}
      <div className="space-y-4">
        {users.map((user, index) => (
          <div key={index} className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center">
              <img
                src={user.img}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.title}</p>
              </div>
            </div>

            <button
              onClick={() => toggleBlock(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                user.blocked
                  ? 'bg-white text-gray-700'
                  : 'bg-white text-gray-800'
              }`}
            >
              {user.blocked ? 'Unblocked' : 'Blocked'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blocked;
