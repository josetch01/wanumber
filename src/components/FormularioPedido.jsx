import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import TestimonialCard from './TestimonialCard';
import FAQItem from './FAQItem';
import WhatsAppPhoneMock from './WhatsAppPhoneMock';
import CountrySelector from './CountrySelector';

const FormularioPedido = ({ onNavigate, selectedPlan }) => {
    const { t, selectedLanguage } = useLanguage();

    // Estado para el país seleccionado
    const [selectedCountry, setSelectedCountry] = useState({
        code: 'US',
        name: 'Estados Unidos',
        nameEN: 'United States',
        nameES: 'Estados Unidos',
        namePT: 'Estados Unidos',
        flag: 'https://flagcdn.com/w80/us.png',
        prefix: '+1',
        successRate: 97,
        region: 'North America',
        available: true
    });

    // Función para obtener el nombre del país según el idioma
    const getCountryName = (country) => {
        if (selectedLanguage === 'ES') return country.nameES;
        if (selectedLanguage === 'PT') return country.namePT;
        return country.nameEN;
    };

    const handleContinue = () => {
        // Obtener el nombre del país en el idioma seleccionado
        const countryName = getCountryName(selectedCountry);
        const planName = selectedPlan || 'Yearly';
        // Crear el mensaje para WhatsApp
        const message = `wanumber.lat == [${countryName} - ${planName}] Quiero comprar un número para WhatsApp`;

        // Codificar el mensaje para URL
        const encodedMessage = encodeURIComponent(message);

        // Número de WhatsApp (sin el +)
        const whatsappNumber = '51970739901';

        // Crear la URL de WhatsApp
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Abrir WhatsApp en una nueva ventana/pestaña
        window.open(whatsappUrl, '_blank');

        console.log('Redirigiendo a WhatsApp con mensaje:', message);
        console.log('País seleccionado:', selectedCountry);
    };

    return (
        <div className="min-h-screen bg-gray-100">
        {/* SECCIÓN SUPERIOR */}
        <div className="container mx-auto max-w-6xl pt-4 lg:pt-12 pb-2 lg:pb-12 px-4">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                
                {/* COLUMNA IZQUIERDA */}
                <div className="order-2 lg:order-1 p-6 lg:p-8">
                <div className="max-w-xl">
                    <div className="mb-6">
                    <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-black transition-all duration-300" style={{ width: '100%' }}></div>
                    </div>
                    </div>

                    <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-bold text-sm flex-shrink-0">
                        1
                        </div>
                        <p className="text-sm font-medium text-gray-500">{t.step} 1 {t.of} 1</p>
                    </div>
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{t.chooseTitle}</h1>
                    <p className="text-gray-500 text-sm leading-relaxed">{t.chooseSubtitle}</p>
                    </div>

                    <div className="space-y-4 mt-8">
                    <div>
                        <label className="text-sm font-medium text-gray-600 mb-2 block">{t.service}</label>
                        <div className="border border-gray-300 p-4 rounded-xl bg-white hover:border-gray-400 transition-colors cursor-pointer">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                            <div className="w-10 h-10 bg-emerald-400 rounded-full mr-3 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-lg font-semibold text-gray-900">WhatsApp</div>
                                <div className="text-sm text-gray-500">{t.messaging}</div>
                            </div>
                            </div>
                            <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                            </div>
                        </div>
                        </div>
                    </div>

                    <CountrySelector
                        selectedCountry={selectedCountry}
                        onSelectCountry={setSelectedCountry}
                    />
                    </div>

                    <div className="mt-8 space-y-4">
                    <button
                        className="w-full flex items-center justify-center bg-black text-white font-semibold py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
                        onClick={handleContinue}
                    >
                        {t.continue}
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>

                    <div className="text-center">
                        <button className="text-gray-500 hover:text-gray-700 font-medium text-sm py-2">
                        {t.back}
                        </button>
                    </div>
                    </div>
                </div>
                </div>

                {/* COLUMNA DERECHA */}
                <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-emerald-950 via-emerald-700 to-emerald-400 text-white p-4 lg:p-6 rounded-2xl shadow-2xl relative overflow-hidden h-full min-h-full flex flex-col justify-center">
                    <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-24 h-24 lg:w-32 lg:h-32 bg-emerald-600 rounded-full opacity-40"></div>

                    <div className="absolute top-2 right-2 w-10 h-10 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-10 lg:h-10 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                    </div>

                    <div className="relative mb-2 lg:mb-6 flex items-center bg-white/5 backdrop-blur-sm px-2 py-1 lg:px-3 lg:py-2 rounded-lg text-xs lg:text-sm font-medium inline-flex">
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {t.guaranteedDelivery}
                    </div>

                    <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                    <div className="flex-1">
                        <h2 className="text-xl font-extrabold leading-snug mb-1 relative lg:hidden">
                        {t.verifyTitle}
                        </h2>
                        <h2 className="hidden lg:block lg:text-4xl font-extrabold leading-tight mb-4 relative">
                        {t.verifyTitle}<br />{t.verifySubtitle}
                        </h2>

                        <p className="text-white/90 text-[14px] lg:hidden">
                        {t.unusedNumbers} 
                        </p>

                        <p className="hidden lg:block text-white/90 lg:text-base mb-3">
                        {t.cleanNumbers} <br />{t.whenCompetitors}
                        </p>
                    </div>

                    <div className="relative flex-shrink-0 w-32 lg:w-full">
                        <WhatsAppPhoneMock />
                    </div>
                    </div>
                </div>
                </div>
            </div> {/* Fin grid */}
            </div> {/* Fin card */}
        </div> {/* Fin container */}

        {/* SECCIÓN TESTIMONIOS */}
        <div className="bg-white w-full">
            <div className="container mx-auto max-w-6xl px-3 py-12">
            <section className="mb-3">
                <h2 className="text-2xl font-bold text-gray-500 text-center mb-1">{t.trustedTitle}</h2>
                <p className="text-gray-500 text-center mb-8">12,513 {t.verificationsCompleted}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
                </div>
            </section>
            </div>
        </div>

        {/* SECCIÓN FAQ */}
        <div className="bg-gray-100 w-full">
            <div className="container mx-auto max-w-6xl px-3 py-12">
            <section className="space-y-4">
                {t.faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </section>
            </div>
        </div>

        {/* FOOTER */}
        <div className="bg-white w-full border-t border-gray-200">
            <div className="container mx-auto max-w-4xl px-6 py-6">
                <footer className="text-center text-xs text-gray-500">
                    <p className="space-x-4">
                        <button 
                            onClick={() => onNavigate('terms')}
                            className="hover:text-gray-600 transition-colors">
                            T&C
                        </button>
                        {/*
                        <span>•</span>
                        <a href="#" className="hover:text-gray-600">Legal</a>
                        <span>•</span>
                        <a href="#" className="hover:text-gray-600">Services</a>
                        <span>•</span>
                        <a href="#" className="hover:text-gray-600">Bulk Order</a>
                        <span>•</span>
                        <a href="#" className="hover:text-gray-600">API BETA</a>
                        */}
                    </p>
                </footer>
            </div>
        </div>
        </div>
    );
};

export default FormularioPedido;