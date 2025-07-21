import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CgDetailsMore } from "react-icons/cg";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiGraduationCapBold } from "react-icons/pi";
import { CiShop } from "react-icons/ci";
import { BiWorld } from "react-icons/bi";
import { LuMessageCircleMore } from "react-icons/lu";
import { Dialog } from "@headlessui/react";

import {
  MdAnnouncement,
  MdOutlineNotificationsActive,
  MdCampaign,
} from "react-icons/md";
import { CgAddR } from "react-icons/cg";
// import AnnouncementIcon from '@mui/icons-material/Announcement';
import Create from "../../pages/Create";
import Settings from "../../pages/Settings";
// import ProfilePager from "@/pages/ProfilePager";
// import profile from "@/pages/ProfilePager";
// import { SearchIcon } from "lucide-react";
// import MessagePage from "@/pages/MessagePage";
// import Notifications, { notify } from "../notifications/Notifications";
// import Homepage from "@/pages/Homepage";
// import Pitch from "@/pages/Pitch";
// import ShopPage from "@/pages/ShopPage";
// import EduvidPage from "@/pages/EduvidPage";
import { SearchInput } from "@/components/ui/SearchInput";
// import { StretchHorizontallyIcon } from "@radix-ui/react-icons";
import addeduvid from "../../../public/addEduvid.png";
import addStory from "../../../public/addStory.png";
import addproduct from "../../../public/addProduct.png";
import addpost from "../../../public/addPost.png";
import addpitch from "../../../public/addPitch.png";
import addsettings from "../../../public/settings.png";
import addmoon from "../../../public/moon.png";
import shop from "../../../public/shop.png";
import isShop from "../../../public/isShop.png";
import isExplore from "../../../public/isExplore.png";
import isPitch from "../../../public/isPitch.png";
import isMessages from "../../../public/isMessages.png";
import isNotification from "../../../public/mainNoti.png";
import isEduvid from "../../../public/isEduvid.png";
import isHome from "../../../public/isHome.png";
import isAddsMa from "../../../public/isAddApear.png";
import isMore from "../../../public/menuSelected.png";
import oneUser from "../../../public/userOne.png";
import PostCreation from "../feed/PostCreation";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showMorePopover, setShowMorePopover] = useState(false);
  const [showCreatePopover, setShowCreatePopover] = useState(false);
  const [showCreatePostPopover, setShowCreatePostPopover] = useState(false);
  const [showCreateStoryPopover, setShowCreateStoryPopover] = useState(false);
  const [showCreateEduvidPopover, setShowCreateEduvidPopover] = useState(false);
  const [showCreatePitchPopover, setShowCreatePitchPopover] = useState(false);
  const [showCreateProductPopover, setShowCreateProductPopover] =
    useState(false);
  const [showSwitchAccountPopover, setShowSwitchAccountPopover] =
    useState(false);

  const moreRef = useRef(null);
  const createRef = useRef(null);
  const createPostRef = useRef(null);
  const createStoryRef = useRef(null);
  const createEduvidRef = useRef(null);
  const createProductRef = useRef(null);
  const SwitchAccountRef = useRef(null);
  const CreatePitchRef = useRef(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      moreRef.current &&
      !moreRef.current.contains(e.target as Node) &&
      createRef.current &&
      !createRef.current.contains(e.target as Node)
    ) {
      setShowMorePopover(false);
      setShowCreatePopover(false);
    } else if (
      createPostRef.current &&
      !createPostRef.current.contains(e.target as Node) &&
      createStoryRef.current &&
      !createStoryRef.current.contains(e.target as Node) &&
      createEduvidRef.current &&
      !createEduvidRef.current.contains(e.target as Node) &&
      createProductRef.current &&
      !createProductRef.current.contains(e.target as Node) &&
      SwitchAccountRef.current &&
      !SwitchAccountRef.current.contains(e.target as Node) &&
      CreatePitchRef.current &&
      !CreatePitchRef.current.contains(e.target as Node)
    ) {
      setShowCreatePostPopover(false);
      setShowCreateStoryPopover(false);
      setShowCreateEduvidPopover(false);
      setShowCreateProductPopover(false);
      setShowSwitchAccountPopover(false);
      setShowCreatePitchPopover(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClass = (path: string) =>
    `${
      location.pathname.startsWith(path)
        ? "text-blue-800 font-semibold dark:text-blue-800"
        : "font-normal text-[16px]"
    }`;

  const profileClass = (path: string) =>
    `${
      location.pathname.startsWith(path)
        ? "text-black-900 font-medium"
        : "font-normal text-[16px]"
    }`;

  const Logout = function () {
    localStorage.removeItem("user");
    toast.info("Logged out successfully!");
    navigate("/", { replace: true });
  };

  //Close on outside click for story
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        createStoryRef.current &&
        !createStoryRef.current.contains(event.target)
      ) {
        setShowCreateStoryPopover(false);
      }
    };

    if (showCreateStoryPopover) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCreateStoryPopover]);

  // Close on outside click for post
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        createPostRef.current &&
        !createPostRef.current.contains(event.target)
      ) {
        setShowCreatePostPopover(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const iconClass = "w-6 h-6 object-contain  filter dark:invert";
  return (
    <div className=" dark:dark-color bg-white fixed max-xl:w-60 min-h-[982px] max-h-screen w-[245px] max-lg:w-[70px] max-md:hidden border-solid border-r-2 border-[#f3f2fa] pr-px z-40">
      <div className="cursor-pointer mt-8 max-lg:text-[16px] max-md:text-[16px] max-md:tracking-[0px] max-lg:tracking-[1px] text-[22px] md:font-normal uppercase ml-5 max-lg:w-[90px] max-lg:ml-1 w-[124px] h-[28px] tracking-[3px]">
        <Link to="/feed" className="font-medium">
          Bizlaxy
        </Link>
      </div>
      <div className="max-md:hidden dark:text-gray-300 z-10 w-[220px] max-md:mt-[8px] ml-5 text-[16px] flex flex-col gap-1 pt-3">
        <Link to="/feed" className={linkClass("/feed")}>
          <div className="flex gap-4 items-center w-[220px] h-[48px] cursor-pointer">
            <img
              src={
                location.pathname.startsWith("/feed")
                  ? isHome // active icon
                  : "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/5ed17d91467fa0c1436cea18b687378a7e31c2a0?placeholderIfAbsent=true"
              }
              className={iconClass}
              // className="aspect-[1] dark:text-white object-contain w-6 h-6"
            />

            <div className="flex overflow-hidden max-lg:hidden filter ">
              <div className="overflow-hidden ">
                Home
              </div>
            </div>
          </div>
        </Link>
        <Link to="/pitch" className={linkClass("/pitch")}>
          <div className="flex gap-4 items-center w-[220px] h-[48px] cursor-pointer">
            <img
              src={
                location.pathname.startsWith("/pitch")
                  ? isPitch // active icon
                  : "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/f4e6bdd2f9fbf5cf1aaddf944e19c812791d2cc2?placeholderIfAbsent=true"
              }
              className={iconClass}
              //  className="aspect-[1] object-contain w-6 h-6 shrink-0"
            />

            <div className="flex overflow-hidden max-lg:hidden w-full h-[24px]">
              <div className="overflow-hidden cursor-pointer filter ">
                Pitch
              </div>
            </div>
          </div>
        </Link>
        <Link to="/eduvid" className={linkClass("/eduvid")}>
          <div className="flex gap-4 items-center w-[220px] h-[48px] cursor-pointer">
            <img
              src={
                location.pathname.startsWith("/eduvid")
                  ? isEduvid // active icon
                  : "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/adec999e0e21f2d5bfc443a548dcbf1cfa2f2368?placeholderIfAbsent=true"
              }
              className={iconClass}
              // className="aspect-[1] object-contain w-6 h-6 shrink-0"
            />
            <div className="flex overflow-hidden max-lg:hidden w-full h-[24px]">
              <div className="cursor-pointer overflow-hidden filter ">
                Eduvid
              </div>
            </div>
          </div>
        </Link>
        <Link to="/shop" className={linkClass("/shop")}>
          <div className="flex gap-4 items-center w-[220px] h-[48px] cursor-pointer">
            <img
              src={
                location.pathname.startsWith("/shop")
                  ? isShop // active icon
                  : shop
              }
              className={iconClass}
              // className="aspect-[1] object-contain w-6 h-6 shrink-0"
            />
            <div className="flex overflow-hidden max-lg:hidden">
              <div className="cursor-pointer  overflow-hidden filter ">
                Shop
              </div>
            </div>
          </div>
        </Link>
        <Link to="/explore" className={linkClass("/explore")}>
          <div className="flex gap-4 items-center w-[220px] h-[48px] cursor-pointer">
            <img
              src={
                location.pathname.startsWith("/explore")
                  ? isExplore // active icon
                  : "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/6ac791b8e7c33b28c671a0f0abb77cc2ceaa8e94?placeholderIfAbsent=true"
              }
              className={iconClass}
              // className="aspect-[1] object-contain w-6 h-6 shrink-0"
            />
            <div className="flex overflow-hidden max-lg:hidden">
              <div className="cursor-pointer  overflow-hidden filter">
                Explore
              </div>
            </div>
          </div>
        </Link>
        <Link to="/message" className={linkClass("/message")}>
          <div className="flex gap-4 items-center w-[220px] h-[48px] cursor-pointer">
            <div className="flex relative">
              <img
                src={
                  location.pathname.startsWith("/message")
                    ? isMessages // active icon
                    : "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/048c65adc7c2e8cfb4f567c51ef2f70d71bc33a1?placeholderIfAbsent=true"
                }
                className={iconClass}
                // className="aspect-[1] object-contain w-6 h-6 shrink-0"
              />
              {/* <span className="absolute top-0  w-4 h-4 btn-gradient text-white flex justify-center items-center  text-xs rounded-full">
                5
              </span> */}
              <div className="flex overflow-hidden max-lg:hidden w-full h-[24px]">
                <div className=" ml-4 cursor-pointer  overflow-hidden filter ">
                  Messages
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/notification" className={linkClass("/notification")}>
          <div className="flex gap-4 items-center w-[220px] h-[48px] cursor-pointer">
            <img
              src={
                location.pathname.startsWith("/notification")
                  ? isNotification // active icon
                  : isNotification // active icon
                  // "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/ddc2d6b5c9983cbc802eb07c080e5c167907c5d1?placeholderIfAbsent=true"
              }
              className={iconClass}
              //  className="aspect-[1] object-contain w-6 h-6 shrink-0"
            />
            <div className="flex overflow-hidden max-lg:hidden w-full h-[24px]">
              <div className="cursor-pointer dark:in overflow-hidden filter ">
                Notifications
              </div>
            </div>
          </div>
        </Link>
        {/* CREATE POPOVER */}
        <div ref={createRef} className="relative">
          <div
            className="flex gap-4 items-center w-[220px] h-[48px] cursor-pointer"
            onClick={() => {
              setShowCreatePopover(!showCreatePopover);
              setShowMorePopover(false);
            }}
          >
            <img
              src={
                location.pathname.startsWith("/create")
                  ? isHome // active icon
                  : "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/c293cbaba4e54351666fe2231928139d3ebcc7dc?placeholderIfAbsent=true"
              }
              className={iconClass}
              // className="aspect-[1] object-contain w-6 h-6 shrink-0"
            />
            <div className="flex overflow-hidden max-lg:hidden">
              <div className=" overflow-hidden pr-0.5 filter dark:invert text-black">
                Create
              </div>
            </div>
          </div>

          {/* Show the main popover only if story dialog is NOT open */}
          {showCreatePopover && <Create />}
        </div>
        <Link to="/profile" className={profileClass("/profile")}>
          <div className="flex gap-4 items-center w-[220px] h-[48px] cursor-pointer ">
            <img
              src={
                location.pathname.startsWith("/profile")
                  ? "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/557c06d2630f449be2379bf4d30b96ed96e290af?placeholderIfAbsent=true"
                  : "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/557c06d2630f449be2379bf4d30b96ed96e290af?placeholderIfAbsent=true"
              }
              // className={iconClass}
              className="aspect-[1] object-contain w-6 h-6 shrink-0"
            />
            <div className="flex overflow-hidden max-lg:hidden">
              <div className="cursor-pointer overflow-hidden ">Profile</div>
            </div>
          </div>
        </Link>

        <Link to="/adds" className={linkClass("/adds")}>
          <div className="flex gap-4 items-center w-[220px] h-[48px] cursor-pointer">
            <img
              src={
                location.pathname.startsWith("/adds")
                  ? isAddsMa // active icon
                  : "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/eac3a74db1e6e1ba057a37af1132896da819100f?placeholderIfAbsent=true"
              }
              className={iconClass}
              // className="aspect-[1] object-containw-6 h-6 shrink-0"
            />
            <div className="flex overflow-hidden max-lg:hidden w-full h-[24px]">
              <div className="cursor-pointer  overflow-hidden filter ">
                Ad's Manager
              </div>
            </div>
          </div>
        </Link>

        {/* MORE POPOVER */}
        <div ref={moreRef} className="relative">
          <div
            className="flex gap-4 items-center w-[220px] h-[48px] cursor-pointer"
            onClick={() => {
              setShowMorePopover(!showMorePopover);
              setShowCreatePopover(false);
            }}
          >
            <img
              src={
                location.pathname.startsWith("/more")
                  ? isMore // active icon
                  : "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/3c6978c80d010158ee48a627d513e225bb92bf06?placeholderIfAbsent=true"
              }
              className={iconClass}
              // className="aspect-[1] object-contain w-6 h-6 shrink-0"
            />
            <div className="flex max-lg:hidden">
              <div className="overflow-hidden">More</div>
            </div>
          </div>

          {/* Show the main popover only if story dialog is NOT open */}
          {showMorePopover && <Settings />}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export function Header() {
  const iconClass = "w-6 h-6 object-contain  filter dark:invert";
  return (
    <div className="dark:dark-color fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white border-b border-gray-200 px-4 py-2 md:hidden">
      {/* Profile Image */}
      <Link to="/profile" className="flex items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/77ee2a13878e5475d16b71f74e65e9101dc67f8d?placeholderIfAbsent=true"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </Link>

      {/* Search */}
      <div className="flex-1 mx-4">
        <Link to="/explore">
          <SearchInput />
        </Link>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
      <Link to="/notification">
        <img
            src={
              location.pathname.startsWith("/notification")
                ? isNotification // active icon
                : isNotification // active icon
                // "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/ddc2d6b5c9983cbc802eb07c080e5c167907c5d1?placeholderIfAbsent=true"
            }
            className={iconClass}
            //  className="aspect-[1] object-contain w-6 h-6 shrink-0"
          />
        </Link>
        <Link to="/message">
         <img
                src={
                  location.pathname.startsWith("/message")
                    ? isMessages // active icon
                    : "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/048c65adc7c2e8cfb4f567c51ef2f70d71bc33a1?placeholderIfAbsent=true"
                }
                className={iconClass}
                // className="aspect-[1] object-contain w-6 h-6 shrink-0"
              />
        </Link>

      </div>
    </div>
  );
}






export function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  const options = [
    { id: "CreatePost", title: "Create Post" },
    { id: "UploadProduct", title: "Upload Product" },
  ];

  const handleOptionClick = (id: string) => {
    setSelected(id);
  };

  const linkClass = (path: string) =>
    `${
      location.pathname.startsWith(path)
        ? "text-blue-800 font-semibold dark:text-blue-800"
        : "font-normal text-[16px]"
    }`;


  const handleNextClick = () => {
    if (selected === "CreatePost") {
      navigate("/createPost");
    } else if (selected === "UploadProduct") {
      navigate("/product");
    }
    setIsOpen(false);
  };
 const iconClass = "w-6 h-6 object-contain  filter dark:invert";
  const AccountOption = ({
    id,
    title,
    isSelected,
    onClick,
  }: {
    id: string;
    title: string;
    isSelected: boolean;
    onClick: () => void;
  }) => (
    <div
      className={`dark:dark-color dark:border dark:border-white border-2 w-full h-[60px] px-[35px] bg-[#eef4fd] py-[12px] rounded-[12px] cursor-pointer transition duration-200 ${
        isSelected ? "border-blue-600" : "border-[#BED6FF]"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center  justify-between">
        <h4 className="font-bold text-lg">{title}</h4>
        <div
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
            isSelected
              ? "bg-gradient-to-r from-blue-600 to-purple-600"
              : "border-[#BED6FF]"
          }`}
        >
          <div
            className={`w-3 h-3 rounded-full ${
              isSelected ? "bg-[#BED6FF]" : "bg-[#BED6FF]"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative md:hidden max-md:fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2 z-50 dark:dark-color">
      {/* Left nav */}
      <Link to="/feed" className="flex flex-col items-center text-xs">
          {/* <div className="flex gap-4 items-center w-[220px] h-[48px] cursor-pointer"> */}
            <img
              src={
                location.pathname.startsWith("/feed")
                  ? isHome // active icon
                  : "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/5ed17d91467fa0c1436cea18b687378a7e31c2a0?placeholderIfAbsent=true"
              }
              className={iconClass}
            /><span>    Home</span>
          {/* </div> */}
        </Link>

      <Link to="/pitch" className="flex flex-col items-center text-xs">
          <img
              src={
                location.pathname.startsWith("/pitch")
                  ?    isPitch  // active icon
                  :"https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/f4e6bdd2f9fbf5cf1aaddf944e19c812791d2cc2?placeholderIfAbsent=true"   }
              className={iconClass}
            />

        <span>Pitch</span>
      </Link>

      {/* Plus button */}
      <div className=" relative flex flex-col items-center">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-full">
          <button
            onClick={() => {
              setIsOpen(true);
              setSelected(null);
            }}
            className="dark:dark-color bg-white rounded-full w-16 p-4 flex items-center justify-center shadow-lg"
          >
            <span className="text-2xl">+</span>
          </button>
        </div>
      </div>

      {/* Right nav */}
      <Link to="/eduvid" className="flex flex-col items-center text-xs">
        <img
              src={
                location.pathname.startsWith("/eduvid")
                  ?    isEduvid  // active icon
                  : "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/adec999e0e21f2d5bfc443a548dcbf1cfa2f2368?placeholderIfAbsent=true"
                     }
              className={iconClass}
            />
        <span>Eduvid</span>
      </Link>

      <Link to="/shop" className="flex flex-col items-center text-xs">
       <img
              src={
                location.pathname.startsWith("/shop")
                  ?    isShop  // active icon
                  : shop      }
              className={iconClass}
            />
        <span>Shop</span>
      </Link>

      {/* Modal popup */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="dark:dark-color dark:border dark:border-white bg-white p-6 rounded-xl shadow-lg w-[350px]">
            <Dialog.Title className="text-xl text-center font-bold mb-4">
              Create
            </Dialog.Title>

            <div className="w-full overflow-y-auto flex flex-col gap-5">
              {options.map((opt) => (
                <AccountOption
                  key={opt.id}
                  id={opt.id}
                  title={opt.title}
                  isSelected={selected === opt.id}
                  onClick={() => handleOptionClick(opt.id)}
                />
              ))}
            </div>

            {selected && (
              <button
                onClick={handleNextClick}
                className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold"
              >
                Next
              </button>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}

export default Sidebar;
