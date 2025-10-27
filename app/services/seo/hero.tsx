"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16 bg-white overflow-hidden">
      {/* LEFT CONTENT */}
      <motion.div
        className="flex-1 space-y-6 max-w-xl"
        initial="hidden"
        animate="show"
        variants={fadeInUp}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.span
          variants={fadeInUp}
          className="text-blue-600 font-medium uppercase tracking-wide"
        >
          Financial Consulting
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
        >
          Empowering Your <span className="text-blue-600">Business Growth</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-gray-600 text-lg leading-relaxed"
        >
          We provide professional financial advice and strategies to help your
          business achieve consistent growth and long-term success.
        </motion.p>

        {/* CTA + PRICE */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-6 pt-4"
        >
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all">
            Get Started <ArrowRight size={18} />
          </button>
          <div>
            <p className="text-gray-900 font-bold text-xl">$249</p>
            <p className="text-gray-500 text-sm">per consultation</p>
          </div>
        </motion.div>

        {/* NAVIGATION ARROWS */}
        <motion.div variants={fadeInUp} className="flex gap-3 pt-8">
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white transition-all">
            <ChevronLeft size={20} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white transition-all">
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE CARDS / IMAGE */}
      <motion.div
        className="flex-1 mt-12 lg:mt-0 relative flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Main Hero Image */}
        <div className="relative w-[320px] h-[400px] md:w-[400px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/hero-image.jpg"
            alt="Financial consultant"
            fill
            className="object-cover"
          />
        </div>

        {/* Floating card top-left */}
        <motion.div
          className="absolute -top-6 -left-6 bg-white shadow-lg rounded-2xl p-4 w-40"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm text-gray-500">Efficiency</p>
          <h4 className="text-xl font-bold text-blue-600">98%</h4>
        </motion.div>

        {/* Floating card bottom-right */}
        <motion.div
          className="absolute -bottom-6 -right-6 bg-blue-600 text-white shadow-xl rounded-2xl p-4 w-44"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm opacity-80">Customer Rating</p>
          <h4 className="text-xl font-bold">4.9/5.0</h4>
        </motion.div>
      </motion.div>
    </section>
  );
}
