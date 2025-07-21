// import React, { useState, Fragment, useEffect, useRef } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { MdExpandLess } from "react-icons/md";
// import { Dialog, Transition } from "@headlessui/react";
// import selfy from "../../../../public/image 164.png";
// import { FaLinkedinIn, FaTwitter, FaLink } from "react-icons/fa";
// import linkedIn from "../../../../public/linkedin (1).png"
// import twitter from "../../../../public/twitter (1).png"
// import twitter1 from "../../../../public/twitter (2).png"
// import link from "../../../../public/link.png"


// const AccountOption = ({
//   id,
//   title,
//   selected,
//   onClick,
// }: {
//   id: string;
//   title: string;
//   selected: boolean;
//   onClick: () => void;
// }) => {
//   return (
//     <div
//       className={`border-2 w-full h-[70px] px-[35px] bg-[#eef4fd] py-[12px] rounded-[12px] cursor-pointer transition duration-200 ${
//         selected ? "border-blue-600" : "border-[#BED6FF]"
//       }`}
//       onClick={onClick}
//     >
//       <div className="flex items-center justify-between">
//         <div className="flex flex-col gap-[10px]">
//           <h4 className="font-bold text-xl">{title}</h4>
//         </div>
//         <div
//           className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mt-1 ${
//             selected ? "border-[#1C4BC4]" : "border-[#BED6FF]"
//           }`}
//         >
//           <div
//             className={`w-5 h-5 border-2 border-[#BED6FF] rounded-full ${
//               selected ? "bg-[#BED6FF]" : "bg-transparent"
//             }`}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// };


// // document verification
// const IdentityVerification = () => {
//   const [selected, setSelected] = useState<string | null>(null);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [uploadDoc, setUploadDoc] = useState<string | null>(null);
//   const navigate = useNavigate();


//   const options = [
//   { id: "Adhar Card", title: "Adhar Card" },
//   { id: "Passport", title: "Passport" },
//   { id: "Driver's License", title: "Driver's License" },
//   { id: "PAN Card", title: "PAN Card" },
// ];

//   const handleOptionClick = (id: string) => {
//     setSelected(id);
//     setUploadDoc(id);
//     setIsDialogOpen(true);
//   };

//   return (
//     <div className="flex max-md:flex-col min-h-screen min-w-screen overflow-x-hidden">
//       {/* Back Link */}
//       <Link
//         to="/applyverification"
//         className="flex items-center font-semibold mb-4"
//       >
//         <MdExpandLess
//           onClick={() => navigate("/applyverification")}
//           className="transform rotate-[-90deg] text-[40px] cursor-pointer"
//         />
//       </Link>

//       <div className="w-[1012px] max-md:w-screen max-md:ml-2 max-w-screen bg-white ml-[31%]">
//         <h1 className="text-2xl pl-4 font-semibold">Identity Verification</h1>
//         <p className="text-sm pl-4 pt-1">
//           Upload a valid government-issued ID from one of the following
//         </p>

//         <div className="w-[96%] overflow-scroll scrollbar-hide mt-[12%] h-[550px] flex flex-col gap-5 z-10">
//           {options.map((opt, idx) => (
//             <AccountOption
//               key={idx}
//               id={opt.id}
//               title={opt.title}
//               selected={selected === opt.id}
//               onClick={() => handleOptionClick(opt.id)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Upload Dialog */}
//       <Transition appear show={isDialogOpen} as={Fragment}>
//         <Dialog
//           as="div"
//           className="relative z-50"
//           onClose={() => setIsDialogOpen(false)}
//         >
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black/25" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex min-h-full items-center justify-center p-4">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//               >
//                 <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
//                   <Dialog.Title
//                     as="h3"
//                     className="text-lg font-semibold text-gray-900 mb-6"
//                   >
//                     Upload {uploadDoc} Front and Back
//                   </Dialog.Title>

//                   <label
//                     htmlFor="file-upload"
//                     className="flex flex-col items-center justify-center w-full h-60 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 transition"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-10 h-10 text-gray-400"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M4 12l8-8m0 0l8 8m-8-8v12"
//                       />
//                     </svg>
//                     <p className="mt-2 text-sm text-gray-500">
//                       Upload (.png, .jpg)
//                     </p>
//                     <input
//                       id="file-upload"
//                       type="file"
//                       accept="image/png, image/jpeg"
//                       className="hidden"
//                     />
//                   </label>

//                   <button
//                     onClick={() => setIsDialogOpen(false)}
//                     className="mt-6 w-full h-12 bg-blue-600 text-white font-semibold rounded-xl"
//                   >
//                     Save
//                   </button>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>
//     </div>
//   );
// };

