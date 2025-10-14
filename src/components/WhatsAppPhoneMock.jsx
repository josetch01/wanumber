import React from 'react';
import whatsappPhoneImage from '../assets/whatsapp_phone.jpeg';
import celularPng from '../assets/Celular.png';

const WhatsAppPhoneMock = ({ page = 'home' }) => {
    // Selecciona la imagen según la página
    const imageSrc = page === 'pricing' ? celularPng : whatsappPhoneImage;

    return (
        <div className="flex items-center justify-center">
            <img 
                src={imageSrc} 
                alt="WhatsApp Phone Mockup" 
                className="w-full h-auto object-contain"
            />
        </div>
    );
};

export default WhatsAppPhoneMock;