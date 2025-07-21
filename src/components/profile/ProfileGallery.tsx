import React from "react";
import { BiComment } from "react-icons/bi";
import { Heart } from "lucide-react";

interface GalleryItem {
  id: string;
  imageUrl: string;
  likes: number;
  comments: number;
}

interface ProfileGalleryProps {
  items: GalleryItem[];
  onItemClick?: (item: GalleryItem) => void;
}

const ProfileGallery: React.FC<ProfileGalleryProps> = ({ items, onItemClick }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4  [grid-auto-rows:-10px] dark:dark-color">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative group overflow-hidden rounded-lg dark:dark-color"
          style={{ gridRowEnd: `span ${Math.ceil(Math.random() * 10) + 15}` }}
          onClick={() => onItemClick?.(item)}
        >
          <img
            src={item.imageUrl}
            alt={`Gallery ${item.id}`}
            className=" w-[100%] h-[100%] border-2 object-cover"
          />

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-3 text-white opacity-10 group-hover:opacity-100 transition">
  <div className="flex gap-3  rounded px-2 py-1">
    <div className="flex items-center gap-1">
      <Heart size={18} />
      <span className="text-sm">{item.likes}</span>
    </div>
    <div className="flex items-center gap-1">
      <BiComment size={18} />
      <span className="text-sm">{item.comments}</span>
    </div>
  </div>
</div>

        </div>
      ))}
    </div>
  );
};

export default ProfileGallery;
