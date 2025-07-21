import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Heart, ArrowLeft, Share } from "lucide-react";
import { BiComment } from "react-icons/bi";
import { postgalleryItems } from "./ProfileTabs";

const ProfilePost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const post = postgalleryItems.find((p) => p.id === id);

  if (!post) return <div className="p-4">Post not found.</div>;

  const userProfileImage =
    "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/77ee2a13878e5475d16b71f74e65e9101dc67f8d?placeholderIfAbsent=true";

  return (
    <div className="max-w-md mx-auto p-4">
      {/* Back button */}
      <button
        className="flex items-center gap-2 mb-4 text-blue-600"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={20} /> Back
      </button>

      <h1 className="ml-2 text-xl font-semibold">Post</h1>

      <div className="p-6 border shadow-xl mt-2 rounded-xl">
        {/* User info */}
        <div className="flex items-center mb-4">
          <img src={userProfileImage} alt="User" className="h-8 w-8 rounded-full" />
          <div className="ml-2">
            <h1 className="font-semibold">Michael Roberts</h1>
            <p className="text-xs text-gray-500">2 hours ago</p>
          </div>
        </div>

        {/* Post text */}
        <p className="text-sm text-gray-700 font-semibold mb-1">
          Proud Moment Unlocked! 🏆🏆🏆
        </p>
        <p className="text-xs text-gray-600 mb-3">
          We are thrilled to be recognized for our hard work and dedication.
          This award is a testament to our commitment to excellence and innovation.
        </p>

        {/* Post image */}
        <img
          src={post.imageUrl}
          alt="Post"
          className="w-full rounded-xl mb-4"
        />

        {/* Likes, Comments, Share */}
        <div className="flex justify-between">
          <div className="flex gap-6">
            <div className="flex items-center gap-1">
              <Heart size={20} />
              <span className="text-xs">{post.likes} Likes</span>
            </div>
            <div className="flex items-center gap-1">
              <BiComment size={20} />
              <span className="text-xs">{post.comments} Comments</span>
            </div>
            <div className="flex items-center gap-1">
              <Share size={20} />
              <span className="text-xs">Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePost;
