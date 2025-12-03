import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <div className="text-white w-full flex justify-center    font-[DM_Sans]  border-b border-dashed  border-[#2E2E2E]    fixed z-20 ">
      <div className="w-312 py-2 flex justify-between items-center px-2 backdrop-blur-sm ">
         
        <div className="flex items-center justify-center gap-1 font-[DM_Sans]">
          
          <p className="text-2xl font-medium">nuvaria</p>
        </div>
          <div className="flex gap-8">
            <p>Home </p>
            <p>About </p>
            <p>Document</p>
            <p> Pricing </p>
          </div>
         <div>
          <Link href="/login" className="px-5 py-1 bg-gray-100 text-black rounded-[1px]">login</Link>
       
         </div>
      </div>
    </div>
  );
};
