"use client";
import { useState } from "react";
import Reveal from "../components/Effects/Reveal";

export default function Bodytwo() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            id: 1,
            blockText: 'Scopri eventi e gruppi nella tua università',
            // Desktop
            blockWidth: '36rem',
            blockHeight: '8rem',
            blockRight: '4rem',
            blockBottom: '6rem',
            // Mobile
            mobileBlockWidth: '16rem',
            mobileBlockHeight: '6rem',
            mobileBlockRight: '1rem',
            mobileBlockBottom: '3rem',
            overlayOpacity: 0.45,
        },
        {
            id: 2,
            blockText: 'Trova compagni di studio e crea connessioni',
            blockWidth: '36rem',
            blockHeight: '9rem',
            blockRight: '4rem',
            blockBottom: '6rem',
            mobileBlockWidth: '16rem',
            mobileBlockHeight: '7rem',
            mobileBlockRight: '1rem',
            mobileBlockBottom: '3rem',
            overlayOpacity: 0.55,
        },
        {
            id: 3,
            blockText: 'Partecipa alle attività e resta aggiornato',
            blockWidth: '40rem',
            blockHeight: '10rem',
            blockRight: '4rem',
            blockBottom: '6rem',
            mobileBlockWidth: '16rem',
            mobileBlockHeight: '7rem',
            mobileBlockRight: '1rem',
            mobileBlockBottom: '3rem',
            overlayOpacity: 0.4,
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <>
            {/* Sezione CREA CONNESSIONI E AMICI */}
            <div className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
                 style={{ backgroundImage: "url('/group.jpg')" }}>
                
                {/* Overlay scuro che cambia opacità in base allo slide */}
                <div className="absolute inset-0 z-0" style={{ backgroundColor: `rgba(0,0,0,${slides[currentSlide].overlayOpacity})` }} />
                
                {/* ===== DESKTOP VERSION ===== */}
                <div className="hidden md:flex relative z-10 h-full min-h-screen flex-col justify-start items-start pt-20 md:pt-28 px-6 md:px-16 lg:px-24">
                    {/* Testo principale - Desktop */}
                    <div className="max-w-3xl mb-12 md:mb-16">
                        <div className="mb-4">
                            <Reveal>
                                <p className="text-5xl md:text-6xl lg:text-8xl font-serif font-bold hero-drop-shadow" style={{ color: 'var(--cherry-red)' }}>
                                    CREA
                                </p>
                            </Reveal>
                        </div>
                        <Reveal>
                            <p className="text-5xl md:text-6xl lg:text-8xl font-serif text-white font-light mb-2 tracking-tight hero-drop-shadow">
                                CONNESSIONI
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className="text-4xl md:text-5xl lg:text-7xl font-serif text-white font-light mb-8 tracking-tight hero-drop-shadow">
                                E AMICI
                            </p>
                        </Reveal>
                    </div>

                    {/* Rettangolo rosso decorativo - Desktop (posizionato assolutamente a destra) */}
                    <div
                        className="absolute z-20 transition-all duration-700 ease-in-out flex items-center justify-center px-4"
                        style={{
                            width: slides[currentSlide].blockWidth,
                            height: slides[currentSlide].blockHeight,
                            right: slides[currentSlide].blockRight,
                            bottom: slides[currentSlide].blockBottom,
                            backgroundColor: 'var(--cherry-red)'
                        }}
                    >
                        <p style={{ fontFamily: "var(--font-libre-bodoni)" }} className="text-white text-base text-center">
                            {slides[currentSlide].blockText}
                        </p>
                    </div>

                    {/* Controlli slider - Desktop */}
                    <div className="flex items-center gap-4 mt-auto mb-16">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-300"
                            aria-label="Slide precedente"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                                <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06L5.31 10.75h16.44a.75.75 0 1 1 0 1.5H5.31l5.72 5.72a.75.75 0 1 1-1.06 1.06l-6.75-6.75a.75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-300"
                            aria-label="Slide successiva"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l6.75 6.75a.75.75 0 0 1 0 1.06l-6.75 6.75a.75.75 0 1 1-1.06-1.06l5.72-5.72H3a.75.75 0 1 1 0-1.5h15.69l-5.72-5.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* Indicatori slide - Desktop */}
                        <div className="flex gap-2 ml-4">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`Vai allo slide ${index + 1}`}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* ===== MOBILE VERSION ===== */}
                <div className="md:hidden relative z-10 h-full min-h-screen flex flex-col justify-start items-start pt-8 px-4 pb-8">
                    {/* Testo principale - Mobile */}
                    <div className="w-full mb-8">
                        <div className="mb-2">
                            <Reveal>
                                <p className="text-3xl sm:text-4xl font-serif font-bold hero-drop-shadow" style={{ color: 'var(--cherry-red)' }}>
                                    CREA
                                </p>
                            </Reveal>
                        </div>
                        <Reveal>
                            <p className="text-3xl sm:text-4xl font-serif text-white font-light mb-1 tracking-tight hero-drop-shadow">
                                CONNESSIONI
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className="text-2xl sm:text-3xl font-serif text-white font-light mb-6 tracking-tight hero-drop-shadow">
                                E AMICI
                            </p>
                        </Reveal>
                    </div>

                    {/* Rettangolo rosso decorativo - Mobile (posizionato in flusso, non assoluto) */}
                    <div
                        className="w-full transition-all duration-700 ease-in-out flex items-center justify-center px-3 py-4 mb-6 rounded-lg"
                        style={{
                            backgroundColor: 'var(--cherry-red)',
                            minHeight: '5.5rem'
                        }}
                    >
                        <p style={{ fontFamily: "var(--font-libre-bodoni)" }} className="text-white text-sm text-center leading-relaxed">
                            {slides[currentSlide].blockText}
                        </p>
                    </div>

                    {/* Controlli slider - Mobile */}
                    <div className="flex items-center gap-3 mt-auto w-full justify-center pb-6">
                        <button
                            onClick={prevSlide}
                            className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-300 active:bg-white/50"
                            aria-label="Slide precedente"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-5">
                                <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06L5.31 10.75h16.44a.75.75 0 1 1 0 1.5H5.31l5.72 5.72a.75.75 0 1 1-1.06 1.06l-6.75-6.75a.75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        
                        <button
                            onClick={nextSlide}
                            className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-300 active:bg-white/50"
                            aria-label="Slide successiva"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-5">
                                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l6.75 6.75a.75.75 0 0 1 0 1.06l-6.75 6.75a.75.75 0 1 1-1.06-1.06l5.72-5.72H3a.75.75 0 1 1 0-1.5h15.69l-5.72-5.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* Indicatori slide - Mobile */}
                        <div className="flex gap-1.5 ml-3">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`Vai allo slide ${index + 1}`}
                                    className={`rounded-full transition-all duration-300 ${
                                        index === currentSlide ? 'w-6 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
