import React, { createContext, useContext, useState } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage debe usarse dentro de LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    // Cambiado de 'EN' a 'ES' por defecto
    const [selectedLanguage, setSelectedLanguage] = useState('ES');
    
    // Fallback a ES en lugar de EN
    const t = translations[selectedLanguage] || translations.ES;
    
    return (
        <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};