import { icons } from '../../icons.js';
import { renderContactForm, initContactForm } from '../../components/contact-form.js';
import { i18n } from '../../i18n.js';

export function renderAireAcondicionadoReus() {
    const isEs = i18n.lang === 'es';

    const content = {
        badge: isEs ? 'Climatización' : 'Climatització',
        title: isEs ? 'Instalación de aire acondicionado en <span>Reus</span>' : 'Instal·lació d\'aire condicionat a <span>Reus</span>',
        subtitle: isEs 
            ? 'Sistemas de climatización eficientes para hogares y negocios en Reus. Especialistas en instalación de equipos, mantenimiento preventivo y reparación urgente de aire acondicionado multimarca.'
            : 'Sistemes de climatització eficients per a llars i negocis a Reus. Especialistes en instal·lació d\'equips, manteniment preventiu i reparació urgent d\'aire condicionat multimarca.',
        btn_budget: isEs ? 'Solicitar presupuesto' : 'Sol·licitar pressupost',
        article_title_1: isEs ? 'Servicios de climatización y aire acondicionado en Reus' : 'Serveis de climatització i aire condicionat a Reus',
        p1: isEs
            ? 'Afrontar los meses de calor intenso en la provincia sin un sistema de climatización adecuado puede afectar seriamente tanto al confort en tu vivienda como al rendimiento y bienestar en espacios de trabajo. INSTALACIONES DCV 2024 te ofrece el servicio más completo y profesional de <strong>instalación de aire acondicionado en Reus</strong>. Somos instaladores técnicos autorizados con años de trayectoria climatizando desde pequeños despachos hasta grandes naves industriales y complejos hoteleros en el área de Tarragona, Cambrils, Salou y Vila-seca.'
            : 'Afrontar els mesos de calor intensa a la província sense un sistema de climatització adequat pot afectar seriosament tant el confort a la teva vivenda com al rendiment i benestar en espais de treball. INSTALACIONES DCV 2024 t\'ofereix el servei més complet i professional d\'**instal·lació d\'aire condicionat a Reus**. Som instal·ladors tècnics autoritzats amb anys de trajectòria climatitzant des de petits despatxos fins a grans naus industrials i complexos hotelers a l\'àrea de Tarragona, Cambrils, Salou i Vila-seca.',
        p2: isEs
            ? 'No nos limitamos a "colgar máquinas". Llevamos a cabo un estudio minucioso de las frigorías necesarias para cada estancia, asegurando que la potencia calorífica y frigorífica de los equipos instalados por nuestros técnicos en Reus es exactamente la que necesitas. De esta forma garantizamos la temperatura perfecta con el máximo nivel de eficiencia energética (certificaciones A++ y A+++), ahorrando drásticamente en la factura eléctrica mes a mes.'
            : 'No ens limitem a "penjar màquines". Duem a terme un estudi minuciós de les frigories necessàries per a cada estança, assegurant que la potència calorífica i frigorífica dels equips instal·lats pels nostres tècnics a Reus és exactament la que necessites. D\'aquesta manera garantim la temperatura perfecta amb el màxim nivell d\'eficiència energètica (certificacions A++ i A+++), estalviant dràsticament en la factura elèctrica mes a mes.',
        article_title_2: isEs ? 'Trabajos de climatización que se realizan' : 'Treballs de climatització que es realitzen',
        article_intro_2: isEs
            ? 'Nuestros sistemas de trabajo abarcan toda la vida útil de un equipo de climatización. Al confiar en INSTALACIONES DCV 2024, estás cubriendo tu instalación de principio a fin, independientemente de la envergadura del proyecto de aire acondicionado propuesto:'
            : 'Els nostres sistemes de treball abasten tota la vida útil d\'un equip de climatització. En confiar en INSTALACIONES DCV 2024, estàs cobrint la teva instal·lació de principi a fi, independentment de l\'envergadura del projecte d\'aire condicionat proposat:',
        feat_1_title: isEs ? 'Instalación de equipos nuevos' : 'Instal·lació d\'equips nous',
        feat_1_text: isEs
            ? 'Montaje de sistemas tipo Split, Multisplit, cassettes para techo técnico y sistemas centralizados de conductos para viviendas u oficinas en Reus.'
            : 'Muntatge de sistemes tipus Split, Multisplit, cassettes per a sostre tècnic i sistemes centralitzats de conductes per a habitatges o oficines a Reus.',
        feat_2_title: isEs ? 'Mantenimiento preventivo' : 'Manteniment preventiu',
        feat_2_text: isEs
            ? 'Revisiones periódicas de filtros, comprobación de presión de gas refrigerante, limpieza de baterías y sanitización contra bacterias y malos olores.'
            : 'Revisions periòdiques de filtres, comprovació de pressió de gas refrigerant, neteja de bateries i sanitització contra bacteris i males olors.',
        feat_3_title: isEs ? 'Reparación de averías' : 'Reparació d\'avaries',
        feat_3_text: isEs
            ? 'Servicio técnico rápido en Reus para corregir goteos internos, fallos en compresores, errores electrónicos o recargas de gas refrigerante autorizadas.'
            : 'Servei tècnic ràpid a Reus per corregir goteigs interns, fallades en compressors, errors electrònics o recàrregues de gas refrigerant autoritzades.',
        feat_4_title: isEs ? 'Asesoría energética' : 'Assessoria energètica',
        feat_4_text: isEs
            ? 'Renovación de flotas de máquinas antiguas e ineficientes por sistemas Inverter modernos que optimizan hasta un 40% el rendimiento.'
            : 'Renovació de flotes de màquines antigues i ineficients per sistemes Inverter moderns que optimitzen fins a un 40% el rendiment.',
        article_title_3: isEs ? 'Zona de servicio ampliada a toda la provincia' : 'Zona de servei ampliada a tota la província',
        p3: isEs
            ? 'La estructura de base operativa nos permite atender velozmente solicitudes como tu empresa de <strong>aire acondicionado en Reus</strong> así como en todo su tejido industrial y municipios aledaños. Entendemos las urgencias climatológicas y la estacionalidad del sector, dotándonos de recursos para servir a:'
            : 'L\'estructura de base operativa ens permet atendre veloçment sol·licituds com la teva empresa d\'**aire condicionat a Reus** així com en tot el seu teixit industrial i municipis del voltant. Entenem les urgències climatològiques i l\'estacionalitat del sector, dotant-nos de recursos per servir a:',
        list_reus: isEs ? '<strong>Reus y La Selva del Camp:</strong> Centrados en la climatización integral residencial e industria ligera.' : '<strong>Reus i La Selva del Camp:</strong> Centrats en la climatització integral residencial i indústria lleugera.',
        list_tgn: isEs ? '<strong>Tarragona Ciudad:</strong> Oficinas y equipamientos corporativos, sistemas VRF y aerotermia urbana.' : '<strong>Tarragona Ciutat:</strong> Oficines i equipaments corporatius, sistemes VRF i aerotèrmia urbana.',
        list_cam: isEs ? '<strong>Salou y Cambrils:</strong> Acondicionamiento urgente y mantenimiento de apartamentos de playa y grandes complejos turísticos de la costa.' : '<strong>Salou i Cambrils:</strong> Acondicionament urgent i manteniment d\'apartaments de platja i grans complexos turístics de la costa.',
        list_valls: isEs ? '<strong>Vila-seca y Valls:</strong> Proyectos en grandes superficies, restaurantes y locales comerciales adaptados al flujo de público continuo.' : '<strong>Vila-seca i Valls:</strong> Projectes en grans superfícies, restaurants i locals comercials adaptats al flux de públic continu.',
        article_title_4: isEs ? 'Detalles técnicos y manipulación de gases' : 'Detalls tècnics i manipulació de gasos',
        p4: isEs
            ? 'La instalación de aire acondicionado es algo muy serio que involucra presiones muy altas y gases fluorados. Todos nuestros operarios instaladores cuentan con la certificación oficial de manipulación de gases fluorados y trabajamos marcas de primera línea como Daikin, Mitsubishi, Fujitsu y Panasonic. Las pruebas de vacío y presurización con nitrógeno que realizamos siempre previas al volcado del refrigerante aseguran conexiones abocardadas perfectas y soldaduras sin poros. Esto alarga la vida de los compresores y protege el medio ambiente al eliminar todas las posibles fugas perjudiciales en las instalaciones desarrolladas en toda la zona de Reus.'
            : 'La instal·lació d\'aire condicionat és una cosa molt seriosa que involucra pressions molt altes i gasos fluorats. Tots els nostres operaris instal·ladors compten amb la certificació oficial de manipulació de gasos fluorats i treballem amb marques de primera línia com Daikin, Mitsubishi, Fujitsu i Panasonic. Les proves de buit i pressurització amb nitrogen que realitzem sempre prèvies a l\'abocament del refrigerant asseguren connexions de campana perfectes i soldadures sense porus. Això allarga la vida dels compressors i protegeix el medi ambient en eliminar totes les possibles fugues perjudicials a les instal·lacions desenvolupades a tota la zona de Reus.',
        contact_title: isEs ? '¿Buscas climatización en Reus?' : 'Busques climatització a Reus?',
        contact_text: isEs 
            ? 'Rellena el formulario y nuestros especialistas en aire acondicionado de Reus estudiarán tu caso para ofrecerte la mejor solución sin compromiso.'
            : 'Omple el formulari i els nostres especialistes en aire condicionat de Reus estudiaran el teu cas per oferir-te la millor solució sense compromís.',
        call_pref: isEs ? 'O si lo prefieres, consúltanos directamente:' : 'O si ho prefereixes, consulta\'ns directament:'
    };

    return `
    <main class="page-content">
      <section class="service-hero">
        <div class="container service-hero__content">
          <div class="hero__col-text">
            <span class="hero__badge"><span style="display:inline-block;width:1rem;">${icons.wind}</span> ${content.badge}</span>
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
                    <img src="/images/seo/aire-acondicionado-reus.jpg" alt="Técnico realizando instalación de aire acondicionado en Reus" style="width: 100%; height: 400px; object-fit: cover;" />
                </div>

                <h2>${content.article_title_2}</h2>
                <p>${content.article_intro_2}</p>
                <div class="grid grid--2" style="margin: var(--space-6) 0;">
                    <div class="card card--feature" style="padding: var(--space-4);text-align:left;">
                        <h4 style="margin-bottom:var(--space-2);display:flex;align-items:center;gap:var(--space-2)">
                          <span style="color:var(--color-primary);width:20px">${icons.wind}</span> ${content.feat_1_title}
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
                          <span style="color:var(--color-primary);width:20px">${icons.tool}</span> ${content.feat_3_title}
                        </h4>
                        <p style="font-size:0.875rem;margin:0">${content.feat_3_text}</p>
                    </div>
                    <div class="card card--feature" style="padding: var(--space-4);text-align:left;">
                        <h4 style="margin-bottom:var(--space-2);display:flex;align-items:center;gap:var(--space-2)">
                          <span style="color:var(--color-primary);width:20px">${icons.shield}</span> ${content.feat_4_title}
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
            ${renderContactForm('seo-reus-aire-form')}
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

export function initAireAcondicionadoReus() {
    initContactForm('seo-reus-aire-form');

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
