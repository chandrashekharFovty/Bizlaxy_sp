import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import voiceCall from "../../public/voicecall.png";
import Vcall from "../../public/Vcall.png";
import LinkIcon from "../../public/link.png";
import SendIcon from "../../public/send.png";
import message from "../../public/messages.png";
import { FiArrowRight, FiCopy, FiTrash2, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdExpandLess, MdLocationOn } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { FaCamera, FaPhoneAlt, FaVideo } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { RiContactsFill } from "react-icons/ri";
import Sidebar, { Footer } from "../components/layout/Sidebar"
import { BsPinAngleFill } from "react-icons/bs";
import { ShareIcon } from "lucide-react";
import { IoIosSend } from "react-icons/io";

// Initial chat data
const initialChatUsers = [
  {
    id: 1,
    name: "Akash Retail",
    type: "Direct",
    lastSeen: "2m ago",
    preview: "Interested in bulk order of So...",
    avatar: "https://i.pravatar.cc/40?img=1",
    isOnline:true,
    messages: [
      {
        sender: "Akash Retail",
        text: "Hi! I'm interested in a bulk order.",
        time: "17:00",
        me: false,
      },
      {
        sender: "You",
        text: "Sure, I can help you with that!",
        time: "17:02",
        me: true,
      },
    ],
  },
  {
    id: 2,
    name: "Mike Mazowski",
    type: "Direct",
    lastSeen: "5m ago",
    preview: "Hey! Did you check the files?",
    avatar: "https://i.pravatar.cc/40?img=2",
     isOnline:true,
    messages: [
      {
        sender: "Mike Mazowski",
        text: "Did you check the vacation plan?",
        time: "18:04",
        me: false,
      },
      {
        sender: "You",
        text: "Yes, looks good to me!",
        time: "18:44",
        me: true,
      },
    ],
  },
  {
    id: 3,
    name: "Sarah Connor",
    type: "Groups",
    lastSeen: "10m ago",
    preview: "Let's meet at 5pm tomorrow.",
    avatar: "https://i.pravatar.cc/40?img=3",
    members:[1,2,3],
    messages: [
      {
        sender: "Sarah Connor",
        text: "Let's meet tomorrow at 5pm?",
        time: "14:30",
        me: false,
      },
      {
        sender: "You",
        text: "Perfect, see you then!",
        time: "14:35",
        me: true,
      },
    ],
  },
  {
    id: 4,
    name: "Dev Team",
    type: "Groups",
    lastSeen: "20m ago",
    preview: "Sprint planning at 10AM.",
    avatar: "https://i.pravatar.cc/40?img=4",
    messages: [
      {
        sender: "Dev Team",
        text: "Don’t forget sprint planning tomorrow.",
        time: "09:00",
        me: false,
      },
      { sender: "You", text: "Got it!", time: "09:05", me: true },
    ],
  },
  {
    id: 5,
    name: "Request from John Doe",
    type: "Requests",
    lastSeen: "Just now",
    preview: "Please add me to your contacts.",
    avatar: "https://i.pravatar.cc/40?img=5",
    messages: [
      {
        sender: "John Doe",
        text: "Hey! Please add me.",
        time: "08:00",
        me: false,
      },
    ],
  },
  {
    id: 6,
    name: "Request from Jane Smith",
    type: "Requests",
    lastSeen: "1m ago",
    preview: "I'd like to connect with you.",
    avatar: "https://i.pravatar.cc/40?img=6",
    messages: [
      {
        sender: "Jane Smith",
        text: "Hi there! I'd like to connect.",
        time: "12:00",
        me: false,
      },
    ],

  },
  {
    id: 7,
    name: "Akash Retail",
    type: "Direct",
    lastSeen: "2m ago",
    preview: "Interested in bulk order of So...",
    avatar: "https://i.pravatar.cc/40?img=1",
    messages: [
      {
        sender: "Akash Retail",
        text: "Hi! I'm interested in a bulk order.",
        time: "17:00",
        me: false,
      },
      {
        sender: "You",
        text: "Sure, I can help you with that!",
        time: "17:02",
        me: true,
      },
    ],
  },
  {
    id: 8,
    name: "Mike Mazowski",
    type: "Direct",
    lastSeen: "5m ago",
    preview: "Hey! Did you check the files?",
    avatar: "https://i.pravatar.cc/40?img=2",
    messages: [
      {
        sender: "Mike Mazowski",
        text: "Did you check the vacation plan?",
        time: "18:04",
        me: false,
      },
      {
        sender: "You",
        text: "Yes, looks good to me!",
        time: "18:44",
        me: true,
      },
    ],
  },
  {
    id: 9,
    name: "Sarah Connor",
    type: "Direct",
    lastSeen: "10m ago",
    preview: "Let's meet at 5pm tomorrow.",
    avatar: "https://i.pravatar.cc/40?img=3",
    messages: [
      {
        sender: "Sarah Connor",
        text: "Let's meet tomorrow at 5pm?",
        time: "14:30",
        me: false,
      },
      {
        sender: "You",
        text: "Perfect, see you then!",
        time: "14:35",
        me: true,
      },
    ],
  },
  {
    id: 10,
    name: "Dev Team",
    type: "Direct",
    lastSeen: "20m ago",
    preview: "Sprint planning at 10AM.",
    avatar: "https://i.pravatar.cc/40?img=4",
    messages: [
      {
        sender: "Dev Team",
        text: "Don’t forget sprint planning tomorrow.",
        time: "09:00",
        me: false,
      },
      { sender: "You", text: "Got it!", time: "09:05", me: true },
    ],
  },
  {
    id: 11,
    name: "shivi mukati",
    type: "Direct",
    lastSeen: "Just now",
    preview: "Please add me to your contacts.",
    avatar: "https://i.pravatar.cc/40?img=5",
    messages: [
      {
        sender: "shivi mukati",
        text: "Hey! Please add me.",
        time: "08:00",
        me: false,
      },
    ],
  },
  {
    id: 12,
    name: "Rudhra patel",
    type: "Direct",
    lastSeen: "1m ago",
    preview: "I'd like to connect with you.",
    avatar: "https://i.pravatar.cc/40?img=6",
    messages: [
      {
        sender: "Rudhra patel",
        text: "Hi there! I'd like to connect.",
        time: "12:00",
        me: false,
      },
    ],

  },
];




