import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import WhatsAppPhoneMock from './WhatsAppPhoneMock';

const PricingPage = ({ onSelectPlan, onNavigate }) => {
    const { t } = useLanguage();

    const handleGetStarted = (planName) => {
        console.log('Plan seleccionado:', planName);
        if (onSelectPlan) {
            onSelectPlan(planName);
        }
        if (onNavigate) {
            onNavigate('home');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* SECCIÓN SUPERIOR */}
            <div className="container mx-auto max-w-6xl pt-3 lg:pt-10 pb-2 lg:pb-12 px-4">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                        
                        {/* COLUMNA IZQUIERDA - PRECIOS */}
                        <div className="p-6 lg:p-8">
                            <div className="max-w-xl">
                                <div className="mb-6">
                                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                                        {t.pricingTitle}
                                    </h1>
                                    <p className="text-gray-600 text-sm mb-2">{t.pricingSubtitle}</p>
                                    <p className="text-gray-400 text-xs">{t.pricingNote}</p>
                                </div>

                                {/* PLANES */}
                                <div className="space-y-4 mt-8">
                                    {/* Plan 1: One-Time */}
                                    <div className="rounded-2xl p-6 border-2 border-gray-200 bg-white hover:border-gray-300 transition-all">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">
                                                    {t.planOneTimeName}
                                                </h3>
                                                <p className="text-gray-500 text-sm">{t.planOneTimeDesc}</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-bold text-gray-900">
                                                    {t.planOneTimePrice}
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="space-y-2 mb-6">
                                            <li className="flex items-start gap-2">
                                                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-sm text-gray-700">{t.planOneTimeFeature1}</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-sm text-gray-700">{t.planOneTimeFeature2}</span>
                                            </li>
                                        </ul>

                                        <button 
                                            onClick={() => handleGetStarted('One-Time')}
                                            className="w-full py-3 cursor-pointer rounded-lg font-semibold bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors"
                                        >
                                            {t.getStarted}
                                        </button>
                                    </div>

                                    {/* Plan 2: Yearly */}
                                    <div className="rounded-2xl p-6 border-2 border-black bg-white shadow-lg transition-all">
                                        <div className="mb-4 flex justify-between items-start">
                                            <div>
                                                <span className="inline-block bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                                                    {t.bestValue}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">
                                                    {t.planYearlyName}
                                                </h3>
                                                <p className="text-gray-500 text-sm mb-3">{t.planYearlyDesc}</p>
                                            </div>
                                            <div className="text-right ml-4">
                                                <div>
                                                    <span className="text-2xl font-bold text-gray-900">{t.planYearlyPrice}</span>
                                                    <span className="text-sm text-gray-500">{t.planYearlyPeriod}</span>
                                                </div>
                                                <p className="text-xs text-gray-400 mt-1">{t.planYearlyBilled}</p>
                                                <p className="text-xs text-green-600 font-semibold mt-1">{t.mostPopular}</p>
                                            </div>
                                        </div>

                                        <ul className="space-y-2 mb-6">
                                            <li className="flex items-start gap-2">
                                                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-sm text-gray-700">{t.planYearlyFeature1}</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-sm text-gray-700">{t.planYearlyFeature2}</span>
                                            </li>
                                        </ul>

                                        <button 
                                            onClick={() => handleGetStarted('Yearly')}
                                            className="w-full py-3 cursor-pointer rounded-lg font-semibold bg-black text-white hover:bg-gray-800 transition-colors"
                                        >
                                            {t.getStarted}
                                        </button>
                                    </div>
                                </div>

                                {/* Comparar planes */}
                                <div className="mt-6">
                                    <a href="#" className="text-gray-500 hover:text-gray-700 text-sm font-medium">
                                        {t.comparePlans} →
                                    </a>
                                </div>

                                {/* Servicios soportados */}
                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <h4 className="font-semibold text-gray-900 mb-2">{t.supportedServices}</h4>
                                    <p className="text-gray-600 text-sm mb-2">{t.supportedServicesMore}</p>
                                    <p className="text-gray-600 text-sm">{t.supportedServicesDesc}</p>
                                </div>
                            </div>
                        </div>

                        {/* COLUMNA DERECHA - VISUAL CON COLOR AZUL OSCURO (OCULTA EN MÓVIL) */}
                        <div className="hidden lg:block">
                            <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 text-white p-4 lg:p-8 rounded-2xl shadow-2xl relative overflow-hidden h-full min-h-full flex flex-col justify-center">
                                
                                <div className="relative mb-4 lg:mb-6 flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 lg:px-4 lg:py-2.5 rounded-lg text-xs lg:text-sm font-semibold inline-flex w-fit">
                                    <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {t.pricingPageSidebarTrustedByUsers}
                                </div>

                                <div className="relative z-20">
                                    <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-6 lg:mb-8">
                                        {t.pricingVerifyTitle}
                                    </h2>

                                    <p className="text-white/80 text-base lg:text-base mb-6 leading-relaxed">
                                        {t.pricingCleanNumbers}
                                    </p>

                                    {/* Testimonial */}
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 border border-white/20">
                                        <p className="text-white/90 text-sm lg:text-base italic mb-3">
                                            "{t.testimonialText}"
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex-shrink-0"></div>
                                            <div>
                                                <p className="text-white font-semibold text-sm">{t.testimonialAuthor}</p>
                                                <p className="text-white/70 text-xs">{t.testimonialRole}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Features list */}
                                    <div className="space-y-3 mb-8 lg:mb-12">
                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm lg:text-base text-white/90">{t.featureInstantSMS}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm lg:text-base text-white/90">{t.featureServices}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm lg:text-base text-white/90">{t.featurePremium}</span>
                                        </div>
                                    </div>

                                    <div className="relative flex-shrink-0">
                                        <WhatsAppPhoneMock page="pricing" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECCIÓN FAQ */}
            <div className="bg-gray-50 w-full">
                <div className="container mx-auto max-w-6xl px-4 py-6 lg:py-1">
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:p-10">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                            {t.faqTitle}
                        </h2>
                        <div className="space-y-4">
                            <div className="border-b border-gray-200 pb-4">
                                <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">{t.faq1Question}</h3>
                                <p className="text-gray-600 text-sm">{t.faq1Answer}</p>
                            </div>
                            <div className="border-b border-gray-200 pb-4">
                                <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">{t.faq2Question}</h3>
                                <p className="text-gray-600 text-sm">{t.faq2Answer}</p>
                            </div>
                            <div className="border-b border-gray-200 pb-4">
                                <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">{t.faq3Question}</h3>
                                <p className="text-gray-600 text-sm">{t.faq3Answer}</p>
                            </div>
                            <div className="pb-4">
                                <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">{t.faq4Question}</h3>
                                <p className="text-gray-600 text-sm">{t.faq4Answer}</p>
                            </div>
                        </div>
                    </div>
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

export default PricingPage;