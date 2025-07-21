import React from "react";

const companyInfo = [
  { label: "Company Name", value: "Nexora Tech Solutions" },
  { label: "Business Type", value: "Trader" },
  { label: "Industry Sector", value: "Computer & IT Solutions" },
  { label: "Business Model", value: "B2B" },
  { label: "Company CEO Name", value: "Raghav Malhotra" },
  { label: "Company Establishment Year", value: "2019" },
  { label: "Legal Status of Firm", value: "Private Limited" },
  { label: "Number of Employees", value: "15-25" },
];

const fundingDetails = [
  { icon: "💰", label: "Amount Funded:", value: "₹25 lakh secured in pre-seed" },
  { icon: "📅", label: "Funding Date:", value: "March 30, 2025" },
  { icon: "📊", label: "Funding Source:", value: "Angel Investors & early-stage VC interest" },
  { icon: "📌", label: "Pitch Status:", value: "Open for Investment" },
];

const pitchdetails = [
  {heading: "Pitch Details & Investment Opportunity"},
  {pitchHeading:"NeoBlend Pro – Smart Kitchen Blending Revolution"},
  {pitcherName:"Michael Carter"},
  {pitchDescription:"🔴 NeoBlend Pro is an innovative smart kitchen appliance designed to bring intelligence and convenience to everyday cooking. With AI-powered blending, app integration, and precise recipe automation, it’s built to disrupt traditional kitchen routines."},
  {fundingAsk:"₹60 lakh for 1% equity",valuation:"₹30 crore"},
  {businessPlan:"https:bizlaxy.com"}

]
type Props = {
  onNavigate: (view: 'main' | 'details' | 'faq' | 'analysis') => void;
};

export default function PitchDetailsPage({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-white px-4 py-6 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Left Content */}
        <div className="lg:w-2/3 space-y-6">
          <button onClick={() => onNavigate('main')} className="cursor-pointer text-sm text-blue-600 mb-2">&lt; Back to Pitch</button>

          <h1 className="text-2xl font-bold">Pitch Details & Investment Opportunity</h1>

          <div>
            <h2 className="text-lg font-semibold">Pitch Overview</h2>
            <p className="mt-1 font-medium text-indigo-700">NeoBlend Pro – Smart Kitchen Blending Revolution</p>
            <p className="text-sm text-gray-600 mb-2">Michael Carter</p>
            <p className="text-sm text-gray-700">
              🔴 NeoBlend Pro is an innovative smart kitchen appliance designed to bring intelligence and convenience to everyday cooking. With AI-powered blending, app integration, and precise recipe automation, it’s built to disrupt traditional kitchen routines.
            </p>
            <p className="mt-2 text-sm font-medium text-black">
              💸 Funding Ask: ₹60 lakh for 1% equity (Valuation: ₹30 crore)
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              📁 <span className="font-medium">Business Plan:</span>
              <a href="#" className="text-blue-600 underline">View Model PDF</a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              📈 <span className="font-medium">Sales & Growth Data:</span>
              <p onClick={() => onNavigate('analysis')} className="text-blue-600 underline">See Market Analysis & Sales Projection</p>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Funding History</h2>
            <ul className="space-y-2">
              {fundingDetails.map((item, index) => (
                <li key={index} className="text-sm flex gap-2">
                  <span>{item.icon}</span>
                  <span>
                    <span className="font-medium">{item.label}</span> {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 mt-6">
            <button onClick={() => onNavigate('faq')} className="bg-white border border-black text-black px-4 py-2 rounded shadow-sm">
              Ask a Question
            </button>
            <button className="bg-black text-white px-4 py-2 rounded shadow-sm">
              Make an Offer
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-1/3 space-y-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded shadow">
            Make an offer today! 🚀
          </button>

          <div className="border rounded-lg p-5 w-full bg-white shadow-sm">
            <h3 className="font-semibold text-lg mb-4 border-b pb-2">Company Info</h3>
            <div className="space-y-2 text-sm text-gray-700">
              {companyInfo.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span className="font-medium text-gray-600">{item.label}</span>
                  <span className="text-black text-right max-w-[60%]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
