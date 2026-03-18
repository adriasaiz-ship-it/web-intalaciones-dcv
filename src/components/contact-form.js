// ============================================
// CONTACT FORM COMPONENT
// ============================================
import { icons } from '../icons.js';
import { i18n } from '../i18n.js';

export function renderContactForm(id = 'contact-form') {
  return `
    <form class="contact-form" id="${id}" novalidate>
      <!-- Honeypot -->
      <div class="form__hp" aria-hidden="true">
        <input type="text" name="website" tabindex="-1" autocomplete="off" />
      </div>

      <div class="grid grid--2">
        <div class="form__group">
          <label class="form__label" for="${id}-name">${i18n.get('form_label_name')}</label>
          <input class="form__input" type="text" id="${id}-name" name="nombre" placeholder="${i18n.get('form_placeholder_name')}" required />
        </div>
        <div class="form__group">
          <label class="form__label" for="${id}-phone">${i18n.get('form_label_phone')}</label>
          <input class="form__input" type="tel" id="${id}-phone" name="telefono" placeholder="${i18n.get('form_placeholder_phone')}" required />
        </div>
      </div>

      <div class="grid grid--2">
        <div class="form__group">
          <label class="form__label" for="${id}-email">${i18n.get('form_label_email')}</label>
          <input class="form__input" type="email" id="${id}-email" name="email" placeholder="${i18n.get('form_placeholder_email')}" required />
        </div>
        <div class="form__group">
          <label class="form__label" for="${id}-service">${i18n.get('form_label_service')}</label>
          <select class="form__select" id="${id}-service" name="servicio" required>
            <option value="">${i18n.get('form_option_select')}</option>
            <option value="electricidad">${i18n.get('service_electricity')}</option>
            <option value="fontaneria">${i18n.get('service_plumbing')}</option>
            <option value="aire-acondicionado">${i18n.get('service_ac')}</option>
            <option value="telecomunicaciones">${i18n.get('service_telecom')}</option>
            <option value="otro">${i18n.get('service_other')}</option>
          </select>
        </div>
      </div>

      <div class="form__group">
        <label class="form__label" for="${id}-message">${i18n.get('form_label_message')}</label>
        <textarea class="form__textarea" id="${id}-message" name="mensaje" placeholder="${i18n.get('form_placeholder_message')}" rows="4"></textarea>
      </div>

      <div class="form__checkbox">
        <input type="checkbox" id="${id}-privacy" name="privacidad" required />
        <label for="${id}-privacy">
          ${i18n.get('form_privacy_text')}
        </label>
      </div>

      <div class="form__checkbox">
        <input type="checkbox" id="${id}-commercial" name="comercial" />
        <label for="${id}-commercial">
          ${i18n.get('form_commercial_text')}
        </label>
      </div>

      <button type="submit" class="btn btn--primary btn--lg btn--full" style="margin-top:var(--space-4)">
        ${i18n.get('form_btn_submit')}
      </button>
    </form>
  `;
}

export function initContactForm(id = 'contact-form') {
  const form = document.getElementById(id);
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Honeypot check
    const honeypot = form.querySelector('input[name="website"]');
    if (honeypot && honeypot.value) return;

    // Basic validation
    const nombre = form.querySelector('input[name="nombre"]');
    const telefono = form.querySelector('input[name="telefono"]');
    const email = form.querySelector('input[name="email"]');
    const servicio = form.querySelector('select[name="servicio"]');
    const privacidad = form.querySelector('input[name="privacidad"]');

    let valid = true;
    // Clear previous errors
    form.querySelectorAll('.form__error').forEach(el => el.remove());

    if (!nombre?.value.trim()) {
      showError(nombre, i18n.get('form_error_name'));
      valid = false;
    }
    if (!telefono?.value.trim()) {
      showError(telefono, i18n.get('form_error_phone'));
      valid = false;
    }
    if (!email?.value.trim() || !email.value.includes('@')) {
      showError(email, i18n.get('form_error_email'));
      valid = false;
    }
    if (!servicio?.value) {
      showError(servicio, i18n.get('form_error_service'));
      valid = false;
    }
    if (!privacidad?.checked) {
      showError(privacidad?.parentElement, i18n.get('form_error_privacy'));
      valid = false;
    }

    if (!valid) return;

    // Track form submission
    if (typeof trackEvent === 'function') {
      trackEvent('form_submit', 'contact_form');
    }

    // Show success modal
    showSuccessModal();
    form.reset();
  });
}

function showError(el, message) {
  if (!el) return;
  const error = document.createElement('div');
  error.className = 'form__error';
  error.textContent = message;
  const parent = el.closest('.form__group') || el.closest('.form__checkbox');
  parent?.appendChild(error);
}

function showSuccessModal() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'success-modal';
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal__icon">${icons.checkCircle}</div>
      <h3 class="modal__title">${i18n.get('form_modal_title')}</h3>
      <p class="modal__text">
        ${i18n.get('form_modal_text')}
      </p>
      <button class="btn btn--primary" id="modal-close">${i18n.get('form_modal_close')}</button>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.id === 'modal-close') {
      overlay.remove();
    }
  });

  document.getElementById('modal-close')?.addEventListener('click', () => {
    overlay.remove();
  });
}
