import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

// ─── SHARED STYLES ────────────────────────────────────────────────────────────
const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Bricolage+Grotesque:wght@400;600;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #0A0E1A; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: #0A0E1A; }
  ::-webkit-scrollbar-thumb { background: #4ECDC4; border-radius: 3px; }

  .nav-link {
    position: relative; color: #A0AABF; text-decoration: none;
    font-size: 14px; font-weight: 500; transition: color 0.2s;
    padding-bottom: 3px; cursor: pointer; background: none; border: none;
  }
  .nav-link::after {
    content: ''; position: absolute; bottom: -1px; left: 0;
    width: 0; height: 2px; background: #4ECDC4; transition: width 0.3s;
  }
  .nav-link:hover { color: #fff; }
  .nav-link:hover::after, .nav-link.active::after { width: 100%; }
  .nav-link.active { color: #4ECDC4; }

  .cta-primary {
    display: inline-flex; align-items: center; gap: 10px;
    background: #4ECDC4; color: #0A0E1A; font-weight: 700; font-size: 15px;
    padding: 14px 32px; border-radius: 100px; border: none; cursor: pointer;
    text-decoration: none; transition: transform 0.2s, box-shadow 0.2s;
    font-family: 'Sora', sans-serif;
  }
  .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(78,205,196,0.4); }

  .cta-secondary {
    display: inline-flex; align-items: center; gap: 10px;
    background: transparent; color: #E8EAF0; font-weight: 600; font-size: 15px;
    padding: 14px 32px; border-radius: 100px; border: 1px solid rgba(255,255,255,0.2);
    cursor: pointer; text-decoration: none; transition: border-color 0.2s, background 0.2s;
    font-family: 'Sora', sans-serif;
  }
  .cta-secondary:hover { border-color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.05); }

  .feat-card {
    background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
    border-radius: 24px; padding: 32px; transition: transform 0.3s, border-color 0.3s, background 0.3s;
    position: relative; overflow: hidden;
  }
  .feat-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0;
    height: 2px; background: var(--accent, #4ECDC4); opacity: 0; transition: opacity 0.3s;
  }
  .feat-card:hover { transform: translateY(-6px); border-color: rgba(255,255,255,0.14); background: rgba(255,255,255,0.06); }
  .feat-card:hover::before { opacity: 1; }

  .audience-chip {
    display: inline-flex; align-items: center; gap: 12px;
    background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
    border-radius: 100px; padding: 16px 28px; font-size: 15px; font-weight: 600;
    transition: all 0.2s; cursor: default; width: 100%;
  }
  .audience-chip:hover { background: rgba(78,205,196,0.1); border-color: rgba(78,205,196,0.4); transform: scale(1.02); }

  .pill-tag {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(78,205,196,0.08); border: 1px solid rgba(78,205,196,0.2);
    color: #4ECDC4; border-radius: 100px; padding: 5px 14px; font-size: 12px; font-weight: 600;
  }

  .section-label { font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #4ECDC4; margin-bottom: 16px; }
  .section-title { font-family: 'Bricolage Grotesque', sans-serif; font-size: clamp(30px, 4vw, 52px); font-weight: 800; line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 20px; }
  .hero-glow { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; }
  .grid-overlay {
    position: absolute; inset: 0;
    background-image: linear-gradient(rgba(78,205,196,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(78,205,196,0.04) 1px, transparent 1px);
    background-size: 60px 60px; pointer-events: none;
  }

  .form-input {
    width: 100%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px; padding: 14px 18px; color: #E8EAF0; font-family: 'Sora', sans-serif;
    font-size: 14px; outline: none; transition: border-color 0.2s, background 0.2s;
  }
  .form-input:focus { border-color: rgba(78,205,196,0.5); background: rgba(78,205,196,0.04); }
  .form-input::placeholder { color: #4A526A; }

  .form-label { font-size: 13px; font-weight: 600; color: #8892A8; margin-bottom: 8px; letter-spacing: 0.04em; display: block; }

  .footer-link { color: #6B7A99; text-decoration: none; font-size: 14px; transition: color 0.2s; cursor: pointer; background: none; border: none; font-family: 'Sora', sans-serif; }
  .footer-link:hover { color: #4ECDC4; }

  .stat-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 28px 32px; text-align: center; flex: 1; min-width: 130px; backdrop-filter: blur(10px); }

  .policy-section { margin-bottom: 40px; }
  .policy-section h3 { font-family: 'Bricolage Grotesque', sans-serif; font-size: 20px; font-weight: 700; color: #E8EAF0; margin-bottom: 14px; display: flex; align-items: center; gap: 10px; }
  .policy-section p, .policy-section li { font-size: 15px; color: #8892A8; line-height: 1.8; }
  .policy-section ul { padding-left: 0; list-style: none; display: flex; flex-direction: column; gap: 10px; }
  .policy-section ul li { display: flex; gap: 10px; align-items: flex-start; }
  .policy-section ul li::before { content: '→'; color: #4ECDC4; flex-shrink: 0; margin-top: 2px; }

  @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-18px); } }
  .float-anim { animation: float 6s ease-in-out infinite; }

  @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  .page-enter { animation: fadeUp 0.5s ease forwards; }

  .mobile-menu {
    position: fixed; inset: 0; background: rgba(10,14,26,0.98); z-index: 200;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 32px;
    backdrop-filter: blur(20px);
  }
  .mobile-menu a, .mobile-menu button { font-size: 22px; color: #E8EAF0; text-decoration: none; background: none; border: none; cursor: pointer; font-family: 'Sora', sans-serif; font-weight: 600; transition: color 0.2s; }
  .mobile-menu a:hover, .mobile-menu button:hover { color: #4ECDC4; }

  @media (max-width: 768px) {
    .desktop-nav { display: none !important; }
    .hero-layout { flex-direction: column !important; }
    .phone-mockup-wrap { display: none !important; }
    .feat-grid { grid-template-columns: 1fr !important; }
    .steps-grid { grid-template-columns: 1fr 1fr !important; }
    .stats-row { flex-wrap: wrap !important; }
    .two-col { grid-template-columns: 1fr !important; }
  }
  @media (min-width: 769px) {
    .hamburger { display: none !important; }
  }
`;

// ─── DATA ─────────────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: "🏫", title: "Branch & Batch Management", desc: "Create multiple branches and organize students into batches with ease. Manage your entire institution from a single dashboard.", color: "#4ECDC4" },
  { icon: "👩‍🎓", title: "Student Management", desc: "Maintain rich student profiles with academic and personal details. Everything you need, always at your fingertips.", color: "#FFE66D" },
  { icon: "📅", title: "Attendance Tracking", desc: "Monitor daily attendance with smart reports, history tracking, and instant parent notifications.", color: "#FF6B6B" },
  { icon: "💳", title: "Fee & Payment Management", desc: "Set due dates, send automated reminders, and accept online payments through a secure integrated gateway.", color: "#A8E6CF" },
  { icon: "🔔", title: "Smart Notifications", desc: "Instant alerts for fee dues, attendance updates, and important announcements delivered directly to parents.", color: "#C3A6FF" },
  { icon: "👨‍👩‍👧", title: "Parent Portal", desc: "Give parents full visibility into attendance, academic activities, and fee payments in real-time.", color: "#FFB347" },
];
const STEPS = [
  { num: "01", title: "Create Your Center", desc: "Set up branches, batches, and staff in minutes." },
  { num: "02", title: "Add Students", desc: "Import or manually add students with complete profiles." },
  { num: "03", title: "Track & Manage", desc: "Monitor attendance, collect fees, and send notifications effortlessly." },
  { num: "04", title: "Engage Parents", desc: "Parents get real-time updates through their personalized portal." },
];
const AUDIENCES = [
  { icon: "🎓", label: "Tuition Centers" },
  { icon: "📘", label: "Coaching Institutes" },
  { icon: "🏋️", label: "Training Academies" },
  { icon: "🏛️", label: "Educational Organizations" },
];

// ─── HOOKS ────────────────────────────────────────────────────────────────────
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

// ─── LOGO ─────────────────────────────────────────────────────────────────────
function Logo({ navigate }) {
  return (
    <button onClick={() => navigate("home")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer" }}>
      <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #4ECDC4, #2BA99E)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 800, color: "#0A0E1A", fontFamily: "'Bricolage Grotesque', sans-serif" }}>T</div>
      <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em", color: "#E8EAF0" }}>Tuvido</span>
    </button>
  );
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar({ page, navigate, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    if (page !== "home") { navigate("home", id); return; }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const goPage = (p) => { setMobileOpen(false); navigate(p); };

  const homeNavItems = [
    { label: "Features", id: "features" },
    { label: "How It Works", id: "howitworks" },
    { label: "Who It's For", id: "whoisfor" },
  ];
  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 clamp(20px, 5vw, 80px)", height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(10,14,26,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
        transition: "all 0.3s",
        fontFamily: "'Sora', sans-serif",
      }}>
        <Logo navigate={navigate} />

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {homeNavItems.map(item => (
            <button key={item.id} className={`nav-link ${page === "home" && activeSection === item.id ? "active" : ""}`} onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}

          {/* <button className={`nav-link ${page === "privacy" ? "active" : ""}`} onClick={() => goPage("privacy")}>Privacy</button>
          <button className={`nav-link ${page === "terms" ? "active" : ""}`} onClick={() => goPage("terms")}>Terms</button> */}
          <button className={`nav-link ${page === "contact" ? "active" : ""}`} onClick={() => goPage("contact")}>Contact Us</button>
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button className="cta-primary" style={{ padding: "10px 22px", fontSize: 14 }} onClick={() => goPage("contact")} >
            Request Demo →
          </button>
          {/* Hamburger */}
          <button className="hamburger" onClick={() => setMobileOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}>
            <div style={{ width: 24, height: 2, background: "#E8EAF0", marginBottom: 5 }} />
            <div style={{ width: 24, height: 2, background: "#E8EAF0", marginBottom: 5 }} />
            <div style={{ width: 16, height: 2, background: "#E8EAF0" }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <button onClick={() => setMobileOpen(false)} style={{ position: "absolute", top: 24, right: 24, background: "none", border: "none", color: "#E8EAF0", fontSize: 28, cursor: "pointer" }}>✕</button>
          {homeNavItems.map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id)} style={{ fontSize: 20, color: "#E8EAF0", background: "none", border: "none", cursor: "pointer", fontFamily: "'Sora', sans-serif", fontWeight: 600 }}>{item.label}</button>
          ))}
          {/* <button onClick={() => goPage("privacy")} style={{ fontSize: 20, color: page === "privacy" ? "#4ECDC4" : "#E8EAF0", background: "none", border: "none", cursor: "pointer", fontFamily: "'Sora', sans-serif", fontWeight: 600 }}>Privacy Policy</button>
          <button onClick={() => goPage("terms")} style={{ fontSize: 20, color: page === "terms" ? "#4ECDC4" : "#E8EAF0", background: "none", border: "none", cursor: "pointer", fontFamily: "'Sora', sans-serif", fontWeight: 600 }}>Terms & Conditions</button> */}
          <button onClick={() => goPage("contact")} style={{ fontSize: 20, color: page === "contact" ? "#4ECDC4" : "#E8EAF0", background: "none", border: "none", cursor: "pointer", fontFamily: "'Sora', sans-serif", fontWeight: 600 }}>Contact Us</button>
        </div>
      )}
    </>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ navigate }) {
  return (
    <footer style={{ padding: "48px clamp(20px, 8vw, 120px)", borderTop: "1px solid rgba(255,255,255,0.07)", fontFamily: "'Sora', sans-serif" }}>
      <div style={{ maxWidth: 1800, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24, marginBottom: 32 }}>
          <Logo navigate={navigate} />
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            <Link className="footer-link" to="/privacy-policy">Privacy Policy</Link>
            <Link className="footer-link" to="/terms-and-conditions">Terms & Conditions</Link>
            <button className="footer-link" onClick={() => navigate("contact")}>Contact Us</button>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 13, color: "#3A4255" }}>© 2025 Tuvido. All rights reserved.</span>
          {/* <span style={{ fontSize: 13, color: "#3A4255" }}>Built with 🐦 Flutter · hello@tuvido.app</span> */}
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE: HOME ───────────────────────────────────────────────────────────────
function HomePage({ navigate, setActiveSection }) {
  const sectionRefs = useRef({});

  useEffect(() => {
    const sections = ["hero", "features", "howitworks", "whoisfor"];
    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) setActiveSection(id);
      }, { threshold: 0.3 });
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o && o.disconnect());
  }, [setActiveSection]);

  return (
    <div className="page-enter" style={{ fontFamily: "'Sora', sans-serif", color: "#E8EAF0" }}>

      {/* ── HERO ── */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", padding: "120px clamp(20px, 8vw, 120px) 80px", overflow: "hidden" }}>
        <div className="grid-overlay" />
        <div className="hero-glow" style={{ width: 600, height: 600, background: "rgba(78,205,196,0.14)", top: -100, right: -100 }} />
        <div className="hero-glow" style={{ width: 400, height: 400, background: "rgba(195,166,255,0.08)", bottom: 0, left: -100 }} />

        <div className="hero-layout" style={{ maxWidth: 1800, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", gap: 80, position: "relative", zIndex: 1 }}>
          {/* Left */}
          <div style={{ flex: 1 }}>
            {/* <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(78,205,196,0.12)", border: "1px solid rgba(78,205,196,0.3)", borderRadius: 100, padding: "6px 16px", fontSize: 13, color: "#4ECDC4", fontWeight: 600, letterSpacing: "0.04em", marginBottom: 28 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ECDC4", display: "inline-block" }} />
              Built with Flutter · Mobile-First
            </div> */}
            <h1 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(48px, 7vw, 60px)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.03em" }}>
              Smart<br />Tuition<br /><span style={{ color: "#4ECDC4" }}>Management.</span>
            </h1>
            <p style={{ fontSize: 18, color: "#8892A8", lineHeight: 1.7, marginTop: 28, marginBottom: 40, maxWidth: 520 }}>
              Tuvido streamlines student administration, attendance tracking, fee collection, and parent engagement — all in one powerful mobile app.
            </p>
            <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              <a target="_blank" href="https://play.google.com/store/apps/details?id=com.tuvido.Tuvido&hl=en_IN" className="cta-primary">Download App</a>
              <button className="cta-secondary" onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}>Explore Features</button>
            </div>
            {/* Stats */}
            {/* <div className="stats-row" style={{ display: "flex", gap: 16, marginTop: 52, flexWrap: "wrap" }}>
              {[["500+", "Tuition Centers"], ["50K+", "Students Tracked"], ["99.9%", "Uptime SLA"], ["4.9★", "App Rating"]].map(([n, l]) => (
                <div key={l} className="stat-card">
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 36, fontWeight: 800, color: "#4ECDC4", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 12, color: "#6B7A99", marginTop: 6, fontWeight: 500 }}>{l}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Phone Mockup */}
          <div className="phone-mockup-wrap" style={{ flex: "0 0 auto", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            <div style={{ position: "absolute", inset: -40, borderRadius: "50%", background: "radial-gradient(circle, rgba(78,205,196,0.18) 0%, transparent 70%)" }} />
            <div className="float-anim" style={{ width: 250, height: 500, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 36, overflow: "hidden", backdropFilter: "blur(20px)", position: "relative" }}>
              {/* Notch */}
              <div style={{ height: 28, background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 60, height: 8, borderRadius: 4, background: "rgba(255,255,255,0.15)" }} />
              </div>
              {/* App header */}
              <div style={{ padding: "14px 20px", background: "rgba(78,205,196,0.1)", borderBottom: "1px solid rgba(78,205,196,0.15)" }}>
                <div style={{ fontSize: 11, color: "#4ECDC4", fontWeight: 700, letterSpacing: "0.08em" }}>TUVIDO</div>
                <div style={{ fontSize: 15, fontWeight: 700, marginTop: 2 }}>Dashboard</div>
              </div>
              {/* Cards */}
              <div style={{ padding: "16px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
                {[["Today's Attendance", "94%", "#4ECDC4", "47 / 50 present"], ["Fees Collected", "₹82K", "#A8E6CF", "This month"], ["Pending Alerts", "3", "#FF6B6B", "Action needed"]].map(([label, val, color, sub]) => (
                  <div key={label} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "12px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontSize: 10, color: "#6B7A99", fontWeight: 600 }}>{label}</div>
                      <div style={{ fontSize: 9, color: "#4A526A", marginTop: 2 }}>{sub}</div>
                    </div>
                    <div style={{ fontSize: 22, fontWeight: 800, color, fontFamily: "'Bricolage Grotesque', sans-serif" }}>{val}</div>
                  </div>
                ))}
                <div style={{ background: "rgba(78,205,196,0.08)", border: "1px solid rgba(78,205,196,0.18)", borderRadius: 14, padding: "10px 14px" }}>
                  <div style={{ fontSize: 10, color: "#4ECDC4", fontWeight: 700, marginBottom: 8 }}>RECENT ACTIVITY</div>
                  {["Ravi Kumar – Paid ₹2,000", "Priya S – Absent today", "Batch A – 3 new students"].map(t => (
                    <div key={t} style={{ fontSize: 9, color: "#8892A8", padding: "4px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: "100px clamp(20px, 8vw, 120px)" }}>
        <div style={{ maxWidth: 1800, margin: "0 auto" }}>
          <AnimSection>
            <div className="section-label">✦ Key Features</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 60 }}>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Everything you need<br />to run your center.</h2>
              <p style={{ fontSize: 16, color: "#6B7A99", maxWidth: 340, lineHeight: 1.7 }}>From enrollment to payment — Tuvido handles every operational layer so you can focus on teaching.</p>
            </div>
          </AnimSection>
          <div className="feat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {FEATURES.map((f, i) => (
              <AnimSection key={f.title} delay={i * 70}>
                <div className="feat-card" style={{ "--accent": f.color, height: "100%" }}>
                  <span style={{ fontSize: 36, marginBottom: 20, display: "block", filter: `drop-shadow(0 0 12px ${f.color})` }}>{f.icon}</span>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, fontFamily: "'Bricolage Grotesque', sans-serif" }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: "#6B7A99", lineHeight: 1.7 }}>{f.desc}</p>
                  <div style={{ marginTop: 20, fontSize: 13, color: f.color, fontWeight: 600 }}>Learn more →</div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="howitworks" style={{ padding: "100px clamp(20px, 8vw, 120px)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent, rgba(78,205,196,0.025) 50%, transparent)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1800, margin: "0 auto", position: "relative" }}>
          <AnimSection style={{ textAlign: "center", marginBottom: 70 }}>
            <div className="section-label">✦ How It Works</div>
            <h2 className="section-title">Up and running in minutes.</h2>
          </AnimSection>
          <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 30, position: "relative" }}>
            <div style={{ position: "absolute", top: 48, left: "12.5%", right: "12.5%", height: 1, background: "linear-gradient(90deg, transparent, #4ECDC4, transparent)", opacity: 0.25, pointerEvents: "none" }} />
            {STEPS.map((s, i) => (
              <AnimSection key={s.num} delay={i * 100}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(78,205,196,0.1)", border: "1px solid rgba(78,205,196,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 22, fontWeight: 800, fontFamily: "'Bricolage Grotesque', sans-serif", color: "#4ECDC4" }}>{s.num}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, fontFamily: "'Bricolage Grotesque', sans-serif" }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "#6B7A99", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section id="whoisfor" style={{ padding: "100px clamp(20px, 8vw, 120px)" }}>
        <div style={{ maxWidth: 1800, margin: "0 auto", display: "flex", alignItems: "center", gap: 80, flexWrap: "wrap" }}>
          <AnimSection style={{ flex: 1, minWidth: 280 }}>
            <div className="section-label">✦ Who It's For</div>
            <h2 className="section-title">Built for every<br />learning center.</h2>
            <p style={{ fontSize: 16, color: "#6B7A99", lineHeight: 1.7, marginBottom: 40 }}>Whether you run a small home tuition or a multi-branch coaching institute — Tuvido scales with you.</p>
            <button className="cta-primary" onClick={() => navigate("contact")}>Start Free Trial →</button>
          </AnimSection>
          <div style={{ flex: 1, minWidth: 280, display: "flex", flexWrap: "wrap", gap: 16 }}>
            {AUDIENCES.map((a, i) => (
              <AnimSection key={a.label} delay={i * 80} style={{ width: "calc(50% - 8px)" }}>
                <div className="audience-chip"><span style={{ fontSize: 26 }}>{a.icon}</span><span>{a.label}</span></div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Flutter Band ── */}
      {/* <section style={{ padding: "60px clamp(20px, 8vw, 120px)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1800, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(69,190,229,0.15)", border: "1px solid rgba(69,190,229,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>🐦</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, fontFamily: "'Bricolage Grotesque', sans-serif" }}>Built with Flutter</div>
              <div style={{ fontSize: 13, color: "#6B7A99" }}>Cross-platform · iOS & Android · Secure</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["Cross-Platform", "Secure", "Offline-Ready", "Real-Time Sync", "Push Notifications"].map(t => (
              <span key={t} className="pill-tag">{t}</span>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Final CTA ── */}
      <section style={{ padding: "120px clamp(20px, 8vw, 120px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div className="hero-glow" style={{ width: 700, height: 700, background: "rgba(78,205,196,0.09)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
        <AnimSection style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">✦ Get Started Today</div>
          <h2 className="section-title" style={{ maxWidth: 680, margin: "0 auto 20px" }}>Ready to digitize your<br />tuition center?</h2>
          <p style={{ fontSize: 17, color: "#6B7A99", maxWidth: 480, margin: "0 auto 48px", lineHeight: 1.7 }}>Join hundreds of tuition centers already using Tuvido to simplify management and delight parents.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.tuvido.Tuvido&hl=en_IN" className="cta-primary">Download App</a>
            <button className="cta-secondary" style={{ fontSize: 16, padding: "16px 40px" }} onClick={() => navigate("contact")}>Contact Us</button>
          </div>
          {/* <div style={{ marginTop: 36, fontSize: 13, color: "#4A526A" }}>No credit card required · Setup in under 10 minutes · Free 30-day trial</div> */}
        </AnimSection>
      </section>
    </div>
  );
}

// ─── PAGE HEADER (reusable) ────────────────────────────────────────────────────
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






// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function TuvidoApp() {
  const [page, setPage] = useState("home");
  const [pendingScroll, setPendingScroll] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");

  const navigate = useCallback((target, scrollId = null) => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setPage(target);
    if (scrollId) setPendingScroll(scrollId);
  }, []);

  useEffect(() => {
    if (pendingScroll && page === "home") {
      const timeout = setTimeout(() => {
        const el = document.getElementById(pendingScroll);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setPendingScroll(null);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [pendingScroll, page]);

  return (
    <div style={{ fontFamily: "'Sora', sans-serif", background: "#0A0E1A", color: "#E8EAF0", overflowX: "hidden", minHeight: "100vh" }}>
      <style>{GLOBAL_STYLES}</style>
      <Navbar page={page} navigate={navigate} activeSection={activeSection} />
      <main>
        {page === "home" && <HomePage navigate={navigate} setActiveSection={setActiveSection} />}
        {page === "privacy" && <PrivacyPage navigate={navigate} />}
        {page === "terms" && <TermsPage navigate={navigate} />}
        {page === "contact" && <ContactPage />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}


// ─── PAGE: CONTACT ────────────────────────────────────────────────────────────
function ContactPage() {
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
    { icon: "📧", label: "Email Us", value: "support@tuvido.com", sub: "We reply within 24 hours" },
    { icon: "📞", label: "Call Us", value: "+91 86673 82199", sub: "Mon–Sat, 9 AM – 6 PM IST" },
    { icon: "📍", label: "Office", value: "2 Avadi-Vel Tech Road, Chennai, Tamil Nadu 600062", sub: "India · Remote-first team" },
    { icon: "💬", label: "Live Chat", value: "Available in-app", sub: "For existing customers" },
  ];

  return (
    <div className="page-enter" style={{ fontFamily: "'Sora', sans-serif", color: "#E8EAF0" }}>
      <PageHeader icon="📬" label="Contact" title="Let's Talk" subtitle="Request a demo, ask a question, or tell us how we can help your tuition center thrive." color="#4ECDC4" />

      <div style={{  margin: "0 auto", padding: "0 clamp(20px, 8vw, 120px) 100px" }}>
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