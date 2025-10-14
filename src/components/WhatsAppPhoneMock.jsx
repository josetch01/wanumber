import React from 'react';
import whatsappPhoneImage from '../assets/Celular.png';

const WhatsAppPhoneMock = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <img src={whatsappPhoneImage} alt="WhatsApp Mock" className="w-85 h-auto" />
        </div>
    );
};

export default WhatsAppPhoneMock;

