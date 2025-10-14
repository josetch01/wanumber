import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TestimonialCard = ({ name, country, phone, stars, text }) => {
    const { t } = useLanguage();

    return (
        <div className="bg-white p-3 rounded-xl shadow-md border border-gray-100 flex flex-col">
        <div className="flex items-center justify-between mb-4">
            <span className="text-s font-bold text-gray-500">{name}</span>
            <div className="flex items-center text-xs font-medium text-emerald-300 bg-emerald-50 px-2 py-0.5 rounded-full">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {t.verifiedBuyer}
            </div>
        </div>

        <div className="flex mb-3">
            {[...Array(stars)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.328 4.085a1 1 0 00.95.691h4.305c.969 0 1.371 1.24.588 1.81l-3.486 2.534a1 1 0 00-.364 1.118l1.328 4.085c.3.921-.755 1.688-1.542 1.118l-3.486-2.534a1 1 0 00-1.176 0l-3.486 2.534c-.787.57-1.842-.197-1.542-1.118l1.328-4.085a1 1 0 00-.364-1.118L2.004 9.513c-.783-.57-.381-1.81.588-1.81h4.305a1 1 0 00.95-.691l1.328-4.085z" />
            </svg>
            ))}
        </div>

        <p className="text-gray-700 text-sm flex-grow mb-4">{text}</p>

        <div className="border-t border-gray-100 pt-3 text-xs text-gray-500 flex flex-wrap gap-2">
            <div className="inline-flex items-center bg-gray-100 px-3 py-2 rounded-lg text-sm font-medium text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {country}
            </div>

            <div className="inline-flex items-center bg-gray-100 px-3 py-2 rounded-lg text-sm font-medium text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {phone}
            </div>
        </div>
        </div>
    );
};

export default TestimonialCard;