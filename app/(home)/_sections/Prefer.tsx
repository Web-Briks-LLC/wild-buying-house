"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { HandCoins, Award, Clock, Leaf } from 'lucide-react';

const Prefer = () => {
  const features = [
    {
      title: "Competitive Pricing",
      desc: "Direct factory relationships ensuring the best FOB prices without compromising quality.",
      icon: <HandCoins size={32} />
    },
    {
      title: "Uncompromised Quality",
      desc: "Dedicated QC teams placed inside factories for inline and final AQL standard inspections.",
      icon: <Award size={32} />
    },
    {
      title: "On-Time Delivery",
      desc: "Strict critical path management to identify delays early and ensure deadlines are met.",
      icon: <Clock size={32} />
    },
    {
      title: "Sustainable Making",
      desc: "Promoting green factories and sustainable materials (organic cotton, recycled poly).",
      icon: <Leaf size={32} />
    }
  ];

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section 
      className="relative py-[96px] overflow-hidden"
      style={{ backgroundColor: '#0A1628', borderTop: '4px solid #BC2828' }}
    >
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Poppins'] font-bold text-[36px] leading-[40px]"
          >
            <span style={{ color: '#C81F08' }}>Why Brands</span>{" "}
            <span className="text-white">Prefer Wild</span>
          </motion.h2>
          
          {/* Decorative Underline */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="h-[3px] mt-4"
            style={{ backgroundColor: '#C81F08' }}
          />
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div 
                className="w-[80px] h-[80px] rounded-full border-2 flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/5 hover:bg-[#C9A84C] text-[#F7941D] hover:text-white"
                style={{ 
                  borderColor: 'rgba(201, 168, 76, 0.50)',
                  color: ''
                }}
              >
                {feature.icon}
              </div>

              {/* Text Content */}
              <h4 className="text-white font-['Poppins'] font-bold text-[20px] leading-[28px] mb-4">
                {feature.title}
              </h4>
              <p className="text-[#94A3B8] font-['Inter'] font-normal text-[14px] leading-[20px] max-w-[260px]">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Prefer;