// components/pitch/PitchFAQ.tsx
import React from "react";

type Props = {
  onNavigate: (view: 'main' | 'details' | 'faq' | 'analysis') => void;
};

export default function PitchFAQ({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-white p-6">
      <button onClick={() => onNavigate('details')} className="text-blue-600 mb-4">← Back to Details</button>
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div>
          <h2 className="font-semibold text-lg">What is the equity offer?</h2>
          <p className="text-gray-600">We’re offering 1% equity in exchange for ₹60 lakh.</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg">How will the funds be used?</h2>
          <p className="text-gray-600">Funds will be allocated for R&D, scaling, and marketing initiatives.</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg">When can I expect ROI?</h2>
          <p className="text-gray-600">We project ROI within 18-24 months based on our revenue forecasts.</p>
        </div>
      </div>
    </div>
  );
}

