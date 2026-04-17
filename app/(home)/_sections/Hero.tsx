"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '250+', label: 'Global Clients' },
    { number: '100M+', label: 'Products Shipped' },
    { number: '45+', label: 'Export Countries' },
  ];

  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const navbarVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(0deg, rgba(10, 22, 40, 0.40) 0%, rgba(10, 22, 40, 0.40) 100%), url('/images/hero-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Navbar */}
      <motion.nav 
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
        className="relative z-50 w-full bg-black/50 backdrop-blur-sm shadow-[0_4px_6px_-1px_rgba(0,0,0,0.10)]"
      >
        <div className="max-w-[1440px] mx-auto px-6 h-[80px] flex items-center justify-between">
          {/* Logo */}
          <div 
            className="font-['Poppins'] font-bold text-[30px] leading-[36px] tracking-[3px]"
            style={{ color: '#C81F08' }}
          >
            WILD.
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Services', 'Products', 'Clients', 'Gallery', 'Contact'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="text-white font-['Inter'] font-medium text-[14px] leading-[20px] hover:text-[#C81F08] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-[#C81F08] text-white px-6 py-2.5 rounded-[4px] font-['Inter'] font-medium text-[16px] leading-[24px] transition-transform hover:scale-105 active:scale-95">
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu with Framer Motion AnimatePresence */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-black/95 p-6 flex flex-col gap-4 overflow-hidden"
            >
              {['Home', 'About', 'Services', 'Products', 'Clients', 'Gallery', 'Contact'].map((link) => (
                <a key={link} href="#" className="text-white text-lg border-b border-white/10 pb-2">{link}</a>
              ))}
              <button className="bg-[#C81F08] text-white py-3 rounded-[4px]">Get a Quote</button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex flex-col max-w-[1440px] mx-auto px-6 w-full">
        {/* Main Text Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mt-[124px] max-w-[850px]"
        >
          <motion.h3 variants={fadeInUp} className="text-white font-['Inter'] font-semibold text-[16px] leading-[24px] tracking-[0.8px] uppercase mb-4">
            Premium Ready-Made Garments
          </motion.h3>
          
          <motion.h1 variants={fadeInUp} className="text-white font-['Poppins'] font-bold text-[40px] md:text-[60px] leading-[1.1] mb-6">
            Your Trusted <span style={{ color: '#C81F08' }}>Clothing Sourcing</span> Partner in Bangladesh
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-[#D1D5DB] font-['Inter'] font-light text-[18px] md:text-[20px] leading-[28px] max-w-[680px] mb-10">
            End-to-end apparel manufacturing and sourcing solutions. We bridge
            the gap between global fashion brands and world-class production
            facilities.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-20">
            <button className="bg-[#C81F08] text-white px-8 py-4 rounded-[4px] font-['Inter'] font-medium text-[18px] leading-[28px] transition-all hover:bg-[#b01b07]">
              Work With Us
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-4 rounded-[4px] font-['Inter'] font-medium text-[18px] leading-[28px] transition-all hover:bg-white/10">
              Explore Services
            </button>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-auto mb-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col items-center justify-center p-8 rounded-[8px] border border-white/30 backdrop-blur-[5px]"
              style={{ background: 'rgba(200, 31, 8, 0.03)' }}
            >
              <span 
                className="font-['Poppins'] font-bold text-[36px] leading-[40px] mb-2"
                style={{ color: '#C81F08' }}
              >
                {stat.number}
              </span>
              <span className="text-[#D1D5DB] font-['Inter'] font-medium text-[14px] leading-[20px] text-center">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;