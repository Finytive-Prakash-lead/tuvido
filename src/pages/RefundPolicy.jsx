import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function PageHeader({ icon, label, title, subtitle, color = "#4ECDC4" }) {
  return (
    <div style={{ padding: "140px clamp(20px, 8vw, 120px) 80px", position: "relative", overflow: "hidden", textAlign: "center" }}>
      <Link className="cta-primary" style={{ padding: "10px 22px", fontSize: 14 }} to="/">
        Home
      </Link>
      <div className="grid-overlay" />
      <div className="hero-glow" style={{ width: 500, height: 500, background: `${color}18`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: 56, marginBottom: 20 }}>{icon}</div>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color, marginBottom: 16 }}>
          ✦ {label}
        </div>
        <h1 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>
          {title}
        </h1>
        <p style={{ fontSize: 17, color: "#6B7A99", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true);
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimSection({ children, style = {}, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        ...style
      }}
    >
      {children}
    </div>
  );
}

export default function RefundPage() {

  const sections = [
    {
      num: "01",
      title: "Refund Eligibility",
      icon: "💰",
      color: "#4ECDC4",
      content:
        "Refunds are applicable only in cases of duplicate payments, billing errors, or failure of service delivery due to verified technical issues. Refund requests must be submitted within 7 days from the date of payment."
    },
    {
      num: "02",
      title: "Non-Refundable Services",
      icon: "🚫",
      color: "#FF6B6B",
      items: [
        "Completed development or customization services.",
        "Subscription plans already activated or partially used.",
        "Consultation or onboarding services once delivered.",
        "Payments made towards third-party integrations."
      ]
    },
    {
      num: "03",
      title: "Refund Process",
      icon: "🔄",
      color: "#A8E6CF",
      items: [
        "Submit your request via email with transaction details.",
        "Our team will verify the request within 3–5 business days.",
        "If approved, refund will be processed to the original payment method.",
        "Refund processing may take 7–10 business days depending on your bank."
      ]
    },
    {
      num: "04",
      title: "Payment Gateway Disclaimer",
      icon: "💳",
      color: "#FFE66D",
      content:
        "All transactions are processed through secure third-party payment gateways. We do not store card details, CVV numbers, or UPI PINs. Refund timelines may vary depending on the policies of the payment provider."
    },
    {
      num: "05",
      title: "Cancellation Policy",
      icon: "📅",
      color: "#C3A6FF",
      content:
        "Subscription cancellations must be requested before the next billing cycle. Once renewed, subscription charges are non-refundable for the current billing period."
    },
    {
      num: "06",
      title: "Changes to This Policy",
      icon: "📝",
      color: "#4ECDC4",
      content:
        "We reserve the right to modify this Refund Policy at any time. Updates will be posted on this page, and continued use of our services constitutes acceptance of the revised policy."
    }
  ];

  return (
    <div className="page-enter" style={{ fontFamily: "'Sora', sans-serif", color: "#E8EAF0" }}>

      <PageHeader
        icon="💰"
        label="Legal"
        title="Refund Policy"
        subtitle="This policy explains how refunds, cancellations, and payment issues are handled for Tuvido services."
        color="#4ECDC4"
      />

      <div style={{ margin: "0 auto", padding: "0 clamp(20px, 8vw, 120px) 100px" }}>

        <div style={{ background: "rgba(78,205,196,0.06)", border: "1px solid rgba(78,205,196,0.2)", borderRadius: 14, padding: "16px 24px", marginBottom: 60, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 20 }}>📅</span>
          <div>
            <div style={{ fontSize: 12, color: "#4ECDC4", fontWeight: 700, letterSpacing: "0.08em" }}>
              LAST UPDATED
            </div>
            <div style={{ fontSize: 14, color: "#8892A8", marginTop: 2 }}>
              May 1, 2025
            </div>
          </div>
        </div>

        {sections.map((s, i) => (
          <AnimSection key={s.num} delay={i * 50} style={{ marginBottom: 24 }}>
            <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "32px 36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${s.color}14`, border: `1px solid ${s.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                  {s.icon}
                </div>
                <div>
                  <div style={{ fontSize: 11, color: s.color, fontWeight: 700, letterSpacing: "0.1em" }}>
                    {s.num}
                  </div>
                  <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 20, fontWeight: 700 }}>
                    {s.title}
                  </h3>
                </div>
              </div>

              {s.content && (
                <p style={{ fontSize: 14, color: "#8892A8", lineHeight: 1.8 }}>
                  {s.content}
                </p>
              )}

              {s.items && (
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {s.items.map(item => (
                    <li key={item} style={{ display: "flex", gap: 12, fontSize: 14, color: "#8892A8", lineHeight: 1.7 }}>
                      <span style={{ color: s.color, marginTop: 3 }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </AnimSection>
        ))}

        <AnimSection>
          <div style={{ background: "rgba(78,205,196,0.06)", border: "1px solid rgba(78,205,196,0.2)", borderRadius: 20, padding: "32px 36px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
              Need Help?
            </h3>
            <p style={{ fontSize: 14, color: "#8892A8", marginBottom: 24, lineHeight: 1.7 }}>
              If you have questions regarding refunds or payments, please contact our support team.
            </p>
            <p style={{ color: "#4ECDC4", fontWeight: 600 }}>
              Email: support@tuvido.com
            </p>
          </div>
        </AnimSection>

      </div>
    </div>
  );
}