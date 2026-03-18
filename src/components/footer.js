// ============================================
// FOOTER COMPONENT (Corporate Redesign)
// ============================================
import { icons } from '../icons.js';
import { i18n } from '../i18n.js';

export function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <!-- Brand -->
          <div class="footer__brand">
            <div class="footer__logo">
              <img src="/images/logo-official.png" alt="INSTALACIONES DCV 2024 Logo" style="height: 50px; width: auto; display: block;" onerror="this.onerror=null; this.src='https://placehold.co/200x60?text=DCV+2024'">
            </div>
            <p class="footer__desc">
              ${i18n.get('footer_desc')}
            </p>
          </div>

          <!-- Servicios -->
          <div>
            <h4 class="footer__heading">${i18n.get('services_section_badge')}</h4>
            <div class="footer__links">
              <a href="#/electricistas-tarragona" class="footer__link"><span style="display:inline-block;width:1rem;">${icons.zap}</span> ${i18n.get('nav_electrician')}</a>
              <a href="#/fontaneros-tarragona" class="footer__link"><span style="display:inline-block;width:1rem;">${icons.droplet}</span> ${i18n.get('nav_plumber')}</a>
              <a href="#/aire-acondicionado-tarragona" class="footer__link"><span style="display:inline-block;width:1rem;">${icons.wind}</span> ${i18n.get('nav_ac')}</a>
              <a href="#/telecomunicaciones-tarragona" class="footer__link"><span style="display:inline-block;width:1rem;">${icons.wifi}</span> ${i18n.get('nav_telecom')}</a>
            </div>
          </div>

          <!-- Servicios Locales (SEO) -->
          <div>
            <h4 class="footer__heading">${i18n.get('footer_local_service')}</h4>
            <div class="footer__links">
              <a href="#/electricista-reus" class="footer__link">${i18n.get('footer_elec_reus')}</a>
              <a href="#/fontanero-reus" class="footer__link">${i18n.get('footer_font_reus')}</a>
              <a href="#/aire-acondicionado-reus" class="footer__link">${i18n.get('footer_ac_reus')}</a>
              <a href="#/electricista-cambrils" class="footer__link">${i18n.get('footer_elec_cambrils')}</a>
            </div>
          </div>

          <!-- Enlaces -->
          <div>
            <h4 class="footer__heading">${i18n.get('footer_company')}</h4>
            <div class="footer__links">
              <a href="#/" class="footer__link">${i18n.get('nav_home')}</a>
              <a href="#/contacto" class="footer__link">${i18n.get('footer_contact_op')}</a>
              <a href="#/aviso-legal" class="footer__link">${i18n.get('footer_legal')}</a>
              <a href="#/politica-privacidad" class="footer__link">${i18n.get('footer_privacy')}</a>
              <a href="#/politica-cookies" class="footer__link">${i18n.get('footer_cookies')}</a>
            </div>
          </div>

          <!-- Contacto -->
          <div>
            <h4 class="footer__heading">${i18n.get('footer_contact_info')}</h4>
            <div class="footer__contact-item">
              <span class="footer__contact-icon">${icons.mapPin}</span>
              <span>Calle Salvador Dalí, 10<br>Oficina A-18<br>43205 Reus, Tarragona</span>
            </div>
            <div class="footer__contact-item">
              <span class="footer__contact-icon">${icons.phone}</span>
              <div>
                <a href="tel:+34640939116" style="color:var(--color-accent-light);text-decoration:none;" onclick="trackEvent('click_phone','640939116')">640 939 116</a><br>
                <a href="tel:+34670609814" style="color:var(--color-accent-light);text-decoration:none;" onclick="trackEvent('click_phone','670609814')">670 609 814</a><br>
                <a href="tel:+34616766404" style="color:var(--color-accent-light);text-decoration:none;" onclick="trackEvent('click_phone','616766404')">616 766 404</a>
              </div>
            </div>
            <div class="footer__contact-item">
              <span class="footer__contact-icon">${icons.mail}</span>
              <div>
                <a href="mailto:info@INSTALADCV2024.com" style="color:var(--color-accent-light);text-decoration:none;">info@INSTALADCV2024.com</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom -->
        <div class="footer__bottom">
          <p class="footer__copyright">© ${new Date().getFullYear()} INSTALACIONES DCV 2024. ${i18n.get('footer_rights')}</p>
          <div class="footer__legal">
            <a href="#/aviso-legal">${i18n.get('footer_legal')}</a>
            <a href="#/politica-privacidad">${i18n.get('footer_privacy_short')}</a>
            <a href="#/politica-cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
