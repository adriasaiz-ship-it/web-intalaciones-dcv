import { i18n } from '../../i18n.js';

export function renderPoliticaCookies() {
    const isEs = i18n.lang === 'es';

    if (isEs) {
        return `
        <main class="page-content">
          <div class="legal-page container">
            <h1>Política de Cookies</h1>

            <h2>1. ¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan para recordar tus preferencias, mejorar tu experiencia de navegación y obtener información analítica sobre el uso del sitio.</p>

            <h2>2. ¿Qué cookies utilizamos?</h2>

            <h3>Cookies técnicas (necesarias)</h3>
            <p>Son necesarias para el funcionamiento del sitio web. Permiten la navegación básica y el uso de las funciones esenciales.</p>

            <h3>Cookies analíticas</h3>
            <p>Utilizamos Google Analytics 4 para recopilar información estadística sobre el uso del sitio web, como páginas visitadas, tiempo de navegación y origen del tráfico. Estos datos se utilizan de forma agregada y anónima para mejorar nuestros servicios.</p>

            <h3>Cookies de preferencias</h3>
            <p>Almacenan tus preferencias de navegación, como la aceptación de cookies.</p>

            <h2>3. ¿Cómo gestionar las cookies?</h2>
            <p>Puedes gestionar las cookies a través de la configuración de tu navegador. A continuación te indicamos cómo hacerlo en los navegadores más comunes:</p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener">Microsoft Edge</a></li>
            </ul>

            <h2>4. Consentimiento</h2>
            <p>Al acceder a nuestro sitio web, se muestra un banner informativo donde puedes aceptar o rechazar las cookies. Si aceptas, se instalarán las cookies descritas en esta política. Si las rechazas, solo se utilizarán las cookies técnicas necesarias para el funcionamiento del sitio.</p>

            <h2>5. Más información</h2>
            <p>Si tienes alguna duda sobre nuestra política de cookies, puedes contactarnos en <a href="mailto:info@INSTALADCV2024.com">info@INSTALADCV2024.com</a>.</p>

            <p style="margin-top:var(--space-8);color:var(--color-text-muted)"><em>Última actualización: Marzo 2026</em></p>
          </div>
        </main>
      `;
    } else {
        return `
        <main class="page-content">
          <div class="legal-page container">
            <h1>Política de Cookies</h1>

            <h2>1. Què són les cookies?</h2>
            <p>Les cookies són petits arxius de text que s'emmagatzemen al teu dispositiu quan visites un lloc web. S'utilitzen per recordar les teves preferències, millorar la teva experiència de navegació i obtenir informació analítica sobre l'ús del lloc.</p>

            <h2>2. Quines cookies utilitzem?</h2>

            <h3>Cookies tècniques (necessàries)</h3>
            <p>Són necessàries per al funcionament del lloc web. Permeten la navegació bàsica i l'ús de les funcions essencials.</p>

            <h3>Cookies analítiques</h3>
            <p>Utilitzem Google Analytics 4 per recollir informació estadística sobre l'ús del lloc web, com pàgines visitades, temps de navegació i origen del trànsit. Aquestes dades s'utilitzen de forma agregada i anònima per millorar els nostres serveis.</p>

            <h3>Cookies de preferències</h3>
            <p>Emmagatzemen les teves preferències de navegació, com l'acceptació de cookies.</p>

            <h2>3. Com gestionar les cookies?</h2>
            <p>Pots gestionar les cookies a través de la configuració del teu navegador. A continuació t'indiquem com fer-ho en els navegadors més comuns:</p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener">Microsoft Edge</a></li>
            </ul>

            <h2>4. Consentiment</h2>
            <p>En accedir al nostre lloc web, es mostra un bàner informatiu on pots acceptar o rebutjar les cookies. Si acceptes, s'instal·laran les cookies descrites en aquesta política. Si les rebutges, només s'utilitzaran les cookies tècniques necessàries per al funcionament del lloc.</p>

            <h2>5. Més informació</h2>
            <p>Si tens algun dubte sobre la nostra política de cookies, pots contactar-nos a <a href="mailto:info@INSTALADCV2024.com">info@INSTALADCV2024.com</a>.</p>

            <p style="margin-top:var(--space-8);color:var(--color-text-muted)"><em>Última actualització: Març 2026</em></p>
          </div>
        </main>
      `;
    }
}
