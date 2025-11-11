"use client";
import { useEffect, useRef, useState } from "react";

export default function ParallaxSection({ children, speed = 0.5, className = "" }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const elementTop = ref.current.offsetTop;
        const distance = scrolled - elementTop;
        setOffset(distance * speed);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
}
