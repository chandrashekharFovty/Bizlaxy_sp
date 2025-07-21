// import React from 'react'
// import { MdExpandLess } from 'react-icons/md';
// import { Link } from 'react-router-dom';

// function MoreSetting() {
//   return (
//     <>
//     <div className='dark:dark-color h-screen w-screen'>
//       {/* Fixed header */}
//       <div className="dark:dark-color fixed top-0 left-0 right-0 bg-white z-10 border-b-2 border-gray-200">
//         <Link
//           to="/profile"
//           className="dark:dark-color flex items-center font-semibold text-black py-4 px-4"
//         >
//           <MdExpandLess className="dark:dark-color transform rotate-[-90deg] text-2xl" />
//           <span className=" dark:dark-color font-bold text-xl ml-6">Account Setting</span>
//         </Link>
//       </div>

//       {/* Scrollable content */}
//       <div className="lg:hidden dark:dark-color pt-20 pb-20 px-4 overflow-y-auto">
//         <p className="text-gray-400 font-semibold mb-4">Account Settings</p>

//         <div className="dark:dark-color flex flex-col gap-4">
//           {/* Reusable card structure */}
//           <LinkCard to="/switch" title="Switch Appearance" description="Easily switch between light and dark modes using the Switch Appearance option for a comfortable viewing experience." />
//           <LinkCard to="/active" title="Active Status" description="Easily switch between light and dark modes using the Switch Appearance option for a comfortable viewing experience." />
//           <LinkCard to="/save" title="Save Posts" description="Easily switch between light and dark modes using the Switch Appearance option for a comfortable viewing experience." />
//           <LinkCard to="/green" title="Green Verification" description="Easily switch between light and dark modes using the Switch Appearance option for a comfortable viewing experience."  />
//           <LinkCard to="/blue" title="Blue Verification" description="Easily switch between light and dark modes using the Switch Appearance option for a comfortable viewing experience." />
//           <LinkCard to="/hide" title="Hide Story and Live" description="Easily switch between light and dark modes using the Switch Appearance option for a comfortable viewing experience." />
//           <LinkCard to="/block" title="Blocked Users" description="Easily switch between light and dark modes using the Switch Appearance option for a comfortable viewing experience." />
//           <LinkCard to="/operation" title="Ad Operations Manager" description="Easily switch between light and dark modes using the Switch Appearance option for a comfortable viewing experience." />
//           <LinkCard to="/privacy" title="Privacy Setting" description="Easily switch between light and dark modes using the Switch Appearance option for a comfortable viewing experience." />
//           <LinkCard to="/wallet" title="Wallet" description="Easily switch between light and dark modes using the Switch Appearance option for a comfortable viewing experience." />
//           <LinkCard to="/delete" title="Delete Account" description="Easily switch between light and dark modes using the Switch Appearance option for a comfortable viewing experience." />
//         </div>
//       </div>

//          <div className="dark:dark-color pt-4 pt-10 pb-10 px-4 overflow-y-auto border-t-2 border-gray-100">
//         <p className="text-gray-400 font-semibold mb-4">Support & Help</p>

//         <div className="dark:dark-color flex flex-col gap-4 ">
//           {/* Reusable card structure */}
//           <LinkCard to="/feedback" title="Feedback" description="Easily switch between light and dark modes using the Switch Appearance option for a comfortable viewing experience." />
//           <LinkCard to="/help" title="Help Center" description="Easily switch between light and dark modes using the Switch Appearance option for a comfortable viewing experience." />
//           <LinkCard to="/report" title="Report a Problem" description="Easily switch between light and dark modes using the Switch Appearance option for a comfortable viewing experience." />
         
//         </div>
//       </div>
//       </div>
//     </>
//   );
// }

// function LinkCard({ to, title, description }) {
//   return (
//     <Link to={to}>
//       <div className="dark:dark-color flex justify-between items-start border-b border-gray-200 pb-4">
//         <div className=" w-[380px]">
//           <h1 className="font-semibold text-xl">{title}</h1>
//           <p className="text-gray-500 text-xs">
//         {description}
//           </p>
//         </div>
//         <MdExpandLess className="transform rotate-[90deg] text-2xl mt-1" />
//       </div>
//     </Link>
//   );
// }

// export default MoreSetting;




