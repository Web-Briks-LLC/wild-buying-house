"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Search, 
  ClipboardCheck, 
  Factory, 
  ShieldCheck, 
  FlaskConical, 
  Ship 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Product Sourcing",
      desc: "Identifying and evaluating the best factory partners to match your product requirements, price point, and quality standards.",
      icon: <Search size={24} />,
    },
    {
      title: "QC Inspection",
      desc: "Rigorous quality control at every stage: inline, pre-final, and final inspections according to AQL standards.",
      icon: <ClipboardCheck size={24} />,
    },
    {
      title: "Production Follow-up",
      desc: "Daily monitoring of the production process to resolve bottlenecks and ensure strict adherence to delivery timelines.",
      icon: <Factory size={24} />,
    },
    {
      title: "Compliance Audit",
      desc: "Ensuring all partner factories adhere strictly to international labor laws, safety standards, and social compliances.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Lab Testing",
      desc: "Working with accredited laboratories (SGS, Bureau Veritas, Intertek) for fabric and finished product testing.",
      icon: <FlaskConical size={24} />,
    },
    {
      title: "Logistics Support",
      desc: "Complete freight forwarding, customs clearance, and shipping management for smooth door-to-door delivery.",
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-[1440px] mx-auto px-6"  id='services'>
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#1E1E1E] font-['Poppins'] font-bold text-[16px] leading-[24px] tracking-[0.8px] uppercase mb-2 block">
            What We Do
          </span>
          <h2 className="font-['Poppins'] font-bold text-[36px] leading-[40px] mb-4">
            <span style={{ color: '#C81F08' }}>Comprehensive Supply</span>{" "}
            <span className="text-[#0A1628]">Chain Solutions</span>
          </h2>
          <p className="text-[#4B5563] font-['Inter'] font-normal text-[16px] leading-[24px] max-w-[700px] mx-auto">
            We manage every aspect of the apparel production process so you can focus on building your brand.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[12px] bg-white transition-all group"
              style={{ 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10)' 
              }}
            >
              {/* Icon Container */}
              <div 
                className="w-16 h-16 rounded-[8px] flex items-center justify-center mb-8 
               transition-all duration-300
               bg-[rgba(10,22,40,0.05)] 
               group-hover:bg-[#C9A84C] 
               text-[#0A1628] 
               group-hover:text-white"
              >
                {/* Specific Icon Mapping */}
                {index === 0 && <Search size={24} strokeWidth={2.5} />}
                {index === 1 && <ClipboardCheck size={24} strokeWidth={2.5} />}
                {index === 2 && <Factory size={24} strokeWidth={2.5} />}
                {index === 3 && <ShieldCheck size={24} strokeWidth={2.5} />}
                {index === 4 && <FlaskConical size={24} strokeWidth={2.5} />}
                {index === 5 && <Ship size={24} strokeWidth={2.5} />}
              </div>

              {/* Text Content */}
              <h4 
                className="font-['Poppins'] font-bold text-[20px] leading-[28px] mb-4"
                style={{ color: '#C81F08' }}
              >
                {service.title}
              </h4>
              <p className="text-[#4B5563] font-['Inter'] font-normal text-[14px] leading-[22.75px]">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;