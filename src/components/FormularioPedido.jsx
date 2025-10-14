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
        <div className="container mx-auto max-w-[68rem] pt-4 lg:pt-12 pb-2 lg:pb-12 px-4">
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-6 h-6">
                                    <circle cx="64" cy="64" r="64" fill="#25D366" />
                                    <g>
                                        <path fill="#FFFFFF" d="M92.346,35.49c-7.522-7.53-17.523-11.678-28.179-11.683 c-21.954,0-39.826,17.868-39.833,39.831c-0.004,7.022,1.831,13.875,5.316,19.913L24,104.193l21.115-5.538 c5.819,3.171,12.369,4.844,19.036,4.847h0.017l0,0c21.954,0,39.823-17.871,39.832-39.833 C104.005,53.027,99.864,43.019,92.346,35.49 M64.168,96.774h-0.013c-5.943-0.002-11.769-1.598-16.853-4.614l-1.209-0.718 l-12.53,3.287l3.343-12.216l-0.787-1.256c-3.315-5.27-5.066-11.361-5.062-17.619c0.006-18.253,14.859-33.104,33.121-33.104 c8.844,0.002,17.155,3.451,23.407,9.71c6.251,6.258,9.691,14.575,9.689,23.422C97.268,81.922,82.415,96.774,64.168,96.774 M82.328,71.979c-0.996-0.499-5.889-2.904-6.802-3.239c-0.913-0.332-1.574-0.497-2.238,0.499s-2.571,3.239-3.153,3.903 c-0.58,0.664-1.16,0.748-2.156,0.249s-4.202-1.549-8.001-4.941c-2.96-2.637-4.958-5.899-5.538-6.895s-0.062-1.533,0.437-2.03 c0.448-0.446,0.996-1.162,1.493-1.744c0.497-0.582,0.663-0.997,0.995-1.66c0.332-0.664,0.167-1.245-0.083-1.743 c-0.25-0.499-2.24-5.398-3.068-7.391c-0.809-1.941-1.629-1.678-2.239-1.708c-0.582-0.028-1.245-0.036-1.908-0.036 c-0.663,0-1.742,0.249-2.654,1.246c-0.911,0.996-3.483,3.403-3.483,8.304c0,4.898,3.566,9.632,4.064,10.295 c0.498,0.663,7.018,10.718,17.002,15.029c2.374,1.024,4.229,1.637,5.674,2.097c2.384,0.759,4.554,0.65,6.27,0.394 c1.912-0.285,5.888-2.407,6.719-4.732c0.829-2.324,0.829-4.316,0.578-4.732C83.986,72.727,83.322,72.478,82.328,71.979"/>
                                    </g>
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
                <div className="bg-gradient-to-br from-emerald-950 via-emerald-700 to-emerald-400 text-white p-6 lg:p-6 rounded-2xl shadow-2xl relative overflow-hidden h-full min-h-full flex flex-col justify-center">
                    <div className="absolute top-4 right-8 w-10 h-10 lg:w-23 lg:h-23 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-23 h-23">
                        <circle cx="64" cy="64" r="64" fill="#25D366" />
                        <g>
                            <path fill="#FFFFFF" d="M92.346,35.49c-7.522-7.53-17.523-11.678-28.179-11.683 c-21.954,0-39.826,17.868-39.833,39.831c-0.004,7.022,1.831,13.875,5.316,19.913L24,104.193l21.115-5.538 c5.819,3.171,12.369,4.844,19.036,4.847h0.017l0,0c21.954,0,39.823-17.871,39.832-39.833 C104.005,53.027,99.864,43.019,92.346,35.49 M64.168,96.774h-0.013c-5.943-0.002-11.769-1.598-16.853-4.614l-1.209-0.718 l-12.53,3.287l3.343-12.216l-0.787-1.256c-3.315-5.27-5.066-11.361-5.062-17.619c0.006-18.253,14.859-33.104,33.121-33.104 c8.844,0.002,17.155,3.451,23.407,9.71c6.251,6.258,9.691,14.575,9.689,23.422C97.268,81.922,82.415,96.774,64.168,96.774 M82.328,71.979c-0.996-0.499-5.889-2.904-6.802-3.239c-0.913-0.332-1.574-0.497-2.238,0.499s-2.571,3.239-3.153,3.903 c-0.58,0.664-1.16,0.748-2.156,0.249s-4.202-1.549-8.001-4.941c-2.96-2.637-4.958-5.899-5.538-6.895s-0.062-1.533,0.437-2.03 c0.448-0.446,0.996-1.162,1.493-1.744c0.497-0.582,0.663-0.997,0.995-1.66c0.332-0.664,0.167-1.245-0.083-1.743 c-0.25-0.499-2.24-5.398-3.068-7.391c-0.809-1.941-1.629-1.678-2.239-1.708c-0.582-0.028-1.245-0.036-1.908-0.036 c-0.663,0-1.742,0.249-2.654,1.246c-0.911,0.996-3.483,3.403-3.483,8.304c0,4.898,3.566,9.632,4.064,10.295 c0.498,0.663,7.018,10.718,17.002,15.029c2.374,1.024,4.229,1.637,5.674,2.097c2.384,0.759,4.554,0.65,6.27,0.394 c1.912-0.285,5.888-2.407,6.719-4.732c0.829-2.324,0.829-4.316,0.578-4.732C83.986,72.727,83.322,72.478,82.328,71.979"/>
                        </g>
                    </svg>
                    </div>

                    <div className="relative mb-2 lg:mb-6 items-center bg-white/5 backdrop-blur-sm px-2 py-1 lg:px-3 lg:py-2 rounded-lg text-xs lg:text-sm font-medium inline-flex">
                    <svg className="w-3 h-3 lg:w-6 lg:h-6 mr-1 lg:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="container mx-auto max-w-[68rem] px-3 py-12">
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
            <div className="container mx-auto max-w-[68rem] px-3 py-12">
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