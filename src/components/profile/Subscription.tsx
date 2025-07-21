import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowBack, MdExpandLess } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import phonepay from "../../../public/phonepay.jpg"
import Wallet from "../MoreSettingMobile/Wallet";
function Subscription() {
  const [activeTab, setActiveTab] = useState("Basic");
  const navigate=useNavigate() 
  // const handleContinue=()=>navigate("/payment")
const handleContinue = () => {
  let price;
  if (activeTab === "Basic") price = 399;
  else if (activeTab === "Investor") price = 999;
  else if (activeTab === "Business") price = 1499;

  navigate("/payment", { state: { plan: activeTab, price } });
};


  const renderPlanContent = () => {
    switch (activeTab) {
      case "Basic":
        return (
          <>
            <h2 className=" text-lg font-semibold mb-4">
              Basic Subscription Plan
            </h2>
            <div className="dark:dark-color p-[2px] rounded-xl bg-transparent hover:bg-gradient-to-l hover:from-blue-600 hover:to-purple-600 mb-4">
              <div className="dark:dark-color border bg-white rounded-xl p-4">
                <div className="flex h-20 justify-between items-center">
                  <span className="text-2xl font-semibold">Monthly</span>
                  <div className="dark:dark-color flex">
                    <span className="dark:dark-color text-2xl font-bold">₹399/</span>
                    <p className="dark:dark-color text-sm pt-3 text-gray-500">Monthly</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dark:dark-color p-[2px] rounded-xl bg-transparent hover:bg-gradient-to-l hover:from-blue-600 hover:to-purple-600 mb-4">
            <div className="dark:dark-color border bg-white rounded-xl p-4 ">
              <div className="dark:dark-color flex justify-between items-center mb-2">
                <span className="text-2xl font-semibold">Yearly</span>
                <span className="bg-gradient-to-l from-[#1C4BC4] to-[#9645FF] text-white w-24 text-center text-xs  py-1 rounded-full">
                  Best Value
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-blue-600 ">Save ₹1,789 </p>
                  <p className="text-sm text-blue-600 pt-1">37% Off</p>
                </div>
                <p className="text-xs text-gray-700">
                  <span className="dark:dark-color font-semibold text-2xl text-black">
                    ₹2,999/
                  </span>
                  Yearly
                  <br />
                </p>
              </div>
            </div>
            </div>

            <h3 className="font-semibold mb-2">Premium Features:</h3>
            <ul className="dark:dark-color text-sm text-gray-700 mb-6 space-y-4">
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-blue-600 text-2xl mt-1" />
                <span>
                  <span className="font-semibold">Advanced Insights</span> – Get
                  detailed analytics about your investments.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-blue-600 text-xl mt-1" />
                <span>
                  <span className="font-semibold">Priority Support</span> – 24/7
                  dedicated investor support.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-blue-600 text-2xl mt-1" />
                <span>
                  <span className="font-semibold">Early Access</span> – Be the
                  first to access new investment opportunities.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-blue-600 text-2xl mt-1" />
                <span>
                  <span className="font-semibold">Team Collaboration</span> –
                  Easily collaborate with your team.
                </span>
              </li>
            </ul>

            <button
              onClick={handleContinue}
              className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold"
            >
              Continue
            </button>
          </>
        );

      case "Investor":
        return (
          <>
            <h2 className="text-2xl font-semibold mb-4">
              Investor Subscription Plan
            </h2>
            <div className="dark:dark-color p-[2px] rounded-xl bg-transparent hover:bg-gradient-to-l hover:from-blue-600 hover:to-purple-600 mb-4">
            <div className="dark:dark-color border bg-white rounded-xl p-4 ">
              <div className="flex h-20 justify-between items-center">
                <span className="text-2xl font-semibold">Monthly</span>
                <div className="flex">
                  <span className="text-2xl font-bold">₹999/</span>
                  <p className="text-sm pt-3 text-gray-500">Monthly</p>
                </div>
              </div>
            </div>
            </div>

            <div className="dark:dark-color p-[2px] rounded-xl bg-transparent hover:bg-gradient-to-l hover:from-blue-600 hover:to-purple-600 mb-4">
            <div className="dark:dark-color border bg-white rounded-xl p-4 ">
              <div className="flex justify-between items-center mb-2">
                <span className="text-2xl  font-semibold">Yearly</span>
                <span className="bg-gradient-to-l from-[#1C4BC4] to-[#9645FF] text-white w-24 text-xs text-center  py-1 rounded-full">
                  Best Value
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-blue-600 ">Save ₹1,789 </p>
                  <p className="text-sm text-blue-600 pt-1">37% Off</p>
                </div>
                <p className="text-xs text-gray-700">
                  <span className="dark:dark-color font-semibold text-2xl text-black">
                    ₹2,999/
                  </span>
                  Yearly
                  <br />
                </p>
              </div>
            </div>
            </div>

            <h3 className="font-semibold mb-2">Premium Features:</h3>
            <ul className="dark:dark-color text-sm text-gray-700 mb-6 space-y-4">
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-blue-600 text-2xl mt-1" />
                <span>
                  <span className="font-semibold">Advanced Insights</span> – Get
                  detailed analytics about your investments.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-blue-600 text-xl mt-1" />
                <span>
                  <span className="font-semibold">Priority Support</span> – 24/7
                  dedicated investor support.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-blue-600 text-2xl mt-1" />
                <span>
                  <span className="font-semibold">Early Access</span> – Be the
                  first to access new investment opportunities.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-blue-600 text-2xl mt-1" />
                <span>
                  <span className="font-semibold">Team Collaboration</span> –
                  Easily collaborate with your team.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-blue-600 text-2xl mt-1" />
                <span>
                  <span className="font-semibold">Advanced Insights</span> – Get
                  detailed analytics about your investments.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-blue-600 text-xl mt-1" />
                <span>
                  <span className="font-semibold">Priority Support</span> – 24/7
                  dedicated investor support.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-blue-600 text-2xl mt-1" />
                <span>
                  <span className="font-semibold">Early Access</span> – Be the
                  first to access new investment opportunities.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-blue-600 text-2xl mt-1" />
                <span>
                  <span className="font-semibold">Team Collaboration</span> –
                  Easily collaborate with your team.
                </span>
              </li>
            </ul>

            <button
            onClick={handleContinue}
            className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold">
              Continue
            </button>
          </>
        );

      case "Business":
        return (
          <>
            <h2 className="text-2xl font-semibold mb-4">
              Investor Subscription Plan
            </h2>
            <div className="dark:dark-color p-[2px] rounded-xl bg-transparent hover:bg-gradient-to-l hover:from-blue-600 hover:to-purple-600 mb-4">
            <div className="dark:dark-color border bg-white rounded-xl p-4 ">
              <div className="flex h-20 justify-between items-center">
                <span className="text-2xl font-semibold">Monthly</span>
                <div className="flex">
                  <span className="text-2xl font-bold">₹999/</span>
                  <p className="text-sm pt-3 text-gray-500">Monthly</p>
                </div>
              </div>
            </div>
            </div>


            <div className="dark:dark-color p-[2px] rounded-xl bg-transparent hover:bg-gradient-to-l hover:from-blue-600 hover:to-purple-600 mb-4">
            <div className="dark:dark-color border bg-white rounded-xl p-4 ">
              <div className="flex justify-between items-center mb-2">
                <span className="text-2xl  font-semibold">Yearly</span>
                <span className="bg-gradient-to-l from-[#1C4BC4] to-[#9645FF] text-white w-24 text-xs text-center  py-1 rounded-full">
                  Best Value
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-blue-600 ">Save ₹1,789 </p>
                  <p className="text-sm text-blue-600 pt-1">37% Off</p>
                </div>
                <p className="text-xs text-gray-700">
                  <span className="dark:dark-color font-semibold text-2xl text-black">
                    ₹2,999/
                  </span>
                  Yearly
                  <br />
                </p>
              </div>
            </div>
            </div>

            <h3 className="font-semibold mb-2">Premium Features:</h3>
            <ul className="dark:dark-color text-sm text-gray-700 mb-6 space-y-4">
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-blue-600 text-2xl mt-1" />
                <span>
                  <span className="font-semibold">Advanced Insights</span> – Get
                  detailed analytics about your investments.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-blue-600 text-xl mt-1" />
                <span>
                  <span className="font-semibold">Priority Support</span> – 24/7
                  dedicated investor support.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-blue-600 text-2xl mt-1" />
                <span>
                  <span className="font-semibold">Early Access</span> – Be the
                  first to access new investment opportunities.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-blue-600 text-2xl mt-1" />
                <span>
                  <span className="font-semibold">Team Collaboration</span> –
                  Easily collaborate with your team.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-blue-600 text-2xl mt-1" />
                <span>
                  <span className="font-semibold">Advanced Insights</span> – Get
                  detailed analytics about your investments.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-blue-600 text-xl mt-1" />
                <span>
                  <span className="font-semibold">Priority Support</span> – 24/7
                  dedicated investor support.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-blue-600 text-2xl mt-1" />
                <span>
                  <span className="font-semibold">Early Access</span> – Be the
                  first to access new investment opportunities.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <MdCheckCircle className="text-blue-600 text-2xl mt-1" />
                <span>
                  <span className="font-semibold">Team Collaboration</span> –
                  Easily collaborate with your team.
                </span>
              </li>
            </ul>

            <button 
               onClick={handleContinue} 
            className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold">
              Continue
            </button>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="">
      {/* Back Link */}
      <Link
        to="/profile"
        className="dark:dark-color  flex items-center bg-gray-100 font-semibold pb-4"
      >
        <MdExpandLess className="transform rotate-[-90deg] text-[40px]" />
        <span className="dark:text-white">Back</span>
      </Link>
      <div className="dark:dark-color min-h-screen flex flex-col items-center justify-start bg-gray-100 p-2">
        <div className="dark:bg-[#181818] dark:border dark:border-white w-[380px] bg-white rounded-2xl p-4 pt-6 shadow-md border border-gray-400">
          {/* Tabs */}
          <div className="dark:dark-color dark:text-white flex border border-gray-400 rounded-full justify-around h-14 mb-6">
            {["Basic", "Investor", "Business"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 h-10  mt-2 rounded-full font-semibold ${
                  activeTab === tab
                    ? "bg-gradient-to-l from-[#1C4BC4] to-[#9645FF] text-white "
                    : "text-black hover:bg-gradient-to-l from-[#1C4BC4] to-[#9645FF] hover:text-white dark:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {renderPlanContent()}
        </div>
      </div>
    </div>
  );
}




export function Payment() {
  const [selectedMethod, setSelectedMethod] = useState("online");
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [isPhonePeSelected, setIsPhonePeSelected] = useState(false);
  const [upiId, setUpiId] = useState("");
  const location = useLocation();
const { plan, price } = location.state || { plan: "Basic", price: 399 };


const [selectedBank, setSelectedBank] = useState("");


  const savings = [
    { icon: "🏷️", text: "Apply Coupon", applied: false },
    // { icon: "🏷️", text: "₹6 saved with 'Items at ₹119'", applied: true },
    // { icon: "🚚", text: "₹40 saved with free delivery", applied: true },
  ];



const banks = [
  { name: "HDFC", logo: "/HDFC.png" },
  { name: "ICICI", logo: "/ICICI.png" },
  { name: "SBI", logo: "/SBI.png" },
  { name: "Axis", logo: "/Axis.png" },
];


  const handleItemClick = (item) => {
    if (item.text === "Apply Coupon") {
      setIsCouponOpen(true);
    }
  };

  const handlePhonePeToggle = () => {
    setIsPhonePeSelected(!isPhonePeSelected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Proceeding with UPI ID: ${upiId}`);
  };

  return (
    <div className="dark:dark-color p-4 max-w-md mx-auto font-sans">
      {/* Back Link */}
      <Link to="/subscription" className="dark:dark-color flex items-center mb-4 text-gray-700">
        <MdArrowBack className="text-2xl" />
        <span className="ml-2 font-medium">Payment Method</span>
      </Link>

      {/* Step Progress */}
      <div className="dark:dark-color flex items-center justify-between mb-4">
        <div className="flex flex-col items-center flex-1">
          <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
            ✓
          </div>
          <span className="text-xs mt-1">Plan</span>
        </div>
        <div className="flex-1 h-px bg-gray-300 mx-2"></div>
        <div className="flex flex-col items-center flex-1">
          <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
            2
          </div>
          <span className="text-xs mt-1">Payment</span>
        </div>
      </div>

      {/* Discount Banner */}
      <div className="bg-green-100 text-green-700 text-center py-2 mb-4 rounded">
        ₹15 OFF on this Plan
      </div>

      {/* SAVINGS CORNER */}
      <div className="dark:dark-color dark:border dark:border-white shadow-lg shadow-gray-4 00 bg-white rounded-xl p-4 mb-4 shadow-md">
        <h2 className="dark:dark-color text-gray-600 font-semibold mb-4">SAVINGS CORNER</h2>
        {savings.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleItemClick(item)}
            className="dark:dark-color flex items-center justify-between border-b last:border-none py-3 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="text-orange-500 text-xl">{item.icon}</div>
              <div className="dark:dark-color text-gray-800 font-medium">{item.text}</div>
            </div>
            {item.applied ? (
              <div className="text-green-600 font-semibold flex items-center gap-1">
                <FaCheck /> Applied
              </div>
            ) : (
              <IoIosArrowForward className="text-gray-400 text-xl" />
            )}
          </div>
        ))}
      </div>

      {/* Coupon Slide Panel */}
      {isCouponOpen && (
        <div className="dark:dark-color fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-4">
          <h3 className="text-lg font-semibold mb-4">Apply Coupon</h3>
          <p className="dark:dark-color text-gray-600 mb-4">
            Enter your coupon code below to get extra discounts.
          </p>
          <input
            type="text"
            placeholder="Enter coupon code"
            className="border p-2 w-full mb-4"
          />
          <button className="bg-gradient-to-l from-blue-600 to-purple-600 w-full text-white px-4 py-2 rounded">
            Apply
          </button>
          <button
            className="dark:dark-color block mt-4 text-sm text-gray-500 underline"
            onClick={() => setIsCouponOpen(false)}
          >
            Close
          </button>
        </div>
      )}

      {/* PAYMENT METHODS */}
      <div className="dark:dark-color space-y-4 mb-24">
       
        {/* <div
          onClick={() => setSelectedMethod("cod")}
          className={`border p-4 rounded-xl cursor-pointer ${
            selectedMethod === "cod" ? "border-purple-600" : "border-gray-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="text-gray-700">Cash on Delivery</div>
            <div
              className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                selectedMethod === "cod" ? "border-purple-600" : "border-gray-400"
              }`}
            >
              {selectedMethod === "cod" && (
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              )}
            </div>
          </div>
        </div> */}

        {/* ONLINE PAYMENT */}
        <div
          onClick={() => setSelectedMethod("online")}
          className={`border p-4 rounded-xl cursor-pointer shadow-lg  ${
            selectedMethod === "online" ? "border-purple-600" : "border-gray-300"
          }`}
        >
          <div className="flex items-center  justify-between mb-2">
            <div>
             <div className="font-semibold">₹{price}</div>
              <div className="text-green-600 text-xs">Save ₹11</div>
            </div>
            <div
              className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                selectedMethod === "online"
                  ? "border-purple-600"
                  : "border-gray-400"
              }`}
            >
              {selectedMethod === "online" && (
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              )}
            </div>
          </div>
          <div className="dark:dark-color text-gray-700 mb-2">Online Payment</div>
          <div className="bg-gray-100 text-gray-700 text-xs p-2 rounded mb-2">
            Extra discount with bank offers
          </div>

          {/* PhonePe */}
          <div className="ml-4">
            <div
              className="flex items-center justify-between py-2 border-b cursor-pointer"
              onClick={handlePhonePeToggle}
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <img src={phonepay} alt="PhonePe" className="w-6 h-6" />
                  <span className="font-medium">PhonePe</span>
                </div>
                <p className="text-xs text-green-700">
                  Cashback up to ₹100 on RuPay Credit Card
                </p>
              </div>
              <div
                className={`w-4 h-4 border rounded-full flex items-center justify-center ${
                  isPhonePeSelected ? "bg-blue-500 border-purple-700" : ""
                }`}
              >
                {isPhonePeSelected && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </div>

            {isPhonePeSelected && (
              <div className="mt-2 ml-8 p-3 bg-gray-100 rounded">
                <p className="text-sm text-gray-700 mb-2">
                  Please proceed to PhonePe to complete your payment securely.
                </p>
                <button className="bg-gradient-to-r from-blue-700 to-purple-600 text-white px-4 py-2 rounded">
                  Go to PhonePe
                </button>
              </div>
            )}
          </div>
        </div>

        {/* UPI */}
        <div
          onClick={() => setSelectedMethod("upi")}
          className={`shadow-lg  border p-4 rounded-xl cursor-pointer ${
            selectedMethod === "upi" ? "border-purple-600" : "border-gray-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="dark:dark-color text-gray-700">Pay with any UPI App</div>
            <div
              className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                selectedMethod === "upi" ? "border-purple-600" : "border-gray-400"
              }`}
            >
              {selectedMethod === "upi" && (
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              )}
            </div>
          </div>
        </div>

        {selectedMethod === "upi" && (
          <form
            onSubmit={handleSubmit}
            className="dark:dark-color border border-purple-200 p-4 rounded-xl mt-2 bg-gray-50"
          >
            <label className="dark:dark-color block text-gray-700 mb-2">Enter UPI ID</label>
            <input
              type="text"
              placeholder="example@upi"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="dark:dark-color w-full border border-gray-300 rounded px-3 py-2 mb-4"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-700 to-purple-600 text-white px-4 py-2 rounded"
            >
              Pay Now
            </button>
          </form>
        )}

        {/* Wallet */}
     <div
        onClick={() => setSelectedMethod("wallet")}
        className={`shadow-lg  border p-4 rounded-xl cursor-pointer ${
          selectedMethod === "wallet" ? "border-purple-600" : "border-gray-300"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="dark:dark-color text-gray-700">Wallet</div>
          <div
            className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
              selectedMethod === "wallet"
                ? "border-purple-600"
                : "border-gray-400"
            }`}
          >
            {selectedMethod === "wallet" && (
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            )}
          </div>
        </div>
      </div>


      {selectedMethod === "wallet" && (
        <div className="mt-4">
          <Wallet />
        </div>
      )}

        {/* Credit / ATM Card */}
        <div
          onClick={() => setSelectedMethod("card")}
          className={`shadow-lg  border p-4 rounded-xl cursor-pointer ${
            selectedMethod === "card" ? "border-purple-600" : "border-gray-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="dark:dark-color text-gray-700">Credit / ATM Card</div>
            <div
              className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                selectedMethod === "card"
                  ? "border-purple-600"
                  : "border-gray-400"
              }`}
            >
              {selectedMethod === "card" && (
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              )}
            </div>
          </div>
        </div>

        {/* Internet Banking */}
     <div
  onClick={() => setSelectedMethod("netbanking")}
  className={`shadow-lg  border p-4 rounded-xl cursor-pointer ${
    selectedMethod === "netbanking" ? "border-purple-600" : "border-gray-300"
  }`}
>
  <div className="flex items-center justify-between">
    <div className="dark:dark-color text-gray-700">Internet Banking</div>
    <div
      className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
        selectedMethod === "netbanking"
          ? "border-purple-600"
          : "border-gray-400"
      }`}
    >
      {selectedMethod === "netbanking" && (
        <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
      )}
    </div>
  </div>
</div>

{/*  Bank Logos Dropdown */}
{selectedMethod === "netbanking" && (
  <div className="shadow-lg dark:dark-color mt-2 p-4 bg-gray-50 rounded-xl border border-purple-200">
    <p className="dark:dark-color text-sm text-gray-700 mb-2">Select your bank:</p>
    <div className="grid grid-cols-2 gap-4">
      {banks.map((bank) => (
        <div
          key={bank.name}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedBank(bank.name);
          }}
          className={`flex flex-col items-center p-2 border rounded cursor-pointer ${
            selectedBank === bank.name
              ? "border-purple-600"
              : "border-gray-300"
          }`}
        >
          <img src={bank.logo} alt={bank.name} className="w-16 h-8 object-contain mb-1" />
          <span className="text-xs">{bank.name}</span>
        </div>
      ))}
    </div>

    {selectedBank && (
      <div className="mt-4 text-sm text-purple-700">
         Selected Bank: <strong>{selectedBank}</strong>
      </div>
    )}
  </div>
)}

      </div>

      {/* Bottom Bar */}
      <div className="dark:dark-color fixed bottom-0 left-0 right-0 border-t bg-white p-4 flex items-center justify-between max-w-md mx-auto">
        <div className="text-lg font-semibold">
       <div>{price}</div>
        </div>
    <button
  className="bg-gradient-to-r from-blue-700 to-purple-600 text-white px-8 py-3 rounded font-medium"
  onClick={() => {
    if (selectedMethod === "online") {
      if (isPhonePeSelected) {
        window.location.href = "https://www.phonepe.com/";
      } else {
        alert("Please select PhonePe or another online method.");
      }
    } else if (selectedMethod === "upi") {
      if (upiId) {
        alert(`Proceeding with UPI ID: ${upiId}`);
      } else {
        alert("Please enter your UPI ID.");
      }
    } else if (selectedMethod === "wallet") {
      alert("Proceeding with Wallet payment.");
    } else if (selectedMethod === "card") {
      alert("Proceeding with Card payment.");
    } else if (selectedMethod === "netbanking") {
      if (selectedBank) {
        alert(`Redirecting to ${selectedBank} Net Banking`);
      } else {
        alert("Please select a bank.");
      }
    } else {
      alert("Please select a payment method.");
    }
  }}
>
  Make Payment
</button>

      </div>
    </div>
  );
}




export default Subscription;
