"use client";
import React from "react";


const services = [
	{
		icon: (
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="16" stroke="#fff" strokeWidth="4" opacity="0.5" /><path d="M12 20c2-4 8-8 16-8" stroke="#fff" strokeWidth="3" strokeLinecap="round" /></svg>
		),
		title: "YouTube Video Editing",
		desc: "Turn your raw footage into engaging YouTube videos with smooth transitions, captions, intros, and hooks that keep viewers watching till the end."
	},
	{
		icon: (
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="8" y="8" width="10" height="10" rx="3" fill="#fff" opacity="0.7"/><rect x="22" y="8" width="10" height="10" rx="3" fill="#fff" opacity="0.4"/><rect x="8" y="22" width="10" height="10" rx="3" fill="#fff" opacity="0.4"/><rect x="22" y="22" width="10" height="10" rx="3" fill="#fff" opacity="0.7"/></svg>
		),
		title: "Social Media Reels & Shorts",
		desc: "Create viral-ready edits for Instagram, TikTok, and YouTube Shorts. Designed to grab attention fast, boost engagement, and grow your audience organically."
	},
	{
		icon: (
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="8" y="8" width="24" height="24" rx="8" fill="#fff" opacity="0.5"/><circle cx="28" cy="12" r="6" fill="#fff" opacity="0.7"/><rect x="20" y="20" width="12" height="12" rx="6" fill="#fff" opacity="0.7"/></svg>
		),
		title: "Corporate & Promo Videos",
		desc: "Professional, branded edits for corporate presentations, product launches, or marketing campaigns — crafted to reflect your brand’s quality and credibility."
	},
	{
		icon: (
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="8" y="24" width="10" height="8" rx="3" fill="#fff" opacity="0.7"/><rect x="22" y="8" width="10" height="24" rx="5" fill="#fff" opacity="0.4"/></svg>
		),
		title: "Podcast & Interview Edits",
		desc: "Clean, distraction-free editing that enhances clarity, flow, and audience engagement for podcasts, interviews, or talk shows."
	},
	{
		icon: (
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="28" rx="12" ry="6" fill="#fff" opacity="0.5"/><rect x="10" y="8" width="20" height="12" rx="6" fill="#fff" opacity="0.7"/></svg>
		),
		title: "Ad & Sales Video Editing",
		desc: "High-performing ad edits tailored for Facebook, YouTube, and Instagram — built to convert viewers into customers."
	},
	
];

export default function VideoCoreServices() {
	return (
		<section className="w-full bg-white py-16 px-4 flex flex-col items-center">
			<h2 className="text-4xl md:text-5xl font-bold text-[#660033] mb-12 text-center">Our Video Editing Services</h2>
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
