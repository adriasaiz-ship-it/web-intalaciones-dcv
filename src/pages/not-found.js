// ============================================
// 404 PAGE
// ============================================
import { icons } from '../icons.js';
import { i18n } from '../i18n.js';

export function renderNotFound() {
    return `
    <main class="page-content">
      <div class="not-found">
        <div>
          <div class="not-found__code">404</div>
          <h2>${i18n.get('error_404_title')}</h2>
          <p>${i18n.get('error_404_text')}</p>
          <div class="not-found__buttons">
            <a href="#/" class="btn btn--primary btn--lg">
              ${icons.home} ${i18n.get('error_404_btn_home')}
            </a>
            <a href="#/electricistas-tarragona" class="btn btn--outline btn--lg">
              ${i18n.get('error_404_btn_services')}
            </a>
          </div>
        </div>
      </div>
    </main>
  `;
}
