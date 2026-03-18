// ============================================
// I18N – Internationalization System
// ============================================

const translations = {
    es: {
        // Navigation
        nav_home: 'Inicio',
        nav_services: 'Servicios',
        nav_contact: 'Contacto',
        nav_commercial: 'Contacto Comercial',
        nav_electrician: 'Electricidad Industrial',
        nav_plumber: 'Fontanería y ACS',
        nav_ac: 'Climatización',
        nav_telecom: 'Telecomunicaciones',
        
        // Navigation Subtitles
        nav_elec_sub: 'Instalaciones eléctricas de baja tensión',
        nav_plumber_sub: 'Sistemas de agua y ACS',
        nav_ac_sub: 'Climatización y extracción industrial',
        nav_telecom_sub: 'Redes de datos y fibra óptica',

        // Header/Footer
        authorized_installer: 'Empresa Instaladora Autorizada',
        footer_privacy: 'Política de Privacidad',
        footer_cookies: 'Política de Cookies',
        footer_legal: 'Aviso Legal',
        footer_rights: 'Todos los derechos reservados.',
        footer_desc: 'Ingeniería e instalaciones integrales: sistemas eléctricos, fluidos, climatización y domótica para el sector empresarial y particular en la provincia de Tarragona.',
        footer_local_service: 'Servicio Local',
        footer_company: 'Empresa',
        footer_contact_op: 'Contacto Operativo',
        footer_contact_info: 'Información de Contacto',
        footer_privacy_short: 'Privacidad',
        
        // Localized Footer Links
        footer_elec_reus: 'Electricistas Reus',
        footer_font_reus: 'Fontaneros Reus',
        footer_ac_reus: 'Aire Acondicionado Reus',
        footer_elec_cambrils: 'Electricistas Cambrils',

        // Home Hero
        hero_title: 'Instalaciones profesionales en <span>Tarragona</span>',
        hero_subtitle: 'Instalaciones de electricidad, fontanería, aire acondicionado y telecomunicaciones para viviendas, empresas y locales comerciales en Tarragona y alrededores.',
        hero_badge: 'Empresa Instaladora Autorizada',
        hero_cta: 'Solicitar presupuesto',
        hero_form_title: 'Solicita tu presupuesto',
        hero_form_name: 'Nombre',
        hero_form_phone: 'Teléfono',
        hero_form_service: 'Servicio que necesitas',
        hero_form_message: 'Mensaje breve (opcional)',
        hero_form_placeholder_name: 'Tu nombre',
        hero_form_placeholder_phone: 'Tu teléfono',
        hero_form_placeholder_service: 'Selecciona una opción...',
        hero_form_placeholder_message: '¿En qué podemos ayudarte?',
        hero_form_sending: 'Enviando...',
        hero_form_success: '¡Solicitud enviada correctamente!',
        hero_form_success_text: 'Nos pondremos en contacto contigo lo antes posible usando los datos proporcionados.',

        // Contact Page
        contact_hero_badge: 'Contacto Departamental',
        contact_hero_title: 'Contacta con nosotros',
        contact_hero_subtitle: '¿Necesitas un presupuesto o tienes alguna consulta? Estamos a tu disposición. Rellena el formulario o llámanos directamente.',
        contact_info_title: 'Información de contacto',
        contact_address_label: 'Dirección Operativa',
        contact_phones_label: 'Teléfonos',
        contact_email_label: 'Email corporativo',
        contact_commercial_label: 'Atención Comercial',
        contact_technical_label: 'Dirección Técnica',
        contact_hours_label: 'Horario de Atención',
        contact_hours_value: 'Lunes a Viernes: 08:00 – 19:00',
        contact_location_title: 'Nuestra oficina en Reus',
        contact_location_subtitle: 'Estamos ubicados en el centro de Reus, con fácil acceso desde Tarragona y toda la comarca.',
        contact_map_badge: 'Ubicación',
        contact_whatsapp_btn: 'WhatsApp Técnico',

        // Form Labels
        form_label_name: 'Nombre *',
        form_placeholder_name: 'Tu nombre completo',
        form_label_phone: 'Teléfono *',
        form_placeholder_phone: 'Tu teléfono',
        form_label_email: 'Email *',
        form_placeholder_email: 'tu@email.com',
        form_label_service: 'Servicio *',
        form_option_select: 'Selecciona un servicio',
        form_label_message: 'Mensaje',
        form_placeholder_message: 'Cuéntanos qué necesitas...',
        form_privacy_text: 'He leído y acepto la <a href="#/politica-privacidad">política de privacidad</a> *',
        form_commercial_text: 'Acepto recibir comunicaciones comerciales de INSTALACIONES DCV 2024',
        form_btn_submit: 'Solicitar Presupuesto Gratis',
        form_error_name: 'El nombre es obligatorio',
        form_error_phone: 'El teléfono es obligatorio',
        form_error_email: 'Introduce un email válido',
        form_error_service: 'Selecciona un servicio',
        form_error_privacy: 'Debes aceptar la política de privacidad',
        form_modal_title: '¡Solicitud enviada con éxito!',
        form_modal_text: 'Nos pondremos en contacto contigo lo antes posible. Gracias por confiar en INSTALACIONES DCV 2024.',
        form_modal_close: 'Cerrar',

        // Services Names
        service_electricity: 'Electricidad',
        service_plumbing: 'Fontanería',
        service_ac: 'Aire acondicionado',
        service_telecom: 'Telecomunicaciones',
        service_other: 'Otro',

        // 404 Page
        error_404_title: 'Página no encontrada',
        error_404_text: 'Lo sentimos, la página que buscas no existe o ha sido movida. Puedes volver al inicio o explorar nuestros servicios.',
        error_404_btn_home: 'Volver al inicio',
        error_404_btn_services: 'Ver servicios',

        // Home Services
        services_section_badge: 'Áreas de Especialización',
        services_section_title: 'Nuestros Servicios de Instalación',
        services_section_subtitle: 'Soluciones técnicas integrales con los más altos estándares de calidad y seguridad del sector.',
        services_view_details: 'Ver detalles',

        // Home Why Us
        why_section_badge: 'Garantía Corporativa',
        why_section_title: 'Solvencia y Profesionalidad Instaladora',
        why_section_subtitle: 'Empresa consolidada regida por estrictos protocolos de actuación técnica y prevención de riesgos.',
        why_feature_1_title: 'Empresa Consolidada',
        why_feature_1_text: 'Infraestructura propia para afrontar proyectos llave en mano.',
        why_feature_2_title: 'Seguridad y PRL',
        why_feature_2_text: 'Estricto cumplimiento normativo y de Prevención de Riesgos Laborales.',
        why_feature_3_title: 'Ejecución Técnica',
        why_feature_3_text: 'Equipos de trabajo cualificados con certificaciones de instalador.',
        why_feature_4_title: 'Legalización',
        why_feature_4_text: 'Gestión íntegra de boletines y dictámenes correspondientes.',

        // Common
        call_now: 'Llamar Ahora',
        request_quote: 'Solicitar Presupuesto',
        send: 'Enviar',
        message: 'Mensaje',
        form_name: 'Nombre',
        form_email: 'Email',
        form_phone: 'Teléfono',
        form_service: 'Servicio',
        form_message: 'Mensaje',
        form_required: 'Campo requerido',
        form_invalid_email: 'Email no válido',
        
        // SEO Meta
        meta_home_title: 'INSTALACIONES DCV 2024 | Electricistas, Fontaneros y Aire Acondicionado en Tarragona',
        meta_home_desc: 'Empresa de instalaciones eléctricas, fontanería, aire acondicionado y telecomunicaciones en Tarragona y Reus. Presupuestos sin compromiso.',
        meta_elec_title: 'Electricistas en Tarragona | INSTALACIONES DCV 2024',
        meta_elec_desc: 'Empresa de instalaciones eléctricas en Tarragona. Electricistas profesionales para viviendas, comercios e industrias. Boletines, cuadros eléctricos y más.',
        meta_font_title: 'Fontaneros en Tarragona y Reus | INSTALACIONES DCV 2024',
        meta_font_desc: 'Servicios de fontanería profesional en Tarragona y Reus. Instalación y reparación de tuberías, sanitarios y sistemas de agua.',
        meta_ac_title: 'Instalación Aire Acondicionado Tarragona | INSTALACIONES DCV 2024',
        meta_ac_desc: 'Instaladores de aire acondicionado en Tarragona y Reus. Split, multisplit, mantenimiento and reparación. Presupuesto sin compromiso.',
        meta_telecom_title: 'Instaladores de Telecomunicaciones en Tarragona | INSTALACIONES DCV 2024',
        meta_telecom_desc: 'Instalación de redes, wifi empresarial, fibra óptica e infraestructura de telecomunicaciones en Tarragona y Reus.',
        meta_contact_title: 'Contacto | INSTALACIONES DCV 2024',
        meta_contact_desc: 'Contacta con INSTALACIONES DCV 2024. Solicita tu presupuesto sin compromiso. Estamos en Reus, Tarragona.',
        meta_legal_title: 'Aviso Legal | INSTALACIONES DCV 2024',
        meta_legal_desc: 'Aviso legal de INSTALACIONES DCV 2024.',
        meta_privacy_title: 'Política de Privacidad | INSTALACIONES DCV 2024',
        meta_privacy_desc: 'Política de privacidad de INSTALACIONES DCV 2024.',
        meta_cookies_title: 'Política de Cookies | INSTALACIONES DCV 2024',
        meta_cookies_desc: 'Política de cookies de INSTALACIONES DCV 2024.',
        meta_404_title: 'Página no encontrada | INSTALACIONES DCV 2024',
        meta_404_desc: 'La página que buscas no existe.',
        meta_local_reus_elec_title: 'Electricistas en Reus | Instalaciones Eléctricas | INSTALACIONES DCV 2024',
        meta_local_reus_elec_desc: 'Electricistas autorizados en Reus. Instalaciones eléctricas, reparación de averías, cuadros y energía LED para empresas y viviendas.',
        meta_local_reus_font_title: 'Fontaneros en Reus | Instalaciones y Averías | INSTALACIONES DCV 2024',
        meta_local_reus_font_desc: 'Servicio de fontanería en Reus. Especialistas en reparaciones urgentes, fugas, instalación de tuberías y sanitarios. Rápido y garantizado.',
        meta_local_reus_ac_title: 'Instalación de Aire Acondicionado en Reus | INSTALACIONES DCV 2024',
        meta_local_reus_ac_desc: 'Especialistas en instalación de aire acondicionado en Reus. Mantenimiento, recarga de gas y sistemas Split Inverter eficientes.',
        meta_local_cambrils_elec_title: 'Electricistas en Cambrils | Averías e Instalaciones | INSTALACIONES DCV 2024',
        meta_local_cambrils_elec_desc: 'Servicio técnico de electricistas en Cambrils y Costa Dorada. Alta urgencias, boletines eléctricos y mantenimiento para hostelería y viviendas.',

        // Home Page Additional
        hero_point_budget: 'Presupuesto sin compromiso',
        hero_point_installers: 'Instaladores cualificados',
        hero_point_area: 'Servicio en Tarragona y alrededores',
        hero_other_integral: 'Otro / Integral',
        
        home_service_elec_title: 'Electricidad',
        home_service_elec_text: 'Instalaciones eléctricas, cuadros, boletines, iluminación LED y reparaciones para viviendas y empresas.',
        home_service_font_title: 'Fontanería',
        home_service_font_text: 'Instalación de tuberías, reparación de fugas, sanitarios y sistemas de agua completos.',
        home_service_ac_title: 'Aire Acondicionado',
        home_service_ac_text: 'Instalación de splits, multisplits, mantenimiento y reparación de equipos de climatización.',
        home_service_telecom_title: 'Telecomunicaciones',
        home_service_telecom_text: 'Instalación de redes, configuración wifi, routers e infraestructura de telecomunicaciones empresarial.',
        
        home_portfolio_badge: 'Portfolio',
        home_portfolio_title: 'Trabajos Realizados',
        home_portfolio_subtitle: 'Muestras representativas de nuestra capacidad de ejecución en instalaciones técnicas recientes.',
        home_portfolio_cat_elec: 'Electricidad Industrial',
        home_portfolio_item_elec: 'Renovación de Cuadro Eléctrico Principal',
        home_portfolio_cat_ac: 'Climatización',
        home_portfolio_item_ac: 'Instalación de Conductos Oficina Central',
        home_portfolio_cat_font: 'Fontanería',
        home_portfolio_item_font: 'Acometida General de Agua Edificio Residencial',
        
        home_coverage_badge: 'Cobertura',
        home_coverage_title: '¿Qué instalamos?',
        home_coverage_subtitle: 'Experiencia probada en el montaje y legalización de sistemas complejos.',
        home_coverage_item_elec: 'Electricidad P.T.',
        home_coverage_item_data: 'Datos y Voz',
        home_coverage_item_water: 'Fluidos y Agua',
        home_coverage_item_ac: 'Climatización',
        home_coverage_list_elec: '<li>Cuadros generales</li><li>Iluminación interior/exterior</li>',
        home_coverage_list_data: '<li>Sistemas sobre Rack</li><li>Bandejas de canalización</li>',
        home_coverage_list_water: '<li>Grupos de presión</li><li>Desagües insonorizados</li>',
        home_coverage_list_ac: '<li>Equipos VRV/VRF</li><li>Recuperadores de calor</li>',
        
        home_process_badge: 'Metodología',
        home_process_title: 'Flujo de Trabajo Operativo',
        home_process_step1_title: 'Toma de Datos y Estudio',
        home_process_step1_text: 'Análisis in situ, dimensionamiento y propuesta técnico-económica.',
        home_process_step2_title: 'Planificación y Replanteo',
        home_process_step2_text: 'Asignación de recursos, acopio de materiales y marcaje de trazados.',
        home_process_step3_title: 'Ejecución y Entrega',
        home_process_step3_text: 'Instalación, pruebas en carga, puesta en marcha y documentación Final de Obra.',
        
        home_area_badge: 'Alcance Geográfico',
        home_area_title: 'Área de Actuación en la Provincia de Tarragona',
        
        home_cta_title: 'Proyecto Técnico o Mantenimiento',
        home_cta_text: 'Contacte con el departamento de proyectos para estudiar la viabilidad de su instalación.',
        
        home_departament_title: 'Contacto Departamental',
        home_departament_text: 'Para licitaciones, ofertas a constructoras o proyectos particulares.',
    },
    ca: {
        // Navigation
        nav_home: 'Inici',
        nav_services: 'Serveis',
        nav_contact: 'Contacte',
        nav_commercial: 'Contacte Comercial',
        nav_electrician: 'Electricitat Industrial',
        nav_plumber: 'Fontaneria i ACS',
        nav_ac: 'Climatització',
        nav_telecom: 'Telecomunicacions',
        
        // Navigation Subtitles
        nav_elec_sub: 'Instal·lacions elèctriques de baixa tensió',
        nav_plumber_sub: 'Sistemes d\'aigua i ACS',
        nav_ac_sub: 'Climatització i extracció industrial',
        nav_telecom_sub: 'Xarxes de dades i fibra òptica',

        // Header/Footer
        authorized_installer: 'Empresa Instal·ladora Autoritzada',
        footer_privacy: 'Política de Privadesa',
        footer_cookies: 'Política de Cookies',
        footer_legal: 'Avís Legal',
        footer_rights: 'Tots els drets reservats.',
        footer_desc: 'Enginyeria i instal·lacions integrals: sistemes elèctrics, fluids, climatització i domòtica per al sector empresarial i particular a la província de Tarragona.',
        footer_local_service: 'Servei Local',
        footer_company: 'Empresa',
        footer_contact_op: 'Contacte Operatiu',
        footer_contact_info: 'Informació de Contacte',
        footer_privacy_short: 'Privadesa',
        
        // Localized Footer Links
        footer_elec_reus: 'Electricistes Reus',
        footer_font_reus: 'Fontaners Reus',
        footer_ac_reus: 'Aire Condicionat Reus',
        footer_elec_cambrils: 'Electricistes Cambrils',

        // Home Hero
        hero_title: 'Instal·lacions professionals a <span>Tarragona</span>',
        hero_subtitle: 'Instal·lacions d\'electricitat, fontaneria, aire acondicionat i telecomunicacions per a habitatges, empreses i locals comercials a Tarragona i voltants.',
        hero_badge: 'Empresa Instal·ladora Autoritzada',
        hero_cta: 'Sol·licitar pressupost',
        hero_form_title: 'Sol·licita el teu pressupost',
        hero_form_name: 'Nom',
        hero_form_phone: 'Telèfon',
        hero_form_service: 'Servei que necessites',
        hero_form_message: 'Missatge breu (opcional)',
        hero_form_placeholder_name: 'El teu nom',
        hero_form_placeholder_phone: 'El teu telèfon',
        hero_form_placeholder_service: 'Selecciona una opció...',
        hero_form_placeholder_message: 'Com et podem ajudar?',
        hero_form_sending: 'Enviant...',
        hero_form_success: 'Sol·licitud enviada correctament!',
        hero_form_success_text: 'Ens posarem en contacte amb tu el més aviat possible utilitzant les dades proporcionades.',

        // Contact Page
        contact_hero_badge: 'Contacte Departamental',
        contact_hero_title: 'Contacta amb nosaltres',
        contact_hero_subtitle: 'Necessites un pressupost o tens alguna consulta? Estem a la teva disposició. Omple el formulari o truca\'ns directament.',
        contact_info_title: 'Informació de contacte',
        contact_address_label: 'Direcció Operativa',
        contact_phones_label: 'Telèfons',
        contact_email_label: 'Email corporatiu',
        contact_commercial_label: 'Atenció Comercial',
        contact_technical_label: 'Direcció Tècnica',
        contact_hours_label: 'Horari d\'Atenció',
        contact_hours_value: 'Dilluns a Divendres: 08:00 – 19:00',
        contact_location_title: 'La nostra oficina a Reus',
        contact_location_subtitle: 'Estem ubicats al centre de Reus, amb fàcil accés des de Tarragona i tota la comarca.',
        contact_map_badge: 'Ubicació',
        contact_whatsapp_btn: 'WhatsApp Tècnic',

        // Form Labels
        form_label_name: 'Nom *',
        form_placeholder_name: 'El teu nom complet',
        form_label_phone: 'Telèfon *',
        form_placeholder_phone: 'El teu telèfon',
        form_label_email: 'Email *',
        form_placeholder_email: 'tu@email.com',
        form_label_service: 'Servei *',
        form_option_select: 'Selecciona un servei',
        form_label_message: 'Missatge',
        form_placeholder_message: 'Explica\'ns què necessites...',
        form_privacy_text: 'He llegit i accepto la <a href="#/politica-privacidad">política de privadesa</a> *',
        form_commercial_text: 'Accepto rebre comunicacions comercials d\'INSTALACIONES DCV 2024',
        form_btn_submit: 'Sol·licitar Pressupost Gratis',
        form_error_name: 'El nom és obligatori',
        form_error_phone: 'El telèfon és obligatori',
        form_error_email: 'Introdueix un email vàlid',
        form_error_service: 'Selecciona un servei',
        form_error_privacy: 'Has d\'acceptar la política de privadesa',
        form_modal_title: 'Sol·licitud enviada amb èxit!',
        form_modal_text: 'Ens posarem en contacte amb tu el més aviat possible. Gràcies per confiar en INSTALACIONES DCV 2024.',
        form_modal_close: 'Tancar',

        // Services Names
        service_electricity: 'Electricitat',
        service_plumbing: 'Fontaneria',
        service_ac: 'Aire condicionat',
        service_telecom: 'Telecomunicacions',
        service_other: 'Altre',

        // 404 Page
        error_404_title: 'Pàgina no trobada',
        error_404_text: 'Ho sentim, la pàgina que busques no existeix o ha estat moguda. Pots tornar a l\'inici o explorar els nostres serveis.',
        error_404_btn_home: 'Tornar a l\'inici',
        error_404_btn_services: 'Veure serveis',

        // Home Services
        services_section_badge: 'Àrees d\'Especialització',
        services_section_title: 'Els Nostres Serveis d\'Instal·lació',
        services_section_subtitle: 'Solucions tècniques integrals amb els més alts estàndards de qualitat i seguretat del sector.',
        services_view_details: 'Veure detalls',

        // Home Why Us
        why_section_badge: 'Garantia Corporativa',
        why_section_title: 'Solvència i Professionalitat Instal·ladora',
        why_section_subtitle: 'Empresa consolidada regida per estrictes protocols d\'actuació tècnica i prevenció de riscos.',
        why_feature_1_title: 'Empresa Consolidada',
        why_feature_1_text: 'Infraestructura pròpia per afrontar proyectes clau en mà.',
        why_feature_2_title: 'Seguretat i PRL',
        why_feature_2_text: 'Estricte compliment normatiu i de Prevenció de Riscos Laborals.',
        why_feature_3_title: 'Execució Tècnica',
        why_feature_3_text: 'Equips de treball qualificats amb certificacions d\'instal·lador.',
        why_feature_4_title: 'Legalització',
        why_feature_4_text: 'Gestió íntegra de boletins i dictàmens corresponents.',

        // Common
        call_now: 'Trucar ara',
        request_quote: 'Sol·licitar pressupost',
        send: 'Enviar',
        message: 'Missatge',
        form_name: 'Nom',
        form_email: 'Email',
        form_phone: 'Telèfon',
        form_service: 'Servei',
        form_message: 'Missatge',
        form_required: 'Camp requerit',
        form_invalid_email: 'Email no vàlid',
        
        // SEO Meta
        meta_home_title: 'INSTALACIONES DCV 2024 | Electricistes, Fontaners i Aire Condicionat a Tarragona',
        meta_home_desc: 'Empresa d\'instal·lacions elèctriques, fontaneria, aire condicionat i telecomunicacions a Tarragona i Reus. Pressupostos sense compromís.',
        meta_elec_title: 'Electricistes a Tarragona | INSTALACIONES DCV 2024',
        meta_elec_desc: 'Empresa d\'instal·lacions elèctriques a Tarragona. Electricistes professionals per a habitatges, comerços i indústries. Butlletins, quadres elèctrics i més.',
        meta_font_title: 'Fontaners a Tarragona i Reus | INSTALACIONES DCV 2024',
        meta_font_desc: 'Serveis de fontaneria professional a Tarragona i Reus. Instal·lació i reparació de canonades, sanitaris i sistemes d\'aigua.',
        meta_ac_title: 'Instal·lació Aire Condicionat Tarragona | INSTALACIONES DCV 2024',
        meta_ac_desc: 'Instal·ladors d\'aire condicionat a Tarragona i Reus. Split, multisplit, manteniment i reparació. Pressupost sense compromís.',
        meta_telecom_title: 'Instal·ladors de Telecomunicacions a Tarragona | INSTALACIONES DCV 2024',
        meta_telecom_desc: 'Instal·lació de xarxes, wifi empresarial, fibra òptica i infraestructura de telecomunicacions a Tarragona i Reus.',
        meta_contact_title: 'Contacte | INSTALACIONES DCV 2024',
        meta_contact_desc: 'Contacta amb INSTALACIONES DCV 2024. Sol·licita el teu pressupost sense compromís. Estem a Reus, Tarragona.',
        meta_legal_title: 'Avís Legal | INSTALACIONES DCV 2024',
        meta_legal_desc: 'Avís legal d\'INSTALACIONES DCV 2024.',
        meta_privacy_title: 'Política de Privadesa | INSTALACIONES DCV 2024',
        meta_privacy_desc: 'Política de privadesa d\'INSTALACIONES DCV 2024.',
        meta_cookies_title: 'Política de Cookies | INSTALACIONES DCV 2024',
        meta_cookies_desc: 'Política de cookies d\'INSTALACIONES DCV 2024.',
        meta_404_title: 'Pàgina no trobada | INSTALACIONES DCV 2024',
        meta_404_desc: 'La pàgina que busques no existeix.',
        meta_local_reus_elec_title: 'Electricistes a Reus | Instal·lacions Elèctriques | INSTALACIONES DCV 2024',
        meta_local_reus_elec_desc: 'Electricistes autoritzats a Reus. Instal·lacions elèctriques, reparació d\'avaries, quadres i energia LED per a empreses i habitatges.',
        meta_local_reus_font_title: 'Fontaners a Reus | Instal·lacions i Avaries | INSTALACIONES DCV 2024',
        meta_local_reus_font_desc: 'Servei de fontaneria a Reus. Especialistes en reparacions urgents, fugues, instal·lació de canonades i sanitaris. Ràpid i garantit.',
        meta_local_reus_ac_title: 'Instal·lació d\'Aire Condicionat a Reus | INSTALACIONES DCV 2024',
        meta_local_reus_ac_desc: 'Especialistes en instal·lació d\'aire condicionat a Reus. Manteniment, recàrrega de gas i sistemes Split Inverter eficients.',
        meta_local_cambrils_elec_title: 'Electricistes a Cambrils | Avaries i Instal·lacions | INSTALACIONES DCV 2024',
        meta_local_cambrils_elec_desc: 'Servei tècnic d\'electricistes a Cambrils i Costa Daurada. Alta urgències, butlletins elèctrics i manteniment per a hostaleria i habitatges.',

        // Home Page Additional
        hero_point_budget: 'Pressupost sense compromís',
        hero_point_installers: 'Instal·ladors qualificats',
        hero_point_area: 'Servei a Tarragona i voltants',
        hero_other_integral: 'Altre / Integral',
        
        home_service_elec_title: 'Electricitat',
        home_service_elec_text: 'Instal·lacions elèctriques, quadres, butlletins, il·luminació LED i reparacions per a habitatges i empreses.',
        home_service_font_title: 'Fontaneria',
        home_service_font_text: 'Instal·lació de canonades, reparació de fugues, sanitaris i sistemes d\'aigua complets.',
        home_service_ac_title: 'Aire Condicionat',
        home_service_ac_text: 'Instal·lació de splits, multisplits, manteniment i reparació d\'equips de climatització.',
        home_service_telecom_title: 'Telecomunicacions',
        home_service_telecom_text: 'Instal·lació de xarxes, configuració wifi, routers i infraestructura de telecomunicacions empresarial.',
        
        home_portfolio_badge: 'Portfolio',
        home_portfolio_title: 'Treballs Realitzats',
        home_portfolio_subtitle: 'Mostres representatives de la nostra capacitat d\'execució en instal·lacions tècniques recents.',
        home_portfolio_cat_elec: 'Electricitat Industrial',
        home_portfolio_item_elec: 'Renovació de Quadre Elèctric Principal',
        home_portfolio_cat_ac: 'Climatització',
        home_portfolio_item_ac: 'Instal·lació de Conductes Oficina Central',
        home_portfolio_cat_font: 'Fontaneria',
        home_portfolio_item_font: 'Acometida General d\'Aigua Edifici Residencial',
        
        home_coverage_badge: 'Cobertura',
        home_coverage_title: 'Què instal·lem?',
        home_coverage_subtitle: 'Experiència provada en el muntatge i legalització de sistemes complexos.',
        home_coverage_item_elec: 'Electricitat P.T.',
        home_coverage_item_data: 'Dades i Veu',
        home_coverage_item_water: 'Fluids i Aigua',
        home_coverage_item_ac: 'Climatització',
        home_coverage_list_elec: '<li>Quadres generals</li><li>Il·luminació interior/exterior</li>',
        home_coverage_list_data: '<li>Sistemes sobre Rack</li><li>Bandejas de canalització</li>',
        home_coverage_list_water: '<li>Grups de pressió</li><li>Desguassos insonoritzats</li>',
        home_coverage_list_ac: '<li>Equips VRV/VRF</li><li>Recuperadors de calor</li>',
        
        home_process_badge: 'Metodologia',
        home_process_title: 'Flux de Treball Operatiu',
        home_process_step1_title: 'Presa de Dades i Estudi',
        home_process_step1_text: 'Anàlisi in situ, dimensionament i proposta tècnico-econòmica.',
        home_process_step2_title: 'Planificació i Replantejament',
        home_process_step2_text: 'Assignació de recursos, aplec de materials i marcatge de traçats.',
        home_process_step3_title: 'Execució i Entrega',
        home_process_step3_text: 'Instal·lació, proves en càrrega, posada en marxa i documentació Final d\'Obra.',
        
        home_area_badge: 'Abast Geogràfic',
        home_area_title: 'Àrea d\'Actuació a la Província de Tarragona',
        
        home_cta_title: 'Projecte Tècnic o Manteniment',
        home_cta_text: 'Contacti amb el departament de projectes per estudiar la viabilitat de la seva instal·lació.',
        
        home_departament_title: 'Contacte Departamental',
        home_departament_text: 'Per a licitacions, ofertes a constructores o projectes particulars.',
    }
};

export class I18n {
    constructor() {
        this.lang = localStorage.getItem('lang') || 'es';
        this.t = translations[this.lang];
    }

    setLanguage(lang) {
        if (translations[lang]) {
            this.lang = lang;
            this.t = translations[lang];
            localStorage.setItem('lang', lang);
            window.location.reload();
        }
    }

    get(key) {
        return this.t[key] || key;
    }
}

export const i18n = new I18n();
