import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="bg-[#182245] text-white px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 text-center md:text-left">
          <div className="w-full md:w-auto">
            <h2 className="text-2xl font-bold">Subscribe Today</h2>
          </div>

          <p className="hidden md:block mt-1 text-sm text-white">
            Be the first to know about exclusive deals, new product lines,
            <br />
            company announcements, and industry news.
          </p>

          <form className="flex flex-col sm:flex-row items-center sm:space-x-2 w-full sm:w-auto justify-center md:justify-end">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 text-gray-700 bg-amber-50 rounded-none sm:rounded-l-md w-full sm:w-64 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#c8941f] hover:bg-[#b78310] text-white font-bold px-4 py-2 rounded-none sm:rounded-r-md w-full sm:w-auto mt-2 sm:mt-0"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <footer className="bg-black text-white py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-0 text-center border-b border-white pb-4 md:text-left md:border-0">
            <h2 className="font-bold text-lg">Quality Bearings Online Ltd</h2>
            <p>Canada - 438 800 2658</p>
            <a href="#" className="text-white font-semibold">
              Contact Us
            </a>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">NAVIGATE</h3>
            <ul className="space-y-1 text-gray-300">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  10 Year Anniversary
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              <Image
                src="/assets/engn1.jpg"
                alt="Award 1"
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded"
              />
              <Image
                src="/assets/engn2.jpg"
                alt="Award 2"
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded"
              />
              <Image
                src="/assets/engn3.jpg"
                alt="Award 3"
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Image
                src="/assets/engn2.jpg"
                alt="SC21"
                width={100}
                height={100}
                className="w-24 h-24 object-cover rounded"
              />
              <Image
                src="/assets/engn1.jpg"
                alt="Supply Chain"
                width={100}
                height={100}
                className="w-24 h-24 object-cover rounded"
              />
            </div>

            <Image
              src="/assets/engn3.jpg"
              alt="Queen's Award"
              width={100}
              height={100}
              className="w-24 h-24 object-cover rounded"
            />

            <div>
              <h4 className="font-bold mt-4">Follow Us on Social Media</h4>
              <div className="flex space-x-4 mt-2 text-xl">
                <a
                  href="https://www.facebook.com/qualitybearings"
                  aria-label="Facebook"
                  target="_blank"
                  className="hover:text-gray-400"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/qualitybearings/"
                  aria-label="Instagram"
                  target="_blank"
                  className="hover:text-gray-400"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/quality-bearings-online-limited/"
                  aria-label="LinkedIn"
                  className="hover:text-gray-400"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>&copy; 2025 Quality Bearings Online – All rights reserved.</div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <Image
              src="/assets/engn1.jpg"
              alt="American Express"
              width={40}
              height={24}
              className="h-6 object-contain"
            />
            <Image
              src="/assets/engn3.jpg"
              alt="MasterCard"
              width={40}
              height={24}
              className="h-6 object-contain"
            />
            <Image
              src="/assets/engn2.jpg"
              alt="PayPal"
              width={40}
              height={24}
              className="h-6 object-contain"
            />
            <Image
              src="/assets/engn1.jpg"
              alt="Visa"
              width={40}
              height={24}
              className="h-6 object-contain"
            />
            <Image
              src="/assets/engn3.jpg"
              alt="GPay"
              width={40}
              height={24}
              className="h-6 object-contain"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
