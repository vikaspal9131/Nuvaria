"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import PhotoGallery from "@/components/PhotoGallery";
import { NavBar } from "@/components/comman/NavBar";

export default function Home() {
  const [open, setOpen] = useState(false);

  const sidebarWidth = 256; // 64 * 4 = w-64 (Tailwind width in px)

  return (
    <>
        <main className="bg-[#0A0A0A] ">
          <NavBar />
        <Hero />
     
      </main>
    </>
  );
}
