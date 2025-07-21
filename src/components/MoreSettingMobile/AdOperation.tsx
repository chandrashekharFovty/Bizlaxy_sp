// import React from "react";
// import { MdExpandLess } from "react-icons/md";
// import { Link, useNavigate } from "react-router-dom";
// // import { StepIndicator } from "@/components/StepIndicator";



// // components/StepIndicator.jsx
// export function StepIndicator({ currentStep, totalSteps = 3 }) {
//   return (
//     <div className="pt-20 flex items-center justify-center pb-6">
//       {Array.from({ length: totalSteps }).map((_, index) => {
//         const step = index + 1;

//         return (
//           <React.Fragment key={step}>
//             <div className={`flex items-center justify-center
//               ${step === 1 ? '' : ''}`}>
//               {step < currentStep ? (
//                 <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
//                   ✓
//                 </div>
//               ) : step === currentStep ? (
//                 <div className="w-8 h-8 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600 text-xs font-bold">
//                   {step}
//                 </div>
//               ) : (
//                 <div className="w-4 h-4 rounded-full border border-gray-400 dark:border-gray-500"></div>
//               )}
//             </div>

//             {step !== totalSteps && (
//               <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600 mx-2"></div>
//             )}
//           </React.Fragment>
//         );
//       })}
//     </div>
//   );
// }


// function AdOperation() {
//   const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate("/bill");
//   };

//   return (
//    <div className="dark:dark-color h-screen">
//       {/* Fixed header */}
//       <div className="lg:hidden fixed top-0 left-0 right-0 bg-white dark:dark-color z-10 border-b-2 border-gray-200 dark:border-gray-700">
//         <Link
//           to="/settings"
//           className="flex items-center font-semibold text-black dark:text-white py-4 px-4"
//         >
//           <MdExpandLess className="transform rotate-[-90deg] text-2xl" />
//           <div className="flex flex-col items-center justify-center w-full">
//           <span className="font-bold text-xl ml-16">
//             Create an Ad Account
//           </span></div>
//         </Link>
//       </div>

//       {/* Step Indicator */}
//          <div>
//       {/* Header */}
//       <StepIndicator currentStep={1} />
//       {/* Form */}
//     </div>

//       {/* Form Fields */}
//       <div className="px-4">
//         <div className="pb-8">
//           <label className="block mb-1 font-medium text-xl dark:text-white">Ad Account Name</label>
//           <input
//             type="text"
//             placeholder="e.g. Main Product Ads"
//             className="dark:bg-gray-500  dark:text-white w-full text-xl h-20 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2 focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         <div className="pb-8">
//           <label className="block mb-1 text-xl font-medium dark:text-white">Business Page Selection</label>
//           <select className="dark:bg-gray-500 dark:text-black w-full text-xl h-20 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2 focus:outline-none focus:border-blue-500">
//             <option className="dark:text-black">Select your business page</option>
//           </select>
//         </div>

//         <div className="pb-8">
//           <label className="block mb-1 font-medium text-xl  dark:text-white">Currency Selection</label>
//           <select className="dark:bg-gray-500 w-full  text-xl h-20 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2 focus:outline-none focus:border-blue-500">
//             <option>Choose your billing currency</option>
//           </select>
//         </div>

//         <button
//           onClick={handleNavigate}
//           className="w-full bg-blue-600 text-2xl h-20 text-white py-2 rounded-xl  hover:bg-blue-700 transition"
//         >
//           Next
//         </button>
//       </div>
//           </div>

//   );
// }



// export function BillInformation(){
//    const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate("/billInfo");
//   };

// return(
//   <div className="dark:dark-color h-screen">
//       {/* Fixed header */}
//       <div className="lg:hidden fixed top-0 left-0 right-0 bg-white dark:dark-color z-10 border-b-2 border-gray-200 dark:border-gray-700">
//         <Link
//           to="/operation"
//           className="flex items-center font-semibold text-black dark:text-white py-4 px-4"
//         >
//           <MdExpandLess className="transform rotate-[-90deg] text-2xl" />
//           <div className="flex flex-col items-center justify-center w-full">
//           <span className="font-bold text-xl ml-16">
//            Set Up Billing  Information
//           </span></div>
//         </Link>
//       </div>

