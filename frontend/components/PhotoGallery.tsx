"use client";

import { useState } from "react";

interface Image {
  id: number;
  url: string;
  span: string;
}

export default function PhotoGallery() {
  const images: Image[] = [
    {
      id: 1,
      url: "https://i.pinimg.com/736x/63/e6/7c/63e67c6f0eeb94087faafb857f8bcc4d.jpg",
      span: "row-span-2",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/736x/a9/46/80/a946805f26c6099f6225845271fa78d6.jpg",
      span: "row-span-2",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/736x/87/09/56/870956f808af463091a4412a723783b2.jpg",
      span: "row-span-3",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/736x/86/72/41/8672413af0ada40214e3c7825059fcd1.jpg",
      span: "row-span-2",
    },
    {
      id: 5,
      url: "https://i.pinimg.com/736x/56/44/fa/5644fa47ab50c0e32a264cf3a5db0eb1.jpg",
      span: "row-span-1",
    },
    {
      id: 6,
      url: "https://i.pinimg.com/736x/0b/6c/71/0b6c719f4124ebe83f22398a4658485c.jpg",
      span: "row-span-2",
    },
    {
      id: 7,
      url: "https://i.pinimg.com/1200x/1d/2f/fc/1d2ffc1b5d2f04f6dfad076aa2593d1a.jpg",
      span: "row-span-2",
    },
    {
      id: 8,
      url: "https://i.pinimg.com/736x/7f/b1/b5/7fb1b56fd71b118bb8bdc58c58d3e6e9.jpg",
      span: "row-span-1",
    },
    {
      id: 9,
      url: "https://i.pinimg.com/736x/18/c3/53/18c35321e7058095decf05ef8944787e.jpg",
      span: "row-span-2",
    },
    {
      id: 10,
      url: "https://i.pinimg.com/1200x/18/0d/3c/180d3c86331f7db1408a64438247a28f.jpg",
      span: "row-span-3",
    },
    {
      id: 11,
      url: "https://i.pinimg.com/1200x/e7/7b/d3/e77bd3cfcd973568bdacc4e4bd133ff0.jpg",
      span: "row-span-2",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=400",
      span: "row-span-1",
    },
    {
      id: 13,
      url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      span: "row-span-2",
    },
    {
      id: 14,
      url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      span: "row-span-1",
    },
    {
      id: 15,
      url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      span: "row-span-2",
    },
    {
      id: 16,
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
      span: "row-span-1",
    },
    {
      id: 17,
      url: "https://i.pinimg.com/736x/49/25/3f/49253fb3a61486afea937964bbca5b00.jpg",
      span: "row-span-1",
    },
  
  ];

  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  return (
    <div className=" ">
      {/* Masonry Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-rows-[150px] gap-1 ">
        {images.map((image) => (
          <div
            key={image.id}
            className={`${image.span} cursor-pointer overflow-hidden  group relative`}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.url}
              alt={`Gallery image ${image.id}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage.url}
            alt="Selected"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
