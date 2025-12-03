"use client";

import { Search } from "lucide-react";
import InputSection from "./comman/InputSection";
import { SideBar } from "./comman/SideBar";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="w-full flex justify-center">
      <div className=" w-7xl h-[600px]   text-white flex justify-between items-center bg-cover  border-r border-l  border-dashed border-[#2E2E2E]">
        {/* CONTENT ABOVE VIDEO */}
        <motion.div
          className=" z-10 max-w-4xl mx-auto px-4 pt-20 flex flex-col justify-center items-center "
          initial={{
            opacity: 0,
            y: 30,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="text-center mb-10 flex flex-col items-center">
            <motion.h1
              className="text-5xl md:text-6xl font-[DM_Sans] text-whtie mb-4 font-medium text-[#D4D4D4] "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 2, y: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Nuvaria powered visuals
            </motion.h1>
            <p className="font-inter text-1xl text-[#D4D4D4]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse r
              erum debitis labore <br /> repellendus ad excepturi in mollitia?
              Officia nesciunt assumend
            </p>
          </div>

          <div className="flex gap-2 font-[DM_Sans]">
            <button className="bg-[#1C1C1C] text-white  px-3 py-2   border-[#2E2E2E] ">
              Document{" "}
            </button>
            <button className="bg-[#9F2D18] px-3 ">Get Start now </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