//       {/* Step Indicator */}
//          <div>
//       {/* Header */}
//       <StepIndicator currentStep={2} />
//       {/* Form */}
//     </div>

//       {/* Form Fields */}
//       <div className="px-4">
//         <div className="pb-8">
//           <label className="block mb-1 font-medium text-xl dark:text-white">Business Name</label>
//           <input
//             type="text"
//             placeholder="e.g. TechNex Innovation's"
//             className="w-full text-xl h-20 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2 focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         <div className="pb-8">
//           <label className="block mb-1 text-xl font-medium dark:text-white">PAN Card Number</label>
//           <input
//             type="text"
//             placeholder="e.g. 'ABCDE1234F'"
//             className="w-full text-xl h-20 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2 focus:outline-none focus:border-blue-500"
//           />
//         </div>

        
//          <div className="pb-8">
//           <label className="block mb-1 font-medium text-xl  dark:text-white">GST Number (optional)</label>
//           <input
//             type="text"
//             placeholder="e.g. '22AAAA0000A125'"
//             className="w-full text-xl h-20 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2 focus:outline-none focus:border-blue-500"
//           />
//         </div>

//          <div className="pb-8">
//           <label className="block mb-1 font-medium text-xl  dark:text-white">Billing Address</label>
//           <input
//             type="text"
//             placeholder="e.g. 'Unit 5B DLF Tower, Gurugram, Haryana-12200r'"
//             className="w-full text-xl h-20 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2 focus:outline-none focus:border-blue-500"
//           />
//         </div>

//          <div className="pb-8">
//           <label className="block mb-1 font-medium text-xl  dark:text-white">Payment Method</label>
//           <select className="w-full  text-xl h-20 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2 focus:outline-none focus:border-blue-500">
//             <option>Choose Payment Method</option>
//           </select>
//         </div>

//         <button
//           onClick={handleNavigate}
//           className="w-full bg-blue-600 text-2xl h-20 text-white py-2 rounded-xl  hover:bg-blue-700 transition"
//         >
//           Next
//         </button>
//       </div>
//           </div>
// )
// }

// export function Bills(){
//     const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate("/manager");
//   };

//   return(
//     <div className="dark:dark-color h-screen">
//       {/* Fixed header */}
//       <div className="lg:hidden fixed top-0 left-0 right-0 bg-white dark:dark-color z-10 border-b-2 border-gray-200 dark:border-gray-700">
//         <Link
//           to="/bill"
//           className="flex items-center font-semibold text-black dark:text-white py-4 px-4"
//         >
//           <MdExpandLess className="transform rotate-[-90deg] text-2xl" />
//           <div className="flex flex-col items-center justify-center w-full">
//           <span className="font-bold text-xl ml-16">
//              Set Up Billing  Information
//           </span></div>
//         </Link>
//       </div>

//       {/* Step Indicator */}
//         <div>
//       {/* Header */}
//       <StepIndicator currentStep={3} />
//       {/* Form */}
//     </div>

//       {/* Form Fields */}
//       <div className="px-4">
//         <div className="pb-8">
//           <label className="block mb-1 font-medium text-xl dark:text-white">Add Team Member Email</label>
//           <input
//             type="text"
//             placeholder="e.g. 'johndoe@gmail.com"
//             className="w-full text-xl h-20 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2 focus:outline-none focus:border-blue-500"
//           />
//         </div>        
      
//          <div className="pb-8">
//           <label className="block mb-1 font-medium text-xl  dark:text-white">Role selection</label>
//           <select className="w-full  text-xl h-20 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2 focus:outline-none focus:border-blue-500">
//             <option>Select a role</option>
//           </select>
//         </div>

