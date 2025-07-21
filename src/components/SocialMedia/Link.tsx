import React from "react";
import {
  FaFacebookF, FaXTwitter, FaPinterestP,
  FaLinkedinIn, FaEnvelope
} from "react-icons/fa6";

const SocialMediaLinks = ({ url }) => {
  const shareUrl = encodeURIComponent(url || window.location.href);

  return (
    <div className="flex gap-2 bg-white shadow-lg rounded-xl px-3 py-2 z-50">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:bg-blue-100 p-2 rounded-full"
        title="Share on Facebook"
      >
        <FaFacebookF />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:bg-gray-100 p-2 rounded-full"
        title="Share on Twitter"
      >
        <FaXTwitter />
      </a>
      <a
        href={`https://pinterest.com/pin/create/button/?url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:bg-red-100 p-2 rounded-full"
        title="Pin on Pinterest"
      >
        <FaPinterestP />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:bg-blue-100 p-2 rounded-full"
        title="Share on LinkedIn"
      >
        <FaLinkedinIn />
      </a>
      <a
        href={`mailto:?subject=Check this product&body=${shareUrl}`}
        className="text-red-500 hover:bg-red-100 p-2 rounded-full"
        title="Share via Email"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
