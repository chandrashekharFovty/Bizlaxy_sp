import React from 'react';

function CompanyOverview({ data }) {
  // `data` would be passed in from a parent or fetched
  return (
    <div className="p-6 bg-white rounded-lg shadow max-w-3xl mx-auto space-y-6">
      <h2 className="text-xl font-semibold">Company Overview</h2>
      <div className="border rounded p-4 space-y-2">
        <p><span className="font-medium">Business Type:</span> {data.businessType}</p>
        <p><span className="font-medium">Industry Sector:</span> {data.industrySector}</p>
        <p><span className="font-medium">Stage:</span> {data.stage}</p>
        <p><span className="font-medium">Clientize:</span> {data.clientize}</p>
      </div>
      <h3 className="text-lg font-semibold">Company Metrics</h3>
      <div className="border rounded p-4 space-y-2">
        <p><span className="font-medium">Employees:</span> {data.employees}</p>
        <p><span className="font-medium">Annual Revenue:</span> {data.revenue}</p>
        <p><span className="font-medium">Invest Raised:</span> {data.investRaised}</p>
      </div>
      <h3 className="text-lg font-semibold">About Company</h3>
      <div className="border rounded p-4">
        <p>{data.about}</p>
      </div>
    </div>
  );
}

export default CompanyOverview;
