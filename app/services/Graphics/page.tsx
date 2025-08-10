


"use client";
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ThreeDPortfolio from './ThreeDPortfolio';

const services = [
  { title: 'Logo Design', icon: '🎨', desc: 'Unique, memorable logos for your brand.' },
  { title: 'Social Media Posts', icon: '📱', desc: 'Eye-catching posts for all platforms.' },
  { title: 'Flyers & Brochures', icon: '📰', desc: 'Promotional print and digital flyers.' },
  { title: 'Posters & Banners', icon: '🖼️', desc: 'Large format designs for events and ads.' },
  { title: 'Business Cards', icon: '💼', desc: 'Professional cards to make connections.' },
  { title: 'Infographics', icon: '📊', desc: 'Data visualizations that tell a story.' },
  { title: 'Brand Identity Kits', icon: '🧩', desc: 'Complete branding assets for your business.' },
  { title: 'Packaging Designs', icon: '📦', desc: 'Attractive, functional packaging.' },
];

const portfolioImages = [
  { src: '/business.jpg', alt: 'Logo Design for BusinessX' },
  { src: '/Design & Development.jpg', alt: 'Branding for Tech Startup' },
  { src: '/Strategy & Planning.jpg', alt: 'Poster for Strategy Event' },
  { src: '/image25.jpg', alt: 'Brochure for Cafe' },
  { src: '/image26.jpg', alt: 'Banner for School' },
  { src: '/image27.jpg', alt: 'Infographic for Marketing' },
  { src: '/image28.jpg', alt: 'Business Card for Consultant' },
  { src: '/image29.jpg', alt: 'Packaging for Food Brand' },
  { src: '/image30.jpg', alt: 'Social Media Post for Restaurant' },
];

export default function GraphicDesignServices() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!form.name || !form.email || !form.service || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess('Thank you! Your request has been sent.');
      setForm({ name: '', email: '', service: '', message: '' });
    }, 1200);
    // To POST to API: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
  };

  return (
    <>
      <Head>
        <title>Graphic Design Services | Falcon Web Solution</title>
        <meta name="description" content="Get professional graphic design services like logos, branding, social media creatives, and more from Falcon Web Solution. Affordable pricing. Quick delivery." />
        <link rel="canonical" href="https://falconwebsolution.com/services/graphics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white text-black">
        {/* Hero Section */}
        <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-16 py-12 md:py-24 gap-8" aria-label="Hero">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">Professional <span className="text-[#E50914]">Graphic Design Services</span></h1>
            <p className="text-lg md:text-2xl mb-6">We design with purpose—logos, banners, social creatives, and more tailored to elevate your brand.</p>
            <a href="#portfolio" className="inline-block bg-[#E50914] text-white font-semibold px-8 py-3 rounded shadow hover:bg-[#b2070d] transition">View Our Work</a>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image src="/Design & Development.jpg" alt="Graphic Design Showcase" width={500} height={350} className="rounded-lg shadow-lg object-cover w-full max-w-md h-auto" priority />
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 md:px-16 bg-white" aria-label="What We Offer">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">What <span className="text-[#E50914]">We Offer</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col items-center bg-white border border-gray-100 rounded-lg shadow hover:shadow-lg p-6 transition text-center">
                <span className="text-4xl mb-2" aria-hidden="true">{service.icon}</span>
                <span className="font-semibold text-lg mb-1">{service.title}</span>
                <span className="text-sm text-gray-600">{service.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section - 3D */}
        <section id="portfolio" className="py-16 px-4 md:px-16 bg-gray-50" aria-label="Our Previous Work">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">Our <span className="text-[#E50914]">Previous Work</span></h2>
          <div className="max-w-5xl mx-auto mb-8">
            <ThreeDPortfolio />
          </div>
          <div className="text-center mt-8">
            <a href="https://drive.google.com/folderview?id=1w3kQw6w6w6w6w6w6" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#E50914] text-white font-semibold px-8 py-3 rounded shadow hover:bg-[#b2070d] transition">View Full Portfolio</a>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 md:px-16 bg-white" aria-label="Why Clients Trust Falcon">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Why Clients <span className="text-[#E50914]">Trust Falcon</span></h2>
          <ul className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
            <li className="flex items-center gap-2"><span role="img" aria-label="check">✅</span>3+ Years Experience</li>
            <li className="flex items-center gap-2"><span role="img" aria-label="check">✅</span>Unlimited Revisions</li>
            <li className="flex items-center gap-2"><span role="img" aria-label="check">✅</span>Fast Delivery</li>
            <li className="flex items-center gap-2"><span role="img" aria-label="check">✅</span>Creative & Original Concepts</li>
            <li className="flex items-center gap-2"><span role="img" aria-label="check">✅</span>100+ Happy Clients</li>
          </ul>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-4 md:px-16 bg-gray-50" aria-label="Get a Free Quote">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Get a <span className="text-[#E50914]">Free Quote</span></h2>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white rounded-lg shadow p-8 flex flex-col gap-4" aria-label="Contact Form" autoComplete="off" noValidate>
            <label htmlFor="name" className="font-semibold">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
              value={form.name}
              onChange={handleChange}
              required
              aria-required="true"
            />
            <label htmlFor="email" className="font-semibold">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
              value={form.email}
              onChange={handleChange}
              required
              aria-required="true"
            />
            <label htmlFor="service" className="font-semibold">Service Needed</label>
            <select
              id="service"
              name="service"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
              value={form.service}
              onChange={handleChange}
              required
              aria-required="true"
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.title} value={s.title}>{s.title}</option>
              ))}
            </select>
            <label htmlFor="message" className="font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
              value={form.message}
              onChange={handleChange}
              required
              aria-required="true"
            />
            {error && <div className="text-red-600 text-sm mt-2" role="alert">{error}</div>}
            {success && <div className="text-green-600 text-sm mt-2" role="status">{success}</div>}
            <button
              type="submit"
              className="mt-4 bg-[#E50914] text-white font-semibold px-8 py-3 rounded shadow hover:bg-[#b2070d] transition disabled:opacity-60"
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? 'Sending...' : 'Send Request'}
            </button>
          </form>
        </section>
      </main>
    </>
  );
}