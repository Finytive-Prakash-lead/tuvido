import { useEffect, useRef } from "react";

export default function ScrollProgressBar() {
  const progressRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / height) * 100;

      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[100]">
      <div
        ref={progressRef}
        className="h-full bg-gradient-to-r from-[#7C3AED] to-[#AD46FF] transition-[width] duration-75"
        style={{ width: "0%" }}
      />
    </div>
  );
}