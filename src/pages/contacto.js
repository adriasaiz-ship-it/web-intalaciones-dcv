// ============================================
// CONTACT PAGE
// ============================================
import { icons } from '../icons.js';
import { renderContactForm, initContactForm } from '../components/contact-form.js';
import { i18n } from '../i18n.js';

export function renderContacto() {
  return `
    <main class="page-content">
      <!-- Hero -->
      <section class="service-hero">
        <div class="container service-hero__content">
          <span class="hero__badge"><span style="display:inline-block;width:1rem;">${icons.mail}</span> ${i18n.get('contact_hero_badge')}</span>
          <h1>${i18n.get('contact_hero_title')}</h1>
          <p>${i18n.get('contact_hero_subtitle')}</p>
        </div>
      </section>

      <!-- Contact Content -->
      <section class="section">
        <div class="container">
          <div class="contact-grid">
            <!-- Form -->
            <div>
              <h2 style="margin-bottom:var(--space-6)">${i18n.get('hero_form_title')}</h2>
              ${renderContactForm('contacto-form')}
            </div>

            <!-- Info -->
            <div>
              <h2 style="margin-bottom:var(--space-6)">${i18n.get('contact_info_title')}</h2>
              
              <div class="contact-info__item">
                <div class="contact-info__icon">${icons.mapPin}</div>
                <div>
                  <div class="contact-info__label">${i18n.get('contact_address_label')}</div>
                  <div class="contact-info__value">
                    Calle Salvador Dalí, 10<br>
                    Oficina A-18<br>
                    43205 Reus, Tarragona
                  </div>
                </div>
              </div>

              <div class="contact-info__item">
                <div class="contact-info__icon">${icons.phone}</div>
                <div>
                  <div class="contact-info__label">${i18n.get('contact_phones_label')}</div>
                  <div class="contact-info__value">
                    <a href="tel:+34640939116" onclick="trackEvent('click_phone','640939116')">640 939 116</a><br>
                    <a href="tel:+34670609814" onclick="trackEvent('click_phone','670609814')">670 609 814</a><br>
                    <a href="tel:+34616766404" onclick="trackEvent('click_phone','616766404')">616 766 404</a>
                  </div>
                </div>
              </div>

              <div class="contact-info__item">
                <div class="contact-info__icon">${icons.mail}</div>
                <div>
                  <div class="contact-info__label">${i18n.get('contact_email_label')}</div>
                  <div class="contact-info__value">
                    <a href="mailto:info@INSTALADCV2024.com">info@INSTALADCV2024.com</a>
                  </div>
                </div>
              </div>

              <div class="contact-info__item">
                <div class="contact-info__icon">${icons.users}</div>
                <div>
                  <div class="contact-info__label">${i18n.get('contact_commercial_label')}</div>
                  <div class="contact-info__value">
                    <a href="mailto:Carlosaramayo@INSTALADCV2024.com">Carlosaramayo@INSTALADCV2024.com</a>
                  </div>
                </div>
              </div>

              <div class="contact-info__item">
                <div class="contact-info__icon">${icons.settings}</div>
                <div>
                  <div class="contact-info__label">${i18n.get('contact_technical_label')}</div>
                  <div class="contact-info__value">
                    <a href="mailto:Vasileorza@INSTALADCV2024.com">Vasileorza@INSTALADCV2024.com</a><br>
                    <a href="mailto:Mitruorza@INSTALADCV2024.com">Mitruorza@INSTALADCV2024.com</a>
                  </div>
                </div>
              </div>

              <div class="contact-info__item">
                <div class="contact-info__icon">${icons.clock}</div>
                <div>
                  <div class="contact-info__label">${i18n.get('contact_hours_label')}</div>
                  <div class="contact-info__value">
                    ${i18n.get('contact_hours_value')}
                  </div>
                </div>
              </div>

              <!-- Quick CTA buttons -->
              <div style="display:flex;flex-direction:column;gap:var(--space-3);margin-top:var(--space-6)">
                <a href="tel:+34640939116" class="btn btn--primary btn--full" onclick="trackEvent('click_phone','640939116')">
                  ${icons.phone} ${i18n.get('call_now')}
                </a>
                <a href="https://wa.me/34640939116?text=${i18n.lang === 'es' ? 'Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto' : 'Hola%2C%20em%20gustaria%20sol·licitar%20un%20pressupost'}" 
                   class="btn btn--green btn--full" target="_blank" rel="noopener" onclick="trackEvent('click_whatsapp','contact_page')">
                  ${icons.whatsapp} ${i18n.get('contact_whatsapp_btn')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Map -->
      <section class="section section--alt">
        <div class="container">
          <div class="section__header">
            <span class="section__badge"><span style="display:inline-block;width:1rem;">${icons.mapPin}</span> ${i18n.get('contact_map_badge')}</span>
            <h2>${i18n.get('contact_location_title')}</h2>
            <p class="section__subtitle">${i18n.get('contact_location_subtitle')}</p>
          </div>
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.8!2d1.1!3d41.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCalle%20Salvador%20Dal%C3%AD%2C%2010%2C%2043205%20Reus%2C%20Tarragona!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
              width="100%"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="${i18n.get('contact_location_title')}">
            </iframe>
          </div>
        </div>
      </section>
    </main>
  `;
}

export function initContacto() {
  initContactForm('contacto-form');
}
