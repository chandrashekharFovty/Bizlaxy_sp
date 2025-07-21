import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../layout/Sidebar";
import RightBar from "./RightBar";
import { Link } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import "../../../customDropDwon.css"; // Assuming you have some custom styles
import useLocalStorageState  from "../../../hooks/useFormData";

// Options for MultiSelect businessType, industrySector, and businessModel
const categories = [
  { label: "Manufacturer", value: "manufacturer" },
  { label: "Wholesaler", value: "wholesaler" },
  { label: "Exporter", value: "exporter" },
  { label: "Importer", value: "importer" },
  { label: "Distributor", value: "distributor" },
  { label: "Retailer", value: "retailer" },
  { label: "Service Provider", value: "service_provider" },
  { label: "Trader", value: "trader" },
  { label: "Supplier", value: "supplier" },
  {
    label: "Other ", //(custom category for specific type of business not listed)
    value: "other",
  },
];
const productcolors = [
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
  { label: "Green", value: "green" },
  { label: "Yellow", value: "yellow" },
  { label: "Purple", value: "purple" },
  { label: "Orange", value: "orange" },
  { label: "Pink", value: "pink" },
  { label: "Teal", value: "teal" },
  { label: "Brown", value: "brown" },
  { label: "Gray", value: "gray" },
];

type OptionType = { label: string; value: string };

type Form = {
  brandName: string;
  productName: string;
  description: string;
  hashtag: string;
  category: OptionType[];
  subCategory: OptionType[];
  productCode: string;
  hsnCode: string;
  productColor: OptionType[];
};

