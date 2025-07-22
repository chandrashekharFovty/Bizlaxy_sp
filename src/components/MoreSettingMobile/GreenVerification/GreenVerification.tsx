import React, { useState, Fragment, useEffect } from "react";
import { CiClock2 } from "react-icons/ci";
import { FaAngleRight, FaCheck } from "react-icons/fa";
import { MdExpandLess } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import AccountOption from "@/components/accounts/AccountOptions";

const images = [
  {
    img: "/image 161.png",
    title: "Provide Basic Information",
    description:
      "Fill in your full name, date of birth, and contact details to begin the process.",
  },
  {
    img: "/image 160.png",
    title: "Verify Contact Information",
    description:
      "Enter the OTP sent to your registered email or phone number to confirm your identity.",
  },
  {
    img: "/image 162.png",
    title: "Upload Required Documents",
    description: "Government ID or Proof of Address",
  },
  {
    img: "/image 164.png",
    title: "Selfie for Authentication",
    description:
      "Take a real-time selfie to match with your submitted documents for added security.",
  },
  {
    img: "/image 163.png",
    title: "Submit for Review",
    description:
      "Review your details and submit. Verification usually completes within a few minutes.",
  },
];
// === GREEN VERIFICATION STEPS ===
function GreenVerification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVerification, setShowVerification] = useState(false);

  const handleBack = () => setShowVerification(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (showVerification) {
    return <ApplyVerificationGreen onBack={handleBack} />;
  }

  return (
    <div className="p-4 bg-white dark:dark-color text-black  min-h-screen">
      {/* Back Link */}
      <Link to="/settings" className="lg:hidden flex items-center font-semibold mb-4">
        <MdExpandLess className="transform rotate-[-90deg] text-[40px]" />
      </Link>

      {/* Title & Description */}
      <div className="dark:dark-color flex flex-col items-center justify-center">
      <div className="text-center mb-6">
        <h1 className="mt-8 text-2xl font-bold mb-2">Green Verification</h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 max-md:text-xl text-sm">
          Build credibility and trust across the Bizlaxy ecosystem <br />
          by completing your investor verification. Verified <br />
          accounts gain access to exclusive pitch insights, <br />
          investor tools, and visibility in trusted networks.
        </p>
      </div>

      {/* Slider */}
      <div className="dark:dark-color relative overflow-hidden w-[340px] mx-auto">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 20}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[340px] h-[300px] flex-shrink-0 text-center relative"
            >
              <img
                src={image.img}
                alt={image.title}
                className="ml-20 w-[210px] h-[200px] object-cover"
              />
              <div className="absolute left-0 right-0 mt-2 px-4">
                <h3 className="font-semibold text-lg">{image.title}</h3>
                <p className="text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <button
        onClick={() => setShowVerification(true)}
        className="flex items-center justify-center  lg:flex lg:ml-[80px]  mt-10 bg-blue-800 text-xl font-semibold rounded text-white h-14 w-[370px] flex items-center justify-center"
      >
        Apply For Verification
      </button>

      <div className="dark:dark-color m-4">
        <h1 className="pt-2 font-semibold">Note:</h1>
        <ol className="dark:dark-color list-disc list-inside mt-2 space-y-1 text-sm text-gray-700">
          <li>All users can apply.</li>
          <li>
            Company, Startup, Startup Idea, and Investor accounts must complete{" "}
            <span className="text-green-500 font-semibold">
              Green Verification
            </span>{" "}
            first.
          </li>
        </ol>
      </div></div>
    </div>
  );
}

