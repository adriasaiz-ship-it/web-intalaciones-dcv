// ============================================
// COOKIE CONSENT BANNER
// ============================================

export function renderCookieBanner() {
    if (localStorage.getItem('dcv_cookies_accepted')) return '';

    return `
    <div class="cookie-banner" id="cookie-banner">
      <div class="cookie-banner__inner">
        <p class="cookie-banner__text">
          Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra
          <a href="#/politica-cookies">política de cookies</a>.
        </p>
        <div class="cookie-banner__actions">
          <button class="btn btn--sm btn--primary" id="cookie-accept">Aceptar</button>
          <button class="btn btn--sm btn--outline" id="cookie-reject">Rechazar</button>
        </div>
      </div>
    </div>
  `;
}

export function initCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;

    document.getElementById('cookie-accept')?.addEventListener('click', () => {
        localStorage.setItem('dcv_cookies_accepted', 'true');
        banner.remove();
    });

    document.getElementById('cookie-reject')?.addEventListener('click', () => {
        localStorage.setItem('dcv_cookies_accepted', 'false');
        banner.remove();
    });
}
