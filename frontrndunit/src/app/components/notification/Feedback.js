"use client";
import { useState, useEffect } from 'react';

export default function NotificationPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const lastClosedTime = window.localStorage.getItem('feedbackPopupClosedAt');
      const now = Date.now();
      const twentyMinutesInMs = 20 * 60 * 1000; // 20 minuti in millisecondi

      if (lastClosedTime) {
        const timeSinceClose = now - parseInt(lastClosedTime, 10);
        // Se è passato meno di 20 minuti, non mostrare il popup
        if (timeSinceClose < twentyMinutesInMs) {
          setVisible(false);
          return;
        }
      }

      // Mostra la notifica dopo 2 secondi se non è stata chiusa di recente
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    } catch (e) {
      // Se localStorage non è disponibile, mostra comunque il popup
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    try {
      // Salva il timestamp attuale in localStorage
      window.localStorage.setItem('feedbackPopupClosedAt', Date.now().toString());
    } catch (e) {
      // ignore se localStorage non è disponibile
    }
    setVisible(false);
  };

  return (
    <div style={{ fontFamily: "var(--font-geist-mono)" }} className={`fixed top-25 right-6 z-40 transition-all duration-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-96'} max-w-xs`}>
      <div className="bg-white rounded-2xl border-2 border-gray-300 p-4 flex flex-col gap-3 shadow-lg">
        {/* Header con icona info e X di chiusura */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 dark:text-black">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
            </svg>

            <h3 className="text-lg font-semibold text-black">Hey!</h3>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-600 hover:text-gray-800 text-xl font-light leading-none transition-colors"
            aria-label="Chiudi notifica"
          >
            ×
          </button>
        </div>

        {/* Testo della notifica */}
        <p className="text-gray-700 text-xs leading-relaxed">
          Sei già Laureato e vuoi condividere?
        </p>

        {/* Pulsante CTA */}
        <a
          href="#"
          className="bg-black text-white font-semibold py-2 px-4 rounded-full text-center text-sm hover:bg-gray-800 transition-colors"
        >
          Lascia un feedback qui!
        </a>
      </div>
    </div>
  );
}
