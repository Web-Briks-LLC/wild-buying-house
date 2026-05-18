"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const logos = [
  "/images/logo1.svg",
  "/images/logo2.svg",
  "/images/logo3.svg",
  "/images/logo4.svg",
  "/images/logo5.svg",
  "/images/logo6.svg",
  "/images/logo7.svg",
];

const testimonials = [
  {
    text: "Communication is always clear, and their understanding of denim washes and treatments is exceptional. Highly recommend them as a local partner.",
    author: "David Chen",
    title: "CEO, Urban Denim Brand CA"
  },
  {
    text: "WILD has been instrumental in our supply chain growth. Their attention to quality and compliance standards is unmatched in the industry.",
    author: "Sarah Jenkins",
    title: "Production Head, Global Apparel"
  }
];

const ClientFeedBack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic for testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#F8FAFC] py-20 overflow-hidden" id='clients'>
      {/* Header Section - Centered */}
      <div className="max-w-[1440px] mx-auto text-center mb-16 px-6">
        <span className="text-[#1E1E1E] font-['Poppins'] font-bold text-[16px] leading-[24px] tracking-[0.8px] uppercase mb-2 block">
          Global Trust
        </span>
        <h2 className="font-['Poppins'] font-bold text-[36px] leading-[40px]">
          <span className="text-[#BC2828]">Our Trusted</span>{" "}
          <span className="text-[#0A1628]">Clients</span>
        </h2>
      </div>

      {/* Infinite Logo Slider - Full Width Background */}
      <div className="w-full bg-white border-y border-[#E5E7EB] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] py-12 mb-20 relative flex overflow-hidden">
        <motion.div 
          className="flex gap-20 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* We duplicate the array to ensure a seamless loop across the full screen width */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="relative w-[150px] h-[60px] flex-shrink-0 transition-transform hover:scale-105"
            >
              <Image 
                src={logo} 
                alt={`Client Logo ${index}`} 
                fill 
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Testimonial Section - Centered */}
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Quote size={36} className="text-[#BC2828] rotate-180" strokeWidth={3} fill="#BC2828" />
          </div>

          <div className="relative min-h-[220px] md:min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <p className="text-[#374151] font-['Inter'] font-light italic text-[20px] md:text-[24px] leading-[32px] mb-8">
                  &quot;{testimonials[currentIndex].text}&quot;
                </p>

                <h4 className="text-[#BC2828] font-['Poppins'] font-bold text-[16px] leading-[24px] mb-1">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-[#F7941D] font-['Inter'] font-normal text-[14px] leading-[20px]">
                  {testimonials[currentIndex].title}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-[#F7941D] w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedBack;