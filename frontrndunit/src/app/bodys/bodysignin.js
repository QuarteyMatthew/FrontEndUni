"use client";
import { useState } from "react";

export default function BodySignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login attempt:", { email, password });
        // Implementare logica di login qui
    };

    const handleForgotPassword = () => {
        console.log("Forgot password clicked");
    };

    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col">
            {/* Header rimane uguale - gestito da MyHeader */}
            
            {/* Contenuto principale */}
            <div className="flex-1 flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-md">
                    {/* Card di login */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                        {/* Titolo */}
                        <div className="mb-8">
                            <h1 className="text-3xl font-serif font-bold text-black">
                                Accedi
                            </h1>
                            <p className="text-gray-600 text-sm mt-2">
                                Entra nel tuo account UniTogether
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="tua.email@universita.it"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cherry-red)] focus:border-transparent transition-all duration-200"
                                    required
                                />
                            </div>

                            {/* Password Input */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="La tua password"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cherry-red)] focus:border-transparent transition-all duration-200"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                        aria-label="Mostra/Nascondi password"
                                    >
                                        {showPassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                                <path d="M3.53 2.47a.75.75 0 0 0-.953 1.06l2.319 2.82a10.403 10.403 0 0 0-3.434 5.619.75.75 0 0 0 .84.838c.855-.191 1.70-.372 2.541-.525l2.117 2.529a.75.75 0 1 0 1.132-.986l-2.5-2.983A9.923 9.923 0 0 1 12 4.5c4.478 0 8.268 2.943 9.542 7a.75.75 0 0 0 .846.84c.854-.191 1.7-.372 2.541-.525l2.117 2.529a.75.75 0 1 0 1.133-.986l-2.5-2.983A10.403 10.403 0 0 0 21.47 5.53a.75.75 0 0 0-.953-1.06l-2.319 2.82a10.403 10.403 0 0 0-3.434-5.619.75.75 0 0 0-.84-.838c-.855.191-1.7.372-2.541.525l-2.117-2.529a.75.75 0 1 0-1.132.986l2.5 2.983A9.923 9.923 0 0 1 12 19.5c-4.478 0-8.268-2.943-9.542-7a.75.75 0 0 0-.846-.84c-.854.191-1.7.372-2.541.525l-2.117-2.529a.75.75 0 1 0-1.133.986l2.5 2.983Z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-black text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 mt-8"
                            >
                                Accedi
                            </button>
                        </form>

                        {/* Link Password Dimenticata */}
                        <div className="mt-6 text-center">
                            <button
                                onClick={handleForgotPassword}
                                className="text-sm text-gray-600 hover:text-[var(--cherry-red)] underline transition-colors duration-200"
                            >
                                Password Dimenticata?
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="my-8 relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">oppure</span>
                            </div>
                        </div>

                        {/* Sign up link */}
                        <p className="text-center text-sm text-gray-600">
                            Non hai un account?{" "}
                            <a href="#" className="font-semibold text-[var(--cherry-red)] hover:underline transition-colors duration-200">
                                Registrati qui
                            </a>
                        </p>
                    </div>

                    {/* Social login option (opzionale) */}
                    <div className="mt-8 text-center text-sm text-gray-500">
                        <p>Continua con i tuoi account social</p>
                        <div className="flex justify-center gap-4 mt-4">
                            <button className="p-3 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors duration-200" aria-label="Accedi con Google">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6">
                                    <text x="12" y="18" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#1f2937">G</text>
                                </svg>
                            </button>
                            <button className="p-3 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors duration-200" aria-label="Accedi con Apple">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6">
                                    <text x="12" y="18" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#1f2937">🍎</text>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer o spazio vuoto */}
            <div className="py-4 border-t border-gray-200 text-center text-xs text-gray-500">
                <p>&copy; 2025 UniTogether. Tutti i diritti riservati.</p>
            </div>
        </div>
    );
}
