"use client";
import { useState } from "react";

export default function BodySignUp() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        university: "",
        agreeTerms: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Le password non coincidono!");
            return;
        }
        if (!formData.agreeTerms) {
            alert("Devi accettare i termini e le condizioni!");
            return;
        }
        console.log("Registrazione:", formData);
        // Implementare logica di registrazione qui
    };

    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col">
            {/* Contenuto principale */}
            <div className="flex-1 flex items-center justify-center px-3 sm:px-4 py-8 sm:py-12">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                    {/* Card di registrazione */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 md:p-8 shadow-sm">
                        {/* Titolo */}
                        <div className="mb-6 sm:mb-8">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black">
                                Registrati
                            </h1>
                            <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
                                Crea il tuo account UniTogether
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-5">
                            {/* Nome e Cognome in due colonne */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                        Nome
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Mario"
                                        className="w-full px-3 py-2 sm:py-2 border border-gray-300 rounded-lg text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cherry-red)] focus:border-transparent transition-all duration-200"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                        Cognome
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Rossi"
                                        className="w-full px-3 py-2 sm:py-2 border border-gray-300 rounded-lg text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cherry-red)] focus:border-transparent transition-all duration-200"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="mario@universita.it"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cherry-red)] focus:border-transparent transition-all duration-200"
                                    required
                                />
                            </div>

                            {/* Università Input */}
                            <div>
                                <label htmlFor="university" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                    Università
                                </label>
                                <input
                                    type="text"
                                    id="university"
                                    name="university"
                                    value={formData.university}
                                    onChange={handleChange}
                                    placeholder="es. Università di Milano"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cherry-red)] focus:border-transparent transition-all duration-200"
                                />
                            </div>

                            {/* Password Input */}
                            <div>
                                <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="La tua password"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cherry-red)] focus:border-transparent transition-all duration-200"
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

                            {/* Confirm Password Input */}
                            <div>
                                <label htmlFor="confirmPassword" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                    Ripeti Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Ripeti la password"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--cherry-red)] focus:border-transparent transition-all duration-200"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                        aria-label="Mostra/Nascondi password"
                                    >
                                        {showConfirmPassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                                <path d="M3.53 2.47a.75.75 0 0 0-.953 1.06l2.319 2.82a10.403 10.403 0 0 0-3.434 5.619.75.75 0 0 0 .84.838c.855-.191 1.7-.372 2.541-.525l2.117 2.529a.75.75 0 1 0 1.132-.986l-2.5-2.983A9.923 9.923 0 0 1 12 4.5c4.478 0 8.268 2.943 9.542 7a.75.75 0 0 0 .846.84c.854-.191 1.7-.372 2.541-.525l2.117 2.529a.75.75 0 1 0 1.133-.986l-2.5-2.983A10.403 10.403 0 0 0 21.47 5.53a.75.75 0 0 0-.953-1.06l-2.319 2.82a10.403 10.403 0 0 0-3.434-5.619.75.75 0 0 0-.84-.838c-.855.191-1.7.372-2.541.525l-2.117-2.529a.75.75 0 1 0-1.132.986l2.5 2.983A9.923 9.923 0 0 1 12 19.5c-4.478 0-8.268-2.943-9.542-7a.75.75 0 0 0-.846-.84c-.854.191-1.7.372-2.541.525l-2.117-2.529a.75.75 0 1 0-1.133.986l2.5 2.983Z" />
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

                            {/* Termini e Condizioni */}
                            <div className="flex items-start gap-2 sm:gap-3">
                                <input
                                    type="checkbox"
                                    id="agreeTerms"
                                    name="agreeTerms"
                                    checked={formData.agreeTerms}
                                    onChange={handleChange}
                                    className="mt-1 rounded border-gray-300 text-[var(--cherry-red)] focus:ring-[var(--cherry-red)]"
                                    required
                                />
                                <label htmlFor="agreeTerms" className="text-xs sm:text-sm text-gray-600">
                                    Accetto i{" "}
                                    <a href="#" className="font-semibold text-[var(--cherry-red)] hover:underline">
                                        Termini e Condizioni
                                    </a>
                                    {" "}e la{" "}
                                    <a href="#" className="font-semibold text-[var(--cherry-red)] hover:underline">
                                        Privacy Policy
                                    </a>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-black text-white font-semibold py-2 sm:py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 mt-4 sm:mt-6 text-sm sm:text-base"
                            >
                                Registrati
                            </button>
                        </form>

                        {/* Link per sign in */}
                        <p className="text-center text-xs sm:text-sm text-gray-600 mt-4 sm:mt-6">
                            Hai già un account?{" "}
                            <a href="/auth/signin" className="font-semibold text-[var(--cherry-red)] hover:underline transition-colors duration-200">
                                Accedi qui
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="py-3 sm:py-4 border-t border-gray-200 text-center text-xs text-gray-500">
                <p>&copy; 2025 UniTogether. Tutti i diritti riservati.</p>
            </div>
        </div>
    );
}
