"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const BusinessOverviewVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Replace with your actual core business landscape YouTube video ID
  const youtubeId = "EtQsFNCMTEk"; 

  return (
    <section 
      className="relative py-[96px] overflow-hidden text-center"
      style={{ backgroundColor: '#0A1628', borderTop: '4px solid #C81F08' }}
    >
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Poppins'] font-bold text-[36px] leading-[40px]"
          >
            <span className="text-white">Our Business, Garments &</span>{" "}
            <span style={{ color: '#C81F08' }}>Manufacturing Ecosystem</span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-[3px] mt-4"
            style={{ backgroundColor: '#C81F08' }}
          />
          
          <p className="text-[#94A3B8] font-['Inter'] font-normal text-[16px] leading-[24px] max-w-[700px] mt-6">
            Discover how WILD. transforms design concepts into retail-ready apparel. Watch our complete breakdown of sourcing transparency, quality compliance framework, and massive production capacities.
          </p>
        </div>

        {/* Widescreen Video Box Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full max-w-[1000px] aspect-video rounded-[12px] overflow-hidden bg-black border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
        >
          {isPlaying ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title="WILD Corporate Profile & Manufacturing Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div 
              className="absolute inset-0 w-full h-full cursor-pointer group"
              onClick={() => setIsPlaying(true)}
            >
              {/* Cinematic Cover Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ 
                  backgroundImage: `linear-gradient(0deg, rgba(10, 22, 40, 0.55) 0%, rgba(10, 22, 40, 0.35) 100%), url('/images/hero-bg.jpg')`
                }}
              />

              {/* Pulsing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-24 h-24 rounded-full bg-[#C81F08]/20 animate-ping duration-1000" />
                  <div className="absolute w-32 h-32 rounded-full bg-[#C81F08]/10 animate-pulse duration-1000" />
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center bg-[#C81F08] text-white shadow-2xl transition-colors group-hover:bg-[#b01b07]"
                  >
                    <Play size={32} fill="white" className="ml-1.5" />
                  </motion.button>
                </div>
              </div>

              {/* Lower Overlay Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 text-left z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <p className="text-[#C81F08] font-['Inter'] font-semibold text-[14px] uppercase tracking-[1.5px] mb-1">
                  Corporate Profile
                </p>
                <h3 className="text-white font-['Poppins'] font-bold text-[20px] md:text-[24px] leading-tight">
                  WILD. Sourcing — Crafting Premium Ready-Made Garments Internationally
                </h3>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessOverviewVideo;