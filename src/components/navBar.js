import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineShoppingCart, HiOutlineTrash } from "react-icons/hi";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/app/redux/features/cartSlice";
import Link from "next/link";

export default function NavBar() {
  const BarData = [
    { Icon: <FaPhone />, value: "+123 456 789" },
    { Icon: <FaTelegramPlane />, value: "sample@gmail.com" },
    { Icon: <FaShoppingBag />, value: "Free shipping & Free Returns" },
  ];

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="bg-black p-1.5 hidden md:flex justify-around">
          {BarData?.map((item, i) => (
            <div key={i} className="flex gap-2.5 items-center">
              <p className="text-white">{item.Icon}</p>
              <p className="text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <nav className="bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-400 text-white shadow-md px-4 py-3">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
            <div className="text-xl font-bold text-gray-800">
              <Link href="/">
              <Image
                src="/assets/logoecom.png"
                alt="logo"
                width={100}
                height={100}
                className="w-16 sm:w-24 md:w-28 lg:w-36"
              />
              </Link>
            </div>

            <div className="relative group flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
              <div className="flex gap-1.5 items-center text-gray-700 hover:text-black cursor-pointer">
                <FaUserCircle className="text-xl" />
                <p className="text-sm">Sign in / Sign up</p>
              </div>

              <div className=" flex items-center gap-1.5 text-gray-700 hover:text-black cursor-pointer">
                {/* Cart Icon with Badge */}
                <div className="relative">
                  <HiOutlineShoppingCart className="text-2xl" />
                  {cart?.length > 0 && (
                    <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full leading-none font-bold">
                      {cart.length}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium">Cart</p>

                {cart?.length > 0 && (
                  <div
                    className="absolute top-full right-0 mt-3 w-80 bg-white border border-gray-200 rounded-xl shadow-lg z-50 
                    opacity-0 pointer-events-none transition-all duration-300 ease-in-out 
                    hidden md:group-hover:block md:opacity-100 md:pointer-events-auto"
                  >
                    <div className="max-h-60 overflow-y-auto divide-y divide-gray-100">
                      {cart.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between px-4 py-3"
                        >
                          <div className="flex items-center gap-3">
                            <Image
                              src={item.image}
                              alt={"img"}
                              height={50}
                              width={50}
                              className="w-12 h-12 object-cover rounded-md border border-gray-200"
                            />
                            <span className="text-sm font-medium text-gray-800">
                              {item.title}
                            </span>
                          </div>
                          <button
                            onClick={() => dispatch(removeFromCart(item))}
                            className="text-red-500 cursor-pointer hover:text-red-700"
                            title="Remove"
                          >
                            <HiOutlineTrash className="text-lg" />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="px-4 py-3 border-t border-gray-200">
                      <Link href="/checkout">
                        <button className="w-full bg-black text-white text-sm font-semibold py-2 rounded-lg hover:bg-gray-800 cursor-pointer transition">
                          View Cart
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="pt-[130px]" />
    </>
  );
}
