import React, { useState } from "react";
import Sidebar from "../../layout/Sidebar";
import RightBar from "./RightBar";
import { useNavigate, Link } from "react-router-dom";
import { CircleAlert } from "lucide-react";
import useLocalStorageState from "../../../hooks/useFormData";

function PriceInventory() {
  const navigate = useNavigate();
  // const [form, setForm] = useState({
  //   productPrice: "",
  //   productPriceUnit: "",
  //   productPriceRange: "",
  //   productrangeType: "",
  //   productPriceDiscount: "",
  // });
  const [data, setData] = useLocalStorageState("multiFormData", {
    pricingFormData: {
      productPrice: "",
      productPriceUnit: "",
      productPriceRange: "",
      productrangeType: "",
      productPriceDiscount: "",
    },
    shipingFormData: {},
    detailedFormData: {},
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev,pricingFormData:{...prev.pricingFormData, [name]: value }}));
  };

  const handleNextButton = () => {
    console.log("Form data[pricingForm]:", data.pricingFormData);
    navigate("/shiping");
  };

  return (
    <div className="flex gap-10 max-lg:gap-0">
      <div className="hidden max-lg:w-[70px] w-1/6 md:block">
        <Sidebar />
      </div>

      <div className="flex flex-col w-3/6 max-md:w-screen mt-2 px-4 py-6 bg-white min-h-screen">
        <Link to="/next-page" className="flex items-center mb-4">
          &lt;<span className="ml-2">Basic Product Information</span>
        </Link>

        <h1 className="text-xl font-bold mb-6">Pricing & Inventory</h1>

        <div className="flex flex-col max-w-full md:max-w-3xl">
          <div>
            <label className="mt-4">Price per Unit</label>
            <div className="flex gap-5">
              <input
                name="productPrice"
                placeholder="Enter price per unit"
                value={data.pricingFormData.productPrice}
                onChange={handleChange}
                className="border w-5/6 h-10 rounded-xl mt-2 pl-4"
              />

              <input
                name="productPriceUnit"
                placeholder="Unit (e.g. per piece)"
                value={data.pricingFormData.productPriceUnit}
                onChange={handleChange}
                className="w-1/6 border h-10 rounded-xl mt-2 pl-4"
              />
            </div>
          </div>

          <div>
            <label className="mt-4 flex gap-2 items-center">
              Price Range
              <CircleAlert size={16} />
            </label>
            <div className="flex gap-5">
              <input
                name="productPriceRange"
                placeholder="Enter price range"
                value={data.pricingFormData.productPriceRange}
                onChange={handleChange}
                className="border w-5/6 h-10 rounded-xl mt-2 pl-4"
              />
              <input
                name="productrangeType"
                placeholder="Type (e.g. Uniform)"
                value={data.pricingFormData.productrangeType}
                onChange={handleChange}
                className="w-1/6 border h-10 rounded-xl mt-2 pl-4"
              />
            </div>
          </div>

          <div>
            <label className="mt-4">Discounts</label>
            <input
              name="productPriceDiscount"
              placeholder="Enter discount"
              value={data.pricingFormData.productPriceDiscount}
              onChange={handleChange}
              className="border w-full h-10 rounded-xl mt-2 pl-4"
            />
          </div>

          <button
            className="px-4 py-2 bg-blue-600 text-white w-full mt-6 rounded-xl hover:bg-blue-700"
            onClick={handleNextButton}
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

export default PriceInventory;
