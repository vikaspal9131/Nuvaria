"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import PhotoGallery from "@/components/PhotoGallery";

export default function Home() {
  const [open, setOpen] = useState(false);

  const sidebarWidth = 256; // 64 * 4 = w-64 (Tailwind width in px)

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 bg-white text-black px-3 py-1 rounded"
      >
        {open ? "Close" : "Menu"}
      </button>

      {/* Sidebar */}
      <div
        className={`w-62  fixed top-0 left-0 h-screen  bg-black text-white 
        transform transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <p className="text-start text-3xl font-instrument">Nuvaria</p>
      </div>

      {/* MAIN CONTENT - THIS IS THE IMPORTANT PART */}
      <main
        className="bg-black text-white transition-all duration-300"
        style={{
          marginLeft: open ? sidebarWidth : 0,
        }}
      >
        <Hero />
        <PhotoGallery />
      </main>
    </>
  );
}
