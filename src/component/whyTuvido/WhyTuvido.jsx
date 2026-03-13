import React from "react";

import pic1 from "../../assets/pic1.svg"
import pic2 from "../../assets/pic2.svg"
import pic3 from "../../assets/pic3.svg"

import VideoBackground from "../VideoBackground";

const products = [
  {
    title: "All-in-One Institute Dashboard",
    description:
      "Manage students, batches, classes, staff, and institute operations from a single dashboard. Tuvido simplifies daily administration for tuition and activity centers.",
      Img: pic1,
    primaryCta: "START FREE TRIAL",
    secondaryCta: "VIEW FEATURES",
    primaryLink: "/signup",
    secondaryLink: "/features",
bgColor: "bg-white/10 backdrop-blur-3xl border border-white/20 shadow-xl"  },
  {
    title: "Attendance & Payment Automation",
    description:
      "Track daily student attendance, manage fee collections, send payment reminders, and generate detailed reports to keep your institute organized and efficient.",
    Img: pic2,
    primaryCta: "START FREE TRIAL",
    secondaryCta: "VIEW FEATURES",
    primaryLink: "/signup",
    secondaryLink: "/features",
bgColor: "bg-white/10 backdrop-blur-3xl border border-white/20 shadow-xl"  },
  
  {
    title: "Parent Updates & Student Progress",
    description:
      "Keep parents informed with instant updates, announcements, and progress reports. Monitor student performance and maintain better engagement between institutes and families.",
     Img: pic3,
      primaryCta: "START FREE TRIAL",
    secondaryCta: "VIEW FEATURES",
    primaryLink: "/signup",
    secondaryLink: "/features",
bgColor: "bg-white/10 backdrop-blur-3xl border border-white/20 shadow-xl"  },
  
];

export default function MerchantDevices() {
  return (
    <section className="relative py-10 bg-transparent ">

      {/* Background Video */}
      <VideoBackground />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
<h1 className="text-center text-white pb-10 text-6xl font-black  group cursor-default">
  Powerful
  <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#AD46FF] to-[#7C3AED]
                   transition-all duration-500 group-hover:scale-110 transform-gpu">
    &nbsp; Features
  </span>
</h1>        
      

        {/* Container for the sticky stack */}
        <div className="relative  ">
          {products.map((product, index) => (
            <div 
              key={index} 
              /* STICKY LOGIC: 
                 - sticky: makes the card stick
                 - top-10: 40px (10 * 4px) from the top
                 - z-[index]: ensures the next card is higher than the previous 
              */
              style={{ top: `${100 + index * 20}px` }} 
              className={`sticky w-full flex flex-col md:flex-row items-center gap-12 lg:gap-24 
                          px-8 md:px-13 py-5 rounded-[2rem] border border-white/50
                          ${product.bgColor} transition-transform duration-500`}
            >
              {/* Text Content */}
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                  {product.title}
                </h2>
                <p className="text-md lg:text-[20px] text-gray-200 leading-relaxed max-w-lg">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">



            
                  
<a
  href={product.secondaryLink}
  className="group relative px-8 py-3.5 text-xs  font-black text-white border-2  border-white 
             rounded-lg uppercase tracking-widest overflow-hidden transition-colors duration-300
             hover:text-white"
>
  {/* The Top Shutter */}
  <span className="absolute inset-x-0 top-0 h-0 w-full bg-gradient-to-r from-[#2A0047] via-[#7C3AED] to-[#2A0047] bg-[length:200%_auto] bg-right hover:bg-left  transition-all duration-300 
                   group-hover:h-1/2 -z-10"></span>
  
  {/* The Bottom Shutter */}
  <span className="absolute inset-x-0 bottom-0 h-0 w-full bg-gradient-to-r from-[#2A0047] via-[#7C3AED] to-[#2A0047] bg-[length:200%_auto] bg-right hover:bg-left  transition-all duration-300 
                   group-hover:h-1/2 -z-10"></span>

  {/* Button Text */}
  <span className="relative z-10">{product.secondaryCta}</span>
</a>
                </div>
              </div>

              {/* Video/Media Side */}
              <div className="w-full md:w-1/2 relative">
                <div className="relative rounded-[2rem] overflow-hidden   ">
<img
  src={product.Img}
  alt={product.title}
  className="w-80 h-80  "
/>
                </div>
                {/* Decorative Accent */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-current opacity-10 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Spacer at the bottom so the last card has room to "scroll past" */}
        <div className="h-[20vh]" />
      </div>
    </section>
  );
}

