import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { MdExpandLess } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const initialUsers = [
  { name: "imkr", title: "Follows you", img: "/Hide.jpg", checked: false },
  { name: "organic__ai", title: "Followed by xhingg_singh07", img: "/Hide1.jpg", checked: false },
  { name: "im_gr", title: "Followed by xhingg_singh07", img: "/Hide2.jpg", checked: false },
  { name: "abhi52", title: "Follows you", img: "/Hide3.jpg", checked: false },
  { name: "soktri", title: "Follows you", img: "/Hide.jpg", checked: false },
];

function HidePeople() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState('');

  const handleCheckboxChange = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].checked = !updatedUsers[index].checked;
    setUsers(updatedUsers);
  };

  // Filter by search, then sort: checked users come first
  const filteredUsers = users
    .filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (b.checked ? 1 : 0) - (a.checked ? 1 : 0));

  return (
    <div className="dark:dark-color lg:w-full lg:pt-0 h-screen w-screen pt-16 px-4">
      {/* Fixed header */}
      <div className="dark:dark-color lg:hidden max-md:fixed top-0 left-0 right-0 bg-white z-10 border-b-2 border-gray-200 flex items-center py-4 px-4">
        <Link to="/settings" className="flex items-center">
          <MdExpandLess className="transform rotate-[-90deg] text-2xl" />
          <span className="font-bold text-xl ml-6">Hide Story and Live</span>
        </Link>
      </div>

      {/* Search input */}
      <div className="relative flex items-center my-4">
        <CiSearch className="absolute left-3 text-xl text-gray-500" />
        <input
          type="text"
          placeholder="Search for People"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-14 border border-gray-300 rounded-xl py-2 pl-10 pr-4 focus:outline-none"
        />
      </div>

      {/* User list */}
      <div className="space-y-4">
        {filteredUsers.map((user, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={user.img} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
              <div className="ml-4">
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.title}</p>
              </div>
            </div>

            {/* Custom checkbox with state */}
            <label className="relative w-5 h-5 border border-gray-400 rounded-sm cursor-pointer flex items-center justify-center">
              <input
                type="checkbox"
                checked={user.checked}
                onChange={() => handleCheckboxChange(users.indexOf(user))}
                className="peer opacity-0 absolute w-full h-full cursor-pointer"
              />
              <span className="absolute inset-0 rounded-sm peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-purple-600 z-0"></span>
              <FaCheck className="text-white w-4 h-4 opacity-0 peer-checked:opacity-100 z-10" />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HidePeople;
