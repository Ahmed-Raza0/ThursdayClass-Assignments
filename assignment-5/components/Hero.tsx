import React from "react";
import Image from "next/image";
import { Libre_Bodoni } from "next/font/google";

const libreBodoni = Libre_Bodoni({
  weight: "400",
  subsets: ["latin"],
});

function Hero() {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col md:flex-row items-center md:items-start lg:mt-[70px]">
        <div className="flex flex-col justify-center items-start sm:w-full md:w-1/2 m-4 md:m-8 2xl:m-[176px]">
          <h1
            className={`font-bold ${libreBodoni.className} text-[24px] md:text-[30px] lg:text-[40px] w-full md:w-auto 2xl:w-[496px] h-auto`}
          >
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p
            className={`text-[#787054] font-medium my-5 ${libreBodoni.className} text-[18px] md:text-[23px] lg:text-[23px] 2xl:[40px] 2xl:w-[902px] 2xl:h-[147px]`}
          >
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
          <button
            className={`bg-[#A29875] p-[10px] text-[18px] md:text-[23px] lg:text-[30px] rounded-[10px] font-medium mt-3 text-white ${libreBodoni.className} w-[200px] md:w-[240px] lg:w-[288px] h-[45px] md:h-[50px] lg:h-[58px]`}
          >
            Explore Now
          </button>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center sm:w-full md:w-1/2 mt-10 md:mt-0">
          <div className="w-[300px] h-[420px] md:w-[400px] md:h-[540px] lg:w-[440px] lg:h-[620px] 2xl:w-[462px] 2xl:h-[647px]">
            <Image
              src="/images/hero.svg"
              alt="hero image"
              width={462}
              height={647}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