// // Selfie componet
// export function SelfyVerification() {
//   const [showVerification, setShowVerification] = useState(false);
//   const navigate = useNavigate();

//   if (showVerification) {
//     return <TakeSelfy />;
//   }

//   return (
//     <div className="p-6 max-w-md mx-auto text-center">
//       {/* Back Link */}
//       <Link to="#" className="flex items-center font-semibold mb-4">
//         <MdExpandLess
//           onClick={() => navigate("/applyverification")}
//           className="transform rotate-[-90deg] text-[40px] cursor-pointer"
//         />
//       </Link>

//       {/* Title & Description */}
//       <h1 className="text-2xl font-bold mb-2">Confirm with a Selfie</h1>
//       <p className="text-gray-600 mb-8">
//         Take and upload a clear selfie while holding your selected ID to confirm
//         your identity. This helps us ensure authenticity and prevent
//         impersonation.
//       </p>

//       {/* Image */}
//       <img
//         src={selfy}
//         alt="Selfie verification illustration"
//         className="mx-auto mb-8 w-60 h-60 object-cover"
//       />

//       {/* Upload Selfie Button */}
//       <button
//         onClick={() => setShowVerification(true)}
//         className="mt-14 bg-blue-800 text-xl font-semibold rounded-xl text-white h-14 w-full flex items-center justify-center"
//       >
//         Upload Selfie
//       </button>
//     </div>
//   );
// }
// export function TakeSelfy() {
//   const navigate = useNavigate();
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       const file = e.target.files[0];
//       navigate("/previewselfie", {
//         state: { selfieUrl: URL.createObjectURL(file) },
//       });
//     }
//   };

//   const handleButtonClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto text-center">
//       {/* Back Link */}
//       <Link to="#" className="flex items-center font-semibold mb-4">
//         <MdExpandLess
//           onClick={() => navigate("/selfyverification")}
//           className="transform rotate-[-90deg] text-[40px] cursor-pointer"
//         />
//       </Link>

//       <h1 className="text-2xl font-bold mb-2">Take a Selfie to Verify</h1>
//       <p className="text-gray-600 mb-8 text-sm">
//         Keep your face centered in the circle and hold your ID next to your face
//         without glare.
//       </p>

//       {/* Circle Camera Trigger */}
//       <label
//         htmlFor="selfie-file"
//         className="w-60 h-60 mx-auto mb-8 rounded-full bg-black flex items-center justify-center cursor-pointer"
//       >
//         <span className="text-white">Tap to Open Camera</span>
//       </label>

//       {/* Hidden file input */}
//       <input
//         ref={fileInputRef}
//         id="selfie-file"
//         type="file"
//         accept="image/*"
//         capture="user"
//         className="hidden"
//         onChange={handleFileChange}
//       />
//       <button
//         onClick={handleButtonClick}
//         className="w-full h-12 bg-blue-600 text-white font-semibold rounded-xl"
//       >
//         Take Selfie
//       </button>
//     </div>
//   );
// }
// export function PreviewSelfie() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const selfieUrl = location.state?.selfieUrl;

//   const handleRetake = () => {
//     navigate("/takeselfie");
//   };

//   const handleUsePhoto = () => {
//     navigate("/applyverification");
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto text-center flex flex-col items-center">
//       {/* Back Link */}
//       <Link to="#" className="self-start mb-4">
//         <MdExpandLess
//           onClick={handleRetake}
//           className="transform rotate-[-90deg] text-[40px] cursor-pointer"
//         />
//       </Link>

//       <h1 className="text-xl font-bold mb-2">Preview Your Selfie</h1>
//       <p className="text-gray-600 mb-6 text-sm">
//         Make sure your face is clearly visible and your ID is readable.
//       </p>

//       <div className="w-60 h-60 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
//         <img
//           src={selfieUrl || "https://via.placeholder.com/240"}
//           alt="Selfie Preview"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="flex gap-4">
//         <button
//           onClick={handleRetake}
//           className="border border-gray-400 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
//         >
//           Retake Selfie
//         </button>
//         <button
//           onClick={handleUsePhoto}
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//         >
//           Use This Photo
//         </button>
//       </div>
//     </div>
//   );
// }

// // Add Social media links
// export function SocialMedia() {
//   const navigate = useNavigate();

