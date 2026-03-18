import { renderServicePage, initServicePage } from './service-template.js';
import { icons } from '../icons.js';
import { i18n } from '../i18n.js';

export function renderFontaneros() {
    const content = {
        es: {
            title: 'Fontaneros en Tarragona',
            description: 'Servicio profesional de fontanería en Tarragona y Reus. Instalación de tuberías, reparación de fugas, instalación de sanitarios y sistemas de agua completos para viviendas y empresas.',
            subservices: [
                { title: 'Instalación de tuberías', text: 'Instalación y sustitución de tuberías de agua fría y caliente con materiales de alta calidad para viviendas y locales.' },
                { title: 'Reparación de fugas', text: 'Detectamos y reparamos fugas de agua con técnicas profesionales que minimizan el impacto en tu instalación.' },
                { title: 'Instalación de sanitarios', text: 'Instalamos lavabos, inodoros, duchas, bañeras y todo tipo de elementos sanitarios con acabado profesional.' },
                { title: 'Sistemas de agua caliente', text: 'Instalación y mantenimiento de calentadores, termos eléctricos y sistemas de producción de agua caliente sanitaria.' },
                { title: 'Desatascos', text: 'Servicio de desatascos de tuberías, desagües y bajantes con equipos profesionales.' },
                { title: 'Grifería y accesorios', text: 'Instalación y reparación de grifos, llaves de paso, válvulas y accesorios de fontanería.' },
            ],
            faqs: [
                { q: '¿Cuánto cuesta un fontanero en Tarragona?', a: 'El precio del servicio de fontanería depende del tipo de trabajo. Contacta con nosotros para un presupuesto sin compromiso adaptado a tus necesidades.' },
                { q: '¿Cuánto tarda un fontanero en reparar una fuga?', a: 'La reparación de una fuga simple puede resolverse en 1-2 horas. Fugas más complejas pueden requerir más tiempo según la localización y gravedad.' },
                { q: '¿Realizáis instalaciones de fontanería en obra nueva?', a: 'Sí, realizamos instalaciones completas de fontanería tanto en obra nueva como en reformas integrales.' },
                { q: '¿Trabajáis fines de semana?', a: 'Nuestro horario habitual es de lunes a viernes. Para urgencias, contacta con nosotros y valoraremos la situación.' },
            ]
        },
        ca: {
            title: 'Fontaners a Tarragona',
            description: 'Servei professional de fontaneria a Tarragona i Reus. Instal·lació de canonades, reparació de fugues, instal·lació de sanitaris i sistemes d\'aigua complets per a habitatges i empreses.',
            subservices: [
                { title: 'Instal·lació de canonades', text: 'Instal·lació i substitució de canonades d\'aigua freda i calenta amb materials d\'alta qualitat per a habitatges i locals.' },
                { title: 'Reparació de fugues', text: 'Detectem i reparem fugues d\'aigua amb tècniques professionals que minimitzen l\'impacte en la teva instal·lació.' },
                { title: 'Instal·lació de sanitaris', text: 'Instal·lem lavabos, inodors, dutxes, banyeres i tota mena d\'elements sanitaris amb acabat professional.' },
                { title: 'Sistemes d\'aigua calenta', text: 'Instal·lació i manteniment de calentadors, termos elèctrics i sistemes de producció d\'aigua calenta sanitària.' },
                { title: 'Desembussos', text: 'Servei de desembussos de canonades, desguassos i baixants amb equips professionals.' },
                { title: 'Aixeteria i accessoris', text: 'Instal·lació i reparació d\'aixetes, claus de pas, vàlvules i accessoris de fontaneria.' },
            ],
            faqs: [
                { q: 'Quant costa un fontaner a Tarragona?', a: 'El preu del servei de fontaneria depèn del tipus de feina. Contacta amb nosaltres per a un pressupost sense compromís adaptat a les teves necessitats.' },
                { q: 'Quant triga un fontaner a reparar una fuga?', a: 'La reparació d\'una fuga simple es pot resoldre en 1-2 hores. Fugues més complexes poden requerir més temps segons la localització i gravetat.' },
                { q: 'Realitzeu instal·lacions de fontaneria en obra nova?', a: 'Sí, realitzem instal·lacions completes de fontaneria tant en obra nova com en reformes integrales.' },
                { q: 'Treballeu caps de setmana?', a: 'El nostre horari habitual és de dilluns a divendres. Per a urgències, contacta amb nosaltres i valorarem la situació.' },
            ]
        }
    };

    const data = content[i18n.lang] || content.es;

    return renderServicePage({
        slug: 'fontaneros',
        icon: icons.droplet,
        title: data.title,
        description: data.description,
        subservices: data.subservices,
        faqs: data.faqs,
        keywords: i18n.lang === 'es' ? ['fontanero tarragona', 'fontanero reus', 'instalaciones fontanería tarragona'] : ['fontaner tarragona', 'fontaner reus', 'instal·lacions fontaneria tarragona'],
        relatedServices: [
            { icon: icons.zap, title: i18n.get('nav_electrician'), link: '#/electricistas-tarragona' },
            { icon: icons.wind, title: i18n.get('nav_ac'), link: '#/aire-acondicionado-tarragona' },
            { icon: icons.wifi, title: i18n.get('nav_telecom'), link: '#/telecomunicaciones-tarragona' },
        ],
        image: '/images/font_service.png'
    });
}

export function initFontaneros() {
    initServicePage();
}
