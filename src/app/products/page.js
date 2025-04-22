"use client";
import React, { useEffect, useState } from "react";
import { fetcProductsAPI } from "@/api/products";
import { IoIosStar } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "@/components/navBar";
import { addToCart, removeFromCart } from "../redux/features/cartSlice";

const isInCart = (cart, productId) =>
  cart?.some((item) => item.id === productId);

export default function Products() {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const router = useRouter();

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const handleToggleCart = (product) => {
    if (isInCart(cart, product.id)) {
      dispatch(removeFromCart(product));
    } else {
      dispatch(addToCart(product));
    }
  };

  const fetchData = () => {
    fetcProductsAPI().then((data) => {
      setProductsList(data);
      setLoading(false);
    });
  };

  return (
    <div>
      <NavBar />
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 shadow-sm animate-pulse flex flex-col items-center"
                >
                  <div className="w-full max-w-[160px] aspect-square bg-gray-200 rounded mb-4" />
                  <div className="w-3/4 h-4 bg-gray-200 rounded mb-2" />
                  <div className="w-1/2 h-4 bg-gray-200 rounded mb-2" />
                  <div className="w-1/3 h-4 bg-gray-200 rounded mb-4" />
                  <div className="w-1/2 h-8 bg-gray-300 rounded" />
                </div>
              ))
            : productsList.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out p-4 flex flex-col items-center"
                >
                  <div className="relative w-full max-w-[160px] aspect-square mb-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="w-full flex flex-col items-center gap-2">
                    <h2 className="text-sm font-medium text-gray-800 text-center break-words line-clamp-2">
                      {product.title}
                    </h2>

                    <div className="flex items-center gap-2">
                      <span className="text-green-600 font-semibold bg-green-100 px-2 py-0.5 text-xs rounded-full inline-flex items-center gap-1">
                        <IoIosStar className="w-4 h-4 fill-green-600 text-green-600" />
                        {product.rating.rate}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({product.rating.count})
                      </span>
                    </div>

                    <p className="text-base font-bold text-blue-600">
                      ${product.price}
                    </p>

                    <div className="flex flex-wrap sm:flex-nowrap justify-center w-full gap-3 sm:gap-4">
                      <button
                        onClick={() => router.push(`/products/${product.id}`)}
                        className="flex-1 sm:flex-none px-4 py-2 min-w-[150px] bg-blue-600 cursor-pointer text-white text-sm rounded-lg hover:bg-blue-700 transition"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => handleToggleCart(product)}
                        className={`flex-1 sm:flex-none min-w-[150px] px-6 py-2 ${
                          isInCart(cart, product.id)
                            ? "bg-red-600 hover:bg-red-700"
                            : "bg-green-600 hover:bg-green-700"
                        } transition text-white text-sm rounded-lg cursor-pointer`}
                      >
                        {isInCart(cart, product.id)
                          ? "Remove from Cart"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
