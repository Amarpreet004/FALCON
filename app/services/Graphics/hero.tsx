"use client";
import React from "react";

export default function GraphicsHero() {
    return (
        <section className="w-full bg-white py-12 px-4 flex flex-col md:flex-row-reverse items-center justify-center min-h-[60vh] relative overflow-hidden">
            {/* Right: Image & Shapes */}
            <div className="relative flex-1 flex items-center justify-center mb-10 md:mb-0 md:pl-12">
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#660033]/10 rounded-full blur-2xl animate-float" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#660033]/20 rounded-full blur-xl animate-float-delay" />
                <div className="absolute top-10 right-0 w-16 h-16 bg-[#660033]/20 rounded-full blur-lg animate-float" />
                <img
                    src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&auto=format&fit=crop"
                    alt="Falcon Web Solution UI/UX and Graphic Design Portfolio"
                    className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-xl border-4 border-white"
                    draggable={false}
                />
                {/* Decorative shapes */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#660033] rounded-full opacity-80 rotate-12" />
                <div className="absolute bottom-8 right-8 w-8 h-8 bg-[#660033] rounded-lg opacity-60 rotate-45" />
                <div className="absolute top-1/2 left-0 w-8 h-8 bg-[#660033] rounded-full opacity-40" />
            </div>

            {/* Left: Content */}
            <div className="flex-1 flex flex-col items-start animate-fade-in-left">
                <span className="text-lg font-semibold text-[#660033] mb-2 animate-slide-in">
                    Falcon Web Solution
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#222] mb-4 leading-tight animate-fade-in">
                    Expert <span className="text-[#660033]">UI/UX & Graphic Design</span>
                    <br />
                    That Builds Your Brand
                </h1>
                <p className="text-base text-gray-600 mb-6 max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    We create stunning, user-centric designs that convert visitors into customers. From logos and branding to complete web solutions, we bring your vision to life.
                </p>
                <button className="flex items-center gap-2 px-6 py-3 mt-4 mb-6 bg-[#660033] text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-[#660033] border-2 border-[#660033] transition-all duration-300 group animate-bounce-in">
                    <span className="inline-block bg-white text-[#660033] rounded-full p-2 group-hover:bg-[#660033] group-hover:text-white transition-all duration-300">
                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M5 10h10M10 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    Get Your Free Quote
                </button>
                <div className="flex items-center gap-4 mt-2 mb-4">
                    <a href="#" aria-label="Visit our Twitter" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#660033] text-[#660033] hover:bg-[#660033] hover:text-white transition-all duration-300">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 12 8.09c0 .34.04.67.1.99C8.09 8.9 4.84 7.13 2.67 4.15c-.37.64-.58 1.38-.58 2.17 0 1.5.77 2.82 1.95 3.6-.72-.02-1.4-.22-2-.55v.06c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.65 0-1.28-.04-1.9-.12A12.13 12.13 0 0 0 7.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.18 8.18 0 0 0 22.46 6z"/></svg>
                    </a>
                    <a href="#" aria-label="Visit our Github" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#660033] text-[#660033] hover:bg-[#660033] hover:text-white transition-all duration-300">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.07 8.19 8.93.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.23-3.23-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.23 0 4.64-2.8 5.67-5.47 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A10.01 10.01 0 0 0 22 12c0-5.5-4.46-9.96-9.96-9.96z"/></svg>
                    </a>
                    <a href="#" aria-label="Visit our YouTube" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#660033] text-[#660033] hover:bg-[#660033] hover:text-white transition-all duration-300">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M21.54 7.2c-.13-.47-.5-.84-.97-.97C19.36 6 12 6 12 6s-7.36 0-8.57.23c-.47.13-.84.5-.97.97C2 8.41 2 12 2 12s0 3.59.23 4.8c.13.47.5.84.97.97C4.64 18 12 18 12 18s7.36 0 8.57-.23c.47-.13.84-.5.97-.97.23-1.21.23-4.8.23-4.8s0-3.59-.23-4.8zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z"/></svg>
                    </a>
                </div>
                {/* Social label */}
                <div className="absolute right-0 bottom-8 flex flex-col items-center">
                    <span className="text-xs text-[#660033] font-medium rotate-90 tracking-widest">Follow Us</span>
                    <span className="w-1 h-8 bg-[#660033] rounded-full mt-2" />
                </div>
            </div>
            {/* Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                @keyframes float-delay {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-25px) rotate(-5deg); }
                }
                @keyframes fade-in {
                    0% { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in-left {
                    0% { opacity: 0; transform: translateX(-40px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes slide-in {
                    0% { opacity: 0; transform: translateX(-30px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes bounce-in {
                    0% { opacity: 0; transform: scale(0.8); }
                    60% { opacity: 1; transform: scale(1.05); }
                    100% { opacity: 1; transform: scale(1); }
                }
                .animate-float { animation: float 8s ease-in-out infinite; }
                .animate-float-delay { animation: float-delay 9s ease-in-out infinite; }
                .animate-fade-in { animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both; }
                .animate-fade-in-left { animation: fade-in-left 1.2s cubic-bezier(.4,0,.2,1) both; }
                .animate-slide-in { animation: slide-in 1.2s cubic-bezier(.4,0,.2,1) both; }
                .animate-bounce-in { animation: bounce-in 1.1s cubic-bezier(.4,0,.2,1) both; }
            `}</style>
        </section>
    );
}