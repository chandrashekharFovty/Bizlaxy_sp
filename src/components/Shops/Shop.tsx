import React from "react";
import CategorySection from "./CategoryProductsCard";
import ProductCard from "./None";
import Sidebar from "../layout/Sidebar";
import {SearchInput} from "../ui/SearchInput";
import ShopCarousel from "./ShopCarousel";
import ProductCardList from "./MostView";

const Shop: React.FC = ({ onViewCategories }) => {  
  // First row of categories
  const categoryItems1 = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/d4ef8c28a68dc9cd16d46529e6825ac3712902eb?placeholderIfAbsent=true",
      name: "Apparel",
      imageStyles: "aspect-[0.79] object-contain w-[114px] z-10",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/aed665fdeee21ad3fcad8914291ad4110b668f4a?placeholderIfAbsent=true",
      name: "Gadgets",
      imageStyles: "aspect-[1.11] object-contain w-[129px]",
      containerStyles:
        "flex flex-col items-stretch justify-center px-[15px] py-[13px]",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/90521a2588bc3fda5f4a38c6dc1dda0c8e06d537?placeholderIfAbsent=true",
      name: "Home",
      imageStyles: "aspect-[1.34] object-contain w-[129px] rounded-xl",
      containerStyles:
        "flex flex-col items-stretch justify-center px-[15px] py-[23px]",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/1af2cd5c37ad4acabcd5ee5f53793f51aa5efa94?placeholderIfAbsent=true",
      name: "Appliances",
      imageStyles: "aspect-[0.96] object-contain w-[119px]",
      containerStyles:
        "flex flex-col items-stretch justify-center px-[19px] py-[9px] max-md:pr-5",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/8d3300d9b9643b4693251751fe666e170dda1100?placeholderIfAbsent=true",
      name: "Sports",
      imageStyles: "aspect-[1] object-contain w-[119px]",
      containerStyles:
        "flex flex-col items-stretch justify-center px-[19px] py-[11px] max-md:pr-5",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/b155928f-6ee8-4614-9f06-4873a2959f09?placeholderIfAbsent=true",
      name: "Furniture",
      imageStyles: "aspect-[1.12] object-contain w-[159px] bg-white rounded-xl",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2eb6ac3f9e4175f4f9fd263c2db171effb587888?placeholderIfAbsent=true",
      name: "Appliances",
      imageStyles: "aspect-[0.79] object-contain w-[114px] z-10",
    },
  ];

  // Second row of categories
  const categoryItems2 = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/c4168adb49f5ed81eb98f0016541da1f9a3eb3ee?placeholderIfAbsent=true",
      name: "Mobiles",
      imageStyles: "aspect-[0.83] object-contain w-20",
      containerStyles:
        "flex flex-col items-stretch justify-center px-8 py-[22px] max-md:px-5",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/e5b3c9bf95fd45ab6cb46b2870c949070bd2d140?placeholderIfAbsent=true",
      name: "Food, Health",
      imageStyles: "aspect-[1] object-contain w-[110px]",
      containerStyles:
        "flex flex-col items-stretch justify-center px-[25px] py-4 max-md:px-5",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/5b16ac87786f40d33d5998431d09b2192c243068?placeholderIfAbsent=true",
      name: "Beauty",
      imageStyles: "aspect-[1] object-contain w-[120px]",
      containerStyles:
        "flex flex-col items-stretch justify-center px-5 py-[11px]",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/ca799a11e294a5672ce821bea8dbe28912bd9227?placeholderIfAbsent=true",
      name: "Electronics",
      imageStyles: "aspect-[1] object-contain w-[130px]",
      containerStyles: "pb-[11px] px-3.5",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/67ab89101997e2de889e55395bdfb57a3e5f2345?placeholderIfAbsent=true",
      name: "Toys",
      imageStyles: "aspect-[1] object-contain w-[119px]",
      containerStyles:
        "flex flex-col items-stretch justify-center px-5 py-[11px]",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/d127a9c16e82e2358869f29a9d4b41823bbbacf7?placeholderIfAbsent=true",
      name: "Accessories",
      imageStyles: "aspect-[1.08] object-contain w-[122px]",
      containerStyles:
        "flex flex-col items-stretch justify-center px-[21px] py-3.5 max-md:pl-5",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/6734b0e54b816b35f99bf47af898586a0e1636c4?placeholderIfAbsent=true",
      name: "More",
      imageStyles: "aspect-[1] object-contain w-11",
      containerStyles:
        "flex flex-col items-center justify-center px-8 py-[49px] max-md:px-5",
    },
  ];

  // Products data
  const productsItem = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/49c49bd0e5d9628f98411f3efec9b390d71c3b23?placeholderIfAbsent=true",
    name: "Customized logo Design for Men and Women Classic and Versatile",
    price: "₹430/10 pieces",
    supplier: "Suzhou Dreamcolor Textile Co., Ltd.",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/46ea9b8772bcd4cf328c4bc33347a519450944be?placeholderIfAbsent=true",
    name: "Customized logo Design for Men and Women Classic and Versatile",
    price: "₹130/10 pieces",
    supplier: "Suzhou Dreamcolor Textile Co., Ltd.",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/fa3419cc3d8104c7ff988f3c3aaf852fcc9292ae?placeholderIfAbsent=true",
    name: "Customized logo Design for Men and Women Classic and Versatile",
    price: "₹250/10 pieces",
    supplier: "Suzhou Dreamcolor Textile Co., Ltd.",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/b0ae075f9f425d442243b0f283a62ee2e52f906d?placeholderIfAbsent=true",
    name: "Customized logo Design for Men and Women Classic and Versatile ",
    price: "₹430/10 pieces",
    supplier: "Suzhou Dreamcolor Textile Co., Ltd.",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/a4a785192a0802a4c4ec2437065d12f9c4a0c091?placeholderIfAbsent=true",
    name: "Customized logo Design for Men and Women Classic and Versatile",
    price: "₹130/10 pieces",
    supplier: "Suzhou Dreamcolor Textile Co., Ltd.",
  },
];


  return (
    <div className="bg-white pr-5 ml-[268px] max-md:ml-0 overflow-x-hidden pb-[50px]">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-full h-full max-md:w-full ">
          <div className="w-full mt-10 max-md:max-w-full max-md:mt-10">
            <SearchInput />
            <ShopCarousel />
            {/* categories section */}
            <div className="flex items-center gap-[40px_100px] justify-between flex-wrap mt-[30px] max-md:max-w-full max-md:mr-[3px]">
              <h2 className="text-[#050505] text-xl font-bold self-stretch my-auto">
                Categories
              </h2>
              <a
                href="#"
                className="text-[#1C4BC4] text-sm font-semibold self-stretch my-auto"
              onClick={onViewCategories}>
                See all
              </a>
            </div>

            <div className="">
              {/* First row of categories */}
              <CategorySection items={categoryItems1} />
            </div>

            <div className="">
              {/* Second row of categories */}
              <CategorySection items={categoryItems2} />
            </div>

            {/* Most Viewed section */}
            <div className="flex items-center gap-[40px_100px] justify-between flex-wrap mt-[30px] max-md:max-w-full max-md:mr-[3px]">
              <h2 className="text-[#050505] text-xl font-bold self-stretch my-auto">
                Most Viewed
              </h2>
              <a
                href="#"
                className="text-[#1C4BC4] text-sm font-semibold self-stretch my-auto"
              >
                See all
              </a>
            </div>

            {/* Product listings */}
            <ProductCardList products={productsItem}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
