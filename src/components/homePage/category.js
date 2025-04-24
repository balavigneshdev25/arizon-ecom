import { fetcProductsAPI } from "@/api/products";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaThumbsUp, FaTrophy } from "react-icons/fa";

import { GrDeliver, GrShield } from "react-icons/gr";

function Category() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetcProductsAPI().then((data) => {
      const displayedProducts = data.slice(0, 10);
      setProducts(displayedProducts);
    });
  };

  console.log(products, "sksk");

  const industryData = [
    {
      title: "Super-Fast, Hassle Free Delivery",
      icon: <GrDeliver />,
      desc: "Delivered within 1-3 days, with all tax & duties paid within Canada. The price you see online is the price you pay.",
    },
    {
      title: "Unrivalled Customer Service",
      icon: <FaThumbsUp />,
      desc: "With over 75 years' industry experience, you can trust Quality Bearings Online.",
    },
    {
      title: "Multi-Award-Winning",
      icon: <FaTrophy />,
      desc: "Winners Of The Queen's Award For Enterprise For International Trade, 2023 Lloyds Bank Employer Of The Year.",
    },
    {
      title: "World Renowned Brands",
      icon: <GrShield />,
      desc: "Quality branded products from the world’s leading brands such as SKF, Kluber, Timken, FAG, and many more.",
    },
  ];

  return (
    <div className="m-6">
      <p className="text-center text-[#1A2348] font-bold text-3xl font-sans">
        Industry Leading Bearings Supplier
      </p>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {industryData.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-4">
              <p className="text-8xl text-[#172346]">{item.icon}</p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-lg text-[#172346] font-bold text-center">
        Top Products
      </p>
      <p className="text-center text-[#191919] p-4">
        Whatever bearing, adhesive, lubricant or grease you are after at Quality
        Bearings Online we are bound to stock it. As a leading bearings supplier
        we offer products from trusted industry manufacturers. Discover some of
        our top product below.
      </p>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="px-2"
            >
              <div className="flex flex-col items-center text-center  p-4 rounded-xl  transition cursor-pointer">
                <div className="relative w-24 h-24 mb-3 rounded-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
                <h3 className="text-md font-extrabold line-clamp-2 hover:text-[#ca9618] transition-colors">
                  {product.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
