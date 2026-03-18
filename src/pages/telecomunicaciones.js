import { renderServicePage, initServicePage } from './service-template.js';
import { icons } from '../icons.js';
import { i18n } from '../i18n.js';

export function renderTelecomunicaciones() {
    const content = {
        es: {
            title: 'Instaladores de Telecomunicaciones en Tarragona',
            description: 'Servicio profesional de instalaciones de telecomunicaciones en Tarragona y Reus. Instalación de redes, configuración wifi, fibra óptica e infraestructura de telecomunicaciones para hogares y empresas.',
            subservices: [
                { title: 'Instalación de redes', text: 'Diseño e instalación de redes de datos cableadas (Cat5e, Cat6, Cat6A) para viviendas, oficinas e industrias.' },
                { title: 'Configuración WiFi', text: 'Instalación y configuración de redes wifi de alto rendimiento con cobertura completa en toda la instalación.' },
                { title: 'Infraestructura de telecomunicaciones (ICT)', text: 'Proyectos de infraestructura de telecomunicaciones para edificios, urbanizaciones y locales comerciales.' },
                { title: 'Instalación de routers y switches', text: 'Configuración profesional de equipos de red: routers, switches, puntos de acceso y firewalls.' },
                { title: 'Fibra óptica', text: 'Instalación de fibra óptica y cableado estructurado para conexiones de alta velocidad.' },
                { title: 'Sistemas de videovigilancia', text: 'Instalación de cámaras de seguridad IP y sistemas de videovigilancia con acceso remoto.' },
            ],
            faqs: [
                { q: '¿Cuánto cuesta instalar una red de datos empresarial?', a: 'El precio depende del tamaño de la instalación, el número de puntos de red y el tipo de cableado. Contacta para un estudio personalizado.' },
                { q: '¿Instaláis redes wifi en empresas?', a: 'Sí, diseñamos e instalamos redes wifi empresariales con cobertura completa, segmentación de red y alta disponibilidad.' },
                { q: '¿Qué tipo de cableado utilizáis?', a: 'Utilizamos cableado certificado Cat5e, Cat6 y Cat6A en función de las necesidades de velocidad y rendimiento del proyecto.' },
                { q: '¿Ofrecéis servicio de mantenimiento de redes?', a: 'Sí, ofrecemos planes de mantenimiento de redes que incluyen monitorización, resolución de incidencias y actualizaciones.' },
            ]
        },
        ca: {
            title: 'Instal·ladors de Telecomunicacions a Tarragona',
            description: 'Servei professional d\'instal·lacions de telecomunicacions a Tarragona i Reus. Instal·lació de xarxes, configuració wifi, fibra òptica i infraestructura de telecomunicacions per a llar i empreses.',
            subservices: [
                { title: 'Instal·lació de xarxes', text: 'Disseny i instal·lació de xarxes de dades cablejades (Cat5e, Cat6, Cat6A) per a habitatges, oficines i indústries.' },
                { title: 'Configuració WiFi', text: 'Instal·lació i configuració de xarxes wifi d\'alt rendiment amb cobertura completa en tota la instal·lació.' },
                { title: 'Infraestructura de telecomunicacions (ICT)', text: 'Projectes d\'infraestructura de telecomunicacions per a edificis, urbanitzacions i locals comercials.' },
                { title: 'Instal·lació de routers i switches', text: 'Configuració professional d\'equips de xarxa: routers, switches, punts d\'accés i firewalls.' },
                { title: 'Fibra òptica', text: 'Instal·lació de fibra òptica i cablejat estructurat per a connexions d\'alta velocitat.' },
                { title: 'Sistemes de videovigilància', text: 'Instal·lació de càmeres de seguretat IP i sistemes de videovigilància amb accés remot.' },
            ],
            faqs: [
                { q: 'Quant costa instal·lar una xarxa de dades empresarial?', a: 'El preu depèn del tamany de la instal·lació, el nombre de punts de xarxa i el tipus de cablejat. Contacta per a un estudi personalitzat.' },
                { q: 'Instal·leu xarxes wifi en empreses?', a: 'Sí, dissenyem i instal·lem xarxes wifi empresarials amb cobertura completa, segmentació de xarxa i alta disponibilitat.' },
                { q: 'Quin tipus de cablejat utilitzeu?', a: 'Utilitzem cablejat certificat Cat5e, Cat6 i Cat6A en funció de les necessitats de velocitat i rendiment del projecte.' },
                { q: 'Oferiu servei de manteniment de xarxes?', a: 'Sí, oferim plans de manteniment de xarxes que inclouen monitorització, resolució d\'incidències i actualitzacions.' },
            ]
        }
    };

    const data = content[i18n.lang] || content.es;

    return renderServicePage({
        slug: 'telecomunicaciones',
        icon: icons.wifi,
        title: data.title,
        description: data.description,
        subservices: data.subservices,
        faqs: data.faqs,
        keywords: i18n.lang === 'es' ? ['instalación redes tarragona', 'instalador telecomunicaciones tarragona', 'instalación wifi empresa'] : ['instal·lació xarxes tarragona', 'instal·lador telecomunicacions tarragona', 'instal·lació wifi empresa'],
        relatedServices: [
            { icon: icons.zap, title: i18n.get('nav_electrician'), link: '#/electricistas-tarragona' },
            { icon: icons.droplet, title: i18n.get('nav_plumber'), link: '#/fontaneros-tarragona' },
            { icon: icons.wind, title: i18n.get('nav_ac'), link: '#/aire-acondicionado-tarragona' },
        ],
        image: '/images/telecom_service.png'
    });
}

export function initTelecomunicaciones() {
    initServicePage();
}
