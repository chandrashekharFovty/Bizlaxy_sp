import React, { useState, Fragment, useRef } from "react";
import { FaBold, FaCheck, FaItalic, FaListUl } from "react-icons/fa";
import { TbAbc, TbPhotoPlus, TbEyeSearch } from "react-icons/tb";
import { BsFillPersonFill } from "react-icons/bs";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import post from "../../../../public/bfc5f985ed531a68846cb114afa8811ab03c972d.png";

const CreatePost = ({ onClose }) => {
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [pollOpen, setPollOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ message: "", onConfirm: null });
  const [showImage, setShowImage] = useState(false);
  const [selectedPrivacy, setSelectedPrivacy] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([""]);
  const [allowMultiple, setAllowMultiple] = useState(false);
    const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isList, setIsList] = useState(false);
  const [isUppercase, setIsUppercase] = useState(false);
  const textRef = useRef(null);

  const photoInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const docInputRef = useRef(null);


   const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [taggedPeople, setTaggedPeople] = useState([]);
  const people = ["john_doe", "jane_smith", "alex99", "emma_watson"];

  const addTag = (person) => {
    if (!taggedPeople.includes(person)) {
      setTaggedPeople([...taggedPeople, person]);
    }
  };

  const removeTag = (person) => {
    setTaggedPeople(taggedPeople.filter((p) => p !== person));
  };

  const filteredPeople = people.filter((p) =>
    p.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const navigate = useNavigate();
  const onBack = () => navigate("/feed");

  const openConfirmation = (message, onConfirm) => {
    setDialogContent({ message, onConfirm });
    setConfirmationOpen(true);
  };

  const handleAddOption = () => setOptions(prev => [...prev, ""]);
  const handleOptionChange = (i, value) => {
    const copy = [...options];
    copy[i] = value;
    setOptions(copy);
  };

   const toggleBold = () => setIsBold(!isBold);
  const toggleItalic = () => setIsItalic(!isItalic);
  const toggleList = () => setIsList(!isList);
  const toggleUppercase = () => setIsUppercase(!isUppercase);

  const handleCreatePoll = () => {
    console.log("Question:", question);
    console.log("Options:", options);
    console.log("Allow multiple:", allowMultiple);
    setPollOpen(false);
  };

  const handleFileChange = (e) => {
    console.log("Selected:", e.target.files[0]);
  };

  const toggleUserSelection = (id) => {
    setSelectedUsers(prev =>
      prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id]
    );
  };

  const handleContinuePrivacy = () => {
    console.log("Selected privacy:", selectedPrivacy);
    console.log("Selected users:", selectedUsers);
    setPrivacyOpen(false);
  };


    const [inputValue, setInputValue] = useState("");
  const [suggestions] = useState([
    "#React",
    "#JavaScript",
    "#TailwindCSS",
    "#OpenAI",
    "#Frontend",
    "#WebDev",
  ]);
  const [filtered, setFiltered] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Find the last word starting with #
    const words = value.split(" ");
    const lastWord = words[words.length - 1];
    if (lastWord.startsWith("#")) {
      const filteredSuggestions = suggestions.filter((s) =>
        s.toLowerCase().startsWith(lastWord.toLowerCase())
      );
      setFiltered(filteredSuggestions);
    } else {
      setFiltered([]);
    }
  };

  const handleSelect = (tag) => {
    const words = inputValue.split(" ");
    words[words.length - 1] = tag;
    setInputValue(words.join(" ") + " ");
    setFiltered([]);
  };


  const users = [
    { id: 1, name: "imkr", title: "Follows you", img: "/Hide.jpg" },
    { id: 2, name: "organic__ai", title: "Followed by xhingg_singh07", img: "/Hide1.jpg" },
    { id: 3, name: "im_gr", title: "Followed by xhingg_singh07", img: "/Hide2.jpg" },
    { id: 4, name: "abhi52", title: "Follows you", img: "/Hide3.jpg" },
    { id: 5, name: "soktri", title: "Follows you", img: "/Hide.jpg" },
  ];

  return (
    <>
      {!confirmationOpen && !privacyOpen && (
        <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="dark:dark-color flex">
            {/* Left side image */}
            {showImage && (
              <div className="relative">
                <img src={post} alt="Post preview"
                  className="h-[400px] w-[440px] rounded-l-xl object-cover" />
                <button onClick={() => setShowImage(false)}
                  className="absolute top-4 left-4 text-black text-2xl font-bold">
                  ←
                </button>
              </div>
            )}

            {/* Right side form */}
            <div className="dark:dark-color bg-white rounded-xl shadow-lg p-6 w-[450px] h-[400px] flex flex-col justify-between">
              {/* Header */}
              <div className="flex justify-between items-center mb-2">
                {!showImage && (
                  <button
                    onClick={() => openConfirmation("Discard this post?", onClose)}
                    className="text-gray-700 text-2xl font-bold dark:text-white">
                    ←
                  </button>
                )}
                <button className="text-blue-600 font-semibold hover:underline dark:text-white">
                  Post
                </button>
              </div>

              {/* Toolbar */}
           <div className="flex gap-4 items-center text-gray-700 border border-gray-200 rounded px-3 py-1 dark:text-white">
        <button onClick={toggleBold} className={isBold ? "text-blue-500" : ""}>
          <FaBold />
        </button>
        <button onClick={toggleItalic} className={isItalic ? "text-blue-500" : ""}>
          <FaItalic />
        </button>
        <button onClick={toggleList} className={isList ? "text-blue-500" : ""}>
          <FaListUl />
        </button>
        <button onClick={toggleUppercase} className={isUppercase ? "text-blue-500" : ""}>
          <TbAbc />
        </button>
      </div>

      {/* Editable Text Area */}
      {isList ? (
        <textarea
          ref={textRef}
          contentEditable
          className={`border border-gray-300 rounded p-4 min-h-[100px] focus:outline-none ${
            isBold ? "font-bold" : ""
          } ${isItalic ? "italic" : ""} ${
            isUppercase ? "uppercase" : ""
          }`}
       />
        //   <li>Editable list item</li>
        // </ul>
      ) : (
        <div
          ref={textRef}
          contentEditable
          className={`border border-gray-300 rounded p-4 mt-4 min-h-[100px] focus:outline-none ${
            isBold ? "font-bold" : ""
          } ${isItalic ? "italic" : ""} ${
            isUppercase ? "uppercase" : ""
          }`}
        >
          
        </div>
      )}

<div className="relative w-full">
      <input
        type="text"
        placeholder="Add Hashtags..."
        className="focus:outline-none focus:ring-0 dark:glass-bg-dark dark:text-white border border-gray-200 w-full h-[40px] text-xs rounded px-3 mt-2"
        value={inputValue}
        onChange={handleChange}
      />

      {filtered.length > 0 && (
        <div className="absolute bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded shadow-md w-full mt-1 z-10">
          {filtered.map((tag, index) => (
            <div
              key={index}
              onClick={() => handleSelect(tag)}
              className="px-3 py-1 text-xs cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
              {/* Media Buttons */}
              <div className="dark:dark-color flex justify-between mt-4">
                {["Photo", "Video", "Doc", "Poll"].map(type => (
                  <button key={type}
                    onClick={() => {
                      if (type === "Photo") photoInputRef.current?.click();
                      else if (type === "Video") videoInputRef.current?.click();
                      else if (type === "Doc") docInputRef.current?.click();
                      else if (type === "Poll") setPollOpen(true);
                    }}
                    className="dark:dark-color border border-gray-200 text-xs w-[80px] py-1 flex items-center justify-center gap-1 text-gray-700 hover:text-blue-600">
                    <TbPhotoPlus className="text-base" /> {type}
                  </button>
                ))}
              </div>

              {/* Hidden Inputs */}
              <input ref={photoInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
              <input ref={videoInputRef} type="file" accept="video/*" className="hidden" onChange={handleFileChange} />
              <input ref={docInputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileChange} />

              {/* Additional */}
              <div className="mt-4 space-y-2 text-sm text-black">
                {/* Tag People Button */}
      <p
        onClick={() => setShowModal(true)}
        className="dark:text-gray-400 flex items-center gap-2 cursor-pointer"
      >
        <BsFillPersonFill /> Tag People
      </p>

      {/* Tagged People */}
      <div className="mt-2 flex flex-wrap gap-2">
        {taggedPeople.map((person) => (
          <span
            key={person}
            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs flex items-center gap-1"
          >
            @{person}
            <button onClick={() => removeTag(person)} className="text-red-500">
              ✕
            </button>
          </span>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded p-4 w-80">
            <h3 className="text-sm font-semibold mb-2">Tag People</h3>
            <input
              type="text"
              placeholder="Search people..."
              className="w-full border border-gray-300 dark:border-gray-600 px-2 py-1 rounded text-sm mb-2 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="max-h-40 overflow-y-auto">
              {filteredPeople.map((person) => (
                <div
                  key={person}
                  className="px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-sm"
                  onClick={() => addTag(person)}
                >
                  @{person}
                </div>
              ))}
              {filteredPeople.length === 0 && (
                <p className="text-xs text-gray-500">No matches found.</p>
              )}
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-3 text-xs px-3 py-1 bg-blue-500 text-white rounded"
            >
              Done
            </button>
          </div>
        </div>
      )}
                <p onClick={() => setPrivacyOpen(true)}
                  className="dark:text-gray-400 flex items-center gap-2 cursor-pointer">
                  <TbEyeSearch /> Post Privacy
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Poll Dialog */}
      <Dialog open={pollOpen} onClose={() => setPollOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white dark:glass-bg-dark dark:text-white rounded-xl p-6 w-full max-w-md">
            <Dialog.Title className="text-lg font-bold mb-4">Create a Poll</Dialog.Title>
            <div className="flex flex-col gap-4">
              <input type="text" value={question} onChange={e => setQuestion(e.target.value)}
                placeholder="Ask your question..."
                className="border border-gray-300 rounded px-3 py-2 w-full" />
              {options.map((opt, idx) => (
                <input key={idx} type="text" value={opt}
                  onChange={e => handleOptionChange(idx, e.target.value)}
                  placeholder={`Option ${idx + 1}`}
                  className="border border-gray-300 rounded px-3 py-2 w-full" />
              ))}
              <button onClick={handleAddOption} className="text-blue-600 text-sm hover:underline self-start">
                + Add Option
              </button>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={allowMultiple} onChange={e => setAllowMultiple(e.target.checked)} />
                Allow multiple answers
              </label>
              <button onClick={handleCreatePoll} className="bg-blue-600 text-white rounded px-4 py-2 w-full mt-2">
                Create Poll
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Confirmation Dialog */}
      <Transition appear show={confirmationOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setConfirmationOpen(false)}>
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="dark:dark-color dark:border dark:border-gray-400 bg-white p-6 w-[350px] rounded-xl text-center">
              <Dialog.Title className="dark:text-white text-lg font-semibold mb-4">Discard Post?</Dialog.Title>
              <p className="dark:text-white text-sm mb-6">Are you sure you want to discard this post? Your changes will be lost.</p>
              <div className="flex justify-center gap-4">
                <button onClick={() => setConfirmationOpen(false)} className="border border-gray-500 px-4 py-1 w-full rounded-xl">Cancel</button>
                <button onClick={onBack} className="border border-[#C41C1C] text-[#C41C1C] bg-red-100 px-4 py-1 rounded-xl w-full h-[47px]">Discard</button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>

      {/* Privacy Dialog */}
      <Transition appear show={privacyOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setPrivacyOpen(false)}>
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="dark:dark-color dark:border dark:border-white bg-white p-6 w-[400px] rounded-xl text-center">
              <Dialog.Title className="dark:text-white text-lg font-semibold mb-4">Post Privacy</Dialog.Title>
              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="privacy" value="Public"
                    checked={selectedPrivacy === "Public"}
                    onChange={e => setSelectedPrivacy(e.target.value)} />
                  <span className="dark:text-white">Public</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="privacy" value="Followers"
                    checked={selectedPrivacy === "Followers"}
                    onChange={e => setSelectedPrivacy(e.target.value)} />
                  <span className="dark:text-white">Only Followers</span>
                </label>
                {selectedPrivacy === "Followers" && (
                  <>
                    <input type="text" placeholder="Search for People"
                      className="dark:dark-color border border-gray-400 w-full h-12 text-center mt-4 rounded-xl" />
                    <div className="space-y-4 mt-4">
                      {users.map(user => (
                        <div key={user.id} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <img src={user.img} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                            <div className="pl-2 text-left">
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm text-gray-500">{user.title}</p>
                            </div>
                          </div>
                          <label className="relative w-5 h-5 border border-gray-400 rounded-sm cursor-pointer">
                            <input type="checkbox"
                              checked={selectedUsers.includes(user.id)}
                              onChange={() => toggleUserSelection(user.id)}
                              className="peer opacity-0 absolute w-full h-full cursor-pointer" />
                            <span className="absolute inset-0 rounded-sm peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-purple-600"></span>
                            <FaCheck className="text-white absolute left-0 top-0 w-5 h-5 p-1 opacity-0 peer-checked:opacity-100" />
                          </label>
                        </div>
                      ))}
                      <button onClick={handleContinuePrivacy}
                        className="bg-blue-600 text-white text-sm font-semibold w-full mt-2 h-12 rounded-xl">
                        Continue
                      </button>
                    </div>
                  </>
                )}
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CreatePost;
