import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Sidebar from "@/components/layout/Sidebar";
import { useNavigate, Link } from "react-router-dom";
import { MdExpandLess } from "react-icons/md";

// Detail Components
import ActiveStatus from "@/components/MoreSettingMobile/ActiveStatus";
import SavePosts from "@/components/MoreSettingMobile/SavePosts";
import GreenVerification from "@/components/MoreSettingMobile/GreenVerification/GreenVerification";
import BlueVerification from "@/components/MoreSettingMobile/BlueVerification/BlueVerification";
import HideStory from "@/components/MoreSettingMobile/HideStory";
import Blocked from "@/components/MoreSettingMobile/Blocked";
import AdOperation from "@/components/MoreSettingMobile/AdOperation";
import PrivacySetting from "@/components/MoreSettingMobile/PrivacySetting";
import DeletAccount from "@/components/MoreSettingMobile/DeletAccount";
import Feedback from "@/components/MoreSettingMobile/Feedback";
import HelpCenter from "@/components/MoreSettingMobile/HelpCenter";
import ReportPro from "@/components/MoreSettingMobile/ReportPro";
import HidePeople from "@/components/MoreSettingMobile/HidePeople";
import Wallet from "@/components/MoreSettingMobile/Wallet";
import SwitchApp from "@/components/MoreSettingMobile/SwitchApp";

const settings = [
  { title: "Switch Appearance", path: "/switch", description: "Choose whether others can see your online activity." },
  { title: "Active Status", path: "/active", description: "Choose whether others can see your online activity." },
  { title: "Saved Posts", path: "/save", description: "Bookmark and organize posts for later." },
  { title: "Green Verification", path: "/green", description: "Apply for eco-friendly verification." },
  { title: "Blue Verification", path: "/blue", description: "Verification for public figures or brands." },
  { title: "Hide Story and Live", path: "/hidepeople", description: "Control who can see your stories and live videos." },
  { title: "Blocked Users", path: "/block", description: "Manage blocked accounts." },
  { title: "Ad Operations Manager", path: "/operation", description: "Manage ads and performance." },
  { title: "Privacy Setting", path: "/privacy", description: "Control who can see your profile." },
  { title: "Wallet", path: "/wallet", description: "Access your wallet to manage and track your funds." },
  { title: "Delete Account", path: "/delete", description: "Permanently delete your account." },
];

const secondSettings = [
  { title: "Feedback", path: "/feedback", description: "Send us your feedback or suggestions." },
  { title: "Help Center", path: "/help", description: "Get help and support." },
  { title: "Report a Problem", path: "/report", description: "Report bugs or abuse." },
];

const SettingsPanel = () => {
  const [selectedSetting, setSelectedSetting] = useState(settings[0]);
  const navigate = useNavigate();

  const renderSettingDetail = () => {
    switch (selectedSetting.title) {
      case "Switch Appearance":
        return <SwitchApp />;
      case "Active Status":
        return <ActiveStatus />;
      case "Saved Posts":
        return <SavePosts />;
      case "Green Verification":
        return <GreenVerification />;
      case "Blue Verification":
        return <BlueVerification />;
      case "Hide Story and Live":
        return <HidePeople />;
      case "Blocked Users":
        return <Blocked />;
      case "Ad Operations Manager":
        return <AdOperation />;
      case "Privacy Setting":
        return <PrivacySetting />;
      case "Wallet":
        return <Wallet />;
      case "Delete Account":
        return <DeletAccount />;
      case "Feedback":
        return <Feedback />;
      case "Help Center":
        return <HelpCenter />;
      case "Report a Problem":
        return <ReportPro />;
      default:
        return <p className="text-gray-500">Select a setting to see its details.</p>;
    }
  };

  return (
    <div className="flex w-full bg-white dark:dark-color text-black">
      {/* Sidebar */}
      <div className="max-md:hidden fixed left-0 top-0 h-screen w-[245px] border-r border-gray-200">
        <Sidebar />
      </div>

      {/* Settings List (Desktop) */}
      <div className="max-md:hidden scrollbar-hide ml-[245px] w-[45%] h-screen overflow-y-auto p-6 space-y-4">
        <h2 className="text-xl font-bold mb-2">Account Settings</h2>
        <p className="text-xs text-gray-400 mb-4">Manage your account settings below.</p>
        {[...settings, ...secondSettings].map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedSetting(item)}
            className="block w-full text-left"
          >
            <div className="flex justify-between items-start border-b pb-3 hover:bg-gray-100 dark:hover:bg-gray-300 dark:hover:text-gray-800 p-2 rounded-md transition-all">
              <div>
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
              <ChevronRight className="text-gray-400" />
            </div>
          </button>
        ))}
      </div>

      {/* Setting Details (Desktop) */}
      <div className="max-md:hidden ml-auto w-[40%] h-screen border-l border-gray-200 overflow-y-auto p-6">
        {renderSettingDetail()}
      </div>

      {/* Mobile view */}
      <div className="md:hidden flex flex-col w-full h-screen dark:dark-color">
        <Link to="/profile">
          <div className="flex items-center p-4 border-b">
            <MdExpandLess className="transform rotate-[-90deg] text-[40px]" />
            <span className="text-xl font-bold ml-2">Account Settings</span>
          </div>
        </Link>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <p className="text-sm font-semibold text-gray-400 mb-4">Account Settings</p>

          {settings.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="block w-full text-left"
            >
              <div className="flex justify-between items-start border-b pb-3 p-2 rounded-md transition-all">
                <div>
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <ChevronRight className="text-gray-400" />
              </div>
            </button>
          ))}

          <div className="mt-14 border-y-2 border-gray-100">
            <h1 className="font-medium p-2 text-gray-400">Support & Help</h1>
            {secondSettings.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="block w-full text-left pt-6"
              >
                <div className="flex justify-between items-start border-b pb-3 p-2 rounded-md transition-all">
                  <div>
                    <h3 className="font-semibold text-xl">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                  <ChevronRight className="text-gray-400" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
