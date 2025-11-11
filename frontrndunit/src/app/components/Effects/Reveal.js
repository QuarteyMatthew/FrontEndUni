"use client";
import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", rootMargin = "-10% 0px -10% 0px", threshold = 0.12 }) {
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
      { root: null, rootMargin, threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, rootMargin, threshold]);

  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
}