const MessagePage = () => {
   
  const [chats, setChats] = useState(initialChatUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [filter, setFilter] = useState("Direct");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMessageIdx, setSelectedMessageIdx] = useState(null);
  const [started, setStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [chatWallpaper, setChatWallpaper] = useState(null);
  const [requestButton,setRequestButton]=useState(false)
  const [pinnedUserIds, setPinnedUserIds] = useState([]);


  const handleView = (index) => {
  const requestUser = chats[index];
  
  // OR if you prefer by ID:
  // const requestUser = chats.find(chat => chat.id === id);

  setSelectedUser(requestUser);

  setStarted(true);

  console.log("Opened request chat:", requestUser);
};


  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        const locationMessage = {
          type: "location",
          lat: latitude,
          lng: longitude,
          time: new Date().toLocaleTimeString(),
          me: true,
        };

        setMessages((prev) => [...prev, locationMessage]);
      },
      (error) => {
        console.error(error);
        alert("Unable to retrieve your location.");
      }
    );
  };

  const navigate = useNavigate();

  const chatSectionRef = useRef(null);

  // Scroll to chat section when user is selected
  useEffect(() => {
    if (selectedUser && chatSectionRef.current) {
      chatSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedUser]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCopy = (msg) => {
    navigator.clipboard.writeText(msg.text);
    alert("Message copied!");
  };

  const handleForward = (msg) => {
    console.log("Forward:", msg);
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = selectedUser.messages.filter((_, i) => i !== index);
    setSelectedUser({ ...selectedUser, messages: updatedMessages });
    setSelectedMessageIdx(null);
  };

  const handleSend = () => {
    if (!messageText.trim() || !selectedUser) return;

    const newMessage = {
      sender: "You",
      text: messageText.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      me: true,
    };

    const updatedChats = chats.map((chat) =>
      chat.id === selectedUser.id
        ? {
            ...chat,
            messages: [...chat.messages, newMessage],
            preview: newMessage.text.slice(0, 30) + "...",
          }
        : chat
    );

    setChats(updatedChats);
    setSelectedUser({
      ...selectedUser,
      messages: [...selectedUser.messages, newMessage],
    });
    setMessageText("");
    setShowEmojis(false);
    setShowPopup(false);
  };

  // const handleDeleteRequests = () => {
  //   //filter out 'Requests' chats
  //   setChats((prev) => prev.filter((chat) => chat.type !== "Requests"));
  // };

  return (
     <>
      {/* <div className="dark:dark-color w-screen h-screen flex  bg-gray-100"> */}
      <div className="max-md:hidden lg:w-2/12 z-40"><Sidebar/></div>
      <div className="dark:dark-color max-lg:ml-0 ml-[245px] h-screen bg-gray-100 overflow-X-hidden z-10">
         {/* <> */}
      {/* Mobile start screen */}
      {!started && isMobile && (
        <>
          <Link
            to="/feed"
            className="dark:dark-color flex items-center font-semibold text-black py-4 px-4"
          >
            <MdExpandLess className="transform -rotate-90 text-2xl" />
            <span className="font-semibold text-xl ml-2">Back to Home</span>
          </Link>

          <div className="dark:dark-color w-screen h-screen flex flex-col items-center justify-center text-center p-6">
            <img src={message} alt="message" className="w-46 h-46 mb-4" />
            <h1 className="text-xl font-bold mb-2">Start a Conversation!</h1>
            <p className="text-gray-600 mb-4">
              No chats yet! Start a conversation and connect instantly. 💬 🚀
            </p>
            <button
              onClick={() => setStarted(true)}
              className="px-4 py-2 text-[#1C4BC4] font-semibold hover:bg-blue-700"
            >
              Start Conversation
            </button>
          </div>
        </>
      )}

      {/* Sidebar + Chat */}
      {(started || !isMobile) && (
        <div className="dark:dark-color flex h-screen  font-sans">
          {/* Sidebar */}
          <div className="dark:dark-color h-screen max-md:bg-gradient-to-r from-[#1C4BC4] to-[#9645FF]  bg-white border-r max-md:p-0 p-4 flex flex-col">
            <Link
              to="/message"
              className="lg:hidden flex items-center font-semibold text-white dark:text-white py-4 px-4"
            >
              <MdExpandLess className="transform rotate-[-90deg] text-2xl" />
            </Link>

            <h2 className="w-full text-2xl text-center max-md:text-white font-semibold mb-4">
              Chats
            </h2>

            <div className="dark:dark-color bg-white h-screen max-md:mt-10 max-md:border-t rounded-3xl">
              <input
                type="text"
                placeholder="Search for People"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-md:mt-8 dark:dark-color lg:hidden max-md:ml-4 max-md:bg-gray-100 max-md:rounded-xl max-md:w-11/12 w-full h-[50px] px-4 border rounded-3xl mb-4 text-sm outline-[#a952e4]"
              />

              <div className="dark:dark-color  max-md:w-screen  w-full flex justify-between space-x-1 mb-4 border border-gray-200  rounded-3xl p-2">
                {["Direct", "Groups", "Requests"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilter(type)}
                    className={`w-[124px] max-md:w-32 h-[40px] px-3 py-1 rounded-full  text-md ${
                      filter === type
                        ? "btn-gradient text-white"
                        : " text-gray-800 dark:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              

              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="dark:dark-color max-md:hidden w-full h-[50px] ml-2 px-4 border rounded-3xl mb-4 text-sm outline-[#a952e4]"
              />

        

           <div className="w-full flex max-md:w-screen flex-col overflow-y-auto scrollbar-hide xl:h-[435px] gap-2">
  {/* Scrollable Chat List */}
  {chats
    .filter(
      (user) =>
        user.type === filter &&
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aPinned = pinnedUserIds.includes(a.id);
      const bPinned = pinnedUserIds.includes(b.id);
      return aPinned === bPinned ? 0 : aPinned ? -1 : 1;
    })
    .map((user) => (
      <div
        key={user.id}
        onClick={() => {
          setSelectedUser(user);
          if (isMobile) setStarted(true);
        }}
        className={`flex items-center max-md:gap-4 max-md:h-16 justify-between lg:border p-2 rounded cursor-pointer transition-colors duration-200 ${
          selectedUser?.id === user.id
            ? "dark:bg-blue-300 border-blue-500 text-black"
            : "hover:bg-gray-300 hover:text-black"
        } ${pinnedUserIds.includes(user.id) ? "border-blue-400 border-2" : ""}`}
      >
        <div className="flex items-center gap-4">
       <div className="relative">
  <img
    src={user.avatar}
    alt={user.name}
    className="rounded-full max-md:w-14 max-md:h-14 w-10 h-10"
  />
  {user.isOnline && (
    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
  )}
</div>

          <div>
            <p className="font-medium text-sm">{user.name}</p>
            <p className="text-xs text-gray-500">{user.preview}</p>
          </div>
       <span className="text-xs text-gray-400">
    {user.isOnline ? "Online" : user.lastSeen}
  </span>
        </div>

        {/* Pin/Unpin Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (pinnedUserIds.includes(user.id)) {
              // Unpin
              setPinnedUserIds(pinnedUserIds.filter((id) => id !== user.id));
            } else {
              if (pinnedUserIds.length < 3) {
                setPinnedUserIds([...pinnedUserIds, user.id]);
              } else {
                alert("You can pin up to 3 chats only.");
              }
            }
          }}
          className="ml-2 text-xs px-1 py-1 rounded-full bg-blue-600"
        >
          {pinnedUserIds.includes(user.id) ? <BsPinAngleFill /> : ""}
        </button>
      </div>
    ))}
</div>

            </div>
          </div>

          {/* Chat Section */}
      <div
  ref={chatSectionRef}
  className="dark:dark-color xl:w-[870px] max-lg:w-[500px] flex-1 flex flex-col bg-gray-50 mb-3"
>
  {selectedUser ? (
    <>
      {/* === Header === */}
      <div className="dark:dark-color max-md:w-screen max-lg:w-screen w-full flex justify-between items-center p-4 border-b bg-white">
        <div className="flex items-center gap-3">
          <Link
            to="/message"
            className="dark:text-white lg:hidden flex items-center font-semibold text-black dark:text-black py-4 px-4"
          >
            <MdExpandLess className="transform rotate-[-90deg] text-2xl" />
          </Link>
          <img
            src={
              selectedUser.avatar
                ? selectedUser.avatar
                : "https://i.pravatar.cc/40"
            }
            alt=""
            className="rounded-full w-10 h-10"
          />
          <div>
            <h3 className="font-semibold">
              {selectedUser.name}
            </h3>
             <span className="text-xs text-gray-400">
    {selectedUser.isOnline ? "Online" : selectedUser.lastSeen}
  </span>
            {/* <p className="text-xs text-gray-500">
              Last seen {selectedUser.lastSeen}
            </p> */}
          </div>
        </div>
        <div className="space-x-3">
          <button
            onClick={() =>
              navigate("/videocall", { state: { user: selectedUser } })
            }
          >
            <FaPhoneAlt className="text-2xl" />
          </button>
          <button
            onClick={() =>
              navigate("/videocall", { state: { user: selectedUser } })
            }
          >
            <FaVideo className="text-2xl" />
          </button>
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="text-3xl"
          >
            ⋮
          </button>
          {showOptions && (
            <div className="dark:dark-color absolute right-4 top-14 bg-white border rounded shadow w-46 z-50">
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => setShowOptions(false)}
              >
                Label chat
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => setShowOptions(false)}
              >
                View Contact
              </button>
              <input
                type="file"
                id="mediaInput"
                className="hidden"
                multiple
                accept="image/*,application/pdf"
              />
              <button
                onClick={() => {
                  document.getElementById("mediaInput").click();
                  setShowOptions(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Media, Links and docs
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => setShowOptions(false)}
              >
                Search
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => setShowOptions(false)}
              >
                Mute notifications
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => setShowOptions(false)}
              >
                Disappearing messages
              </button>
              <input
                id="wallpaperInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const url = URL.createObjectURL(file);
                    setChatWallpaper(url);
                  }
                }}
              />
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() =>
                  document.getElementById("wallpaperInput").click()
                }
              >
                Wallpaper
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => setShowOptions(false)}
              >
                More
              </button>
            </div>
          )}
        </div>
      </div>

      {/* === Messages === */}
      <div
        className="flex-1 p-4 space-y-6 overflow-y-auto"
        style={{
          backgroundImage: chatWallpaper ? `url(${chatWallpaper})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
       
       
       
        {selectedUser?.messages?.map((msg, idx) => (
          <div
            key={idx}
            className={`relative flex ${
              msg.me ? "justify-end" : "justify-start"
            }`}
            onClick={() => setSelectedMessageIdx(idx)}
          >
            {/* <div
              className={`max-w-sm p-3 rounded-xl ${
                msg.me
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800 shadow"
              }`}
            >
              {!msg.me && (
                <p className="text-xs text-gray-500 mb-1">{msg.sender}</p>
              )}
              <p className="text-sm">{msg.text}</p>
              <p className="text-xs mt-2 text-right">{msg.time}</p>
            </div> */}

         <div
  key={idx}
  className={`relative flex group ${msg.me ? "justify-end" : "justify-start"}`}
>
  <div
    className={`max-w-sm p-3 rounded-xl ${
      msg.me
        ? "bg-blue-600 text-white"
        : "bg-white text-gray-800 shadow"
    }`}
  >
    {!msg.me && (
      <p className="text-xs text-gray-500 mb-1">{msg.sender}</p>
    )}
    <p className="text-sm">{msg.text}</p>
    <p className="text-xs mt-2 text-right">{msg.time}</p>
  </div>

  <div className="absolute top-0 right-0 mt-[-20px] hidden group-hover:flex gap-2 bg-white shadow p-2 rounded">
    <button onClick={() => handleCopy(msg)}>
      <FiCopy />
    </button>
    <button onClick={() => handleForward(msg)}>
      <IoIosSend />
    </button>
    <button onClick={() => handleDeleteMessage(idx)}>
      <FiTrash2 />
    </button>
  </div>
</div>

          </div>
        ))}
      </div>

      {/* === Request Actions === */}
      {selectedUser?.type === "Requests" && (
        <div className="flex justify-center items-center">
          <div className="flex gap-2 px-4 mb-4">
            <button
              onClick={() => {
                setChats((prev) =>
                  prev.map((chat) =>
                    chat.id === selectedUser.id
                      ? { ...chat, type: "Direct" }
                      : chat
                  )
                );
                setSelectedUser({ ...selectedUser, type: "Direct" });
              }}
              className="bg-white text-black border border-gray-400 rounded-xl px-4 py-2"
            >
              Accept
            </button>
            <button
              onClick={() => {
                setChats((prev) =>
                  prev.filter((chat) => chat.id !== selectedUser.id)
                );
                setSelectedUser(null);
              }}
              className="bg-white text-black border border-gray-400 rounded-xl px-4 py-2"
            >
              Ignore
            </button>
            <button
              onClick={() => console.log("Report clicked")}
              className="bg-white text-black border border-gray-400 rounded-xl px-4 py-2"
            >
              Report
            </button>
          </div>
        </div>
      )}

      {/* === Input === */}
      {selectedUser?.type !== "Requests" && (
        <div className="relative dark:dark-color p-4 border-t bg-white flex items-center gap-3">
          {/* Emoji */}
          <div className="relative">
            <button
              onClick={() => setShowEmojis(!showEmojis)}
              className="text-xl"
            >
              😊
            </button>
            {showEmojis && (
              <div className="absolute bottom-14 left-0 bg-white border rounded shadow p-2 flex gap-2">
                {["😀", "😁", "😂", "😍", "👍"].map((emoji) => (
                  <button
                    key={emoji}
                    className="text-2xl"
                    onClick={() => {
                      setMessageText((prev) => prev + emoji);
                      setShowEmojis(false);
                    }}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Textarea */}
          <textarea
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Write a message..."
            className="dark:dark-color dark:text-black dark:border dark:border-gray-600 rounded-xl flex-1 px-4 py-2 outline-none text-sm resize-none"
          />

          {/* Attach */}
          <div className="dark:dark-color relative">
            <button onClick={() => setShowPopup(!showPopup)}>
              <img src={LinkIcon} alt="" />
            </button>
            {showPopup && (
              <div className="dark:dark-color absolute bottom-14 right-0 bg-white border rounded shadow p-4 w-48 flex flex-col gap-3 z-50">
                {/* Document */}
                <input
                  type="file"
                  id="docInput"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      console.log("Selected document:", file);
                    }
                  }}
                />
                <button
                  className="flex items-center gap-2 text-sm hover:bg-gray-100 p-2 rounded"
                  onClick={() => document.getElementById("docInput").click()}
                >
                  <span className="w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded">
                    <IoDocumentText />
                  </span>
                  Document
                </button>

                {/* Camera */}
                <input
                  type="file"
                  id="cameraInput"
                  accept="image/*"
                  capture="environment"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      console.log("Captured photo:", file);
                    }
                  }}
                />
                <button
                  className="flex items-center gap-2 text-sm hover:bg-gray-100 p-2 rounded"
                  onClick={() => document.getElementById("cameraInput").click()}
                >
                  <span className="w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded">
                    <FaCamera />
                  </span>{" "}
                  Camera
                </button>

                {/* Gallery */}
                <input
                  type="file"
                  id="galleryInput"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={(e) => {
                    const files = e.target.files;
                    console.log("Selected gallery images:", files);
                  }}
                />
                <button
                  className="flex items-center gap-2 text-sm hover:bg-gray-100 p-2 rounded"
                  onClick={() => document.getElementById("galleryInput").click()}
                >
                  <span className="w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded">
                    <GrGallery />
                  </span>{" "}
                  Gallery
                </button>

                {/* Location */}
                <button
                  className="flex items-center gap-2 text-sm hover:bg-gray-100 p-2 rounded"
                  onClick={handleGetLocation}
                >
                  <span className="w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded">
                    <MdLocationOn />
                  </span>{" "}
                  Location
                </button>

                {/* Contact */}
                <button className="flex items-center gap-2 text-sm hover:bg-gray-100 p-2 rounded">
                  <span className="w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded">
                    <RiContactsFill />
                  </span>{" "}
                  Contact
                </button>
              </div>
            )}
          </div>

          {/* Send */}
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center"
          >
            <img src={SendIcon} alt="" className="w-6 h-6 -rotate-45" />
          </button>
        </div>
      )}
    </>
  ) : (
    <div className="flex-1 flex items-center justify-center text-center p-10">
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4076/4076507.png"
          alt="No Chat Selected"
          className="w-40 h-40 mx-auto mb-4 opacity-50"
        />
        <h2 className="text-xl font-semibold text-gray-600 mb-2">
          No conversation selected
        </h2>
        <p className="text-gray-500">
          Select a chat from the sidebar to start messaging.
        </p>
      </div>
    </div>
  )}
</div>

        </div>
      )}
      <Footer/> 
    {/* </> */}
      </div>
    {/* </div> */}
       {/* <Footer/> */}
    </>
  )
}

export default MessagePage
