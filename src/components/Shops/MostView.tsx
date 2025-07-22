import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const mostViewedItems = [
  {
    image: "pant.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Fashion Corp",
  },
  {
    image: "Tshirts.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Gadget World",
  },
  {
    image: "Shirt.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Beauty Co",
  },
  {
    image: "pant.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Fashion Corp",
  },
  {
    image: "Tshirts.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Gadget World",
  },
  {
    image: "Shirt.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Beauty Co",
  },
  {
    image: "pant.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Fashion Corp",
  },
  {
    image: "Tshirts.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Gadget World",
  },
  {
    image: "Shirt.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Beauty Co",
  },
];

const mostViewedItems1 = [
  {
    image: "pant.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Fashion Corp",
  },
  {
    image: "Tshirts.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Gadget World",
  },
  {
    image: "Shirt.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Beauty Co",
  },
  {
    image: "pant.png",
    description: "Customized logo Design for Men and Women",
    price: "₹430/10 pieces",
    supplier: "Fashion Corp",
  },
];

const MostView = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const itemsToShow = showAll
    ? mostViewedItems
    : isMobile
    ? mostViewedItems.slice(0, 3)
    : mostViewedItems.slice(0, 5);

  const itemsToShow1 = mostViewedItems1; // always show all 4

  return (
    <>
      {/* MOST VIEWED */}
      <div className="mt-8 max-md:mt-2">
        <div className="flex px-4 mb-3">
          <h2 className="text-lg font-semibold">Most Viewed</h2>
          {!showAll && (
            <button
              className="text-blue-500 ml-auto text-sm"
              onClick={() => setShowAll(true)}
            >
              See all
            </button>
          )}
        </div>

        <div className="px-3 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
      
          {itemsToShow.map((item, index) => (
               
            <div
              key={index}
              className="border max-md:h-[250px] p-2 rounded-xl text-center max-md:text-left text-sm hover:shadow cursor-pointer"
            > <Link to="/shopproduct">
              <img
                src={item.image}
                alt={item.description}
                className="w-full h-[200px] max-md:h-[100px] object-contain mb-1"
              />
              <p className="mt-2 max-md:text-[10px]">{item.description}</p>
              <p className="dark:text-white max-md:text-xs mt-2 text-black font-bold">
                {item.price}
              </p>
              <button className="w-full mt-2 bg-gradient-to-r from-blue-800 to-purple-700 text-white text-sm max-md:text-xs px-2 py-2 rounded-xl">
                Enquire Now
              </button>  </Link>
            </div>
          ))}
        
        </div>
      </div>

      {/* TOP PICK'S */}
      <div className="lg:hidden mt-10 bg-gradient-to-t from-purple-400 to-blue-600 rounded-xl p-4">
        <h1 className="text-white font-semibold text-xl mb-4">Top Pick's</h1>

        <div className="grid grid-cols-2 gap-4">
          {itemsToShow1.map((item, index) => (
            <div
              key={index}
              className="bg-white p-2 rounded-xl text-center text-sm hover:shadow"
            >
              <img
                src={item.image}
                alt={item.description}
                className="w-full h-[150px] object-contain mb-1"
              />
              <p className="mt-2 text-xs">{item.description}</p>
              <p className="text-black font-bold text-xs mt-1">{item.price}</p>
              <button className="mt-2 bg-gradient-to-r h-10 w-32 from-blue-800 to-purple-700 text-white text-xs px-2 py-1 rounded-xl">
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MostView;
