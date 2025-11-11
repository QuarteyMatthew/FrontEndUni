import NotificationPopup from "../components/notification/Feedback";
import Reveal from "../components/Effects/Reveal";

export default function Bodyone(){
    return(
        <>
            {/* Hero Section - IL TUO PORTALE PER LA TUA UNIVERSITÀ */}
            <div className="relative w-full bg-alonestudent bg-top bg-cover bg-no-repeat overflow-hidden" style={{ height: 'calc(100vh - 5rem)' }}>
                
                {/* Immagine di sfondo sovrapposta */}
                <div className="absolute inset-0 opacity-40 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-0" />
                
                {/* ===== DESKTOP VERSION ===== */}
                <div className="hidden md:flex relative z-10 h-full flex-col justify-center items-start px-6 md:px-16 lg:px-24">
                    {/* Testo principale - Desktop */}
                    <div className="max-w-2xl">
                        <div className="flex items-baseline gap-3 mb-4">
                            <Reveal className="inline-block">
                                <h1 className="text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white font-light tracking-tight hero-drop-shadow">
                                    IL
                                </h1>
                            </Reveal>
                            <Reveal className="inline-block">
                                <h1 className="text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold hero-drop-shadow" style={{ color: 'var(--cherry-red)' }}>
                                    TUO
                                </h1>
                            </Reveal>
                        </div>
                        <Reveal>
                            <h2 className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white font-light mb-8 tracking-tight hero-drop-shadow">
                                PORTALE
                            </h2>
                        </Reveal>
                    </div>

                    {/* Sezione destra con testo e rettangolo rosso - Desktop */}
                    <div className="absolute bottom-20 right-0 flex flex-col items-end gap-6 pr-16 lg:pr-24 w-auto">
                        {/* Testo overlay */}
                        <div className="text-right">
                            <p className="text-4xl lg:text-5xl xl:text-6xl font-serif text-white font-light mb-3">
                                PER LA TUA
                            </p>
                            <p className="text-5xl lg:text-6xl xl:text-7xl font-serif font-bold" style={{ color: 'var(--cherry-red)' }}>
                                UNIVERSITÀ
                            </p>
                        </div>
                        
                        {/* Rettangolo rosso decorativo - Desktop */}
                        <div className="w-72 h-24 flex items-center justify-center px-3" style={{ backgroundColor: 'var(--cherry-red)' }}>
                            <p style={{ fontFamily: 'var(--font-libre-bodoni)', color: 'white' }} className="text-base text-center">
                                Scopri eventi, gruppi e opportunità per la tua Università
                            </p>
                        </div>
                    </div>

                    {/* Freccia navigazione - Desktop */}
                    <div className="absolute bottom-8 right-12 z-20 animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-8">
                            <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                {/* ===== MOBILE VERSION ===== */}
                <div className="md:hidden relative z-10 h-full flex flex-col justify-center items-start px-4 py-8">
                    {/* Testo principale - Mobile */}
                    <div className="w-full mb-6">
                        <div className="flex items-baseline gap-1.5 mb-2">
                            <Reveal className="inline-block">
                                <h1 className="text-2xl sm:text-3xl font-serif text-white font-light tracking-tight hero-drop-shadow">
                                    IL
                                </h1>
                            </Reveal>
                            <Reveal className="inline-block">
                                <h1 className="text-2xl sm:text-3xl font-serif font-bold hero-drop-shadow" style={{ color: 'var(--cherry-red)' }}>
                                    TUO
                                </h1>
                            </Reveal>
                        </div>
                        <Reveal>
                            <h2 className="text-2xl sm:text-3xl font-serif text-white font-light mb-4 tracking-tight hero-drop-shadow">
                                PORTALE
                            </h2>
                        </Reveal>
                    </div>

                    {/* Testo secondario - Mobile (nel flusso) */}
                    <div className="w-full text-left mb-4">
                        <p className="text-lg sm:text-xl font-serif text-white font-light mb-1">
                            PER LA TUA
                        </p>
                        <p className="text-xl sm:text-2xl font-serif font-bold mb-4" style={{ color: 'var(--cherry-red)' }}>
                            UNIVERSITÀ
                        </p>
                    </div>
                    
                    {/* Rettangolo rosso decorativo - Mobile (nel flusso) */}
                    <div className="w-full flex items-center justify-center px-3 py-3 rounded-lg mb-6" style={{ backgroundColor: 'var(--cherry-red)', minHeight: '4.5rem' }}>
                        <p style={{ fontFamily: 'var(--font-libre-bodoni)', color: 'white' }} className="text-xs sm:text-sm text-center leading-relaxed">
                            Scopri eventi, gruppi e opportunità per la tua Università
                        </p>
                    </div>

                    {/* Freccia navigazione - Mobile */}
                    <div className="mt-auto mb-4 z-20">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6 animate-bounce">
                            <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

            <NotificationPopup />
        </>
    );
}