// ============================================
// HOME PAGE (Corporate Redesign)
// ============================================
import { icons } from '../icons.js';
import { renderContactForm, initContactForm } from '../components/contact-form.js';
import { i18n } from '../i18n.js';

export function renderHome() {
  return `
    <main class="page-content">
      <!-- HERO -->
      <section class="hero" id="hero">
        <div class="container hero__content">
          <div class="hero__col-text">
            <div class="hero__badge">${i18n.get('hero_badge')}</div>
            <h1 class="hero__title">
              ${i18n.get('hero_title')}
            </h1>
            <p class="hero__subtitle">
              ${i18n.get('hero_subtitle')}
            </p>
            <ul class="hero__trust-points">
              <li>${icons.check} ${i18n.get('hero_point_budget')}</li>
              <li>${icons.check} ${i18n.get('hero_point_installers')}</li>
              <li>${icons.check} ${i18n.get('hero_point_area')}</li>
            </ul>
            <div class="hero__contact-phone">
              <a href="tel:+34640939116" onclick="trackEvent('click_phone','640939116')">
                ${icons.phone} 640 939 116
              </a>
            </div>
          </div>
          
          <div class="hero__col-form">
            <div class="hero-card-form">
              <h3 class="hero-card-form__title">${i18n.get('hero_form_title')}</h3>
              <form id="hero-quick-form" class="hero-quick-form" onsubmit="return false;">
                <div class="form__group">
                   <label class="form__label" for="hq-name">${i18n.get('hero_form_name')}</label>
                  <input type="text" id="hq-name" class="form__input" required placeholder="${i18n.get('hero_form_placeholder_name')}">
                </div>
                <div class="form__group">
                  <label class="form__label" for="hq-phone">${i18n.get('hero_form_phone')}</label>
                  <input type="tel" id="hq-phone" class="form__input" required placeholder="${i18n.get('hero_form_placeholder_phone')}">
                </div>
                <div class="form__group">
                  <label class="form__label" for="hq-service">${i18n.get('hero_form_service')}</label>
                  <select id="hq-service" class="form__select" required>
                    <option value="" disabled selected>${i18n.get('hero_form_placeholder_service')}</option>
                    <option value="Electricidad">${i18n.get('nav_electrician')}</option>
                    <option value="Fontanería">${i18n.get('nav_plumber')}</option>
                    <option value="Aire Acondicionado">${i18n.get('nav_ac')}</option>
                    <option value="Telecomunicaciones">${i18n.get('nav_telecom')}</option>
                    <option value="Otro">${i18n.get('hero_other_integral')}</option>
                  </select>
                </div>
                <div class="form__group">
                  <label class="form__label" for="hq-message">${i18n.get('hero_form_message')}</label>
                  <textarea id="hq-message" class="form__textarea" placeholder="${i18n.get('hero_form_placeholder_message')}" style="min-height: 80px;"></textarea>
                </div>
                <!-- Honeypot -->
                <input type="text" name="b_name" class="form__hp" tabindex="-1" autocomplete="off">
                <button type="submit" class="btn btn--primary btn--full" style="margin-top:var(--space-2)">
                  ${i18n.get('hero_cta')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- SERVICES -->
      <section class="section" id="servicios">
        <div class="container">
          <div class="section__header">
            <span class="section__badge">${i18n.get('services_section_badge')}</span>
            <h2 class="section__title">${i18n.get('services_section_title')}</h2>
            <p class="section__subtitle">
              ${i18n.get('services_section_subtitle')}
            </p>
          </div>
          <div class="grid grid--4">
            ${renderServiceCard({
              icon: icons.zap,
              iconClass: 'card__icon--blue',
              title: i18n.get('home_service_elec_title'),
              text: i18n.get('home_service_elec_text'),
              link: '#/electricistas-tarragona',
              image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800'
            })}
            ${renderServiceCard({
              icon: icons.droplet,
              iconClass: 'card__icon--blue',
              title: i18n.get('home_service_font_title'),
              text: i18n.get('home_service_font_text'),
              link: '#/fontaneros-tarragona',
              image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800'
            })}
            ${renderServiceCard({
              icon: icons.wind,
              iconClass: 'card__icon--orange',
              title: i18n.get('home_service_ac_title'),
              text: i18n.get('home_service_ac_text'),
              link: '#/aire-acondicionado-tarragona',
              image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
            })}
            ${renderServiceCard({
              icon: icons.wifi,
              iconClass: 'card__icon--purple',
              title: i18n.get('home_service_telecom_title'),
              text: i18n.get('home_service_telecom_text'),
              link: '#/telecomunicaciones-tarragona',
              image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800'
            })}
          </div>
        </div>
      </section>

      <!-- TRABAJOS REALIZADOS (New Portfolio Section) -->
      <section class="section section--alt" id="portfolio">
        <div class="container">
          <div class="section__header">
            <span class="section__badge">${i18n.get('home_portfolio_badge')}</span>
            <h2 class="section__title">${i18n.get('home_portfolio_title')}</h2>
            <p class="section__subtitle">
              ${i18n.get('home_portfolio_subtitle')}
            </p>
          </div>
          <div class="grid grid--3">
            ${renderPortfolioItem({
              image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800',
              category: i18n.get('home_portfolio_cat_elec'),
              title: i18n.get('home_portfolio_item_elec')
            })}
            ${renderPortfolioItem({
              image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800',
              category: i18n.get('home_portfolio_cat_ac'),
              title: i18n.get('home_portfolio_item_ac')
            })}
            ${renderPortfolioItem({
              image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=800',
              category: i18n.get('home_portfolio_cat_font'),
              title: i18n.get('home_portfolio_item_font')
            })}
          </div>
        </div>
      </section>

      <!-- TIPOS DE INSTALACIONES (New Image Cards Section) -->
      <section class="section" id="tipos-instalaciones">
        <div class="container">
          <div class="section__header">
            <span class="section__badge">${i18n.get('home_coverage_badge')}</span>
            <h2 class="section__title">${i18n.get('home_coverage_title')}</h2>
            <p class="section__subtitle">
              ${i18n.get('home_coverage_subtitle')}
            </p>
          </div>
          <div class="grid grid--4">
            <div class="card" style="padding:0;overflow:hidden;border:none;box-shadow:var(--shadow-md)">
              <div style="height:160px;position:relative;background:var(--color-bg-alt);">
                <img src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?auto=format&fit=crop&q=80&w=400" alt="Cuadros Eléctricos" style="width:100%;height:100%;object-fit:cover;border-bottom:3px solid var(--color-accent)" onerror="this.src='https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800'">
              </div>
              <div style="padding:var(--space-4)">
                <h4 style="margin-bottom:var(--space-2);font-size:1.1rem;color:var(--color-primary)">${i18n.get('home_coverage_item_elec')}</h4>
                <ul style="font-size:0.85rem;color:var(--color-secondary);line-height:1.6;padding-left:1.2rem;list-style-type:disc">
                  ${i18n.get('home_coverage_list_elec')}
                </ul>
              </div>
            </div>
            <div class="card" style="padding:0;overflow:hidden;border:none;box-shadow:var(--shadow-md)">
              <div style="height:160px;position:relative;background:var(--color-bg-alt);">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400" alt="Racks de Datos" style="width:100%;height:100%;object-fit:cover;border-bottom:3px solid var(--color-accent-purple)">
              </div>
              <div style="padding:var(--space-4)">
                <h4 style="margin-bottom:var(--space-2);font-size:1.1rem;color:var(--color-primary)">${i18n.get('home_coverage_item_data')}</h4>
                <ul style="font-size:0.85rem;color:var(--color-secondary);line-height:1.6;padding-left:1.2rem;list-style-type:disc">
                  ${i18n.get('home_coverage_list_data')}
                </ul>
              </div>
            </div>
            <div class="card" style="padding:0;overflow:hidden;border:none;box-shadow:var(--shadow-md)">
              <div style="height:160px;position:relative;background:var(--color-bg-alt);">
                <img src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=400" alt="Sistemas de Presión" style="width:100%;height:100%;object-fit:cover;border-bottom:3px solid var(--color-accent-blue)">
              </div>
              <div style="padding:var(--space-4)">
                <h4 style="margin-bottom:var(--space-2);font-size:1.1rem;color:var(--color-primary)">${i18n.get('home_coverage_item_water')}</h4>
                <ul style="font-size:0.85rem;color:var(--color-secondary);line-height:1.6;padding-left:1.2rem;list-style-type:disc">
                  ${i18n.get('home_coverage_list_water')}
                </ul>
              </div>
            </div>
            <div class="card" style="padding:0;overflow:hidden;border:none;box-shadow:var(--shadow-md)">
              <div style="height:160px;position:relative;background:var(--color-bg-alt);">
                <img src="https://images.unsplash.com/photo-1610484918712-45e0d7c3451e?auto=format&fit=crop&q=80&w=400" alt="Conductos Industriales" style="width:100%;height:100%;object-fit:cover;border-bottom:3px solid var(--color-accent-orange)" onerror="this.src='https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'">
              </div>
              <div style="padding:var(--space-4)">
                <h4 style="margin-bottom:var(--space-2);font-size:1.1rem;color:var(--color-primary)">${i18n.get('home_coverage_item_ac')}</h4>
                <ul style="font-size:0.85rem;color:var(--color-secondary);line-height:1.6;padding-left:1.2rem;list-style-type:disc">
                  ${i18n.get('home_coverage_list_ac')}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- WHY CHOOSE US -->
      <section class="section section--alt" id="por-que-elegirnos">
        <div class="container">
          <div class="section__header">
            <span class="section__badge">${i18n.get('why_section_badge')}</span>
            <h2 class="section__title">${i18n.get('why_section_title')}</h2>
            <p class="section__subtitle">
              ${i18n.get('why_section_subtitle')}
            </p>
          </div>
          <div class="grid grid--4">
            ${renderFeatureCard({ icon: icons.building, title: i18n.get('why_feature_1_title'), text: i18n.get('why_feature_1_text') })}
            ${renderFeatureCard({ icon: icons.shield, title: i18n.get('why_feature_2_title'), text: i18n.get('why_feature_2_text') })}
            ${renderFeatureCard({ icon: icons.tool, title: i18n.get('why_feature_3_title'), text: i18n.get('why_feature_3_text') })}
            ${renderFeatureCard({ icon: icons.fileText, title: i18n.get('why_feature_4_title'), text: i18n.get('why_feature_4_text') })}
          </div>
        </div>
      </section>

      <!-- WORK PROCESS -->
      <section class="section" id="proceso">
        <div class="container">
          <div class="section__header">
            <span class="section__badge">${i18n.get('home_process_badge')}</span>
            <h2 class="section__title">${i18n.get('home_process_title')}</h2>
          </div>
          <div class="process">
            <div class="process__step">
              <div class="process__number">1</div>
              <h3 class="process__title">${i18n.get('home_process_step1_title')}</h3>
              <p class="process__text">${i18n.get('home_process_step1_text')}</p>
            </div>
            <div class="process__step">
              <div class="process__number">2</div>
              <h3 class="process__title">${i18n.get('home_process_step2_title')}</h3>
              <p class="process__text">${i18n.get('home_process_step2_text')}</p>
            </div>
            <div class="process__step">
              <div class="process__number">3</div>
              <h3 class="process__title">${i18n.get('home_process_step3_title')}</h3>
              <p class="process__text">${i18n.get('home_process_step3_text')}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SERVICE AREA -->
      <section class="section section--alt" id="area-servicio">
        <div class="container">
          <div class="section__header">
            <span class="section__badge">${i18n.get('home_area_badge')}</span>
            <h2 class="section__title">${i18n.get('home_area_title')}</h2>
          </div>
          <div class="grid grid--4 area-grid">
            ${['Tarragona Centro', 'Reus', 'Polígonos Industriales', 'Cambrils', 'Salou', 'Vila-seca', 'Valls', 'Camp de Tarragona'].map(city =>
              `<div class="area-card">
                <div class="area-card__icon">${icons.mapPin}</div>
                <div class="area-card__name">${city}</div>
              </div>`
            ).join('')}
          </div>
        </div>
      </section>

      <!-- CTA BLOCK -->
      <section class="section">
        <div class="container">
          <div class="cta-block" style="background: var(--color-primary-dark); color: var(--color-white);">
            <h2 style="color: var(--color-white)">${i18n.get('home_cta_title')}</h2>
            <p style="color: var(--color-text-on-dark); margin-bottom: var(--space-8);">${i18n.get('home_cta_text')}</p>
            <div class="flex flex--center flex--gap flex--wrap">
              <a href="#/contacto" class="btn btn--primary btn--lg">${i18n.get('request_quote')}</a>
              <a href="tel:+34640939116" class="btn btn--secondary btn--lg" onclick="trackEvent('click_phone','640939116')">
                ${icons.phone} 640 939 116
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- QUICK CONTACT FORM -->
      <section class="section section--dark" id="contacto-rapido">
        <div class="container">
          <div class="section__header">
            <h2 class="section__title" style="color:var(--color-white)">${i18n.get('home_departament_title')}</h2>
            <p class="section__subtitle" style="color:var(--color-text-on-dark)">
              ${i18n.get('home_departament_text')}
            </p>
          </div>
          <div style="max-width:700px;margin:0 auto;background:var(--color-white);border-radius:var(--radius-lg);border: 1px solid var(--color-border);padding:var(--space-8);">
            ${renderContactForm('home-form')}
          </div>
        </div>
      </section>
    </main>
  `;
}

