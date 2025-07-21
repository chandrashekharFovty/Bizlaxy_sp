import React from "react";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: string;
  supplier: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  price,
  supplier,
}) => {
  return (
    <div className="bg-white border flex-col items-center flex-1 pb-5 rounded-[14px] border-[rgba(224,224,224,1)] border-solid grid grid-cols-1">
      <img
        src={imageSrc}
        className="aspect-[1] object-contain w-[223px] max-w-full rounded-[15px_15px_0px_0px]"
        alt={title}
      />
      <div className="w-[186px] max-w-full my-2 mx-3">
        <div className="w-full">
          <div className="w-full text-[#050505]">
            <div>
              <div className="text-[#050505] text-ellipsis whitespace-nowrap overflow-hidden font-normal">
                {title}
              </div>
              <div className="text-[#050505] font-semibold mt-[7px]">
                {price}
              </div>
              <div className="text-[#050505] text-ellipsis overflow-hidden whitespace-nowrap text-sm font-medium decoration-solid decoration-auto underline-offset-auto underline mt-[7px]">
                {supplier}
              </div>
            </div>
          </div>
          <button className="text-white whitespace-nowrap overflow-hidden self-stretch w-40 bg-gradient-to-r from-blue-500 to-purple-500 font-medium mt-3 ml-2 px-6 py-[7px] rounded-xl md:ml-0 mr-0">
  Contact Supplier
</button>


        </div>
      </div>
    </div>
  );
};

export default ProductCard;
