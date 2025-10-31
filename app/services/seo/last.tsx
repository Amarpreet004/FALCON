"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SeoMarketingPage() {
  const router = useRouter();

  return (
    <div className="w-[97%] mx-auto text-white  py-16 md:py-24 px-6 md:px-10 rounded-3xl " >
      {/* Meta tags for SEO */}
      <head>
        <title >SEO & Digital Marketing | Falcon Web Solution</title>
        <meta
          name="description"
          content="Boost your online presence with Falcon Web Solution’s SEO and digital marketing services. We help your business grow with targeted strategies, content marketing, and social media optimization."
        />
        <meta
          name="keywords"
          content="Falcon Web Solution, SEO services, digital marketing, social media marketing, brand strategy, PPC, content marketing, online growth, marketing agency"
        />
      </head>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#5C0632]">
            Empower Your <span className="text-[black]">Digital Growth</span>
          </h1>
          <p className="text-gray-900 text-lg md:text-xl leading-relaxed">
            At <strong className="text-[#5C0632]">Falcon Web Solution</strong>, we help your business take
            flight with data-driven SEO and Digital Marketing strategies.
            Whether you're launching a new brand or scaling an existing one, our
            experts ensure your visibility soars across Google, YouTube, and
            social media platforms.
          </p>

          <button
            onClick={() => router.push("/contact/Bookcall")}
            className="bg-white text-[#5C0632] font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-[#5C0632] hover:text-white shadow-lg hover:scale-105"
          >
            Book A Call
          </button>
        </div>

        {/* Right Animated Section */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-[#5C0632] rounded-2xl p-8 md:p-12 w-full md:w-1/2 text-center shadow-xl"
        >
          <h2 className="text-5xl font-extrabold mb-4">+350%</h2>
          <p className="text-lg mb-4 opacity-90">
            Average client traffic increase in 3 months
          </p>
          <h2 className="text-5xl font-extrabold mb-4">+5000</h2>
          <p className="text-lg opacity-90">Successful ad campaigns managed</p>
        </motion.div>
      </div>

            {/* CTA Section */}
      <div className="mt-20 bg-[#5C0632] rounded-3xl text-center py-12 px-8 md:px-20 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Dominate the Digital Space?
        </h2>
        <p className="text-gray-100 mb-8 text-lg">
          Let Falcon Web Solution help you build a strong digital footprint with
          proven marketing strategies that deliver real results.
        </p>
        <button
          onClick={() => router.push("/contact/Bookcall")}
          className="bg-white text-[#5C0632] font-semibold px-10 py-4 rounded-lg hover:bg-[#2a0018] hover:text-white transition-all duration-300"
        >
          Get Your Free Consultation
        </button>
      </div>
    </div>
  );
}
