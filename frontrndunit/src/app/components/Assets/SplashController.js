"use client";
import { useEffect, useState } from 'react';
import OpeningScreen from './OpeningScreen';
import TermsController from './TermsController';

export default function SplashController() {
  const [showSplash, setShowSplash] = useState(false);
  const [splashFinished, setSplashFinished] = useState(false);

  useEffect(() => {
    try {
      const seen = window.localStorage.getItem('seenOpeningScreen');
      if (!seen) setShowSplash(true);
      else setSplashFinished(true); // Se già visto, splash è "finito"
    } catch (e) {
      // localStorage not available -> don't show
      setShowSplash(false);
      setSplashFinished(true);
    }
  }, []);

  // Blocca lo scroll del body mentre OpeningScreen è visibile
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showSplash]);

  const handleFinish = () => {
    try {
      window.localStorage.setItem('seenOpeningScreen', '1');
    } catch (e) {
      // ignore
    }
    setShowSplash(false);
    setSplashFinished(true);
  };

  return (
    <>
      {showSplash && <OpeningScreen onFinish={handleFinish} />}
      {splashFinished && <TermsController />}
    </>
  );
}
