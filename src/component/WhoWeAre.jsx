


// import React from "react";
// import { motion } from "framer-motion";
// import logo from "../assets/hero.png";

// const TuvidoHero = () => {

//   // Floating cards positions
//   const floatingCards = [
//     { id: 1, type: "studentManagement", x: -360, y: -180, delay: 0.6 },
//     { id: 2, type: "attendanceTracking", x: -420, y: -60, delay: 0.8 },
//     { id: 3, type: "feeCollection", x: -360, y: 80, delay: 1.0 },

//     { id: 4, type: "parentAccess", x: 150, y: -160, delay: 0.7 },
//     { id: 5, type: "staffManagement", x: 230, y: -50, delay: 0.9 },
//     { id: 6, type: "advancedReports", x: 150, y: 80, delay: 1.1 },
//   ];

//   // Feature content mapping
//   const featureContent = {
//     studentManagement: {
//       icon: "👨‍🎓",
//       iconBg: "bg-blue-100",
//       iconColor: "text-blue-600",
//       title: "Student Added",
//       desc: "New student registered"
//     },
//     attendanceTracking: {
//       icon: "✓",
//       iconBg: "bg-green-100",
//       iconColor: "text-green-600",
//       title: "Attendance",
//       desc: "Marked Successfully"
//     },
//     feeCollection: {
//       icon: "₹",
//       iconBg: "bg-purple-100",
//       iconColor: "text-purple-600",
//       title: "Fee Received",
//       desc: "Payment Recorded"
//     },
//     parentAccess: {
//       icon: "👨‍👩‍👧",
//       iconBg: "bg-indigo-100",
//       iconColor: "text-indigo-600",
//       title: "Parent Update",
//       desc: "Notification Sent"
//     },
//     staffManagement: {
//       icon: "👨‍🏫",
//       iconBg: "bg-orange-100",
//       iconColor: "text-orange-600",
//       title: "Staff Assigned",
//       desc: "Teacher allocated"
//     },
//     advancedReports: {
//       icon: "📊",
//       iconBg: "bg-pink-100",
//       iconColor: "text-pink-600",
//       title: "Reports Generated",
//       desc: "Analytics ready"
//     }
//   };

//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       scale: 0,
//       x: 0,
//       y: 0
//     },
//     visible: (custom) => ({
//       opacity: 1,
//       scale: 1,
//       x: custom.x,
//       y: custom.y,
//       transition: {
//         delay: custom.delay,
//         duration: 0.8,
//         type: "spring",
//         stiffness: 80,
//         damping: 12
//       }
//     }),
//     floating: {
//       y: [null, "-=10", "+=0"],
//       transition: {
//         duration: 3,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   return (
//     <section className="relative w-full min-h-screen bg-[#f8f7ff] overflow-hidden flex flex-col items-center px-6 lg:px-20 pt-16">

//       {/* MAIN CONTENT */}
//       <div className="relative z-20 w-full max-w-[1200px] mx-auto flex flex-col items-center text-center gap-8">

//         {/* HEADING */}
//         <motion.div
//           className="space-y-5 "
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-black text-gray-800 leading-tight">
//             Who{" "}
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#AD46FF] to-[#7C3AED]">
//               We
//             </span>{" "}
//             Are
//           </h2>

//           <p className="text-base md:text-lg lg:text-[20px] text-gray-800 max-w-2xl mx-auto">
//             Tuvido is a smart and easy-to-use management platform built
//             specifically for tuition centers, coaching institutes, and academies.
//           </p>
//         </motion.div>

//         {/* IMAGE + FLOATING CARDS */}
//         <div className="relative w-full max-w-2xl flex justify-center items-center mt-12">

//           {/* PHONE / DASHBOARD IMAGE */}
//           <motion.div
//             className="relative z-30"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//           >
//             <img
//               src={logo}
//               alt="Tuvido Platform"
//               className="w-72 md:w-[520px] drop-shadow-[0_50px_50px_rgba(147,51,234,0.2)]"
//             />
//           </motion.div>

//           {/* FLOATING FEATURE CARDS */}
//           {floatingCards.map((card) => {
//             const content = featureContent[card.type];

//             return (
//               <motion.div
//                 key={card.id}
//                 custom={card}
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 animate="floating"
//                 viewport={{ once: true }}
//                 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 
//                 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-2xl 
//                 border border-purple-50 hidden md:flex items-center gap-3 min-w-[180px]"
//               >
//                 <div
//                   className={`w-9 h-9 ${content.iconBg} rounded-full flex items-center justify-center ${content.iconColor} shadow-inner text-sm font-bold`}
//                 >
//                   {content.icon}
//                 </div>

