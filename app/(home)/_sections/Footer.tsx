"use client";

import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {

  const categories = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Clients", href: "#clients" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
  ];

  return (
    <footer className="bg-[#0A1628] pt-[96px] pb-8">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div 
              className="font-['Poppins'] font-bold text-[30px] leading-[36px] tracking-[3px] mb-6"
              style={{ color: '#C81F08' }}
            >
              WILD.
            </div>
            <p className="text-[#9CA3AF] font-['Inter'] font-normal text-[14px] leading-[22.75px] mb-8 max-w-[320px]">
              From concept to warehouse delivery in just 14 days, we provide the speed of retail with the scale of wholesale. Backed by 22 years of denim mastery.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ backgroundColor: '#C9A84C', scale: 1.1 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                  style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links / Categories */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-['Poppins'] font-bold text-[16px] leading-[24px] tracking-[0.4px] mb-8 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <a href={cat.href} className="text-[#D1D5DB] font-['Inter'] font-normal text-[14px] leading-[20px] hover:text-[#C81F08] transition-colors">
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4 lg:col-start-9">
            <h4 className="text-white font-['Poppins'] font-bold text-[16px] leading-[24px] tracking-[0.4px] mb-8 uppercase">
              Newsletter
            </h4>
            <p className="text-[#9CA3AF] font-['Inter'] font-normal text-[14px] leading-[22.75px] mb-6">
              Subscribe to our newsletter for insights on denim manufacturing, market trends, and sustainable sourcing.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.10)] rounded-[4px] px-4 py-3 text-white text-[14px] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#C81F08] transition-all"
              />
              <button 
                className="w-full bg-[#C81F08] text-white py-3 rounded-[4px] font-['Inter'] font-medium text-[14px] leading-[20px] hover:bg-[#b01b07] transition-all active:scale-[0.98]"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.10)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#6B7280] font-['Inter'] font-normal text-[12px] leading-[16px]">
            © {new Date().getFullYear()} Wild Fashion. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="/privacy-policy" className="text-[#6B7280] font-['Inter'] font-normal text-[12px] hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="text-[#6B7280] font-['Inter'] font-normal text-[12px] hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;