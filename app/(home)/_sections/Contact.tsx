"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { MapPin, Mail, PhoneCall } from 'lucide-react';

const Contact = () => {
  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="bg-white py-[96px]">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Contact Form */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="text-[#C81F08] font-['Poppins'] font-bold text-[16px] leading-[24px] tracking-[0.8px] uppercase mb-2 block">
            Let&apos;s Connect
          </span>
          <h2 className="text-[#0A1628] font-['Poppins'] font-bold text-[36px] leading-[40px] mb-10">
            Ready to Start Sourcing?
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[#374151] font-['Inter'] font-medium text-[14px] leading-[20px]">
                  Full Name
                </label>
                <input 
                  type="text" 
                  placeholder="Fardin Evan"
                  className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[4px] px-4 py-3 text-[#94A3B8] font-['Inter'] text-[16px] focus:outline-none focus:border-[#C81F08] transition-colors"
                />
              </div>
              {/* Company Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[#374151] font-['Inter'] font-medium text-[14px] leading-[20px]">
                  Company Name
                </label>
                <input 
                  type="text" 
                  placeholder="Brand Inc."
                  className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[4px] px-4 py-3 text-[#94A3B8] font-['Inter'] text-[16px] focus:outline-none focus:border-[#C81F08] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-[#374151] font-['Inter'] font-medium text-[14px] leading-[20px]">
                  Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="fardin@example.com"
                  className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[4px] px-4 py-3 text-[#94A3B8] font-['Inter'] text-[16px] focus:outline-none focus:border-[#C81F08] transition-colors"
                />
              </div>
              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-[#374151] font-['Inter'] font-medium text-[14px] leading-[20px]">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  placeholder="+1 234 567 8900"
                  className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[4px] px-4 py-3 text-[#94A3B8] font-['Inter'] text-[16px] focus:outline-none focus:border-[#C81F08] transition-colors"
                />
              </div>
            </div>

            {/* Product Interest */}
            <div className="flex flex-col gap-2">
              <label className="text-[#374151] font-['Inter'] font-medium text-[14px] leading-[20px]">
                Product Interest
              </label>
              <input 
                type="text" 
                placeholder="Knit Wear"
                className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[4px] px-4 py-3 text-[#94A3B8] font-['Inter'] text-[16px] focus:outline-none focus:border-[#C81F08] transition-colors"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-[#374151] font-['Inter'] font-medium text-[14px] leading-[20px]">
                Your Message
              </label>
              <textarea 
                rows={4}
                placeholder="Tell us about your sourcing needs, quantities, and timelines..."
                className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[4px] px-4 py-3 text-[#94A3B8] font-['Inter'] text-[16px] focus:outline-none focus:border-[#C81F08] transition-colors resize-none"
              />
            </div>

            <button className="w-full bg-[#0A1628] text-white py-4 rounded-[4px] font-['Inter'] font-semibold text-[16px] transition-all hover:bg-[#1a2b44] active:scale-[0.98]">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Right Side: Office Info Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[8px] overflow-hidden flex flex-col h-full shadow-2xl"
        >
          {/* Top Info Panel */}
          <div className="bg-[#0A1628] p-10 space-y-10">
            <h3 className="text-[#F7941D] font-['Poppins'] font-bold text-[24px] leading-[32px]">
              Our Offices
            </h3>

            <div className="space-y-8">
              {/* Location */}
              <div className="flex gap-4">
                <MapPin className="text-[#F7941D] flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-['Poppins'] font-bold text-[18px] leading-[28px] mb-1">
                    Head Office - Dhaka
                  </h4>
                  <p className="text-[#D1D5DB] font-['Inter'] font-normal text-[14px] leading-[20px]">
                    House 45, Road 12, Dhanmondi<br />
                    Dhaka-1213, Bangladesh
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <Mail className="text-[#F7941D] flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-['Poppins'] font-bold text-[18px] leading-[28px] mb-1">
                    Email Us
                  </h4>
                  <p className="text-[#D1D5DB] font-['Inter'] font-normal text-[14px] leading-[20px]">
                    info@wildsourcing.com<br />
                    sales@wildsourcing.com
                  </p>
                </div>
              </div>

              {/* Call */}
              <div className="flex gap-4">
                <PhoneCall className="text-[#F7941D] flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-['Poppins'] font-bold text-[18px] leading-[28px] mb-1">
                    Call Us
                  </h4>
                  <p className="text-[#D1D5DB] font-['Inter'] font-normal text-[14px] leading-[20px]">
                    +880 2 9876543 (BD)<br />
                    +1 800 123 4567 (US Toll Free)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Image Panel */}
          <div className="relative flex-grow min-h-[300px] w-full bg-[#0A1628]">
            <Image 
              src="/images/map.png" 
              alt="Global Network" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;