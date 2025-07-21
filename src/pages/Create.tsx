import React, { useState, useRef } from 'react';
import CreateStory from "../components/feed/CreatePost/CreateStory";
import CreatePost from "../components/feed/CreatePost/CreatePost";
import Product from "../components/feed/Product/Product";
import { Link, useNavigate } from 'react-router-dom';
import addpost from '../../public/addpost.png';
import addeduvid from '../../public/addeduvid.png';
import addpitch from '../../public/addpitch.png';
import addproduct from '../../public/addProduct.png';
import addStory from '../../public/addStory.png';

function Create() {
  const [showCreatePopover, setShowCreatePopover] = useState(true);
  const [showCreateStoryPopover, setShowCreateStoryPopover] = useState(false);
  const [showCreatePostPopover, setShowCreatePostPopover] = useState(false);
  const [showCreateEduvidPopover, setShowCreateEduvidPopover] = useState(false);
  const [showCreateProductPopover, setShowCreateProductPopover] = useState(false);

  const createStoryRef = useRef(null);
  const createPostRef = useRef(null);
  const createEduvidRef = useRef(null);
  const createProductRef = useRef(null);

  const Navigate=useNavigate()

  return (
    <div className="relative">

      {/* Create Story Dialog */}
      {/* {showCreateStoryPopover && (
        <CreateStory
          onClose={() => {
            setShowCreateStoryPopover(false);
            setShowCreatePopover(true);
          }}
        />
      )} */}

      {/* Create Post Dialog */}
      {showCreatePostPopover && (
        <CreatePost
          onClose={() => {
            Navigate("/createPost")
            setShowCreatePostPopover(false);
            setShowCreatePopover(true);
          }}
        />
      )}

      {/* Create Product Dialog */}
      {showCreateProductPopover && (
        <Product
          onClose={() => {
            setShowCreateProductPopover(false);
            setShowCreatePopover(true);
          }}
        />
      )}

      {/* Main Create Popover */}
      {showCreatePopover && (
        <div className="dark:glass-bg-dark rounded-xl absolute w-[300px] shadow-lg shadow-gray-400 h-[200px] left-full -translate-y-1/2 ml-4 bg-white shadow-lg p-2">
          <div className="text-[18px] font-bold px-3 py-2 mt-3">
            Post Creation Type
          </div>

          <div className="w-[307px] rounded-3xl mt-2 px-4 flex flex-col">

            {/* STORY */}
            {/* <div ref={createStoryRef}>
              <button
                className="w-full h-[48px] text-left px-2 py-1 dark:hover:text-gray-300 dark:text-white flex gap-5"
                onClick={() => {
                  setShowCreateStoryPopover(true);
                  setShowCreatePopover(false);
                }}
              >
                <img src={addStory} alt="Add Story" className="w-7 h-7" />
                Story
              </button>
            </div> */}

            {/* POST */}
            <div ref={createPostRef}>
              <button
                className="w-full h-[48px] text-left px-2 py-1 dark:hover:text-gray-300 dark:text-white flex gap-5"
                onClick={() => {
                  setShowCreatePostPopover(true);
                  setShowCreatePopover(false);
                }}
              >
                <img src={addpost} alt="Add Post" className="w-7 h-7" />
                Post
              </button>
            </div>

            {/* EDOVID */}
            {/* <div ref={createEduvidRef} className="relative">
              <button
                className="w-full h-[48px] text-left px-2 py-1 dark:hover:text-gray-300 dark:text-white flex gap-5"
                onClick={() => {
                  setShowCreateEduvidPopover(!showCreateEduvidPopover);
                }}
              >
                <img src={addeduvid} alt="Add Eduvid" className="w-7 h-7" />
                Eduvid
              </button>
              {showCreateEduvidPopover && (
                <div className="absolute left-full top-0 ml-2 bg-white shadow-md rounded-md p-4 z-[60] w-[250px]">
                  <p className="font-semibold mb-2">Eduvid Options</p>
                  <p className="text-sm text-gray-600">Create educational videos</p>
                </div>
              )}
            </div> */}

            {/* PITCH */}
            {/* <div ref={createProductRef} className="relative">
              <button
                className="w-full h-[48px] text-left px-2 py-1 dark:hover:text-gray-300 dark:text-white flex gap-5"
                onClick={() => {
                  // Pitch logic or pitch dialog can be handled here
                  alert('Pitch option clicked'); // or setShowCreatePitchPopover(true)
                }}
              >
                <img src={addpitch} alt="Add Pitch" className="w-7 h-7" />
                Pitch
              </button>
            </div> */}

            {/* PRODUCT */}
            <div className="relative">
           <Link to="/product">
              <button
                className="w-full h-[48px] text-left px-2 py-1 dark:hover:text-gray-300 dark:text-white flex gap-5"
                onClick={() => {
                  setShowCreateProductPopover(true);
                  setShowCreatePopover(false);
                }}
              >
                <img src={addproduct} alt="Add Product" className="w-7 h-7" />
                Product
              </button></Link>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Create;
