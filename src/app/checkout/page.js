"use client";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/features/cartSlice";
import { IoIosStar } from "react-icons/io";

export default function Checkout() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <div className="min-h-screen bg-gray-50 p-4 md:p-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-8 lg:h-[calc(100vh-80px)]">
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 rounded-xl shadow-md sticky top-10">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              <div className="flex justify-between text-lg font-medium mb-4">
                <span>Total</span>
                <span>
                  $
                  {cartItems.length > 0
                    ? cartItems
                        .reduce((acc, item) => acc + item.price, 0)
                        .toFixed(2)
                    : "0.00"}
                </span>
              </div>
              <button
                disabled={cartItems.length === 0}
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition disabled:opacity-50"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>

          <div className="flex-1 lg:overflow-y-auto lg:pr-2">
            <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center gap-4 bg-white rounded-xl p-4 shadow-sm mb-4"
              >
                <div className="relative w-32 h-32 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <h1 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h1>
                  <p className="text-sm text-gray-500">{item.category}</p>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      <IoIosStar className="text-green-600" />
                      {item.rating.rate}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({item.rating.count} reviews)
                    </span>
                  </div>

                  <p className="text-xl font-bold text-blue-600">
                    ${item.price}
                  </p>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item))}
                  className="mt-2 md:mt-0 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
            {cartItems.length === 0 && (
              <p className="text-center text-gray-500 mt-10">
                Your cart is empty.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
