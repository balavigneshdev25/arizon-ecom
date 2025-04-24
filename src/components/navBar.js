"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { FaPhone, FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import { HiOutlineShoppingCart, HiOutlineTrash } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/app/redux/features/cartSlice";
import { menuItems } from "@/constant/menuItem";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      <header className="w-full z-50 fixed top-0 left-0">
        {/* First Row */}
        <div className="flex justify-end items-center bg-black text-white py-2 px-4">
          <div className="ml-4">
            <Link href="#">
              <span className="text-sm cursor-pointer hover:underline">About Us</span>
            </Link>
          </div>
          <div className="ml-4">
            <Link href="#">
              <span className="text-sm cursor-pointer hover:underline">Contact Us</span>
            </Link>
          </div>
          <div className="ml-4 flex items-center gap-1">
            <FaPhoneAlt className="text-sm" />
            <span>123 456 789</span>
          </div>
        </div>

        {/* Second Row */}
        <div className="relative flex items-center justify-between w-full py-3 bg-white px-4">
          {/* Left side: hamburger + logo (desktop view) */}
          <div className="flex items-center md:gap-4 gap-0 md:w-auto w-1/3">
            <button
              className="md:hidden text-2xl text-black"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
            {/* Logo - visible in desktop normally, centered in mobile */}
            <div className="hidden md:block ml-4">
              <Link href="/">
                <Image
                  src="/assets/logoecom.png"
                  alt="logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>

          {/* Centered logo only on mobile */}
          <div className="block md:hidden absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <Image
                src="/assets/logoecom.png"
                alt="logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Right side: signin + cart */}
          <div className="flex items-center gap-4 md:w-auto w-1/3 justify-end">
            <Link href="/signin">
              <FaUserCircle className="text-gray-600 text-xl" />
            </Link>
            <div className="relative group">
              <Link href="/checkout">
                <HiOutlineShoppingCart className="text-2xl text-gray-800" />
              </Link>
              {cart?.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
              {cart?.length > 0 && (
                <div className="absolute right-0 w-80 bg-white border rounded-xl shadow-lg z-50 hidden group-hover:block">
                  <div className="max-h-60 overflow-y-auto divide-y">
                    {cart.map((item, index) => (
                      <div key={index} className="flex items-center justify-between px-4 py-3">
                        <div className="flex items-center gap-3">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={50}
                            height={50}
                            className="w-12 h-12 object-cover rounded-md border"
                          />
                          <span className="text-sm font-medium text-gray-800">
                            {item.title}
                          </span>
                        </div>
                        <button
                          onClick={() => dispatch(removeFromCart(item))}
                          className="text-red-500 hover:text-red-700"
                        >
                          <HiOutlineTrash className="text-lg" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-3 border-t">
                    <Link href="/checkout">
                      <button className="w-full bg-black text-white text-sm font-semibold py-2 rounded-lg hover:bg-gray-800">
                        View Cart
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Third Row - Desktop Menu */}
        <div
          className={`md:flex items-center justify-center gap-6 hidden py-4 bg-[#1A2348] text-white ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {menuItems.map((menu, i) => (
            <li
              key={i}
              className="relative group text-sm font-semibold hover:text-teal-600 list-none"
              onMouseEnter={() => setOpenDropdown(menu.title)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="flex items-center gap-1 cursor-pointer">
                {menu.title}
                <IoIosArrowDown className="text-xs" />
              </div>
              {openDropdown === menu.title && (
                <div className="absolute top-full left-0 w-[400px] bg-white border rounded-xl shadow-md p-4 z-50 grid grid-cols-2 gap-4">
                  {menu.submenu.map((category, idx) => (
                    <div key={idx}>
                      <p className="font-bold text-sm text-gray-700 mb-2">{category.header}</p>
                      <ul className="space-y-1">
                        {category.subitems.map((sub, j) => (
                          <li key={j}>
                            <Link
                              href={`/products`}
                              className="text-gray-600 hover:text-black text-sm"
                            >
                              {sub}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden px-4 pb-4 bg-[#1A2348] text-white border-t space-y-3">
            {menuItems.map((menu, i) => (
              <li key={i}>
                <button
                  className="flex justify-between w-full text-left font-semibold text-white"
                  onClick={() => toggleDropdown(menu.title)}
                >
                  {menu.title}
                  <IoIosArrowDown
                    className={`ml-2 transform duration-200 ${
                      openDropdown === menu.title ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {openDropdown === menu.title && (
                  <ul className="mt-2 ml-4 space-y-1">
                    {menu.submenu.map((cat, idx) => (
                      <div key={idx}>
                        <p className="font-bold text-sm text-gray-700 mt-2">{cat.header}</p>
                        <ul className="ml-2 space-y-1">
                          {cat.subitems.map((sub, j) => (
                            <li key={j}>
                              <Link
                                href={`/${menu.title.toLowerCase()}/${cat.header
                                  .toLowerCase()
                                  .replace(/ /g, "-")}/${sub.toLowerCase().replace(/ /g, "-")}`}
                                className="text-white hover:text-black text-sm"
                              >
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </header>
      <div className="pt-[170px]" />
    </>
  );
}
