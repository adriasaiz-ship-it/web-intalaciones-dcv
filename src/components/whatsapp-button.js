// ============================================
// WHATSAPP FLOATING BUTTON
// ============================================
import { icons } from '../icons.js';

export function renderWhatsApp() {
    return `
    <a href="https://wa.me/34640939116?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto"
       class="whatsapp-btn"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Contactar por WhatsApp"
       onclick="trackEvent('click_whatsapp','floating_button')">
      ${icons.whatsapp}
    </a>
  `;
}
