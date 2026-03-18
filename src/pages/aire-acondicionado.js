import { renderServicePage, initServicePage } from './service-template.js';
import { icons } from '../icons.js';
import { i18n } from '../i18n.js';

export function renderAireAcondicionado() {
    const content = {
        es: {
            title: 'Instaladores de Aire Acondicionado en Tarragona',
            description: 'Instalación profesional de aire acondicionado en Tarragona y Reus. Equipos split, multisplit, mantenimiento y reparación de sistemas de climatización para hogares y empresas.',
            subservices: [
                { title: 'Instalación de splits', text: 'Instalación profesional de equipos de aire acondicionado split de las mejores marcas del mercado.' },
                { title: 'Instalación multisplit', text: 'Sistemas multisplit para climatizar varias estancias con una sola unidad exterior, ideales para viviendas y oficinas.' },
                { title: 'Mantenimiento preventivo', text: 'Planes de mantenimiento para alargar la vida útil de tu equipo y mantener su eficiencia energética.' },
                { title: 'Reparación de averías', text: 'Diagnóstico y reparación de averías en equipos de aire acondicionado de todas las marcas.' },
                { title: 'Climatización empresarial', text: 'Soluciones de climatización para oficinas, locales comerciales e instalaciones industriales.' },
                { title: 'Sistemas de calefacción', text: 'Instalación de bombas de calor y sistemas de calefacción eficientes para invierno.' },
            ],
            faqs: [
                { q: '¿Cuánto cuesta instalar aire acondicionado en Tarragona?', a: 'El precio varía según el tipo de equipo, la potencia necesaria y la dificultad de la instalación. Desde un split básico hasta sistemas multisplit. Contacta para presupuesto.' },
                { q: '¿Qué marca de aire acondicionado recomendáis?', a: 'Trabajamos con las principales marcas del mercado como Mitsubishi, Daikin y otras marcas líderes. Te asesoramos según tus necesidades y presupuesto.' },
                { q: '¿Cuánto tarda la instalación de un split?', a: 'La instalación de un equipo split estándar suele completarse en medio día. Instalaciones más complejas pueden requerir más tiempo.' },
                { q: '¿Cada cuánto hay que hacer el mantenimiento?', a: 'Recomendamos hacer un mantenimiento preventivo al menos una vez al año, preferiblemente antes del inicio de la temporada de verano.' },
            ]
        },
        ca: {
            title: 'Instal·ladors d\'Aire Condicionat a Tarragona',
            description: 'Instal·lació professional d\'aire condicionat a Tarragona i Reus. Equips split, multisplit, manteniment i reparació de sistemes de climatització per a llar i empreses.',
            subservices: [
                { title: 'Instal·lació de splits', text: 'Instal·lació professional d\'equips d\'aire condicionat split de les millors marques del mercat.' },
                { title: 'Instal·lació multisplit', text: 'Sistemes multisplit per climatitzar diverses estances amb una sola unitat exterior, ideals per a habitatges i oficines.' },
                { title: 'Manteniment preventiu', text: 'Plans de manteniment per allargar la vida útil del teu equip i mantenir la seva eficiència energètica.' },
                { title: 'Reparació d\'avaries', text: 'Diagnòstic i reparació d\'avaries en equips d\'aire condicionat de totes les marques.' },
                { title: 'Climatització empresarial', text: 'Solucions de climatització per a oficines, locals comercials i instal·lacions industrials.' },
                { title: 'Sistemes de calefacció', text: 'Instal·lació de bombes de calor i sistemes de calefacció eficients per a l\'hivern.' },
            ],
            faqs: [
                { q: 'Quant costa instal·lar aire condicionat a Tarragona?', a: 'El preu varia segons el tipus d\'equip, la potència necessària i la dificultat de la instal·lació. Des d\'un split bàsic fins a sistemes multisplit. Contacta per a pressupost.' },
                { q: 'Quina marca d\'aire condicionat recomaneu?', a: 'Treballem amb les principals marques del mercat com Mitsubishi, Daikin i altres marques líders. T\'assessorem segons les teves necessitats i pressupost.' },
                { q: 'Quant triga la instal·lació d\'un split?', a: 'La instal·lació d\'un equip split estàndard se sol completar en mig dia. Instal·lacions més complexes poden requerir més temps.' },
                { q: 'Cada quant s\'ha de fer el manteniment?', a: 'Recomanem fer un manteniment preventivo almenys un cop l\'any, preferiblement abans de l\'inici de la temporada d\'estiu.' },
            ]
        }
    };

    const data = content[i18n.lang] || content.es;

    return renderServicePage({
        slug: 'aire-acondicionado',
        icon: icons.wind,
        title: data.title,
        description: data.description,
        subservices: data.subservices,
        faqs: data.faqs,
        keywords: i18n.lang === 'es' ? ['instalación aire acondicionado tarragona', 'instalador aire acondicionado reus', 'climatización tarragona'] : ['instal·lació aire condicionat tarragona', 'instal·lador aire condicionat reus', 'climatització tarragona'],
        relatedServices: [
            { icon: icons.zap, title: i18n.get('nav_electrician'), link: '#/electricistas-tarragona' },
            { icon: icons.droplet, title: i18n.get('nav_plumber'), link: '#/fontaneros-tarragona' },
            { icon: icons.wifi, title: i18n.get('nav_telecom'), link: '#/telecomunicaciones-tarragona' },
        ],
        image: '/images/ac_service.png'
    });
}

export function initAireAcondicionado() {
    initServicePage();
}
