import React, { useState } from 'react';

function CompanyInfo() {
  const [form, setForm] = useState({
    companyName: '',
    businessType: '',
    industrySector: '',
    website: '',
    companyCeoName: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Company Info Submitted:', form);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Company Info</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Company Name</label>
          <input
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            className="mt-1 w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label>Business Type</label>
          <input
            name="businessType"
            value={form.businessType}
            onChange={handleChange}
            className="mt-1 w-full border p-2 rounded"
          />
        </div>
        <div>
          <label>Industry Sector</label>
          <input
            name="industrySector"
            value={form.industrySector}
            onChange={handleChange}
            className="mt-1 w-full border p-2 rounded"
          />
        </div>
        <div>
          <label>Website</label>
          <input
            name="website"
            type="url"
            value={form.website}
            onChange={handleChange}
            className="mt-1 w-full border p-2 rounded"
          />
        </div>
        <div>
          <label>Company CEO Name</label>
          <input
            name="companyCeoName"
            value={form.companyCeoName}
            onChange={handleChange}
            className="mt-1 w-full border p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default CompanyInfo;
