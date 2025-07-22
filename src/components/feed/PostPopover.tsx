import React, { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import{PostPopoverSaveBadge}  from "../ui/SavePostBadge";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdNotificationsOff, IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineInsertLink } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export function PostModal() {
  const [open, setOpen] = useState(false);

  const showToast = (msg: string) => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  const actions = [
    {
      icon: <PostPopoverSaveBadge/>,
      label: "Save for Later",
      msg: "Post Saved",
    },
    {
      icon: <IoShareSocialOutline className="text-2xl" />,
      label: "Share Post",
      msg: "Post Shared",
    },
    {
      icon: <IoMdNotificationsOutline className="text-2xl" />,
      label: "Turn On Notifications",
      msg: "On Notifications",
    },
    {
      icon: <IoMdNotificationsOff className="text-2xl" />,
      label: "Mute the User",
      msg: "Mute the Creator",
    },
    {
      icon:<MdOutlineInsertLink className="text-2xl " />,
      label: "Copy Post Link URL",
      msg: "Link Copied",
    },
    {
      icon:<CgProfile className="text-2xl" />,
      label: "View Profile",
      msg: "View Creator Profile",
    },
    {
      icon: <img src="/Report.png" alt="report" className="w-5 h-5" />,
      label: "Report this Account",
      msg: "Report the Creator",
      danger: true,
    },
  ];

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="rounded-md py-2 cursor-pointer justify-center text-black dark:text-white relative text-sm z-10"
      >
        <MoreHorizontal  />
      </button>

      <Dialog open={open} onClose={setOpen} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/50 transition-opacity" />

        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <DialogPanel className="w-full max-w-md mx-auto  bg-white rounded-2xl border shadow-xl overflow-hidden">
            <div className="dark:dark-color  bg-white py-1 px-0">
              <div className="dark:dark-color  text-sm text-[#050505]">
                {actions.map(({ icon, label, msg, danger }, i) => (
                  <div
                    key={i}
                    onClick={() => showToast(msg)}
                    className="border-b last:border-b-0 px-6 cursor-pointer"
                  >
                    <div
                      className={`flex items-center h-14 gap-3 font-medium ${
                        danger ? "text-red-500" : ""
                      }`}
                    >
                      {icon}
                      <span>{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </DialogPanel>
        </div>

        <ToastContainer />
      </Dialog>
    </div>
  );
}

export default PostModal;
