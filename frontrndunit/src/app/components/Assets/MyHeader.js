"use client";
import { useState } from "react";
import ForumS from "./formsearch";


export default function MyHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" top-0 left-0 w-full bg-[var(--cherry-red)] text-white z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-8 h-20">
        {/* SEZIONE SINISTRA: logo + link principali */}
        <div className="flex items-center space-x-6">
          <a 
          className="flex items-center"
            href="/"
          >
            <img
              className="h-12 w-auto"
              src="/o-removebg-preview.png"
              alt="Logo"
            />
            <p
              className="text-white text-2xl"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              <span className="text-black">Uni</span>Togheter!
            </p>
          </a>

          {/* Link visibili solo su desktop */}
          <nav className="hidden md:flex items-center space-x-8 ml-6">
            <a href="#" className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Dove siamo</span>
            </a>

            <a href="./unitogether!.pdf" download className="flex items-center space-x-2" aria-label="Download Educazione Civica PDF">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Educazione Civica</span>
            </a>
          </nav>
        </div>

        {/* SEZIONE DESTRA: form search + signup */}
        <div className="hidden md:flex items-center space-x-8">
          <ForumS />
          <a href="/auth/signin" className="flex items-center space-x-2 whitespace-nowrap hover:opacity-80 transition-opacity duration-200">
            <span>Sign up</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* HAMBURGER MENU (solo mobile) - Moderno */}
        <button
          className="md:hidden p-2 relative z-50 transition-all duration-300 ease-in-out"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* MENU MOBILE - Moderno con animazioni */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out origin-top ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-4 px-4 bg-gradient-to-b from-[var(--cherry-red)] to-[rgba(230,30,30,0.95)] border-t border-white/10">
          <a 
            href="#" 
            className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10 w-full justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Dove siamo</span>
          </a>
          <a 
            href="/unitogether!.pdf" 
            download 
            className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10 w-full justify-center"
            aria-label="Download Educazione Civica PDF"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Educazione Civica</span>
          </a>
          <div className="w-full flex justify-center py-2">
            <ForumS />
          </div>
          <a 
            href="#" 
            className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10 w-full justify-center"
          >
            <span>Sign up</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
