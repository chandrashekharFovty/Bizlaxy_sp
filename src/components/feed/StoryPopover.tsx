import React, { useState } from "react";
import { MoreHorizontal, MoreVertical, X } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StoryPopover = () => {
  const [open, setOpen] = useState(false);
  const showToast = (msg) => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  return (
    <div className="dark:dark-color relative">
      <MoreHorizontal
        onClick={() => setOpen(!open)}
        className="cursor-pointer justify-end text-white"
      />
      {open && (
        <div className="dark:dark-color absolute -ml-[330px] mt-[300px] bg-gray-100 border rounded-xl shadow-md z-10 w-[300px] h-[159px] text-sm">
          <div
            className="pl-10 border-b-2"
            onClick={() => showToast("Muted the creator")}
          >
            <div className="cursor-pointer h-[53px] font-medium flex gap-2 items-center">
              <img src="/mute.png" alt="" className="w-5 h-5" />
              Mute This User
            </div>
          </div>
          <div
            className="pl-10 border-b-2"
            onClick={() => showToast("Reported the creator")}
          >
            <div className="cursor-pointer h-[53px] font-medium text-red-600 flex gap-2  items-center">
              <img src="/Report.png" alt="" className="w-5 h-5" />
              Report This Account
            </div>
          </div>
          <div className="pl-10" onClick={() => setOpen(!open)}>
            <div className="cursor-pointer h-[53px] font-normal flex gap-2 items-center"><X/>Cancel</div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default StoryPopover;