export function initHome() {
  initContactForm('home-form');
  initScrollAnimations();

  // Hero form handling
  const heroForm = document.getElementById('hero-quick-form');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Basic anti-spam check
      const hp = heroForm.querySelector('.form__hp');
      if (hp && hp.value) {
        console.warn('Spam detected');
        return;
      }

      const submitBtn = heroForm.querySelector('button[type="submit"]');
      
      // Submit simulation
      submitBtn.disabled = true;
      submitBtn.textContent = i18n.get('hero_form_sending');

      setTimeout(() => {
        // Success state
        heroForm.innerHTML = `
          <div style="text-align:center; padding: var(--space-6) 0;">
            <div style="color:var(--color-accent-green); display:flex; justify-content:center; margin-bottom:var(--space-4);">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" class="icon" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h4 style="margin-bottom:var(--space-2); color:var(--color-primary);">${i18n.get('hero_form_success')}</h4>
            <p style="color:var(--color-secondary); font-size:var(--text-sm); line-height:var(--leading-relaxed);">${i18n.get('hero_form_success_text')}</p>
          </div>
        `;
        if (typeof window.trackEvent === 'function') {
          window.trackEvent('submit_hero_contact', 'lead');
        }
      }, 1200);
    });
  }
}

function renderServiceCard({ icon, iconClass, title, text, link, image }) {
  return `
    <div class="card card--service" style="padding:0;overflow:hidden">
      <div style="height:200px;position:relative;background:#f8fafc">
        <img src="${image}" alt="${title}" style="width:100%;height:100%;object-fit:cover;" />
        <div class="card__icon-overlay ${iconClass || ''}" style="position:absolute;bottom:0;right:0;background:var(--color-primary);color:var(--color-white);width:48px;height:48px;display:flex;align-items:center;justify-content:center;font-size:24px;border-top-left-radius:var(--radius-xl)">
          ${icon}
        </div>
      </div>
      <div class="card__body" style="padding: var(--space-4);">
        <h3 class="card__title" style="margin: 0; font-size: 1.125rem;">${title}</h3>
        <p class="card__text" style="font-size: 0.875rem;">${text}</p>
        <a href="${link}" class="card__link">
          ${i18n.get('services_view_details')} ${icons.arrowRight}
        </a>
      </div>
    </div>
  `;
}

