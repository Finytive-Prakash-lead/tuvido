import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin, Send } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Head Office",
      detail: "2 Avadi-Vel Tech Road, Chennai, Tamil Nadu 600062",
      link: "#",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Sales Inquiry",
      detail: "support@tuvido.com",
      link: "mailto:sales@tuvido.co.in",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Support",
      detail: "+91 86673 82199",
      link: "tel:+919000000000",
    },
  ];

  // Helper component for cleaner input code
  const FormField = ({ label, type = "text", placeholder, isTextArea = false }) => (
    <div className="w-full">
      <label className="text-sm font-bold text-gray-700 ml-1 mb-1.5 block">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          rows="4"
          placeholder={placeholder}
          className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 
                     placeholder:text-gray-400 outline-none transition-all duration-300
                     focus:border-[#5f259f] focus:ring-4 focus:ring-purple-50 focus:bg-white resize-none"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 
                     placeholder:text-gray-400 outline-none transition-all duration-300
                     focus:border-[#5f259f] focus:ring-4 focus:ring-purple-50 focus:bg-white"
        />
      )}
    </div>
  );

  return (
    <section className="relative py-24 bg-purple-50 overflow-hidden">
      {/* Soft background accents */}

      <div className="px-4 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20">
          
          {/* LEFT SIDE - TUVIDO CONTACT DETAILS (5 Columns) */}
          <motion.div 
            className="lg:col-span-5 mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Let’s Build Your <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#AD46FF]">Future Institute</span>
            </h2>

            <p className="mt-6 text-gray-800 text-lg leading-relaxed max-w-sm">
              Ready to automate your academy? Our experts are here to help you scale.
            </p>

            <div className="py-5">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4 py-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-purple-50 rounded-2xl text-[#5f259f]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-gray-800 mb-0.5">
                      {item.title}
                    </h4>
                    <a href={item.link} className="text-lg  text-gray-800 hover:text-[#5f259f] transition-colors">
                      {item.detail}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
<div className=" border-t border-gray-100 flex items-center gap-6">
  <span className="text-sm font-bold text-gray-900">Follow Us</span>

  <div className="flex gap-3">

    {/* Instagram */}
    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-xl 
      bg-[#FDF2F5] text-[#E4405F] border border-[#FAD1DA]
      hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F]
      transition-all duration-300"
    >
      <Instagram size={18} />
    </a>

    {/* YouTube */}
    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-xl 
      bg-[#FFF1F1] text-[#FF0000] border border-[#FFD6D6]
      hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]
      transition-all duration-300"
    >
      <Youtube size={18} />
    </a>

    {/* LinkedIn */}
    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-xl 
      bg-[#F0F7FF] text-[#0A66C2] border border-[#D6E9FF]
      hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]
      transition-all duration-300"
    >
      <Linkedin size={18} />
    </a>

  </div>
</div>
          </motion.div>

          {/* RIGHT SIDE - CONTACT FORM (7 Columns) */}
          <motion.div
            className="lg:col-span-7 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border shadow   ">
              <h3 className="text-2xl font-black text-gray-900 mb-8">Send a Message</h3>
              
              <form className="space-y-5 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                  <FormField label="Full Name" placeholder="Jane Smith" />
                  <FormField label="Work Email" type="email" placeholder="jane@institute.com" />
                </div>
                
                <FormField label="Institute Name" placeholder="Elite Academy" />
                
                <FormField label="Your Message" placeholder="Tell us about your requirements..." isTextArea />

                <button
                  type="submit"
                  className="w-full bg-[#5f259f] text-white font-bold py-4 rounded-xl 
                             hover:bg-[#4a1d7d] hover:shadow-lg hover:shadow-purple-200 
                             active:scale-[0.98] transition-all duration-300 
                             flex items-center justify-center gap-3 group"
                >
                  <span>Send Message</span>
                  <Send size={18} className="transition-transform duration-300 group-hover:scale-110" />
                </button>
              </form>
              
              
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}