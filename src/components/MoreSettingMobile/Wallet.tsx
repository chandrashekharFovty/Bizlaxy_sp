import Sidebar from "../layout/Sidebar";
import React, { useState } from "react";
import { MdArrowBack, MdExpandLess } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const transactions = [
  {
    date: "02 Jun 2025",
    description: "Boosted Product 'SaaS Launchpad'",
    amount: "₹350.00",
    status: "Success",
  },
  {
    date: "31 May 2025",
    description: "Ad Campaign 'Get Investors Now'",
    amount: "₹1,200.00",
    status: "Success",
  },
  {
    date: "28 May 2025",
    description: "Wallet Top-Up UPI",
    amount: "₹250.00",
    status: "Success",
  },
  {
    date: "25 May 2025",
    description: "Referral Bonus (#5 Signups)",
    amount: "₹750.00",
    status: "Success",
  },
  {
    date: "20 May 2025",
    description: "Withdrawal to SBI Account",
    amount: "₹800.00",
    status: "Credited",
  },
  {
    date: "02 Jun 2025",
    description: "Boosted Product 'SaaS Launchpad'",
    amount: "₹250.00",
    status: "Completed",
  },
];

export default function Wallet() {
  const [showAddMoney, setShowAddMoney] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="dark:dark-color h-full p-4 bg-white rounded-lg shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <MdArrowBack
          className="text-2xl cursor-pointer"
          onClick={() => navigate("/settings")}
        />
        <h1 className="text-lg font-semibold">Wallet</h1>
        <div className="w-6" /> {/* Spacer */}
      </div>

      {/* Balance */}
      <div className="mb-4">
        <p className="text-sm text-gray-500">Current Balance</p>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">₹2,350.00</h2>
          <button
            onClick={() => setShowAddMoney(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Funds
          </button>
        </div>
      </div>

      {/* Transactions */}
      <h3 className="text-sm font-medium mb-2">Recent Transactions</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-2">Date</th>
              <th className="p-2">Description</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2">{txn.date}</td>
                <td className="p-2">{txn.description}</td>
                <td className="p-2">{txn.amount}</td>
                <td className="p-2">{txn.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Conditional AddMoney */}
      {showAddMoney && (
        <AddMoney onClose={() => setShowAddMoney(false)} />
      )}
    </div>
  );
}


export function AddMoney({ onClose }) {
  const navigate = useNavigate();

  const handleAddMoney = () => {
    onClose();
    navigate("/receipts");
  };

  return (
    <div className="fixed h-screen inset-0 bg-white dark:dark-color z-50 flex flex-col">
      <Sidebar/>
      {/* Header */}
    <div className="ml-[245px]">
        <div className="flex items-center px-4 py-4  border-b border-gray-200">
        <button onClick={()=>navigate("/settings")} className="flex items-center">
          <MdExpandLess className="transform rotate-[-90deg] text-2xl" />
          <span className="font-bold text-xl ml-2">Add Funds</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1  gap-4 h-full px-4">
        <h1 className="text-center pt-12 text-[50px] font-bold">₹2,500</h1>
        <p className="text-center text-sm text-gray-600">Add a note</p>
        <button
          onClick={handleAddMoney}
          className="bg-blue-600 text-white h-12 px-6 mt-6 rounded"
        >
          Add ₹2,500
        </button>
      </div>
    </div>
    </div>
  );
}


export function Receipt() {
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
      <Sidebar/>
    <div className="ml-[245px]">
        <div className="flex items-center px-4 py-4 border-b border-gray-200">
        <button
          onClick={() => navigate("/addmoney")}
          className="flex items-center justify-center"
        >
          <MdExpandLess className="transform rotate-[-90deg] text-2xl" />
          <span className="font-bold text-xl ml-2">Receipt</span>
        </button>
      </div>

      <div className="flex h-full w-full bg-gray-100">
        <div className="bg-white rounded-xl h-full shadow-lg w-full text-center">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-40 w-full"></div>
          <div className="-mt-32 bg-white h-[400px] mx-auto w-11/12 rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-center mb-4">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mt-10">
                <svg
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-lg font-semibold mb-1 pt-5">
              Money Added Successfully
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Your wallet has been updated. <br /> ₹2,500 has been added to your balance.
            </p>
            <hr className="border border-gray-300" />
            <div className="text-left text-sm text-gray-700 pt-6 mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-500">Date & Time:</span>
                <span className="text-black font-semibold">
                  01 June 2025, 10:30PM
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">No. Ref:</span>
                <span className="text-black font-semibold">123456789000</span>
              </div>
            </div>

            <button
              onClick={() => navigate("/wallet")}
              className="w-full bg-blue-600 text-white py-2 rounded-xl mt-6 font-semibold"
            >
              Back to Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}


