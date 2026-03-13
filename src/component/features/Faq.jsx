import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react"; // npm install lucide-react

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
  {
    question: "Is Tuvido suitable for small tuition centers?",
    answer:
      "Yes, Tuvido is built with scalability in mind. Whether you are a solo tutor or a large institute with multiple branches, our tools adapt to your specific workflow.",
  },
  {
    question: "Can I track fees monthly?",
    answer:
      "Absolutely. Tuvido offers flexible billing. You can track monthly, quarterly, or even set up custom fee cycles tailored to individual student plans.",
  },
  {
    question: "Does Tuvido support multiple batches?",
    answer:
      "Yes, you can create and manage unlimited batches. Easily assign students, track specific attendance for each, and schedule classes without overlaps.",
  },
  {
    question: "Is parent communication automated?",
    answer:
      "Yes. Our platform sends automated attendance alerts, fee reminders, and performance updates directly to parents, keeping them informed without manual effort.",
  },

  // NEW FAQS
  {
    question: "Can I access Tuvido on mobile devices?",
    answer:
      "Yes, Tuvido works seamlessly on mobile, tablet, and desktop devices. You can manage attendance, fees, and communication anytime from anywhere.",
  },
  {
    question: "Is student attendance tracking automated?",
    answer:
      "Tuvido allows quick digital attendance marking for each batch. You can instantly generate attendance reports and notify parents automatically.",
  },
  {
    question: "Can I generate performance reports for students?",
    answer:
      "Yes. Tuvido provides performance tracking tools that help teachers evaluate progress and share detailed reports with parents.",
  },
  {
    question: "Is my institute data secure on Tuvido?",
    answer:
      "Absolutely. Tuvido uses secure cloud infrastructure and data protection practices to ensure that all student, staff, and financial information remains safe and private.",
  },
];

  const themeColor = "#7C3AED"; // Tuvido Purple

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl text-black font-extrabold mb-4 tracking-tight"
            
          >
            Common  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#AD46FF] to-[#7C3AED]">Questions</span>
          </h2>
          <p className="text-gray-800 font-medium text-[20px]">
            Everything you need to know about Tuvido in one place.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? "bg-white border-purple-200 shadow-xl shadow-purple-500/5" 
                    : "bg-white/60 border-gray-300 hover:border-purple-800 shadow-sm"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`text-lg font-bold transition-colors duration-300 ${
                    isOpen ? "text-gray-900" : "text-gray-700"
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Icon Toggle */}
                  <div 
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "bg-purple-600 text-white" : "bg-purple-50 text-purple-600"
                    }`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {/* Animated Answer Section */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-800 leading-relaxed font-medium">
                        <div className="h-[1px] w-full bg-gray-100 mb-4" />
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-800 text-[20px]">
            Still have questions?{" "}
            <a href="/contact" className="font-bold underline decoration-2 underline-offset-4" style={{ color: themeColor }}>
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;