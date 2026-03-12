import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Force instant scroll to avoid smooth-scroll conflicts
    window.scrollTo(0, 0);
    
    // 2. Fallback for modern browsers/specific layouts
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, [pathname]);

  return null;
}