//   return (
//     <div className="p-6 max-w-md mx-auto">
//       {/* Back Arrow */}
//       <Link
//         to="/applyverification"
//         className="flex items-center font-semibold mb-6"
//       >
//         <MdExpandLess
//           onClick={() => navigate("/applyverification")}
//           className="transform rotate-[-90deg] text-[40px] cursor-pointer"
//         />
//       </Link>

//       {/* LinkedIn Link */}
//       <div className="flex items-center mb-4">
//         <div className="flex items-center justify-center">
//           <img
//             src={linkedIn}
//             alt="LinkedIn"
//             className=" object-cover rounded-xl"
//           />
//         </div>
//         <input
//           type="text"
//           defaultValue="https://www.linkedin.com/in/michael-..."
//           className="flex-1 ml-3 h-12 px-4 rounded-xl bg-[#0A66C2] text-white outline-none"
//         />
//       </div>

//       {/* Twitter Link */}
//       <div className="flex items-center mb-4">
//         <div className="flex items-center justify-center">
//           <img
//             src={twitter1}
//             alt="Twitter"
//             className="w-10 object-cover rounded-xl"
//           />
//         </div>
//         <input
//           type="text"
//           defaultValue="https://twitter.com/michaelroberts_vc"
//           className="flex-1 ml-3 h-12 px-4 rounded-xl bg-[#00AAEC] text-white outline-none"
//         />
//       </div>

//       {/* Custom Link */}
//       <div className="flex items-center mb-8">
//         <div className="flex items-center justify-center">
//           <img src={link} alt="Link" className="  h-8 object-cover" />
//         </div>
//         <input
//           type="text"
//           placeholder="Add or paste link here"
//           className="flex-1 ml-3 h-12 px-4 rounded-xl bg-gray-100 outline-none"
//         />
//       </div>

//       {/* Added Profiles */}
//       <div className="grid grid-cols-2 gap-4">
//         <div className="border border-gray-200 rounded-xl p-4 flex flex-col items-center">
//           <img
//             src={linkedIn}
//             alt="LinkedIn"
//             className="h-12 w-12 object-cover rounded-full mb-2"
//           />
//           <p className="font-semibold mt-1">Michael Roberts</p>
//           <p className="text-gray-500 text-sm">Investor</p>
//           <p className="text-sm mt-2">28k Followers</p>
//         </div>

//         <div className="border border-gray-200 rounded-xl p-4 flex flex-col items-center">
//           <img
//             src={twitter}
//             alt="Twitter"
//             className="h-12 w-12 object-cover rounded-full mb-2"
//           />
//           <p className="font-semibold mt-1">Michael Roberts</p>
//           <p className="text-gray-500 text-sm">Investor</p>
//           <p className="text-sm mt-2">20k Followers</p>
//         </div>
//       </div>
//     </div>
//   );
// }



// // Share your professional
// export function ShareProfessional() {
//   const navigate = useNavigate();

//     const handleBack = () => {
//     navigate("/applyverification");
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto">
//       {/* Back Arrow */}
//       <Link
//         to="/applyverification"
//         className="flex items-center font-semibold mb-6"
//       >
//         <MdExpandLess
//           onClick={() => navigate("/applyverification")}
//           className="transform rotate-[-90deg] text-[40px] cursor-pointer"
//         />
//       </Link>

//       <h1 className="text-2xl font-bold mb-2">
//         Share Your Professional Background
//       </h1>
//       <p className="text-gray-600 mb-8 text-sm">
//         Help startups and founders understand your expertise. Write a short
//         summary that reflects your journey, experience, and areas of focus as
//         an investor or mentor.
//       </p>

//       <div className="mb-12">
//         <h3 className="font-semibold mb-2">
//           What defines you as an investor or industry expert?
//         </h3>
//         <textarea
//           rows={6}
//           placeholder="e.g., Angel investor with 7+ years in B2B SaaS, HealthTech, and Fintech. Backed 20+ early-stage startups with 5 successful exits. Currently a partner at Nexus Edge Capital. Open to mentoring passionate founders building scalable tech solutions."
//           className="w-full p-4 border border-gray-400 rounded-xl text-sm outline-none"
//         ></textarea>
//       </div>

//       <div className="mb-8">
//         <h3 className="font-semibold text-lg mb-1">
//           Display this on your public profile
//         </h3>
//         <p className="text-sm text-gray-600">
//           Showcase this summary to founders and creators exploring investor
//           profiles.
//         </p>
//       </div>

//       <button 
//        onClick={handleBack}
//       className="w-full h-14 bg-blue-600 text-white rounded-xl font-semibold">
//         Save & Continue
//       </button>
//     </div>
//   );
// }


// export default IdentityVerification;
