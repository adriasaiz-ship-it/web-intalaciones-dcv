// ============================================
// SERVICE PAGE TEMPLATE
// ============================================
import { icons } from '../icons.js';
import { renderContactForm, initContactForm } from '../components/contact-form.js';
import { i18n } from '../i18n.js';

const areas = ['Reus', 'Tarragona', 'Cambrils', 'Salou', 'Vila-seca', 'Valls', 'La Selva del Camp', 'Constantí'];

export function renderServicePage({ slug, icon, title, description, subservices, faqs, keywords, relatedServices, image }) {
  const currentLang = i18n.lang;
  return `
    <main class="page-content">
      <!-- Service Hero -->
      <section class="service-hero" style="background: linear-gradient(to right, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.6) 100%), url('${image}') center/cover no-repeat">
        <div class="container service-hero__content">
          <span class="hero__badge">${icon} ${currentLang === 'es' ? 'Servicio profesional' : 'Servei professional'}</span>
          <h1>${title}</h1>
          <p>${description}</p>
          <div class="service-hero__buttons">
            <a href="#/contacto" class="btn btn--primary btn--lg">${i18n.get('request_quote')}</a>
            <a href="tel:+34640939116" class="btn btn--secondary btn--lg" onclick="trackEvent('click_phone','640939116')">
              ${icons.phone} ${i18n.get('call_now')}
            </a>
            <a href="https://wa.me/34640939116" class="btn btn--secondary btn--lg" target="_blank" rel="noopener" onclick="trackEvent('click_whatsapp','service_hero')">
              ${icons.whatsapp} WhatsApp
            </a>
          </div>
        </div>
      </section>

      <!-- Subservices -->
      <section class="section">
        <div class="container">
          <div class="section__header">
            <span class="section__badge">${currentLang === 'es' ? 'Nuestros servicios' : 'Els nostres serveis'}</span>
            <h2>${currentLang === 'es' ? '¿Qué podemos hacer por ti?' : 'Què podem fer per tu?'}</h2>
            <p class="section__subtitle">${currentLang === 'es' ? 'Ofrecemos soluciones completas adaptadas a tus necesidades.' : 'Oferim solucions completes adaptades a les teves necessitats.'}</p>
          </div>
          <div class="grid grid--2" style="max-width:900px;margin:0 auto">
            ${subservices.map(sub => `
              <div class="card" style="padding:var(--space-6)">
                <h3 class="card__title" style="display:flex;align-items:flex-start;gap:var(--space-3)">
                  <span style="color:var(--color-accent);flex-shrink:0;width:24px;height:24px;margin-top:2px">${icons.checkCircle}</span> 
                  <span>${sub.title}</span>
                </h3>
                <p class="card__text" style="margin-bottom:0;margin-left:calc(24px + var(--space-3))">${sub.text}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Why Choose Us for this service -->
      <section class="section section--alt">
        <div class="container">
          <div class="section__header">
            <h2>${currentLang === 'es' ? '¿Por qué elegirnos para tu instalación?' : 'Per què triar-nos per a la teva instal·lació?'}</h2>
          </div>
          <div class="grid grid--3" style="max-width:900px;margin:0 auto">
            <div class="card" style="text-align:center">
              <div class="card__icon card__icon--blue" style="margin:0 auto var(--space-4)">${icons.shield}</div>
              <h4 class="card__title">${currentLang === 'es' ? 'Garantía total' : 'Garantia total'}</h4>
              <p class="card__text">${currentLang === 'es' ? 'Todos nuestros trabajos cuentan con garantía de calidad y materiales.' : 'Tots els nostres treballs compten amb garantia de qualitat i materials.'}</p>
            </div>
            <div class="card" style="text-align:center">
              <div class="card__icon card__icon--green" style="margin:0 auto var(--space-4)">${icons.clock}</div>
              <h4 class="card__title">${currentLang === 'es' ? 'Rapidez' : 'Rapidesa'}</h4>
              <p class="card__text">${currentLang === 'es' ? 'Nos adaptamos a tus plazos y ejecutamos los trabajos con eficiencia.' : 'Ens adaptem als teus terminis i executem els treballs amb eficiència.'}</p>
            </div>
            <div class="card" style="text-align:center">
              <div class="card__icon card__icon--orange" style="margin:0 auto var(--space-4)">${icons.award}</div>
              <h4 class="card__title">${currentLang === 'es' ? 'Profesionalidad' : 'Professionalitat'}</h4>
              <p class="card__text">${currentLang === 'es' ? 'Técnicos con formación especializada y experiencia demostrada.' : 'Tècnics amb formació especialitzada i experiència demostrada.'}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Service Area -->
      <section class="section">
        <div class="container">
          <div class="section__header">
            <span class="section__badge">${currentLang === 'es' ? 'Área de servicio' : 'Àrea de servei'}</span>
            <h2>${currentLang === 'es' ? 'Zonas donde trabajamos' : 'Zones on treballem'}</h2>
            <p class="section__subtitle">${currentLang === 'es' ? 'Damos servicio en los principales municipios de la provincia de Tarragona.' : 'Donem servei als principals municipis de la província de Tarragona.'}</p>
          </div>
          <div class="area-list" style="display:grid;grid-template-columns:repeat(auto-fill, minmax(180px, 1fr));gap:var(--space-4);max-width:800px;margin:0 auto">
            ${areas.map(city => `<span class="area-tag" style="display:flex;align-items:center;background:var(--color-white);padding:var(--space-3) var(--space-4);border-radius:var(--radius-md);border:1px solid var(--color-border);font-weight:var(--weight-medium);box-shadow:var(--shadow-sm)"><span style="color:var(--color-accent);width:1.2rem;margin-right:0.5rem;display:flex">${icons.mapPin}</span> ${city}</span>`).join('')}
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="section section--alt" id="faq-${slug}">
        <div class="container" style="max-width:800px">
          <div class="section__header">
            <span class="section__badge">${currentLang === 'es' ? 'Preguntas frecuentes' : 'Preguntes freqüents'}</span>
            <h2>${currentLang === 'es' ? 'Resolvemos tus dudas' : 'Resolem els teus dubtes'}</h2>
          </div>
          ${faqs.map((faq, i) => `
            <div class="faq__item" data-faq="${i}">
              <button class="faq__question" aria-expanded="false">
                <span>${faq.q}</span>
                <span class="faq__icon">+</span>
              </button>
              <div class="faq__answer">
                <div class="faq__answer-inner">${faq.a}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- CTA -->
      <section class="section">
        <div class="container">
          <div class="cta-block">
            <h2>${currentLang === 'es' ? '¿Necesitas un presupuesto?' : 'Necessites un pressupost?'}</h2>
            <p>${currentLang === 'es' ? 'Contacta con nosotros sin compromiso. Te asesoramos y preparamos un presupuesto personalizado.' : 'Contacta amb nosaltres sense compromís. T\'assessorem i preparem un pressupost personalitzat.'}</p>
            <div class="flex flex--center flex--gap flex--wrap">
              <a href="#/contacto" class="btn btn--orange btn--lg">${i18n.get('request_quote')}</a>
              <a href="tel:+34640939116" class="btn btn--secondary btn--lg" onclick="trackEvent('click_phone','640939116')">
                ${icons.phone} 640 939 116
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Internal Linking -->
      <section class="section section--alt">
        <div class="container">
          <div class="section__header">
            <h2>${currentLang === 'es' ? 'Otros servicios que ofrecemos' : 'Altres serveis que oferim'}</h2>
            <p class="section__subtitle">${currentLang === 'es' ? 'Descubre todos nuestros servicios de instalación profesional.' : 'Descobreix tots els nostres serveis d\'instal·lació professional.'}</p>
          </div>
          <div class="grid grid--3" style="max-width:1000px;margin:0 auto">
            ${relatedServices.map(rs => `
              <a href="${rs.link}" class="card" style="display:flex;align-items:center;gap:var(--space-4);text-decoration:none;padding:var(--space-4)">
                <div style="font-size:24px;width:48px;height:48px;background:var(--color-bg-alt);border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;color:var(--color-primary);flex-shrink:0">${rs.icon}</div>
                <div style="text-align:left">
                  <h4 class="card__title" style="margin-bottom:0;font-size:var(--text-base)">${rs.title}</h4>
                  <span class="card__link" style="font-size:var(--text-xs);margin-top:var(--space-1)">${currentLang === 'es' ? 'Ver servicio' : 'Veure servei'} ${icons.arrowRight}</span>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Contact Form -->
      <section class="section section--dark">
        <div class="container">
          <div class="section__header">
            <h2 style="color:var(--color-white)">${i18n.get('nav_contact')}</h2>
            <p class="section__subtitle" style="color:var(--color-text-on-dark)">${currentLang === 'es' ? 'Rellena el formulario y te responderemos lo antes posible.' : 'Omple el formulari i et respondrem el més aviat possible.'}</p>
          </div>
          <div style="max-width:700px;margin:0 auto;background:var(--color-white);border-radius:var(--radius-2xl);padding:var(--space-8);box-shadow:var(--shadow-2xl)">
            ${renderContactForm('service-form')}
          </div>
        </div>
      </section>
    </main>
  `;
}

export function initServicePage() {
  initContactForm('service-form');
  initFaq();
  initScrollAnimations();
}

function initFaq() {
  document.querySelectorAll('.faq__item').forEach(item => {
    const btn = item.querySelector('.faq__question');
    btn?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close all
      document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('active'));
      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .process__step, .cta-block').forEach(el => {
    observer.observe(el);
  });
}
