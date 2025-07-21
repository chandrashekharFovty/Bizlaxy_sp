// SelectAccountType.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountOption from "./AccountOptions";
import InfoCrousel from "./InfoCrousel";

const options = [
  { id: "company", title: "Company", desc: "Get connected with tools and resources to grow your business." },
  { id: "investor", title: "Investor", desc: "Discover and track promising investment opportunities." },
  { id: "startup", title: "Startup", desc: "Access funding, mentorship, and marketing support." },
  { id: "learner", title: "Learner", desc: "Gain knowledge through insights to enhance your skills." },
  { id: "startupidea", title: "Startup Idea", desc: "Elevate your idea with funding and expert guidance." },
  { id: "businessowner", title: "Business Owner", desc: "Gain knowledge through insights to enhance your skills." },
  { id: "creator", title: "Content Creator", desc: "Elevate your idea with funding and expert guidance." },
];

const InfoBox = [
  { title: "Connect & Grow Together", descp: "Build meaningful social and professional connections, explore, chat, and collaborate with like-minded people." },
  { title: "Explore Opportunities", descp: "Find events, groups, and collaborations." },
  { title: "Share & Learn", descp: "Share insights, ask questions, and grow your knowledge." },
];

const SelectAccountType = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="flex max-md:flex-col  max-h-screen  max-md:w-screen max-md:h-screen overflow-x-hidden">
   <div className="max-w-3xl max-md:hidden w-4/12 max-md:w-screen h-screen max-md:pt-1  fixed bg-gradient-to-r from-purple-500 to-blue-700 bg-opacity-60 backdrop-blur-lg text-white flex overflow-hidden items-center justify-center">
  <div className="border border-white p-6 bg-white/10 w-[400px] rounded-xl">
          <InfoCrousel InfoBoxes={InfoBox} />
      </div>
      </div>

      <div className="w-8/12  ml-[35%] px-5 max-md:w-screen max-md:h-full max-md:mx-auto bg-white">
        <div className="fixed bg-white w-full h-14 my-8 max-md:my-2 flex flex-col gap-2 z-30">
          <h3 className="text-xl font-bold max-md:text-[16px]">Select Account Type</h3>
          <p className="text-sm max-md:text-xs font-normal text-gray-500">
            We’ll use this to personalize your experience and unlock relevant features.
          </p>
        </div>

        <div className="w-full overflow-scroll scrollbar-hide mt-[12%] max-md:mt-20 py-2 h-[500px] flex flex-col gap-5 z-10">
          {options.map((opt, idx) => (
            <AccountOption
              key={idx}
              id={opt.id}
              title={opt.title}
              desc={opt.desc}
              selected={selected === opt.id}
              onClick={() => setSelected(opt.id)}
            />
          ))}
        </div>

        <div className="fixed w-9/12 max-md:w-11/12  h-20 max-md:h-8 px-8 max-md:px-2 py-4 max-md:py-1">
          <div className="w-full h-full flex justify-end items-center">
            {selected ? (
              <button
                className="w-32 max-md:w-24 h-14 max-md:h-12 cursor-pointer mt-6 px-6 py-2 border text-lg rounded-[10px] border-[#B0B0B0] text-white font-semibold btn-gradient hover:bg-blue-700"
                onClick={() => navigate("/infoform", { state: { userType: selected } })}
              >
                Next
              </button>
            ) : (
              <button
                className="w-32 max-md:w-24 h-14 max-md:h-12 mt-6 px-6 py-2 border text-lg rounded-[10px] border-[#B0B0B0] text-white font-semibold bg-gray-300 cursor-not-allowed"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAccountType;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AccountOption from "./AccountOptions";
// import InfoCrousel from "./InfoCrousel";

// const options = [
//   { id: "company", 
//     title: "Company",
//     desc: "Get connected with tools and resources to grow your business.",
//   },
//   { id: "investor",
//     title: "Investor",
//     desc: "Discover and track promising investment opportunities.",
//   },
//   { id: "startup",
//     title: "Startup",
//     desc: "Access funding, mentorship, and marketing support.",
//   },
//   { id: "learner",
//     title: "Learner",
//     desc: "Gain knowledge through insights to enhance your skills.",
//   },
//   { id: "startupidea",
//     title: "Startup Idea",
//     desc: "Elevate your idea with funding and expert guidance.",
//   },
//   { id: "businessowner",
//     title: "Business Owner",
//     desc: "Gain knowledge through insights to enhance your skills.",
//   },
//   { id: "professional",
//     title: "Professional",
//     desc: "Elevate your idea with funding and expert guidance.",
//   },
// ];
// const InfoBox = [
//   {
//     title: "Connect & Grow Together",
//     descp:
//       "Build meaningful social and professional connections, explore, chat, and collaborate with like-minded people.",
//   },
//   {
//     title: "Explore New Opportunities",
//     descp: "Find events, groups, and collaborations.",
//   },
//   {
//     title: "Share & Learn",
//     descp: "Share insights, ask questions, and grow your knowledge.",
//   },
//   // add all 7 entries here...
// ];

// const SelectAccountType = () => {
//   const [selected, setSelected] = useState(null);
//   const navigate = useNavigate();
//   console.log(selected);
  
//   return (
//     <div className="flex min-h-screen min-w-screen overflow-x-hidden">
//       {/* Left side */}
//       <div className="max-w-[500px] w-[420px] h-screen pt-[33%] fixed bg-blue-600 text-white flex overflow-hidden items-center justify-center">
//         <InfoCrousel InfoBoxes={InfoBox} />
//       </div>
//       {/* Right side */}
//       <div className="w-[1012px] max-w-screen bg-white ml-[31%]">
//         <div className="fixed bg-white w-full h-[58px] my-8 flex flex-col gap-[6px] z-30">
//           <h3 className="text-xl font-bold">Select Account Type</h3>
//           <p className="text-[14px] font-normal text-gray-500">
//             We’ll use this to personalize your experience and unlock relevant
//             features.
//           </p>
//         </div>
//         <div className="w-[96%] overflow-scroll scrollbar-hide mt-[12%] h-[550px] flex flex-col gap-5 z-10">
//           {options.map((opt, idx) => (
//             <AccountOption
//               key={idx}
//               id={opt.id}
//               title={opt.title}
//               desc={opt.desc}
//               selected={selected === opt.id}
//               onClick={() => setSelected(opt.id)}
//             />
//           ))}
//         </div>
//         <div className="fixed w-[1010px] h-16">
//           <div className="w-[95%] h-full flex justify-end items-center">
//           {
//             selected ? (
//               // options.map((opt, idx) => (
//               <button
//                 //   key={idx}
//                 // title={opt.title}
//                 // desc={opt.desc}
//                 // selected={selected === opt.title}
//                 className="w-[122px] h-[55px] cursor-pointer mt-6 px-6 py-2 border text-lg rounded-[10px] border-[#B0B0B0] text-white font-semibold btn-gradient hover:bg-blue-700"
//                 //onClick={() => setSelected(opt.title)}
//                 //onClick={() => setSelected(opt.title)}
//                 onClick={() =>
//                   navigate("/infoform", { state: { userType: selected } })
//                 }
//               >
//                 Next
//               </button>
//             ) : (
//               <button
//                 //   key={idx}
//                 // title={opt.title}
//                 // desc={opt.desc}
//                 // selected={selected === opt.title}
//                 className="w-[122px] h-[55px] mt-6 px-6 py-2 border text-lg rounded-[10px] border-[#B0B0B0] text-white font-semibold bg-gray-300 cursor-not-allowed"
//               >
//                 Next
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SelectAccountType;



