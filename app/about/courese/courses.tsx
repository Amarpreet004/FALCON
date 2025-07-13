"use client";
import React from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  size: 'small' | 'medium' | 'large' | 'wide';
}

const GallerySection: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    { id: 1, title: "Explore Courses", image: "/image23.JPG", size: "medium" },
    { id: 2, title: "Explore Courses", image: "/image27.jpg", size: "wide" },
    { id: 3, title: "Explore Courses", image: "/image21.JPG", size: "small" },
    { id: 4, title: "Explore Courses", image: "/image29.jpg", size: "small" },
    { id: 5, title: "Explore Courses", image: "/image25.jpg", size: "medium" },
    { id: 6, title: "Explore Courses", image: "/image31.jpg", size: "small" },
    { id: 7, title: "Explore Courses", image: "/image24.JPG", size: "wide" },
    { id: 8, title: "Explore Courses", image: "/image28.jpg", size: "small" },
  ];

  const getSizeClasses = (size: string) => {
    return `
      ${size === 'small' ? 'col-span-1 row-span-1' : ''}
      ${size === 'medium' ? 'col-span-1 row-span-2 sm:col-span-2 sm:row-span-1 md:col-span-1 md:row-span-2' : ''}
      ${size === 'large' ? 'col-span-2 row-span-2' : ''}
      ${size === 'wide' ? 'col-span-1 sm:col-span-2 row-span-1' : ''}
    `;
  };

  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Workshops
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Through our thoughtfully curated workshops, we empower students to stay ahead in the ever-evolving world of IT. Each session is designed to foster innovation, hands-on learning, and mastery of the latest technological advancements.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[220px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${getSizeClasses(item.size)} group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer 
              border border-transparent hover:border-blue-400/30 hover:shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_15px_-3px_rgba(59,130,246,0.5)]`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y0ZjRmNCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+PC9zdmc+';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300" />
                <div className="absolute inset-0 p-3 sm:p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-sm sm:text-lg font-semibold text-white">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
