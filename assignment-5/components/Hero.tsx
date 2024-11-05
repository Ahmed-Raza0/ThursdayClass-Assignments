import React from "react";
import Image from "next/image";
import { Libre_Bodoni } from "next/font/google";

const libreBodoni = Libre_Bodoni({
  weight: "500",
  subsets: ["latin"],
});

function Hero() {
  return (
    <div className="w-[1920px] h-screen">
      <div className="flex h-[80%]">
        <div className="w-1/2 flex flex-col justify-center items-start m-[176px]">
          <h1
            className={`text-[40px] font-bold ${libreBodoni.className}  w-[496px] h-[189px]`}
          >
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p
            className={`text-[30px] text-[#787054]  h-[147px] font-medium  my-5 ${libreBodoni.className}`}
          >
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>

          <button
            className={`bg-[#A29875] w-[288px] h-[58px]   p-[10px] text-[30px] rounded-[10px] font-medium mt-3 text-white ${libreBodoni.className}`}
          >
            Explore Now
          </button>
        </div>
        <div className="w-1/2 flex  justify-center items-center">
          <div className="w-[490px] h-[611px]">
            <Image
              src={"/images/hero.svg"}
              alt="hero image"
              width={462}
              height={647}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
