
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
	{
		icon: (
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#660033"/><path d="M28 15.5V25a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2v-9.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><rect x="16" y="18" width="8" height="6" rx="1" fill="#fff"/><path d="M18 15v-1a2 2 0 0 1 4 0v1" stroke="#fff" strokeWidth="2"/></svg>
		),
		title: "UI/UX Design",
		desc: "From the initial design to the final development stage, your dedicated team of specialists."
	},
	{
		icon: (
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#ffb800"/><path d="M13 27V13h14v14H13z" stroke="#fff" strokeWidth="2"/><path d="M17 17h6v6h-6z" fill="#fff"/></svg>
		),
		title: "Web Design",
		desc: "From the initial design to the final development stage, your dedicated team of specialists."
	},
	{
		icon: (
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#ff4b6e"/><path d="M20 13v14M13 20h14" stroke="#fff" strokeWidth="2"/></svg>
		),
		title: "Digital Marketing",
		desc: "From the initial design to the final development stage, your dedicated team of specialists."
	},
	{
		icon: (
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#41b6ff"/><path d="M20 13v14M13 20h14" stroke="#fff" strokeWidth="2"/></svg>
		),
		title: "Branding",
		desc: "From the initial design to the final development stage, your dedicated team of specialists."
	},
];

export default function ThreeDPortfolio() {
	const [index, setIndex] = useState(0);
	const prev = () => setIndex(i => (i === 0 ? services.length - 1 : i - 1));
	const next = () => setIndex(i => (i === services.length - 1 ? 0 : i + 1));

	return (
		<div className="w-full max-w-6xl mx-auto rounded-2xl bg-white shadow-xl flex flex-col md:flex-row overflow-hidden border border-[#660033]/10">
			{/* Left: Heading and arrows */}
			<div className="md:w-1/3 w-full flex flex-col justify-between p-8 bg-gradient-to-br from-[#fff0f7] to-white">
				<div>
					<span className="uppercase text-xs tracking-widest text-[#ff4b6e] font-semibold mb-2 block">Services</span>
					<h2 className="text-2xl md:text-3xl font-bold text-[#660033] mb-8 leading-tight">
						I Provide Wide<br />
						<span className="text-black">Range Of Digital</span><br />
						<span className="text-black">Services</span>
					</h2>
				</div>
				<div className="flex gap-3 mt-8">
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						aria-label="Previous"
						onClick={prev}
						className="w-10 h-10 rounded-full border-2 border-[#660033] flex items-center justify-center bg-white text-[#660033] hover:bg-[#660033] hover:text-white transition-colors duration-200 shadow-md"
					>
						<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
					</motion.button>
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						aria-label="Next"
						onClick={next}
						className="w-10 h-10 rounded-full border-2 border-[#660033] flex items-center justify-center bg-[#ff4b6e] text-white hover:bg-[#660033] hover:text-white transition-colors duration-200 shadow-md"
					>
						<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
					</motion.button>
				</div>
			</div>
			{/* Right: Service cards */}
			<div className="md:w-2/3 w-full flex items-center justify-center p-8 bg-white">
				<div className="w-full flex flex-col md:flex-row gap-6 items-center justify-center">
					<AnimatePresence mode="wait">
						<motion.div
							key={index}
							initial={{ opacity: 0, x: 60 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -60 }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="w-full max-w-xs bg-white rounded-2xl shadow-lg border border-[#660033]/10 flex flex-col items-center p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
						>
							<div className="mb-6 group-hover:scale-110 transition-transform duration-300">{services[index].icon}</div>
							<h3 className="text-xl font-semibold text-[#660033] mb-2 text-center">{services[index].title}</h3>
							<p className="text-gray-500 text-center text-sm mb-4">{services[index].desc}</p>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}
