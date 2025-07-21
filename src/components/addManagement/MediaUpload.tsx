import React, { useRef, useState } from "react";
import Sidebar from "../layout/Sidebar";
import { Link } from "react-router-dom";
import { ImageIcon, VideoIcon } from "lucide-react";
import { MdExpandLess } from "react-icons/md";
import PollMore from "../../../public/PollMore.png";

function MediaUploadPage() {
  const [formData, setFormData] = useState({
    headline: "",
    description: "",
    hashtags: "",
    cta: "",
    url: "",
  });

  const [selectedAdType, setSelectedAdType] = useState(null);
  const [mediaFile, setMediaFile] = useState(null);
  const [mediaType, setMediaType] = useState("");
  const [selectedAdTypes, setSelectedAdTypes] = useState([]);


  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageClick = () => {
    imageInputRef.current.click();
  };

  const handleVideoClick = () => {
    videoInputRef.current.click();
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setMediaFile(URL.createObjectURL(file));
      setMediaType(type);
    }
  };

  const adOptions = [
    {
      title: "Single Image Ad",
      desc: "Choose a High Quality Image \n (JPG/PNG)",
      img: "/Vector.png",
    },
    {
      title: "Carousel Ad",
      desc: "Upload multiple Images or Videos",
      img: "/Vector4.png",
    },
    {
      title: "Video Ad",
      desc: "Upload Video \n (Max 1 Min)",
      img: "/Vector1.png",
    },
    {
      title: "Text Ad",
      desc: "Write a Short Headline \n and Brief Message",
      img: "/Vector2.png",
    },
    {
      title: "Document Ad",
      desc: "Share Detailed Content \n (PDF, PPT, DOC)",
      img: "/Vector3.png",
    },
    {
      title: "Eduvid Ad",
      desc: "Add Your Eduvid (Max 60 Sec)",
      img: "/Vector5.svg",
    },
  ];


  
  const isComplete =
  Object.values(formData).every((val) => val.trim() !== "") &&
  mediaFile &&
  selectedAdTypes.length > 0;


  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="dark:dark-color ml-[230px] max-lg:ml-10 max-md:ml-0 flex-1 px-8 relative">
    

        <div className="flex ">
          {/* Main Form & Ad Types */}
          <div className="flex-1 max-md:pr-0 pr-[360px]">
                {/* Back Link */}
        <Link
          to="/visibility"
          className="flex items-center font-semibold text-black py-4"
        >
          <MdExpandLess className="transform rotate-[-90deg] text-2xl" />
          <span className="font-semibold text-sm">Back to Custom Targets</span>
        </Link>
            {/* Ad Types */}
        <div className="grid grid-cols-3 gap-4">
  {adOptions.map((ad, idx) => (
    <div
      key={idx}
      onClick={() => {
        if (selectedAdTypes.includes(idx)) {
          setSelectedAdTypes(selectedAdTypes.filter((item) => item !== idx));
        } else {
          setSelectedAdTypes([...selectedAdTypes, idx]);
        }
      }}
      className={`h-[230px] flex flex-col items-center justify-center rounded-xl p-4 bg-white shadow-xl cursor-pointer border transition-all
        ${
          selectedAdTypes.includes(idx)
            ? "border-blue-600 ring-2 ring-blue-200 shadow-2xl"
            : "border-gray-200"
        } hover:border-blue-400`}
    >
      <img src={ad.img} alt={ad.title} className="w-20 object-cover" />
      <h2 className="font-semibold mt-8">{ad.title}</h2>
      <p className="text-xs text-center text-gray-600 mt-2 whitespace-pre-line">
        {ad.desc}
      </p>
    </div>
  ))}
