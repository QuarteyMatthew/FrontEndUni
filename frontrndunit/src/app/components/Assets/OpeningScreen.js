"use client"
import { useEffect, useState, useCallback, useRef } from 'react';
import TypingEffect from '../Effects/TypingEffect';
const OpeningScreen = ({ targetId = 'page', onFinish }) => {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);
  const triggeredRef = useRef(false);

  const scrollToTarget = useCallback(() => {
    // Scrolla al top della pagina (MyHeader), non al fondo
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [targetId]);

  const cleanupListeners = useCallback(() => {
    window.removeEventListener('wheel', onWheel);
    window.removeEventListener('touchstart', onTouch);
    window.removeEventListener('keydown', onKey);
    window.removeEventListener('click', onClick);
    const pageEl = document.getElementById(targetId);
    if (pageEl) {
      pageEl.classList.remove('page-hidden-by-opening');
      pageEl.classList.remove('page-enter');
    }
    
  }, []);

  
  const onWheel = () => triggerHide();
  const onTouch = () => triggerHide();
  const onKey = (e) => {
    if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'Spacebar') triggerHide();
  };
  const onClick = () => triggerHide();

  
  const triggerHide = useCallback(() => {
    if (triggeredRef.current) return;
    triggeredRef.current = true;
    setHiding(true);

    const pageEl = document.getElementById(targetId);
    if (pageEl) {
      pageEl.classList.add('page-enter');
      pageEl.classList.remove('page-hidden-by-opening');
    }

    
    
    setTimeout(() => scrollToTarget(), 320);

    
    setTimeout(() => {
      setVisible(false);
      cleanupListeners();
      try {
        if (typeof onFinish === 'function') onFinish();
      } catch (e) {
        // ignore
      }
    }, 900);
  }, [scrollToTarget, targetId, cleanupListeners]);

  useEffect(() => {
    if (!visible) return;

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouch, { passive: true });
    window.addEventListener('keydown', onKey);
    window.addEventListener('click', onClick);

    return () => {
      cleanupListeners();
    };
  }, [visible]);

  useEffect(() => {
    
    const pageEl = document.getElementById(targetId);
    if (pageEl) {
      pageEl.classList.add('page-hidden-by-opening');
    }
    return () => {
      if (pageEl) {
        pageEl.classList.remove('page-hidden-by-opening');
        pageEl.classList.remove('page-enter');
      }
    };
  }, [targetId]);

  if (!visible) return null;

  return (
    <div>
      <div id="animation-open-page" className={`fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center ${hiding ? 'opacity-0 pointer-events-none' : 'bg-white dark:bg-(--mydarK)'}`} role="dialog" aria-modal="true" aria-label="Schermata di apertura">
        <div className="flex flex-col items-center px-6">
          
          <div style={{ fontFamily: "var(--font-geist-mono)"}} className='  max-w-150 bg-(--cherry-red) text-white p-4 mb-6 '>
            <TypingEffect text="Hhey ciao.. L'università inizia da una buona casa e dalle persone giuste con cui viverla." speed={50}  className=" text-center text-4xl max-w-195" />
          </div>
          
          <div className="text-[6rem] md:text-[8rem] mb-4" style={{ lineHeight: 1 }} aria-hidden>
            <img
              className="waving-image"
              src="/wave-hand.png"
              alt="mano che saluta"
              onError={(e) => {
                const img = e.currentTarget;
                if (img.src.includes('/wave-hand.png') && !img.src.includes('/assets/')) {
                  img.src = '/assets/wave-hand.png';
                  return;
                }
                if (!img.src.startsWith('data:')) {
                  img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><text y="18" font-size="16">👋</text></svg>';
                }
              }}
            />
          </div>
        </div>

        <style>{`
          .waving-image { width: 96px; height: 96px; object-fit: contain; display:inline-block; transform-origin:70% 70%; animation:wave 1.2s infinite ease-in-out; }
          @keyframes wave { 0%{transform:rotate(0deg);} 15%{transform:rotate(14deg);} 30%{transform:rotate(-8deg);} 45%{transform:rotate(14deg);} 60%{transform:rotate(-4deg);} 100%{transform:rotate(0deg);} }
          .chevron { color: rgba(0,0,0,0.95); background: transparent; border: none; cursor: pointer; padding: 6px; border-radius: 8px; }
          .chevron:focus { box-shadow: 0 0 0 3px rgba(59,130,246,0.25); }
          @keyframes bounce { 0%,20%,50%,80%,100%{transform:translateY(0);} 40%{transform:translateY(8px);} 60%{transform:translateY(4px);} }
          .chevron svg { animation: bounce 1.6s infinite; }
          /* respect user preference for reduced motion */
          @media (prefers-reduced-motion: reduce) {
            .waving-image, .chevron svg { animation: none !important; }
          }
          
            /* Page transition helpers */
            #${targetId} { transition: opacity 900ms cubic-bezier(.2,.9,.2,1), transform 900ms cubic-bezier(.2,.9,.2,1); }
          .page-hidden-by-opening { opacity: 0; transform: translateY(12px); }
          .page-enter { opacity: 1; transform: translateY(0); }
          
            /* overlay hide transition */
            .opacity-0 { transition: opacity 900ms ease, visibility 900ms; opacity: 0; }
                `}</style>
      </div>
    </div>
  );
};

export default OpeningScreen;
