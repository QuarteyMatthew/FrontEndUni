"use client"
import React, { useState, useEffect } from "react";

export default function TypingEffect({ text = "", speed = 50, className = "" }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    if (!text) return;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={className}>{displayed}</span>;
}
