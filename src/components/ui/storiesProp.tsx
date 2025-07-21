import React from 'react';
import { X, MoreVertical, Heart, MessageCircle, Send } from 'lucide-react';
import StoryPopover from './StoryPopover';
import { StoryItem } from './Story';

interface Props {
  story: StoryItem;
  onClose: () => void;
}

const StoryModal: React.FC<Props> = ({ story, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg max-w-md w-full p-4">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm font-semibold">{story.name}</div>
          <div className="flex items-center gap-2">
            <StoryPopover />
            <X onClick={onClose} className="cursor-pointer" />
          </div>
        </div>

        {/* Image */}
        <img src={story.imageSrc} alt={story.name} className="rounded-lg mb-4 max-h-80 object-cover w-full" />

        {/* Actions */}
        <div className="flex gap-4 mb-3">
          <Heart className="cursor-pointer" />
          <MessageCircle className="cursor-pointer" />
          <Send className="cursor-pointer ml-auto" />
        </div>

        {/* Reply box */}
        <input
          type="text"
          placeholder="Reply..."
          className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
        />
      </div>
    </div>
  );
};

export default StoryModal;
