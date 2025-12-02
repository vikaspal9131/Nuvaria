import { Search } from "lucide-react";
import InputSection from "./comman/InputSection";
import { SideBar } from "./comman/SideBar";

export default function Hero() {
  return (
    <div
      className="w-full h-[600px]   text-white flex justify-between items-center bg-cover "
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1669229254123-09a9a4b88c1b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      }}
    >

    
      {/* CONTENT ABOVE VIDEO */}
      <div className=" z-10 max-w-4xl mx-auto px-4 pt-20 flex flex-col justify-center items-center">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-7xl font-instrument text-white mb-4 ">
            Nuvaria AI-powered visuals, <br /> shaping ideas effortlessly
          </h1>
        </div>

        {/* Search Bar */}
        <InputSection />
      </div>
    </div>
  );
}
