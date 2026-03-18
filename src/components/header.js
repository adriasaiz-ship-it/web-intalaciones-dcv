// ============================================
// HEADER COMPONENT (Corporate Redesign)
// ============================================
import { icons } from '../icons.js';
import { i18n } from '../i18n.js';

export function renderHeader() {
  const currentLang = i18n.lang;
  const isEs = currentLang === 'es';

  return `
    <!-- Top Bar -->
    <div class="top-bar">
      <div class="container top-bar__content">
        <div class="top-bar__contact">
          <a href="tel:+34640939116" class="top-bar__link" onclick="trackEvent('click_phone','640939116')">
            ${icons.phone}
            <span>640 939 116</span>
          </a>
          <a href="mailto:info@INSTALADCV2024.com" class="top-bar__link">
            ${icons.mail}
            <span>info@INSTALADCV2024.com</span>
          </a>
          <span class="top-bar__link">
            ${icons.mapPin}
            <span>Reus, Tarragona</span>
          </span>
        </div>
        <div class="top-bar__lang">
           <button class="lang-btn ${isEs ? 'active' : ''}" data-lang="es">ES</button>
           <button class="lang-btn ${!isEs ? 'active' : ''}" data-lang="ca">CA</button>
        </div>
      </div>
    </div>

    <!-- Header -->
    <header class="header" id="main-header">
      <div class="container header__inner">
        <a href="#/" class="header__logo">
          <img src="/images/logo-official.png" alt="INSTALACIONES DCV 2024 Logo" style="height: 40px; width: auto;" onerror="this.onerror=null; this.src='https://placehold.co/180x50?text=DCV+2024'">
        </a>

        <nav class="header__nav">
          <a href="#/" class="header__nav-link" data-nav="home">${i18n.get('nav_home')}</a>
          <div class="header__nav-dropdown">
            <a href="#/electricistas-tarragona" class="header__nav-link" data-nav="servicios" style="display:flex;align-items:center;gap:4px;">
              ${i18n.get('nav_services')} <span style="display:flex;align-items:center">${icons.chevronDown}</span>
            </a>
            <div class="header__nav-dropdown-menu">
              <a href="#/electricistas-tarragona" class="header__nav-dropdown-item">
                <span class="header__nav-dropdown-icon card__icon--blue">${icons.zap}</span>
                <div>
                  <div style="font-weight:600">${i18n.get('nav_electrician')}</div>
                  <div style="font-size:0.8em;color:var(--color-text-muted)">${i18n.get('nav_elec_sub')}</div>
                </div>
              </a>
              <a href="#/fontaneros-tarragona" class="header__nav-dropdown-item">
                <span class="header__nav-dropdown-icon card__icon--blue">${icons.droplet}</span>
                <div>
                  <div style="font-weight:600">${i18n.get('nav_plumber')}</div>
                  <div style="font-size:0.8em;color:var(--color-text-muted)">${i18n.get('nav_plumber_sub')}</div>
                </div>
              </a>
              <a href="#/aire-acondicionado-tarragona" class="header__nav-dropdown-item">
                <span class="header__nav-dropdown-icon card__icon--blue">${icons.wind}</span>
                <div>
                  <div style="font-weight:600">${i18n.get('nav_ac')}</div>
                  <div style="font-size:0.8em;color:var(--color-text-muted)">${i18n.get('nav_ac_sub')}</div>
                </div>
              </a>
              <a href="#/telecomunicaciones-tarragona" class="header__nav-dropdown-item">
                <span class="header__nav-dropdown-icon card__icon--blue">${icons.wifi}</span>
                <div>
                  <div style="font-weight:600">${i18n.get('nav_telecom')}</div>
                  <div style="font-size:0.8em;color:var(--color-text-muted)">${i18n.get('nav_telecom_sub')}</div>
                </div>
              </a>
            </div>
          </div>
          <a href="#/contacto" class="header__nav-link" data-nav="contacto">${i18n.get('nav_contact')}</a>
        </nav>

        <a href="#/contacto" class="btn btn--primary btn--sm header__cta">${i18n.get('nav_commercial')}</a>

        <button class="header__hamburger" id="hamburger-btn" aria-label="Menú de navegación">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <!-- Mobile Nav Overlay -->
    <div class="mobile-nav__overlay" id="mobile-overlay"></div>

    <!-- Mobile Nav -->
    <nav class="mobile-nav" id="mobile-nav">
      <div class="mobile-nav__header">
        <a href="#/" class="header__logo" style="font-size:1rem">
          <img src="/images/logo-official.png" alt="Logo" style="height: 32px; width: auto;">
        </a>
        <button class="mobile-nav__close" id="mobile-close" aria-label="Cerrar menú">${icons.x}</button>
      </div>
      <div class="mobile-nav__links">
        <a href="#/" class="mobile-nav__link" data-mobile-nav="home">
          <span class="nav-icon">${icons.home}</span> ${i18n.get('nav_home')}
        </a>
        <div class="mobile-nav__divider"></div>
        <a href="#/electricistas-tarragona" class="mobile-nav__link" data-mobile-nav="electricistas">
          <span class="nav-icon">${icons.zap}</span> ${i18n.get('nav_electrician')}
        </a>
        <a href="#/fontaneros-tarragona" class="mobile-nav__link" data-mobile-nav="fontaneros">
          <span class="nav-icon">${icons.droplet}</span> ${i18n.get('nav_plumber')}
        </a>
        <a href="#/aire-acondicionado-tarragona" class="mobile-nav__link" data-mobile-nav="aire">
          <span class="nav-icon">${icons.wind}</span> ${i18n.get('nav_ac')}
        </a>
        <a href="#/telecomunicaciones-tarragona" class="mobile-nav__link" data-mobile-nav="telecom">
          <span class="nav-icon">${icons.wifi}</span> ${i18n.get('nav_telecom')}
        </a>
        <div class="mobile-nav__divider"></div>
        <a href="#/contacto" class="mobile-nav__link" data-mobile-nav="contacto">
          <span class="nav-icon">${icons.mail}</span> ${i18n.get('nav_contact')}
        </a>
      </div>
      
      <div class="mobile-nav__lang">
        <button class="lang-btn ${isEs ? 'active' : ''}" data-lang="es">ESPAÑOL</button>
        <button class="lang-btn ${!isEs ? 'active' : ''}" data-lang="ca">CATALÀ</button>
      </div>

      <div class="mobile-nav__contact">
        <a href="tel:+34640939116" class="mobile-nav__contact-link" onclick="trackEvent('click_phone','640939116')">
          ${icons.phone} 640 939 116
        </a>
        <a href="tel:+34670609814" class="mobile-nav__contact-link" onclick="trackEvent('click_phone','670609814')">
          ${icons.phone} 670 609 814
        </a>
        <a href="mailto:info@INSTALADCV2024.com" class="mobile-nav__contact-link">
          ${icons.mail} info@INSTALADCV2024.com
        </a>
      </div>
      <div style="margin-top:var(--space-6)">
        <a href="#/contacto" class="btn btn--primary btn--full" id="mobile-cta">${i18n.get('request_quote')}</a>
      </div>
    </nav>
  `;
}

export function initHeader() {
  const hamburger = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileClose = document.getElementById('mobile-close');
  const mobileCta = document.getElementById('mobile-cta');

  // Language switcher logic
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang) i18n.setLanguage(lang);
    });
  });

  function openMobile() {
    mobileNav?.classList.add('active');
    mobileOverlay?.classList.add('active');
    hamburger?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobile() {
    mobileNav?.classList.remove('active');
    mobileOverlay?.classList.remove('active');
    hamburger?.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', () => {
    if (mobileNav?.classList.contains('active')) {
      closeMobile();
    } else {
      openMobile();
    }
  });

  mobileOverlay?.addEventListener('click', closeMobile);
  mobileClose?.addEventListener('click', closeMobile);
  mobileCta?.addEventListener('click', closeMobile);

  // Close mobile menu on nav link click
  document.querySelectorAll('.mobile-nav__link').forEach(link => {
    link.addEventListener('click', closeMobile);
  });

  // Header scroll effect
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}
