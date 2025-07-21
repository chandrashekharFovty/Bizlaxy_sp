import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import ShopCarousel from "./ShopCarousel";
import MostView from "./MostView";

// Product List (rename this to allProducts instead of allCategories for clarity)
const allProducts = [
  {
    id: 1,
    image: "/pant.png",
    // name: "Customized logo Design for Men and Women",
    // price: "₹430/10 pieces",
    // supplier: "Fashion Corp",
    category: "Apparel"
  },
  {
    id: 2,
    image: "/Tshirts.png",
    // name: "Customized logo Design for Men and Women",
    // price: "₹430/10 pieces",
    // supplier: "Fashion Corp",
    category: "Apparel"
  },
  {
    id: 3,
    image: "/Shirt.png",
    // name: "Customized logo Design for Men and Women",
    // price: "₹430/10 pieces",
    // supplier: "Fashion Corp",
    category: "Apparel"
  },
  {
    id: 4,
    image: "/pant.png",
    // name: "Customized logo Design for Men and Women",
    // price: "₹430/10 pieces",
    // supplier: "Fashion Corp",
    category: "Apparel"
  },
  {
    id: 5,
    image: "/Tshirts.png",
    // name: "Customized logo Design for Men and Women",
    // price: "₹430/10 pieces",
    // supplier: "Fashion Corp",
    category: "Apparel"
  },
  {
    id: 6,
    image: "/Shirt.png",
    // name: "Customized logo Design for Men and Women",
    // price: "₹430/10 pieces",
    // supplier: "Fashion Corp",
    category: "Apparel"
  },
  {
    id: 7,
    image: "/pant.png",
    // name: "Customized logo Design for Men and Women",
    // price: "₹430/10 pieces",
    // supplier: "Fashion Corp",
    category: "Apparel"
  },
  {
    id: 8,
    image: "/Tshirts.png",
    // name: "Customized logo Design for Men and Women",
    // price: "₹430/10 pieces",
    // supplier: "Fashion Corp",
    category: "Apparel"
  },
  {
    id: 9,
    image: "/Shirt.png",
    // name: "Customized logo Design for Men and Women",
    // price: "₹430/10 pieces",
    // supplier: "Fashion Corp",
    category: "Apparel"
  },
  {
    id: 10,
    image: "/pant.png",
    // name: "Customized logo Design for Men and Women",
    // price: "₹430/10 pieces",
    // supplier: "Fashion Corp",
    category: "Apparel"
  },
  {
    id: 11,
    image: "/Tshirts.png",
    // name: "Customized logo Design for Men and Women",
    // price: "₹430/10 pieces",
    // supplier: "Fashion Corp",
    category: "Apparel"
  },
  {
    id: 12,
    image: "/Shirt.png",
    // name: "Customized logo Design for Men and Women",
    // price: "₹430/10 pieces",
    // supplier: "Fashion Corp",
    category: "Home"
  },
   {
    id: 12,
    image: "/Shirt.png",
    // name: "Customized logo Design for Men and Women",
    // price: "₹430/10 pieces",
    // supplier: "Fashion Corp",
    category: "Clothing"
  }
];

const ProductList = () => {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category);
  const [showAll, setShowAll] = useState(false);

const itemsPerRow = 6;
const maxItemsToShow = itemsPerRow * 2



  const filteredProducts = allProducts.filter(
    (product) =>
      product.category &&
      product.category.toLowerCase() === decodedCategory.toLowerCase()
  );

  const productsToShow = showAll
    ? filteredProducts
    : filteredProducts.slice(0, maxItemsToShow);

  return (
    <>
      <Sidebar />
      <div className="ml-[250px]">
        <div className="dark:bg-gray-800 dark:text-white h-[40px] my-5 flex justify-between items-center">
          <div className="dark:border-solid dark:border-[#a89bfc] dark:bg-gray-800 dark:text-white w-[95%] rounded-2xl mt-4 h-full flex border focus-within:border-[#BED6FF] border-gray-200 px-4">
            <img src="/searchdark.png" alt="Search Icon" className="w-5 h-5 my-auto" />
            <input
              type="text"
              placeholder="Search Products..."
              className="dark:bg-gray-800 dark:text-white outline-none ml-1 px-2 text-[16px] w-full h-full"
            />
          </div>
          <div className="dark:border-solid dark:border-[#a89bfc] text-center rounded-full flex justify-center items-center mt-4 border w-12 h-12 cursor-pointer">
            <img src="/isShop.png" alt="Shop" className="w-6 h-6" />
          </div>
        </div>

        <ShopCarousel />

        {/* Product Section */}
        <div className="p-4 w-full rounded-xl">
          <button>
            <Link to={`/Shop`} className="text-sm text-blue-600 hover:underline">
              &lt; Back to Apparel
            </Link>
          </button>

          <h2 className="text-xl font-semibold mb-4">Products in: {decodedCategory}</h2>

          {productsToShow.length > 0 ? (
            <>
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {productsToShow.map((product) => (
                  <Link to={`/product/${product.id}`} key={product.id}>
                    <div className="rounded-xl border p-3 flex flex-col items-center hover:shadow-md cursor-pointer">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-32 object-contain mb-2"
                        onError={(e) => {
                          e.target.src = "/fallback.png";
                        }}
                      />
                      <p className="text-sm text-center font-medium">{product.name}</p>
                      <p className="text-gray-600 text-sm">{product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Show All / Show Less Button */}
              {filteredProducts.length > maxItemsToShow && (
                <div className="mt-4">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-blue-600 underline"
                  >
                    {showAll ? "Show Less" : "Show All"}
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className="text-gray-500">No products found for this category.</p>
          )}
        </div>
      </div>
      <MostView/>
    </>
  );
};

export default ProductList;
