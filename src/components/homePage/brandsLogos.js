import { LucideHeadphones } from "lucide-react";
import Image from "next/image";
import { GiEarthAmerica } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { IoMdHome } from "react-icons/io";

export default function BrandLogos() {
  const imagePaths = [
    "/assets/engn1.jpg",
    "/assets/engn2.jpg",
    "/assets/engn3.jpg",
  ];

  const otherService = [
    {
      icon: <GiEarthAmerica />,
      title: "International Presence",
      desc: "We are the preferred supplier of bearings and engineering spares to customers in over 110 countries. With our 1,000,000 products in stock, we regularly deliver anywhere in the world within 1-3 working days.",
    },
    {
      icon: <HiUserGroup />,
      title: "Professional Team",
      desc: "Every member of our team undertakes training as part of their continuous professional development, ensuring we can provide the best service to all our customers across the world.",
    },
    {
      icon: <IoMdHome />,
      title: "Warehouse & Logistics",
      desc: "We're an award winning business, with full ISO 9001:2015 accreditation. Working with our delivery partners, including DHL and UPS we take great pride in our 99.8% success rate on order delivery.",
    },
    {
      icon: <LucideHeadphones />,
      title: "Customer Service",
      desc: "With more than 75 years' industry experience as a bearings supplier, our team has expert product knowledge. Any customer queries are handled within 2 hours during working days and 24 hours outside of this.",
    },
  ];

  const logos = Array.from({ length: 10 }, (_, i) => imagePaths[i % 3]);

  return (
    <>
      <section className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-2xl font-bold mb-8 text-[#1A2348]">
            Distributing World Renowned Brands
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6 items-center justify-center">
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <div className="relative w-28 h-16">
                  {" "}
                  {/* Responsive container */}
                  <Image
                    src={logo}
                    alt={`Brand ${index + 1}`}
                    layout="fill"
                    objectFit="contain"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 10vw"
                    priority={index < 3} // priority load first few
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-2xl font-bold text-center mb-12 text-[#1A2348]">
            Other Services We Offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {otherService.map((service, index) => (
              <div key={index} className="text-center px-4">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full">
                  <span className="text-4xl text-[#172346]">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
