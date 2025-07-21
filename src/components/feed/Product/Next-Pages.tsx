import Sidebar from "../../layout/Sidebar";
import React, { useEffect, useRef, useState } from "react";
import RightBar from "./RightBar";
import { MdOutlineImage } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { PiEraserDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import useLocalStorageState from "../../../hooks/useFormData";

const NextPages = () => {
  const navigate = useNavigate();
  const [data, setData] = useLocalStorageState("multiFormData", {
    imageFormData: {
      productAllView: "",
      productVideo: "",
      productImages: [],
    },
    pricingFormData: {},
    shipingFormData: {},
    detailedFormData: {},
  });

  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const view360InputRef = useRef(null);
  const bgRemoveInputRef = useRef(null);

  const [images, setImages] = useState<string[]>([]);
  const [video, setVideo] = useState<string | null>(null);
  const [view360, setView360] = useState<string | null>(null);
  const [bgRemoved, setBgRemoved] = useState(null);

  data.imageFormData.productImages = images;
  data.imageFormData.productVideo = video;
  data.imageFormData.productAllView = view360;

  const handleMultipleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(e.target.files) as File[];
    if (images.length + files.length > 5) {
      alert("You can upload a maximum of 5 images.");
      return;
    }
    const fileURLs = files.map((file: File) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...fileURLs]);
  };

  const handleSingleFileChange = (e, setFile) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setFile(fileURL);
    }
  };

  const handleRemoveImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data[imageForm]:", data.imageFormData);
    navigate("/priceInvetory");
  };

  const enterFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  };

  useEffect(() => {
  setData(prev => ({
    ...prev,
    imageFormData: {
      ...prev.imageFormData,
      productImages: images,
      productVideo: video,
      productAllView: view360
    }
  }));
}, [images, video, view360, setData]);
  return (
    <div className="flex gap-10 max-lg:gap-0">
      <div className="hidden max-lg:w-[70px] w-1/6 md:block">
        <Sidebar />
      </div>
      <div className="flex flex-col w-3/6 max-md:w-screen">
        <form onSubmit={handleSubmit}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md min-h-screen flex flex-col">
            <Link
              to="/product"
              className="flex items-center text-lg text-black dark:text-white mb-4"
            >
              &lt;<span className="text-sm ml-2 mt-1">Add Product Images</span>
            </Link>

            <h1 className="text-xl font-bold text-gray-700 dark:text-white mb-6">
              Add Product Images
            </h1>

            <div className="space-y-6 dark:text-white w-full">
              <label
                htmlFor="product-images"
                className="flex justify-between items-center w-full px-4 py-2 border rounded-xl cursor-pointer bg-white hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-white"
                onClick={() => imageInputRef.current?.click()}
              >
                <span className="text-gray-400">
                  Upload Product Images (min 3, max 5)
                </span>
                <MdOutlineImage className="text-xl text-black" />
              </label>
              <input
                id="product-images"
                type="file"
                accept="image/*"
                name="productimages"
                multiple
                hidden
                ref={imageInputRef}
                onChange={handleMultipleImageChange}
              />

              <div className="flex flex-wrap gap-2">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="relative w-[70px] h-[70px] border rounded-xl overflow-hidden"
                  >
                    <img
                      src={img}
                      alt={`upload-${index}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md hover:bg-red-500 hover:text-white transition"
                    >
                      <IoMdClose />
                    </button>
                  </div>
                ))}
              </div>

              <label
                htmlFor="product-video"
                className="flex justify-between items-center w-full px-4 py-2 border rounded-xl cursor-pointer bg-white hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-white"
                onClick={() => videoInputRef.current?.click()}
              >
                <span className="text-gray-400">
                  Upload Product Video (optional)
                </span>
                <IoVideocamOutline className="text-xl text-black" />
              </label>
              <input
                id="product-video"
                type="file"
                name="productvideo"
                accept="video/*"
                hidden
                ref={videoInputRef}
                onChange={(e) => handleSingleFileChange(e, setVideo)}
              />

              <label
                htmlFor="product-360"
                className="flex justify-between items-center w-full px-4 py-2 border rounded-xl cursor-pointer bg-white hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-white"
                onClick={() => view360InputRef.current?.click()}
              >
                <span className="text-gray-400">Upload 360° View</span>
                <MdOutlineImage className="text-xl text-black" />
              </label>
              <input
                id="product-360"
                type="file"
                name="product360view"
                accept="image/*"
                hidden
                ref={view360InputRef}
                onChange={(e) => handleSingleFileChange(e, setView360)}
              />

              <label
                htmlFor="bg-remove-input"
                className="flex justify-between items-center w-full px-4 py-2 border rounded-xl cursor-pointer bg-white hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-white"
                onClick={() => bgRemoveInputRef.current?.click()}
              >
                <span className="text-gray-400">Remove Background</span>
                <PiEraserDuotone className="text-xl text-black" />
              </label>
              <input
                id="bg-remove-input"
                type="file"
                name="bgremoveinput"
                accept="image/*"
                hidden
                ref={bgRemoveInputRef}
                onChange={(e) => handleSingleFileChange(e, setBgRemoved)}
              />

              <div className="mt-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-black text-white rounded"
                  onClick={enterFullScreen}
                >
                  Enter Fullscreen (F11)
                </button>
              </div>
            </div>

            <div className="mt-8 w-full">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 rounded-xl text-white hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="max-md:hidden fixed right-0 top-0 h-full w-1.5/6 z-50 bg-white">
        <RightBar />
      </div>
    </div>
  );
};

export default NextPages;
