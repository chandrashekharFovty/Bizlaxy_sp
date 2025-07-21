import React, { useRef, useEffect, useState } from "react";
import { CiVideoOff, CiVideoOn } from "react-icons/ci";
import { IoIosMore, IoIosSend } from "react-icons/io";
import { IoMicOffOutline } from "react-icons/io5";
import { LuMessageCircleMore, LuMic } from "react-icons/lu";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { useLocation, Link, useNavigate } from "react-router-dom";

// Dummy icons as placeholder
import LinkIcon from "../../../public/link.png"; // Replace with your path
import SendIcon from "../../../public/send.png"; // Replace with your path

function VoiceCall() {
  const location = useLocation();
  const user = location.state?.user;
  const localVideoRef = useRef(null);
  const [localStreamActive, setLocalStreamActive] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali.",
      from: "other",
    },
    {
      text: "That’s very nice place! You guys made a good decision.",
      from: "me",
    },
  ]);
  const [message, setMessage] = useState("");

  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [showMsgPopup, setShowMsgPopup] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const toggleMic = () => setIsMicOn((prev) => !prev);
  const toggleVideo = () => setIsVideoOn((prev) => !prev);
  const toggleMsg = () => setShowMsgPopup((prev) => !prev);

  const endCall = () => {
    console.log("Call ended");
    navigate("/message");
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages((prev) => [...prev, { text: message.trim(), from: "me" }]);
      setMessage("");
      setShowMsgPopup(false);
      setShowEmojis(false);
    }
  };

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
          setLocalStreamActive(true);
        }
      })
      .catch((err) => {
        console.error("Error accessing media devices.", err);
        setLocalStreamActive(false);
      });
  }, []);

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Main Video Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="w-[80%] flex h-[60px] ml-20 mt-10 rounded-xl pt-2 pl-2 glass-bg-light">
          <Link
            to="/message"
            className="text-2xl mt-2 dark:text-white text-white inline-block"
          >
            &lt;
          </Link>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">
              {user?.name || "Unknown User"}
            </h2>
            <p className="text-xs">Ongoing Call – 9:32</p>
          </div>
        </div>

        {/* Video Tiles */}
        <div className="flex flex-1 justify-center items-center gap-6 p-8">
          <div className="relative w-[450px] h-[400px] rounded-xl overflow-hidden">
            {localStreamActive ? (
              <video
                ref={localVideoRef}
                autoPlay
                muted
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src="https://i.pravatar.cc/400?img=12"
                alt="Local User"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="relative w-[450px] h-[400px] rounded-xl overflow-hidden bg-black">
            <img
              src="https://i.pravatar.cc/400?img=20"
              alt="Remote User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center pb-6 relative">
          <div className="flex gap-6 glass-bg-light px-6 py-3 rounded-full">
            <button
              onClick={toggleMsg}
              className="w-12 h-12 flex items-center justify-center glass-bg-dark rounded-full hover:bg-gray-600"
            >
              <LuMessageCircleMore className="text-2xl" />
            </button>

            <button
              onClick={toggleVideo}
              className={`w-12 h-12 flex items-center justify-center rounded-full ${
                isVideoOn
                  ? "glass-bg-dark hover:bg-gray-600"
                  : "glass-bg-dark hover:bg-gray-700"
              }`}
            >
              {isVideoOn ? (
                <CiVideoOn className="text-2xl" />
              ) : (
                <CiVideoOff className="text-2xl" />
              )}
            </button>

            <button
              onClick={endCall}
              className="w-12 h-12 flex items-center justify-center bg-red-600 rounded-full hover:bg-red-700"
            >
              📞
            </button>

            <button
              onClick={toggleMic}
              className={`w-12 h-12 flex items-center justify-center rounded-full ${
                isMicOn
                  ? "glass-bg-dark hover:bg-gray-600"
                  : "glass-bg-dark hover:bg-gray-700"
              }`}
            >
              {isMicOn ? (
                <LuMic className="text-2xl" />
              ) : (
                <IoMicOffOutline className="text-2xl" />
              )}
            </button>

            <button className="w-12 h-12 flex items-center justify-center glass-bg-dark rounded-full hover:bg-gray-600">
              <IoIosMore />
            </button>
          </div>

          {showMsgPopup && (
            <div className="absolute bottom-20 bg-gray-900 p-4 rounded-lg w-64 shadow-lg">
              <h3 className="text-sm mb-2">Send a Message</h3>
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full mb-2 px-2 py-1 rounded bg-gray-800 border border-gray-600 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="w-full bg-blue-600 py-2 rounded text-sm"
              >
                Send
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Right-side Chat */}
      <div className="w-[300px] mt-14 mb-4 rounded-xl mx-4 bg-gray-900 flex flex-col">
        {/* User Info */}
        <div className="bg-gray-400">
          <div className="flex mt-2 ml-2 items-center gap-3 mb-4">
            <img
              src={user?.avatar || "https://i.pravatar.cc/40?img=1"}
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{user?.name || "Unknown"}</p>
              <p className="text-xs text-white">Active now</p>
            </div>
          </div>
        </div>

        <hr className="border-1 border-white " />

        {/* Messages */}
        <div className="flex mt-10 flex-col gap-2 ml-2 mr-4 rounded-xl flex-1 overflow-y-auto mb-4">
          {messages.map((msg, idx) =>
            msg.from === "me" ? (
              <div
                key={idx}
                className="self-end bg-blue-600 p-3 rounded-xl mt-2 text-sm"
              >
                {msg.text}
              </div>
            ) : (
              <div
                key={idx}
                className="bg-white text-black p-3 rounded-lg text-sm"
              >
                {msg.text}
              </div>
            )
          )}
        </div>

        {/* Input */}
        <div className="relative dark:bg-gray-800 dark:text-white p-2 border-t bg-gray-400 flex items-center gap-1">
          {/* Emoji */}
          <div className="relative">
            <button
              onClick={() => setShowEmojis(!showEmojis)}
              className="text-xl"
            >
              <MdOutlineEmojiEmotions />
            </button>
            {showEmojis && (
              <div className="absolute bottom-14 left-0 bg-white border rounded shadow p-2 flex gap-2">
                {["😀", "😁", "😂", "😍", "👍"].map((emoji) => (
                  <button
                    key={emoji}
                    className="text-2xl"
                    onClick={() => {
                      setMessage((prev) => prev + emoji);
                      setShowEmojis(false);
                    }}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            )}
          </div>

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a message..."
            className="dark:bg-gray-800 dark:text-white dark:borde bg-gray-700 dark:border-white flex-1 px-4 py-2 outline-none text-sm"
          />

          {/* Attachments */}
          <div className="relative">
            <button onClick={() => setShowPopup(!showPopup)} >
              <img src={LinkIcon} alt="" className="h-6 mt-2"/>
            </button>
            {showPopup && (
              <div className="absolute bottom-14 right-0 bg-white border rounded shadow p-4 w-48 flex flex-col gap-3 z-50">
                <button className="flex items-center gap-2 text-sm hover:bg-gray-100 p-2 rounded">
                  📄 Document
                </button>
                <button className="flex items-center gap-2 text-sm hover:bg-gray-100 p-2 rounded">
                  👤 Contact
                </button>
                <button className="flex items-center gap-2 text-sm hover:bg-gray-100 p-2 rounded">
                  🖼️ Media File
                </button>
                <button className="flex items-center gap-2 text-sm hover:bg-gray-100 p-2 rounded">
                  📑 PDF
                </button>
              </div>
            )}
          </div>

          <button
            onClick={handleSendMessage}
            className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center"
          >
            <IoIosSend className="w-4 h-4 -rotate-45" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default VoiceCall;
