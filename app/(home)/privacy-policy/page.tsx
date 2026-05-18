import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | WiLD",
  description: "Privacy Policy for WiLD - Agile Denim Manufacturing",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 border-b border-gray-200 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-gray-500 text-lg">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-12 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              Welcome to WiLD ("we," "our," or "us"). As a premier global denim manufacturing partner, 
              we are committed to protecting the privacy and security of your personal and business information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit 
              our website or engage with our B2B manufacturing and design services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="mb-4">We collect information that you voluntarily provide to us when you request a quote, initiate a project, or contact our global offices. This includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Business Information:</strong> Company name, brand details, website, and sourcing requirements.</li>
              <li><strong>Contact Information:</strong> Name, email address, phone number, and physical addresses.</li>
              <li><strong>Transaction Data:</strong> Order histories, MOQs, tech packs, and production specifications.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information to facilitate our 14-day production cycles and deliver premium services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To manage your orders from concept and sampling to global warehouse delivery.</li>
              <li>To coordinate with our production facilities in Bangladesh (Aleya Apparels Limited) and China (Debin Garment Factory).</li>
              <li>To provide full-service branding, custom label preparation, and third-party inspections.</li>
              <li>To communicate updates regarding sustainability certifications (GOTS, BCI, ZDHC, etc.) related to your specific orders.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
            <p>
              We do not sell your data. We may share necessary information with our internal production ecosystem, 
              including our design studios, washing plants, and global logistics partners across our USA, UAE, China, 
              and Bangladesh footprints, strictly for the purpose of executing your manufacturing orders and ensuring 
              on-time delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your proprietary designs, tech packs, 
              and business data from unauthorized access. However, no digital transmission is entirely secure, 
              and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl mt-12 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Our Global Offices</h2>
            <p className="mb-6">For any privacy-related inquiries, please reach out to the office nearest to you:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 flex items-center gap-2"><MapPin size={18}/> USA HQ</h4>
                <p className="text-sm mt-1">45-16 49th Street, Apt # 2C<br/>Woodside, NY 11377<br/>+1 718 713 7222</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 flex items-center gap-2"><MapPin size={18}/> Dubai Office</h4>
                <p className="text-sm mt-1">17 Beirut Street, New Industrial Area 2<br/>Ajman, UAE<br/>+971 55 868 9573</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 flex items-center gap-2"><MapPin size={18}/> China Office</h4>
                <p className="text-sm mt-1">Zain International Company Limited<br/>Hung To Ctr., Kwun Tong, Hong Kong<br/>+86 19175689099</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 flex items-center gap-2"><MapPin size={18}/> Bangladesh Office</h4>
                <p className="text-sm mt-1">57/C Asad Avenue, Mohammadpur<br/>Dhaka-1207<br/>+880 1790 885188</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}