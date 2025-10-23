"use client";

import React from "react";

interface ToolCard {
  name: string;
  description: string;
  image: string;
  category: string;
}

const webDevTools: ToolCard[] = [
  {
    name: "Next.js",
    description: "The React framework for production",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw0_yhGEmhIF8QjL7poBJqowjSlIw0kKKOJA&s",
    category: "Framework",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    image: "https://images.seeklogo.com/logo-png/43/2/tailwind-css-logo-png_seeklogo-434090.png",
    category: "Styling",
  },
  {
    name: "React.js",
    description: "Typed JavaScript superset",
    image: "https://images.seeklogo.com/logo-png/48/1/react-logo-png_seeklogo-480571.png",
    category: "Framework",
  },
  {
    name: "Bootstrap",
    description: "Modern database toolkit",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png?20210507000024",
    category: "Framework",
  },
  {
    name: "Javascript",
    description: "Cloud platform for frontend",
    image: "https://static.vecteezy.com/system/resources/thumbnails/027/127/463/small_2x/javascript-logo-javascript-icon-transparent-free-png.png",
    category: "Language",
  },
  {
    name: "MongoDB",
    description: "Identity management",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTChJIoeZ5_EvvIHB3P8aWGTQp3WufGdm5QCQ&s",
    category: "Database",
  },
  {
    name: "Express.js",
    description: "JavaScript bundler",
    image: "https://www.manektech.com/storage/developer/1646733543.webp",
    category: "Build Tool",
  },
  {
    name: "Node.js",
    description: "JavaScript linter",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
    category: "Backend Framework",
  },
];

const ToolCard: React.FC<{ tool: ToolCard }> = ({ tool }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-md transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
      <div className="p-6 flex flex-col items-center text-center relative z-10">
        <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-full p-4 mb-5 shadow-inner">
          <img src={tool.image} alt={tool.name} className="w-12 h-12 object-contain" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{tool.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{tool.category}</p>
      </div>

      {/* Hidden description box */}
      {/* <div className="absolute inset-0 flex items-end justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 z-20">
        <p className="text-sm text-gray-700 dark:text-gray-200">{tool.description}</p>
      </div> */}
    </div>
  );
};

export default function WebDevToolsCards() {
  return (
    <div className="py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Modern Development Tools
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Powerful technologies for building exceptional web experiences
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {webDevTools.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}
