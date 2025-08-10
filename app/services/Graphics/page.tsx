
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  { title: 'Logo Design', icon: '/file.svg' },
  { title: 'Social Media Creatives', icon: '/heronav.png' },
  { title: 'Brand Identity', icon: '/FALCONLOGO.png' },
  { title: 'Flyers & Brochures', icon: '/image1.png' },
  { title: 'Posters & Banners', icon: '/image2.png' },
  { title: 'Business Cards', icon: '/image3.png' },
  { title: 'Infographics', icon: '/image4.png' },
  { title: 'Packaging Design', icon: '/image6.png' },
];

const portfolioImages = [
  { src: '/business.jpg', alt: 'Business branding design' },
  { src: '/Design & Development.jpg', alt: 'Design and development graphic' },
  { src: '/Strategy & Planning.jpg', alt: 'Strategy and planning visual' },
  { src: '/image25.jpg', alt: 'Creative poster design' },
  { src: '/image26.jpg', alt: 'Brochure sample' },
  { src: '/image27.jpg', alt: 'Logo design sample' },
];

const testimonials = [
  {
    name: 'Amit S.',
    text: 'Falcon Web Solution delivered stunning graphics for our brand. Fast, creative, and professional!',
    avatar: '/men.jpg',
    rating: 5,
  },
  {
    name: 'Priya K.',
    text: 'Loved the quick turnaround and the unique designs. Highly recommended for any business!',
    avatar: '/women.jpg',
    rating: 5,
  },
  {
    name: 'Rahul D.',
    text: 'The team understood our vision perfectly. The branding package was top-notch.',
    avatar: '/men2.jpg',
    rating: 5,
  },
];

export default function GraphicDesignServices() {
  return (
    <>
      <Head>
        <title>Graphic Design Services | Falcon Web Solution</title>
        <meta name="description" content="Get custom graphic design services including logos, social media creatives, branding, and more with Falcon Web Solution. Affordable pricing and fast delivery." />
        <link rel="canonical" href="https://falconwebsolution.com/services/graphics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white text-black">
        {/* Hero Section */}
        <header className="relative flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-16 py-12 md:py-24 bg-white overflow-hidden">
          <div className="w-full md:w-1/2 z-10 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">Creative & Impactful <span className="text-[#E50914]">Graphic Design Services</span></h1>
            <p className="text-lg md:text-2xl mb-6">Stand out with custom designs that speak your brand’s voice. From logos to banners, we design everything with passion and precision.</p>
            <Link href="/contact" className="inline-block bg-[#E50914] text-white font-semibold px-8 py-3 rounded shadow hover:bg-[#b2070d] transition">Get a Free Quote</Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image src="/Design & Development.jpg" alt="Graphic Design Showcase" width={500} height={350} className="rounded-lg shadow-lg object-cover w-full max-w-md h-auto" priority />
          </div>
        </header>

        {/* Services Section */}
        <section className="py-16 px-4 md:px-16 bg-white" aria-label="Our Graphic Design Services">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">Our <span className="text-[#E50914]">Graphic Design Services</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col items-center bg-white border border-gray-100 rounded-lg shadow hover:shadow-lg p-6 transition">
                <Image src={service.icon} alt={service.title + ' icon'} width={48} height={48} className="mb-3" />
                <span className="font-semibold text-lg text-center">{service.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 md:px-16 bg-gray-50" aria-label="Why Choose Falcon Web Solution">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Why Choose <span className="text-[#E50914]">Falcon Web Solution?</span></h2>
          <ul className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
            <li className="flex items-center"><span className="inline-block w-3 h-3 bg-[#E50914] rounded-full mr-3" />3+ Years of Experience</li>
            <li className="flex items-center"><span className="inline-block w-3 h-3 bg-[#E50914] rounded-full mr-3" />Fast Turnaround</li>
            <li className="flex items-center"><span className="inline-block w-3 h-3 bg-[#E50914] rounded-full mr-3" />Unlimited Revisions</li>
            <li className="flex items-center"><span className="inline-block w-3 h-3 bg-[#E50914] rounded-full mr-3" />100% Original Designs</li>
            <li className="flex items-center"><span className="inline-block w-3 h-3 bg-[#E50914] rounded-full mr-3" />Print & Digital Assets</li>
            <li className="flex items-center"><span className="inline-block w-3 h-3 bg-[#E50914] rounded-full mr-3" />Direct Communication</li>
          </ul>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 px-4 md:px-16 bg-white" aria-label="Our Graphic Design Portfolio">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">Our <span className="text-[#E50914]">Graphic Design Portfolio</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {portfolioImages.map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                <Image src={img.src} alt={img.alt} width={400} height={300} className="object-cover w-full h-56" />
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="https://drive.google.com/folderview?id=1w3kQw6w6w6w6w6w6" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#E50914] text-white font-semibold px-8 py-3 rounded shadow hover:bg-[#b2070d] transition">View Full Portfolio</a>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 md:px-16 bg-gray-50" aria-label="What Our Clients Say">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">What Our <span className="text-[#E50914]">Clients Say</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <Image src={t.avatar} alt={t.name + ' avatar'} width={56} height={56} className="rounded-full mb-3" />
                <p className="text-lg mb-2">“{t.text}”</p>
                <div className="flex mb-2">
                  {[...Array(t.rating)].map((_, idx) => (
                    <svg key={idx} className="w-5 h-5 text-[#E50914]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  ))}
                </div>
                <span className="font-semibold">{t.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA / Contact Section */}
        <section className="py-16 px-4 md:px-16 bg-white text-center" aria-label="Contact">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Let’s Start <span className="text-[#E50914]">Designing Together</span></h2>
          <Link href="/contact" className="inline-block bg-[#E50914] text-white font-semibold px-8 py-3 rounded shadow hover:bg-[#b2070d] transition">Contact Us</Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-10 px-4 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-white">Falcon Web Solution</Link>
            <p className="mt-2 text-gray-400">Creative Digital Agency</p>
          </div>
          <nav className="flex flex-col md:flex-row gap-4 md:gap-8 text-lg">
            <Link href="/" className="hover:text-[#E50914]">Home</Link>
            <Link href="/about" className="hover:text-[#E50914]">About</Link>
            <Link href="/services" className="hover:text-[#E50914]">Services</Link>
            <Link href="/contact" className="hover:text-[#E50914]">Contact</Link>
          </nav>
          <div className="flex flex-col gap-2 text-gray-400 text-sm">
            <span>Email: <a href="mailto:info@falconwebsolution.com" className="text-white hover:text-[#E50914]">info@falconwebsolution.com</a></span>
            <span>Phone: <a href="tel:+911234567890" className="text-white hover:text-[#E50914]">+91 12345 67890</a></span>
            <span>Address: Chandigarh, India</span>
            <div className="flex gap-4 mt-2">
              <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-[#E50914]"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm6.25 1.25a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" /></svg></a>
              <a href="https://facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-[#E50914]"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89c1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12" /></svg></a>
              <a href="https://linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-[#E50914]"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.79-1.75-1.76c0-.97.784-1.75 1.75-1.75s1.75.78 1.75 1.75c0 .97-.784 1.76-1.75 1.76zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47c-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56c3.04 0 3.6 2 3.6 4.59v4.74z" /></svg></a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-xs mt-8">&copy; {new Date().getFullYear()} Falcon Web Solution. All rights reserved.</div>
      </footer>
    </>
  );
}