function renderPortfolioItem({ image, category, title }) {
  return `
    <div class="card card--portfolio" style="padding:0;overflow:hidden;display:flex;flex-direction:column;">
        <div style="height: 240px; background-color: var(--color-surface); position:relative;">
            <img src="${image}" alt="${title}" style="width:100%;height:100%;object-fit:cover;" />
        </div>
        <div class="card__body" style="padding: var(--space-4);flex-grow:1;">
            <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-muted); font-weight: 600; margin-bottom: var(--space-2);">${category}</div>
            <h4 class="card__title" style="margin: 0; font-size: 1.125rem;">${title}</h4>
        </div>
    </div>
  `;
}

function renderFeatureCard({ icon, title, text }) {
  return `
    <div class="card card--feature" style="text-align:left; border: none; padding: var(--space-6); background: var(--color-white);">
      <div class="card__icon" style="margin-bottom: var(--space-4); width: 40px; height: 40px; color: var(--color-primary);">
        ${icon}
      </div>
      <h4 class="card__title" style="margin-bottom: var(--space-2); font-size: 1.125rem;">${title}</h4>
      <p class="card__text" style="font-size: 0.875rem;">${text}</p>
    </div>
  `;
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.process__step, .cta-block').forEach(el => {
    observer.observe(el);
  });
}
