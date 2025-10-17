import React from 'react';
import whatsappPhoneImage from '../assets/Celular.svg';

const WhatsAppPhoneMock = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="w-80 h-78 flex items-center justify-center">
                <img
                    src={whatsappPhoneImage}
                    alt="WhatsApp Mock"
                    className="w-80 h-auto max-h-96 object-contain"
                />
            </div>
        </div>
    );
};

export default WhatsAppPhoneMock;

