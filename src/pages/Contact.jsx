import { useState, useEffect, useRef } from "react";

function PageHeader({ icon, label, title, subtitle, color = "#4ECDC4" }) {
  return (
    <div style={{ padding: "140px clamp(20px, 8vw, 120px) 80px", position: "relative", overflow: "hidden", textAlign: "center" }}>
      <div className="grid-overlay" />
      <div className="hero-glow" style={{ width: 500, height: 500, background: `${color}18`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: 56, marginBottom: 20 }}>{icon}</div>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color, marginBottom: 16 }}>✦ {label}</div>
        <h1 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>{title}</h1>
        <p style={{ fontSize: 17, color: "#6B7A99", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>{subtitle}</p>
      </div>
    </div>
  );
}

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}


function AnimSection({ children, style = {}, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(36px)", transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`, ...style }}>
      {children}
    </div>
  );
}
// ─── PAGE: CONTACT ────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", center: "", centerType: "", message: "", subject: "demo" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1400);
  };

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const contactInfo = [
    { icon: "📧", label: "Email Us", value: "hello@tuvido.app", sub: "We reply within 24 hours" },
    { icon: "📞", label: "Call Us", value: "+91 98765 43210", sub: "Mon–Sat, 9 AM – 6 PM IST" },
    { icon: "📍", label: "Office", value: "Chennai, Tamil Nadu", sub: "India · Remote-first team" },
    { icon: "💬", label: "Live Chat", value: "Available in-app", sub: "For existing customers" },
  ];

  return (
    <div className="page-enter" style={{ fontFamily: "'Sora', sans-serif", color: "#E8EAF0" }}>
      <PageHeader icon="📬" label="Contact" title="Let's Talk" subtitle="Request a demo, ask a question, or tell us how we can help your tuition center thrive." color="#4ECDC4" />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px, 8vw, 120px) 100px" }}>
        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 48, alignItems: "start" }}>

          {/* Left: Info */}
          <div>
            <AnimSection>
              <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Get in touch</h2>
              <p style={{ fontSize: 15, color: "#6B7A99", lineHeight: 1.7, marginBottom: 36 }}>Whether you're ready to get started or just exploring, we're here to help. Fill the form and we'll reach out within one business day.</p>
            </AnimSection>

            {contactInfo.map((c, i) => (
              <AnimSection key={c.label} delay={i * 70} style={{ marginBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "18px 22px" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(78,205,196,0.1)", border: "1px solid rgba(78,205,196,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, color: "#4ECDC4", fontWeight: 700, letterSpacing: "0.06em" }}>{c.label.toUpperCase()}</div>
                    <div style={{ fontSize: 15, fontWeight: 600, marginTop: 2 }}>{c.value}</div>
                    <div style={{ fontSize: 12, color: "#6B7A99", marginTop: 2 }}>{c.sub}</div>
                  </div>
                </div>
              </AnimSection>
            ))}

            {/* Social */}
            <AnimSection delay={320} style={{ marginTop: 24 }}>
              <div style={{ fontSize: 13, color: "#6B7A99", marginBottom: 12, fontWeight: 600, letterSpacing: "0.06em" }}>FOLLOW US</div>
              <div style={{ display: "flex", gap: 12 }}>
                {["𝕏 Twitter", "in LinkedIn", "◎ Instagram"].map(s => (
                  <div key={s} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "8px 16px", fontSize: 13, color: "#8892A8", cursor: "pointer", transition: "all 0.2s" }}>{s}</div>
                ))}
              </div>
            </AnimSection>
          </div>

          {/* Right: Form */}
          <AnimSection delay={100}>
            <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 28, padding: "44px 40px" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: 64, marginBottom: 20 }}>✅</div>
                  <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 28, fontWeight: 800, marginBottom: 12, color: "#4ECDC4" }}>Message Received!</h3>
                  <p style={{ fontSize: 15, color: "#8892A8", lineHeight: 1.7 }}>Thanks for reaching out. Our team will get back to you within 24 hours.</p>
                  <button className="cta-primary" style={{ marginTop: 28 }} onClick={() => setSubmitted(false)}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Subject selector */}
                  <div style={{ marginBottom: 28 }}>
                    <label className="form-label">I want to...</label>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      {[["demo", "🎯 Request Demo"], ["question", "❓ Ask a Question"], ["support", "🛠 Get Support"], ["partner", "🤝 Partner with Us"]].map(([val, lbl]) => (
                        <button key={val} type="button" onClick={() => update("subject", val)} style={{
                          padding: "8px 16px", borderRadius: 100, fontSize: 13, fontWeight: 600, cursor: "pointer",
                          background: form.subject === val ? "rgba(78,205,196,0.15)" : "rgba(255,255,255,0.04)",
                          border: `1px solid ${form.subject === val ? "rgba(78,205,196,0.5)" : "rgba(255,255,255,0.08)"}`,
                          color: form.subject === val ? "#4ECDC4" : "#8892A8",
                          transition: "all 0.2s", fontFamily: "'Sora', sans-serif",
                        }}>{lbl}</button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Email */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input required className="form-input" placeholder="Your name" value={form.name} onChange={e => update("name", e.target.value)} />
                    </div>
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input required type="email" className="form-input" placeholder="you@example.com" value={form.email} onChange={e => update("email", e.target.value)} />
                    </div>
                  </div>

                  {/* Phone + Center */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label className="form-label">Phone Number</label>
                      <input type="tel" className="form-input" placeholder="+91 00000 00000" value={form.phone} onChange={e => update("phone", e.target.value)} />
                    </div>
                    <div>
                      <label className="form-label">Center Name</label>
                      <input className="form-input" placeholder="Your tuition center" value={form.center} onChange={e => update("center", e.target.value)} />
                    </div>
                  </div>

                  {/* Center Type */}
                  <div style={{ marginBottom: 16 }}>
                    <label className="form-label">Center Type</label>
                    <select className="form-input" value={form.centerType} onChange={e => update("centerType", e.target.value)} style={{ cursor: "pointer" }}>
                      <option value="" style={{ background: "#0A0E1A" }}>Select type...</option>
                      <option value="tuition" style={{ background: "#0A0E1A" }}>Tuition Center</option>
                      <option value="coaching" style={{ background: "#0A0E1A" }}>Coaching Institute</option>
                      <option value="training" style={{ background: "#0A0E1A" }}>Training Academy</option>
                      <option value="other" style={{ background: "#0A0E1A" }}>Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: 28 }}>
                    <label className="form-label">Message *</label>
                    <textarea required className="form-input" rows={4} placeholder="Tell us about your center and what you need..." value={form.message} onChange={e => update("message", e.target.value)} style={{ resize: "vertical", minHeight: 120 }} />
                  </div>

                  <button type="submit" className="cta-primary" style={{ width: "100%", justifyContent: "center", fontSize: 16, padding: "16px 0" }} disabled={loading}>
                    {loading ? "Sending..." : "Send Message →"}
                  </button>
                  <p style={{ fontSize: 12, color: "#4A526A", textAlign: "center", marginTop: 14 }}>By submitting, you agree to our Privacy Policy and Terms of Service.</p>
                </form>
              )}
            </div>
          </AnimSection>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: 80 }}>
          <AnimSection style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">✦ FAQ</div>
            <h2 className="section-title">Common Questions</h2>
          </AnimSection>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="two-col">
            {[
              ["How long is the free trial?", "30 days, no credit card required. Full access to all features."],
              ["Can I migrate existing data?", "Yes. We offer free data migration support for CSV and Excel files."],
              ["Is there a student limit?", "No hard limit. Plans scale with the number of active students."],
              ["Do parents need the app too?", "Yes — there's a dedicated parent app available on iOS and Android."],
              ["Can I manage multiple branches?", "Absolutely. Tuvido is built for multi-branch tuition centers."],
              ["What payment gateways are supported?", "Razorpay, Stripe, and PayU are currently supported."],
            ].map(([q, a], i) => (
              <AnimSection key={q} delay={i * 60}>
                <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "24px 28px" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10, color: "#E8EAF0" }}>Q: {q}</div>
                  <div style={{ fontSize: 14, color: "#8892A8", lineHeight: 1.7 }}>{a}</div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}