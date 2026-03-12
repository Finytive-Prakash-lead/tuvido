import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="pt-10  py-10 bg-white text-gray-800">
      <div className="px-6 lg:px-12 py-20">

         <div className="hidden md:flex items-center mb-5">
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



        <h1 className="text-3xl font-bold mb-2">Tuvido Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: November 13, 2025
        </p>

        <h2 className="text-xl font-semibold mb-2">
          How We Collect Information from You
        </h2>
        <p className="mb-4">
          As a data controller, Tuvido collects certain personal information in
          order to provide and improve our services.
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            Name, mobile number, email address, and parent details when you or
            your employer creates an account.
          </li>
          <li>
            Communications with us such as comments, suggestions, requests for
            product or service information, or other correspondence.
          </li>
          <li>
            Location-based data (GPS coordinates) through our geolocation
            feature when your employer requires users to log their GPS
            location. Our application may use Google Maps APIs to provide
            location-based services.
          </li>
          <li>
            Biometric data through our facial recognition feature if the
            employer requires login through selfies.
          </li>
          <li>
            Time entry and attendance data when you use the Tuvido application.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">
          How We Use Your Information
        </h2>
        <p className="mb-4">
          Tuvido acts as a data processor and uses personal information to
          improve the quality and functionality of our services. Personal
          information is typically entered by customers or end-users while
          using the platform. The customer (such as an institute or employer)
          determines the purpose and method for processing personal information.
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            To provide attendance tracking, student management, and related
            services.
          </li>
          <li>
            To enable GPS-based attendance verification when required by an
            employer.
          </li>
          <li>
            To enable biometric authentication through facial recognition if
            enabled by the employer.
          </li>
          <li>
            To store and manage attendance and activity records.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Sharing Your Information</h2>
        <p className="mb-6">
          Tuvido does not sell or share your personal information with third
          parties except when necessary to provide essential services such as
          payment processing or as required by law.
        </p>

        <h2 className="text-xl font-semibold mb-2">Cookies</h2>
        <p className="mb-6">
          When you visit our website, your browser may store small text files
          called “cookies” on your device. These cookies help remember your
          preferences, improve website functionality, and support analytics.
          Tuvido uses cookies and similar technologies such as URL tracking and
          local storage to enhance user experience.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          Payments and Financial Data
        </h2>
        <p className="mb-4">
          Tuvido uses Razorpay, a trusted third-party payment gateway, to
          securely process payments.
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            Razorpay may collect payment information such as name, email
            address, phone number, and payment method details.
          </li>
          <li>
            Tuvido does not store sensitive payment data such as card numbers,
            CVV, or UPI PIN.
          </li>
          <li>
            All sensitive payment data is processed directly by Razorpay in
            compliance with PCI DSS security standards.
          </li>
          <li>
            Razorpay may collect additional information such as IP address,
            device details, and transaction metadata for fraud prevention.
          </li>
          <li>
            Payment information is used only for billing, payment confirmation,
            and record keeping.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">
          Changes to Our Privacy Policy
        </h2>
        <p className="mb-6">
          Tuvido may update this Privacy Policy from time to time. Any updates
          will be posted on this page, and the revised version will apply to all
          information collected after the update.
        </p>

        <h2 className="text-xl font-semibold mb-2">How to Contact Us</h2>
        <p>
          If you have any questions regarding this Privacy Policy or the data we
          hold about you, please contact us.
        </p>

        <p className="mb-5 font-medium">
          Email:{" "}
          <a
            href="mailto:support@tuvido.com"
            className="text-blue-600 hover:underline"
          >
            support@tuvido.com
          </a>
        </p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;