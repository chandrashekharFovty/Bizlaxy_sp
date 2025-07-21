import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import SocialMediaLinks from "../../components/SocialMedia/Link";
import { MdIosShare } from "react-icons/md";
import {
  FaFacebookF,
  FaXTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa6";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const ProductColors = ["red", "blue", "green", "yellow", "black"];
const colorClasses = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  black: "bg-black",
};

const ratingsData = [
  { star: 5, count: 1000 },
  { star: 4, count: 500 },
  { star: 3, count: 300 },
  { star: 2, count: 200 },
  { star: 1, count: 80 },
];

const totalRatings = ratingsData.reduce((sum, r) => sum + r.count, 0);

const handleWriteReview = () => {
  alert("Redirect to write a review form!");
};

const ProductDetailsPage = () => {
  const [isChartOpen, setIsChartOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  
  let hideTimeout;

  const handleMouseEnter = () => {
    clearTimeout(hideTimeout);
    setShowIcons(true);
  };

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setShowIcons(false);
    }, 300); // Delay in ms (adjust if needed)
  };

  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("black");

  const location = useLocation();
  const product = location.state?.product;

  const PreviewImagesDetails = product?.previews || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [detailImage, setDetailImage] = useState(
    product?.img || PreviewImagesDetails?.[0]
  );

  const handlePrevImage = () => {
    if (PreviewImagesDetails.length === 0) return;
    const prevIndex =
      currentIndex === 0 ? PreviewImagesDetails.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setDetailImage(PreviewImagesDetails[prevIndex]);
  };

  const handleNextImage = () => {
    if (PreviewImagesDetails.length === 0) return;
    const nextIndex =
      currentIndex === PreviewImagesDetails.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    setDetailImage(PreviewImagesDetails[nextIndex]);
  };

  if (!product) {
    return <p>No product data found. Please go back and select a product.</p>;
  }


 
  const sizes = [
    ["XS", '34"', '36"', '38"'],
    ["S", '36"', '38"', '40"'],
    ["M", '38"', '40"', '42"'],
    ["L", '40"', '42"', '44"'],
  ];

  const handleSelectSize = (size) => {
    setSelectedSize(size);
    setIsChartOpen(false);
    console.log("Selected size:", size);
  };


  return (
    <div className="dark:dark-color lg:ml-[240px] md:ml-[70px]  p-4 flex flex-col mx-auto gap-7">
      {/* Sidebar */}
      <div className="lg:w-[250px] fixed top-0 left-0 h-screen bg-white shadow-md z-20">
        <Sidebar />
      </div>

      {/* Breadcrumbs */}
      <div className="flex flex-col  items-start gap-2 flex-wrap">
        <Link
          to="/shopproduct"
          className="text-sm text-blue-600 hover:underline"
        >
          &lt; Back to Hoodies
        </Link>
        <p className="text-[#050505] text-sm">
          <Link to="/shop" className="hover:underline">
            Shop
          </Link>
          <span className="mx-1">&gt;</span>
          <Link to="/apparel" className="hover:underline">
            Apparel
          </Link>
          <span className="mx-1">&gt;</span>
          <Link to="/shopproduct" className="hover:underline">
            Hoodies
          </Link>
        </p>
      </div>

      <div className="flex flex-col max-md:w-screen xl:flex-row gap-8">
        {/* Image Section */}
        <div className="flex gap-5 w-full">
          <div className="flex w-full flex-col gap-4">
            <img
              src={detailImage}
              alt="Product"
              className="rounded-xl xl:h-[510px] max-md:h-[350px] max-md:w-full w-[500px] object:contain object-cover"
            />
            <div className="flex gap-2 overflow-x-auto">
              {PreviewImagesDetails.map((preview, index) => (
                <div
                  key={index}
                  className={`w-20 h-20 rounded overflow-hidden flex-shrink-0 border-2 ${
                    detailImage === preview
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => setDetailImage(preview)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Buttons Section */}
          <div className=" max-md:hidden flex flex-col justify-between items-center h-[570px]">
            <div>
              {/* Share Button */}
              <div
                className="dark:dark-color dark:border dark:border-white mb-8 bg-gray-200 rounded-xl flex items-center justify-center px-5 py-2 cursor-pointer h-14 p-4 hover:bg-gray-300 transition"
                onClick={() => setLiked(!liked)}
                title={liked ? "Unlike" : "Like"}
              >
                {liked ? (
                  <IoIosHeart className="text-2xl text-red-600 dark:text-white" />
                ) : (
                  <IoIosHeartEmpty className="text-2xl text-black" />
                )}
              </div>
              <div
                className="relative mb-4"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="dark:dark-color dark:border dark:border-white bg-gray-200 rounded-xl flex items-center justify-center px-5 py-2 cursor-pointer h-14 p-4 hover:bg-gray-300 transition">
                  <MdIosShare className="text-2xl" />
                </div>

                {showIcons && (
                  <div className="absolute top-[83px] right-0 -translate-y-1/2">
                    <SocialMediaLinks />
                  </div>
                )}
              </div>

              {/* Like Button */}
            </div>

            {/* Prev / Next */}
            <div>
              <div
                className="dark:dark-color dark:border dark:border-white mb-4 bg-gray-200 rounded-xl flex items-center justify-center cursor-pointer w-[52px] h-[52px] hover:bg-gray-300"
                onClick={handlePrevImage}
              >
                &lt;
              </div>
              <div
                className="dark:dark-color dark:border dark:border-white mb-8 bg-gray-200 rounded-xl flex items-center justify-center cursor-pointer w-[52px] h-[52px] hover:bg-gray-300"
                onClick={handleNextImage}
              >
                &gt;
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-4 w-[90%]  ">
          <div className="w-full max-md:w-full">
            <h1 className="text-xl max-md:text-sm  font-semibold ">
              Wholesale Prime Quality Custom Logo Heavy Weight Tshirts Tee Shirt
              100% Cotton Men Tshirt 280GSM Cotton Oversized Blank T Shirts
            </h1>
          </div>
          <div className="flex items-center justify-between w-auto ">
            <div className="max-md:hidden flex gap-4">
              <span className="line-through text-gray-500">₹2,999</span>
              <span className="text-xl font-semibold text-red-600">₹1,299</span>
            </div>

            <div className=" lg:hidden flex  justify-between w-full ">
              <div className="flex flex-col  max-md:w-full gap-4">
                <div className="flex w-full">
                  {" "}
                  <span className="max-md:text-sm text-blue-600 font-semibold text-lg">
                    US$ $2.50
                  </span>
                  <span className="text-sm pt-2 pl-1 font-mediam text-gray-400">
                    /2,499 Price
                  </span>
                </div>
                <div className="flex">
                  <h1>5 Prices</h1>
                  <span>/Minimum order</span>
                </div>
              </div>
              <div className="flex gap-2 ml-20 ">
                {/* Share Button */}
                <div
                  className="mb-8  bg-gray-300 rounded-xl flex items-center justify-center px-5 py-2 cursor-pointer h-14 p-4 hover:bg-gray-400 transition"
                  onClick={() => setLiked(!liked)}
                  title={liked ? "Unlike" : "Like"}
                >
                  {liked ? (
                    <IoIosHeart className="text-2xl text-red-600" />
                  ) : (
                    <IoIosHeartEmpty className="text-2xl text-gray-800" />
                  )}
                </div>
                <div
                  className="relative mb-4"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-gray-300 rounded-xl flex items-center justify-center px-5 py-2 cursor-pointer h-14 p-4 hover:bg-gray-400 transition">
                    <MdIosShare className="text-2xl" />
                  </div>

                  {showIcons && (
                    <div className="absolute top-[83px] right-0 -translate-y-1/2">
                      <SocialMediaLinks />
                    </div>
                  )}
                </div>

                {/* Like Button */}
              </div>
            </div>
          </div>

          {/* Color Picker */}
          <div>
            <p>
              Color:
              <span className="font-semibold">
                {" "}
                Black with Star Wars Graphic Print
              </span>
            </p>
            <div className="flex gap-2 mt-2">
              {ProductColors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColor(color)}
                  className={`w-20 h-10 
                  ${
                    selectedColor === color
                      ? "p-[4px] border-2 border-black rounded-[6px]"
                      : "p-0 border-none "
                  } 
                  transition-all duration-200`}
                >
                  <div
                    className={`w-full h-full rounded-[6px] ${colorClasses[color]}`}
                  ></div>
                </button>
              ))}
            </div>
          </div>

          {/* Size Picker */}
          <div>
            <div className="w-full flex justify-between">
              <p>
                Size: <span className="font-semibold">{selectedSize}</span>
              </p>
              <span
                className="underline text-gray-500 cursor-pointer"
                onClick={() => setIsChartOpen(true)}
              >
                View Size Chart
              </span>
            </div>
            <div className="flex gap-3 mt-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`dark:dark-color dark:border dark:border-white px-4 py-2 border rounded-xl ${
                    selectedSize === size
                      ? "text-black font-semibold bg-gray-100 border-black"
                      : "bg-white font-semibold text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Size Chart Modal */}
          {isChartOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="dark:dark-color dark:border dark:border-white bg-gray-100 p-6 rounded-xl shadow">
            <h2 className="text-xl text-center font-bold mb-4">Size Chart</h2>
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr>
                  {["Size", "Waist", "Hips", "Length"].map((head, idx) => (
                    <th
                      key={idx}
                      className="border border-gray-400 px-4 py-2"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sizes.map((row, idx) => (
                  <tr
                    key={idx}
                    onClick={() => handleSelectSize(row[0])}
                    className="cursor-pointer hover:bg-blue-100"
                  >
                    {row.map((col, i) => (
                      <td
                        key={i}
                        className="border border-gray-400 px-4 py-2"
                      >
                        {col}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setIsChartOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {selectedSize && (
        <p className="mt-4 text-green-600">
          Selected Size: <strong>{selectedSize}</strong>
        </p>
      )}

          {/* CTA */}
          <div className="flex gap-4 mt-4 w-[520px] h-[58px]">
            <Button className="bg-gradient-to-r from-[#1C4BC4] to-[#9645FF] rounded-xl w-[296px] h-full hover:bg-purple-700 font-medium text-[20px] text-white">
              Contact Seller
            </Button>
          </div>

          <div className="w-full max-md:w-xs border rounded-xl mt-4 overflow-hidden">
      <table className="w-full text-sm text-left">
        <thead className="dark:dark-color dark:border dark:border-white bg-gray-100">
          <tr>
            <th className="px-4 py-2  border-r">Total Product Cost</th>
            <th className="px-4 py-2  border-r">Shipping Cost</th>
            <th className="px-4 py-2  border-r">Total</th>
          </tr>
        </thead>
        <tbody className="border">
          <tr className="border-t">
            <td className="px-4 py-2 text-xs border-r">US$ 29.00</td>
            <td className="px-4 py-2 text-xs border-r">To be provided by supplier</td>
            <td className="px-4 py-2 text-xs  border-r">Pending supplier's quote</td>
          </tr>
        </tbody>
      </table>
    </div>
          {/* <a href="#" className="text-sm text-gray-500 underline mt-2 inline-block">
            Delivery T&C
          </a> */}
          <div></div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left section: Tabs + Content */}
        <div className="flex-1">
          {/* Main Tabs */}
          <div className=" flex border-b">
            {["Description", "Reviews", "Company", "Delivery T&C"].map(
              (tab, index) => (
                <button
                  key={index}
                  className={`px-5 py-3 text-sm font-medium ${
                    index === 0
                      ? "border-b-[2px] border-[#1C4BC4] text-black dark:text-white"
                      : "text-gray-500 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* Tab Content */}
          <div className="dark:dark-color mt-6 space-y-4 text-sm text-gray-700">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>

          {/* Basic Info Table */}
          <table className="dark:dark-color w-full mt-6 text-sm border border-gray-200">
            <tbody>
              {[
                ["Fabric", "100% Cotton"],
                ["Color", "Black"],
                ["Size", "M, L, XL, XXL"],
                ["Fit", "Regular Fit"],
                ["Sleeve Length", "Short Sleeve"],
                ["Neck Type", "Round Neck"],
                ["Care Instructions", "Machine Wash"],
                ["Occasion", "Casual Wear"],
                ["Country of Origin", "India"],
              ].map(([label, value], idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white dark:text-black dark:border dark:border-gray-300" : "bg-gray-50 dark:bg-balck"}
                >
                  <td className="w-1/3 px-4 py-2 font-medium text-gray-700">
                    {label}
                  </td>
                  <td className="px-4 py-2 text-gray-800">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right section: Seller Card + Ratings */}
        <div className="dark:dark-color w-full max-w-full xl:w-[300px] space-y-6">
          {/* Seller Card */}
          <div className="dark:dark-color bg-[#F4F7FF] border border-[#C4D5FF] rounded-xl p-4 shadow space-y-3">
            <div className="flex gap-10">
            <div className="">

              {" "}
              <a
                href="/InvesterProfile"
                className="text-[#1C4BC4] font-semibold text-base block underline"
              >
                Brain_Tab
              </a>
            </div>
            <div className="flex gap-1">
              <button className="dark:dark-color border border-gray-400 text-black text-xs w-14 hover:bg-gradient-to-l from-blue-600 to-purple-600 hover:text-white rounded-xl">
                Follow
              </button>
              <button className="dark:dark-color border border-gray-400 text-black text-xs w-14 hover:bg-gradient-to-l from-blue-600 to-purple-600 hover:text-white rounded-xl">
                Chat
              </button>
            </div>
            </div>
            <div className="text-sm text-gray-600 text-xs">14 year<span className="ml-12">Chat</span></div>
            <p className="text-gray-500 text-xs">Response Rate:<span className="text-black font-semibold ml-1 text-xs">High</span></p>
            <p className="text-gray-500 text-xs">Avg Response Time:<span className="text-black font-semibold ml-1 text-xs">24 h</span></p>
            <button className="mt-2 w-full py-2 bg-gradient-to-l from-blue-500 to-purple-600 text-white rounded-xl text-sm">
              Seller's profile
            </button>
          </div>

          {/* Ratings */}
          <div className="dark:dark-color bg-white border rounded-xl p-4 shadow space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold">
                <span className="text-yellow-500 text-xl">★</span> 4.7 out of 5
              </span>
            </div>
            <p className="text-sm text-gray-600">
              {totalRatings} global ratings
            </p>

            {/* Rating bars */}
            {ratingsData.map(({ star, count }) => {
              const percentage = ((count / totalRatings) * 100).toFixed(1);
              return (
                <div key={star} className="flex items-center gap-2 text-sm">
                  <span>
                    {star}
                    <span className="text-yellow-500 text-xl">★</span>
                  </span>
                  <div className="w-full bg-gray-200 rounded h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right text-xs">{percentage}%</span>
                </div>
              );
            })}

            <button
              onClick={handleWriteReview}
              className="w-full mt-4 py-2 text-[#1C4BC4] text-sm border border-[#1C4BC4] rounded-xl"
            >
              Write a review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
