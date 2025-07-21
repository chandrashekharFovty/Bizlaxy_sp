import React, { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { X } from "lucide-react";

const PostCreation = ({ step, setStep }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="absolute w-screen h-screen inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-lg p-4 rounded-lg relative">
          <div
            className="w-full flex cursor-pointer justify-end"
            onClick={() => setOpen(true)}
          >
            <X />
          </div>
          <Dialog open={open} onClose={setOpen}>
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />
            <DialogPanel>
              {step === "post" && (
                <>
                  <h2 className="text-xl font-semibold mb-4">Create a Post</h2>
                  <textarea
                    className="w-full h-24 p-2 border rounded"
                    placeholder="What's on your mind?"
                  />
                  <div className="flex justify-around mt-4">
                    <button onClick={() => setStep("doc")}>📄 Document</button>
                    <button onClick={() => setStep("event")}>📅 Event</button>
                    <button onClick={() => setStep("job")}>💼 Job</button>
                    <button onClick={() => setStep("poll")}>📊 Poll</button>
                  </div>
                </>
              )}

              {step === "doc" && (
                <div>
                  <h3 className="text-lg font-semibold">Upload a Document</h3>
                  <input type="file" className="mt-2" />
                </div>
              )}
              {step === "event" && (
                <div>
                  <h3 className="text-lg font-semibold">Create Event</h3>
                  <input
                    type="text"
                    placeholder="Event Title"
                    className="block w-full mt-2 p-2 border rounded"
                  />
                  <input
                    type="datetime-local"
                    className="block w-full mt-2 p-2 border rounded"
                  />
                </div>
              )}
              {step === "job" && (
                <div>
                  <h3 className="text-lg font-semibold">Post a Job</h3>
                  <input
                    type="text"
                    placeholder="Job Title"
                    className="block w-full mt-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="block w-full mt-2 p-2 border rounded"
                  />
                </div>
              )}
              {step === "poll" && (
                <div>
                  <h3 className="text-lg font-semibold">Create a Poll</h3>
                  <input
                    type="text"
                    placeholder="Poll Question"
                    className="block w-full mt-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Option 1"
                    className="block w-full mt-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Option 2"
                    className="block w-full mt-2 p-2 border rounded"
                  />
                </div>
              )}
            </DialogPanel>
          </Dialog>
        </div>
      </div>
    </>
  );
};

const DocumentUpload = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold">Upload a Document</h3>
      <input type="file" className="mt-2" />
    </div>
  );
};
const EventForm = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold">Create Event</h3>
      <input
        type="text"
        placeholder="Event Title"
        className="block w-full mt-2 p-2 border rounded"
      />
      <input
        type="datetime-local"
        className="block w-full mt-2 p-2 border rounded"
      />
    </div>
  );
};

const JobForm = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold">Post a Job</h3>
      <input
        type="text"
        placeholder="Job Title"
        className="block w-full mt-2 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Company Name"
        className="block w-full mt-2 p-2 border rounded"
      />
    </div>
  );
};

const PollForm = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold">Create a Poll</h3>
      <input
        type="text"
        placeholder="Poll Question"
        className="block w-full mt-2 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Option 1"
        className="block w-full mt-2 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Option 2"
        className="block w-full mt-2 p-2 border rounded"
      />
    </div>
  );
};

export default PostCreation;
