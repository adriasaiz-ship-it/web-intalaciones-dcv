import { icons } from '../../icons.js';
import { renderContactForm, initContactForm } from '../../components/contact-form.js';
import { i18n } from '../../i18n.js';

export function renderElectricistaReus() {
    const isEs = i18n.lang === 'es';
    
    const content = {
        badge: isEs ? 'Electricidad' : 'Electricitat',
        title: isEs ? 'Electricistas en <span>Reus</span>' : 'Electricistes a <span>Reus</span>',
        subtitle: isEs 
            ? 'Expertos en instalaciones eléctricas, reparación de averías y mantenimiento para viviendas, empresas y locales comerciales en Reus y alrededores. Soluciones rápidas, seguras y homologadas con la garantía de INSTALACIONES DCV 2024.'
            : 'Experts en instal·lacions elèctriques, reparació d\'avaries i manteniment per a habitatges, empreses i locals comercials a Reus i voltants. Solucions ràpides, segures i homologades amb la garantia d\'INSTALACIONES DCV 2024.',
        btn_budget: isEs ? 'Solicitar presupuesto' : 'Sol·licitar pressupost',
        article_title_1: isEs ? 'Servicios ofrecidos por nuestro equipo de electricistas en Reus' : 'Serveis oferts pel nostre equip d\'electricistes a Reus',
        p1: isEs
            ? 'Si estás buscando un servicio de <strong>electricistas en Reus</strong> de confianza, INSTALACIONES DCV 2024 es tu socio ideal. Nos especializamos en brindar soluciones eléctricas integrales que cubren todas las necesidades de la ciudad de Reus y las poblaciones de su área de influencia, como Tarragona, Cambrils, Salou, Vila-seca, Valls y La Selva del Camp. Sabemos que una instalación eléctrica defectuosa o desactualizada no solo afecta la productividad de un negocio o el confort del hogar, sino que también representa un riesgo grave para la seguridad. Por ello, trabajamos exclusivamente con materiales de primera calidad, normativas actualizadas y un equipo de instaladores cualificados y autorizados.'
            : 'Si estàs buscant un servei d\'**electricistes a Reus** de confiança, INSTALACIONES DCV 2024 és el teu soci ideal. Ens especialitzem en oferir solucions elèctriques integrals que cobreixen totes les necessitats de la ciutat de Reus i les poblacions del seu àrea d\'influència, com Tarragona, Cambrils, Salou, Vila-seca, Valls i La Selva del Camp. Sabem que una instal·lació elèctrica defectuosa o desactualitzada no només afecta la productivitat d\'un negoci o el confort de la llar, sinó que també representa un risc greu per a la seguretat. Per això, treballem exclusivament amb materials de primera qualitat, normatives actualitzades i un equip d\'instal·ladors qualificats i autoritzats.',
        p2: isEs
            ? 'Ofrecemos cobertura completa para todo tipo de proyectos. Desde la planificación inicial y el diseño de redes eléctricas complejas para naves industriales en los diferentes polígonos de Reus, hasta pequeñas reformas y reparaciones del día a día en pisos o casas particulares situadas en el centro histórico. Nuestro servicio de electricistas está pensando para ofrecer rapidez, transparencia en los presupuestos y unos resultados duraderos que cumplen escrupulosamente con el Reglamento Electrotécnico para Baja Tensión (REBT).'
            : 'Oferim cobertura completa per a tota mena de projectes. Des de la planificació inicial i el disseny de xarxes elèctriques complexes per a naus industrials en els diferents polígons de Reus, fins a petites reformes i reparacions del dia a dia en pisos o cases particulars situades al centre històric. El nostre servei d\'electricistes està pensat per oferir rapidesa, transparència en els pressupostos i uns resultats duradors que compleixen escrupolosament amb el Reglament Electrotècnic per a Baixa Tensió (REBT).',
        article_title_2: isEs ? 'Trabajos que se realizan' : 'Treballs que es realitzen',
        article_intro_2: isEs 
            ? 'El catálogo de trabajos que realizamos como su empresa de electricistas de confianza abarca un espectro muy amplio. Cada intervención es llevada a cabo por especialistas con amplia experiencia en el sector:'
            : 'El catàleg de treballs que realitzem com la seva empresa d\'electricistes de confiança abasta un espectre molt ampli. Cada intervenció és duta a terme per especialistes amb àmplia experiència en el sector:',
        feat_1_title: isEs ? 'Instalaciones eléctricas' : 'Instal·lacions elèctriques',
        feat_1_text: isEs 
            ? 'Ejecución de instalaciones eléctricas integrales para obras nuevas, reformas de locales comerciales, oficinas y todo tipo de viviendas residenciales en Reus.'
            : 'Execució d\'instal·lacions elèctriques integrals per a obres noves, reformes de locals comercials, oficines i tota mena d\'habitatges residencials a Reus.',
        feat_2_title: isEs ? 'Reparación de averías eléctricas' : 'Reparació d\'avaries elèctriques',
        feat_2_text: isEs 
            ? 'Solución a cortocircuitos, derivaciones, apagones, fallos en diferenciales o enchufes estropeados. Diagnóstico rápido para minimizar tiempos de parada.'
            : 'Solució a curtcircuits, derivacions, apagades, fallades en diferencials o endolls malmesos. Diagnòstic ràpid per minimitzar temps de parada.',
        feat_3_title: isEs ? 'Cuadros eléctricos' : 'Quadres elèctrics',
        feat_3_text: isEs 
            ? 'Renovación, modernización y saneamiento de cuadros eléctricos obsoletos. Reorganización de magnetotérmicos y diferenciales para mayor seguridad.'
            : 'Renovació, modernització i sanejament de quadres elèctrics obsolets. Reorganització de magnetotèrmics i diferencials per a més seguretat.',
        feat_4_title: isEs ? 'Iluminación LED' : 'Il·luminació LED',
        feat_4_text: isEs 
            ? 'Proyectos de eficiencia energética, sustitución de luminarias tradicionales por sistemas LED de bajo consumo para tiendas, naves y comunidades de propietarios.'
            : 'Projectes d\'eficiència energètica, substitució de lluminàries tradicionals per sistemes LED de baix consum per a botigues, naus i comunitats de propietaris.',
        article_title_3: isEs ? 'Zona de servicio: Reus y provincia' : 'Zona de servei: Reus i província',
        p3: isEs
            ? 'Nuestra central de operaciones en instalaciones técnicas nos permite ofrecer cobertura no solo como <strong>electricistas en Reus</strong> capital (Tarragona Centro, polígonos industriales y zonas residenciales), sino también brindar una respuesta ágil a las consultas y necesidades de las poblaciones vecinas. Un gran número de nuestros clientes se encuentran ubicados en:'
            : 'La nostra central d\'operacions en instal·lacions tècniques ens permet oferir cobertura no només com a **electricistes a Reus** capital (Tarragona Centre, polígons industrials i zones residencials), sinó també brindar una resposta àgil a les consultes i necessitats de les poblacions veïnes. Un gran nombre dels nostres clients es troben ubicats a:',
        list_reus: isEs ? '<strong>Reus:</strong> Servicio completo a comunidades, vías comerciales y polígonos.' : '<strong>Reus:</strong> Servei complet a comunitats, vies comercials i polígons.',
        list_tgn: isEs ? '<strong>Tarragona:</strong> Instalaciones para empresas, sector público y particulares.' : '<strong>Tarragona:</strong> Instal·lacions per a empreses, sector públic i particulars.',
        list_cam: isEs ? '<strong>Cambrils y Salou:</strong> Soluciones para hostelería, apartamentos turísticos y restauración.' : '<strong>Cambrils i Salou:</strong> Solucions per a hostaleria, apartaments turístics i restauració.',
        list_valls: isEs ? '<strong>Vila-seca, Valls, Constantí y La Selva del Camp:</strong> Cobertura industrial y soporte técnico continuado.' : '<strong>Vila-seca, Valls, Constantí i La Selva del Camp:</strong> Cobertura industrial i suport tècnic continuat.',
        p3_end: isEs
            ? 'Al contar con técnicos distribuidos por la región, garantizamos desplazamientos puntuales y eficientes. Todo el proceso logístico es coordinado para que tu avería o tu proyecto empiece a avanzar desde el mismo momento en que nos contactas.'
            : 'En comptar amb tècnics distribuïts per la regió, garantim desplaçaments puntuals i eficients. Tot el procés logístic és coordinat perquè la teva avaria o el teu projecte comenci a avançar des del mateix moment en què ens contactes.',
        article_title_4: isEs ? 'Detalles técnicos y normativos' : 'Detalls tècnics i normatius',
        p4: isEs
            ? 'Como instaladores homologados por el Ministerio de Industria, todas nuestras ejecuciones incluyen las garantías legales correspondientes. Realizamos ampliaciones de potencia, emisión de boletines eléctricos (Certificado de Instalación Eléctrica - CIE), legalizaciones y auditorías energéticas. Al trabajar con sistemas trifásicos y monofásicos, estamos capacitados para adecuar la carga térmica y proteger los receptores de tu maquinaria, prolongando así su vida útil. Apostamos por mecanismos de protección líderes en el mercado (como ABB, Schneider y Legrand) asegurando una respuesta de milisegundos ante cualquier sobretensión que se presente en la red de Reus.'
            : 'Com a instal·ladors homologats pel Ministeri d\'Indústria, totes les nostres execucions inclouen les garanties legals corresponents. Realitzem ampliacions de potència, emissió de butlletins elèctrics (Certificat d\'Instal·lació Elèctrica - CIE), legalitzacions i auditories energètiques. En treballar amb sistemes trifàsics i monofàsics, estem capacitats per adequar la càrrega tèrmica i protegir els receptors de la teva maquinària, prolongant així la seva vida útil. Apostem per mecanismes de protecció líders al mercat (com ABB, Schneider i Legrand) assegurant una resposta de mil·lisegons davant qualsevol sobretensió que es presenti a la xarxa de Reus.',
        contact_title: isEs ? '¿Necesitas un electricista en Reus?' : 'Necessites un electricista a Reus?',
        contact_text: isEs 
            ? 'Explícanos brevemente tu incidencia o proyecto y nos pondremos en contacto contigo de inmediato para ofrecerte un presupuesto a medida sin compromiso.'
            : 'Explica\'ns breument la teva incidència o projecte i ens posarem en contacte amb tu immediatament per oferir-te un pressupost a mida sense compromís.',
        call_pref: isEs ? 'O si lo prefieres, llámanos directamente:' : 'O si ho prefereixes, truca\'ns directament:'
    };

    return `
    <main class="page-content">
      <section class="service-hero">
        <div class="container service-hero__content">
          <div class="hero__col-text">
            <span class="hero__badge"><span style="display:inline-block;width:1rem;">${icons.zap}</span> ${content.badge}</span>
            <h1 class="hero__title">
              ${content.title}
            </h1>
            <p class="hero__subtitle">
              ${content.subtitle}
            </p>
            <div class="hero__buttons">
              <a href="#contacto-rapido" class="btn btn--primary btn--lg">
                ${content.btn_budget}
              </a>
              <a href="tel:+34640939116" class="btn btn--secondary btn--lg" onclick="trackEvent('click_phone','640939116')">
                ${icons.phone} 640 939 116
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container container--sm">
            <div class="seo-article">
                <h2>${content.article_title_1}</h2>
                <p>${content.p1}</p>
                <p>${content.p2}</p>

                <div style="margin: var(--space-8) 0; border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-lg);">
                    <img src="/images/seo/electricista-reus.jpg" alt="Electricista en Reus trabajando en cuadro eléctrico" style="width: 100%; height: 400px; object-fit: cover;" />
                </div>

                <h2>${content.article_title_2}</h2>
                <p>${content.article_intro_2}</p>
                <div class="grid grid--2" style="margin: var(--space-6) 0;">
                    <div class="card card--feature" style="padding: var(--space-4);text-align:left;">
                        <h4 style="margin-bottom:var(--space-2);display:flex;align-items:center;gap:var(--space-2)">
                          <span style="color:var(--color-primary);width:20px">${icons.zap}</span> ${content.feat_1_title}
                        </h4>
                        <p style="font-size:0.875rem;margin:0">${content.feat_1_text}</p>
                    </div>
                    <div class="card card--feature" style="padding: var(--space-4);text-align:left;">
                        <h4 style="margin-bottom:var(--space-2);display:flex;align-items:center;gap:var(--space-2)">
                          <span style="color:var(--color-primary);width:20px">${icons.tool}</span> ${content.feat_2_title}
                        </h4>
                        <p style="font-size:0.875rem;margin:0">${content.feat_2_text}</p>
                    </div>
                    <div class="card card--feature" style="padding: var(--space-4);text-align:left;">
                        <h4 style="margin-bottom:var(--space-2);display:flex;align-items:center;gap:var(--space-2)">
                          <span style="color:var(--color-primary);width:20px">${icons.clipboard}</span> ${content.feat_3_title}
                        </h4>
                        <p style="font-size:0.875rem;margin:0">${content.feat_3_text}</p>
                    </div>
                    <div class="card card--feature" style="padding: var(--space-4);text-align:left;">
                        <h4 style="margin-bottom:var(--space-2);display:flex;align-items:center;gap:var(--space-2)">
                          <span style="color:var(--color-primary);width:20px">${icons.star}</span> ${content.feat_4_title}
                        </h4>
                        <p style="font-size:0.875rem;margin:0">${content.feat_4_text}</p>
                    </div>
                </div>

                <h2>${content.article_title_3}</h2>
                <p>${content.p3}</p>
                <ul class="process__list" style="margin-bottom: var(--space-6);">
                    <li>${content.list_reus}</li>
                    <li>${content.list_tgn}</li>
                    <li>${content.list_cam}</li>
                    <li>${content.list_valls}</li>
                </ul>
                <p>${content.p3_end}</p>

                <h3>${content.article_title_4}</h3>
                <p>${content.p4}</p>
            </div>
        </div>
      </section>

      <section class="section section--alt" id="contacto-rapido">
        <div class="container container--sm">
          <div class="contact-box" style="background:var(--color-white); padding:var(--space-8); border-radius:var(--radius-xl); box-shadow:var(--shadow-xl); border:1px solid var(--color-border-light);">
            <div style="text-align:center; margin-bottom:var(--space-6);">
                <h3 style="color:var(--color-primary); font-size:var(--text-2xl); margin-bottom:var(--space-2);">${content.contact_title}</h3>
                <p style="color:var(--color-secondary);">${content.contact_text}</p>
            </div>
            ${renderContactForm('seo-reus-electricista-form')}
            <div style="text-align:center; margin-top:var(--space-6); padding-top:var(--space-4); border-top:1px solid var(--color-border-light);">
                <span style="color:var(--color-text-muted); font-size:var(--text-sm);">${content.call_pref}</span>
                <br>
                <a href="tel:+34640939116" style="display:inline-block; font-size:var(--text-xl); font-weight:bold; color:var(--color-primary); margin-top:var(--space-2); text-decoration:none;">
                    ${icons.phone} 640 939 116
                </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

export function initElectricistaReus() {
    initContactForm('seo-reus-electricista-form');

    // Custom scrolling
    document.querySelectorAll('a[href="#contacto-rapido"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}
