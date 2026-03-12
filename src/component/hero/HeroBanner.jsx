import { motion } from "framer-motion";
import heroData from "./heroData.json";
import HeroImage from "../../assets/hero.png";
import logo from "../../assets/tuvidoMockup.png";

const featureContent = {
  studentManagement: { icon: "👨‍🎓", iconBg: "bg-blue-100", iconColor: "text-blue-600", title: "Student Added", desc: "New student registered" },
  attendanceTracking: { icon: "✓", iconBg: "bg-green-100", iconColor: "text-green-600", title: "Attendance", desc: "Marked Successfully" },
  feeCollection: { icon: "₹", iconBg: "bg-purple-100", iconColor: "text-purple-600", title: "Fee Received", desc: "Payment Recorded" },
  branchManagement: { icon: "🏫", iconBg: "bg-indigo-100", iconColor: "text-indigo-600", title: "Branch Added", desc: "New Center Created" },
  batchManagement: { icon: "👥", iconBg: "bg-orange-100", iconColor: "text-orange-600", title: "Batch Created", desc: "Students Assigned" },
  classScheduling: { icon: "📅", iconBg: "bg-pink-100", iconColor: "text-pink-600", title: "Class Scheduled", desc: "Timetable Updated" }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    x: custom.x,
    y: custom.y,
    transition: { delay: custom.delay, duration: 0.8, type: "spring", stiffness: 80, damping: 12 }
  }),
  floating: {
    y: [null, "-=10", "+=0"],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
};

function HeroBanner() {
  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
  };

  const floatingCards = [
    { id: 1, type: "studentManagement", x: -320, y: -140, delay: 0.6 },
    { id: 2, type: "attendanceTracking", x: -310, y: -18, delay: 0.8 },
    { id: 3, type: "feeCollection", x: -280, y: 100, delay: 1.0 },
    { id: 4, type: "branchManagement", x: 100, y: -140, delay: 0.7 },
    { id: 5, type: "batchManagement", x: 130, y: -20, delay: 0.9 },
    { id: 6, type: "classScheduling", x: 100, y: 100, delay: 1.1 },
  ];

  return (
    <div className="relative w-full min-h-screen bg-white flex items-center overflow-hidden pt-20 lg:pt-0">
      
      {/* Background Glows */}
      <div className="absolute -top-40 -left-40 w-72 h-72 md:w-96 md:h-96 bg-purple-100 rounded-full blur-[120px] opacity-50"></div>
      <div className="absolute -bottom-40 -right-40 w-72 h-72 md:w-96 md:h-96 bg-blue-100 rounded-full blur-[120px] opacity-50"></div>

      <div className="container  px-6 lg:px-12 flex flex-col lg:flex-row items-center ">
        
        {/* LEFT SIDE: CONTENT */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-10"
        >
          <div className="max-w-xl space-y-6">
            <h1 className="text-4xl sm:text-5xl xl:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight">
              One Platform
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#AD46FF] to-[#7C3AED] block">
                to Manage Your
              </span>
              Entire Tuition Center
            </h1>

            <motion.p
              variants={slideUp}
              className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed"
            >
              {heroData.description}
            </motion.p>

            <motion.div variants={slideUp} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a className="relative group px-8 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#2A0047] via-[#7C3AED] to-[#2A0047] bg-[length:200%_auto] bg-right hover:bg-left rounded-xl transition-all duration-500 cursor-pointer shadow-lg shadow-purple-200">
                <span className="relative z-10 tracking-widest uppercase">Get App </span>
                <div className="absolute inset-0 animate-pulse bg-white/10 rounded-xl" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: IMAGE + FLOATING CARDS */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative">
          
          {/* Scaling Wrapper: This is the secret for responsiveness */}
          <div className="relative scale-[0.55] sm:scale-[0.75] md:scale-[0.85] lg:scale-[0.9] xl:scale-100 transition-transform duration-500">
            
            {/* MAIN PHONE MOCKUP */}
            <motion.div
              className="relative z-30"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img
                src={logo}
                alt="Tuvido Platform"
                className="w-[320px] md:w-[400px] lg:w-[450px] drop-shadow-[0_40px_60px_rgba(147,51,234,0.3)]"
              />
            </motion.div>

            {/* FLOATING FEATURE CARDS */}
            {floatingCards.map((card) => {
              const content = featureContent[card.type];
              return (
                <motion.div
                  key={card.id}
                  custom={card}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  animate="floating"
                  viewport={{ once: true }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 
                             bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl 
                             shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-purple-50 
                             flex items-center gap-3 min-w-[190px]"
                >
                  <div className={`w-10 h-10 ${content.iconBg} rounded-full flex items-center justify-center ${content.iconColor} shadow-inner text-lg font-bold`}>
                    {content.icon}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-800 text-sm tracking-tight">{content.title}</p>
                    <p className="text-gray-600 text-xs font-medium">{content.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Circular Glow behind the phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[120%] h-[120%] bg-gradient-to-tr from-purple-200/40 to-blue-200/40 rounded-full blur-[80px]"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes lightShine {
          0% { transform: translateX(-150%) rotate(45deg); }
          100% { transform: translateX(150%) rotate(45deg); }
        }
      `}</style>
    </div>
  );
}

export default HeroBanner;