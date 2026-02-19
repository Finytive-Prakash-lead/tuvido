import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function PageHeader({ icon, label, title, subtitle, color = "#4ECDC4" }) {
    return (
        <>
            <div style={{ padding: "140px clamp(20px, 8vw, 120px) 80px", position: "relative", overflow: "hidden", textAlign: "center" }}>
                <Link className="cta-primary" style={{ padding: "10px 22px", fontSize: 14 }} to="/">
                    Home
                </Link>

                <div className="grid-overlay" />
                <div className="hero-glow" style={{ width: 500, height: 500, background: `${color}18`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ fontSize: 56, marginBottom: 20 }}>{icon}</div>
                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color, marginBottom: 16 }}>✦ {label}</div>
                    <h1 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>{title}</h1>
                    <p style={{ fontSize: 17, color: "#6B7A99", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>{subtitle}</p>
                </div>
            </div>
        </>
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

export default function TuvidoPrivacyPage({ navigate }) {

    const sections = [
        {
            num: "01",
            title: "How We Collect Information",
            icon: "📋",
            items: [
                "Student name, mobile number, academic details, and parent/guardian information when a tuition center creates an account.",
                "Communication records such as emails, support requests, and feedback.",
                "Attendance logs, time entries, academic activities, and fee payment records."
            ]
        },
        {
            num: "02",
            title: "How We Use Your Information",
            icon: "⚙️",
            items: [
                "Manage student enrollment, batches, branches, and academic records.",
                "Process fee payments through secure third-party payment gateways.",
                "Send notifications for attendance, fee due dates, and announcements.",
                "Provide parent access to monitor student activities.",
                "Improve system performance, security, and user experience."
            ]
        },
        {
            num: "03",
            title: "Sharing Your Information",
            icon: "🤝",
            items: [
                "We do not sell or rent personal data to third parties.",
                "Information is shared only with secure payment providers for transaction processing.",
                "Data may be disclosed if required by law or government authorities.",
                "Each tuition organization controls and manages its own student data."
            ]
        },
        {
            num: "04",
            title: "Payments & Financial Data",
            icon: "💳",
            items: [
                "Payments are processed securely via Razorpay or other trusted gateways.",
                "Tuvido does not store sensitive card details, CVV, or UPI PIN.",
                "Payment providers comply with PCI-DSS standards.",
                "Transaction details are used only for billing, confirmation, and record keeping.",
                "Refund or dispute information may be shared with the payment provider if required."
            ]
        },
        {
            num: "05",
            title: "Cookies & Tracking",
            icon: "🍪",
            items: [
                "We use essential cookies for login sessions and security.",
                "No third-party advertising cookies are used.",
                "Analytics data is anonymized and used for service improvement only.",
                "Users may clear cookies via browser settings at any time."
            ]
        },
        {
            num: "06",
            title: "Changes to This Policy",
            icon: "🔄",
            items: [
                "We review and update this Privacy Policy periodically.",
                "Updates will be posted on this page with a revised 'Last Updated' date.",
                "Continued use of the app indicates acceptance of the updated policy."
            ]
        }
    ];

    return (
        <div className="page-enter" style={{ fontFamily: "'Sora', sans-serif", color: "#E8EAF0" }}>

            <PageHeader
                icon="🔐"
                label="Legal"
                title="Privacy Policy"
                subtitle="This policy explains how Tuvido collects, uses, and protects student, parent, and organization data."
                color="#6C9CFF"
            />

            <div style={{ margin: "0 auto", padding: "0 clamp(20px, 8vw, 120px) 100px" }}>

                {/* Effective Date */}
                <div style={{ background: "rgba(108,156,255,0.08)", border: "1px solid rgba(108,156,255,0.2)", borderRadius: 14, padding: "16px 24px", marginBottom: 60, display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 20 }}>📅</span>
                    <div>
                        <div style={{ fontSize: 12, color: "#6C9CFF", fontWeight: 700, letterSpacing: "0.08em" }}>
                            LAST UPDATED
                        </div>
                        <div style={{ fontSize: 14, color: "#8892A8", marginTop: 2 }}>
                            November 13, 2025
                        </div>
                    </div>
                </div>

                {sections.map((s, i) => (
                    <AnimSection key={s.num} delay={i * 60} style={{ marginBottom: 48 }}>
                        <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "32px 36px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(108,156,255,0.1)", border: "1px solid rgba(108,156,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                                    {s.icon}
                                </div>
                                <div>
                                    <div style={{ fontSize: 11, color: "#6C9CFF", fontWeight: 700, letterSpacing: "0.1em" }}>
                                        {s.num}
                                    </div>
                                    <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 20, fontWeight: 700 }}>
                                        {s.title}
                                    </h3>
                                </div>
                            </div>

                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                                {s.items.map(item => (
                                    <li key={item} style={{ display: "flex", gap: 12, fontSize: 14, color: "#8892A8", lineHeight: 1.7 }}>
                                        <span style={{ color: "#6C9CFF", marginTop: 3 }}>→</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimSection>
                ))}

                <AnimSection>
                    <div style={{ background: "rgba(78,205,196,0.06)", border: "1px solid rgba(78,205,196,0.2)", borderRadius: 20, padding: "32px 36px", textAlign: "center" }}>
                        <div style={{ fontSize: 28, marginBottom: 12 }}>📬</div>
                        <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
                            Contact Us
                        </h3>
                        <p style={{ fontSize: 14, color: "#8892A8", marginBottom: 24, lineHeight: 1.7 }}>
                            If you have any questions regarding this Privacy Policy or your data, please contact us.
                        </p>
                        <p style={{ color: "#6C9CFF", fontWeight: 600 }}>
                            Email: support@tuvido.com
                        </p>
                    </div>
                </AnimSection>

            </div>
        </div>
    );
}
