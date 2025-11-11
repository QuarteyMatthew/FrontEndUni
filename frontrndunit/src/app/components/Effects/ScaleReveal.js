"use client";
import { useEffect, useRef, useState } from "react";

export default function ScaleReveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(el);
          }
        });
      },
      { rootMargin: "-8% 0px -8% 0px", threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1) rotate(0deg)" : "scale(0.92) rotate(-2deg)",
        transition: `opacity 900ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms, transform 900ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
        transformOrigin: "center",
      }}
    >
      {children}
    </div>
  );
}
