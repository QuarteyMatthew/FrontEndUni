import NotificationPopup from "../components/notification/Feedback";

export default function Bodyone(){
    return(
        <>
            {/* Hero Section - IL TUO PORTALE PER LA TUA UNIVERSITÀ */}
            <div className="relative w-full bg-alonestudent bg-top bg-cover bg-no-repeat overflow-hidden" style={{ height: 'calc(100vh - 5rem)' }}>
                
                {/* Immagine di sfondo sovrapposta */}
                <div className="absolute inset-0 opacity-40 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-0" />
                
                {/* Contenuto Hero */}
                <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-16 lg:px-24">
                    {/* Testo principale */}
                    <div className="max-w-2xl">
                        <div className="flex items-baseline gap-3 mb-4">
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white font-light tracking-tight">
                                IL
                            </h1>
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold" style={{ color: 'var(--cherry-red)' }}>
                                TUO
                            </h1>
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white font-light mb-8 tracking-tight">
                            PORTALE
                        </h2>
                    </div>

                    {/* Sezione destra con testo e rettangolo rosso */}
                    <div className="absolute bottom-20 right-0 flex flex-col items-end gap-6 pr-6 md:pr-16 lg:pr-24">
                        {/* Testo overlay */}
                        <div className="text-right">
                            <p className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-light mb-3">
                                PER LA TUA
                            </p>
                            <p className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold" style={{ color: 'var(--cherry-red)' }}>
                                UNIVERSITÀ
                            </p>
                        </div>
                        
                        {/* Rettangolo rosso decorativo con testo */}
                        <div className="w-48 md:w-72 h-20 md:h-24 flex items-center justify-center px-3" style={{ backgroundColor: 'var(--cherry-red)' }}>
                            <p style={{ fontFamily: 'var(--font-libre-bodoni)', color: 'white' }} className="text-sm md:text-base text-center">
                                Scopri eventi, gruppi e opportunità per la tua Università
                            </p>
                        </div>
                    </div>
                </div>

                {/* Freccia navigazione */}
                <div className="absolute bottom-8 right-12 z-20 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-8">
                        <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>

            <NotificationPopup />
        </>
    );
}