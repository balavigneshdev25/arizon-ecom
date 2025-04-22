"use client"

import NavBar from "@/components/navBar";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function HomePage() {

  const router = useRouter();

  

  return (
    <div>
     <NavBar/>
     <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-100 to-white">
      
      <div className="w-full md:w-1/2 flex justify-center items-center relative h-[60vh] md:h-screen">
        <Image
          src="/assets/model_5.png"
          alt="Fashion Model"
          fill
         className="object-contain transition-transform duration-300 hover:scale-105"
          priority
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col gap-6 items-center md:items-start px-6 py-10 md:py-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Discover Your <br /> New Style
        </h1>
        <p className="text-gray-600 text-lg max-w-md">
          Elevate your wardrobe with our exclusive fashion collections. Trendy looks, timeless quality.
        </p>
        <p className="text-gray-500 text-md max-w-md">
          Shop now and get exclusive discounts on our newest arrivals.
        </p>
        <button onClick={()=>{router.push('/products')}} className="bg-black text-white px-6 py-3 cursor-pointer rounded-full hover:bg-gray-800 transition">
          Explore
        </button>
      </div>
    </div>
    </div>
  );
}
