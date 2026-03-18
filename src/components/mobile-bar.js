// ============================================
// MOBILE BOTTOM BAR
// ============================================
import { icons } from '../icons.js';

export function renderMobileBar() {
    return `
    <div class="mobile-bar" id="mobile-bar">
      <a href="tel:+34640939116" class="mobile-bar__item" onclick="trackEvent('click_phone','640939116')">
        ${icons.phone}
        <span>Llamar</span>
      </a>
      <a href="https://wa.me/34640939116?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto"
         class="mobile-bar__item" target="_blank" rel="noopener" onclick="trackEvent('click_whatsapp','mobile_bar')">
        ${icons.whatsapp}
        <span>WhatsApp</span>
      </a>
      <a href="#/contacto" class="mobile-bar__item">
        ${icons.mail}
        <span>Contacto</span>
      </a>
      <a href="#/" class="mobile-bar__item">
        ${icons.home}
        <span>Inicio</span>
      </a>
    </div>
  `;
}
