"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Seo() {
  const router = useRouter();

  return (
    <div className="w-[97%] mx-auto text-white py-16 md:py-24 px-6 md:px-10 rounded-3xl">
      {/* Our Services Section */}
      <div className="mt-10 space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          <span className="text-[#5C0632]">Digital Marketing Services</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Search Engine Optimization (SEO)",
              desc: "Boost your rankings with proven on-page and off-page SEO techniques. We optimize your site to drive organic traffic and conversions.",
            },
            {
              title: "Social Media Marketing",
              desc: "Engage your audience with high-impact campaigns on Instagram, Facebook, LinkedIn, and more. Let’s make your brand trend.",
            },
            {
              title: "Google Ads & PPC Campaigns",
              desc: "Get immediate results with smart ad strategies that maximize your ROI while reducing wasted spend.",
            },
            {
              title: "Content Marketing",
              desc: "High-quality, SEO-optimized blogs, visuals, and videos to establish your authority and attract your target audience.",
            },
            {
              title: "Email & Automation",
              desc: "Personalized email campaigns that nurture leads and convert them into loyal customers.",
            },
            {
              title: "Analytics & Reporting",
              desc: "Track your performance in real time with transparent data reports and continuous optimization.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(92, 6, 50, 0.4)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white text-[#5C0632] p-8 rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200 cursor-pointer transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-[#333] text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
