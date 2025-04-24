"use client"

import TopInfoBar from "@/components/topbar";
import NavBar from "@/components/navBar";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Category from "@/components/homePage/category";
import WhyChooseUs from "@/components/homePage/whyChoose";
import CustomerReviews from "@/components/homePage/customerRating";
import BrandLogos from "@/components/homePage/brandsLogos";
import Footer from "@/components/footer";

export default function HomePage() {

  const router = useRouter();

  

  return (
    <div>
     <Category/>
     <WhyChooseUs/>
     <CustomerReviews/>
     <BrandLogos/>
    </div>
  );
}
