"use client";
import React from 'react';

export default function TermsModal({ onAccept, onDecline }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 pointer-events-auto">
      <div className="bg-white dark:bg-[#0b0b0b] text-black dark:text-white rounded-lg p-6 max-w-2xl w-full mx-4 pointer-events-auto">
        <h2 className="text-2xl font-semibold mb-4">Termini e condizioni</h2>
        <div className="max-h-64 overflow-auto text-sm leading-6 mb-4">
          <p>
            Qui andranno i termini di servizio della tua applicazione. Per favore
            inserisci il testo reale dei termini qui oppure carica un file e
            leggilo qui. Questo è solo un placeholder.
          </p>
          <p className="mt-3">
            Accettando, confermi di aver letto e accettato i termini di servizio.
          </p>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={() => onDecline && onDecline()}
            className="px-4 py-2 rounded-md border border-gray-300"
          >
            Rifiuta
          </button>
          <button
            onClick={() => onAccept && onAccept()}
            className="px-4 py-2 rounded-md bg-(--cherry-red) text-white"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
