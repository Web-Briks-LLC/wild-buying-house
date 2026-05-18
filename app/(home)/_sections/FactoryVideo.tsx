import React from "react";
import { Factory, MapPin } from "lucide-react";

export default function FactoryVideos() {
  return (
    <section className="w-full bg-[#FAFAFA] pt-20 lg:pb-20 px-6">
      <div className="max-w-360 mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#D33A27] mb-4 flex items-center gap-2">
            <Factory className="w-3.5 h-3.5" />
            Our Infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Inside <span className="text-[#D33A27]">Wild</span> Manufacturing
          </h2>
          <p className="text-gray-500 max-w-2xl text-[15px] md:text-base leading-relaxed">
            Take a look behind the scenes at our state-of-the-art RMG manufacturing facilities in Bangladesh and China, where quality meets scale.
          </p>
        </div>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* BANGLADESH FACTORY */}
          <div className="group flex flex-col bg-white rounded-xl border border-[#F3E6E4] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(211,58,39,0.08)] hover:border-[#D33A27]/30">
            {/* Video Wrapper */}
            <div className="relative aspect-[16/9] w-full bg-gray-100 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://cdn.wildbd.com/Wild-Rmg/wild-rmg-bd.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Optional: Subtle gradient overlay for better aesthetic */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Info Section */}
            <div className="p-6 md:p-8 flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 bg-[#FCF8F7] rounded-full flex items-center justify-center border border-[#F3E6E4] mt-1">
                <MapPin className="w-4 h-4 text-[#D33A27]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Bangladesh Factory</h3>
                <p className="text-[13px] font-medium text-gray-900 mb-2">
                  WILD DENIM / ALEYA APPARELS LIMITED
                </p>
                <p className="text-[14px] text-gray-500 leading-relaxed mb-3">
                  244, Singair Road, Hemayetpur, Savar, Dhaka-1340
                </p>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Our core RMG production hub is the powerhouse for large-scale efficiency, combining skilled craftsmanship with modern industrial technology.
                </p>
              </div>
            </div>
          </div>

          {/* CHINA FACTORY */}
          <div className="group flex flex-col bg-white rounded-xl border border-[#F3E6E4] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(211,58,39,0.08)] hover:border-[#D33A27]/30">
            {/* Video Wrapper */}
            <div className="relative aspect-[16/9] w-full bg-gray-100 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://cdn.wildbd.com/Wild-Rmg/wild-rmg-china.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Optional: Subtle gradient overlay for better aesthetic */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Info Section */}
            <div className="p-6 md:p-8 flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 bg-[#FCF8F7] rounded-full flex items-center justify-center border border-[#F3E6E4] mt-1">
                <MapPin className="w-4 h-4 text-[#D33A27]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">China Factory</h3>
                <p className="text-[13px] font-medium text-gray-900 mb-2">
                  Debin Garment Factory (德宾服装厂)
                </p>
                <p className="text-[14px] text-gray-500 leading-relaxed mb-3">
                  Jinyuan 3rd Road, Dacheng Industrial Zone, Pingnan County, Guigang City, China
                </p>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Our advanced technology integration center focuses on intricate detailing, innovative fabric sourcing, and technical apparel excellence.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}