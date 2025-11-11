"use client";
import { useEffect, useState } from 'react';
import TermsModal from './TermsModal';

export default function TermsController() {
  const [showTerms, setShowTerms] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      const accepted = window.localStorage.getItem('acceptedTOS');
      if (!accepted) setShowTerms(true);
    } catch (e) {
      // localStorage unavailable: default to showing terms
      setShowTerms(true);
    }
  }, []);

  // Blocca il body scroll quando il modal è aperto
  useEffect(() => {
    if (showTerms && isClient) {
      document.body.style.overflow = 'hidden';
      document.body.style.pointerEvents = 'none';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.pointerEvents = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.pointerEvents = 'auto';
    };
  }, [showTerms, isClient]);

  const handleAccept = () => {
    try {
      window.localStorage.setItem('acceptedTOS', Date.now().toString());
    } catch (e) {
      // ignore
    }
    setShowTerms(false);
  };

  const handleDecline = () => {
    // Se l'utente rifiuta, rimane visibile (non può usare l'app)
    setShowTerms(true);
  };

  if (!showTerms || !isClient) return null;
  return <TermsModal onAccept={handleAccept} onDecline={handleDecline} />;
}
