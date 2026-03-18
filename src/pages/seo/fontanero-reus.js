import { icons } from '../../icons.js';
import { renderContactForm, initContactForm } from '../../components/contact-form.js';
import { i18n } from '../../i18n.js';

export function renderFontaneroReus() {
    const isEs = i18n.lang === 'es';

    const content = {
        badge: isEs ? 'Fontanería' : 'Fontaneria',
        title: isEs ? 'Fontaneros en <span>Reus</span>' : 'Fontaners a <span>Reus</span>',
        subtitle: isEs 
            ? 'Expertos en instalaciones de tuberías, reparación de fugas de agua y mantenimiento de sistemas sanitarios en Reus y toda la provincia de Tarragona. Servicio rápido, limpio y garantizado para hogares y empresas.'
            : 'Experts en instal·lacions de canonades, reparació de fugues d\'aigua i manteniment de sistemes sanitaris a Reus i tota la província de Tarragona. Servei ràpid, net i garantit per a llar i empreses.',
        btn_budget: isEs ? 'Solicitar presupuesto' : 'Sol·licitar pressupost',
        article_title_1: isEs ? 'Servicios ofrecidos de fontanería en Reus' : 'Serveis oferts de fontaneria a Reus',
        p1: isEs
            ? 'En INSTALACIONES DCV 2024 entendemos que los problemas relacionados con el suministro de agua y los desagües no pueden esperar. Por eso, hemos desplegado un servicio técnico especializado de <strong>fontanería en Reus</strong> capaz de atender cualquier incidencia, reforma o instalación nueva con la máxima celeridad. Tanto si necesitas una instalación completa para una obra nueva en el centro de Reus o en poblaciones vecinas como Cambrils, Salou y Tarragona, como si requieres solventar una rotura en una comunidad de vecinos, contamos con la experiencia necesaria.'
            : 'A INSTALACIONES DCV 2024 entenem que els problemes relacionats amb el subministrament d\'aigua i els desguassos no poden esperar. Per això, hem desplegat un servei tècnic especialitzat de **fontaneria a Reus** capaç d\'atendre qualsevol incidència, reforma o instal·lació nova amb la màxima celeritat. Tant si necessites una instal·lació completa per a una obra nova al centre de Reus o en poblacions veïnes com Cambrils, Salou i Tarragona, com si requereixes solucionar una trencadissa en una comunitat de veïns, comptem amb l\'experiència necessària.',
        p2: isEs
            ? 'La calidad de los materiales y la precisión técnica de nuestros fontaneros autorizados nos distinguen en el mercado. Ofrecemos servicios que cubren el ciclo integral del agua dentro de instalaciones domésticas, comerciales e industriales en la provincia de Tarragona, asegurando siempre caudales y presiones constantes y previniendo los molestos y perjudicials daños por agua.'
            : 'La qualitat dels materials i la precisió tècnica dels nostres fontaners autoritzats ens distingeixen al mercat. Oferim serveis que cobreixen el cicle integral de l\'aigua dins d\'instal·lacions domèstiques, comercials i industrials a la província de Tarragona, assegurant sempre cabals i pressions constants i prevenint els molests i perjudicials danys per aigua.',
        article_title_2: isEs ? 'Trabajos que se realizan' : 'Treballs que es realitzen',
        article_intro_2: isEs
            ? 'Nuestros especialistas abarcan cualquier rama dentro del oficio de la fontanería. Trabajamos materiales vanguardistas como el cobre, el PEX, el multicapa o el PVC, adaptándonos al diseño de las instalaciones de cada cliente y edificación:'
            : 'Els nostres especialistes abasten qualsevol branca dins de l\'ofici de la fontaneria. Treballem materials avantguardistes com el coure, el PEX, el multicapa o el PVC, adaptant-nos al disseny de les instal·lacions de cada client i edificació:',
        feat_1_title: isEs ? 'Instalación de tuberías' : 'Instal·lació de canonades',
        feat_1_text: isEs
            ? 'Diseño y tendido de redes de suministro de agua potable y sistemas de evacuación para rehabilitaciones de viviendas, baños y cocinas completas.'
            : 'Disseny i estesa de xarxes de subministrament d\'aigua potable i sistemes d\'evacuació per a rehabilitacions d\'habitatges, banys i cuines completes.',
        feat_2_title: isEs ? 'Reparación de fugas' : 'Reparació de fugues',
        feat_2_text: isEs
            ? 'Localización exacta mediante tecnología no invasiva de humedades, filtraciones y reparaciones de roturas urgentes en bajantes y ascendentes.'
            : 'Localització exacta mitjançant tecnologia no invasiva d\'humitats, filtracions i reparacions de trencadisses urgents en baixants i ascendents.',
        feat_3_title: isEs ? 'Instalación de sanitarios' : 'Instal·lació de sanitaris',
        feat_3_text: isEs
            ? 'Cambio de bañera por plato de ducha, montaje de lavabos, inodoros y grifería de diseño, garantizando siempre el sellado perfecto.'
            : 'Canvi de banyera per plat de dutxa, muntatge de lavabos, inodors i aixeteria de disseny, garantint sempre el segellat perfecte.',
        feat_4_title: isEs ? 'Sistemas de agua y bombeo' : 'Sistemes d\'aigua i bombeig',
        feat_4_text: isEs
            ? 'Mantenimiento preventivo de grupos de presión, descalcificadores y sistemas de ósmosis en chalets y locales comerciales.'
            : 'Manteniment preventiu de grups de pressió, descalcificadors i sistemes d\'osmosi en xalets i locals comercials.',
        article_title_3: isEs ? 'Zona de servicio y alcance en la provincia' : 'Zona de servei i abast a la província',
        p3: isEs
            ? 'Nos encontramos estratégicamente situados ofreciendo un inmejorable alcance. No solo ejercemos como <strong>fontaneros en Reus</strong> capital, dando servicio al Baix Camp y toda su zona de influencia organizativa, además operamos con fluidez en las siguientes ubicaciones de Tarragona:'
            : 'Ens trobem estratègicament situats oferint un abast immillorable. No només exercim com a **fontaners a Reus** capital, donant servei al Baix Camp i tota la seva zona d\'influència organitzativa, a més operem amb fluïdesa a les següents ubicacions de Tarragona:',
        list_reus: isEs ? '<strong>Reus y Valls:</strong> Proyectos residenciales, reparaciones en locales comerciales a pie de calle e industria.' : '<strong>Reus i Valls:</strong> Projectes residencials, reparacions en locals comercials a peu de carrer i indústria.',
        list_tgn: isEs ? '<strong>Tarragona:</strong> Instalaciones para la hostelería, bloques de edificios y sector primario.' : '<strong>Tarragona:</strong> Instal·lacions per a l\'hostaleria, blocs d\'edificis i sector primari.',
        list_cam: isEs ? '<strong>Cambrils y Salou:</strong> Puestas a punto vacacionales, campings y prevención de fugas pre-temporada.' : '<strong>Cambrils i Salou:</strong> Posades a punt de vacances, càmpings i prevenció de fugues pre-temporada.',
        list_valls: isEs ? '<strong>Vila-seca, La Selva del Camp y Constantí:</strong> Cobertura industrial de alto nivel y revisiones periódicas.' : '<strong>Vila-seca, La Selva del Camp i Constantí:</strong> Cobertura industrial d\'alt nivell i revisions periòdiques.',
        article_title_4: isEs ? 'Detalles técnicos' : 'Detalls tècnics',
        p4: isEs
            ? 'Nuestros trabajos cumplen rigurosamente con el Código Técnico de la Edificación (CTE) en sus manuales referentes a la Salubridad y Ahorro Energetico. En DCV 2024 ejecutamos soldaduras estancas de altas exigencias, termofusiones fiables y empalmes por compresión garantizados contra los molestos goteos. Antes de dar por finalizada la obra nueva o la reparación de fontanería, todo el equipo se somete a diversas pruebas hidrostáticas monitorizadas, asegurándonos así de que la estanqueidad y presión de tus redes de agua fría o Calefacción ACS rozan la invulnerabilidad total en todas tus plantas hidráulicas en Reus.'
            : 'Els nostres treballs compleixen rigorosament amb el Codi Tècnic de l\'Edificació (CTE) en els seus manuals referents a la Salubritat i Estalvi Energètic. A DCV 2024 executem soldadures estanques d\'altes exigències, termofusions fiables i empalmaments per compressió garantits contra els molests goteigs. Abans de donar per finalitzada l\'obra nova o la reparació de fontaneria, tot l\'equip se sotmet a diverses proves hidrostàtiques monitoritzades, assegurant-nos així que l\'estanquitat i pressió de les teves xarxes d\'aigua freda o Calefacció ACS freguen la invulnerabilitat total en totes les teves plantes hidràuliques a Reus.',
        contact_title: isEs ? '¿Necesitas un fontanero en Reus?' : 'Necessites un fontaner a Reus?',
        contact_text: isEs 
            ? 'Escríbenos y explícanos qué necesitas. Te ofrecemos presupuesto transparente y sin compromiso con la máxima rapidez.'
            : 'Escriu-nos i explica\'ns què necessites. T\'oferim pressupost transparent i sense compromís amb la màxima rapidesa.',
        call_pref: isEs ? 'O si te urge la reparación, llámanos directamente:' : 'O si t\'urgeix la reparació, truca\'ns directament:'
    };

    return `
    <main class="page-content">
      <section class="service-hero">
        <div class="container service-hero__content">
          <div class="hero__col-text">
            <span class="hero__badge"><span style="display:inline-block;width:1rem;">${icons.droplet}</span> ${content.badge}</span>
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
                    <img src="/images/seo/fontanero-reus.jpg" alt="Fontanero profesional en Reus instalando tuberías" style="width: 100%; height: 400px; object-fit: cover;" />
                </div>

                <h2>${content.article_title_2}</h2>
                <p>${content.article_intro_2}</p>
                <div class="grid grid--2" style="margin: var(--space-6) 0;">
                    <div class="card card--feature" style="padding: var(--space-4);text-align:left;">
                        <h4 style="margin-bottom:var(--space-2);display:flex;align-items:center;gap:var(--space-2)">
                          <span style="color:var(--color-primary);width:20px">${icons.droplet}</span> ${content.feat_1_title}
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
                          <span style="color:var(--color-primary);width:20px">${icons.home}</span> ${content.feat_3_title}
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
            ${renderContactForm('seo-reus-fontanero-form')}
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

export function initFontaneroReus() {
    initContactForm('seo-reus-fontanero-form');

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
