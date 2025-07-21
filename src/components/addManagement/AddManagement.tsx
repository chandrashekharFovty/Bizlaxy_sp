import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Link, useNavigate } from "react-router-dom";
import smallArrow from "../../../public/arrowBtn.png";
import userGroup from "../../../public/userGroup.png";
import handRupee from "../../../public/HandRupee.png";
import rupeeBag from "../../../public/rupeeBag.png";
import growRate from "../../../public/growRate.png";
import AddOptions from "./AddOptions";
import { Dialog, DialogPanel } from "@headlessui/react";
import awarness from "../../../public/awarness.png";
import enagage from "../../../public/engagements.png";
import appInstall from "../../../public/AppInstall.png";
import salesEcom from "../../../public/salesE-com.png";
import conversans from "../../../public/conversions.png";
import traffic from "../../../public/traffic.png";
import views from "../../../public/views.png";
import leadGen from "../../../public/leadGen.png";
import Sidebar from "../layout/Sidebar";
import AddsManager1 from "../../../public/AdManager1.png";
import AddsManager2 from "../../../public/AdManager2.png";
import AddsManager3 from "../../../public/AdManager3.png";
import AddsManager4 from "../../../public/AdManager4.png";
import AddsManager5 from "../../../public/AdManager5.png";
import AddsManager6 from "../../../public/AdManager6.png";
import AddsManager7 from "../../../public/AdManager7.png";
import AddsManager8 from "../../../public/AdManager8.png";



const data = [
  { name: "Mon", clicks: 400 },
  { name: "Tue", clicks: 600 },
  { name: "Wed", clicks: 1020 },
  { name: "Thu", clicks: 800 },
  { name: "Fri", clicks: 900 },
  { name: "Sat", clicks: 750 },
  { name: "Sun", clicks: 680 },
];

const options = [
  { id: 1, title: "Targetd Ad's" },
  { id: 2, title: "Pitch Ad" },
  { id: 3, title: "Top Search Ad" },
  { id: 4, title: "Inbox Ad" },
  { id: 5, title: "Special Message Ad" },
];

const campaignOptions = [
  {
    id: "awareness",
    title: "Awareness",
    subtitle: "Reach More People With Your Post",
    icon: <img src={AddsManager7} alt="Awareness" className="w-[150px] h-[150px] rounded-xl  mt-[30%]"/>,
    description:
      "Boost your brand’s visibility and stay top-of-mind with a wide audience. Ideal for introducing your business, product, or service to new audiences.",
    goodFor: ["Brand Recall", "Impression Reach", "Product Familiarity"],
  },
  {
    id: "engagement",
    title: "Engagement",
    subtitle: "Increase Social Engagements And Page Followers",
    icon: <img src={AddsManager1} alt="Engagement" className="w-[150px] h-[150px] mt-[30%]"/>,
    description:
      "Encourage interactions like likes, comments, and shares to build community and drive conversations around your brand.",
    goodFor: ["Post Likes", "Comments", "Page Follows"],
  },
  {
    id: "leadgen",
    title: "Lead Generation",
    subtitle: "Collect Leads Through Instant Forms Or Contact Prompts",
    icon: <img src={AddsManager2} alt="Lead Generation" className="w-[150px] h-[120px] mt-[30%]"/>,
    description:
      "Capture potential customers’ information directly through lead forms or contact actions for future follow-up.",
    goodFor: ["Sign Ups", "Contact Forms", "Qualified Leads"],
  },
  {
    id: "appinstalls",
    title: "App Installs",
    subtitle: "Promote And Drive Downloads For Your Mobile Application",
    icon: <img src={AddsManager3} alt="App Installs" className="w-[150px] h-[120px] mt-[30%]"/>,
    description:
      "Drive more downloads and installs of your mobile application by reaching interested audiences.",
    goodFor: ["Mobile Apps", "Play Store Installs", "App Engagement"],
  },
  {
    id: "traffic",
    title: "Traffic",
    subtitle: "Drive More Visitors To Your Website Or Landing Page",
    icon: <img src={AddsManager4} alt="Traffic" className="w-[150px] h-[130px] mt-[30%]"/>,
    description:
      "Increase visits to your website, landing pages, or online store and attract users to take action.",
    goodFor: ["Website Clicks", "Landing Page Visits", "Online Store Traffic"],
  },
  {
    id: "conversions",
    title: "Conversions",
    subtitle: "Encourage Valuable Customer Actions",
    icon: <img src={AddsManager5} alt="Conversions" className="w-[150px] h-[120px] mt-[30%]"/>,
    description:
      "Drive specific customer actions like purchases, sign-ups, or bookings to boost your ROI.",
    goodFor: ["Online Purchases", "Form Submissions", "Event Registrations"],
  },
  {
    id: "videoviews",
    title: "Video Views",
    subtitle: "Boost Views On Video Content To Increase Brand Visibility",
    icon: <img src={AddsManager6} alt="Video Views" className="w-[130px] h-[130px] mt-[30%]"/>,
    description:
      "Get more eyes on your video ads to tell your story, showcase products, and increase awareness.",
    goodFor: ["Brand Storytelling", "Product Demos", "Awareness Campaigns"],
  },
  {
    id: "ecommerce",
    title: "Sales / E-Commerce",
    subtitle: "Drive Product Sales Via Your Online Store Or Platform",
    icon: <img src={AddsManager8} alt="Sales / E-Commerce" className="w-[130px] h-[130px] mt-[30%]"/>,
    description:
      "Promote your products and increase direct sales through your online store, driving revenue growth.",
    goodFor: ["Product Sales", "Online Orders", "E-Commerce Promotions"],
  },
];


