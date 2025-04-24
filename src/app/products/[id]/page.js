"use client";
import React, { useEffect, use, useState } from "react";
import { fetchProductDetailAPI } from "@/api/products";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import NavBar from "@/components/navBar";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/app/redux/features/cartSlice";
import { useRouter } from "next/navigation";

const isInCart = (cart, productId) =>
  cart?.some((item) => item.id === productId);

export default function ProductDetailsPage({ params }) {
  const { id } = use(params);
  const router = useRouter()

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const fetchData = () => {
    fetchProductDetailAPI(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  };

  const handleToggleCart = (product) => {
    if (isInCart(cart, product.id)) {
      dispatch(removeFromCart(product));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div>
      <NavBar />
      <div className="p-6 max-w-7xl mx-auto">
        {loading ? (
          <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start animate-pulse">
            {/* Image Skeleton */}
            <div className="w-full max-w-sm lg:max-w-md h-[400px] bg-gray-200 rounded-xl" />

            {/* Details Skeleton */}
            <div className="flex-1 space-y-4 w-full">
              <div className="h-6 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/4" />
              <div className="h-5 bg-gray-200 rounded w-1/3" />
              <div className="h-6 bg-gray-200 rounded w-1/6" />
              <div className="h-24 bg-gray-200 rounded w-full" />
              <div className="h-10 bg-gray-300 rounded w-40" />
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
            {/* Product Image */}
            <div className="w-full max-w-sm lg:max-w-md group overflow-hidden rounded-xl  shadow">
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="flex-1 space-y-4">
              <h1 className="text-2xl font-semibold text-gray-800">
                {product.title}
              </h1>
              <p className="text-sm text-gray-500">{product.category}</p>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  <IoIosStar className="text-green-600" />
                  {product.rating.rate}
                </span>
                <span className="text-sm text-gray-500">
                  ({product.rating.count} reviews)
                </span>
              </div>

              <p className="text-xl font-bold text-blue-600">
                ${product.price}
              </p>

              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-gray-800">
                  Product Description
                </h2>
                <p className="text-gray-600 text-[15px] leading-relaxed tracking-wide">
                  {product.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:space-x-4 sm:items-center">
                {/* Add to Cart / Remove from Cart Button */}
                <button
                  onClick={() => handleToggleCart(product)}
                  className={`flex-1 sm:flex-none min-w-[150px] px-6 py-2 ${
                    isInCart(cart, product.id)
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-green-600 hover:bg-green-700"
                  } transition text-white text-sm rounded-lg cursor-pointer`}
                >
                  {isInCart(cart, product.id)
                    ? "Remove Item"
                    : "Add to Cart"}
                </button>

                {/* Checkout Button, visible only when product is in cart */}
                {isInCart(cart, product.id) && (
                  <button
                    onClick={() => router.push("/checkout")} // Navigate to checkout page
                    className="mt-4 sm:mt-0 sm:w-auto w-full px-6 py-2 bg-[#1A2348] text-white text-sm rounded-lg cursor-pointer transition hover:bg-[#16203a]"
                  >
                    Go to Checkout
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
