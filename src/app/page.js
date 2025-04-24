"use client";

import TopInfoBar from "@/components/topbar";
import NavBar from "@/components/navBar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Category from "@/components/homePage/category";
import WhyChooseUs from "@/components/homePage/whyChoose";
import CustomerReviews from "@/components/homePage/customerRating";
import BrandLogos from "@/components/homePage/brandsLogos";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loader && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-white/70">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <Category />
      <WhyChooseUs />
      <CustomerReviews />
      <BrandLogos />
    </div>
  );
}