// const Awareness = [
//   {
//     id: "awareness",
//     title: "Awareness",
//     subtitle: "Reach More People With Your Post",
//     icon: <img src={awarness} alt="" />,
//   },
//   {
//     id: "engagement",
//     title: "Engagement",
//     subtitle: "Increase Social Engagements And Page Followers",
//     icon: <img src={enagage} alt="" />,
//   },
//   {
//     id: "leadgen",
//     title: "Lead Generation",
//     subtitle: "Collect Leads Through Instant Forms Or Contact Prompts",
//     icon: <img src={leadGen} alt="" />,
//   },
//    {
//       id: "appinstalls",
//       title: "App Installs",
//       subtitle: "Promote And Drive Downloads For Your Mobile Application",
//       icon: <img src={appInstall} alt="" />,
//     },
// ];



const Dashboard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showSecondDialog, setShowSecondDialog] = useState(false);
  const [showThirdDialog, setShowThirdDialog] = useState(false);
  const [selected, setSelected] = useState(campaignOptions[0]?.id || null);
   const [currentData, setCurrentData] = useState("campaign");
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
  if (showThirdDialog) {
    setSelected(campaignOptions[0]?.id || null);
  }
}, [showThirdDialog, campaignOptions]);



  const navigate = useNavigate();

  // const handleSetting = () => {
  //   navigate("/advanced");
  // };

  const openDialog = () => {
    setShowDialog(true);
    setShowPopup(false);
  };

  const handleContinue = () => {
    console.log("Dialog Continue Clicked, selected:", selected);
    // Close dialog
    setShowThirdDialog(false);
    // Switch dataset → now render Awareness
    setCurrentData("awareness");
    // Clear selection
    setSelected(null);

    navigate("/awarence");
  };


   
  const closeDialog = () => setShowDialog(false);

  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <div className="dark:dark-color p-6 bg-gray-50 min-h-screen   relative">
      {/* Header */}
    <div
  className="w-[220px] h-[48px] relative"
  onMouseEnter={() => setShowPopup(true)}
  onMouseLeave={() => setShowPopup(false)}
>
  <button
    className="bg-blue-600 w-[180px] h-[40px] text-white flex justify-between items-center px-5 py-2 rounded-xl text-sm font-medium"
  >
    <span className="flex items-center gap-2">
      Create New Add
      <img src={smallArrow} alt="" className="w-3 h-3 -rotate-90" />
    </span>
  </button>

  {/* Popup */}
  {showPopup && (
    <div className="dark:dark-color absolute top-[50px] z-10 bg-white shadow-lg border rounded-xl p-4 w-[200px] space-y-2">
      <button className="dark:border-white dark:border dark:hover:bg-gray-300 dark:hover:text-black block text-sm px-3 py-2 hover:bg-gray-100 rounded w-full text-left">
        Create Campaign
      </button>
      <button
        onClick={openDialog}
        className="dark:border-white dark:border dark:hover:bg-gray-300 dark:hover:text-black block text-sm px-3 py-2 hover:bg-gray-100 rounded w-full text-left"
      >
        Run Single Ad
      </button>
    </div>
  )}
