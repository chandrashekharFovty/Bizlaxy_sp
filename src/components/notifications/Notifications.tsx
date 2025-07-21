import React, { useState } from "react";
import { MdExpandLess, MdOutlineNotificationsActive } from "react-icons/md";
import notificat from "../../../public/Notification.png";
import { Link, useNavigate } from "react-router-dom";
import Sidebar, { Footer } from "../layout/Sidebar";
import { RightSidebar } from "../layout/RightSidebar";

const notificationsToday = [
  {
    name: "tara.builds",
    action: "started following you.",
    time: "2hr",
    img: "https://i.pravatar.cc/150?img=1",
    type: "investor", 
  },
  {
    name: "Daniel Moretti",
    action: "just followed your profile.",
    time: "2hr",
    img: "https://i.pravatar.cc/150?img=2",
    type: "general", // <- general
  },
  {
    name: "growthwithlucas",
    action: "viewed your pitch EcoWater AI Solution.",
    time: "2hr",
    img: "https://i.pravatar.cc/150?img=3",
    type: "investor",
  },
  {
    name: "Maya Carter",
    action: "visited your profile.",
    time: "2hr",
    img: "https://i.pravatar.cc/150?img=4",
    type: "general",
  },
];

const notificationsLastWeek = [...notificationsToday, ...notificationsToday];

const NotificationItem = ({ img, name, action, time }) => (
  <div className="dark:border dark:border-white dark:dark-color max-md:w-full w-11/12  flex items-center justify-between p-4 lg:border rounded-xl max-md:shadow-lg bg-white">
    <div className=" flex items-center gap-3">
      <div className="relative">
        <img src={img} alt={name} className="w-10 h-10 rounded-full" />
        <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></span>
      </div>
      <p className="text-sm text-gray-700">
        <span className="font-semibold dark:text-white">{name}</span><br/>
       <span className="dark:text-gray-400">  {action}</span>
      </p>
    </div>
    <span className="text-xs text-gray-400">{time}</span>
  </div>
);

const NotificationSection = ({
  title,
  notifications: initialNotifications,
}) => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [actionMessage, setActionMessage] = useState(false);

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
      setActionMessage("");
    } else {
      setExpandedIndex(index);
      setActionMessage("");
    }
  };

  const navigate = useNavigate();

  const handleView = (name) => {
    navigate("/message", { state: { userName: name } });
  };

  const handleReject = (index) => {
    // Remove the rejected notification
    const updated = notifications.filter((_, i) => i !== index);
    setNotifications(updated);
    // Reset states
    setExpandedIndex(null);
    setActionMessage(false);
  };

  const handleAccept = () => {
    setActionMessage(true);
  };

  return (
    <div className="dark:dark-color space-y-3 w-max-2/10 ">
      <h2 className="dark:dark-color font-semibold text-lg max-md:text-sm text-gray-800">
        {title}
      </h2>
      <div className="space-y-2">
        {notifications.map((n, i) => (
          <div key={i}>
            <div onClick={() => handleToggle(i)} className="cursor-pointer">
              <NotificationItem {...n} />
              
            </div>
        {expandedIndex === i && n.type === "investor" && (
  <div className="flex flex-col gap-2 mt-2">
    <div className="dark:dark-color flex justify-center gap-2">
      <button
        onClick={() => handleView(n.name)}
        className={`px-3 py-1 w-24 text-black dark:dark-color hover:text-blue-600 font-semibold border border-gray-500 rounded-xl ${
          actionMessage ? "hidden" : "block"
        }`}
      >
        View
      </button>

      <button
        onClick={() => handleReject(i)}
        className={`dark:dark-color px-3 py-1 w-24 text-black hover:text-blue-600 font-semibold border border-gray-500  rounded-xl ${
          actionMessage ? "hidden" : "block"
        }`}
      >
        Reject
      </button>
      <button
        onClick={handleAccept}
        className={`dark:dark-color px-3 py-1 text-black hover:text-blue-600 font-semibold border border-gray-500  rounded-xl ${
          actionMessage ? "w-52" : "w-24"
        }`}
      >
        {actionMessage ? "View Business Plan" : "Accept "}
      </button>
    </div>
  </div>
)}

          </div>
        ))}

        {notifications.length === 0 && (
          <p className="text-gray-500">No notifications.</p>
        )}
      </div>
    </div>
  );
};

export function Notify() {
  return <MdOutlineNotificationsActive size={36} />;
}

export default function Notifications() {
  const [enabled, setEnabled] = useState(false);

  const handleEnable = () => {
    setEnabled(true);
  };

  return (
    <>
      {/* Mobile View */}
      <div className="dark:dark-color">
        {!enabled ? (
          <>
            <Link
              to="/feed"
              className="lg:hidden dark:dark-color flex items-center font-semibold text-black px-4"
            >
              <MdExpandLess className="transform -rotate-90 text-2xl" />
              <span className="font-semibold text-xl ml-2">Back to Home</span>
            </Link>
            <div className="lg:hidden dark:dark-color lg:hidden w-screen h-screen flex flex-col items-center justify-center text-center p-6">
              <img
                src={notificat}
                alt="notification"
                className=" w-46 h-46 mb-4"
              />
              <h1 className="text-2xl font-bold mb-2">Stay Updated!</h1>
              <p className="text-gray-600 mb-4">
                No notifications yet! Stay updated — turn them on now.
              </p>
              <button
                onClick={handleEnable}
                className="px-4 py-2 text-blue-500 font-semibold text-xl hover:text-blue-700"
              >
                Enable Notifications
              </button>
            </div>
          </>
        ) : (
          <div className="lg:hidden w-screen p-6">
               <Link
              to="/notification"
              className="lg:hidden dark:dark-color flex items-center font-semibold text-black mb-10 w-full"
            >
              <MdExpandLess className="transform -rotate-90 text-2xl" />
               <h1 className="text-2xl text-center font-bold  w-full">Notifications</h1>
            </Link>
           
            <div className="space-y-10  ">
              <NotificationSection
                title="Today"
                notifications={notificationsToday}
              />
              <NotificationSection
                title="Last 7 Days"
                notifications={notificationsLastWeek}
              />
            </div>
          </div>
        )}
        <Footer/>
      </div>

      {/* Desktop View */}
      {/* <div className="max-md:hidden">  <Sidebar/></div> */}
      <div className="max-lg:hidden dark:text-white dark:dark-color w-full h-auto mx-auto bg-gray-50 overflow-hidden">
        <div className="w-1/12 z-50">
          <Sidebar />
        </div>
        <div className="w-7/12 mt-2 mx-auto">
          <h1 className="text-2xl  font-bold mb-6">Notifications</h1>
          <div className="space-y-10 ">
            <NotificationSection
              title="Today"
              notifications={notificationsToday}
            />
            <NotificationSection
              title="Last 7 Days"
              notifications={notificationsLastWeek}
            />
          </div>
          <div className="fixed right-0 top-0 w-[350px] h-full z-50 bg-white">
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
}