</div>


            {/* Upload & Form */}
            <div className="mt-10 p-6">
              <h3 className="text-lg font-semibold mb-2">Media Upload</h3>
              <p className="text-sm text-gray-600 mb-4">
                Add creative assets for your ad in high-quality formats.
              </p>

              <div className="flex gap-4 mb-6">
                <button
                  onClick={handleImageClick}
                  className="px-4 py-2 flex items-center border border-gray-300 rounded-xl hover:bg-gray-100"
                >
                  <ImageIcon className="mr-2" /> Image
                </button>
                <input
                  type="file"
                  accept="image/*"
                  ref={imageInputRef}
                  onChange={(e) => handleFileChange(e, "image")}
                  className="hidden"
                />

                <button
                  onClick={handleVideoClick}
                  className="px-4 py-2 flex items-center border border-gray-300 rounded-xl hover:bg-gray-100"
                >
                  <VideoIcon className="mr-2" /> Video
                </button>
                <input
                  type="file"
                  accept="video/*"
                  ref={videoInputRef}
                  onChange={(e) => handleFileChange(e, "video")}
                  className="hidden"
                />
              </div>

              <form className="space-y-4">
                <h1 className="font-semibold text-xl">
                  Add Engagement Element{" "}
                  <span className="font-semibold text-xl text-gray-400">
                    (Optional)
                  </span>
                </h1>
                <div className="flex">
                  <p className="text-sm ">Enable Interaction</p>
                  <label className="inline-flex items-center mb-5 cursor-pointer ml-4">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-400 transition-colors after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gradient-to-l from-blue-600 to-purple-600 after:border after:border-gray-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                  </label>
                </div>

                <button className="flex border border-gray-400 rounded-xl w-20 h-8 pl-2 pt-1">
                  <img src={PollMore} className="w-6 h-6 mr-2" /> Poll
                </button>

                <div>
                  <h1 className="font-semibold text-xl mt-2">Add Ad Content</h1>
                  <label className="block text-sm font-medium mb-1 mt-4">
                    Headline
                  </label>
                  <input
                    type="text"
                    name="headline"
                    value={formData.headline}
                    onChange={handleChange}
                    placeholder="e.g., Boost your startup visibility today!"
                    className="focus:outline-none dark:dark-color  dark:border dark:border-gray-300  w-full border border-gray-300 rounded-xl p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your product or offer"
                    className="focus:outline-none dark:dark-color  dark:border dark:border-gray-300  w-full border border-gray-300 rounded-xl p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Hashtags
                  </label>
                  <input
                    type="text"
                    name="hashtags"
                    value={formData.hashtags}
                    onChange={handleChange}
                    placeholder="#startup #growth #Bizlaxy"
                    className="focus:outline-none dark:dark-color  dark:border dark:border-gray-300  w-full border border-gray-300 rounded-xl p-2"
                  />
                </div>

                <div className="">
                  <h1 className="font-semibold mt-6">Call-to-Action</h1>
                  <label className="block text-sm font-medium mb-1 mt-2">
                    Call to Action
                  </label>
                  <input
                    type="text"
                    name="cta"
                    value={formData.cta}
                    onChange={handleChange}
                    placeholder="Learn More, Apply Now, etc."
                    className="focus:outline-none dark:dark-color  dark:border dark:border-gray-300  w-full border border-gray-300 rounded-xl p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Destination URL
                  </label>
                  <input
                    type="text"
                    name="url"
                    value={formData.url}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                    className="focus:outline-none dark:dark-color  dark:border dark:border-gray-300  w-full border border-gray-300 rounded-xl p-2"
                  />
                </div>
              </form>

              <div className="flex justify-end">
                <button
                  disabled={!isComplete}
                  className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>

          {/* Fixed Preview */}
          {isComplete && (
            <div className="fixed dark:dark-color  dark:border dark:border-gray-300  right-8 w-[360px] mt-4 h-screen bg-white shadow-xl rounded-xl border border-gray-200 p-6">
              {mediaType === "image" && (
                <img
                  src={mediaFile}
                  alt="Selected"
                  className="w-full h-[300px] object-cover mb-4 rounded-xl"
                />
              )}
              {mediaType === "video" && (
                <video
                  src={mediaFile}
                  controls
                  className="w-full h-[300px] mb-4 rounded-xl"
                />
              )}

              <p className="mb-2 text-sm font-semibold">{formData.headline}</p>
              <p className="mb-2 text-xs text-gray-500">
                {formData.description}
              </p>
              <p className="mb-2 text-sm">{formData.hashtags}</p>
              <p className="mb-2 text-sm">{formData.cta}</p>
              <p className="mb-2 text-xs">{formData.url}</p>
              <button className="bg-blue-600 w-full text-white rounded-xl h-10 mt-4">
                Learn More
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default MediaUploadPage;
