import React, { useContext, useState } from "react";
import { MdExpandLess } from "react-icons/md";
import { Link } from "react-router-dom";
import { ThemeContext } from "@/DarkTheme/ThemeContext";

function SwitchApp() {
  const { toggleTheme, setSystemTheme, setLightTheme } = useContext(ThemeContext);

  const [selectedOption, setSelectedOption] = useState("system");

  const handleChange = (value) => {
    setSelectedOption(value);
    if (value === "yes") {
      toggleTheme();
    } else if (value === "no") {
      setLightTheme && setLightTheme();
    } else if (value === "system") {
    toggleTheme();
    }
  };

  return (
    <>
    <div className="lg:hidden dark:dark-color w-screen h-screen">
      {/* Fixed header */}
      <div className=" dark:dark-color fixed top-0 left-0 right-0 bg-white  z-10 border-b-2 border-gray-200 dark:border-gray-700">
        <Link
          to="/settings"
          className="flex items-center font-semibold text-black dark:dark-color py-4 px-4"
        >
          <MdExpandLess className="transform rotate-[-90deg] text-2xl" />
          <span className="font-bold text-xl ml-6">Switch Appearance</span>
        </Link>
      </div>

      {/* Content */}
      <div className="dark:dark-color pt-[100px] px-4 space-y-4 text-black dark:text-white">
        <label className="flex justify-between items-center">
          <span className="text-xl">No</span>
          <input
            type="radio"
            name="theme"
            value="no"
            checked={selectedOption === "no"}
            onChange={() => handleChange("no")}
          />
        </label>

        <label className="flex justify-between items-center">
          <span className="text-xl">Yes</span>
          <input
            type="radio"
            name="theme"
            value="yes"
            checked={selectedOption === "yes"}
            onChange={() => handleChange("yes")}
          />
        </label>

        <label className="flex justify-between items-center">
          <span className="text-xl">System Default</span>
          <input
            type="radio"
            name="theme"
            value="system"
            checked={selectedOption === "system"}
            onChange={() => handleChange("system")}
          />
        </label>

        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Your appearance will automatically align with your device's system theme.
        </p>
      </div>
      </div>
    </>
  );
}

export default SwitchApp;
