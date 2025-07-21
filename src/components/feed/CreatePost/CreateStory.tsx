import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { TfiGallery } from 'react-icons/tfi';
import { TbTextRecognition } from 'react-icons/tb';

const CreateStory = ({ onClose }) => {
  const [selectedType, setSelectedType] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [storyText, setStoryText] = useState('');

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
      setSelectedType('media');
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const resetSelection = () => {
    setSelectedType(null);
    setSelectedFile(null);
    setStoryText('');
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[999]" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300" leave="ease-in duration-200"
          enterFrom="opacity-0" enterTo="opacity-100"
          leaveFrom="opacity-100" leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300" leave="ease-in duration-200"
              enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
              leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="dark:glass-bg-dark dark:border dark:border-gray-400 w-[440px] h-[320px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                {/* ✕ Close Button */}
                <button
                  onClick={closeModal}
                  className=" dark:text-white absolute top-2 ml-[380px] text-gray-800 hover:text-red-500 text-lg font-bold"
                >
                  ✕
                </button>

                {/* ← Back Button */}
                {selectedType && (
                  <button
                    onClick={resetSelection}
                    className="absolute top-2 left-2 text-sm text-blue-500 hover:underline"
                  >
                    ← Back
                  </button>
                )}

                {/* Selection View */}
                {!selectedType && (
                  <div className="flex gap-4 mt-8  justify-center">
                    {/* Image/Video Upload */}
                    <label htmlFor="file-upload">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-[180px] h-[240px] rounded-[20px] flex flex-col items-center justify-center text-white cursor-pointer hover:scale-105 transition-transform">
                        <TfiGallery className="text-3xl mb-2" />
                        <p className="text-sm">Image/Video</p>
                      </div>
                      <input
                        id="file-upload"
                        type="file"
                        accept="image/*,video/*"
                        className="sr-only"
                        onChange={handleFileSelect}
                      />
                    </label>

                    {/* Text Story */}
                    <div
                      className="w-[180px] h-[240px] rounded-[20px] p-[2px] bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => setSelectedType('text')}
                    >
                      <div className="w-full h-full bg-white rounded-[18px] flex flex-col items-center justify-center">
                        <TbTextRecognition className="text-black text-4xl mb-2" />
                        <p className="text-sm text-black">Text</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Text Story Mode */}
                {selectedType === 'text' && (
                  <div className="mt-10 flex flex-col items-center justify-center">
                    <textarea
                      value={storyText}
                      onChange={(e) => setStoryText(e.target.value)}
                      className="w-full h-[200px] border p-4 rounded-lg outline-blue-400 resize-none scrollbar-hide"
                      placeholder="Write your story here..."
                    />
                    <button
                      onClick={() => alert(`Story submitted: ${storyText}`)}
                      className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                      Post Story
                    </button>
                  </div>
                )}

                {/* Media Preview Mode */}
                {selectedType === 'media' && selectedFile && (
                  <div className="mt-10 flex flex-col items-center justify-center">
                    <img
                      src={selectedFile}
                      alt="Selected Preview"
                      className="max-h-[200px] rounded-lg mb-4"
                    />
                    <button
                      onClick={() => alert('Media story submitted!')}
                      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                      Post Story
                    </button>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CreateStory;