//                 <div className="text-left">
//                   <p className=" font-bold text-gray-800 tracking-tight">
//                     {content.title}
//                   </p>
//                   <p className=" text-gray-800 font-medium">
//                     {content.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}

//           {/* BACKGROUND GLOW */}
//           <div className="absolute -z-10 w-[140%] h-[350px] bg-gradient-to-r from-purple-200/40 to-blue-200/40 rounded-full blur-[100px] bottom-[-20%]"></div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default TuvidoHero;


import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/hero.png";


const TuvidoHero = () => {

  // Responsive floating positions (mobile friendly)
const floatingCards = [
    { id: 1, type: "studentManagement", x: -320, y: -140, delay: 0.6 },
    { id: 2, type: "attendanceTracking", x: -400, y: -20, delay: 0.8 },
    { id: 3, type: "feeCollection", x: -320, y: 100, delay: 1.0 },

    { id: 4, type: "branchManagement", x: 120, y: -140, delay: 0.7 },
    { id: 5, type: "batchManagement", x: 200, y: -20, delay: 0.9 },
    { id: 6, type: "classScheduling", x: 120, y: 100, delay: 1.1 },
  ];

  const featureContent = {
    studentManagement: {
      icon: "👨‍🎓",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Student Added",
      desc: "New student registered"
    },
    attendanceTracking: {
      icon: "✓",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "Attendance",
      desc: "Marked Successfully"
    },
    feeCollection: {
      icon: "₹",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Fee Received",
      desc: "Payment Recorded"
    },
branchManagement: {
  icon: "🏫",
  iconBg: "bg-indigo-100",
  iconColor: "text-indigo-600",
  title: "Branch Added",
  desc: "New Center Created"
},

batchManagement: {
  icon: "👥",
  iconBg: "bg-orange-100",
  iconColor: "text-orange-600",
  title: "Batch Created",
  desc: "Students Assigned"
},

classScheduling: {
  icon: "📅",
  iconBg: "bg-pink-100",
  iconColor: "text-pink-600",
  title: "Class Scheduled",
  desc: "Timetable Updated"
}
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      x: 0,
      y: 0
    },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      x: custom.x,
      y: custom.y,
      transition: {
        delay: custom.delay,
        duration: 0.8,
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }),
    floating: {
      y: [null, "-=10", "+=0"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#f8f7ff] overflow-hidden flex flex-col items-center px-4 sm:px-6 lg:px-20 pt-16">

      {/* MAIN CONTENT */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto flex flex-col items-center text-center gap-8">

        {/* HEADING */}
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-[45px] font-black text-gray-800 leading-tight">
            The  {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#AD46FF] to-[#7C3AED]">
             Essential Tools 
            </span>{" "}
            Every Coaching Institute Needs
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-gray-800 max-w-2xl mx-auto">
            Tuvido is a smart and easy-to-use management platform built
            specifically for tuition centers, coaching institutes, and academies.
          </p>
        </motion.div>

        {/* IMAGE + FLOATING CARDS */}
        <div className="relative w-full max-w-2xl flex justify-center items-center mt-10">

          {/* MAIN IMAGE */}
          <motion.div
            className="relative z-30"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src={logo}
              alt="Tuvido Platform"
              className="w-64 sm:w-72 md:w-[420px] lg:w-[520px] drop-shadow-[0_50px_50px_rgba(147,51,234,0.2)]"
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
                bg-white/95 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl 
                shadow-xl border border-purple-50 flex items-center gap-2 md:gap-3 
                min-w-[140px] md:min-w-[180px]"
              >
                <div
                  className={`w-8 h-8 md:w-9 md:h-9 ${content.iconBg} rounded-full flex items-center justify-center ${content.iconColor} shadow-inner text-sm font-bold`}
                >
                  {content.icon}
                </div>

                <div className="text-left">
                  <p className="font-bold text-gray-800 text-xs md:text-sm tracking-tight">
                    {content.title}
                  </p>
                  <p className="text-gray-600 text-[11px] md:text-xs font-medium">
                    {content.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* BACKGROUND GLOW */}
          <div className="absolute -z-10 w-[130%] md:w-[140%] h-[280px] md:h-[350px] bg-gradient-to-r from-purple-200/40 to-blue-200/40 rounded-full blur-[100px] bottom-[-20%]"></div>

        </div>
      </div>
    </section>
  );
};

export default TuvidoHero;