const Product: React.FC = () => {
  // const [form, setForm] = useState<Form>({
  //   brandName: "",
  //   productName: "",
  //   description: "",
  //   hashtag: "",
  //   category: [],
  //   subCategory: [],
  //   productCode: "",
  //   hsnCode: "",
  //   productColor: [],
  // });
const [data, setData] = useLocalStorageState('multiFormData', {
  basicFormData: {
    brandName: "",
    productName: "",
    description: "",
    hashtag: "",
    category: [] as OptionType[],
    subCategory: [] as OptionType[],
    productCode: "",
    hsnCode: "",
    productColor: [] as OptionType[],
  },
  
  imageFormData: {},
  pricingFormData: {},
  shipingFormData: {},
  detailedFormData: {},
  
});
 
  const navigate = useNavigate();
  // const [brandName, setBrandName] = useState("");
  // const [productName, setProductName] = useState("");
  // const [description, setDescription] = useState("");
  // const [hashtag, setHashtag] = useState("");
  // const [productCode, setProductCode] = useState("");
  // const [hsnCode, setHsnCode] = useState("");
  const [category, setCategory] = useState<OptionType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<OptionType[]>([]);
  const [subCategory, setSubCategory] = useState<OptionType[]>([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState<OptionType[]>(
    []
  );
  const [productColor, setProductColor] = useState<OptionType[]>([]);
  // const [selectedProductColor, setSelectedProductColor] = useState<
  //   OptionType[]
  // >([]);

  const handleCategoty = (val) => {
    setCategory(val);
    setSelectedCategory(val);
  };
  const handleSubCategoty = (val) => {
    setSubCategory(val);
    setSelectedSubCategory(val);
  };
  const handleProductColor = (val) => {
    setProductColor(val);
    //setSelectedProductColor(val);
  };

  data.basicFormData.productColor = productColor;
  data.basicFormData.category = category;
  data.basicFormData.subCategory = subCategory;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const key = name as keyof Form;
    setData((prev) => ({ ...prev,basicFormData:{...prev.basicFormData, [key]: value }}));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //setData(data.basicFormData);
    console.log("Form Data[BasicData]:", data.basicFormData);
    navigate("/next-page");
  };

  // const handleNext = () => {
  //   console.log({
  //     brandName,
  //     productName,
  //     description,
  //     hashtag,
  //     category,
  //     subCategory,
  //     productCode,
  //     hsnCode,
  //     productColor,
  //   });

  //   navigate("/next-page");
  // };

  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="flex gap-10 max-lg:gap-0">
      {/* Sidebar (Hidden on mobile) */}
      <div className="hidden max-lg:w-[70px] w-1/6 md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-3/6 max-md:w-screen">
        <div
          onClick={stopPropagation}
          className="bg-white w-full mx-auto dark:dark-color p-6 rounded-lg shadow-md flex flex-col h-[100vh] overflow-hidden"
        >
          {/* Back Button */}
          <Link
            to="/feed"
            className="flex items-center text-lg text-black dark:text-white mb-4"
          >
            &lt;
            <span className="text-sm ml-2 mt-1">Basic Product Information</span>
          </Link>

          {/* Header */}
          <h1 className="text-xl font-bold text-gray-700 dark:text-white mb-2">
            Basic Product Information
          </h1>
          <form
            className="overflow-y-auto scrollbar-hide flex-1 pr-2 space-y-4 px-2 md:px-0"
            onSubmit={handleSubmit}
          >
            {/* Category */}
            <div className="w-ful">
              <label className="text-sm  font-medium text-gray-700 dark:text-white">
                Category
              </label>
              <MultiSelect
                value={selectedCategory}
                options={categories}
                onChange={handleCategoty}
                labelledBy="Product Category"
                hasSelectAll
                className="border  border-gray-300 w-full dark:dark-color dark:border dark:border-white   rounded-xl mt-2 pl-4 text-gray-700  bg-white dark:bg-gray-200"
              />
            </div>
            {/* Category */}
            <div className="w-full ">
              <label className="text-sm font-medium text-gray-700 dark:text-white">
                Sub Category
              </label>
              <MultiSelect
                value={selectedSubCategory}
                options={categories}
                onChange={handleSubCategoty}
                hasSelectAll
                labelledBy="Product SubCategory"
                className="border dark:text-gray-400 border-gray-300 w-full  rounded-xl mt-2 pl-4 text-gray-700 bg-white dark:bg-gray-200"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-white -mb-1">
                Feature Product Title
              </h3>
              <p className="text-sm text-gray-500 dark:text-white mb-2">
                Enter a short title shown on your product card.
              </p>
            </div>
            {/* Brand Name */}
            <div className="w-full">
              <label className="text-sm text-gray-700 dark:text-white font-medium">
                Brand Name
              </label>
              <input
                type="text"
                value={data.basicFormData.brandName}
                onChange={handleChange}
                placeholder="Enter brand name"
                className="w-full h-10 border border-gray-300 px-3 text-sm py-2 rounded-xl shadow-sm bg-white dark:bg-gray-200 dark:text-black"
                name="brandName"
              />
            </div>

            {/* Product Name */}
            <div className="w-full ">
              <label className="text-sm text-gray-700 dark:text-white font-medium">
                Product Name
              </label>
              <input
                type="text"
                value={data.basicFormData.productName}
                onChange={handleChange}
                placeholder="Enter product name"
                className="w-full h-10 border border-gray-300 px-3 text-sm py-2 rounded-xl shadow-sm bg-white dark:bg-gray-200 dark:text-black"
                name="productName"
              />
            </div>

            {/* Description */}
            <div className="w-full ">
              <label className="text-sm text-gray-700 dark:text-white font-medium">
                Description
              </label>
              <textarea
                value={data.basicFormData.description}
                onChange={handleChange}
                placeholder="Write a detailed description of the product"
                className="w-full border border-gray-300 h-24 px-3 py-2 text-sm rounded-xl shadow-sm bg-white dark:bg-gray-200 dark:text-black"
                name="description"
              />
            </div>

            {/* Hashtag */}
            <div className="w-full ">
              <label className="text-sm text-gray-700 dark:text-white font-medium">
                Hashtag
              </label>
              <input
                type="text"
                value={data.basicFormData.hashtag}
                onChange={handleChange}
                placeholder="Add hashtag (e.g., #summer)"
                className="w-full h-10 border border-gray-300 px-3 text-sm py-2 rounded-xl shadow-sm bg-white dark:bg-gray-200 dark:text-black"
                name="hashtag"
              />
            </div>

            {/* Category */}
            <div className="w-full ">
              <label className="text-sm font-medium text-gray-700 dark:text-white">
                Product Colors
              </label>
              <MultiSelect
                value={productColor}
                options={productcolors}
                onChange={handleProductColor}
                labelledBy="Product Colors"
                hasSelectAll
                className="border dark:text-gray-400 border-gray-300 w-full h-10 rounded-xl mt-2 pl-4 text-gray-700 bg-white dark:bg-gray-200"
              />
            </div>

            {/* Product Code/ID */}
            <div className="w-full ">
              <label className="text-sm text-gray-700 dark:text-white font-medium">
                Product Code/ID
              </label>
              <input
                type="text"
                value={data.basicFormData.productCode}
                onChange={handleChange}
                placeholder="Enter product code/ID"
                className="w-full h-10 border border-gray-300 px-3 text-sm py-2 rounded-xl shadow-sm bg-white dark:bg-gray-200 dark:text-black"
                name="productCode"
              />
            </div>

            {/* HSN/SAC Code */}
            <div className="w-full ">
              <label className="text-sm text-gray-700 dark:text-white font-medium">
                HSN/SAC Code
              </label>
              <input
                type="text"
                value={data.basicFormData.hsnCode}
                onChange={handleChange}
                placeholder="Enter HSN/SAC code"
                className="w-full h-10 border border-gray-300 px-3 text-sm py-2 rounded-xl shadow-sm bg-white dark:bg-gray-200 dark:text-black"
                name="hsnCode"
              />
            </div>

            {/* Next Button */}
            <button
              type="submit"
              className="w-full  mt-4 text-white px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              Next
            </button>
          </form>
        </div>
      </div>

      {/* Right: Preview (Hidden on mobile) */}
      <div className="max-md:hidden fixed right-0 top-0 h-full w-1.5/6 z-50 bg-white">
        <RightBar />
      </div>
    </div>
  );
};

export default Product;
