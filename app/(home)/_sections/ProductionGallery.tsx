"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProductionGallery = () => {
  return (
    <section className="bg-[#111827] py-[96px]" id='gallery'>
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F7941D] font-['Poppins'] font-bold text-[16px] leading-[24px] tracking-[0.8px] uppercase mb-2 block"
          >
            Inside Our World
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white font-['Poppins'] font-bold text-[36px] leading-[40px] mb-4"
          >
            Production Gallery
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#94A3B8] font-['Inter'] font-normal text-[16px] leading-[24px] max-w-[600px] mx-auto"
          >
            A glimpse into our manufacturing processes and quality checks.
          </motion.p>
        </div>

        {/* Gallery Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto lg:h-[600px] mb-12">
          
          {/* Left Column - Large Image */}
          <GalleryItem 
            src="/images/gallery1.jpg" 
            className="h-[300px] md:h-[400px] lg:h-full"
          />

          {/* Right Column - Nested Grid */}
          {/* h-full ensures it matches the left column on desktop; gap-4 handles spacing on mobile */}
          <div className="grid grid-cols-2 gap-4 lg:grid-rows-2 lg:h-full">
            <GalleryItem 
              src="/images/gallery2.jpg" 
              className="h-[180px] md:h-[250px] lg:h-auto" 
            />
            <GalleryItem 
              src="/images/gallery3.png" 
              className="h-[180px] md:h-[250px] lg:h-auto" 
            />
            <GalleryItem 
              src="/images/gallery4.png" 
              className="col-span-2 h-[200px] md:h-[300px] lg:h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component for individual gallery items with hover state
const GalleryItem = ({ src, className = "" }: { src: string; className?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-[8px] group cursor-pointer ${className}`}
    >
      <Image 
        src={src} 
        alt="Production view" 
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      
      {/* Overlay - appears on hover */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        // Added touch support: hidden on small mobile by default unless you want it on tap
        className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
      >
        <span className="text-white font-['Inter'] font-semibold text-[16px] leading-[24px]">
          Fabric Inspection
        </span>
      </motion.div>
    </motion.div>
  );
};

export default ProductionGallery;