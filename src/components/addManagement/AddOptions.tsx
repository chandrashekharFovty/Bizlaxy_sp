import React from "react";

const AddOptions= ({id, title, selected, onClick }) => {
  return (
    <div
      className={`dark:dark-color border w-full h-[55px] px-[35px] bg-white  rounded-[12px]  cursor-pointer transition duration-200 ${
        selected ? "border-solid border-[#a89bfc]" : "bg bg-[#BED6FF]"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[10px]">
          <h4 className="font-semibold text-gray-800 text-sm mt-2">{title}</h4>
          <span className="hidden">{id}</span>
        </div>

        <div
          className={`w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center mt-2 ${
            selected ? "border-[#1C4BC4] bg-gradient-to-r from-blue-500 to-purple-600" : "border-gray-300"
          }`}
        >   
        <div className={`w-4 h-4 border-2 border-[#BED6FF] rounded-full ${selected ? "bg-white " : "bg-trasparent"}`}></div>
        </div>
      </div>
    </div>
  );
};

export default AddOptions;
