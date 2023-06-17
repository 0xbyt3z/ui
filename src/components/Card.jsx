import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ weight: "400", subsets: ["latin"] });

function Card({ image, title, url, originalLink }) {
  return (
    <>
      <div className={`${inter.className} h-36 flex flex-col`}>
        <Image src={image} width={400} height={200} alt="Image" className="object-fill" />
        <div className="w-full h-24">
          <span className="mt-3">{title}</span>
          <div className="flex mt-3">
            <a href={url} className="px-3 py-1 bg-emerald-500 font-semibold text-white flex items-center">
              View
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
            <a href={originalLink} className="px-3 py-1 bg-pink-500 font-semibold text-white flex items-center ml-3">
              Original
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
