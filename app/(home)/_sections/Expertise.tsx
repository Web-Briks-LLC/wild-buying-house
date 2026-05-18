"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Category {
  title: string;
  subtitle: string;
  image: string;
}

const Expertise = () => {
  const categories: Category[] = [
    { title: "Knit Wear", subtitle: "T-Shirts, Polos, Sweaters & Fleece", image: "/images/knitwear.jpg" },
    { title: "Woven Tops & Bottoms", subtitle: "Shirts, Trousers, Chinos & Shorts", image: "/images/woven.jpg" },
    { title: "Denim", subtitle: "T-Shirts, Polos, Sweaters & Fleece", image: "/images/denim.jpg" },
    { title: "Outerwear", subtitle: "Infants, Toddlers & Children's apparel", image: "/images/outerwear.jpg" },
    { title: "Kids Wear", subtitle: "T-Shirts, Polos, Sweaters & Fleece", image: "/images/kids.jpg" },
    { title: "Ladies Wear", subtitle: "Dresses, Blouses, Skirts & Lingerie", image: "/images/ladies.jpg" },
  ];

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="bg-white py-10" id='products'>
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#1E1E1E] font-['Poppins'] font-bold text-[16px] leading-[24px] tracking-[0.8px] uppercase mb-2 block">
              Our Expertise
            </span>
            <h2 className="font-['Poppins'] font-bold text-[36px] leading-[40px]">
              <span style={{ color: '#C81F08' }}>Product</span>{" "}
              <span className="text-[#0A1628]">Categories</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              href="#contact" 
              className="group flex items-center gap-2 text-[#0A1628] font-['Inter'] font-semibold text-[16px] leading-[24px] hover:text-[#C81F08] transition-colors"
            >
              Discuss Your Collection
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative h-[320px] rounded-[8px] overflow-hidden group border-2 border-[#C81F08]/20"
            >
              {/* Image with zoom effect on hover */}
              <Image 
                src={item.image} 
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Linear Gradient Overlay */}
              <div 
                className="absolute inset-0 z-10 transition-opacity duration-300 group-hover:opacity-90"
                style={{ 
                  background: 'linear-gradient(0deg, rgba(10, 22, 40, 0.90) 0%, rgba(10, 22, 40, 0.00) 100%)' 
                }}
              />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <h4 className="text-white font-['Poppins'] font-bold text-[24px] leading-[32px] mb-1">
                  {item.title}
                </h4>
                <p className="text-[#D1D5DB] font-['Inter'] font-normal text-[14px] leading-[20px]">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;