import { icons } from '../../icons.js';
import { renderContactForm, initContactForm } from '../../components/contact-form.js';
import { i18n } from '../../i18n.js';

export function renderElectricistaCambrils() {
    const isEs = i18n.lang === 'es';

    const content = {
        badge: isEs ? 'Electricidad' : 'Electricitat',
        title: isEs ? 'Electricistas en <span>Cambrils</span>' : 'Electricistes a <span>Cambrils</span>',
        subtitle: isEs 
            ? 'Expertos en instalaciones eléctricas, mantenimiento y reparación urgente para viviendas de costa, hostelería, comercios e industria en Cambrils y poblaciones adyacentes. Calidad y garantía en la Costa Dorada.'
            : 'Experts en instal·lacions elèctriques, manteniment i reparació urgent per a habitatges de costa, hostaleria, comerços i indústria a Cambrils i poblacions adjacents. Qualitat i garantia a la Costa Daurada.',
        btn_budget: isEs ? 'Solicitar presupuesto' : 'Sol·licitar pressupost',
        article_title_1: isEs ? 'Nuestros servicios como electricistas en Cambrils' : 'Els nostres serveis com a electricistes a Cambrils',
        p1: isEs
            ? 'Cambrils cuenta con un ecosistema inmobiliario y empresarial único en la provincia: una gran cantidad de apartamentos, segundas residencias, un potente sector de restauración, hostelería y comercios de temporada, que requieren de una infraestructura eléctrica robusta y segura. Desde INSTALACIONES DCV 2024, brindamos un servicio técnico de <strong>electricistas en Cambrils</strong> altamente cualificado, capaz de dar respuesta tanto a puestas a punto preventivas antes de la temporada alta, como a averías imprevistas en pleno funcionamiento.'
            : 'Cambrils compta amb un ecosistema immobiliari i empresarial únic a la província: una gran quantitat d\'apartaments, segones residències, un potent sector de restauració, hostaleria i comerços de temporada, que requereixen d\'una infraestructura elèctrica robusta i segura. Des d\'INSTALACIONES DCV 2024, brindem un servei tècnic d\'**electricistes a Cambrils** altament qualificat, capaç de donar resposta tant a posades a punt preventives abans de la temporada alta, com a avaries imprevistes en ple funcionament.',
        p2: isEs
            ? 'Nuestro equipo técnico certificado por el Ministerio de Industria trabaja bajo estrictos parámetros de seguridad (cumpliendo el REBT). Sabemos que un fallo eléctrico en un local de hostelería o en un hogar vacacional causa grandes perjuicios. Por eso garantizamos tiempos de actuación rápidos en Cambrils, Salou y el resto de la Costa Dorada, así como en áreas de interior (Reus, Valls, Vila-seca). Utilizamos materiales duraderos, resistentes a la alta salinidad ambiental y a la carga continuada de los meses estivales.'
            : 'El nostre equip tècnic certificat pel Ministeri d\'Indústria treballa sota estrictes paràmetres de seguretat (complint el REBT). Sabem que una fallada elèctrica en un local d\'hostaleria o en una llar de vacances causa grans perjudicis. Per això garantim temps d\'actuació ràpids a Cambrils, Salou i la resta de la Costa Daurada, així com en àrees d\'interior (Reus, Valls, Vila-seca). Utilitzem materials duradors, resistents a l\'alta salinitat ambiental i a la càrrega continuada dels mesos estivals.',
        article_title_2: isEs ? 'Trabajos técnicos que se realizan' : 'Treballs tècnics que es realitzen',
        article_intro_2: isEs
            ? 'Nuestros instaladores están formados para abordar cualquier escenario eléctrico, aportando soluciones tanto estéticas como de eficiencia y normatividad a pie de obra en Cambrils:'
            : 'Els nostres instal·ladors estan formats per abordar qualsevol escenari elèctric, aportant solucions tant estètiques com d\'eficiència i normativitat a peu d\'obra a Cambrils:',
        feat_1_title: isEs ? 'Instalaciones integrales' : 'Instal·lacions integrals',
        feat_1_text: isEs
            ? 'Renovación del cableado para reformas completas de apartamentos vacacionales, chalets, y nueva instalación en restaurantes a pie de playa.'
            : 'Renovació del cablejat per a reformes completes d\'apartaments vacacionals, xalets, i nova instal·lació en restaurants a peu de platja.',
        feat_2_title: isEs ? 'Boletines y Cuadros' : 'Butlletins i Quadres',
        feat_2_text: isEs
            ? 'Manejo de Boletines Eléctricos (CIE), ampliaciones de potencia, modernización de cuadros y actualización de protecciones termomagnéticas.'
            : 'Gestió de Butlletins Elèctrics (CIE), ampliacions de potència, modernització de quadres i actualització de proteccions termomagnètiques.',
        feat_3_title: isEs ? 'Iluminación técnica LED' : 'Il·luminació tècnica LED',
        feat_3_text: isEs
            ? 'Proyectos luminotécnicos especiales para terrazas, jardines, comercios y fachadas, maximizando al atractivo visual con bajo consumo.'
            : 'Projectes lluminotècnics especials per a terrasses, jardins, comerços i façanes, maximitzant l\'atractiu visual amb baix consum.',
        feat_4_title: isEs ? 'Averías y urgencias' : 'Avaries i urgències',
        feat_4_text: isEs
            ? 'Detección y reparación de apagones súbitos, derivaciones por humedad, salto de diferenciales y cortocircuitos en equipamiento sensible.'
            : 'Detecció i reparació d\'apagades súbdites, derivacions per humitat, salt de diferencials i curtcircuits en equipament sensible.',
        article_title_3: isEs ? 'Zona de actuación en Tarragona y Baix Camp' : 'Zona d\'actuació a Tarragona i Baix Camp',
        p3: isEs
            ? 'Gracias a nuestra base operativa y flota móvil, no operamos de forma aislada, sino que conformamos una red integral de cobertura. Atendemos peticiones directas de <strong>electricista en Cambrils</strong>, pero nuestra zona de influencia se entrelaza de forma ágil con los siguientes puntos estratégicos:'
            : 'Gràcies a la nostra base operativa i flota mòbil, no operem de forma aïllada, sinó que conformem una xarxa integral de cobertura. Atenem peticions directes d\'**electricista a Cambrils**, però la nostra zona d\'influència s\'entrellaça de forma àgil amb els següents punts estratègics:',
        list_reus: isEs ? '<strong>Cambrils y Salou:</strong> Sector servicios, hoteles, campings de primera categoría y viviendas residenciales de costa.' : '<strong>Cambrils i Salou:</strong> Sector serveis, hotels, càmpings de primera categoria i habitatges residencials de costa.',
        list_tgn: isEs ? '<strong>Reus:</strong> Comercios del centro neurálgico, domicilios y polígonos del eje industrial.' : '<strong>Reus:</strong> Comerços del centre neuràlgic, domicilis i polígons de l\'eix industrial.',
        list_cam: isEs ? '<strong>Tarragona y Vila-seca:</strong> Polos de actividad logística, portuaria y áreas metropolitanas.' : '<strong>Tarragona i Vila-seca:</strong> Pols d\'activitat logística, portuària i àrees metropolitanes.',
        list_valls: isEs ? '<strong>La Selva del Camp y Valls:</strong> Proyectos que demandan mayor músculo industrial e infraestructura de base.' : '<strong>La Selva del Camp i Valls:</strong> Projectes que demanden major múscul industrial e infraestructura de base.',
        article_title_4: isEs ? 'Rigurosidad, calidad y garantía' : 'Rigor, qualitat i garantia',
        p4: isEs
            ? 'A diferencia del intrusismo que sufre el sector vacacional, nuestra firma aporta garantías en factura, seguros de responsabilidad civil en regla y un equipo registrado en Industria. Evaluamos las puestas a tierra —críticas en zonas de alta humedad y salinidad marítima—, seccionamos adecuadamente los circuitos para electrodomésticos de gran consumo (A/C, hornos, maquinaria de hostelería) y solo instalamos aparellajes de marcas de reconocido prestigio. Con INSTALACIONES DCV 2024 las instalaciones de tu hogar o tu empresa en Cambrils quedan operativas, seguras y protegidas durante muchos años ante los rigores del clima mediterráneo y la carga eléctrica intensiva estival.'
            : 'A diferència de l\'intrusisme que pateix el sector vacacional, la nostra firma aporta garanties en factura, assegurances de responsabilitat civil en regla i un equip registrat a Indústria. Avaluem les posades a terra —crítiques en zones d\'alta humitat i salinitat marítima—, seccionem adequadament els circuits per a electrodomèstics de gran consum (A/C, forns, maquinària d\'hostaleria) i només instal·lem aparellatges de marques de reconegut prestigi. Amb INSTALACIONES DCV 2024 les instal·lacions de la teva llar o la teva empresa a Cambrils queden operatives, segures i protegides durant molts anys davant els rigors del clima mediterrani i la càrrega elèctrica intensiva estival.',
        contact_title: isEs ? '¿Buscas un electricista en Cambrils?' : 'Busques un electricista a Cambrils?',
        contact_text: isEs 
            ? 'Cuéntanos tu proyecto o avería. Te ofreceremos un diagnóstico experto y un presupuesto sin letra pequeña adaptado a tus necesidades.'
            : 'Explica\'ns el teu projecte o avaria. T\'oferirem un diagnòstic expert i un pressupost sense lletra petita adaptat a les teves necessitats.',
        call_pref: isEs ? 'Llámanos si requieres información inmediata:' : 'Truca\'ns si requereixes informació immediata:'
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
                    <img src="/images/seo/electricista-cambrils.jpg" alt="Electricista realizando mantenimiento e iluminación en Cambrils" style="width: 100%; height: 400px; object-fit: cover;" />
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
                          <span style="color:var(--color-primary);width:20px">${icons.clipboard}</span> ${content.feat_2_title}
                        </h4>
                        <p style="font-size:0.875rem;margin:0">${content.feat_2_text}</p>
                    </div>
                    <div class="card card--feature" style="padding: var(--space-4);text-align:left;">
                        <h4 style="margin-bottom:var(--space-2);display:flex;align-items:center;gap:var(--space-2)">
                          <span style="color:var(--color-primary);width:20px">${icons.star}</span> ${content.feat_3_title}
                        </h4>
                        <p style="font-size:0.875rem;margin:0">${content.feat_3_text}</p>
                    </div>
                    <div class="card card--feature" style="padding: var(--space-4);text-align:left;">
                        <h4 style="margin-bottom:var(--space-2);display:flex;align-items:center;gap:var(--space-2)">
                          <span style="color:var(--color-primary);width:20px">${icons.tool}</span> ${content.feat_4_title}
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
            ${renderContactForm('seo-cambrils-electricista-form')}
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

export function initElectricistaCambrils() {
    initContactForm('seo-cambrils-electricista-form');

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
