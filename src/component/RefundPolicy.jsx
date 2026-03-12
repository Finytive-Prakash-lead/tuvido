import React from "react";

export default function RefundPolicy  ()  {
  return (
    <div className="pt-10 px-6 py-10 bg-white text-gray-800">





      <div className="px-6 py-20">

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


        <h1 className="text-3xl font-bold mb-2">Tuvido Refund Policy</h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: November 13, 2025
        </p>

        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p className="mb-6">
          Tuvido provides a subscription-based tuition management platform
          designed for institutes and activity centers. This Refund Policy
          outlines the terms under which payments made for Tuvido services
          may or may not be refunded.
        </p>

        <h2 className="text-xl font-semibold mb-2">Free Trial</h2>
        <p className="mb-6">
          Tuvido may offer a free trial period for new users. During the trial
          period, users can evaluate the platform and its features. No payment
          is required during the free trial unless you choose to upgrade to a
          paid subscription plan.
        </p>

        <h2 className="text-xl font-semibold mb-2">Subscription Payments</h2>
        <p className="mb-4">
          Once a subscription payment is successfully processed, it grants
          access to Tuvido services for the selected billing period.
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>All subscription fees are billed in advance.</li>
          <li>Payments are processed securely through third-party payment providers.</li>
          <li>By subscribing to a plan, you agree to the pricing and billing terms.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Refund Eligibility</h2>
        <p className="mb-4">
          Refunds may be considered under the following circumstances:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Duplicate or accidental payments.</li>
          <li>Technical issues that prevent access to the service for an extended period.</li>
          <li>Billing errors identified and verified by our support team.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Non-Refundable Cases</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Partial use of the subscription period.</li>
          <li>Change of mind after purchasing a plan.</li>
          <li>Failure to cancel a subscription before the next billing cycle.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Refund Processing</h2>
        <p className="mb-6">
          If a refund request is approved, the refund will be processed through
          the original payment method. The time required for the refund to appear
          in your account may vary depending on your bank or payment provider.
        </p>

        <h2 className="text-xl font-semibold mb-2">Changes to This Policy</h2>
        <p className="mb-6">
          Tuvido reserves the right to update or modify this Refund Policy at
          any time. Any changes will be posted on this page and will become
          effective immediately after publication.
        </p>

        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>
          If you have any questions about our Refund Policy or would like to
          request a refund, please contact us.
        </p>

        <p className="my-2 font-medium">
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

