import React, { useEffect, useState } from "react";
import ProfileGallery from "./ProfileGallery";
import { useNavigate } from "react-router-dom";

// Sample gallery items
export const postgalleryItems = [
  {
    id: "1",
    comments: 10,
    likes: 20,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/c286384ab9a94f6ae63dddaf2109347578dc9fa7?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "2",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/215def76e11b54522b5f2ccb29cfa4f5dc529575?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "3",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/60ac0ced6ed1b523e975126699b3b75ffc79d062?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "4",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/96687f4430bb048dcaed31fd494fd3f319acc078?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "5",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/3cce3ea5bd280ad35322625e6ab9d5bb70d53a5b?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "6",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "7",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2e38cb955f8f2ccb06020da42c8984342a22a98f?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "8",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/349d0a7e73189f2186de6ab524fda161e2ea2e0d?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "9",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/1e7b1a459b8534a84114f833bc76783b8cb7df3a?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "10",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "11",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "12",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2e38cb955f8f2ccb06020da42c8984342a22a98f?placeholderIfAbsent=true",
  },
];
const eduvidgalleryItems = [
  {
    comments: 10,
    likes: 20,
    id: "1",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2e38cb955f8f2ccb06020da42c8984342a22a98f?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "2",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2e38cb955f8f2ccb06020da42c8984342a22a98f?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "3",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2e38cb955f8f2ccb06020da42c8984342a22a98f?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "4",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2e38cb955f8f2ccb06020da42c8984342a22a98f?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "5",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/3cce3ea5bd280ad35322625e6ab9d5bb70d53a5b?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "6",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "7",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2e38cb955f8f2ccb06020da42c8984342a22a98f?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "8",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/349d0a7e73189f2186de6ab524fda161e2ea2e0d?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "9",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/1e7b1a459b8534a84114f833bc76783b8cb7df3a?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "10",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "11",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "12",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2e38cb955f8f2ccb06020da42c8984342a22a98f?placeholderIfAbsent=true",
  },
];
const pitchgalleryItems = [
  {
    comments: 10,
    likes: 20,
    id: "1",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/60ac0ced6ed1b523e975126699b3b75ffc79d062?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "2",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/60ac0ced6ed1b523e975126699b3b75ffc79d062?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "3",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/60ac0ced6ed1b523e975126699b3b75ffc79d062?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "4",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/60ac0ced6ed1b523e975126699b3b75ffc79d062?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "5",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/3cce3ea5bd280ad35322625e6ab9d5bb70d53a5b?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "6",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "7",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2e38cb955f8f2ccb06020da42c8984342a22a98f?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "8",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/349d0a7e73189f2186de6ab524fda161e2ea2e0d?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "9",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/1e7b1a459b8534a84114f833bc76783b8cb7df3a?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "10",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "11",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "12",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2e38cb955f8f2ccb06020da42c8984342a22a98f?placeholderIfAbsent=true",
  },
];
const shopgalleryItems = [
  {
    comments: 10,
    likes: 20,
    id: "1",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/3cce3ea5bd280ad35322625e6ab9d5bb70d53a5b?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "2",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/3cce3ea5bd280ad35322625e6ab9d5bb70d53a5b?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "3",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/3cce3ea5bd280ad35322625e6ab9d5bb70d53a5b?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "4",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/3cce3ea5bd280ad35322625e6ab9d5bb70d53a5b?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "5",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/1e7b1a459b8534a84114f833bc76783b8cb7df3a?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "6",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "7",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2e38cb955f8f2ccb06020da42c8984342a22a98f?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "8",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/349d0a7e73189f2186de6ab524fda161e2ea2e0d?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "9",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/1e7b1a459b8534a84114f833bc76783b8cb7df3a?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "10",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "11",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/702238110537ce44f87808f2771a5c6d38b32a8e?placeholderIfAbsent=true",
  },
  {
    comments: 10,
    likes: 20,
    id: "12",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2e38cb955f8f2ccb06020da42c8984342a22a98f?placeholderIfAbsent=true",
  },
];

type TabType = "post" | "eduvid" | "pitch" | "shop";

interface ProfileTabsProps {
  defaultTab?: TabType;
  onTabChange?: (tab: TabType) => void;
  
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({
  defaultTab = "post",
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>(defaultTab);
  const navigate = useNavigate();

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  // Correct navigation when SHOP tab is selected
  useEffect(() => {
    if (activeTab === "shop") {
      navigate("/shopprofile");
    }
  }, [activeTab, navigate]);

  return (
    <>
      {/* Tabs */}
      <div className="dark:dark-color mt-[30px] max-md:max-w-full z-10">
        <div className="dark:dark-color justify-center items-stretch flex min-h-[57px] w-full flex-col bg-white border-y border-y-[#E8E8E8] border-solid max-md:max-w-full">
          <div className="dark:dark-color flex w-full items-center justify-center flex-1 flex-wrap h-full max-md:max-w-full">
            {["post", "eduvid", "pitch", "shop"].map((tab) => (
              <button
                key={tab}
                className="self-stretch flex w-60 md:w-[120px] flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto"
                onClick={() => handleTabChange(tab as TabType)}
              >
                <div className="flex min-h-[60px] w-full flex-col overflow-hidden items-stretch justify-center">
                  <div className="flex w-full flex-col items-stretch justify-center flex-1">
                    <div className="w-full flex-1 pt-[19px]">
                      <div
                        className={`w-full flex-1 ${
                          activeTab === tab
                            ? "text-[#1C4BC4] dark:dark-color"
                            : "dark:dark-color text-[#3c3c43]"
                        }`}
                      >
                        {tab.toUpperCase()}
                      </div>
                      <div
                        className={`flex min-h-0.5 w-full gap-3 mt-3 ${
                          activeTab === tab
                            ? "bg-[#1C4BC4] dark:bg-white"
                            : "bg-transparent"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Sections */}
      <div className="flex flex-col items-stretch justify-center w-[full] h-full">
        {activeTab === "post" && <ProfileGallery 
  items={postgalleryItems}
  onItemClick={(item) => navigate(`/profile/post/${item.id}`)}
/>
}
        {activeTab === "eduvid" && <ProfileGallery items={eduvidgalleryItems} />}
        {activeTab === "pitch" && <ProfileGallery items={pitchgalleryItems} />}
        {/* 🚫 No JSX for shop — redirect is handled by useEffect */}
      </div>
    </>
  );
};

export default ProfileTabs;