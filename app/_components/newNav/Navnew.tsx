"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../newNav/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();

  // Function to check if a menu item is active
  const isMenuItemActive = (item: string) => {
    switch (item.toLowerCase()) {
      case 'home':
        return pathname === '/';
      case 'about':
        return pathname.startsWith('/about');
      case 'services':
        return pathname.startsWith('/services');
      case 'contact':
        return pathname.startsWith('/contact');
      default:
        return false;
    }
  };
  return (
    <div
      className={cn("fixed top-10 inset-x-0 w-full mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {/* Logo - Always visible */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src="/FALCONLOGO.png"
              alt="Falcon Industry Logo"
              width={80}
              height={40}
              className="h-8 w-auto"
            />
          </a>
        </div>

        {/* Navigation Items - Only visible on desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <MenuItem 
            setActive={setActive} 
            active={active} 
            item="Home" 
            isActive={isMenuItemActive('Home') && active === null} 
            href="/"
          >
            {/* <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">Home Page</HoveredLink>
              <HoveredLink href="/home">Hero Section</HoveredLink>
            </div> */}
          </MenuItem>

          <MenuItem 
            setActive={setActive} 
            active={active} 
            item="About" 
            isActive={isMenuItemActive('About') && active === null} 
            href="/about"
          >
            {/* <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/about">About Us</HoveredLink>
              <HoveredLink href="/about/Falconabout">Our Story</HoveredLink>
              <HoveredLink href="/about/profilecards">Team</HoveredLink>
              <HoveredLink href="/about/steps">Our Process</HoveredLink>
            </div> */}
          </MenuItem>

          <MenuItem 
            setActive={setActive} 
            active={active} 
            item="Services" 
            isActive={isMenuItemActive('Services') && active === null} 
            href="/services"
          >
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <div className="flex flex-col space-y-4">
                <h4 className="text-lg font-bold mb-2 text-black dark:text-white">Development</h4>
                <HoveredLink href="/services/web-development">Web Development</HoveredLink>
                <HoveredLink href="/services/mobile-apps">Mobile Apps</HoveredLink>
                <HoveredLink href="/services/ui-ux-design">UI/UX Design</HoveredLink>
              </div>
              <div className="flex flex-col space-y-4">
                <h4 className="text-lg font-bold mb-2 text-black dark:text-white">Marketing</h4>
                <HoveredLink href="/services/seo">SEO Services</HoveredLink>
                <HoveredLink href="/services/Graphics">Graphics Design</HoveredLink>
                <HoveredLink href="/services/videoediting">Video Editing</HoveredLink>
              </div>
            </div>
          </MenuItem>

          <MenuItem 
            setActive={setActive} 
            active={active} 
            item="Contact" 
            isActive={isMenuItemActive('Contact') && active === null} 
            href="/contact"
          >
            {/* <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/contact">Contact Us</HoveredLink>
              <HoveredLink href="/contact/Bookcall">Book a Call</HoveredLink>
            </div> */}
          </MenuItem>
        </div>

        {/* Get in Touch Button - Always visible */}
        <div className="flex items-center">
          <a
            href="/contact/Bookcall"
            className="px-4 py-2 bg-[#5C0632] border border-transparent  text-white rounded-lg  font-medium transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </Menu>
    </div>
  );
}
