import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import { AiOutlineFilePdf } from "react-icons/ai";

function InfoProfile() {
  const [activeTab, setActiveTab] = useState<"company" | "funding">("company");
  const [hasImportCode, setHasImportCode] = useState<null | boolean>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
const [offerType, setOfferType] = useState<"description" | "pdf">("description");
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setPdfFile(e.target.files[0]);
  };

  const toggleEdit = () => setIsEditing((prev) => !prev);

  return (
    <div className="flex min-h-screen dark:dark-color">
      <Sidebar />

      <div className="dark:dark-color flex-grow flex flex-col relative ml-0 md:ml-16 lg:ml-60 ">
        {/* Top Gradient Section */}
        <div className="h-[300px] w-full bg-gradient-to-b from-blue-400 to-purple-600  pt-4 px-4 text-white">
          <Link to="/profile" className="flex items-center font-semibold mb-4">
            <span className="text-xl">&#8592;</span>
            <span className="ml-2">Back to Profile</span>
          </Link>

          <div className="mt-4 w-full max-w-4xl rounded-xl bg-white/10 p-4 px-6 backdrop-blur-md">
            <h1 className="text-xl font-semibold mb-4">Contact Info</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium">Location</p>
                <p>Mumbai, India</p>
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p>shivip@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">Mobile No.</p>
                <p>+91 7543676799</p>
              </div>
              <div>
                <p className="font-medium">Import/Export No</p>
                <p>#C0991745832</p>
              </div>
              <div>
                <p className="font-medium">GST Number</p>
                <p>123456789</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Form Section */}
        <div className="dark:dark-color flex-grow overflow-y-auto px-6 py-8 bg-white r border-r border-[#DBDBDB]">
          <div className="flex justify-center mb-8">
            <div className="dark:bg-[#181818] dark:border dark:border-white bg-[#F3F3F3] rounded-full w-full max-w-xl p-1 flex">
              <button
                onClick={() => setActiveTab("company")}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition w-1/2 ${
                  activeTab === "company"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow"
                    : "text-gray-600 dark:text-white"
                }`}
              >
                Company Info
              </button>
              <button
                onClick={() => setActiveTab("funding")}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition w-1/2 ${
                  activeTab === "funding"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow"
                    : "text-gray-600 dark:text-white"
                }`}
              >
                Funding Info
              </button>
            </div>
          </div>

          <div className="w-full max-w-3xl mx-auto grid gap-6 pb-20 ">
           {activeTab === "company" ? (
  <>
    <FormField  label="Company Name" disabled={!isEditing} />
    <FormField label="Business Type" disabled={!isEditing} />
    <FormField label="Industry & Sector" disabled={!isEditing} />
    <FormField label="Business Model" disabled={!isEditing} />
    <FormField label="Company CEO Name" disabled={!isEditing} />
    <FormField label="Company Establishment Year" disabled={!isEditing} />
    <FormField label="Legal Status of Firm" disabled={!isEditing}>
      <select
        disabled={!isEditing}
        className="w-full border h-10 rounded-xl pl-2"
      >
        <option>Select status</option>
        <option>Sole Proprietorship</option>
        <option>Partnership</option>
        <option>Private Limited</option>
        <option>Public Limited</option>
        <option>LLP</option>
      </select>
    </FormField>
    <FormField label="Number of Employees" disabled={!isEditing} />
    <FormField label="Annual Turnover" disabled={!isEditing} />
    <FormField label="Stage of Company" disabled={!isEditing} />
    <FormField label="About Your Company" disabled={!isEditing} />
    <FormField label="What Do You Offer?">
  <p className="dark:text-white text-sm text-gray-500 mb-4">Please choose one of the following options to proceed</p>

  <div className="space-y-3">
    <div
      onClick={() => setOfferType("description")}
      className={`cursor-pointer border rounded-xl px-4 py-4 flex items-center gap-3 transition shadow-sm ${
        offerType === "description"
          ? "border-blue-600 bg-blue-50 dark:bg-[#181818] dark:border dark:border-white"
          : "border-gray-300 bg-white"
      }`}
    >
      <span className="text-lg">✏️</span>
      <div>
        <p className="font-semibold text-sm">Write a brief description</p>
        <p className="dark:text-gray-300 text-xs text-gray-500">Add details about what your company offers</p>
      </div>
    </div>

    <div className="text-center font-semibold text-gray-400">OR</div>

    <div
      onClick={() => setOfferType("pdf")}
      className={`dark:bg-[#181818] dark:border dark:border-white cursor-pointer border rounded-xl px-4 py-4 flex items-center gap-3 transition shadow-sm ${
        offerType === "pdf"
          ? "border-blue-600 bg-blue-50 "
          : "border-gray-300 bg-white"
      }`}
    >
      <AiOutlineFilePdf className="text-xl text-gray-600" />
      <div>
        <p className="font-semibold text-sm">Upload a PDF document</p>
        <p className="text-xs text-gray-500 dark:text-gray-300">Attach a detailed document about your offerings</p>
      </div>
    </div>
  </div>

  {/* Conditionally show inputs */}
  {offerType === "description" && (
    <textarea
      placeholder="Describe what you offer..."
      className="dark:bg-[#181818] dark:border dark:border-white w-full border border-gray-300 rounded-xl p-3 h-32 mt-4"
      disabled={!isEditing}
    ></textarea>
  )}

  {offerType === "pdf" && (
    <div className="mt-4">
      <label
        htmlFor="offer-pdf"
        className={`flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 cursor-pointer ${
          !isEditing && "pointer-events-none opacity-50"
        }`}
      >
        <AiOutlineFilePdf className="text-xl" />
        <span>Choose PDF file</span>
      </label>
      <input
        type="file"
        id="offer-pdf"
        accept=".pdf"
        className="hidden"
        disabled={!isEditing}
        onChange={(e) => {
          if (e.target.files?.[0]) {
            console.log("PDF uploaded:", e.target.files[0].name);
          }
        }}
      />
    </div>
  )}
</FormField>


    <FormField label="Add Website or Social Links" disabled={!isEditing} />
    <FormField label="Business Address" disabled={!isEditing} />
    <FormField label="Email" disabled={!isEditing} />
    <FormField label="Phone Number" disabled={!isEditing} />
  </>
) : (

              <>
              <FormField label="Funding Required" placeholder="₹ 75,00,000" disabled={!isEditing} />
<FormField label="Valuation" placeholder="₹ 5,50,00,000" disabled={!isEditing} />

<FormField label="Funding Round" disabled={!isEditing}>
  <select
    disabled={!isEditing}
    className="dark:bg-[#181818] dark:border dark:border-white w-full border h-10 rounded-xl pl-2"
  >
    <option>Series A</option>
    <option>Series B</option>
    <option>Series C</option>
  </select>
</FormField>

<FormField label="Purpose of Funds" disabled={!isEditing}>
  <textarea
    disabled={!isEditing}
    className="w-full border border-gray-300 rounded-xl p-3 h-28"
    placeholder="To expand the marketing team..."
  />
</FormField>

<h3 className="text-blue-600 font-semibold text-sm mt-6">Funding History</h3>
<FormField label="Have you raised funds before?">
  <div className="flex gap-4 mb-2">
    <button
      disabled={!isEditing}
      onClick={() => setHasImportCode(true)}
      className={`px-4 py-2 w-[100px] rounded-xl border text-sm ${
        hasImportCode === true ? "bg-blue-600 text-white" : "bg-white border-blue-300"
      }`}
    >
      Yes
    </button>
    <button
      disabled={!isEditing}
      onClick={() => setHasImportCode(false)}
      className={`px-4 py-2 w-[100px] rounded-xl border text-sm ${
        hasImportCode === false ? "bg-blue-600 text-white" : "bg-white border-blue-300"
      }`}
    >
      No
    </button>
  </div>
</FormField>

<FormField label="Number of Rounds Raised" placeholder="2" disabled={!isEditing} />
<FormField label="Total Fund Raised Till Now" placeholder="₹1,20,00,000" disabled={!isEditing} />
<FormField label="Investors (Optional)" placeholder="Nexus Ventures, Alpha Growth Partners" disabled={!isEditing} />

<h3 className="text-blue-600 font-semibold text-sm mt-6">Growth & Performance Data</h3>
<div>
  <label
    htmlFor="growth-upload"
    className={`flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 cursor-pointer ${
      !isEditing && "pointer-events-none opacity-50"
    }`}
  >
    <AiOutlineFilePdf className="text-xl" />
    <span>Upload Growth Graphs</span>
  </label>
  <input
    type="file"
    id="growth-upload"
    className="hidden"
    disabled={!isEditing}
    onChange={handleFileChange}
  />
  {pdfFile && (
    <p className="text-sm text-blue-600 mt-1">Selected: {pdfFile.name}</p>
  )}
</div>

<h3 className="text-blue-600 font-semibold text-sm mt-6">Business Plan</h3>
<FormField label="Would you like to share your business plan?">
  <div className="flex gap-4 mb-2">
    <button
      disabled={!isEditing}
      onClick={() => setHasImportCode(true)}
      className={`px-4 py-2 w-[100px] rounded-xl border text-sm ${
        hasImportCode === true ? "bg-blue-600 text-white" : "bg-white border-blue-300"
      }`}
    >
      Yes
    </button>
    <button
      disabled={!isEditing}
      onClick={() => setHasImportCode(false)}
      className={`px-4 py-2 w-[100px] rounded-xl border text-sm ${
        hasImportCode === false ? "bg-blue-600 text-white" : "bg-white border-blue-300"
      }`}
    >
      No
    </button>
  </div>
</FormField>
<FormField label="Control Who Can View Your Business Plan">
  <select
    disabled={!isEditing}
    className="w-full border h-10 rounded-xl pl-2"
  >
    <option>Public - Anyone can directly view your business plan.</option>
    <option>Private - Only invited users can view your business plan.</option>
  </select>
</FormField>

              </>
            )}
          </div>
        </div>

        {/* Edit / Save Button Fixed */}
        {/* Fixed Edit & Save Buttons */}
        <div className="dark:bg-[#181818] dark:border dark:border-white fixed bg-white bottom-0 left-1/2 transform -translate-x-1/2 w-full p-6 max-w-xl z-50 flex justify-between gap-4 lg:hidden">
          <button
            className="w-1/2 bg-[#EFEFEF] text-black py-3 rounded-xl font-semibold shadow-lg"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button
            className={`w-1/2 ${
              isEditing ? "bg-blue-600" : "bg-blue-800 cursor-not-allowed"
            } text-white py-3 rounded-xl font-semibold shadow-lg`}
            disabled={!isEditing}
            onClick={() => {
              if (isEditing) {
                console.log("Form saved");
                setIsEditing(false); // Optional: turn off editing
              }
            }}
          >
            Save
          </button>
        </div>

      </div>

      {/* Right Sidebar */}
      <div className="dark:dark-color hidden lg:flex  right-0 top-0 w-[350px] h-full flex-col items-center text-center justify-start border-l-2 border-[#f3f2fa] bg-white pt-[68px] px-4">
        <div className="w-[168px] h-[168px] rounded-full bg-gray-300 overflow-hidden">
          <img
            src="/default-profile.png"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="text-xl font-bold mt-4">Michael Roberts</div>
        <div className="text-gray-500 text-sm mt-1">Passionate about funding innovative startups.</div>
        <a href="https://www.nebulotech.com" className="text-blue-500 mt-1 block">
          www.nebulotech.com
        </a>
         <div className="mt-6 flex gap-4">
            {!isEditing ? (
              <button
                className="px-4 py-2 text-sm rounded-[8px] border border-gray-300 hover:bg-gray-100 font-medium"
                onClick={() => setIsEditing(true)}
              >
                Edit Details
              </button>
            ) : (
              <button
                className="px-4 py-2 text-sm rounded-[8px] border border-blue-500 bg-blue-100 font-medium text-blue-700"
                onClick={() => setIsEditing(false)}
              >
                Save Details
              </button>
            )}
          </div>
      </div>
    </div>
  );
}

const FormField = ({
  label,
  placeholder,
  children,
  disabled = false,
}: {
  label: string;
  placeholder?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}) => (
  <div className="flex flex-col w-full">
    {label && <label className="text-sm font-medium mb-1">{label}</label>}
    {children ? (
      children
    ) : (
      <input
        type="text"
        placeholder={placeholder || label}
        disabled={disabled}
        className={`border border-gray-300 h-10 rounded-xl pl-3 ${
          disabled ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""
        }`}
      />
    )}
  </div>
);

export default InfoProfile;
