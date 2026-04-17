"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const certifications = [
  { label: "Organic", image: "/images/compliance1.png" },
  { label: "Standards", image: "/images/compliance2.png" },
  { label: "Compliance", image: "/images/compliance3.png" },
  { label: "Apparel", image: "/images/compliance4.png" },
  { label: "Safety", image: "/images/compliance5.png" },
];

const Compliance = () => {
  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-white py-[64px]">
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-['Poppins'] font-bold text-[24px] leading-[32px] mb-2">
            <span style={{ color: '#C81F08' }}>Our Factory</span>{" "}
            <span style={{ color: '#0A1628' }}>Compliance Standards</span>
          </h2>
          <p className="text-[#6B7280] font-['Inter'] font-normal text-[16px] leading-[24px] max-w-[600px] mx-auto">
            We partner exclusively with certified and ethically operated manufacturing units.
          </p>
        </motion.div>

        {/* Logos Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap justify-center items-end gap-8 md:gap-16 lg:gap-24"
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] transition-transform duration-300 group-hover:scale-110">
                <Image 
                  src={cert.image} 
                  alt={cert.label} 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-[#374151] font-['Inter'] font-bold text-[12px] leading-[16px] uppercase tracking-wider">
                {cert.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Compliance;