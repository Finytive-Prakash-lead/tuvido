import React, { useEffect, useState } from 'react';

export default function NetflixTitleCard({ duration = 4000, onFinish }) {
  const [visible, setVisible] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 2200);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish();
    }, duration);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(hideTimer);
    };
  }, [duration, onFinish]);

  if (!visible) return null;

  const letters = 'TUVIDO'.split('');

  const totalLines = 30; // total vertical bars
  const centerIndex = Math.floor(totalLines / 2);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden z-[9999]">
      {/* LINE EXPANSION EFFECT */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {Array.from({ length: totalLines }).map((_, i) => {
            const distance = Math.abs(i - centerIndex);
            const delay = `${distance * 80}ms`;

            return (
              <span
                key={i}
                className="absolute top-0 bottom-0"
                style={{
                  width: '4px',
                  left: `calc(50% + ${(i - centerIndex) * 12}px)`,
                  background: 'linear-gradient(to bottom, #7C3AED, #AD46FF)',
                  transform: 'scaleY(0)',
                  transformOrigin: 'center',
                  animation: `growLine 900ms ease forwards`,
                  animationDelay: delay,
                  boxShadow: '0 0 20px rgba(124,58,237,0.6)',
                }}
              />
            );
          })}
        </div>
      </div>

      {/* TEXT REVEAL */}
      {showText && (
        <div className="relative z-20 flex gap-4">
          {letters.map((letter, i) => (
            <span
              key={i}
              className="text-white text-6xl font-extrabold tracking-[0.3em]"
              style={{
                opacity: 0,
                animation: `fadeInUp 800ms ease forwards`,
                animationDelay: `${i * 120}ms`,
                textShadow: '0 0 30px rgba(173,70,255,0.8)',
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      )}

      <style>{`
        @keyframes growLine {
          0% {
            transform: scaleY(0);
            opacity: 0;
          }
          100% {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}