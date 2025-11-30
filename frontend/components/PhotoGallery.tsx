'use client'

import { useState } from 'react';

interface Image {
  id: number;
  url: string;
  span: string;
}

export default function PhotoGallery() {
  const images: Image[] = [
    { id: 1, url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400', span: 'row-span-2' },
    { id: 2, url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400', span: 'row-span-2' },
    { id: 3, url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400', span: 'row-span-3' },
    { id: 4, url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400', span: 'row-span-2' },
    { id: 5, url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400', span: 'row-span-1' },
    { id: 6, url: 'https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=400', span: 'row-span-2' },
    { id: 7, url: 'https://images.unsplash.com/photo-1502139214982-d0ad755818d8?w=400', span: 'row-span-2' },
    { id: 8, url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', span: 'row-span-1' },
    { id: 9, url: 'https://images.unsplash.com/photo-1511376868136-742c0de8c9a8?w=400', span: 'row-span-2' },
    { id: 10, url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400', span: 'row-span-3' },
    { id: 11, url: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=400', span: 'row-span-2' },
    { id: 12, url: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=400', span: 'row-span-1' },
    { id: 13, url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400', span: 'row-span-2' },
    { id: 14, url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', span: 'row-span-1' },
    { id: 15, url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', span: 'row-span-2' },
    { id: 16, url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400', span: 'row-span-1' },
    { id: 17, url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400', span: 'row-span-2' },
    { id: 18, url: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=400', span: 'row-span-2' },
  ];

  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  return (
    <div className="bg-black p-4 mt-10">
      {/* Masonry Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-rows-[150px] gap-3 max-w-7xl mx-auto">
        {images.map((image) => (
          <div
            key={image.id}
            className={`${image.span} cursor-pointer overflow-hidden rounded-sm group relative`}
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
