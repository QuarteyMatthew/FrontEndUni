"use client";
import { useEffect, useRef, useState } from "react";

export default function StaggerReveal({ children, staggerDelay = 0.12, className = "" }) {
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
      { rootMargin: "-5% 0px -5% 0px", threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className}`}>
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <div
            key={index}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 700ms cubic-bezier(0.23, 1, 0.320, 1) ${
                index * (staggerDelay * 1000)
              }ms, transform 700ms cubic-bezier(0.23, 1, 0.320, 1) ${
                index * (staggerDelay * 1000)
              }ms`,
            }}
          >
            {child}
          </div>
        ))
      ) : (
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 700ms cubic-bezier(0.23, 1, 0.320, 1), transform 700ms cubic-bezier(0.23, 1, 0.320, 1)",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
