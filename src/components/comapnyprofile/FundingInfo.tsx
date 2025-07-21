import React, { useState } from 'react';

function FundingInfo() {
  const [form, setForm] = useState({
    amountMin: '',
    amountMax: '',
    seedSeries: '',
    locationPref: '',
    graphGrowth: '',
    additionalInfo: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Funding Info Submitted:', form);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Funding Info</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-2">
          <div className="flex-1">
            <label>Min Amount</label>
            <input
              name="amountMin"
              type="number"
              value={form.amountMin}
              onChange={handleChange}
              className="mt-1 w-full border p-2 rounded"
            />
          </div>
          <div className="flex-1">
            <label>Max Amount</label>
            <input
              name="amountMax"
              type="number"
              value={form.amountMax}
              onChange={handleChange}
              className="mt-1 w-full border p-2 rounded"
            />
          </div>
        </div>
        <div>
          <label>Seed / Series</label>
          <input
            name="seedSeries"
            value={form.seedSeries}
            onChange={handleChange}
            className="mt-1 w-full border p-2 rounded"
          />
        </div>
        <div>
          <label>Location Preference</label>
          <select
            name="locationPref"
            value={form.locationPref}
            onChange={handleChange}
            className="mt-1 w-full border p-2 rounded"
          >
            <option value="">Select</option>
            <option value="Local">Local</option>
            <option value="Global">Global</option>
          </select>
        </div>
        <div>
          <label>Graph Creation & Revenue Growth</label>
          <input
            name="graphGrowth"
            type="file"
            onChange={handleChange}
            className="mt-1 w-full"
          />
        </div>
        <div>
          <label>Additional Information</label>
          <textarea
            name="additionalInfo"
            rows={4}
            value={form.additionalInfo}
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

export default FundingInfo;
