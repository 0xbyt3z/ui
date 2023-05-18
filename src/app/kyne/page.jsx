import React from "react";

import { Poppins } from "next/font/google";
import Image from "next/image";

// If loading a variable font, you don't need to specify the font weight
const font = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

function Kyne() {
  return (
    <>
      <div className={font.className + " w-full h-auto px-24 bg-black overflow-x-clip"}>
        {/* mist */}
        <div className="w-[40vw] h-[40vw] absolute bg-gradient-to-tr rounded-bl-full from-transparent to-white z-0  -top-10 -right-10 blur-xl"></div>

        {/* Nav Bar start*/}
        <div className="w-full h-16 flex items-center justify-between z-20">
          <div className="w-1/2 h-full flex items-center justify-start text-white">
            <span className="text-2xl">Kyne</span>
          </div>
          <div className="w-1/2 h-full flex items-center justify-end text-white">
            <a href="" className="mr-8 text-sm">
              About
            </a>
            <a href="" className="mr-8 text-sm">
              Portfolio
            </a>
            <a href="" className="mr-8 text-sm italic border-0 border-b-[1px] border-white">
              <span className="flex">
                Free Discovery
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        {/* Nav Bar end*/}

        {/* Hero Start */}
        <div className="w-full h-screen z-30">
          <h2 className="text-transparent bg-gradient-to-tr from-transparent via-white to-white bg-clip-text text-8xl mt-24 ">
            Deliver your brand <br /> with a meaningful <br /> narrative.
          </h2>

          <div className="w-fit h-fit flex text-gray-200 mt-24">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 rotate-180 mr-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>
            <span className="uppercase">
              Scroll <br /> down to <br /> see more
            </span>
          </div>

          <div className="w-full h-auto flex">
            <div className="w-full h-full text-2xl font-thin mt-24 border-0 border-r-2 border-gray-50/30">
              <span className="text-white">Market Leaders uses </span>
              <br />
              <span className="bg-gradient-to-t from-transparent text-transparent bg-clip-text to-gray-50">Kyne to grow</span>
            </div>
            <div className="w-full h-fit  grid grid-cols-3 gapx-5 px-44 mt-10">
              <Image src="/kyne/ms.webp" width={200} height={100} className="grayscale h-20 object-scale-down" />
              <Image src="/kyne/rakuten.png" width={200} height={100} className="grayscale h-20 object-scale-down" />
              <Image src="/kyne/nike.png" width={200} height={100} className=" h-20 object-scale-down" />
              <Image src="/kyne/ebay.png" width={200} height={100} className="grayscale scale-50 h-20 object-scale-down" />
              <Image src="/kyne/adidas.png" width={200} height={100} className="grayscale scale-50 h-20 object-scale-down" />
              <Image src="/kyne/walmart.png" width={200} height={100} className="grayscale scale-50 h-20 object-scale-down" />
            </div>
          </div>
        </div>

        <div className="absolute w-1/3 h-fit bg-gradient-to-tr from-transparent text-gray-50/10 bg-clip-text to-white top-96 right-36">
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>

          <div className="mt-10">
            <a href="" className="bg-white px-5 py-3 text-black italic font-medium flex w-fit">
              Get Started - It's Free{" "}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
        {/* Hero end */}
      </div>
    </>
  );
}

export default Kyne;
