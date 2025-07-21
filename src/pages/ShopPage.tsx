import React, { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import AllCategories from "@/components/Shops/AllCategories";
import OneProductCatogory from "@/components/Shops/OneProductCatogory";
import ProductDetailsPage from "@/components/Shops/ProductCardDetails";
import Shop from "@/components/Shops/Shop";
import Categories from '@/components/Shops/Categories'

const ShopPage = () => {
//  const [view, setView] = useState<"shop" | "categories" | "category" | "details">("shop");

  // Functions to handle navigation
  // const handleViewCategories = () => setView("categories");
  // const handleViewOneCategory = () => setView("category");
  // const handleViewDetails = () => setView("details");
  // const handleBackToShop = () => setView("shop");


  return (
    <>
    <div className="max-md:hidden">  <Sidebar /></div>
      <Categories/>
      {/* You can pass these handlers to respective components to trigger transitions */}
      {/* {view === "shop" && <Shop onViewCategories={handleViewCategories} />} */}
      {/* {view === "categories" && <AllCategories onBack={handleBackToShop} onViewCategory={handleViewOneCategory} />} */}
      {/* {view === "category" && <OneProductCatogory onBack={handleViewCategories} onViewDetails={handleViewDetails} />} */}
      {/* {view === "details" && <ProductDetailsPage onBack={handleViewOneCategory} />} */}

    </>
  );
};

export default ShopPage;
