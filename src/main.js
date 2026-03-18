// ============================================
// MAIN – App Entry Point
// ============================================
import { i18n } from './i18n.js';
import { Router } from './router.js';
import { renderHeader, initHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderWhatsApp } from './components/whatsapp-button.js';
import { renderCookieBanner, initCookieBanner } from './components/cookie-banner.js';
import { renderMobileBar } from './components/mobile-bar.js';

// Pages
import { renderHome, initHome } from './pages/home.js';
import { renderElectricistas, initElectricistas } from './pages/electricistas.js';
import { renderFontaneros, initFontaneros } from './pages/fontaneros.js';
import { renderAireAcondicionado, initAireAcondicionado } from './pages/aire-acondicionado.js';
import { renderTelecomunicaciones, initTelecomunicaciones } from './pages/telecomunicaciones.js';
import { renderContacto, initContacto } from './pages/contacto.js';
import { renderNotFound } from './pages/not-found.js';
import { renderAvisoLegal } from './pages/legal/aviso-legal.js';
import { renderPoliticaPrivacidad } from './pages/legal/politica-privacidad.js';
import { renderPoliticaCookies } from './pages/legal/politica-cookies.js';

// SEO Local Pages
import { renderElectricistaReus, initElectricistaReus } from './pages/seo/electricista-reus.js';
import { renderFontaneroReus, initFontaneroReus } from './pages/seo/fontanero-reus.js';
import { renderAireAcondicionadoReus, initAireAcondicionadoReus } from './pages/seo/aire-acondicionado-reus.js';
import { renderElectricistaCambrils, initElectricistaCambrils } from './pages/seo/electricista-cambrils.js';

// ─── Global event tracking helper ───
window.trackEvent = function (eventName, eventValue) {
    // TODO: Uncomment when GA4 is configured
    // if (typeof gtag !== 'undefined') {
    //   gtag('event', eventName, { value: eventValue });
    // }
    console.log(`[Analytics] ${eventName}: ${eventValue}`);
};

// ─── Layout wrapper ───
function withLayout(pageRenderer) {
    return () => {
        const header = renderHeader();
        const page = pageRenderer();
        const footer = renderFooter();
        const whatsapp = renderWhatsApp();
        const cookieBanner = renderCookieBanner();
        const mobileBar = renderMobileBar();

        return header + page + footer + whatsapp + cookieBanner + mobileBar;
    };
}

// ─── Post-render init for all pages ───
function withInit(pageInit) {
    return () => {
        initHeader();
        initCookieBanner();
        if (pageInit) pageInit();
    };
}

// ─── Routes ───
const routes = [
    {
        path: '/',
        component: withLayout(renderHome),
        init: withInit(initHome),
        meta: {
            title: i18n.get('meta_home_title'),
            description: i18n.get('meta_home_desc')
        }
    },
    {
        path: '/electricistas-tarragona',
        component: withLayout(renderElectricistas),
        init: withInit(initElectricistas),
        meta: {
            title: i18n.get('meta_elec_title'),
            description: i18n.get('meta_elec_desc')
        }
    },
    {
        path: '/fontaneros-tarragona',
        component: withLayout(renderFontaneros),
        init: withInit(initFontaneros),
        meta: {
            title: i18n.get('meta_font_title'),
            description: i18n.get('meta_font_desc')
        }
    },
    {
        path: '/aire-acondicionado-tarragona',
        component: withLayout(renderAireAcondicionado),
        init: withInit(initAireAcondicionado),
        meta: {
            title: i18n.get('meta_ac_title'),
            description: i18n.get('meta_ac_desc')
        }
    },
    {
        path: '/telecomunicaciones-tarragona',
        component: withLayout(renderTelecomunicaciones),
        init: withInit(initTelecomunicaciones),
        meta: {
            title: i18n.get('meta_telecom_title'),
            description: i18n.get('meta_telecom_desc')
        }
    },
    {
        path: '/contacto',
        component: withLayout(renderContacto),
        init: withInit(initContacto),
        meta: {
            title: i18n.get('meta_contact_title'),
            description: i18n.get('meta_contact_desc')
        }
    },
    {
        path: '/aviso-legal',
        component: withLayout(renderAvisoLegal),
        init: withInit(null),
        meta: {
            title: i18n.get('meta_legal_title'),
            description: i18n.get('meta_legal_desc')
        }
    },
    {
        path: '/politica-privacidad',
        component: withLayout(renderPoliticaPrivacidad),
        init: withInit(null),
        meta: {
            title: i18n.get('meta_privacy_title'),
            description: i18n.get('meta_privacy_desc')
        }
    },
    {
        path: '/politica-cookies',
        component: withLayout(renderPoliticaCookies),
        init: withInit(null),
        meta: {
            title: i18n.get('meta_cookies_title'),
            description: i18n.get('meta_cookies_desc')
        }
    },
    {
        path: '*',
        component: withLayout(renderNotFound),
        init: withInit(null),
        meta: {
            title: i18n.get('meta_404_title'),
            description: i18n.get('meta_404_desc')
        }
    },
    // --- SEO Local Routes ---
    {
        path: '/electricista-reus',
        component: withLayout(renderElectricistaReus),
        init: withInit(initElectricistaReus),
        meta: {
            title: i18n.get('meta_local_reus_elec_title'),
            description: i18n.get('meta_local_reus_elec_desc')
        }
    },
    {
        path: '/fontanero-reus',
        component: withLayout(renderFontaneroReus),
        init: withInit(initFontaneroReus),
        meta: {
            title: i18n.get('meta_local_reus_font_title'),
            description: i18n.get('meta_local_reus_font_desc')
        }
    },
    {
        path: '/aire-acondicionado-reus',
        component: withLayout(renderAireAcondicionadoReus),
        init: withInit(initAireAcondicionadoReus),
        meta: {
            title: i18n.get('meta_local_reus_ac_title'),
            description: i18n.get('meta_local_reus_ac_desc')
        }
    },
    {
        path: '/electricista-cambrils',
        component: withLayout(renderElectricistaCambrils),
        init: withInit(initElectricistaCambrils),
        meta: {
            title: i18n.get('meta_local_cambrils_elec_title'),
            description: i18n.get('meta_local_cambrils_elec_desc')
        }
    }
];

// ─── Initialize Router ───
const router = new Router(routes);
