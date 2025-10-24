
"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "UI/UX Design",
    description:
      "From the initial design to the final development stage, your dedicated team of specialists.",
    icon: "🎨",
  },
  {
    title: "Web Design",
    description:
      "From the initial design to the final development stage, your dedicated team of specialists.",
    icon: "💻",
  },
  {
    title: "Digital Marketing",
    description:
      "From the initial design to the final development stage, your dedicated team of specialists.",
    icon: "📈",
  },
];

export default function Services() {
  return (
    <section className="bg-[#660033] text-white py-16 px-6 md:px-16 overflow-hidden">
      {/* Heading */}
      <div className="mb-10">
        <h4 className="uppercase tracking-widest text-sm opacity-80">Services</h4>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          I Provide Wide Range Of Digital Services
        </h2>
      </div>

      {/* Horizontal Scroll Section */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="min-w-[280px] md:min-w-[320px] bg-white text-[#660033] rounded-xl shadow-lg p-6 flex flex-col items-start hover:shadow-2xl cursor-pointer"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm opacity-80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
