"use client";

import { FaHandshake, FaShippingFast } from "react-icons/fa";
import { GiLaurelCrown } from "react-icons/gi";
import { BsPatchCheckFill } from "react-icons/bs";
import Image from "next/image";

const TopInfoBar = () => {
  return (
    <div className="hidden lg:flex md:flex items-center justify-around bg-white py-2 px-6 shadow  text-[#0c2461] text-opacity-80 font-semibold text-sm">
        <div className="flex items-center gap-2">
          <FaHandshake className="text-xl" />
          <div>
            <p>Free Delivery</p>
            <p  >$300.00+</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FaShippingFast className="text-xl" />
          <div>
            <p>1–3 Day DHL & UPS</p>
            <p  >Delivery</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <GiLaurelCrown className="text-xl" />
          <div>
            <p>{"Queen's Award For"}</p>
            <p  >Enterprise Winners</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <BsPatchCheckFill className="text-xl" />
          <div>
            <p>ISO 9001 : 2015</p>
            <p  >Cert. No.291342018</p>
          </div>
        </div>
        <div>
          <Image
            src="/assets/logo.png"
            alt="Feefo Rating"
            className="h-8"
            height={50}
            width={80}
          />
        </div>
    </div>
  );
};

export default TopInfoBar;
