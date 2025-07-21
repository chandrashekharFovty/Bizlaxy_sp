import React from "react";
import Sidebar from "../layout/Sidebar";
import ProductCardList from "./MostViewedProductsCard";


const OneProductCatogory = ({ onBack, onViewDetails }) => {
  // Products data
  const productsItem = [
    {
      image:
        "../../../public/productPreview.png",
      name: "Customized logo Design for Men and Women Classic and Versatile",
      price: "₹430/10 pieces",
      supplier: "Suzhou Dreamcolor Textile Co., Ltd.",
    },
    {
      image:
        "../../../public/hoodie02.png",
      name: "Customized logo Design for Men and Women Classic and Versatile",
      price: "₹130/10 pieces",
      supplier: "Suzhou Dreamcolor Textile Co., Ltd.",
    },
    {
      image:
        "../../../public/hoodie03.png",
      name: "Customized logo Design for Men and Women Classic and Versatile",
      price: "₹250/10 pieces",
      supplier: "Suzhou Dreamcolor Textile Co., Ltd.",
    },
    {
      image:
        "../../../public/hoodie04.png",
      name: "Customized logo Design for Men and Women Classic and Versatile ",
      price: "₹430/10 pieces",
      supplier: "Suzhou Dreamcolor Textile Co., Ltd.",
    },
    {
      image:
        "../../../public/hoodie05.png",
      name: "Customized logo Design for Men and Women Classic and Versatile",
      price: "₹130/10 pieces",
      supplier: "Suzhou Dreamcolor Textile Co., Ltd.",
    },
  ];

  return (
    <div className="bg-white pr-5 overflow-x-hidden pb-[50px]">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <Sidebar />

        <div className="w-full h-full ml-[268px] max-md:w-full max-md:ml-0">
          {/* categories section */}
          <div className="flex items-center gap-[40px_100px] justify-between flex-wrap mt-[30px] max-md:max-w-full max-md:mr-[3px]">
            <h2 className="text-[#050505] text-xl font-bold self-stretch my-auto">
              Categories
            </h2>
          </div>
          {/* categories section */}
          <div className="flex items-center gap-[40px_100px] justify-between flex-wrap mt-[30px] max-md:max-w-full max-md:mr-[3px]">
            <p className="text-[#050505] text-sm font-bold self-stretch cursor-pointer my-auto">
              Shop <span onClick={onBack}>&gt; Apparel</span><span> &gt; Hoodies</span>
            </p>
          </div>

          {/* Product listings */}
          <div onClick={onViewDetails}>
              <ProductCardList products={productsItem}/>
          </div>
          {/* Product listings */}
          <div onClick={onViewDetails}>
              <ProductCardList products={productsItem}/>
          </div>
          {/* Product listings */}
          <div onClick={onViewDetails}>
              <ProductCardList products={productsItem}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProductCatogory;
