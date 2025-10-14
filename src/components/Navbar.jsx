import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import iconoWaNumber from '../../public/iconoWaNumber.png';

const Navbar = ({ onNavigate, currentPage }) => {
    const { selectedLanguage, setSelectedLanguage, t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [isLanguageOpen, setIsLanguageOpen] = useState(false); // COMENTADO - No se usa más
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState('PEN');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            // setIsLanguageOpen(false); // COMENTADO
            setIsCurrencyOpen(false);
        }
    };

    // COMENTADO - Función de selector de idioma
    // const toggleLanguage = () => {
    //     setIsLanguageOpen(!isLanguageOpen);
    //     setIsCurrencyOpen(false);
    // };

    // const handleLanguageSelect = (code) => {
    //     setSelectedLanguage(code);
    //     setIsLanguageOpen(false);
    // };

    const toggleCurrency = () => {
        setIsCurrencyOpen(!isCurrencyOpen);
        // setIsLanguageOpen(false); // COMENTADO
    };

    const handleCurrencySelect = (code) => {
        setSelectedCurrency(code);
        setIsCurrencyOpen(false);
    };

    const handleNavClick = (href) => {
        if (href && href !== '#') {
            console.log('Navegando a:', href);
            onNavigate(href);
            setIsMenuOpen(false);
        }
    };

    // COMENTADO - Array de idiomas ya no se usa
    // const languages = [
    //     { name: 'English', code: 'EN' },
    //     { name: 'Español', code: 'ES' },
    //     { name: 'Português (BR)', code: 'PT' },
    // ];

    // const getSelectedLanguageName = () => {
    //     const lang = languages.find(l => l.code === selectedLanguage);
    //     return lang ? lang.code : 'EN';
    // };

    const currencies = [
        //{ name: 'Soles Peruanos', code: 'PEN', symbol: 'PE S/ PEN' },
        { name: 'Dólares Americanos', code: 'USD', symbol: 'US $ USD' },
        //{ name: 'Euros', code: 'EUR', symbol: '€ EUR' },
    ];

    const getSelectedCurrencySymbol = () => {
        const currency = currencies.find(c => c.code === selectedCurrency);
        return currency ? currency.symbol : 'US $ USD';
    };

    const getMenuIcon = (href) => {
        const key = href ? href.replace(/^#\/?/, '') : '';

        switch(key) {
            case 'home':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                );
 
            case 'pricing':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                );
    
            default:
                return null;
        }
    };

    return (
        <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Logo texto */}
                    <div
                        className="flex items-center cursor-pointer select-none"
                        onClick={() => handleNavClick('home')}
                    >
                        {/* Logo por código */}
                    <img src={iconoWaNumber} alt="Logo WaNumber" className="w-10 h-10"/>
                        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                            WaNumber
                        </h1>
                    </div>

                    {/* Navigation Links (Desktop) */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {t.nav.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.href)}
                                className={`text-sm font-medium transition-colors cursor-pointer ${
                                    currentPage === link.href
                                        ? 'text-gray-900 border-b-2 border-black'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center gap-3">
                        {/* SELECTOR DE IDIOMA COMENTADO */}
                        {/* Language Selector */}
                        {/* <div className="relative">
                            <button
                                className="flex items-center gap-1.5 px-2.5 py-2 text-sm text-gray-700 hover:text-gray-900 border border-gray-200 rounded-lg transition-colors lg:gap-2 lg:px-3"
                                onClick={toggleLanguage}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
                                </svg>
                                <span className="font-medium hidden lg:inline">{getSelectedLanguageName()}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                                </svg>
                            </button>

                            {isLanguageOpen && (
                                <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white border border-gray-200 z-50">
                                    <div className="py-1">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => handleLanguageSelect(lang.code)}
                                                className={`w-full text-left flex items-center justify-between px-4 py-2 text-sm transition-colors ${
                                                    lang.code === selectedLanguage
                                                        ? 'bg-gray-100 text-gray-900 font-medium'
                                                        : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                            >
                                                {lang.name}
                                                {lang.code === selectedLanguage && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div> */}

                        {/* Currency Selector (Desktop only) */}
                        <div className="hidden lg:block relative">
                            <button 
                                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-200 rounded-lg transition-colors"
                                onClick={toggleCurrency}
                            >
                                <span>{getSelectedCurrencySymbol()}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isCurrencyOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                                </svg>
                            </button>

                            {isCurrencyOpen && (
                                <div className="absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-white border border-gray-200 z-50">
                                    <div className="py-1">
                                        {currencies.map((currency) => (
                                            <button
                                                key={currency.code}
                                                onClick={() => handleCurrencySelect(currency.code)}
                                                className={`w-full text-left flex items-center justify-between px-4 py-2 text-sm transition-colors ${
                                                    currency.code === selectedCurrency
                                                        ? 'bg-gray-100 text-gray-900 font-medium'
                                                        : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                            >
                                                <span>{currency.symbol} - {currency.name}</span>
                                                {currency.code === selectedCurrency && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Success Rate Badge */}
                        <div className="flex items-center gap-1.5 bg-green-50 px-2.5 py-2 rounded-lg lg:gap-2 lg:px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span className="text-xs font-semibold text-green-600 lg:text-sm">
                                99.8%
                                <span className="hidden lg:inline"> {t.successRate}</span>
                            </span>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="lg:hidden p-2 text-gray-600 hover:text-gray-900" onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={toggleMenu}></div>
            )}

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="px-6 py-4 flex justify-between items-center border-b border-gray-200">
                        <span className="text-lg font-semibold text-gray-900">{t.menuTitle}</span>
                        <button className="p-2 text-gray-600 hover:text-gray-900" onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links (Mobile) */}
                    <nav className="px-4 py-3 flex-grow">
                        {t.nav.filter(link => link.href !== '#bulk').map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.href)}
                                className={`w-full text-left flex items-center gap-3 px-4 py-3 text-base font-medium transition-colors rounded-lg ${
                                    currentPage === link.href ? 'text-gray-900 bg-gray-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                            >
                                {getMenuIcon(link.href)}
                                <span>{link.name}</span>
                            </button>
                        ))}
                    </nav>

                    {/* Sidebar Footer */}
                    <div className="px-4 pb-6 border-t border-gray-200 pt-4 space-y-3">
                        {/* Currency Selector (Mobile) */}
                        <div className="relative">
                            <div className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer" onClick={toggleCurrency}>
                                <div className="flex items-center gap-3 text-gray-600">
                                    {/* Icono de Moneda */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-sm font-medium">Moneda</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold text-gray-900">{getSelectedCurrencySymbol()}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-gray-400 transition-transform ${isCurrencyOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                            </div>

                            {isCurrencyOpen && (
                                <div className="mt-2 ml-4 mr-4 rounded-lg shadow-md bg-white border border-gray-200">
                                    <div className="py-1">
                                        {currencies.map((currency) => (
                                            <button
                                                key={currency.code}
                                                className={`w-full text-left px-4 py-2 text-sm ${
                                                    currency.code === selectedCurrency ? 'bg-gray-50 text-gray-900 font-medium' : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                                onClick={() => handleCurrencySelect(currency.code)}
                                            >
                                                {currency.symbol} - {currency.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Success Rate Badge (Mobile) */}
                        <div className="flex items-center justify-center gap-2 bg-green-50 px-4 py-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span className="text-sm font-semibold text-green-700">
                                99.8% {t.successRate}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;