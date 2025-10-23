"use client";

import React from "react";
import { MessageCircle, MessageSquare, MapPin, Phone } from "lucide-react";

import { FAQ } from "./faq";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Content */}
      <div className="py-16 px-4 mt-28">
        <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/Falcon.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Contact our friendly team
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let us know how we can help.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Chat to Sales */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:border-gray-300 dark:hover:border-white/30">
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600">
                <MessageCircle className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Book Call
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Book a call with our team.
              </p>
            </div>
            <a
              href="/contact/Bookcall"
              className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 border-b border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 break-words"
            >
              Book a Call
            </a>
          </div>

          {/* Chat to Support */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:border-gray-300 dark:hover:border-white/30">
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600">
                <MessageSquare className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Chat to support
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We're here to help.
              </p>
            </div>
            <a
              href="mailto:falconsolutions492@gmail.com"
              className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 border-b border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 break-words"
            >
               falconsolutions492@gmail.com
            </a>
          </div>

          {/* Visit Us */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:border-gray-300 dark:hover:border-white/30">
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600">
                <MapPin className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Visit us
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Visit our office HQ.
              </p>
            </div>
            <a
              href="https://www.google.com/maps/place/GMJC%2B5CF,+Jansla,+Punjab+140506/@30.5304869,76.6710047,652m/data=!3m2!1e3!4b1!4m6!3m5!1s0x390fc2e232e44329:0x3d339f2db6649e75!8m2!3d30.5304869!4d76.6710047!16s%2Fg%2F11q4087pxq?entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D"
              className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 border-b border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400"
            >
              View on Google Maps
            </a>
          </div>

          {/* Call Us */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:border-gray-300 dark:hover:border-white/30">
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600">
                <Phone className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Call us
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Mon-Fri from 8am to 5pm.
              </p>
            </div>
            <a
              href="tel:+15550000000"
              className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 border-b border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400"
            >
              +91 6239625959
       
              
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ />
        </div>
      </div>
      </div>
  );
}