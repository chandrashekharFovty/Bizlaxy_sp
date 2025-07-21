import React from "react";

interface CategoryItem {
  imageSrc: string;
  name: string;
  imageStyles?: string;
  containerStyles?: string;
}

interface CategorySectionProps {
  items: CategoryItem[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ items }) => {
  return (
    <div className="flex items-stretch cursor-pointer h-[170px] gap-4 flex-wrap mt-3.5 max-md:mr-0.5 overflow-hidden">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-stretch flex-1 ">
          <div className={`bg-white border px-[22px] rounded-xl w-[157px] h-[140px] border-[rgba(218,218,218,1)] border-solid ${item.containerStyles || ''}`}>
            <img
              src={item.imageSrc}
              className={`object-contain ${item.imageStyles || 'aspect-[0.79] w-[114px] z-10'}`}
              alt={item.name}
            />
          </div>
          <div className="text-black text-base font-normal text-center self-center mt-[5px]">
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
