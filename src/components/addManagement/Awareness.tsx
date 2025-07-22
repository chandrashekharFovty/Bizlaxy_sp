import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import Sidebar from "../layout/Sidebar";

// Images
import awarenessImg from "../../../public/awarness.png";
import engagementImg from "../../../public/engagements.png";
import leadGenImg from "../../../public/leadGen.png";
import appInstallImg from "../../../public/AppInstall.png";

// Options
const campaignOptions = [
  {
    id: "awareness",
    title: "Awareness",
    subtitle: "Reach more people with your post",
    description:
      "This campaign type helps you reach a wider audience and boost brand visibility.",
    goodFor: ["Branding", "Reach", "New Audience"],
    icon: awarenessImg,
  },
  {
    id: "engagement",
    title: "Engagement",
    subtitle: "Increase social engagements and page followers",
    description:
      "This campaign focuses on increasing likes, comments, and followers.",
    goodFor: ["Followers", "Likes", "Comments"],
    icon: engagementImg,
  },
  {
    id: "leadgen",
    title: "Lead Generation",
    subtitle: "Collect leads through instant forms or contact prompts",
    description:
      "Use this campaign to collect valuable customer information easily.",
    goodFor: ["Leads", "Forms", "Contacts"],
    icon: leadGenImg,
  },
  {
    id: "appinstalls",
    title: "App Installs",
    subtitle: "Promote and drive downloads for your mobile application",
    description:
      "Boost installs for your mobile app by targeting relevant users.",
    goodFor: ["Downloads", "Mobile Apps", "Growth"],
    icon: appInstallImg,
  },
];

export default function AwarenessDialog() {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  // ✅ Select first card by default when dialog opens
  useEffect(() => {
    if (isOpen) {
      setSelected(campaignOptions[0]?.id || null);
    }
  }, [isOpen]);

  const handleContinue = () => {
    console.log("Selected:", selected);
    navigate("/custom");
  };

  return (
    <div className="flex">
      <Sidebar />

      {/* <div className=" flex-1 bg-black/40 p-6 bg-gray-50 min-h-screen ml-[235px]"> */}
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

          {/* Container */}
          <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
            <Dialog.Panel
              className="
                w-full
                max-w-6xl
                flex flex-col md:flex-row
                bg-white 
              dark:dark-color
                p-8 
                rounded-xl 
                shadow-2xl 
                max-h-[90vh]
                overflow-y-auto
                scrollbar-hide
              "
            >
              <div className="flex-1">
                <Link
                  to="/adds"
                  className="text-sm text-blue-600 dark:text-white mb-4 inline-block"
                >
                  &lt; Back to Dashboard
                </Link>

                {/* Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
                  {campaignOptions.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => setSelected(option.id)}
                      className={` w-full h-[255px] bg-white dark:bg-white rounded-xl border p-6 text-center cursor-pointer transition-all hover:shadow-md ${
                        selected === option.id
                          ? "border-blue-500 shadow-lg"
                          : ""
                      }`}
                    >
                      <div className="flex items-center justify-center h-[125px] mb-6">
                        <img
                          src={option.icon}
                          alt={option.title}
                          className="h-full object-contain"
                        />
                      </div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-900 mb-1">
                        {option.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-800">
                        {option.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Panel */}
              <div
                className={`flex flex-col md:w-[350px]  dark:bg-white border-l dark:border p-6 ml-6 rounded-xl ${
                  selected ? "opacity-100" : "opacity-0 pointer-events-none"
                } transition-all duration-300`}
              >
                {selected && (
                  <>
                    <div className="w-full  flex items-center justify-center mb-4">
                      <img
                        src={
                          campaignOptions.find((c) => c.id === selected)?.icon
                        }
                        alt="icon"
                        className="h-40 w-40 object-contain"
                      />
                    </div>

                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-black text-center">
                      {
                        campaignOptions.find((c) => c.id === selected)?.title
                      }
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-700 mb-4 text-center">
                      {
                        campaignOptions.find((c) => c.id === selected)?.subtitle
                      }
                    </p>

                    <p className="text-xs text-gray-500 dark:text-gray-700 mb-4 text-center">
                      {
                        campaignOptions.find((c) => c.id === selected)
                          ?.description
                      }
                    </p>

                    <h4 className="text-sm font-semibold dark:text-black mb-2">Good For</h4>
                    <div className="flex flex-wrap gap-2">
                      {campaignOptions
                        .find((c) => c.id === selected)
                        ?.goodFor?.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>

                    {/* Continue Button */}
                    <button
                      onClick={handleContinue}
                      className="mt-auto w-full py-3 text-center rounded-xl bg-[#1C4BC4] text-white font-semibold hover:bg-blue-700 transition-colors mt-6"
                    >
                      Continue
                    </button>
                  </>
                )}
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      {/* </div> */}
    </div>
  );
}
