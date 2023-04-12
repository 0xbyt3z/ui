"use client";
import React from "react";

import { motion } from "framer-motion";

import { Sofia_Sans_Condensed as _font } from "next/font/google";

const font = _font({ subsets: ["latin"] });

function Cards() {
  return (
    <>
      <Card1 />
      <Card2 />
    </>
  );
}

const Card1 = () => {
  return (
    <>
      <div className={`${font.className} w-screen h-screen overflow-hidden flex justify-center items-center`}>
        <div className="h-[40rem] p-6 w-[20rem] bg-gray-50 shadow-xl mr-5 flex relative overflow-hidden">
          <div className="w-96 h-96 blur-xl absolute mt-52 animate-spin-slow  rounded-full  bg-gradient-to-tr from-[#FFE4F3] via-[#FF92C2] to-[#FF5D73]  z-0"></div>
          <div className="z-30">
            <span className="text-4xl font-bold">
              Save & <br /> Earn{" "}
            </span>

            <p className="my-10">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like
              readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.
            </p>

            <a href="" className=" text-white bg-gray-900 px-5 py-2">
              Check out
            </a>
          </div>
        </div>
        <div className="h-[40rem] p-6 w-[20rem] bg-[#2D3142] shadow-xl ml-5 flex relative overflow-hidden">
          <div className="w-96 h-96 blur-xl absolute mt-52 animate-spin-slow  rounded-full  bg-gradient-to-tr from-gray-500/10  to-white/50  z-0"></div>
          <div className="z-30">
            <span className="text-4xl font-bold text-white">
              Save & <br /> Earn{" "}
            </span>

            <p className="my-10 text-white">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like
              readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.
            </p>

            <a href="" className=" text-black bg-white px-5 py-2">
              Check out
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const Card2 = () => {
  return (
    <>
      <div className={`${font.className} w-screen h-screen overflow-hidden flex justify-center items-center`}>
        <motion.div className="h-[30rem] p-6 w-[20rem] bg-gray-50 shadow-xl mr-5 flex relative overflow-hidden"></motion.div>
        <motion.div
          initial={{}}
          whileHover={{ width: "25rem", height: "35rem" }}
          className="h-[30rem] p-6 w-[20rem] bg-gray-50 shadow-xl mr-5 flex relative overflow-hidden"
        ></motion.div>
        <motion.div className="h-[30rem] p-6 w-[20rem] bg-gray-50 shadow-xl mr-5 flex relative overflow-hidden"></motion.div>
      </div>
    </>
  );
};

export default Cards;
