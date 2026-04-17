"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const AboutWild = () => {
  // Animation Variants with explicit Types to resolve TS error
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" // This works when the object is explicitly typed as Variants
      } 
    },
  };

  return (
    <section className="bg-white py-[96px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Side: Images */}
        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          {/* Main Large Image - Now z-30 to be on TOP */}
          <div 
            className="relative z-30 overflow-hidden rounded-[8px] aspect-[4/3]"
            style={{ 
                boxShadow: '0 0 10px 0 #C81F08',
                background: 'lightgray -0.01px -0.005px / 100.003% 100.003% no-repeat'
            }}
          >
            <Image 
              src="/images/first.jpg" 
              alt="Factory Interior" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Secondary Small Image - Now z-20 to be BELLOW and NO border */}
          <motion.div 
            className="absolute -right-4 -bottom-10 z-20 w-1/2 aspect-[4/3] rounded-[8px] overflow-hidden hidden sm:block"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image 
              src="/images/second.jpg" 
              alt="Apparel Detail" 
              fill
              className="object-cover"
              sizes="25vw"
            />
          </motion.div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          className="flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.span 
            variants={itemVariants}
            className="text-[#1E1E1E] font-bold text-[16px] leading-[24px] tracking-[0.8px] uppercase mb-4"
          >
            About Wild
          </motion.span>

          <motion.h2 variants={itemVariants} className="font-bold text-[36px] md:text-[44px] leading-[1.1] mb-6">
            <span style={{ color: '#C81F08' }}>Excellence in Apparel</span>{' '}
            <span className="text-[#0A1628]">Sourcing & Manufacturing</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="font-inter font-normal text-[#4B5563] text-[16px] md:text-[18px] leading-[28px] mb-10"
          >
            Established in Dhaka, Bangladesh, WILD is a premier buying house and
            apparel sourcing agent. We offer comprehensive supply chain solutions for
            fashion apparel networks worldwide. With deep industry knowledge and an
            extensive network of compliant factories, we deliver high-quality garments
            on time, every time.
          </motion.p>

          <div className="space-y-5">
            <motion.div 
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="p-6 rounded-[4px] flex items-start gap-5 transition-colors bg-[#F9FAFB] border-l-4 border-[#C81F08] shadow-sm hover:shadow-md"
            >
              <div className="flex-shrink-0 mt-1">
                <Target size={26} className="text-[#C81F08]" strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="text-[#0A1628] font-bold text-[18px] mb-1">
                  Our Mission
                </h4>
                <p className="font-inter font-normal text-[#4B5563] text-[15px] leading-[22px]">
                  To be the most reliable and innovative sourcing partner, ensuring
                  sustainable and ethical production for global brands.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="p-6 rounded-[4px] flex items-start gap-5 transition-colors bg-[#F9FAFB] border-l-4 border-[#0A1628] shadow-sm hover:shadow-md"
            >
              <div className="flex-shrink-0 mt-1">
                <Eye size={26} className="text-[#0A1628]" strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="text-[#0A1628] font-bold text-[18px] mb-1">
                  Our Vision
                </h4>
                <p className="font-inter font-normal text-[#4B5563] text-[15px] leading-[22px]">
                  To lead the global apparel supply chain with unparalleled quality,
                  transparency, and unwavering integrity.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutWild;