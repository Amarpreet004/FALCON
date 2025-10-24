"use client";
import React from "react";
import { AiOutlinePlayCircle } from 'react-icons/ai'; // AntDesign equivalent
import { Entypo } from '@expo/vector-icons'; // Entypo icons

const services = [
	{
		icon: <Entypo name="youtube" size={40} color="#660033" />,
        title: "YouTube Video Editing",
		desc: "From raw footage to fully polished videos — intros, transitions, captions, and callouts that keep viewers watching."
	},
	{
		icon: <Entypo name="instagram" size={40} color="#660033" />,
        title: "Social Media Reels & Shorts",
		desc: "High-impact edits for Instagram, TikTok, and YouTube Shorts — designed to grab attention fast and boost engagement."
	},
	{
		icon: (
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="8" y="8" width="24" height="24" rx="8" fill="#fff" opacity="0.5"/><circle cx="28" cy="12" r="6" fill="#fff" opacity="0.7"/><rect x="20" y="20" width="12" height="12" rx="6" fill="#fff" opacity="0.7"/></svg>
		),
		title: "Corporate & Promo Videos",
		desc: "Clean, branded video edits for presentations, product launches, or marketing campaigns that reflect your professionalism."
	},
	{
		icon: (
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="8" y="24" width="10" height="8" rx="3" fill="#fff" opacity="0.7"/><rect x="22" y="8" width="10" height="24" rx="5" fill="#fff" opacity="0.4"/></svg>
		),
		title: "Podcast & Interview Edits",
		desc: "Multi-cam syncing, noise removal, cutdowns, and highlights — optimized for both video and audio platforms."
	},
	{
		icon: (
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="28" rx="12" ry="6" fill="#fff" opacity="0.5"/><rect x="10" y="8" width="20" height="12" rx="6" fill="#fff" opacity="0.7"/></svg>
		),
		title: "Ad & Sales Video Editing",
		desc: "Performance-focused editing for Facebook, YouTube, and Google ads — built to convert with strong hooks and CTAs."
	},
	{
		icon: (
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><g stroke="#fff" strokeWidth="3" strokeLinecap="round"><line x1="20" y1="5" x2="20" y2="35"/><line x1="5" y1="20" x2="35" y2="20"/><line x1="10" y1="10" x2="30" y2="30"/><line x1="30" y1="10" x2="10" y2="30"/></g></svg>
		),
		title: "Course & Tutorial Editing",
		desc: "Structured, distraction-free edits that make learning smooth and professional for your students or audience."
	},
];

export default function VideoCoreServices() {
	return (
		<section className="w-full bg-white py-16 px-4 flex flex-col items-center">
			<h2 className="text-4xl md:text-5xl font-bold text-[#660033] mb-12 text-center">Our Core Service</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
				{/* Service Cards */}
				{services.slice(0, 3).map((service, idx) => (
					<div
						key={idx}
						className="relative rounded-3xl bg-white border border-[#f3e6ee] shadow-md p-8 flex flex-col min-h-[320px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
					>
						<div className="mb-6 flex items-center justify-center">
							<span className="bg-[#f3e6ee] rounded-xl p-3 flex items-center justify-center">{service.icon}</span>
						</div>
						<h3 className="text-2xl font-bold text-[#660033] mb-3">{service.title}</h3>
						<p className="text-gray-500 text-base leading-relaxed">{service.desc}</p>
					</div>
				))}
				{/* CTA Card */}
				<div className="relative rounded-3xl bg-[#660033] flex flex-col justify-between p-8 min-h-[320px] shadow-md text-white col-span-1">
					<div>
						<span className="block text-white/80 mb-2">• Need help?</span>
						<h3 className="text-3xl font-bold leading-tight mb-6">Free advice.<br />Book a callback</h3>
					</div>
					<button className="mt-8 bg-white text-[#660033] font-semibold rounded-full px-8 py-3 text-lg shadow hover:bg-[#f3e6ee] transition-all">Let's Talk</button>
				</div>
				{/* Next row of service cards */}
				{services.slice(3).map((service, idx) => (
					<div
						key={idx}
						className="relative rounded-3xl bg-white border border-[#f3e6ee] shadow-md p-8 flex flex-col min-h-[320px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
					>
						<div className="mb-6 flex items-center justify-center">
							<span className="bg-[#f3e6ee] rounded-xl p-3 flex items-center justify-center">{service.icon}</span>
						</div>
						<h3 className="text-2xl font-bold text-[#660033] mb-3">{service.title}</h3>
						<p className="text-gray-500 text-base leading-relaxed">{service.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