</div>


      {/* Dialog Modal */}
     <Dialog open={showDialog} onClose={closeDialog} className="relative z-50">
  <div className="fixed inset-0  bg-black/50" aria-hidden="true" />
  <div className="fixed inset-0 flex items-center justify-center p-4">
    <Dialog.Panel className="dark:dark-color w-full max-w-lg dark:bg-gray-800 bg-white rounded-xl p-6 shadow-xl max-h-[90vh] overflow-y-auto relative">
      <button
        onClick={closeDialog}
        className="absolute top-2 right-3 text-gray-600 dark:text-white text-2xl font-bold hover:text-red-600"
      >
        &times;
      </button>

      <Dialog.Title className="text-xl font-semibold mb-1">
        Select Advertisement Type
      </Dialog.Title>

      <Dialog.Description className="text-sm text-gray-600 mb-4 dark:text-white">
        Please choose the type of advertisement you would like to run from the options below:
      </Dialog.Description>

      <div className="flex flex-col gap-4 dark:text-gray-800">
        {options.map((opt) => (
          <AddOptions
            key={opt.id}
            title={opt.title}
            selected={selected === opt.id}
            onClick={() => setSelected(opt.id)}
          />
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <button
          disabled={!selected}
          className={`w-[122px] h-[50px] px-6 py-2 text-lg rounded-[10px] font-semibold transition-colors ${
            selected
              ? "bg-[#1C4BC4] text-white hover:bg-blue-700"
              : "text-white dark:text-gray-800 cursor-not-allowed"
          }`}
          onClick={() => {
            console.log("Selected Ad Type ID:", selected);
            closeDialog();
            setShowSecondDialog(true);
          }}
        >
          Continue
        </button>
      </div>
    </Dialog.Panel>
  </div>
</Dialog>


      {/* Second Dialog Box */}
   <Dialog open={showSecondDialog} onClose={() => setShowSecondDialog(false)} className="relative z-50">
  {/* Backdrop */}
  <div className="fixed inset-0 bg-black/20 w-full" aria-hidden="true" />

  {/* Modal Panel */}
  <div className="fixed inset-0 flex items-center justify-center p-4">
    <Dialog.Panel className="dark:dark-color bg-white dark:bg-gray-800 w-[450px]  max-h-[80vh] p-6 rounded-xl shadow-xl relative overflow-y-auto">
      <button
        onClick={() => setShowSecondDialog(false)}
        className="absolute top-2 right-3 text-gray-600 dark:text-white text-2xl font-bold hover:text-red-600"
      >
        &times;
      </button>

      <Dialog.Title className="text-xl font-semibold dark:text-white mb-2 text-center">
        Quick Setting and Advanced Setting
      </Dialog.Title>
      <Dialog.Description className="text-xs text-gray-600 dark:text-white text-center mb-6">
        Please choose the type of advertisement you would <br/>like to run from the options below:
      </Dialog.Description>

      {/* Options */}
      <div className="flex flex-col items-center gap-4 justify-center">
        {/* Quick Setting */}
       <button
  onClick={() => setSelected("quick")}
  className={`px-4 py-2 flex items-center justify-between border w-[250px] rounded-xl dark:text-white ${
    selected === "quick"
      ? "border-gray-400  text-black"
      : "border-gray-400 text-black"
  } `}
>
  Quick Setting
  <div
    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ml-4 ${
      selected === "quick"
        ? "border-[#1C4BC4] bg-gradient-to-r from-blue-500 to-purple-600"
        : "border-gray-300"
    }`}
  >
    <div
      className={`w-4 h-4 border-2 border-[#BED6FF] rounded-full ${
        selected === "quick" ? "bg-white" : "bg-transparent"
      }`}
    ></div>
  </div>
</button>


        {/* Advanced Setting */}
        <button
          onClick={() => setSelected("advanced")}
          className={`px-4 py-2 flex items-center justify-between border w-[250px] rounded-xl dark:text-white  ${
            selected === "advanced"
              ? "border-gray-400  text-black"
              : "border-gray-400 text-black"
          } `}
        >
          Advanced Setting
          <div
            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ml-4 ${
              selected === "advanced"
                ? "border-[#1C4BC4] bg-gradient-to-r from-blue-500 to-purple-600"
                : "border-gray-300"
            }`}
          >
            <div
              className={`w-4 h-4 border-2 border-[#BED6FF] rounded-full ${
                selected === "advanced" ? "bg-white" : "bg-transparent"
              }`}
            ></div>
          </div>
        </button>
      </div>

      {/* Continue Button */}
      {selected === "advanced" && (
        <div className="flex justify-end mt-6">
          <button
            className="w-[122px] h-[45px] px-6 py-2 text-lg rounded-[10px] font-semibold bg-[#1C4BC4] text-white hover:bg-blue-700 transition-colors"
            onClick={() => {
              // handleSetting();
              console.log("Selected Setting:", selected);
              setShowSecondDialog(false);
              setShowThirdDialog(true)
            }}
          >
            Continue
          </button>
        </div>
      )}
    </Dialog.Panel>
  </div>
</Dialog>


{/* Third Dialog Box */}
{/*  Third Dialog — Campaign Options inside Dialog */}
 
    <Dialog
      open={showThirdDialog}
      onClose={() => setShowThirdDialog(false)}
      className="relative z-50"
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      {/* Main Panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel
          className={`bg-white dark:dark-color w-full max-md:flex-col ${
            selected ? "max-w-6xl flex-row" : "max-w-2xl flex-col"
          } rounded-2xl p-8 shadow-xl max-h-[90vh] overflow-y-auto relative flex gap-6 transition-all duration-300`}
        >
          {/* Left: Campaign Cards */}
          <div className="grid grid-cols-2 gap-6 overflow-y-auto max-md:h-[400px] scrollbar-hide">
            {campaignOptions.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={` w-[280px] h-[280px] max-md:w-[200px] bg-white dark:bg-white dark:text-black rounded-2xl border p-6 flex flex-col cursor-pointer hover:shadow-lg transition-all ${
                  selected === item.id
                    ? "border-blue-500 shadow-lg"
                    : "border-gray-200"
                }`}
              >
                <div className="w-full dark:text-black   h-[30px] mt-6 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg dark:text-gray-900 mt-16 font-semibold text-gray-900 dark:text-white mb-1 text-center">
                  {item.title}
                </h4>
                <p className="text-sm dark:text-gray-800  text-gray-500 dark:text-gray-300 text-center">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Details Panel */}
          <div
            className={`flex flex-col max-w-md bg-white   border rounded-2xl ${
              selected
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0 pointer-events-none"
            }`}
          >
            {selected && (
              <>
                <div className="w-full h-[80px] flex items-center justify-center mb-4">
                  {campaignOptions.find((c) => c.id === selected)?.icon}
                </div>

                <h3 className="dark:text-black text-xl font-semibold mb-1 text-gray-900 mt-28  text-center">
                  {campaignOptions.find((c) => c.id === selected)?.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-700 mb-1 text-center">
                  {campaignOptions.find((c) => c.id === selected)?.subtitle}
                </p>

                <p className="text-xs text-gray-400 dark:text-gray-700 text-center">
                  {campaignOptions.find((c) => c.id === selected)?.description}
                </p>

                <h1 className="mt-4 dark:text-black font-semibold ml-6">Good For</h1>
                <div className="flex flex-wrap justify-center mt-2 gap-2 mb-6">
                  {campaignOptions
                    .find((c) => c.id === selected)
                    ?.goodFor?.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3  text-xs h-8 pt-2 rounded-xl bg-gray-100 dark:bg-gray-400 text-gray-700 dark:text-black"
                      >
                        {tag}
                      </span>
                    ))}
                </div>

                <div className="flex  justify-end gap-4 w-full">
                  <button
                    className="dark:bg-white dark:border dark:border-black w-full h-[45px] px-6 py-2 text-lg rounded-xl border border-gray-500 font-semibold bg-white text-black transition-colors"
                    onClick={() => {
                      setShowThirdDialog(false);
                      setSelected(campaignOptions[0]?.id || null); // Reset to first card again
                      setIsOpen(true);
                    }}
                  >
                    Cancel
                  </button>

                  <button
                    className="w-full h-[45px] px-6 py-2 text-lg rounded-xl font-semibold bg-[#1C4BC4] text-white transition-colors"
                    onClick={() => {
                      navigate("/awareness");
                      setShowThirdDialog(false);
                      setIsOpen(true);
                    }}
                  >
                    Continue
                  </button>
                </div>
              </>
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>



{/* Fourth dialog box */}
  {/* <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
     
          <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

        
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="max-w-[1280px] w-full bg-white dark:bg-gray-900 dark:text-white p-8 rounded-lg shadow-xl">
              <Dialog.Title className="text-xl font-bold mb-4">
                Select Campaign Objective
              </Dialog.Title>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Awareness.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelected(item.id)}
                    className={`w-[273px] h-[284px] bg-white dark:bg-gray-800 rounded-xl border cursor-pointer p-6 text-center transition-all hover:shadow-md ${
                      selected === item.id ? "border-blue-500 shadow-lg" : ""
                    }`}
                  >
                    <div className="w-full h-[125px] mt-10 flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>

              {selected && (
                <div className="flex justify-end mt-10">
                  <button
                    className="w-[122px] h-[45px] px-6 py-2 text-lg rounded-[10px] font-semibold bg-[#1C4BC4] text-white hover:bg-blue-700 transition-colors"
                    onClick={() => {
                        navigate("/custom");
                      console.log("Selected Option:", selected);
                      handleSetting();
                    }}
                  >
                    Continue
                  </button>
                </div>
              )}
            </Dialog.Panel>
          </div>
        </Dialog> */}




      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {[
          {
            title: "Customers",
            value: "1,456",
            change: "+6.5%",
            changeColor: "text-green-500",
            img: <img src={userGroup} alt="" className="w-8 h-8" />,
          },
          {
            title: "Revenue",
            value: "₹279,307.50",
            change: "-0.10%",
            changeColor: "text-red-500",
            img: <img src={handRupee} alt="" className="w-8 h-8" />,
          },
          {
            title: "Profit",
            value: "60%",
            change: "-0.2%",
            changeColor: "text-red-500",
            img: <img src={rupeeBag} alt="" className="w-8 h-8" />,
          },
        ].map((card, i) => (
          <div
            key={i}
            className="dark:dark-color dark:border dark:border-white dark:rounded-xl w-[360px] h-[159px] gap-2 max-md:w-full bg-white p-4 rounded-xl shadow"
          >
            <div className="w-[339px] h-[120px]">
              <div className="flex justify-between items-center mb-2">
                <h4 className="dark:text-white text-sm text-gray-600">{card.title}</h4>
                <span className="w-[70px] h-[70px] bg-gray-100 p-5 rounded-full">
                  {card.img}
                </span>
              </div>
              <h2 className="text-2xl font-bold">{card.value}</h2>
              <p className={`text-xs mt-1 ${card.changeColor}`}>
                {card.change} Since last week
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Table & Chart */}
      <div className="flex flex-col lg:flex-row gap-3">
        {/* Table */}
        <div className="dark:dark-color dark:border dark:border-white w-full lg:w-[788px] h-[440px] bg-white p-4 mt-4 rounded-xl shadow overflow-auto">
          <div className="flex justify-between mb-3">
            <h4 className="text-sm font-semibold">Running Ads</h4>
            <button className="text-blue-600 text-sm">See all</button>
          </div>
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500">
              <tr>
                <th className="pb-2">Name</th>
                <th>Status</th>
                <th>Clicks</th>
                <th>Budget</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[
                ["Summer Sale", "Active", 1234, "₹41,750"],
                ["Product Launch", "Active", 985, "₹68,800"],
                ["Summer Sale", "Inactive", 1102, "₹100,200"],
                ["Summer Sale", "Active", 1234, "₹41,750"],
                ["Summer Sale", "Pending", 1234, "₹41,750"],
              ].map(([name, status, clicks, budget], i) => (
                <tr key={i} className="dark:dark-color border-t h-[47px]">
                  <td className="py-2">{name}</td>
                  <td>
                    <span
                      className={`w-[84px] h-[37px] px-4 py-2 text-xs rounded-full font-semibold ${
                        status === "Active"
                          ? "bg-green-100 text-green-600"
                          : status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                  <td>{clicks}</td>
                  <td>{budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Chart */}
        <div className="dark:dark-color dark:border dark:border-white w-full lg:w-[379px] h-[440px] bg-white p-4 rounded-xl mt-4 shadow">
          <div className="flex justify-between mb-3">
            <h4 className="text-[18px] font-semibold tracking-[1px]">
              Sales Performance
            </h4>
            <button className="text-blue-600 text-[14px]">See all</button>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <Tooltip />
              <Bar dataKey="clicks" fill="#4f46e5" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="mt-4 text-sm text-gray-500 flex gap-3 font-medium">
            <img src={growRate} alt="" className="w-7 h-6" />
            <span className="text-black font-bold text-[28px]">30%</span> better than last month
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
