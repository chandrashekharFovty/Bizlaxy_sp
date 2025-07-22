import React, { useEffect, useState, Fragment, useRef } from "react";
import { MdExpandLess } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

import { Dialog, Transition } from "@headlessui/react";
import selfy from "../../../../public/image 164.png";
import linkedIn from "../../../../public/linkedin (1).png";
import twitter from "../../../../public/twitter (1).png";
import twitter1 from "../../../../public/twitter (2).png";
import link from "../../../../public/link.png";
import { ArrowLeft } from "lucide-react";

function BlueVerification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVerification, setShowVerification] = useState(false);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (showVerification) {
    return <ApplyVerification onBack={() => setShowVerification(false)} />;
  }
  return (
    <div className="dark:dark-color  p-4 bg-white dark:bg-gray-900 text-black dark:text-white h-screen">
      {/* Back Link */}
      <Link to="/settings" className="lg:hidden flex items-center font-semibold mb-4">
        <MdExpandLess className="transform rotate-[-90deg] text-[40px]" />
      </Link>

      {/* Title & Description */}
      <div className="dark:dark-color flex flex-col items-center justify-center">
      <div className="mb-6 text-center">
        <h1 className="mt-8 lg:mt-0 text-2xl font-bold mb-2">Blue Verification</h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
          Build credibility and trust across the Bizlaxy ecosystem <br />
          by completing your investor verification. Verified <br />
          accounts gain access to exclusive pitch insights, <br />
          investor tools, and visibility in trusted networks.
        </p>
      </div>

      {/* Proper Slide Container */}
      <div className="dark:dark-color relative overflow-hidden w-[340px] h-full mx-auto">
        <div
          className="dark:dark-color flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 20}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[340px] h-[280px]  flex-shrink-0 text-center relative"
            >
              {/* Image with overlay text */}
              <img
                src={image.img}
                alt={image.title}
                className="ml-20 w-[210px] h-[200px] object-cover"
              />
              <div className="absolute left-0 mt-2 right-0 px-4">
                <h3 className="font-semibold text-lg">{image.title}</h3>
                <p className="text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => setShowVerification(true)}
        className="mt-14 ml-4 bg-blue-800 lg:ml-[80px] text-xl font-semibold rounded text-white h-14 w-[370px] flex items-center justify-center"
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

export function ApplyVerification({ onBack }) {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(2);

  const [activeComponent, setActiveComponent] = useState(null);

  const steps = [
    { id: 1, label: "Identity Verification" },
    { id: 2, label: "Selfie Verification" },
    { id: 3, label: "Add Social Media Links" },
    { id: 4, label: "Share Your Professional Background" },
  ];

  const handleStepClick = (step) => {
    setCurrentStep(step.id);
    if (step.id === 1) setActiveComponent("IdentityVerification");
    if (step.id === 2) setActiveComponent("SelfyVerification");
    if (step.id === 3) setActiveComponent("SocialMedia");
    if (step.id === 4) setActiveComponent("ShareProfessional");
  };
  const handleChildBack = () => setActiveComponent(null);

  if (activeComponent === "IdentityVerification") {
    return <IdentityVerification onBack={handleChildBack} />;
  }
  if (activeComponent === "SelfyVerification") {
    return <SelfyVerification onBack={handleChildBack} />;
  }
  if (activeComponent === "SocialMedia") {
    return <SocialMedia onBack={handleChildBack} />;
  }
  if (activeComponent === "ShareProfessional") {
    return <ShareProfessional onBack={handleChildBack} />;
  }
  return (
    <div className="dark:dark-color p-6   lg:w-full h-screen w-screen">
      {/* Back Arrow */}
      <button onClick={onBack} className="flex items-center font-semibold mb-6">
        <MdExpandLess className="transform rotate-[-90deg] text-[40px] cursor-pointer" />
      </button>

      <h1 className="text-2xl font-bold mb-2">Complete Your Verification</h1>
      <p className="dark:text-gray-400 text-gray-600">
        Select the pending documents to finish verifying your account and ensure
        secure access.
      </p>

      <div className="mt-8 flex flex-col relative">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-start">
            <div className="flex flex-col items-center mr-4">
              {/* Circle */}
              <div
                className="flex items-center justify-center w-5 h-5 rounded-full z-10"
                onClick={() => handleStepClick(step)}
              >
                {step.id < currentStep ? (
                  <div className="bg-purple-600 w-5 h-5 rounded-full flex items-center justify-center">
                    <FaCheck className="text-white text-[8px]" />
                  </div>
                ) : step.id === currentStep ? (
                  <div className="w-5 h-5 border-2 border-purple-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                ) : (
                  <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                )}
              </div>

              {/* Line */}
              {index !== steps.length - 1 && (
                <div className="w-px flex-1 bg-gray-300"></div>
              )}
            </div>

            <div
              onClick={() => handleStepClick(step)}
              className="pb-8 cursor-pointer"
            >
              <p className="text-sm text-gray-500">Step {step.id}</p>
              <p className="font-semibold">{step.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const AccountOption = ({
  id,
  title,
  selected,
  onClick,
}: {
  id: string;
  title: string;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`border-2 w-full h-[70px] px-[35px] bg-[#eef4fd] py-[12px] rounded-[12px] cursor-pointer transition duration-200 ${
        selected ? "border-blue-700" : "border-[#BED6FF]"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[10px]">
          <h4 className="font-bold text-xl">{title}</h4>
        </div>
        <div
          className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mt-1 ${
            selected ? "border-[#1C4BC4]" : "border-blue-300"
          }`}
        >
          <div
            className={`w-5 h-5 border-2 border-[#BED6FF] rounded-full ${
              selected ? "bg-gradient-to-l from-blue-600 to-purple-600" : "bg-blue-300"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

// document verification
export function IdentityVerification({ onBack }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [uploadDoc, setUploadDoc] = useState<string | null>(null);
  const navigate = useNavigate();

  const options = [
    { id: "Adhar Card", title: "Adhar Card" },
    { id: "Passport", title: "Passport" },
    { id: "Driver's License", title: "Driver's License" },
    { id: "PAN Card", title: "PAN Card" },
  ];

  const handleOptionClick = (id: string) => {
    setSelected(id);
    setUploadDoc(id);
    setIsDialogOpen(true);
  };

  return (
<div className="dark:dark-color">
         {/* Back Link */}
      <button
        onClick={onBack}
        // to="/applyverification"
        className=" items-center font-semibold mb-4"
      >
        <MdExpandLess
          // onClick={() => navigate("/applyverification")}
          className="transform rotate-[-90deg] text-[40px] cursor-pointer"
        />
      </button>
    <div className="dark:dark-color flex max-md:flex-col min-h-screen min-w-screen lg:w-full overflow-x-hidden">
      <div className="dark:dark-color  max-md:w-screen max-md:ml-2 max-w-screen lg:w-full bg-white ">
        <h1 className="text-2xl pl-4 font-semibold">Identity Verification</h1>
        <p className="text-sm pl-4 pt-1">
          Upload a valid government-issued ID from one of the following
        </p>

        <div className="dark:text-gray-600 w-[96%] overflow-scroll scrollbar-hide mt-[12%] h-[550px] flex flex-col gap-5 z-10">
          {options.map((opt, idx) => (
            <AccountOption
              key={idx}
              id={opt.id}
              title={opt.title}
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
                    />
                  </label>

                  <button
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
    </div>
  );
}

// Selfie componet
export function SelfyVerification({ onBack }) {
  const [step, setStep] = useState<"start" | "take" | "preview">("start");
  const [selfieUrl, setSelfieUrl] = useState<string | null>(null);

  if (step === "take") {
    return (
      <TakeSelfy
        onBack={() => setStep("start")}
        onNext={(url) => {
          setSelfieUrl(url);
          setStep("preview");
        }}
      />
    );
  }

  if (step === "preview") {
    return (
      <PreviewSelfie
        selfieUrl={selfieUrl}
        onBack={() => setStep("take")}
        onConfirm={() => {
          // Submit or go to /applyverification
          console.log("Confirmed selfie:", selfieUrl);
        }}
      />
    );
  }

  // Default start screen
  return (
    <div className="dark:dark-color p-6 w-full h-full mx-auto text-center">
      <button onClick={onBack} className="flex items-center font-semibold mb-4">
        <MdExpandLess className="transform rotate-[-90deg] text-[40px] cursor-pointer" />
      </button>

      <h1 className="text-2xl font-bold mb-2">Confirm with a Selfie</h1>
      <p className="text-gray-600 mb-8">
        Take and upload a clear selfie while holding your selected ID to confirm your identity.
      </p>

      <img
        src={selfy}
        alt="Selfie verification illustration"
        className="mx-auto mb-8 w-60 h-60 object-cover"
      />

      <button
        onClick={() => setStep("take")}
        className="mt-14 bg-blue-800 text-xl font-semibold rounded-xl text-white h-14 w-full flex items-center justify-center"
      >
        Upload Selfie
      </button>
    </div>
  );
}


export function TakeSelfy({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: (url: string) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const selfieUrl = URL.createObjectURL(file);
      onNext(selfieUrl); // Call parent to go to Preview
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="dark:dark-color p-6 w-full h-full text-center">
      <button onClick={onBack} className="flex items-center font-semibold mb-4">
        <MdExpandLess className="transform rotate-[-90deg] text-[40px]" />
      </button>

      <h1 className="text-2xl font-bold mb-2">Take a Selfie to Verify</h1>
      <p className="dark:text-gray-300 text-gray-600 mb-8 text-sm">
        Keep your face centered in the circle and hold your ID next to your face without glare.
      </p>

      <label
        htmlFor="selfie-file"
        className="w-60 h-60 mx-auto mb-8 rounded-full bg-black dark:bg-white flex items-center justify-center cursor-pointer"
      >
        <span className="text-white dark:text-black">Tap to Open Camera</span>
      </label>

      <input
        ref={fileInputRef}
        id="selfie-file"
        type="file"
        accept="image/*"
        capture="user"
        className="hidden"
        onChange={handleFileChange}
      />

      <button
        onClick={handleButtonClick}
        className="w-full h-16 bg-blue-600 text-white font-semibold rounded-xl"
      >
        Take Selfie
      </button>
    </div>
  );
}



export function PreviewSelfie({
  selfieUrl,
  onBack,
  onConfirm,
}: {
  selfieUrl: string | null;
  onBack: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="dark:dark-color p-6 w-full h-full text-center flex flex-col items-center">
      <button onClick={onBack} className="self-start mb-4">
        <MdExpandLess className="transform rotate-[-90deg] text-[40px] cursor-pointer" />
      </button>

      <h1 className="text-xl font-bold mb-2">Preview Your Selfie</h1>
      <p className="dark:text-gray-400 text-gray-600 mb-6 text-sm">
        Make sure your face is clearly visible and your ID is readable.
      </p>

      <div className="w-60 h-60 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <img
          src={selfieUrl || "https://via.placeholder.com/240"}
          alt="Selfie Preview"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="dark:text-white border border-gray-400 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
        >
          Retake Selfie
        </button>
        <button
          onClick={onConfirm}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Use This Photo
        </button>
      </div>
    </div>
  );
}


// Add Social media links
export function SocialMedia({ onBack }) {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-md mx-auto">
      {/* Back Arrow */}
      <button
        onClick={onBack}
        // to="/applyverification"
        className="flex items-center font-semibold mb-6"
      >
        <MdExpandLess
          // onClick={() => navigate("/applyverification")}
          className="transform rotate-[-90deg] text-[40px] cursor-pointer"
        />
      </button>

      {/* LinkedIn Link */}
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center">
          <img
            src={linkedIn}
            alt="LinkedIn"
            className=" object-cover rounded-xl"
          />
        </div>
        <input
          type="text"
          defaultValue="https://www.linkedin.com/in/michael-..."
          className="flex-1 ml-3 h-12 px-4 rounded-xl bg-[#0A66C2] text-white outline-none"
        />
      </div>

      {/* Twitter Link */}
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center">
          <img
            src={twitter1}
            alt="Twitter"
            className="w-10 object-cover rounded-xl"
          />
        </div>
        <input
          type="text"
          defaultValue="https://twitter.com/michaelroberts_vc"
          className="flex-1 ml-3 h-12 px-4 rounded-xl bg-[#00AAEC] text-white outline-none"
        />
      </div>

      {/* Custom Link */}
      <div className="flex items-center mb-8">
        <div className="flex items-center justify-center">
          <img src={link} alt="Link" className="  h-8 object-cover" />
        </div>
        <input
          type="text"
          placeholder="Add or paste link here"
          className="flex-1 ml-3 h-12 px-4 rounded-xl bg-gray-100 outline-none"
        />
      </div>

      {/* Added Profiles */}
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-gray-200 rounded-xl p-4 flex flex-col items-center">
          <img
            src={linkedIn}
            alt="LinkedIn"
            className="h-12 w-12 object-cover rounded-full mb-2"
          />
          <p className="font-semibold mt-1">Michael Roberts</p>
          <p className="text-gray-500 text-sm">Investor</p>
          <p className="text-sm mt-2">28k Followers</p>
        </div>

        <div className="border border-gray-200 rounded-xl p-4 flex flex-col items-center">
          <img
            src={twitter}
            alt="Twitter"
            className="h-12 w-12 object-cover rounded-full mb-2"
          />
          <p className="font-semibold mt-1">Michael Roberts</p>
          <p className="text-gray-500 text-sm">Investor</p>
          <p className="text-sm mt-2">20k Followers</p>
        </div>
      </div>
    </div>
  );
}

// Share your professional
export function ShareProfessional({ onBack }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/applyverification");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      {/* Back Arrow */}
      <button
        onClick={onBack}
        // to="/applyverification"
        className="flex items-center font-semibold mb-6"
      >
        <ArrowLeft
        // onClick={() => navigate("/applyverification")}
        // className="transform rotate-[-90deg] text-[40px] cursor-pointer"
        />
      </button>

      <h1 className="text-2xl font-bold mb-2">
        Share Your Professional Background
      </h1>
      <p className="text-gray-600 mb-8 text-sm">
        Help startups and founders understand your expertise. Write a short
        summary that reflects your journey, experience, and areas of focus as an
        investor or mentor.
      </p>

      <div className="mb-12">
        <h3 className="font-semibold mb-2">
          What defines you as an investor or industry expert?
        </h3>
        <textarea
          rows={6}
          placeholder="e.g., Angel investor with 7+ years in B2B SaaS, HealthTech, and Fintech. Backed 20+ early-stage startups with 5 successful exits. Currently a partner at Nexus Edge Capital. Open to mentoring passionate founders building scalable tech solutions."
          className="w-full p-4 border border-gray-400 rounded-xl text-sm outline-none"
        ></textarea>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-1">
          Display this on your public profile
        </h3>
        <p className="text-sm text-gray-600">
          Showcase this summary to founders and creators exploring investor
          profiles.
        </p>
      </div>

      <button
        onClick={handleBack}
        className="w-full h-14 bg-blue-600 text-white rounded-xl font-semibold"
      >
        Save & Continue
      </button>
    </div>
  );
}

export default BlueVerification;
