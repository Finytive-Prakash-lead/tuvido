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

export default function TermsPage({ navigate }) {

  const sections = [
    {
      num: "01",
      title: "Acceptance of Terms",
      icon: "✅",
      color: "#4ECDC4",
      content:
        "By accessing or using the Tuvido mobile application (“App”), you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please discontinue use of the App. These terms apply to tuition administrators, teachers, students, and parents."
    },
    {
      num: "02",
      title: "Use of the App",
      icon: "📱",
      color: "#FFE66D",
      items: [
        "You must use the App only for lawful educational and administrative purposes.",
        "You agree not to misuse, copy, modify, distribute, or reverse-engineer any part of the App.",
        "Use of the App must comply with your tuition organization's internal policies.",
        "Unauthorized commercial use or redistribution of the platform is strictly prohibited."
      ]
    },
    {
      num: "03",
      title: "User Responsibilities",
      icon: "👤",
      color: "#A8E6CF",
      items: [
        "You must provide accurate and complete information when creating an account.",
        "You are responsible for all activities that occur under your account.",
        "Login credentials must be kept secure and confidential.",
        "You must notify us immediately at support@tuvido.com if you suspect unauthorized access."
      ]
    },
    {
      num: "04",
      title: "Intellectual Property",
      icon: "⚖️",
      color: "#FF6B6B",
      content:
        "All content, branding, software, logos, and materials available through Tuvido are owned by Tuvido or licensed to us. Unauthorized reproduction, modification, or distribution of our intellectual property is strictly prohibited."
    },
    {
      num: "05",
      title: "Service Availability",
      icon: "🛠️",
      color: "#C3A6FF",
      items: [
        "We aim to keep the App operational and secure at all times.",
        "We do not guarantee uninterrupted or error-free access.",
        "We may suspend, update, or discontinue services temporarily for maintenance or improvements."
      ]
    },
    {
      num: "06",
      title: "Payments & Fees",
      icon: "💳",
      color: "#FFB347",
      items: [
        "Student fee payments are processed via secure third-party payment gateways.",
        "Tuvido does not store sensitive card details, CVV, or UPI PIN.",
        "Tuvido is not responsible for technical failures originating from payment providers.",
        "Subscription or service fees for tuition organizations are subject to agreed pricing terms."
      ]
    },
    {
      num: "07",
      title: "Limitation of Liability",
      icon: "🛡️",
      color: "#8892A8",
      content:
        "Tuvido is not responsible for loss of data caused by user error, incorrect data entry, or third-party technical issues. We are not liable for damages resulting from misuse of the App or unauthorized account access. Tuition organizations are responsible for lawful use of student, location, and biometric data."
    },
    {
      num: "08",
      title: "Changes to Terms",
      icon: "🔄",
      color: "#4ECDC4",
      content:
        "Tuvido may update these Terms & Conditions at any time. Updates will be posted on this page. Continued use of the App after changes indicates acceptance of the revised terms."
    }
  ];

  return (
    <div className="page-enter" style={{ fontFamily: "'Sora', sans-serif", color: "#E8EAF0" }}>

      <PageHeader
        icon="📜"
        label="Legal"
        title="Terms & Conditions"
        subtitle="These terms govern your use of Tuvido. Please read them carefully before using the platform."
        color="#4ECDC4"
      />

      <div style={{ margin: "0 auto", padding: "0 clamp(20px, 8vw, 120px) 100px" }}>

        {/* Last Updated */}
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
              Contact Us
            </h3>
            <p style={{ fontSize: 14, color: "#8892A8", marginBottom: 24, lineHeight: 1.7 }}>
              If you have any questions regarding these Terms & Conditions, please contact us.
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
