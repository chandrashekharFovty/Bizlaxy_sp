import React, { useState } from "react";
import { FaPhone, FaVideo, FaSearch, FaMicrophoneSlash, FaCamera, FaPhoneSlash } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const users = [
  {
    id: 1,
    name: "Alice",
    status: "Online",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    messages: [
      { from: "Alice", text: "Hi!", time: "10:00 AM" },
      { from: "me", text: "Hello!", time: "10:01 AM" },
    ],
  },
  {
    id: 2,
    name: "Bob",
    status: "Offline",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    messages: [
      { from: "Bob", text: "Are you coming?", time: "9:00 AM" },
    ],
  },
];

export default function App() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [message, setMessage] = useState("");
  const [isVideoCall, setIsVideoCall] = useState(false);
  const [isVoiceCall, setIsVoiceCall] = useState(false);

  const sendMessage = () => {
    if (!message) return;
    const newMsg = { from: "me", text: message, time: new Date().toLocaleTimeString() };
    const updatedUser = {
      ...selectedUser,
      messages: [...selectedUser.messages, newMsg],
    };
    setSelectedUser(updatedUser);
    setMessage("");
  };

  const CallControls = () => (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
      <button className="bg-gray-700 text-white p-3 rounded-full"><FaMicrophoneSlash /></button>
      <button className="bg-red-600 text-white p-3 rounded-full" onClick={() => {setIsVideoCall(false); setIsVoiceCall(false);}}><FaPhoneSlash /></button>
      <button className="bg-gray-700 text-white p-3 rounded-full"><FaCamera /></button>
    </div>
  );

  const VideoCallUI = () => (
    <div className="dark:bg-gray-800 dark:text-whiteabsolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-white z-50">
      <div className="flex gap-8">
        <img src={selectedUser.avatar} className="w-48 h-48 rounded-xl object-cover" />
        <img src="https://randomuser.me/api/portraits/men/3.jpg" className="w-48 h-48 rounded-xl object-cover" />
      </div>
      <CallControls />
    </div>
  );

  const VoiceCallUI = () => (
    <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-white z-50">
      <div className="flex gap-16">
        <img src={selectedUser.avatar} className="w-32 h-32 rounded-full border-4 border-white" />
        <img src="https://randomuser.me/api/portraits/men/3.jpg" className="w-32 h-32 rounded-full border-4 border-white" />
      </div>
      <CallControls />
    </div>
  );

  return (
    <div className="flex h-screen relative">
      {isVideoCall && <VideoCallUI />}
      {isVoiceCall && <VoiceCallUI />}

      {/* Sidebar */}
      <div className="dark:bg-gray-800 dark:text-white w-1/4 border-r bg-white">
        <div className="p-4 font-bold text-xl border-b">Chats</div>
        {users.map((user) => (
          <div
            key={user.id}
            className={`p-3 dark:hover:bg-gray-400 dark:text-white flex gap-3 items-center cursor-pointer hover:bg-gray-100 ${
              selectedUser.id === user.id ? "bg-gray-200" : ""
            }`}
            onClick={() => setSelectedUser(user)}
          >
            <img src={user.avatar} className="w-10 h-10 rounded-full" />
            <div>
              <div className="font-medium">{user.name}</div>
              <div className="text-xs text-gray-500">{user.status}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Section */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className=" dark:text-white dark:bg-gray-800 flex justify-between items-center p-4 border-b bg-gray-50">
          <div className="flex gap-3 items-center">
            <img src={selectedUser.avatar} className="w-10 h-10 rounded-full" />
            <div>
              <div className="font-medium">{selectedUser.name}</div>
              <div className="text-xs text-gray-500">{selectedUser.status}</div>
            </div>
          </div>
          <div className="flex gap-4 text-gray-600 text-xl">
            <FaPhone className="cursor-pointer" onClick={() => setIsVoiceCall(true)} />
            <FaVideo className="cursor-pointer" onClick={() => setIsVideoCall(true)} />
            <FaSearch className="cursor-pointer" />
          </div>
        </div>

        {/* Chat messages */}
        <div className="dark:text-white dark:bg-gray-800 flex-1 p-4 space-y-2 overflow-y-auto bg-gray-100">
          {selectedUser.messages.map((msg, index) => (
            <div
              key={index}
              className={`dark:text-black max-w-xs px-4 py-2 rounded-lg text-sm shadow-md ${
                msg.from === "me"
                  ? "ml-auto bg-blue-500 text-white"
                  : "bg-white"
              }`}
            >
              {msg.text}
              <div className="text-[10px] mt-1 text-right">{msg.time}</div>
            </div>
          ))}
        </div>

        {/* Message input */}
        <div className="dark:text-white dark:bg-gray-800 flex items-center p-4 border-t bg-white">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            className="flex-1 border px-4 py-2 rounded-full focus:outline-none"
            placeholder="Type a message"
          />
          <button
            onClick={sendMessage}
            className="ml-2 text-white bg-blue-600 rounded-full p-2 hover:bg-blue-700"
          >
            <IoSend size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
