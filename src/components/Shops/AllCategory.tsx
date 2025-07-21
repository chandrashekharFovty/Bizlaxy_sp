import React, { useState } from "react";
import Category from "./Categories";
import { useNavigate } from "react-router-dom";


function CategorySection () {
  const allCategories = [
    {
      id: 1,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/d4ef8c28a68dc9cd16d46529e6825ac3712902eb?placeholderIfAbsent=true",
      name: "Apparal",
      imageStyles: "aspect-[0.79] object-contain w-[114px] max-md:h-14 max-md:w-14 z-10",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/aed665fdeee21ad3fcad8914291ad4110b668f4a?placeholderIfAbsent=true",
      name: "Gadgets",
      imageStyles: "aspect-[1.11] object-contain max-md:h-14 max-md:w-14  w-[129px]",
      containerStyles:
        "flex flex-col items-stretch justify-center px-[15px] py-[13px]",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/90521a2588bc3fda5f4a38c6dc1dda0c8e06d537?placeholderIfAbsent=true",
      name: "Home",
      imageStyles: "aspect-[1.34] object-contain max-md:h-14 max-md:w-14 w-[129px] rounded-xl",
      containerStyles:
        "flex flex-col items-stretch justify-center px-[15px] py-[23px]",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/1af2cd5c37ad4acabcd5ee5f53793f51aa5efa94?placeholderIfAbsent=true",
      name: "Appliances",
      imageStyles: "aspect-[0.96] object-contain max-md:h-12 max-md:w-12 w-[119px]",
      containerStyles:
        "flex flex-col items-stretch justify-center px-[19px] py-[9px] max-md:pr-5",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/8d3300d9b9643b4693251751fe666e170dda1100?placeholderIfAbsent=true",
      name: "Sports",
      imageStyles: "aspect-[1] object-contain max-md:h-14 max-md:w-14 w-[119px]",
      containerStyles:
        "flex flex-col items-stretch justify-center px-[19px] py-[11px] max-md:pr-5",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/b155928f-6ee8-4614-9f06-4873a2959f09?placeholderIfAbsent=true",
      name: "Furniture",
      imageStyles: "aspect-[1.12] object-contain max-md:h-12 max-md:w-12 w-[159px] bg-white rounded-xl",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/2eb6ac3f9e4175f4f9fd263c2db171effb587888?placeholderIfAbsent=true",
      name: "Appliances",
      imageStyles: "aspect-[0.79] object-contain max-md:h-14 max-md:w-14 w-[114px] z-10",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/c4168adb49f5ed81eb98f0016541da1f9a3eb3ee?placeholderIfAbsent=true",
      name: "Mobiles",
      imageStyles: "aspect-[0.83] object-contain max-md:h-10 max-md:w-10 w-20",
      containerStyles:
        "flex flex-col items-stretch justify-center px-8 py-[22px] max-md:px-5",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/e5b3c9bf95fd45ab6cb46b2870c949070bd2d140?placeholderIfAbsent=true",
      name: "Food, Health",
      imageStyles: "aspect-[1] object-contain max-md:h-12 max-md:w-14 w-[110px]",
      containerStyles:
        "flex flex-col items-stretch justify-center px-[25px] py-4 max-md:px-5",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/5b16ac87786f40d33d5998431d09b2192c243068?placeholderIfAbsent=true",
      name: "Beauty",
      imageStyles: "aspect-[1] object-contain max-md:h-14 max-md:w-14 w-[120px]",
      containerStyles:
        "flex flex-col items-stretch justify-center px-5 py-[11px]",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/ca799a11e294a5672ce821bea8dbe28912bd9227?placeholderIfAbsent=true",
      name: "Electronics",
      imageStyles: "aspect-[1] object-contain max-md:h-14 max-md:w-14 w-[130px]",
      containerStyles: "pb-[11px] px-3.5",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/67ab89101997e2de889e55395bdfb57a3e5f2345?placeholderIfAbsent=true",
      name: "Toys",
      imageStyles: "aspect-[1] object-contain max-md:h-14 max-md:w-14 w-[119px]",
      containerStyles:
        "flex flex-col items-stretch justify-center px-5 py-[11px]",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/d127a9c16e82e2358869f29a9d4b41823bbbacf7?placeholderIfAbsent=true",
      name: "Accessories",
      imageStyles: "aspect-[1.08] object-contain max-md:h-14 max-md:w-14 w-[122px]",
      containerStyles:
        "flex flex-col items-stretch justify-center px-[21px] py-3.5 max-md:pl-5",
    },
  ];

  const products = [
  {
    id: 1,
    name: "Shirt",
    category: "Hoodies",
    image: "/Shirt11.png", 
  },
   {
    id: 1,
    name: "Jocket",
    category: "Apparal",
    image: "/Shirt7.png", 
  },
   {
    id: 1,
    name: "T-shirt",
    category: "Apparal",
    image: "/Shirt10.png", 
  },
   {
    id: 1,
    name: "Shirt",
    category: "Apparal",
    image: "/Shirt5.png", 
  },
   {
    id: 1,
    name: "Jeans",
    category: "Apparal",
    image: "/pant1.png", 
  },
   {
    id: 1,
    name: "Cargo",
    category: "Apparal",
    image: "/pant2.png", 
  },
   {
    id: 1,
    name: "Tracksuits",
    category: "Apparal",
    image: "/Shirt9.png", 
  },
    {
    id: 1,
    name: "Polo's",
    category: "Apparal",
    image: "/Shirt8.png", 
  },
    {
    id: 1,
    name: "Sweatshirt",
    category: "Apparal",
    image: "/Shirt1.png", 
  },
    {
    id: 1,
    name: "Formal",
    category: "Apparal",
    image: "/Shirt4.png", 
  },
    {
    id: 1,
    name: "Casual",
    category: "Apparal",
    image: "/Shirt2.png", 
  },
    {
    id: 1,
    name: "Ethnic",
    category: "Apparal",
    image: "/Shirt3.png", 
  },
// Shorts
    {
      id: 2,
      name: "Smartwatch",
      category: "Gadgets",
      image:
        "https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/your-gadget-image",
    },
    
  ];

  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate=useNavigate()

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleProductClick = (product) => {
    navigate("/shopproduct", {
      state: { category: selectedCategory, product },
    });
  };

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : [];

  const categoriesToShow = showAll ? allCategories : allCategories.slice(0, 11);

  return (
    <div className="m-6 flex flex-wrap gap-4 max-md:gap-2 w-full">
      {selectedCategory ? (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product)}
            className="cursor-pointer"
          >
            <div className="w-[160px] h-[190px] max-md:w-20 max-md:h-20 border rounded-xl flex flex-col items-center justify-center max-md:rounded-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-[150px] h-[150px] max-md:w-14 max-md:h-14 mb-2"
              />
            </div>
            <span className="text-lg max-md:text-xs font-medium flex items-center justify-center mt-2 text-center">
              {product.name}
            </span>
          </div>
        ))
      ) : (
        <div className="flex flex-wrap gap-4 max-md:gap-4 w-full">
          {categoriesToShow.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.name)}
              // className={`w-[170px] h-[200px] border rounded-xl flex flex-col items-center justify-center cursor-pointer hover:shadow-md max-md:rounded-full max-md:w-20 max-md:h-20 ${
              //   category.containerStyles || ""
              // }`}
            >
                   <div className="w-[160px] h-[190px] border rounded-xl flex flex-col items-center justify-center max-md:rounded-full max-md:w-16 max-md:h-16">
               <img
                src={category.imageSrc}
                alt={category.name}
                className={`${category.imageStyles || "w-20 h-20"} mb-2`}
              />
             </div>
             <span className="text-lg max-md:text-xs font-medium flex items-center justify-center mt-2 text-center">
                {category.name}
              </span>
            </div>
          ))}
  <div>
          {!showAll && (
            <div
              onClick={() => setShowAll(true)}
              // className="w-[160px] h-[200px] border rounded-xl flex flex-col items-center justify-center cursor-pointer hover:shadow-md max-md:rounded-full max-md:w-20 max-md:h-20"
            >
                <div className="w-[170px] h-[190px] border rounded-xl flex flex-col items-center justify-center max-md:rounded-full max-md:w-16 max-md:h-16">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/22e8f5e19f8a469193ec854927e9c5a6/6734b0e54b816b35f99bf47af898586a0e1636c4?placeholderIfAbsent=true"
                alt="More"
                className="w-10 h-10 mb-2 max-md:w-5 max-md:h-5"
              /></div>
              <span className="text-lg max-md:text-xs font-medium flex items-center justify-center mt-2 text-center">
             More
              </span>
            </div>
          )}
    </div>
       </div>
      )}
    </div>
  );
};





export default CategorySection;