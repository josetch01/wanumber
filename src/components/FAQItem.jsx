import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden transition-all duration-300">
        <button
            className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
        >
            <span className="text-base font-semibold text-gray-800">{question}</span>
            <svg
            className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 flex-shrink-0 ml-2 ${
                isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </button>

        <div
            className={`transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
            style={{ overflow: 'hidden' }}
        >
            <p className="text-gray-600 text-sm border-t border-gray-100 pt-4 px-5 pb-5">{answer}</p>
        </div>
        </div>
    );
};

export default FAQItem;