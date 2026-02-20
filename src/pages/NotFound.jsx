import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function PageHeader({ icon, label, title, subtitle, color = "#FF6B6B" }) {
  return (
    <div style={{ padding: "140px clamp(20px, 8vw, 120px) 80px", position: "relative", overflow: "hidden", textAlign: "center" }}>
      
      <div className="grid-overlay" />
      <div className="hero-glow" style={{ width: 500, height: 500, background: `${color}18`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
      <div style={{ position: "relative", zIndex: 1 }}>
     
        <h1 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>
          404 – Page Not Found
        </h1>
        <p style={{ fontSize: 17, color: "#6B7A99", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
          The page you’re looking for doesn’t exist or may have been moved.
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

export default function NotFoundPage() {
  return (
    <div className="page-enter" style={{ fontFamily: "'Sora', sans-serif", color: "#E8EAF0" }}>

      <PageHeader
        icon="🚫"
        label="Error"
        title="404 – Page Not Found"
        subtitle="The page you’re trying to access could not be found."
        color="#FF6B6B"
      />

      <div style={{ margin: "0 auto", padding: "0 clamp(20px, 8vw, 120px) 120px" }}>

        <AnimSection>
          <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "40px 36px", textAlign: "center" }}>

            <div style={{ fontSize: 72, marginBottom: 20 }}>🔍</div>

            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
              Oops! This page does not exist.
            </h3>

            <p style={{ fontSize: 15, color: "#8892A8", marginBottom: 30, lineHeight: 1.7 }}>
              It might have been removed, renamed, or is temporarily unavailable.
              Please check the URL or navigate back to the homepage.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              

              <Link
                to="/"
                style={{
                  padding: "12px 28px",
                  borderRadius: 12,
                  background: "rgba(78,205,196,0.15)",
                  border: "1px solid rgba(78,205,196,0.3)",
                  color: "#4ECDC4",
                  fontWeight: 600,
                  textDecoration: "none"
                }}
              >
                Go to Home
              </Link>
            </div>

          </div>
        </AnimSection>

      </div>
    </div>
  );
}