// ============================================
// ELECTRICISTAS EN TARRAGONA
// ============================================
import { renderServicePage, initServicePage } from './service-template.js';
import { icons } from '../icons.js';
import { i18n } from '../i18n.js';

export function renderElectricistas() {
    const content = {
        es: {
            title: 'Electricistas en Tarragona',
            description: 'Servicio profesional de instalaciones eléctricas en Tarragona y Reus. Electricistas cualificados para viviendas, comercios e industrias. Boletines eléctricos, cuadros eléctricos, iluminación LED y todo tipo de reparaciones.',
            subservices: [
                { title: 'Instalaciones eléctricas completas', text: 'Realizamos instalaciones eléctricas nuevas para viviendas, locales comerciales e industriales, garantizando el cumplimiento de la normativa vigente.' },
                { title: 'Boletines eléctricos', text: 'Tramitamos boletines eléctricos necesarios para dar de alta la luz, cambios de titularidad o ampliaciones de potencia.' },
                { title: 'Cuadros eléctricos', text: 'Instalamos y modernizamos cuadros eléctricos con protecciones diferenciales e interruptores automáticos de última generación.' },
                { title: 'Iluminación LED', text: 'Diseñamos e instalamos sistemas de iluminación LED eficientes que reducen el consumo energético de tu hogar o negocio.' },
                { title: 'Reparaciones eléctricas', text: 'Reparamos averías eléctricas urgentes: cortocircuitos, enchufes, interruptores, cableado y cualquier problema eléctrico.' },
                { title: 'Mantenimiento eléctrico', text: 'Planes de mantenimiento preventivo para garantizar la seguridad y el correcto funcionamiento de tus instalaciones.' },
            ],
            faqs: [
                { q: '¿Cuánto cuesta una instalación eléctrica en Tarragona?', a: 'El precio depende del tipo de instalación, la superficie y la complejidad del trabajo. Contacta con nosotros para un presupuesto personalizado sin compromiso.' },
                { q: '¿Realizáis boletines eléctricos?', a: 'Sí, tramitamos todo tipo de boletines eléctricos: alta nueva, cambio de titularidad, aumento de potencia y certificados de instalación.' },
                { q: '¿Cuánto tarda una instalación eléctrica?', a: 'Depende del alcance del trabajo. Una instalación eléctrica completa para una vivienda puede tardar entre 3 y 7 días laborables.' },
                { q: '¿Trabajáis con empresas?', a: 'Sí, ofrecemos servicios de instalación y mantenimiento eléctrico para empresas, comercios e industrias en toda la zona de Tarragona.' },
            ]
        },
        ca: {
            title: 'Electricistes a Tarragona',
            description: 'Servei professional d\'instal·lacions elèctriques a Tarragona i Reus. Electricistes qualificats per a habitatges, comerços i indústries. Butlletins elèctrics, quadres elèctrics, il·luminació LED i tota mena de reparacions.',
            subservices: [
                { title: 'Instal·lacions elèctriques completes', text: 'Realitzem instal·lacions elèctriques noves per a habitatges, locals comercials i industrials, garantint el compliment de la normativa vigent.' },
                { title: 'Butlletins elèctrics', text: 'Tramitem butlletins elèctrics necessaris per donar d\'alta la llum, canvis de titularitat o ampliacions de potència.' },
                { title: 'Quadres elèctrics', text: 'Instal·lem i modernitzem quadres elèctrics amb proteccions diferencials i interruptors automàtics d\'última generació.' },
                { title: 'Il·luminació LED', text: 'Dissenyem i instal·lem sistemes d\'il·luminació LED eficients que redueixen el consum energètic de la teva llar o negoci.' },
                { title: 'Reparacions elèctriques', text: 'Reparem avaries elèctriques urgents: curtcircuits, endolls, interruptors, cablejat i qualsevol problema elèctric.' },
                { title: 'Manteniment elèctric', text: 'Plans de manteniment preventiu per garantir la seguretat i el correcte funcionament de les teves instal·lacions.' },
            ],
            faqs: [
                { q: 'Quant costa una instal·lació elèctrica a Tarragona?', a: 'El preu depèn del tipus d\'instal·lació, la superfície i la complexitat de la feina. Contacta amb nosaltres per a un pressupost personalitzat sense compromís.' },
                { q: 'Realitzeu butlletins elèctrics?', a: 'Sí, tramitem tota mena de butlletins elèctrics: alta nova, canvi de titularitat, augment de potència i certificats d\'instal·lació.' },
                { q: 'Quant triga una instal·lació elèctrica?', a: 'Depèn de l\'abast de la feina. Una instal·lació elèctrica completa per a un habitatge pot trigar entre 3 i 7 dies laborables.' },
                { q: 'Treballeu amb empreses?', a: 'Sí, oferim serveis d\'instal·lació i manteniment elèctric per a empreses, comerços i indústries a tota la zona de Tarragona.' },
            ]
        }
    };

    const data = content[i18n.lang] || content.es;

    return renderServicePage({
        slug: 'electricistas',
        icon: icons.zap,
        title: data.title,
        description: data.description,
        subservices: data.subservices,
        faqs: data.faqs,
        keywords: i18n.lang === 'es' ? ['electricista tarragona', 'instalaciones eléctricas tarragona', 'electricistas reus'] : ['electricista tarragona', 'instal·lacions elèctriques tarragona', 'electricistes reus'],
        relatedServices: [
            { icon: icons.droplet, title: i18n.get('nav_plumber'), link: '#/fontaneros-tarragona' },
            { icon: icons.wind, title: i18n.get('nav_ac'), link: '#/aire-acondicionado-tarragona' },
            { icon: icons.wifi, title: i18n.get('nav_telecom'), link: '#/telecomunicaciones-tarragona' },
        ],
        image: '/images/elec_service.png'
    });
}

export function initElectricistas() {
    initServicePage();
}
