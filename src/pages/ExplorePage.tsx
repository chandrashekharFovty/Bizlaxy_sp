import React, { useState } from "react";
import ProfileGallery from "@/components/profile/ProfileGallery";
import Sidebar from "@/components/layout/Sidebar";
import { SearchInput } from "@/components/ui/SearchInput";
import { Link, useNavigate } from "react-router-dom";
import { MdExpandLess } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";

const ExplorePage: React.FC = () => {
    const [showRecent, setShowRecent] = useState(false);
  // Sample gallery items
  const galleryItems = [
    {
      id: "1",
      comments: 10,
      likes: 20,
      imageUrl:
        "/Explore1.png",
    },
    {
      comments: 10,
      likes: 20,
      id: "2",
      imageUrl:
        "/Explore2.png",
    },
    {
      comments: 10,
      likes: 20,
      id: "3",
      imageUrl:
       "/Explore3.png",
    },
    {
      comments: 10,
      likes: 20,
      id: "4",
      imageUrl:
       "/Explore4.png",
    },
    {
      comments: 10,
      likes: 20,
      id: "5",
      imageUrl:
      "/Explore5.png",
    },
    {
      comments: 10,
      likes: 20,
      id: "6",
      imageUrl:
        "/Explore6.png",
    },
    {
      comments: 10,
      likes: 20,
      id: "7",
      imageUrl:
      "/Explore7.png",  
    },
    {
      comments: 10,
      likes: 20,
      id: "8",
      imageUrl:
     "/Explore8.png",   },
  
    {
      comments: 10,
      likes: 20,
      id: "9",
      imageUrl:
      "/Explore9.png",   },
    {
      comments: 10,
      likes: 20,
      id: "10",
      imageUrl:
     "/Explore10.png",  },
      {
      comments: 10,
      likes: 20,
      id: "11",
      imageUrl:
     "/Explore10.png",  },
      {
      comments: 10,
      likes: 20,
      id: "12",
      imageUrl:
     "/Explore12.png",  
    },
      {
      comments: 10,
      likes: 20,
      id: "13",
      imageUrl:
     "/Explore13.png",  },
      {
      comments: 10,
      likes: 20,
      id: "14",
      imageUrl:
     "/Explore14.png",  },
      {
      comments: 10,
      likes: 20,
      id: "15",
      imageUrl:
     "/Explore15.png",  },
    {
      id: "16",
      comments: 10,
      likes: 20,
      imageUrl:
        "/Explore1.png",
    },
    {
      comments: 10,
      likes: 20,
      id: "17",
      imageUrl:
        "/Explore2.png",
    },
    {
      comments: 10,
      likes: 20,
      id: "18",
      imageUrl:
       "/Explore3.png",
    },
    {
      comments: 10,
      likes: 20,
      id: "19",
      imageUrl:
       "/Explore4.png",
    },
    {
      comments: 10,
      likes: 20,
      id: "20",
      imageUrl:
      "/Explore5.png",
    },
    {
      comments: 10,
      likes: 20,
      id: "21",
      imageUrl:
        "/Explore6.png",
    },
    {
      comments: 10,
      likes: 20,
      id: "22",
      imageUrl:
      "/Explore7.png",  
    },
    {
      comments: 10,
      likes: 20,
      id: "23",
      imageUrl:
     "/Explore8.png",   },
  
    {
      comments: 10,
      likes: 20,
      id: "24",
      imageUrl:
      "/Explore9.png",   },
    {
      comments: 10,
      likes: 20,
      id: "25",
      imageUrl:
     "/Explore10.png",  },
      {
      comments: 10,
      likes: 20,
      id: "26",
      imageUrl:
     "/Explore10.png",  },
      {
      comments: 10,
      likes: 20,
      id: "27",
      imageUrl:
     "/Explore12.png",  
    },
      {
      comments: 10,
      likes: 20,
      id: "28",
      imageUrl:
     "/Explore13.png",  },
      {
      comments: 10,
      likes: 20,
      id: "29",
      imageUrl:
     "/Explore14.png",  },
      {
      comments: 10,
      likes: 20,
      id: "30",
      imageUrl:
     "/Explore15.png",  },
  ];

const [recentUsers,setRecentUsers]=useState( [
  { id:1, name: "imkr", title: "Follows you", img: "/Hide.jpg" },
  { id:2,name: "organic__ai", title: "Followed by xhingg_singh07", img: "/Hide1.jpg" },
  { id:3, name: "im_gr", title: "Followed by xhingg_singh07", img: "/Hide2.jpg" },
  { id:4, name: "abhi52", title: "Follows you", img: "/Hide3.jpg" },
  { id:5, name: "soktri", title: "Follows you", img: "/Hide.jpg" },
 
]);

  const navigate = useNavigate();
  let clickTimer: NodeJS.Timeout | null = null;

  const handleClick = () => {
    if (clickTimer) {
      clearTimeout(clickTimer);
      clickTimer = null;
      handleDoubleClick();
    } else {
      clickTimer = setTimeout(() => {
        setShowRecent(true);
        clickTimer = null;
      }, 250);
    }
  };

  const handleDoubleClick = () => {
    navigate("/search-results");
  };

  const HandleRemoveProfile = (indexToRemove: number) => {
    setRecentUsers((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      <div className="max-md:ml-0 dark:dark-color flex top-0 left-0 w-full h-full z-10">
        <Sidebar />
        <div className="max-md:ml-0 dark:dark-color max-lg:ml-16 ml-[244px] z-0 max-md:mr-0 mr-3 scrollbar-hide">
          <div className="dark:dark-color max-md:m-0 m-5">
            <div className="mb-5 flex max-md:mt-4">
              <Link to="/feed" className="hidden max-md:block flex items-center font-semibold mb-4">
                <ArrowLeft className="transform text-[30px] mr-2" />
              </Link>
              <div className="max-md:hidden w-full">
 <SearchInput />
 </div>
      <div onClick={handleClick} className="w-full lg:w-8/12 lg:hidden">
  <SearchInput />
</div>

            </div>

        {showRecent && (
  <div className="dark:dark-color  mt-4 bg-white shadow p-4 w-screen lg:hidden">
    <div className="flex justify-between mb-2">
      <span className="font-semibold text-xl">Recent Searches</span>
      <button
        onClick={() => setShowRecent(false)}
        className="text-blue-400 text-sm"
      >
        Clear all
      </button>
    </div>

    <ul className="dark:dark-color  mt-6">
      {recentUsers.map((user, index) => (
        <li
          key={user.id}
          className="flex justify-between py-4 border-b last:border-0"
        >
          <div className="flex">
            <img
              src={user.img}
              alt={user.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="ml-4">
              <h1 className="font-medium text-sm">{user.name}</h1>
              <p className="dark:text-gray-400 text-xs text-gray-500">{user.title}</p>
            </div>
          </div>
          <button
            onClick={() => HandleRemoveProfile(index)}
            className="text-gray-500 text-2xl hover:text-gray-800"
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  </div>
)}
         {!showRecent && (
  <ProfileGallery
    items={galleryItems}
    onItemClick={(item) => {
      console.log("Clicked item:", item);
    
    }}
  />
)}
          </div>
        </div>
      </div>
    </>
  );
};



export function SearchResult() {
  const [activeTab,setActiveTab]=useState("For You")
    const [searchQuery, setSearchQuery] = useState("");
  const [recentUsers, setRecentUsers] = useState([
    { id: 1, name: "hena_invest", title: "Investor | Green-tech & AI Startups", img: "/Hide.jpg" },
    { id: 2, name: "lia.ventures", title: "Founder – ArkNova Capital", img: "/Hide1.jpg" },
    { id: 3, name: "piam_builds", title: "Helping startups scale | Early-stage mentor", img: "/Hide2.jpg" },
    { id: 4, name: "shem.stern", title: "Tech Strategist | Web3 Enthusiast", img: "/Hide3.jpg" },
  ]);

  const tabs=["For You", "Account", "Pitch", "Shop", "Eduvid"];


    // Filtered users based on search query
  const filteredUsers = recentUsers.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

return (
   <div className="dark:dark-color h-screen p-4">
      {/* Back button + SearchInput */}
      <div className="mb-5 flex max-md:mt-4">
        <Link
          to="/explore"
          className="hidden max-md:block flex items-center font-semibold mb-4"
        >
          <ArrowLeft className="transform text-[30px] mr-2" />
        </Link>
        <div className="w-full">
          {/* Bind SearchInput to searchQuery */}
          <SearchInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="dark:dark-color flex gap-4 justify-between px-4 text-lg mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-semibold ${
              activeTab === tab
                ? "underline text-blue-600"
                : "hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "For You" && (
        <ul className="mt-6">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <li
                key={user.id}
                className="flex justify-between py-4 border-b last:border-0"
              >
                <div className="flex">
                  <img
                    src={user.img}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h1 className="font-medium text-sm">{user.name}</h1>
                    <p className="text-xs text-gray-500">{user.title}</p>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-500 px-4">No users found.</p>
          )}
        </ul>
      )}

      {activeTab !== "For You" && (
        <div className="text-center text-gray-500 mt-10">
          <p>
            Showing results for:{" "}
            <span className="font-semibold">{activeTab}</span>
          </p>
          <p className="mt-4">
            Add your content for <strong>{activeTab}</strong> here.
          </p>
        </div>
      )}
    </div>
  );
}
export default ExplorePage;