import Hero from "@/components/Hero";
import PhotoGallery from "@/components/PhotoGallery";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div>
      <main className="bg-black">
     <Hero />
     <PhotoGallery />
      </main>
    </div>
    </>
  );
}
