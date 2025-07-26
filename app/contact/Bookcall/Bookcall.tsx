"use client";

import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { Send, User, Mail, Phone, MessageSquare, Briefcase, CheckCircle } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  services: string[];
  message: string;
}

const serviceOptions = [
  { id: "web-development", label: "Web Development", description: "Custom websites and web applications" },
  { id: "ui-ux-design", label: "UI/UX Design", description: "User interface and experience design" },
  { id: "mobile-apps", label: "Mobile Apps", description: "iOS and Android app development" },
  { id: "seo", label: "SEO Optimization", description: "Search engine optimization services" },
  { id: "graphic-design", label: "Graphic Design", description: "Branding and visual design" },
  { id: "video-editing", label: "Video Editing", description: "Professional video production and editing" },
  { id: "consulting", label: "Digital Consulting", description: "Strategic digital transformation" },
  { id: "maintenance", label: "Website Maintenance", description: "Ongoing support and updates" }
];

export default function BookCall() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    services: [],
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      // Indian mobile number validation: 10 digits, starts with 6-9
      const phonePattern = /^[6-9]\d{9}$/;
      if (!phonePattern.test(formData.phone.trim())) {
        newErrors.phone = "Phone number is invalid. Please enter a valid 10-digit mobile number.";
      }
    }
    if (formData.services.length === 0) newErrors.services = ["Please select at least one service"];
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleServiceChange = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
    
    // Clear service error
    if (errors.services) {
      setErrors(prev => ({ ...prev, services: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const templateParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        services: formData.services.join(', '),
        description: formData.message
      };
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
      
      // Show detailed error message to user
      let errorMessage = "There was an error submitting your inquiry. ";
      
      if (error instanceof Error) {
        if (error.message.includes('Failed to fetch') || error.message.includes('network')) {
          errorMessage += "Please check your internet connection and try again.";
        } else {
          errorMessage += error.message;
        }
      }
      
      errorMessage += " You can also contact us directly at falconsolutions492@gmail.com";
      
      setSubmitError(errorMessage);
      
      // Log the form data for debugging
      console.log("Form data that should be sent:", {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || 'Not specified',
        services: formData.services.join(', '),
        message: formData.message || 'No additional message provided'
      });
      
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4">
        <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
            Thank You!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            We've received your inquiry and will get back to you within 24 hours. Our team is excited to discuss your project!
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setSubmitError(null);
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                company: "",
                services: [],
                message: ""
              });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
          Let's Build Something Amazing Together
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300">
          Tell us about your project and we'll provide you with a detailed proposal and timeline.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.01]">
          {/* Personal Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center transition-colors duration-300">
              <User className="w-6 h-6 mr-3 text-[#5C0632] transition-transform duration-300" />
              Personal Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:shadow-md hover:border-blue-300 transform hover:-translate-y-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:border-blue-500 ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="John"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:shadow-md hover:border-blue-300 transform hover:-translate-y-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:border-blue-500 ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Doe"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:shadow-md hover:border-blue-300 transform hover:-translate-y-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:border-blue-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:shadow-md hover:border-blue-300 transform hover:-translate-y-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:border-blue-500 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>
            
            <div className="mt-6 group">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5C0632] focus:border-transparent transition-all duration-200 hover:shadow-md hover:border-[#5C0632] transform hover:-translate-y-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:border-[#5C0632]"
                placeholder="Your Company"
              />
            </div>
          </div>

          {/* Services Selection */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center transition-colors duration-300">
              <Briefcase className="w-6 h-6 mr-3 text-[#5C0632] transition-transform duration-300" />
              Services Needed *
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceOptions.map((service) => (
                <div
                  key={service.id}
                  className={`group relative border rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:scale-105 hover:-translate-y-1 ${
                    formData.services.includes(service.id)
                      ? "border-[#5C0632] bg-[#5C0632]/10 dark:bg-[#5C0632]/20 shadow-md"
                      : "border-gray-300 dark:border-gray-600 hover:border-[#5C0632] hover:bg-[#5C0632]/5 dark:hover:bg-[#5C0632]/10"
                  }`}
                  onClick={() => handleServiceChange(service.id)}
                >
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service.id)}
                      onChange={() => handleServiceChange(service.id)}
                    className="mt-1 mr-3 text-[#5C0632] focus:ring-[#5C0632] hover:scale-110 transition-transform duration-200"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-[#5C0632] dark:group-hover:text-[#5C0632] transition-colors duration-200">{service.label}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-200">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {errors.services && <p className="text-red-500 text-sm mt-2">Please select at least one service</p>}
          </div>

          {/* Message */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center transition-colors duration-300">
              <MessageSquare className="w-6 h-6 mr-3 text-[#5C0632] transition-transform duration-300" />
              Project Description
            </h3>
            
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5C0632] focus:border-transparent transition-all duration-200 hover:shadow-md hover:border-[#5C0632] transform hover:-translate-y-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:border-[#5C0632]"
              placeholder="Tell us more about your project, goals, and any specific requirements..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            {submitError && (
              <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-600 dark:text-red-400 text-sm">{submitError}</p>
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
            className={`inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#5C0632] to-[#5C0632] hover:from-[#4a0527] hover:to-[#4a0527] disabled:from-[#a97c9a] disabled:to-[#a97c9a] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 ${
                isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-3 text-[#5C0632] hover:animate-pulse" />
                  Send My Inquiry
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}