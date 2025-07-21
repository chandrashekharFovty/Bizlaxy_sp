import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import headphones from "../../../../public/headphones.png";
import { useLocation } from "react-router-dom";

function RightBar() {
  const location = useLocation();

  const product = location.state?.product;
  const PreviewImagesDetails = product?.previews || [
    headphones,
    headphones,
    headphones,
    headphones,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [detailImage, setDetailImage] = useState(
    product?.img || PreviewImagesDetails?.[0]
  );

  //   const navigate = useNavigate();

  return (
    <div className=" dark:bg-gray-800 dark:text-white ml-4 py-6 border-l overflow-y-scroll scrollbar-hide h-full border-gray-300 px-4">
      {/*product images*/}
      <div className="flex w-full flex-col">
        <img
          src={detailImage}
          alt="Product"
          className="h-[250px] w-full border border-gray-200 rounded-xl object-contain"
        />
        <div className="flex flex-row justify-center gap-2 mb-4 mt-4">
          {PreviewImagesDetails.map((preview, index) => (
            <div
              key={index}
              className={`w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 ${
                detailImage === preview ? "border-gradient" : "border"
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
      {/* Product basic Info */}
      <div>
        <p className="dark:bg-gray-800 dark:text-white text-blue-600 text-sm cursor-pointer hover:underline mt-8 ml-4 font-bold">
          Product Details
        </p>

        <div className="ml-4 mt-4">
          <label className="block text-sm text-gray-700  dark:text-white font-medium mb-1">
            Product Name
          </label>
          <input
            type="text"
            placeholder="SonicBeat Wireless Headphones"
            className="w-[300px] h-12 mb-4 px-2 py-1 border border-gray-300 rounded-xl"
          />

          <h3 className="text-sm font-semibold text-gray-800 mb-1">
            Product Description
          </h3>
          <p className="text-xs w-[285px] text-gray-500 border border-gray-300 rounded-xl p-2">
            Experience powerful sound and deep bass with SonicBeat wireless
            headphones. Engineered with noise isolation, long battery life, and
            a comfortable over-ear fit ideal for music, calls, and gaming.
          </p>
        </div>
      </div>
      {/* Product pricing Info */}
      <div>
        <p className="dark:bg-gray-800 dark:text-white text-blue-600 text-sm cursor-pointer hover:underline mt-8 ml-4 font-bold">
          Product Details
        </p>

        <div className="ml-4 mt-4">
          <label className="block text-sm text-gray-700  dark:text-white font-medium mb-1">
            Product Name
          </label>
          <input
            type="text"
            placeholder="SonicBeat Wireless Headphones"
            className="w-[300px] h-12 mb-4 px-2 py-1 border border-gray-300 rounded-xl"
          />

          <h3 className="text-sm font-semibold text-gray-800 mb-1">
            Product Description
          </h3>
          <p className="text-xs w-[285px] text-gray-500 border border-gray-300 rounded-xl p-2">
            Experience powerful sound and deep bass with SonicBeat wireless
            headphones. Engineered with noise isolation, long battery life, and
            a comfortable over-ear fit ideal for music, calls, and gaming.
          </p>
        </div>
      </div>
      {/* Product Shiping Info */}
      <div>
        <p className="dark:bg-gray-800 dark:text-white text-blue-600 text-sm cursor-pointer hover:underline mt-8 ml-4 font-bold">
          Product Details
        </p>

        <div className="ml-4 mt-4">
          <label className="block text-sm text-gray-700  dark:text-white font-medium mb-1">
            Product Name
          </label>
          <input
            type="text"
            placeholder="SonicBeat Wireless Headphones"
            className="w-[300px] h-12 mb-4 px-2 py-1 border border-gray-300 rounded-xl"
          />

          <h3 className="text-sm font-semibold text-gray-800 mb-1">
            Product Description
          </h3>
          <p className="text-xs w-[285px] text-gray-500 border border-gray-300 rounded-xl p-2">
            Experience powerful sound and deep bass with SonicBeat wireless
            headphones. Engineered with noise isolation, long battery life, and
            a comfortable over-ear fit ideal for music, calls, and gaming.
          </p>
        </div>
      </div>
      {/* Product more Detailed Info */}
      <div>
        <p className="dark:bg-gray-800 dark:text-white text-blue-600 text-sm cursor-pointer hover:underline mt-8 ml-4 font-bold">
          Product Details
        </p>

        <div className="ml-4 mt-4">
          <label className="block text-sm text-gray-700  dark:text-white font-medium mb-1">
            Product Name
          </label>
          <input
            type="text"
            placeholder="SonicBeat Wireless Headphones"
            className="w-[300px] h-12 mb-4 px-2 py-1 border border-gray-300 rounded-xl"
          />

          <h3 className="text-sm font-semibold text-gray-800 mb-1">
            Product Description
          </h3>
          <p className="text-xs w-[285px] text-gray-500 border border-gray-300 rounded-xl p-2">
            Experience powerful sound and deep bass with SonicBeat wireless
            headphones. Engineered with noise isolation, long battery life, and
            a comfortable over-ear fit ideal for music, calls, and gaming.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
