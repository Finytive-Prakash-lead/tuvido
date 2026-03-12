import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/featurehero.png";

const FeatureBanner = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#ece0f5] overflow-hidden flex items-center pt-20">
      
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-100/50 via-transparent to-transparent pointer-events-none" />

      <div className=" px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">


          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >


            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
              Powerful Features Built for{" "}
              <span className="text-purple-600 font-black">
                Tuition & Activity Centers
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
              Tuvido provides everything you need to run your institute efficiently —
              from student management and attendance tracking to fee collection,
              performance monitoring, and parent communication.
            </p>



          </motion.div>
          {/* RIGHT SIDE: ILLUSTRATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[550px] group">
              
              {/* Background Glow */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-purple-400/30 to-indigo-400/10 blur-[80px] rounded-full opacity-50 -z-10 group-hover:opacity-80 transition-opacity duration-700" />

              <img
                src={logo}
                alt="Tuvido Features Illustration"
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(95,51,185,0.2)]"
              />
            </div>
          </motion.div>



        </div>
      </div>

      
    </section>
  );
};

export default FeatureBanner;