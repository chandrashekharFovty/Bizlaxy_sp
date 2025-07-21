import React, { useState } from "react";
import Sidebar from "../../layout/Sidebar";
import RightBar from "./RightBar";
import { useNavigate, Link } from "react-router-dom";
import { toDate } from "date-fns";
import useLocalStorageState from "../../../hooks/useFormData";

function Shipping() {
  const navigate = useNavigate();
  // const [form, setForm] = useState({
  //   productLocation: "",
  //   productWeight: "",
  //   productDimension: "",
  //   shippingMethod: "",
  //   productDeliveryTime: "", // You can set default if needed
  // });

  const [data, setData] = useLocalStorageState("multiFormData", {
    shipingFormData: {
      productLocation: "",
      productWeight: "",
      productDimension: "",
      shippingMethod: "",
      productDeliveryTime: "",
    },
    detailedFormData: {},
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev,shipingFormData:{...prev.shipingFormData, [name]: value }}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data[shipingFormData]:", data.shipingFormData);
    navigate("/moredetial");
  };

  return (
    <div className="flex gap-10 max-lg:gap-0">
      <div className="hidden max-lg:w-[120px] w-1/6 md:block">
        <Sidebar />
      </div>

      <div className="flex flex-col w-3/6 max-md:w-screen">
        <div className="bg-white p-6 rounded-lg shadow-md min-h-screen flex flex-col">
          <Link to="/priceInvetory" className="flex items-center text-lg mb-4">
            &lt;<span className="text-sm ml-2 mt-1">Shipping Info</span>
          </Link>

          <h1 className="text-xl font-bold mb-6">Shipping Info</h1>

          <form className="space-y-6 w-full" onSubmit={handleSubmit}>
            <div>
              <p>Location/Address:</p>
              <input
                name="productLocation"
                value={data.shipingFormData.productLocation}
                onChange={handleChange}
                placeholder="Enter location address"
                className="border w-full h-10 rounded-xl mt-2 pl-4"
              />
            </div>

            <div>
              <p>Product Weight</p>
              <input
                name="productWeight"
                value={data.shipingFormData.productWeight}
                onChange={handleChange}
                placeholder="Enter product weight (kg)"
                className="border w-full h-10 rounded-xl mt-2 pl-4"
              />
            </div>

            <div>
              <p>Product Dimensions</p>
              <input
                name="productDimension"
                value={data.shipingFormData.productDimension}
                onChange={handleChange}
                placeholder="Enter dimensions"
                className="border w-full h-10 rounded-xl mt-2 pl-4"
              />
            </div>

            <div>
              <p>Shipping Method</p>
              <select
                name="shippingMethod"
                value={data.shipingFormData.shippingMethod}
                onChange={handleChange}
                className="border w-full h-10 rounded-xl mt-2 pl-4"
              >
                <option value="" disabled>
                  Select shipping method
                </option>
                <option value="air">Air</option>
                <option value="sea">Sea</option>
                <option value="road">Road</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            <div>
              <p>Delivery Time</p>
              <input
                name="productDeliveryTime"
                value={data.shipingFormData.productDeliveryTime}
                onChange={handleChange}
                placeholder="Delivery Time (e.g. 3-5 days)"
                className="border w-full h-10 rounded-xl mt-2 pl-4"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
            >
              Next
            </button>
          </form>
        </div>
      </div>

      <div className="max-md:hidden fixed right-0 top-0 h-full w-1.5/6 z-50 bg-white">
        <RightBar />
      </div>
    </div>
  );
}

export default Shipping;
