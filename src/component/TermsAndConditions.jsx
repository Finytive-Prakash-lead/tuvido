import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="py-10 px-6  text-gray-800 bg-white">
      <div className="px-6 lg:px-12 py-20">

         <div className="hidden md:flex items-center mb-4">
           <a
  href="/"
  className="relative group px-10 py-3 text-sm font-bold text-white 
bg-gradient-to-r from-[#2A0047] via-[#7C3AED] to-[#2A0047] bg-[length:200%_auto] bg-right hover:bg-left             rounded-lg 
             overflow-hidden transition-all duration-300 cursor-pointer"
>
  {/* Layer 1: The Base Gradient & Static Glint */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent scale-150 rotate-45 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
  
  {/* Layer 2: Iridescent "Glitter" (Conic-Gradient Overlay) */}
  <div className="absolute inset-0 bg-[conic-gradient(at_top_right,rgba(243,232,255,0.4)_0%,rgba(139,92,246,0.1)_25%,rgba(243,232,255,0.1)_50%,rgba(139,92,246,0.1)_75%,rgba(243,232,255,0.4)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[2px]" />

  {/* Layer 3: Moving Light Shine (Animated Element) */}
  <div className="absolute inset-0 animate-lightShine -translate-x-[150%] scale-150">
    <div className="w-[15%] h-full bg-white opacity-40 blur-lg rotate-12" />
  </div>

  {/* The Text - Needs to be relative/z-10 to sit above the effects */}
  <span className="relative z-10  tracking-widest ">
    Back to home
  </span>

  {/* Custom CSS for the Light Shine Animation */}
  <style>{`
    @keyframes lightShine {
      0% { transform: translateX(-150%) scale(1.5); }
      50% { transform: translateX(150%) scale(1.5); }
      100% { transform: translateX(-150%) scale(1.5); }
    }
    .animate-lightShine {
      animation: lightShine 6s ease-in-out infinite;
    }
  `}</style>
</a>
          </div>


        <h1 className="text-3xl font-bold mb-2">Tuvido Terms & Conditions</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: May 1, 2025</p>

        <h2 className="text-xl font-semibold mb-2">Acceptance of Terms</h2>
        <p className="mb-6">
          By accessing or using the Tuvido mobile application (“App”), you agree
          to comply with and be bound by these Terms & Conditions. If you do not
          agree, please discontinue using the App.
        </p>

        <h2 className="text-xl font-semibold mb-2">Use of the App</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>You must use the App only for lawful purposes and in accordance with your employer’s policies.</li>
          <li>You agree not to misuse, copy, modify, distribute, or reverse-engineer any part of the App.</li>
          <li>You are responsible for keeping your login credentials secure and notifying us of unauthorized access.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">User Responsibilities</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>You must provide accurate and complete information when creating an account.</li>
          <li>You are responsible for all activities that occur within your account.</li>
          <li>You agree to use the App as instructed by your employer, including attendance logging requirements.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Intellectual Property</h2>
        <p className="mb-6">
          All content, branding, logos, software, and other materials made available
          through the App are owned by Tuvido or licensed to us. Unauthorized use
          of our intellectual property is strictly prohibited.
        </p>

        <h2 className="text-xl font-semibold mb-2">Service Availability</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>We aim to keep the App operational but do not guarantee uninterrupted access.</li>
          <li>We may suspend or discontinue the App at any time for maintenance or updates.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Tuvido is not responsible for any loss of data caused by user error or technical issues.</li>
          <li>We are not liable for damages resulting from misuse of the App or unauthorized access.</li>
          <li>Employers are solely responsible for ensuring lawful use of attendance, location, and biometric data.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Changes to Terms</h2>
        <p className="mb-6">
          Tuvido may update these Terms & Conditions at any time. Continued use
          of the App after updates indicates acceptance of the revised terms.
        </p>

        <h2 className="text-xl font-semibold ">Contact Us</h2>
        <p>If you have any questions about these Terms & Conditions, please reach out to us.</p>
        <p className="my-2 font-medium">
          Email: <a href="mailto:support@tuvido.com" className="text-blue-600">support@tuvido.com</a>
        </p>

      </div>
    </div>
  );
};

export default TermsAndConditions;