import React, { useState } from "react";
import Sidebar from "../layout/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { IoVideocamOutline, IoImagesOutline } from "react-icons/io5";
import { FiAlertOctagon } from "react-icons/fi";

// Custom Gradient Checkbox
function GradientCheckbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-white cursor-pointer select-none">
      <input type="checkbox" checked={checked} onChange={onChange} className="hidden" />
      <span
        className={`w-5 h-5 rounded border-2 flex items-center justify-center 
          ${checked
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent"
            : "border-gray-400"
          }`}
      >
        {checked && (
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 10l3 3 7-7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      {label}
    </label>
  );
}

function Visiblity() {
  const [showDailyInput, setShowDailyInput] = useState(false);
  const [visibilityOptions, setVisibilityOptions] = useState([]);
  const [budgetType, setBudgetType] = useState({
    daily: false,
    lifetime: false,
  });
  const [showSpendingCap, setShowSpendingCap] = useState(false);
  const [caps, setCaps] = useState([{ objective: "", amount: "" }]);

  const toggleVisibility = (option) => {
    if (visibilityOptions.includes(option)) {
      setVisibilityOptions(visibilityOptions.filter((o) => o !== option));
    } else {
      setVisibilityOptions([...visibilityOptions, option]);
    }
  };

  const handleCapChange = (index, field, value) => {
    const newCaps = [...caps];
    newCaps[index][field] = value;
    setCaps(newCaps);
  };

  const addNewCap = () => {
    setCaps([...caps, { objective: "", amount: "" }]);
  };


  const navigate=useNavigate()
  return (
    <>
      <Sidebar />
      <div className="dark:dark-color p-6 bg-white min-h-screen max-lg:ml-16  max-md:ml-0 ml-[235px]">
        <Link to="/custom" className="dark:text-white text-sm text-blue-600 mb-4 inline-block">
          &lt; Back to Target Audience
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-[750px] space-y-10">
            {/* Ad Visibility */}
            <div>
              <h1 className="dark:dark-color font-semibold text-gray-800 text-lg">Ad Visibility</h1>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Select where your ad will appear for the best exposure.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                {[
                  "Home Page",
                  "Story Feed",
                  "Explore",
                  "Search",
                  "Inbox",
                  "Suggested Content",
                ].map((item, i) => (
                  <GradientCheckbox
                    key={i}
                    label={item}
                    checked={visibilityOptions.includes(item)}
                    onChange={() => toggleVisibility(item)}
                  />
                ))}
              </div>
            </div>

            {/* Ad Duration & Frequency */}
            <div>
              <h1 className="dark:dark-color font-semibold text-gray-800 text-lg">Ad Duration & Frequency</h1>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                Decide how long and how often users should see your ad.
              </p>
              <select className="focus:outline-none dark:dark-color border border-gray-300 p-2 mt-2 text-gray-600 rounded-xl w-full dark:text-gray-500">
                <option value="">Select Frequency Per User</option>
                <option value="once">Once per day</option>
                <option value="twice">Twice per day</option>
                <option value="always">Always show</option>
              </select>
              <div className="mt-5 flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1 dark:text-gray-400">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="focus:outline-none dark:dark-color border border-gray-300 w-full sm:w-[360px] p-2 text-gray-600 rounded-xl dark:text-gray-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1 dark:text-gray-400">
                    End Date
                  </label>
                  <input
                    type="date"
                    className="focus:outline-none dark:dark-color border border-gray-300 w-full sm:w-[360px] p-2 text-gray-600 rounded-xl dark:text-gray-500"
                  />
                </div>
              </div>
            </div>

            {/* Budget & Scheduling */}
            <div>
              <h1 className="font-semibold text-gray-800 text-lg">Budget & Scheduling</h1>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Set how much you want to spend and when the ad will be active.
              </p>

              <h4 className="mt-4 text-sm font-semibold text-gray-800">Budget Type</h4>
              <div className="flex gap-6 mt-2">
                <GradientCheckbox
                  label="Daily"
                  checked={budgetType.daily}
                  onChange={() => {
                    setBudgetType({ ...budgetType, daily: !budgetType.daily });
                    setShowDailyInput(!showDailyInput);
                  }}
                />
                <GradientCheckbox
                  label="Lifetime"
                  checked={budgetType.lifetime}
                  onChange={() =>
                    setBudgetType({ ...budgetType, lifetime: !budgetType.lifetime })
                  }
                />
              </div>

              {showDailyInput && (
                <div className="mt-4">
                  <label htmlFor="daily-budget" className="text-sm">
                    Enter Daily Budget
                    <input
                      id="daily-budget"
                      type="number"
                      placeholder="Enter daily budget"
                      className="focus:outline-none border border-gray-300 p-2 mt-1 rounded-xl w-full"
                    />
                  </label>
                </div>
              )}

              {/* Spending Cap */}
              <p className="flex items-center mt-6 text-gray-800 text-sm font-semibold dark:text-gray-300 relative group">
                Spending Cap
                <FiAlertOctagon className="ml-2" />
                <span className="absolute left-10 top-10 ml-2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                  This is your spending cap info.
                </span>
              </p>

              <div className="mt-2 flex items-center">
                <input
                  type="checkbox"
                  checked={showSpendingCap}
                  onChange={() => setShowSpendingCap(!showSpendingCap)}
                  className="focus:outline-none w-4 h-4"
                />
                <span className="ml-2 text-xs">Set Spending Cap</span>
              </div>

              {showSpendingCap && (
                <>
                  {caps.map((cap, index) => (
                    <div
                      key={index}
                      className="mt-2 flex flex-col sm:flex-row gap-4"
                    >
                      <div className="flex flex-col">
                        <label className="text-sm text-gray-600 mb-1 dark:text-gray-400">
                          Objective
                        </label>
                        <input
                          type="text"
                          placeholder="e.g Awareness"
                          value={cap.objective}
                          onChange={(e) =>
                            handleCapChange(index, "objective", e.target.value)
                          }
                          className="focus:outline-none border border-gray-300 w-full sm:w-[360px] p-2 text-gray-600 rounded-xl dark:text-gray-500"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="text-sm text-gray-600 mb-1 dark:text-gray-400">
                          Enter Amount
                        </label>
                        <input
                          type="number"
                          placeholder="e.g 30000"
                          value={cap.amount}
                          onChange={(e) =>
                            handleCapChange(index, "amount", e.target.value)
                          }
                          className="focus:outline-none border border-gray-300 w-full sm:w-[360px] p-2 text-gray-600 rounded-xl dark:text-gray-500"
                        />
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={addNewCap}
                    className="mt-3 text-blue-600 text-sm"
                  >
                    + Add Another Cap
                  </button>
                </>
              )}

              <p className="mt-4 text-sm text-gray-500 font-semibold dark:text-gray-300">
                Scheduling
              </p>
              <input
                type="date"
                className="focus:outline-none dark:dark-color border border-gray-300 text-gray-600 p-2 w-full rounded-xl mt-1 dark:text-gray-500"
              />
            </div>

          <div className="flex justify-end ">
              <button 
              onClick={()=> navigate("/mediaupload")}
              className=" mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl">
              Continue
            </button>
          </div>
          </div>

          {/* Right Preview Section */}
          <div className="w-full lg:w-[450px]">{/* Future Preview Content */}</div>
        </div>
      </div>
    </>
  );
}

export default Visiblity;