//         <button
//           onClick={handleNavigate}
//           className="w-full bg-blue-600 text-2xl h-20 text-white py-2 rounded-xl  hover:bg-blue-700 transition"
//         >
//           Next
//         </button>
//       </div>
//           </div>
//   )
// }


// .
// export default AdOperation;





import React, { useState } from "react";
import { MdExpandLess } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export function StepIndicator({ currentStep, totalSteps = 4 }) {
  return (
    <div className="pt-20 lg:pt-10 flex items-center justify-center pb-6">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const step = index + 1;
        return (
          <React.Fragment key={step}>
            <div className="flex items-center justify-center">
              {step < currentStep ? (
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                  ✓
                </div>
              ) : step === currentStep ? (
                <div className="w-8 h-8 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600 text-xs font-bold">
                  {step}
                </div>
              ) : (
                <div className="w-4 h-4 rounded-full border border-gray-400 dark:border-gray-500"></div>
              )}
            </div>
            {step !== totalSteps && (
              <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600 mx-2"></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default function AdOperation() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const goNext = () => setCurrentStep((prev) => prev + 1);

  const goBack = () => {
    if (currentStep === 1) {
      navigate("/settings");
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="dark:dark-color h-screen w-full">
      {/* Fixed header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white dark:dark-color z-10 border-b-2 border-gray-200 dark:border-gray-700">
        <button
          onClick={goBack}
          className="flex items-center font-semibold text-black dark:text-white py-4 px-4"
        >
          <MdExpandLess className="transform rotate-[-90deg] text-2xl" />
          <div className="flex flex-col items-center justify-center w-full">
            <span className="font-bold text-xl ml-16">
              {currentStep === 1 && "Create an Ad Account"}
              {currentStep === 2 && "Set Up Billing Information"}
              {currentStep === 3 && "Add Team Member"}
              {currentStep === 4 && "Ad's Management"}
            </span>
          </div>
        </button>
      </div>

      {/* Optional back for desktop */}
      <button
        onClick={goBack}
        className="max-md:hidden flex items-center font-semibold text-black dark:text-white px-4"
      >
        <MdExpandLess className="transform rotate-[-90deg] text-2xl" />
        <div className="flex flex-col items-center justify-center w-full">
          <span className="font-bold text-xl ml-16">
            {currentStep === 1 && "Create an Ad Account"}
            {currentStep === 2 && "Set Up Billing Information"}
            {currentStep === 3 && "Add Team Member"}
            {currentStep === 4 && "Ad's Management"}
          </span>
        </div>
      </button>

      {/* Step Indicator */}
      {currentStep < 4 && (
        <StepIndicator currentStep={currentStep} totalSteps={4} />
      )}

      {/* Steps */}
      <div className="px-4 pt-6 lg:pt-0">
        {currentStep === 1 && (
          <>
            <div className="pb-8">
              <label className="block mb-1 font-medium text-xl dark:text-white">
                Ad Account Name
              </label>
              <input
                type="text"
                placeholder="e.g. Main Product Ads"
                className="w-full lg:h-14 text-xl h-20 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2"
              />
            </div>
            <div className="pb-8">
              <label className="block mb-1 font-medium text-xl dark:text-white">
                Business Page Selection
              </label>
              <select className="w-full text-xl h-20 lg:h-14 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2">
                <option>Select your business page</option>
              </select>
            </div>
            <div className="pb-8">
              <label className="block mb-1 font-medium text-xl dark:text-white">
                Currency Selection
              </label>
              <select className="w-full text-xl h-20 lg:h-14 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2">
                <option>Choose your billing currency</option>
              </select>
            </div>
            <button
              onClick={goNext}
              className="w-full bg-blue-600 text-2xl lg:h-14 h-20 text-white py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Next
            </button>
          </>
        )}

        {currentStep === 2 && (
          <>
            <div className="pb-8">
              <label className="block mb-1 font-medium text-xl dark:text-white">
                Business Name
              </label>
              <input
                type="text"
                placeholder="e.g. TechNex Innovations"
                className="w-full text-xl h-20 lg:h-14 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2"
              />
            </div>
            <div className="pb-8">
              <label className="block mb-1 font-medium text-xl dark:text-white">
                PAN Card Number
              </label>
              <input
                type="text"
                placeholder="e.g. ABCDE1234F"
                className="w-full text-xl h-20 lg:h-14 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2"
              />
            </div>
            <div className="pb-8">
              <label className="block mb-1 font-medium text-xl dark:text-white">
                GST Number (optional)
              </label>
              <input
                type="text"
                placeholder="e.g. 22AAAA0000A1Z5"
                className="w-full text-xl h-20 lg:h-14 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2"
              />
            </div>
            <div className="pb-8">
              <label className="block mb-1 font-medium text-xl dark:text-white">
                Billing Address
              </label>
              <input
                type="text"
                placeholder="e.g. Unit 5B DLF Tower, Gurugram, Haryana-122001"
                className="w-full text-xl h-20 lg:h-14 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2"
              />
            </div>
            <div className="pb-8">
              <label className="block mb-1 font-medium text-xl dark:text-white">
                Payment Method
              </label>
              <select className="w-full text-xl h-20 lg:h-14 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2">
                <option>Choose Payment Method</option>
              </select>
            </div>
            <button
              onClick={goNext}
              className="w-full bg-blue-600 text-2xl lg:h-14 h-20 text-white py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Next
            </button>
          </>
        )}

        {currentStep === 3 && (
          <>
            <div className="pb-8">
              <label className="block mb-1 font-medium text-xl dark:text-white">
                Add Team Member Email
              </label>
              <input
                type="email"
                placeholder="e.g. johndoe@gmail.com"
                className="w-full text-xl h-20 lg:h-14 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2"
              />
            </div>
            <div className="pb-8">
              <label className="block mb-1 font-medium text-xl dark:text-white">
                Role selection
              </label>
              <select className="w-full text-xl h-20 lg:h-14 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2">
                <option>Select a role</option>
              </select>
            </div>
            <button
              onClick={goNext}
              className="w-full bg-blue-600 text-2xl h-20 lg:h-14 text-white py-2 rounded-xl hover:bg-blue-400 transition"
            >
              Next
            </button>
          </>
        )}

        {currentStep === 4 && <Manager />}
      </div>
    </div>
  );
}

export function Manager() {
  return (
    <div className="dark:dark-color pt-20">
      <h3 className=" font-medium ml-4 text-xl font-bold">Performance Overview</h3>
      <div className="text-xs space-y-1 border-2 shadow-xl h-[300px] m-6 rounded-xl">
        <div className="flex justify-between p-2">
          <span className="text-lg font-semibold">Impressions</span>
          <span className="text-lg font-semibold">12,540</span>
        </div>
        <div className="flex justify-between p-2">
          <span className="text-lg font-semibold">Clicks</span>
          <span className="text-lg font-semibold">2,150</span>
        </div>
        <div className="flex justify-between p-2">
          <span className="text-lg font-semibold">CTR</span>
          <span className="text-lg font-semibold">17.1%</span>
        </div>
        <div className="flex justify-between p-2">
          <span className="text-lg font-semibold">Budget Spent</span>
          <span className="text-lg font-semibold">₹4,800 / ₹10,000</span>
        </div>
        <div className="flex justify-between p-2">
          <span className="text-lg font-semibold">Daily Avg. Spend</span>
          <span className="text-lg font-semibold">₹480</span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-medium m-4">Campaign Status Check</h3>
        <div className="flex justify-between h-20 m-6 border-2 rounded-full">
          <button className="bg-gradient-to-l w-60 from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-xl">
            Active
          </button>
          <button className="w-60 px-4 py-1 rounded-full text-xl">
            Pause
          </button>
        </div>
        <div className="space-y-2 m-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex justify-between items-center border-2 h-20 p-2 rounded-xl shadow-lg"
            >
              <span className="text-lg">Summer Sale Promo</span>
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-sm bg-green-100 px-2 py-0.5 rounded-full">
                  Active
                </span>
              </div>
              <button className="text-2xl">⋮</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
