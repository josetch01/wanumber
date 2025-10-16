import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Lista de países con sus datos
const countries = [
    // --- Países de la lista original ---
    {
        code: 'US',
        name: 'Estados Unidos',
        nameEN: 'United States',
        nameES: 'Estados Unidos',
        namePT: 'Estados Unidos',
        flag: 'https://flagcdn.com/w80/us.png',
        prefix: '+1',
        successRate: 97,
        region: 'North America',
        regionES: 'América del Norte',
        regionPT: 'América do Norte',
        available: true,
        reliability: 'Most Reliable'
    },
    {
        code: 'GB',
        name: 'Reino Unido',
        nameEN: 'United Kingdom',
        nameES: 'Reino Unido',
        namePT: 'Reino Unido',
        flag: 'https://flagcdn.com/w80/gb.png',
        prefix: '+44',
        successRate: 98,
        region: 'Europe',
        regionES: 'Europa',
        regionPT: 'Europa',
        available: true,
        //reliability: 'Reliable'
    },
    {
        code: 'MO',
        name: 'Macao',
        nameEN: 'Macao',
        nameES: 'Macao',
        namePT: 'Macau',
        flag: 'https://flagcdn.com/w80/mo.png',
        prefix: '+853',
        successRate: 99,
        region: 'Asia',
        regionES: 'Asia',
        regionPT: 'Ásia',
        available: true,
        //reliability: 'Reliable'
    },
    {
        code: 'HT',
        name: 'Haití',
        nameEN: 'Haiti',
        nameES: 'Haití',
        namePT: 'Haiti',
        flag: 'https://flagcdn.com/w80/ht.png',
        prefix: '+509',
        successRate: 99,
        region: 'Other',
        regionES: 'Otro',
        regionPT: 'Outro',
        available: true,
        reliability: null
    },
    {
        code: 'NL',
        name: 'Países Bajos',
        nameEN: 'Netherlands',
        nameES: 'Países Bajos',
        namePT: 'Países Baixos',
        flag: 'https://flagcdn.com/w80/nl.png',
        prefix: '+31',
        successRate: 99,
        region: 'Europe',
        regionES: 'Europa',
        regionPT: 'Europa',
        available: true,
        reliability: null
    },
    {
        code: 'VN',
        name: 'Vietnam',
        nameEN: 'Vietnam',
        nameES: 'Vietnam',
        namePT: 'Vietnã',
        flag: 'https://flagcdn.com/w80/vn.png',
        prefix: '+84',
        successRate: 99,
        region: 'Asia',
        regionES: 'Asia',
        regionPT: 'Ásia',
        available: true,
        reliability: null
    },
    {
        code: 'CA',
        name: 'Canadá',
        nameEN: 'Canada',
        nameES: 'Canadá',
        namePT: 'Canadá',
        flag: 'https://flagcdn.com/w80/ca.png',
        prefix: '+1',
        successRate: 96,
        region: 'North America',
        regionES: 'América del Norte',
        regionPT: 'América do Norte',
        available: true,
        reliability: null
    },
    {
        code: 'DE',
        name: 'Alemania',
        nameEN: 'Germany',
        nameES: 'Alemania',
        namePT: 'Alemanha',
        flag: 'https://flagcdn.com/w80/de.png',
        prefix: '+49',
        successRate: 95,
        region: 'Europe',
        regionES: 'Europa',
        regionPT: 'Europa',
        available: true,
        reliability: null
    },
    {
        code: 'FR',
        name: 'Francia',
        nameEN: 'France',
        nameES: 'Francia',
        namePT: 'França',
        flag: 'https://flagcdn.com/w80/fr.png',
        prefix: '+33',
        successRate: 94,
        region: 'Europe',
        regionES: 'Europa',
        regionPT: 'Europa',
        available: true,
        reliability: null
    },
    {
        code: 'ES',
        name: 'España',
        nameEN: 'Spain',
        nameES: 'España',
        namePT: 'Espanha',
        flag: 'https://flagcdn.com/w80/es.png',
        prefix: '+34',
        successRate: 93,
        region: 'Europe',
        regionES: 'Europa',
        regionPT: 'Europa',
        available: true,
        reliability: null
    },
    {
        code: 'IN',
        name: 'India',
        nameEN: 'India',
        nameES: 'India',
        namePT: 'Índia',
        flag: 'https://flagcdn.com/w80/in.png',
        prefix: '+91',
        successRate: 92,
        region: 'Asia',
        regionES: 'Asia',
        regionPT: 'Ásia',
        available: true,
        reliability: null
    },
    // Países de Sudamérica (original)
    {
        code: 'AR',
        name: 'Argentina',
        nameEN: 'Argentina',
        nameES: 'Argentina',
        namePT: 'Argentina',
        flag: 'https://flagcdn.com/w80/ar.png',
        prefix: '+54',
        successRate: 94,
        region: 'South America',
        regionES: 'Sudamérica',
        regionPT: 'América do Sul',
        available: true,
        reliability: null
    },
    {
        code: 'BO',
        name: 'Bolivia',
        nameEN: 'Bolivia',
        nameES: 'Bolivia',
        namePT: 'Bolívia',
        flag: 'https://flagcdn.com/w80/bo.png',
        prefix: '+591',
        successRate: 89,
        region: 'South America',
        regionES: 'Sudamérica',
        regionPT: 'América do Sul',
        available: true,
        reliability: null
    },
    {
        code: 'BR',
        name: 'Brasil',
        nameEN: 'Brazil',
        nameES: 'Brasil',
        namePT: 'Brasil',
        flag: 'https://flagcdn.com/w80/br.png',
        prefix: '+55',
        successRate: 95,
        region: 'South America',
        regionES: 'Sudamérica',
        regionPT: 'América do Sul',
        available: true,
        //reliability: 'Reliable'
    },
    {
        code: 'CL',
        name: 'Chile',
        nameEN: 'Chile',
        nameES: 'Chile',
        namePT: 'Chile',
        flag: 'https://flagcdn.com/w80/cl.png',
        prefix: '+56',
        successRate: 93,
        region: 'South America',
        regionES: 'Sudamérica',
        regionPT: 'América do Sul',
        available: true,
        reliability: null
    },
    {
        code: 'CO',
        name: 'Colombia',
        nameEN: 'Colombia',
        nameES: 'Colombia',
        namePT: 'Colômbia',
        flag: 'https://flagcdn.com/w80/co.png',
        prefix: '+57',
        successRate: 94,
        region: 'South America',
        regionES: 'Sudamérica',
        regionPT: 'América do Sul',
        available: true,
        reliability: null
    },
    {
        code: 'EC',
        name: 'Ecuador',
        nameEN: 'Ecuador',
        nameES: 'Ecuador',
        namePT: 'Equador',
        flag: 'https://flagcdn.com/w80/ec.png',
        prefix: '+593',
        successRate: 91,
        region: 'South America',
        regionES: 'Sudamérica',
        regionPT: 'América do Sul',
        available: true,
        reliability: null
    },
    {
        code: 'GY',
        name: 'Guyana',
        nameEN: 'Guyana',
        nameES: 'Guyana',
        namePT: 'Guiana',
        flag: 'https://flagcdn.com/w80/gy.png',
        prefix: '+592',
        successRate: 87,
        region: 'South America',
        regionES: 'Sudamérica',
        regionPT: 'América do Sul',
        available: true,
        reliability: null
    },
    {
        code: 'PY',
        name: 'Paraguay',
        nameEN: 'Paraguay',
        nameES: 'Paraguay',
        namePT: 'Paraguai',
        flag: 'https://flagcdn.com/w80/py.png',
        prefix: '+595',
        successRate: 90,
        region: 'South America',
        regionES: 'Sudamérica',
        regionPT: 'América do Sul',
        available: true,
        reliability: null
    },
    {
        code: 'PE',
        name: 'Perú',
        nameEN: 'Peru',
        nameES: 'Perú',
        namePT: 'Peru',
        flag: 'https://flagcdn.com/w80/pe.png',
        prefix: '+51',
        successRate: 93,
        region: 'South America',
        regionES: 'Sudamérica',
        regionPT: 'América do Sul',
        available: true,
        reliability: null
    },
    {
        code: 'SR',
        name: 'Surinam',
        nameEN: 'Suriname',
        nameES: 'Surinam',
        namePT: 'Suriname',
        flag: 'https://flagcdn.com/w80/sr.png',
        prefix: '+597',
        successRate: 86,
        region: 'South America',
        regionES: 'Sudamérica',
        regionPT: 'América do Sul',
        available: true,
        reliability: null
    },
    {
        code: 'UY',
        name: 'Uruguay',
        nameEN: 'Uruguay',
        nameES: 'Uruguay',
        namePT: 'Uruguai',
        flag: 'https://flagcdn.com/w80/uy.png',
        prefix: '+598',
        successRate: 92,
        region: 'South America',
        regionES: 'Sudamérica',
        regionPT: 'América do Sul',
        available: true,
        reliability: null
    },
    {
        code: 'VE',
        name: 'Venezuela',
        nameEN: 'Venezuela',
        nameES: 'Venezuela',
        namePT: 'Venezuela',
        flag: 'https://flagcdn.com/w80/ve.png',
        prefix: '+58',
        successRate: 88,
        region: 'South America',
        regionES: 'Sudamérica',
        regionPT: 'América do Sul',
        available: true,
        reliability: null
    },
    {
        code: 'GF',
        name: 'Guayana Francesa',
        nameEN: 'French Guiana',
        nameES: 'Guayana Francesa',
        namePT: 'Guiana Francesa',
        flag: 'https://flagcdn.com/w80/gf.png',
        prefix: '+594',
        successRate: 85,
        region: 'South America',
        regionES: 'Sudamérica',
        regionPT: 'América do Sul',
        available: true,
        reliability: null
    },
    // --- Países Adicionales: América del Norte y Central ---
    {
        code: 'MX',
        name: 'México',
        nameEN: 'Mexico',
        nameES: 'México',
        namePT: 'México',
        flag: 'https://flagcdn.com/w80/mx.png',
        prefix: '+52',
        successRate: 90,
        region: 'North America',
        regionES: 'América del Norte',
        regionPT: 'América do Norte',
        available: true,
        reliability: null
    },
    {
        code: 'CU',
        name: 'Cuba',
        nameEN: 'Cuba',
        nameES: 'Cuba',
        namePT: 'Cuba',
        flag: 'https://flagcdn.com/w80/cu.png',
        prefix: '+53',
        successRate: 90,
        region: 'Central America',
        regionES: 'América Central',
        regionPT: 'América Central',
        available: true,
        reliability: null
    },
    {
        code: 'GT',
        name: 'Guatemala',
        nameEN: 'Guatemala',
        nameES: 'Guatemala',
        namePT: 'Guatemala',
        flag: 'https://flagcdn.com/w80/gt.png',
        prefix: '+502',
        successRate: 90,
        region: 'Central America',
        regionES: 'América Central',
        regionPT: 'América Central',
        available: true,
        reliability: null
    },
    {
        code: 'HN',
        name: 'Honduras',
        nameEN: 'Honduras',
        nameES: 'Honduras',
        namePT: 'Honduras',
        flag: 'https://flagcdn.com/w80/hn.png',
        prefix: '+504',
        successRate: 90,
        region: 'Central America',
        regionES: 'América Central',
        regionPT: 'América Central',
        available: true,
        reliability: null
    },
    {
        code: 'SV',
        name: 'El Salvador',
        nameEN: 'El Salvador',
        nameES: 'El Salvador',
        namePT: 'El Salvador',
        flag: 'https://flagcdn.com/w80/sv.png',
        prefix: '+503',
        successRate: 90,
        region: 'Central America',
        regionES: 'América Central',
        regionPT: 'América Central',
        available: true,
        reliability: null
    },
    {
        code: 'NI',
        name: 'Nicaragua',
        nameEN: 'Nicaragua',
        nameES: 'Nicaragua',
        namePT: 'Nicarágua',
        flag: 'https://flagcdn.com/w80/ni.png',
        prefix: '+505',
        successRate: 90,
        region: 'Central America',
        regionES: 'América Central',
        regionPT: 'América Central',
        available: true,
        reliability: null
    },
    {
        code: 'CR',
        name: 'Costa Rica',
        nameEN: 'Costa Rica',
        nameES: 'Costa Rica',
        namePT: 'Costa Rica',
        flag: 'https://flagcdn.com/w80/cr.png',
        prefix: '+506',
        successRate: 90,
        region: 'Central America',
        regionES: 'América Central',
        regionPT: 'América Central',
        available: true,
        reliability: null
    },
    {
        code: 'PA',
        name: 'Panamá',
        nameEN: 'Panama',
        nameES: 'Panamá',
        namePT: 'Panamá',
        flag: 'https://flagcdn.com/w80/pa.png',
        prefix: '+507',
        successRate: 90,
        region: 'Central America',
        regionES: 'América Central',
        regionPT: 'América Central',
        available: true,
        reliability: null
    },
    // --- Países Adicionales: Europa ---
    {
        code: 'IT',
        name: 'Italia',
        nameEN: 'Italy',
        nameES: 'Italia',
        namePT: 'Itália',
        flag: 'https://flagcdn.com/w80/it.png',
        prefix: '+39',
        successRate: 90,
        region: 'Europe',
        regionES: 'Europa',
        regionPT: 'Europa',
        available: true,
        reliability: null
    },
    {
        code: 'RU',
        name: 'Rusia',
        nameEN: 'Russia',
        nameES: 'Rusia',
        namePT: 'Rússia',
        flag: 'https://flagcdn.com/w80/ru.png',
        prefix: '+7',
        successRate: 90,
        region: 'Europe',
        regionES: 'Europa',
        regionPT: 'Europa',
        available: true,
        reliability: null
    },
    {
        code: 'UA',
        name: 'Ucrania',
        nameEN: 'Ukraine',
        nameES: 'Ucrania',
        namePT: 'Ucrânia',
        flag: 'https://flagcdn.com/w80/ua.png',
        prefix: '+380',
        successRate: 90,
        region: 'Europe',
        regionES: 'Europa',
        regionPT: 'Europa',
        available: true,
        reliability: null
    },
    {
        code: 'PL',
        name: 'Polonia',
        nameEN: 'Poland',
        nameES: 'Polonia',
        namePT: 'Polônia',
        flag: 'https://flagcdn.com/w80/pl.png',
        prefix: '+48',
        successRate: 90,
        region: 'Europe',
        regionES: 'Europa',
        regionPT: 'Europa',
        available: true,
        reliability: null
    },
    {
        code: 'SE',
        name: 'Suecia',
        nameEN: 'Sweden',
        nameES: 'Suecia',
        namePT: 'Suécia',
        flag: 'https://flagcdn.com/w80/se.png',
        prefix: '+46',
        successRate: 90,
        region: 'Europe',
        regionES: 'Europa',
        regionPT: 'Europa',
        available: true,
        reliability: null
    },
    {
        code: 'CH',
        name: 'Suiza',
        nameEN: 'Switzerland',
        nameES: 'Suiza',
        namePT: 'Suíça',
        flag: 'https://flagcdn.com/w80/ch.png',
        prefix: '+41',
        successRate: 90,
        region: 'Europe',
        regionES: 'Europa',
        regionPT: 'Europa',
        available: true,
        reliability: null
    },
    // --- Países Adicionales: Asia y Oceanía ---
    {
        code: 'JP',
        name: 'Japón',
        nameEN: 'Japan',
        nameES: 'Japón',
        namePT: 'Japão',
        flag: 'https://flagcdn.com/w80/jp.png',
        prefix: '+81',
        successRate: 90,
        region: 'Asia',
        regionES: 'Asia',
        regionPT: 'Ásia',
        available: true,
        reliability: null
    },
    {
        code: 'CN',
        name: 'China',
        nameEN: 'China',
        nameES: 'China',
        namePT: 'China',
        flag: 'https://flagcdn.com/w80/cn.png',
        prefix: '+86',
        successRate: 90,
        region: 'Asia',
        regionES: 'Asia',
        regionPT: 'Ásia',
        available: true,
        reliability: null
    },
    {
        code: 'KR',
        name: 'Corea del Sur',
        nameEN: 'South Korea',
        nameES: 'Corea del Sur',
        namePT: 'Coreia do Sul',
        flag: 'https://flagcdn.com/w80/kr.png',
        prefix: '+82',
        successRate: 90,
        region: 'Asia',
        regionES: 'Asia',
        regionPT: 'Ásia',
        available: true,
        reliability: null
    },
    {
        code: 'AU',
        name: 'Australia',
        nameEN: 'Australia',
        nameES: 'Australia',
        namePT: 'Austrália',
        flag: 'https://flagcdn.com/w80/au.png',
        prefix: '+61',
        successRate: 90,
        region: 'Oceania',
        regionES: 'Oceanía',
        regionPT: 'Oceania',
        available: true,
        reliability: null
    },
    {
        code: 'NZ',
        name: 'Nueva Zelanda',
        nameEN: 'New Zealand',
        nameES: 'Nueva Zelanda',
        namePT: 'Nova Zelândia',
        flag: 'https://flagcdn.com/w80/nz.png',
        prefix: '+64',
        successRate: 90,
        region: 'Oceania',
        regionES: 'Oceanía',
        regionPT: 'Oceania',
        available: true,
        reliability: null
    },
    {
        code: 'SA',
        name: 'Arabia Saudita',
        nameEN: 'Saudi Arabia',
        nameES: 'Arabia Saudita',
        namePT: 'Arábia Saudita',
        flag: 'https://flagcdn.com/w80/sa.png',
        prefix: '+966',
        successRate: 90,
        region: 'Asia',
        regionES: 'Asia',
        regionPT: 'Ásia',
        available: true,
        reliability: null
    },
    // --- Países Adicionales: África ---
    {
        code: 'EG',
        name: 'Egipto',
        nameEN: 'Egypt',
        nameES: 'Egipto',
        namePT: 'Egito',
        flag: 'https://flagcdn.com/w80/eg.png',
        prefix: '+20',
        successRate: 90,
        region: 'Africa',
        regionES: 'África',
        regionPT: 'África',
        available: true,
        reliability: null
    },
    {
        code: 'ZA',
        name: 'Sudáfrica',
        nameEN: 'South Africa',
        nameES: 'Sudáfrica',
        namePT: 'África do Sul',
        flag: 'https://flagcdn.com/w80/za.png',
        prefix: '+27',
        successRate: 90,
        region: 'Africa',
        regionES: 'África',
        regionPT: 'África',
        available: true,
        reliability: null
    },
    {
        code: 'NG',
        name: 'Nigeria',
        nameEN: 'Nigeria',
        nameES: 'Nigeria',
        namePT: 'Nigéria',
        flag: 'https://flagcdn.com/w80/ng.png',
        prefix: '+234',
        successRate: 90,
        region: 'Africa',
        regionES: 'África',
        regionPT: 'África',
        available: true,
        reliability: null
    }
    ];

    const CountrySelector = ({ selectedCountry, onSelectCountry }) => {
    const { selectedLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [hasAutoSelected, setHasAutoSelected] = useState(false);

    // Función para detectar el país del usuario
    const detectUserCountry = async () => {
        if (hasAutoSelected) return; // Solo detectar una vez

        try {
            // Intentar primero con la API de geolocalización por IP
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();

            if (data.country_code) {
                const userCountry = countries.find(country =>
                    country.code.toLowerCase() === data.country_code.toLowerCase()
                );

                if (userCountry) {
                    onSelectCountry(userCountry);
                    setHasAutoSelected(true);
                    return;
                }
            }
        } catch (error) {
            console.log('Error detecting country via IP:', error);
        }

        // Fallback: usar timezone para detectar región
        try {
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            let countryCode = null;

            // Mapear algunos timezones comunes a países
            if (timezone.includes('America/')) {
                if (timezone.includes('New_York') || timezone.includes('Chicago') ||
                    timezone.includes('Denver') || timezone.includes('Los_Angeles')) {
                    countryCode = 'US';
                } else if (timezone.includes('Sao_Paulo') || timezone.includes('Brasilia')) {
                    countryCode = 'BR';
                } else if (timezone.includes('Argentina')) {
                    countryCode = 'AR';
                } else if (timezone.includes('Lima')) {
                    countryCode = 'PE';
                } else if (timezone.includes('Santiago')) {
                    countryCode = 'CL';
                } else if (timezone.includes('Bogota')) {
                    countryCode = 'CO';
                } else if (timezone.includes('Caracas')) {
                    countryCode = 'VE';
                } else if (timezone.includes('Mexico')) {
                    countryCode = 'US'; // Fallback a US para México
                }
            } else if (timezone.includes('Europe/')) {
                if (timezone.includes('Madrid')) {
                    countryCode = 'ES';
                } else if (timezone.includes('London')) {
                    countryCode = 'GB';
                } else if (timezone.includes('Paris')) {
                    countryCode = 'FR';
                } else if (timezone.includes('Berlin')) {
                    countryCode = 'DE';
                } else if (timezone.includes('Amsterdam')) {
                    countryCode = 'NL';
                }
            } else if (timezone.includes('Asia/')) {
                if (timezone.includes('Kolkata')) {
                    countryCode = 'IN';
                } else if (timezone.includes('Ho_Chi_Minh')) {
                    countryCode = 'VN';
                }
            }

            if (countryCode) {
                const userCountry = countries.find(country =>
                    country.code === countryCode
                );

                if (userCountry) {
                    onSelectCountry(userCountry);
                    setHasAutoSelected(true);
                }
            }
        } catch (error) {
            console.log('Error detecting country via timezone:', error);
        }
    };

    // Detectar país automáticamente al cargar el componente
    useEffect(() => {
        // Solo detectar si no hay país seleccionado o si es el país por defecto (US)
        if (!selectedCountry || selectedCountry.code === 'US') {
            detectUserCountry();
        }
    }, []); // Solo ejecutar una vez al montar el componente

    // Obtener el nombre del país según el idioma
    const getCountryName = (country) => {
        if (selectedLanguage === 'ES') return country.nameES;
        if (selectedLanguage === 'PT') return country.namePT;
        return country.nameEN;
    };

    // Obtener la región según el idioma
    const getRegionName = (country) => {
        if (selectedLanguage === 'ES') return country.regionES;
        if (selectedLanguage === 'PT') return country.regionPT;
        return country.region;
    };

    // Filtrar países según búsqueda
    const filteredCountries = countries.filter(country => {
        const name = getCountryName(country).toLowerCase();
        const query = searchQuery.toLowerCase();
        return name.includes(query) || country.prefix.includes(query);
    });

    // Textos traducidos
    const translations = {
        EN: {
        title: 'Choose your country',
        subtitle: 'US numbers are the most reliable. Suggested countries shown first.',
        search: 'Search countries...',
        successRate: 'success rate',
        available: 'Available',
        selected: 'Selected',
        mostReliable: 'Most Reliable',
        reliable: 'Reliable'
        },
        ES: {
        title: 'Elige tu país',
        subtitle: 'Los números de EE. UU. son los más confiables. Los países sugeridos se muestran primero.',
        search: 'Buscar países...',
        successRate: 'tasa de éxito',
        available: 'Disponible',
        selected: 'Seleccionado',
        mostReliable: 'Más Confiable',
        reliable: 'Confiable'
        },
        PT: {
        title: 'Escolha seu país',
        subtitle: 'Os números dos EUA são os mais confiáveis. Os países sugeridos são mostrados primeiro.',
        search: 'Pesquisar países...',
        successRate: 'taxa de sucesso',
        available: 'Disponível',
        selected: 'Selecionado',
        mostReliable: 'Mais Confiável',
        reliable: 'Confiável'
        }
    };

    const t = translations[selectedLanguage] || translations.EN;

    const handleSelectCountry = (country) => {
        onSelectCountry(country);
        setIsOpen(false);
        setSearchQuery('');
    };

    return (
        <>
        {/* Trigger Button */}
        <div>
            <label className="text-sm font-medium text-gray-600 mb-2 block">
            {selectedLanguage === 'ES' ? 'País' : selectedLanguage === 'PT' ? 'País' : 'Country'}
            </label>
            <div
            className="border border-gray-300 p-4 rounded-xl bg-white hover:border-gray-400 transition-colors cursor-pointer"
            onClick={() => setIsOpen(true)}
            >
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                <img
                    src={selectedCountry.flag}
                    alt={`${getCountryName(selectedCountry)} flag`}
                    className="w-8 h-6 mr-3 rounded object-cover"
                />
                <div>
                    <div className="text-lg font-semibold text-gray-900">
                    {getCountryName(selectedCountry)}
                    </div>
                    <div className="text-sm font-medium">
                    <span className="text-gray-400">{selectedCountry.prefix}</span>
                    <span className="text-blue-400 ml-1">{selectedCountry.successRate}% {t.successRate}</span>
                </div>
                </div>
                </div>
                <div className="flex items-center space-x-2">
                <span className="flex items-center text-sm font-medium text-emerald-600">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-1.5"></span>
                    {t.available}
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                    />
                </svg>
                </div>
            </div>
            </div>
        </div>

        {/* Modal */}
        {isOpen && (
            <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/50 z-50"
                onClick={() => {
                setIsOpen(false);
                setSearchQuery('');
                }}
            ></div>

            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
                >
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        </div>
                        <div>
                        <h2 className="text-2xl font-bold text-gray-900">{t.title}</h2>
                        <p className="text-sm text-gray-500 mt-1">{t.subtitle}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                        setIsOpen(false);
                        setSearchQuery('');
                        }}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                        </svg>
                    </button>
                    </div>

                    {/* Search Bar */}
                    <div className="relative">
                    <svg
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder={t.search}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    </div>
                </div>

                {/* Countries Grid */}
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredCountries.map((country) => (
                        <div
                        key={country.code}
                        onClick={() => handleSelectCountry(country)}
                        className={`relative border rounded-xl p-4 cursor-pointer transition-all hover:shadow-md ${
                            selectedCountry.code === country.code
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        >
                        {/* Reliability Badge */}
                        {country.reliability && (
                            <div className="absolute top-2 right-2">
                            <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                country.reliability === 'Most Reliable'
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'bg-green-100 text-green-700'
                                }`}
                            >
                                {country.reliability === 'Most Reliable' ? t.mostReliable : t.reliable}
                            </span>
                            </div>
                        )}

                        <div className="flex items-center gap-3 mb-3">
                            <img
                            src={country.flag}
                            alt={`${getCountryName(country)} flag`}
                            className="w-12 h-9 rounded object-cover"
                            />
                            <div className="flex-1">
                            <div className="font-semibold text-gray-900">
                                {getCountryName(country)}
                            </div>
                            <div className="text-xs text-gray-500">{getRegionName(country)}</div>
                            </div>
                            {country.available && (
                            <span className="text-xs font-medium text-emerald-600">
                                {t.available}
                            </span>
                            )}
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-sm">
                            <svg
                                className="w-4 h-4 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                />
                            </svg>
                            <span className="font-semibold text-gray-900">
                                {country.successRate}%
                            </span>
                            <span className="text-gray-500 text-xs">{t.successRate}</span>
                            </div>

                            {selectedCountry.code === country.code && (
                            <svg
                                className="w-5 h-5 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                                />
                            </svg>
                            )}
                        </div>

                        {selectedCountry.code === country.code && (
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-b-xl"></div>
                        )}
                        </div>
                    ))}
                    </div>

                    {filteredCountries.length === 0 && (
                    <div className="text-center py-12">
                        <svg
                        className="w-16 h-16 text-gray-300 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>
                        <p className="text-gray-500">
                        {selectedLanguage === 'ES'
                            ? 'No se encontraron países'
                            : selectedLanguage === 'PT'
                            ? 'Nenhum país encontrado'
                            : 'No countries found'}
                        </p>
                    </div>
                    )}
                </div>
                </div>
            </div>
            </>
        )}
        </>
    );
};

export default CountrySelector;