import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { Button } from "@/components/ui/button";

const revenueData = [
  { name: "Jan", revenue: 1 },
  { name: "Feb", revenue: 2 },
  { name: "Mar", revenue: 2.5 },
  { name: "Apr", revenue: 5 },
  { name: "May", revenue: 6 },
  { name: "June", revenue: 7.5 },
  { name: "July", revenue: 8.5 },
];

const segmentData = [
  { name: "Commercial", sales: 1200 },
  { name: "Residential", sales: 2938 },
  { name: "Industrial", sales: 1500 },
  { name: "SUN", sales: 900 },
];

type Props = {
  onNavigate: (view: 'main' | 'details' | 'faq' | 'analysis') => void;
};


export default function PitchAnalysis({ onNavigate }: Props) {
  const [view, setView] = useState("Monthly");

  return (
    <div className="p-6 bg-white min-h-screen">
      <p onClick={() => onNavigate('details')} className="text-sm text-gray-500 mb-2">&lt; Back to Pitch</p>
      <h2 className="text-2xl font-bold mb-4">Market Analysis & Sales Projection</h2>

      {/* Filter Buttons */}
      <div className="flex items-center gap-4 mb-6">
        {['Monthly', 'Quarterly', 'Yearly'].map((v) => (
          <Button
            key={v}
            variant={view === v ? "default" : "outline"}
            onClick={() => setView(v)}
          >
            {v}
          </Button>
        ))}
        <Button variant="outline">⬇️</Button>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="col-span-2 bg-white rounded-lg shadow p-4">
          <h4 className="font-semibold mb-2">Revenue (₹ Crore)</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#7c3aed" strokeWidth={3} dot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold">Sales by Segment</h4>
            <select className="text-sm border px-2 py-1 rounded">
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={segmentData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#6366f1" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
