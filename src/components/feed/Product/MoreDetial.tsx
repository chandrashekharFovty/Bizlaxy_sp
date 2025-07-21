import React, { useState } from "react";
import Sidebar from "../../layout/Sidebar";
import RightBar from "./RightBar";
import { useNavigate, Link } from "react-router-dom";
import useLocalStorageState from "../../../hooks/useFormData";

function MoreDetail() {
  const navigate = useNavigate();
  // const [form, setForm] = useState({
  //   productQuantity: "",
  //   minimumOrder: "",
  //   warranty: "",
  //   returnPolicy: "",
  //   material: "",
  // });

  const [data, setData] = useLocalStorageState("multiFormData", {
    detailedFormData: {
      productQuantity: "",
      minimumOrder: "",
      warranty: "",
      returnPolicy: "",
      material: "",
    },
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev,detailedFormData:{...prev.detailedFormData, [name]: value }}));
  };

  const handleSubmit = () => {
    console.log("Form Data[detailedFormData]:", data.detailedFormData);
    navigate("/feed");
  };

  return (
    <div className="flex gap-10 max-lg:gap-0">
      <div className="hidden max-lg:w-[120px] w-1/6 md:block">
        <Sidebar />
      </div>

      <div className="flex flex-col w-3/6 max-md:w-screen px-4 py-6 bg-white min-h-screen">
        <Link to="/shiping" className="flex items-center mb-4">
          &lt;<span className="ml-2">Shipping Info</span>
        </Link>

        <h1 className="text-xl font-bold mb-6">More Details</h1>

        <div className="flex flex-col w-full">
          <label className="mt-4">Available Quantity</label>
          <input
            name="productQuantity"
            value={data.detailedFormData.productQuantity}
            onChange={handleChange}
            placeholder="Enter available quantity"
            className="border w-full h-10 rounded-xl mt-2 pl-4"
          />

          <label className="mt-6">Minimum Order Quantity</label>
          <input
            name="minimumOrder"
            value={data.detailedFormData.minimumOrder}
            onChange={handleChange}
            placeholder="Enter minimum order quantity"
            className="border w-full h-10 rounded-xl mt-2 pl-4"
          />

          <label className="mt-6">Warranty</label>
          <input
            name="warranty"
            value={data.detailedFormData.warranty}
            onChange={handleChange}
            placeholder="Enter warranty information"
            className="border w-full h-10 rounded-xl mt-2 pl-4"
          />

          <label className="mt-6">Return Policy</label>
          <select
            name="returnPolicy"
            value={data.detailedFormData.returnPolicy}
            onChange={handleChange}
            className="border w-full h-10 rounded-xl mt-2 pl-4"
          >
            <option value="" disabled>
              Select return policy
            </option>
            <option value="7days">7 Days Return</option>
            <option value="15days">15 Days Return</option>
            <option value="noreturn">No Return</option>
          </select>

          <label className="mt-6">Material</label>
          <input
            name="material"
            value={data.detailedFormData.material}
            onChange={handleChange}
            placeholder="Specify material"
            className="border w-full h-10 rounded-xl mt-2 pl-4"
          />

          <button
            className="px-4 py-2 bg-blue-600 text-white w-full mt-6 rounded-xl hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Next
          </button>
        </div>
      </div>

      <div className="max-md:hidden fixed right-0 top-0 h-full w-1.5/6 bg-white">
        <RightBar />
      </div>
    </div>
  );
}

export default MoreDetail;