// === APPLY VERIFICATION STEPS ===
export function ApplyVerificationGreen({ 
  onBack,
} ) {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [activePopup, setActivePopup] = useState(null);
  const [activeComponent, setActiveComponent] = useState(null);

  const steps = [
    { id: 1, label: "Nature of Business" },
    { id: 2, label: "GST Number" },
    { id: 3, label: "PAN Number" },
    { id: 4, label: "Business Registration Proof" },
    { id: 5, label: "Import Export Code" },
    { id: 6, label: "Address Proof" },
  ];

  const handleStepClick = (step) => {
    setCurrentStep(step.id);
    if (step.id === 1 || step.id === 2 || step.id === 3) {
      setActivePopup(step);
    } else if (step.id === 4) {
      setActiveComponent("Business");
    } else if (step.id === 5) {
      setActiveComponent("ImportExport");
    } else if (step.id === 6) {
      setActiveComponent("Address");
    }
  };

  const handleClosePopup = () => setActivePopup(null);
  const handleChildBack = () => setActiveComponent(null);

  if (activeComponent === "Business") {
    return <Business onBack={handleChildBack} />;
  }

  if (activeComponent === "ImportExport") {
    return <ImportExport onBack={handleChildBack} />;
  }

  if (activeComponent === "Address") {
    return <Address onBack={handleChildBack} />;
  }

 const renderPopupContent = () => {
    if (!activePopup) return null;

    let placeholder = "";
    let title = "";
    let description = " ";

    if (activePopup.id === 1) {
      title = "Define Your Business Nature";
      description =
        "Select your business type to professionalize your experience and ensure compliance.";
      placeholder = "Enter your business nature";
    } else if (activePopup.id === 2) {
      title = "GST Number";
      description =
        "Enter your GST number to enable seamless tax compliance and invoicing.";
      placeholder = "Enter your GST Number";
    } else if (activePopup.id === 3) {
      title = "PAN Number";
      description =
        "Provide your PAN number to verify your business identity and ensure regulatory compliance.";
      placeholder = "Enter your PAN Number";
    }

    return (
      <>
        <button
          onClick={handleClosePopup}
          className="text-blue-600 font-semibold mb-4"
        >
          Back
        </button>

        <h1 className="text-lg font-bold mb-2">{title}</h1>
        <p>{description}</p>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full border px-4 py-2 rounded mb-4"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded-xl">
          Save
        </button>
      </>
    );
  };

  return (
    <div className="dark:dark-color p-6  w-full h-full">
      {/* Back Button */}
      <button onClick={onBack} className="flex items-center font-semibold mb-4">
        <MdExpandLess className="transform rotate-[-90deg] text-[40px] cursor-pointer" />
      </button>

      <h1 className="text-2xl font-bold mb-2">Complete Your Verification</h1>
      <p className="dark:text-gray-400 text-gray-600">
        Select the pending documents to finish verifying your account and
        ensure secure access.
      </p>

      <div className="mt-8 space-y-6 ">
        {steps.map((step) => (
          <div
            key={step.id}
            onClick={() => handleStepClick(step)}
            className="flex items-start space-x-4 cursor-pointer"
          >
            <div className="mt-1 flex items-center justify-center w-4 h-4 flex-shrink-0">
              {step.id < currentStep ? (
                <div className="bg-purple-600 w-4 h-4  rounded-full flex items-center justify-center">
                  <FaCheck className="text-white text-[8px] lg:text-[10px]" />
                </div>
              ) : step.id === currentStep ? (
                <div className="w-4 h-4 border-2 border-purple-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
              ) : (
                <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
              )}
            </div>

            <div>
              <p className="text-sm lg:text-lg text-gray-500">Step {step.id}</p>
              <p className="font-semibold lg:text-xl">{step.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Bottom Popup */}
      <div
        className={`fixed left-0 right-0 bottom-0 bg-white border-t border-gray-300 shadow-lg p-6 rounded-t-2xl transform transition-transform duration-300 md:hidden ${
          activePopup ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {renderPopupContent()}
      </div>

      {/* Desktop Center Modal */}
      <Transition appear show={!!activePopup} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 hidden md:block"
          onClose={handleClosePopup}
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Dialog.Panel className="bg-white p-6 rounded-lg w-full max-w-md mx-4">
              {renderPopupContent()}
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </div>
  );

}

// export function Basic() {
//   const [activePopup, setActivePopup] = useState(null);
// const navigate=useNavigate()
//   const steps = [
//     "Nature of Business",
//     "GST Number",
//     "PAN of the Business or Proprietor",
//     "Business Registration Proof",
//     "Import Export Code",
//     "Address Proof",
//   ];

//   const handleOpenPopup = (step) => {
//   if (
//     step === "Nature of Business" ||
//     step === "GST Number" ||
//     step === "PAN of the Business or Proprietor"
//   ) {
//     setActivePopup(step);
//   } else if (step === "Business Registration Proof") {
//     navigate("/business");
//   } else {
//     console.log(`You clicked: ${step} — No popup and no navigation`);
//   }
// };

//   const handleClosePopup = () => {
//     setActivePopup(null);
//   };

//   const renderPopupContent = () => {
//     switch (activePopup) {
//       case "Nature of Business":
//         return (
//           <>
//             <h1 className="text-lg font-semibold mb-2">Define Your Business Nature</h1>
//             <p className="text-gray-600 mb-4">
//               Select your business type to professionalize your experience and ensure compliance.
//             </p>
//             <input
//               type="text"
//               placeholder="Nature of Business"
//               className="w-full border px-4 py-2 rounded mb-4"
//             />
//             <button className="w-full bg-blue-600 text-white py-2 rounded-xl">
//               Save
//             </button>
//           </>
//         );

//       case "GST Number":
//         return (
//           <>
//             <h1 className="text-lg font-semibold mb-2">Enter GST Number</h1>
//             <p className="text-gray-600 mb-4">
//               Provide your valid GST Number to complete tax-related compliance.
//             </p>
//             <input
//               type="text"
//               placeholder="GST Number"
//               className="w-full border px-4 py-2 rounded mb-4"
//             />
//             <button className="w-full bg-blue-600 text-white py-2 rounded-xl">
//               Save
//             </button>
//           </>
//         );

//       case "PAN of the Business or Proprietor":
//         return (
//           <>
//             <h1 className="text-lg font-semibold mb-2">Enter PAN Details</h1>
//             <p className="text-gray-600 mb-4">
//               Add the PAN of your business or proprietor for identity verification.
//             </p>
//             <input
//               type="text"
//               placeholder="PAN Number"
//               className="w-full border px-4 py-2 rounded mb-4"
//             />
//             <button className="w-full bg-blue-600 text-white py-2 rounded-xl">
//               Save
//             </button>
//           </>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto">
//       {/* Back Link */}
//       <Link
//         to="/profile"
//         className="flex items-center mb-6 text-blue-600 font-semibold"
//       >
//         <MdExpandLess className="transform rotate-[-90deg] text-3xl" />
//         <span className="ml-1">Back</span>
//       </Link>

//       <h1 className="text-2xl font-bold mb-2">Complete Your Verification</h1>
//       <p className="text-gray-600 mb-6">
//         Select the pending documents to finish verifying your account and ensure secure access.
//       </p>

//       <div className="space-y-4">
//         {steps.map((step) => (
//           <button
//             key={step}

//             className="w-full flex items-center justify-between border border-gray-400 px-4 py-3 rounded-xl hover:bg-gray-100"
//           >
//             <span className="flex items-center gap-2">
//               <CiClock2 className="text-lg" />
//               {step}
//             </span>
//             <FaAngleRight />
//           </button>
//         ))}
//       </div>

//       {/* Bottom Popup */}
//       <div
//         className={`fixed left-0 right-0 bottom-0 bg-white border-t border-gray-300 shadow-lg p-6 rounded-t-2xl transform transition-transform duration-300 ${
//           activePopup ? "translate-y-0" : "translate-y-full"
//         }`}
//       >
//         {activePopup && (
//           <>
//             <div className="flex justify-between items-center mb-4">
//               <button
//                 onClick={handleClosePopup}
//                 className="text-gray-800 hover:text-gray-800 font-medium"
//               >
//                 Back
//               </button>
//             </div>
//             {renderPopupContent()}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }





// === BUSINESS COMPONENT ===
export function Business({ onBack }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [uploadDoc, setUploadDoc] = useState<string | null>(null);


  const options = [
    { id: "GST Certificate", title: "GST Certificate", desc: "Upload GST certificate." },
    { id: "Shop License", title: "Shop License", desc: "Upload Shop Act License." },
    { id: "Udyam Certificate", title: "Udyam Certificate", desc: "Upload MSME Udyam Registration." },
    { id: "ImportExport", title: "Import Export Code", desc: "Provide Import Export Code." },
  ];

 const handleOptionClick = (id) => {
      setSelected(id);
      setUploadDoc(id);
      setIsDialogOpen(true);
  };



  return (
    <div className="dark:dark-color w-screen min-h-screen lg:w-full overflow-x-hidden">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center font-semibold mb-4"
      >
        <MdExpandLess className="transform -rotate-90 text-[40px] cursor-pointer" />
      </button>

      <div className="dark:dark-color flex flex-col lg:flex-row">
        <div className="dark:dark-color w-full bg-white max-md:ml-2 p-4">
          <h1 className="text-2xl font-semibold">
            Business Registration Proof
          </h1>
          <p className="text-sm pt-1">
            To proceed, please upload one of the following documents.
          </p>

          <div className="w-full dark:dark-color overflow-y-auto scrollbar-hide mt-12 flex flex-col gap-5">
            {options.map((opt) => (
              <AccountOption
                key={opt.id}
                id={opt.id}
                title={opt.title}
                desc={opt.desc}
                selected={selected === opt.id}
                onClick={() => handleOptionClick(opt.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Upload Dialog */}
      <Transition appear show={isDialogOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsDialogOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold text-gray-900 mb-6"
                  >
                    Upload {uploadDoc} Front and Back
                  </Dialog.Title>

                  <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center justify-center w-full h-60 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M4 12l8-8m0 0l8 8m-8-8v12"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-gray-500">
                      Upload (.png, .jpg)
                    </p>
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/png, image/jpeg"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          console.log("File selected:", file.name);
                        }
                      }}
                    />
                  </label>

                  <button
                    type="button"
                    onClick={() => setIsDialogOpen(false)}
                    className="mt-6 w-full h-12 bg-blue-600 text-white font-semibold rounded-xl"
                  >
                    Save
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

// === ImportExport Component ===

export function ImportExport({ onBack }) {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/greenidentity");

  return (
    <div className="dark:dark-color w-full min-h-screen p-4">
      <button
        onClick={onBack}
        className="flex items-center font-semibold mb-4"
      >
        <MdExpandLess className="transform -rotate-90 text-[40px] cursor-pointer" />
      </button>

      <h1 className="font-semibold text-2xl">Import & Export Code (IEC)</h1>
      <p className="text-sm pt-1">Do you have an Import Export Code (IEC)?</p>

      <div className="flex pt-4 gap-2">
        <button
          onClick={() => setShowPopup(true)}
          className="border border-gray-500 rounded-xl bg-blue-100 text-black h-10 w-20"
        >
          Yes
        </button>

        <button
          onClick={handleNavigate}
          className="border border-gray-500 rounded-xl bg-blue-100 text-black h-10 w-20"
        >
          No
        </button>
      </div>

     {showPopup && (
  <>
    {/* Overlay */}
    <div className="fixed inset-0 bg-black bg-opacity-40 z-40"></div>

    {/* Popup */}
    <div className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl w-[90%] max-w-md">
      <button
      onClick={onBack}
        // to="/greenidentity"
        className="text-blue-500 underline mb-2 inline-block"
      >
        Back to Profile
      </button>

      <h1 className="text-lg font-semibold dark:text-white mb-1">
        Provide Your IEC Details
      </h1>

      <p className="text-sm dark:text-gray-300 mb-4">
        Enter your IEC number and optionally upload a copy of your certificate.
      </p>

      <input
        type="text"
        placeholder="Enter your IEC number"
        className="border p-2 dark:text-black rounded-xl mb-3 w-full"
      />
      <input type="file" className="border p-2 mb-4 w-full rounded-xl" />

      <div className="flex gap-2 justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Save
        </button>
        <button
          onClick={() => setShowPopup(false)}
          className="bg-gray-300 dark:text-black px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  </>
)}

    </div>
  );
}



export function Address({onBack}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [uploadDoc, setUploadDoc] = useState<string | null>(null);
  // const navigate = useNavigate();
const option = [
  {
    id: "Utility Bill",
    title: "Utility Bill",
    desc: "Recent electricity, water, or gas bill.",
  },
  {
    id: "Lease Agreement",
    title: "Lease Agreement",
    desc: "Valid rental or lease document.",
  },
  {
    id: "Official Document",
    title: "Official Document",
    desc: "Government-issued proof with business address.",
  },
];
  const handleOptionClick = (id: string) => {
    setSelected(id);
    setUploadDoc(id);
    setIsDialogOpen(true);
  };

  return (
    <div className=" dark:dark-color max-md:flex-col min-h-screen lg:w-full min-w-screen overflow-x-hidden">
      {/* Back Link */}
      <button
        // to="/greenidentity"
        onClick={onBack}
        className="flex items-center font-semibold mb-4"
      >
        <MdExpandLess className="transform rotate-[-90deg] text-[40px] cursor-pointer" />
      </button>

      <div className="dark:dark-color max-md:w-screen max-md:ml-2 max-w-screen lg:w-full bg-white ">
        <h1 className="text-2xl pl-4 font-semibold">Address Proof</h1>
        <p className="text-sm pl-4 mx-2 pt-1">
          Upload one of the following documents to verify your business address
        </p>

        <div className="w-[96%] overflow-scroll scrollbar-hide mt-[12%] h-[550px] flex flex-col gap-5 z-10">
          {option.map((opt, idx) => (
            <AccountOption
              key={idx}
              id={opt.id}
              title={opt.title}
              desc={opt.desc}
              selected={selected === opt.id}
              onClick={() => handleOptionClick(opt.id)}
            />
          ))}
        </div>
      </div>

      {/* Upload Dialog */}
      <Transition appear show={isDialogOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsDialogOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold text-gray-900 mb-6"
                  >
                    Upload {uploadDoc} Front and Back
                  </Dialog.Title>

                  <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center justify-center w-full h-60 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M4 12l8-8m0 0l8 8m-8-8v12"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-gray-500">
                      Upload (.png, .jpg)
                    </p>
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/png, image/jpeg"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          console.log("File selected:", file.name);
                        }
                      }}
                    />
                  </label>

                  <button
                    type="button"
                    onClick={() => setIsDialogOpen(false)}
                    className="mt-6 w-full h-12 bg-blue-600 text-white font-semibold rounded-xl"
                  >
                    Save
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default GreenVerification;












// === APPLY VERIFICATION STEPS ===

// export function ApplyVerificationGreen({ onBack }) {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [activePopup, setActivePopup] = useState(null);
//   const [activeComponent, setActiveComponent] = useState(null);

//   const steps = [
//     { id: 1, label: "Nature of Business" },
//     { id: 2, label: "GST Number" },
//     { id: 3, label: "PAN Number" },
//     { id: 4, label: "Business Registration Proof" },
//     { id: 5, label: "Import Export Code" },
//     { id: 6, label: "Address Proof" },
//   ];

//   const handleStepClick = (step) => {
//     setCurrentStep(step.id);
//     if (step.id === 1 || step.id === 2 || step.id === 3) {
//       setActivePopup(step);
//     } else if (step.id === 4) {
//       setActiveComponent("Business");
//     } else if (step.id === 5) {
//       setActiveComponent("ImportExport");
//     } else if (step.id === 6) {
//       setActiveComponent("Address");
//     }
//   };

//   const handleClosePopup = () => setActivePopup(null);
//   const handleChildBack = () => setActiveComponent(null);

//   if (activeComponent === "Business") {
//     return <Business onBack={handleChildBack} />;
//   }

//   if (activeComponent === "ImportExport") {
//     return <ImportExport onBack={handleChildBack} />;
//   }

//   if (activeComponent === "Address") {
//     return <Address onBack={handleChildBack} />;
//   }

//   const renderPopupContent = () => {
//     if (!activePopup) return null;
//     const content = {
//       1: {
//         title: "Define Business Nature",
//         desc: "Select your business type for compliance.",
//         placeholder: "Enter your business nature",
//       },
//       2: {
//         title: "GST Number",
//         desc: "Provide your GST Number.",
//         placeholder: "Enter your GST Number",
//       },
//       3: {
//         title: "PAN Number",
//         desc: "Provide your PAN Number.",
//         placeholder: "Enter your PAN Number",
//       },
//     }[activePopup.id];

//     return (
//       <>
//         <button onClick={handleClosePopup} className="text-blue-600 mb-4">
//           Back
//         </button>
//         <h1 className="text-lg font-bold mb-2">{content.title}</h1>
//         <p>{content.desc}</p>
//         <input
//           type="text"
//           placeholder={content.placeholder}
//           className="w-full border px-4 py-2 rounded mb-4"
//         />
//         <button className="w-full bg-blue-600 text-white py-2 rounded-xl">
//           Save
//         </button>
//       </>
//     );
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto">
//       <button onClick={onBack} className="flex items-center mb-4">
//         <MdExpandLess className="transform -rotate-90 text-[40px]" />
//       </button>
//       <h1 className="text-2xl font-bold mb-2">Complete Your Verification</h1>
//       <p className="text-gray-600">
//         Click each step below to complete your verification.
//       </p>

//       <div className="mt-8 space-y-6">
//         {steps.map((step) => (
//           <div
//             key={step.id}
//             onClick={() => handleStepClick(step)}
//             className="flex items-start space-x-4 cursor-pointer"
//           >
//             <div className="flex items-center justify-center w-4 h-4">
//               {step.id < currentStep ? (
//                 <div className="bg-green-600 w-4 h-4 rounded-full flex items-center justify-center">
//                   <FaCheck className="text-white text-xs" />
//                 </div>
//               ) : step.id === currentStep ? (
//                 <div className="w-4 h-4 border-2 border-green-600 rounded-full flex items-center justify-center">
//                   <div className="w-2 h-2 bg-green-600 rounded-full"></div>
//                 </div>
//               ) : (
//                 <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
//               )}
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Step {step.id}</p>
//               <p className="font-semibold">{step.label}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Mobile Bottom Popup */}
//       <div
//         className={`fixed left-0 right-0 bottom-0 bg-white border-t shadow-lg p-6 transform transition-transform duration-300 md:hidden ${
//           activePopup ? "translate-y-0" : "translate-y-full"
//         }`}
//       >
//         {renderPopupContent()}
//       </div>

//       {/* Desktop Center Modal */}
//       <Transition appear show={!!activePopup} as={Fragment}>
//         <Dialog
//           as="div"
//           className="relative z-50 hidden md:block"
//           onClose={handleClosePopup}
//         >
//           <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
//             <Dialog.Panel className="bg-white p-6 rounded-lg w-full max-w-md mx-4">
//               {renderPopupContent()}
//             </Dialog.Panel>
//           </div>
//         </Dialog>
//       </Transition>
//     </div>
//   );
// }

// === BUSINESS COMPONENT ===

// export function Business({ onBack }) {
//   const [selected, setSelected] = useState(null);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [uploadDoc, setUploadDoc] = useState(null);
//   const [activeComponent, setActiveComponent] = useState(null);

//   const options = [
//     { id: "GST Certificate", title: "GST Certificate", desc: "Upload GST certificate." },
//     { id: "Shop License", title: "Shop License", desc: "Upload Shop Act License." },
//     { id: "Udyam Certificate", title: "Udyam Certificate", desc: "Upload MSME Udyam Registration." },
//     { id: "ImportExport", title: "Import Export Code", desc: "Provide Import Export Code." },
//   ];

//   const handleOptionClick = (id) => {
//     if (id === "ImportExport") {
//       setActiveComponent("ImportExport");
//     } else {
//       setSelected(id);
//       setUploadDoc(id);
//       setIsDialogOpen(true);
//     }
//   };

//   const handleChildBack = () => setActiveComponent(null);

//   if (activeComponent === "ImportExport") {
//     return <ImportExport onBack={handleChildBack} />;
//   }

//   return (
//     <div className="p-6">
//       <button onClick={onBack} className="flex items-center mb-4">
//         <MdExpandLess className="transform -rotate-90 text-[40px]" />
//       </button>
//       <h1 className="text-2xl font-bold mb-2">Business Registration Proof</h1>
//       <p className="text-gray-600 mb-4">Select and upload one document.</p>

//       <div className="space-y-4">
//         {options.map((opt) => (
//           <AccountOption
//             key={opt.id}
//             {...opt}
//             selected={selected === opt.id}
//             onClick={() => handleOptionClick(opt.id)}
//           />
//         ))}
//       </div>

//       <Transition appear show={isDialogOpen} as={Fragment}>
//         <Dialog as="div" className="relative z-50" onClose={() => setIsDialogOpen(false)}>
//           <div className="fixed inset-0 bg-black/25" />
//           <div className="fixed inset-0 flex items-center justify-center p-4">
//             <Dialog.Panel className="bg-white p-6 rounded-xl w-full max-w-md">
//               <Dialog.Title className="text-lg font-bold mb-4">
//                 Upload {uploadDoc}
//               </Dialog.Title>
//               <input type="file" className="mb-4 w-full" />
//               <button
//                 onClick={() => setIsDialogOpen(false)}
//                 className="w-full bg-blue-600 text-white py-2 rounded-xl"
//               >
//                 Save
//               </button>
//             </Dialog.Panel>
//           </div>
//         </Dialog>
//       </Transition>
//     </div>
//   );
// }

// === IMPORT EXPORT COMPONENT ===

// export function ImportExport({ onBack }) {
//   const [showPopup, setShowPopup] = useState(false);

//   return (
//     <div className="p-6">
//       <button onClick={onBack} className="flex items-center mb-4">
//         <MdExpandLess className="transform -rotate-90 text-[40px]" />
//       </button>
//       <h1 className="text-2xl font-bold mb-2">Import Export Code</h1>
//       <p className="text-gray-600">Do you have an IEC?</p>
//       <div className="flex gap-4 mt-4">
//         <button onClick={() => setShowPopup(true)} className="bg-blue-100 px-4 py-2 rounded-xl">
//           Yes
//         </button>
//         <button onClick={onBack} className="bg-blue-100 px-4 py-2 rounded-xl">
//           No
//         </button>
//       </div>

//       {showPopup && (
//         <div className="fixed bottom-0 left-0 right-0 bg-white p-6 border-t shadow-lg">
//           <h1 className="text-lg font-bold mb-2">Provide IEC Details</h1>
//           <input placeholder="IEC Number" className="border p-2 w-full mb-2" />
//           <input type="file" className="border p-2 w-full mb-2" />
//           <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2">Save</button>
//           <button onClick={() => setShowPopup(false)} className="bg-gray-300 px-4 py-2 rounded">
//             Cancel
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// === ADDRESS COMPONENT ===

// export function Address({ onBack }) {
//   const [selected, setSelected] = useState(null);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [uploadDoc, setUploadDoc] = useState(null);

//   const options = [
//     { id: "Utility Bill", title: "Utility Bill", desc: "Upload utility bill." },
//     { id: "Lease Agreement", title: "Lease Agreement", desc: "Upload rental agreement." },
//     { id: "Official Document", title: "Official Document", desc: "Upload govt. proof." },
//   ];

//   const handleOptionClick = (id) => {
//     setSelected(id);
//     setUploadDoc(id);
//     setIsDialogOpen(true);
//   };

//   return (
//     <div className="p-6">
//       <button onClick={onBack} className="flex items-center mb-4">
//         <MdExpandLess className="transform -rotate-90 text-[40px]" />
//       </button>
//       <h1 className="text-2xl font-bold mb-2">Address Proof</h1>
//       <p className="text-gray-600 mb-4">Select and upload one proof of address.</p>

//       <div className="space-y-4">
//         {options.map((opt) => (
//           <AccountOption
//             key={opt.id}
//             {...opt}
//             selected={selected === opt.id}
//             onClick={() => handleOptionClick(opt.id)}
//           />
//         ))}
//       </div>

//       <Transition appear show={isDialogOpen} as={Fragment}>
//         <Dialog as="div" className="relative z-50" onClose={() => setIsDialogOpen(false)}>
//           <div className="fixed inset-0 bg-black/25" />
//           <div className="fixed inset-0 flex items-center justify-center p-4">
//             <Dialog.Panel className="bg-white p-6 rounded-xl w-full max-w-md">
//               <Dialog.Title className="text-lg font-bold mb-4">
//                 Upload {uploadDoc}
//               </Dialog.Title>
//               <input type="file" className="mb-4 w-full" />
//               <button
//                 onClick={() => setIsDialogOpen(false)}
//                 className="w-full bg-blue-600 text-white py-2 rounded-xl"
//               >
//                 Save
//               </button>
//             </Dialog.Panel>
//           </div>
//         </Dialog>
//       </Transition>
//     </div>
//   );
// }

