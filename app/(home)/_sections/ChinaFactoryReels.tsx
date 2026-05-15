"use client";

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Play, MapPin } from 'lucide-react';

const ChinaFactoryReels = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const reel = {
    id: "china-1",
    title: "Smart Automation Assembly Line",
    tag: "Tech & Innovation",
    youtubeId: "wr3HLFJFPqs", 
    thumbnail: "/images/first.jpg" 
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="bg-white py-[96px]">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#1E1E1E] font-['Poppins'] font-bold text-[16px] leading-[24px] tracking-[0.8px] uppercase mb-2 block">
            Global Supply Chain
          </span>
          <h2 className="font-['Poppins'] font-bold text-[36px] leading-[40px] mb-4">
            <span style={{ color: '#C81F08' }}>China Factory</span>{" "}
            <span className="text-[#0A1628]">Visit Highlight</span>
          </h2>
          <p className="text-[#4B5563] font-['Inter'] font-normal text-[16px] leading-[24px] max-w-[650px] mx-auto">
            A behind-the-scenes look at our sourcing operations, advanced technology integration, and partner facilities during our latest inspection tour in China.
          </p>
        </div>

        {/* Centered Single Reel Container */}
        <div className="flex justify-center w-full">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={!isPlaying ? { y: -6 } : {}}
            className="relative w-full max-w-[380px] aspect-[9/16] rounded-[8px] overflow-hidden bg-black shadow-lg border-2 border-[#C81F08]/10 group"
          >
            {isPlaying ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${reel.youtubeId}?autoplay=1&rel=0`}
                title={reel.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
                {/* Thumbnail Cover */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${reel.thumbnail}')` }}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-transparent to-black/40 transition-opacity duration-300 group-hover:opacity-90" />
                
                {/* Tag Badge */}
                <span className="absolute top-4 left-4 bg-[#C81F08] text-white font-['Inter'] text-[12px] font-semibold uppercase tracking-wider px-3 py-1 rounded-[4px] flex items-center gap-1.5 shadow-md">
                  <MapPin size={12} />
                  {reel.tag}
                </span>

                {/* Centered Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full flex items-center justify-center bg-[#C81F08] text-white transition-colors duration-300 group-hover:bg-[#b01b07] shadow-[0_0_15px_rgba(200,31,8,0.5)]"
                  >
                    <Play size={24} fill="white" className="ml-1" />
                  </motion.div>
                </div>

                {/* Content Overlays */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-left z-20">
                  <h4 className="text-white font-['Poppins'] font-bold text-[18px] leading-[24px]">
                    {reel.title}
                  </h4>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChinaFactoryReels;