import { i18n } from '../../i18n.js';

export function renderPoliticaPrivacidad() {
    const isEs = i18n.lang === 'es';

    if (isEs) {
        return `
        <main class="page-content">
          <div class="legal-page container">
            <h1>Política de Privacidad</h1>

            <h2>1. Responsable del tratamiento</h2>
            <ul>
              <li><strong>Responsable:</strong> INSTALACIONES DCV 2024</li>
              <li><strong>Dirección:</strong> Calle Salvador Dalí, 10, Oficina A-18, 43205 Reus, Tarragona</li>
              <li><strong>Email:</strong> info@INSTALADCV2024.com</li>
              <li><strong>Teléfono:</strong> 640 939 116</li>
            </ul>

            <h2>2. Finalidad del tratamiento de datos</h2>
            <p>Los datos personales que nos facilites a través de los formularios de contacto serán tratados con las siguientes finalidades:</p>
            <ul>
              <li>Gestionar tu solicitud de contacto o presupuesto.</li>
              <li>Responder a tus consultas o dudas sobre nuestros servicios.</li>
              <li>Enviarte comunicaciones comerciales, siempre que hayas dado tu consentimiento expreso.</li>
            </ul>

            <h2>3. Legitimación del tratamiento</h2>
            <p>La base legal para el tratamiento de tus datos es:</p>
            <ul>
              <li>El consentimiento que nos otorgas al rellenar y enviar el formulario de contacto.</li>
              <li>El interés legítimo de atender tu solicitud y ofrecerte nuestros servicios.</li>
            </ul>

            <h2>4. Conservación de los datos</h2>
            <p>Tus datos personales serán conservados durante el tiempo necesario para gestionar tu consulta o presupuesto, y se mantendrán durante el plazo legalmente establecido o hasta que solicites su supresión.</p>

            <h2>5. Destinatarios de los datos</h2>
            <p>No se cederán datos a terceros, salvo obligación legal. Los datos podrán ser tratados por proveedores de servicios necesarios para la gestión interna (hosting, email), que actúan como encargados de tratamiento con las debidas garantías.</p>

            <h2>6. Derechos del usuario</h2>
            <p>Como usuario, tienes derecho a:</p>
            <ul>
              <li><strong>Acceso:</strong> Conocer si estamos tratando tus datos.</li>
              <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos.</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos.</li>
              <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos.</li>
              <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento.</li>
              <li><strong>Portabilidad:</strong> Recibir tus datos en un format estructurado.</li>
            </ul>
            <p>Para ejercer estos derechos puedes contactarnos en <a href="mailto:info@INSTALADCV2024.com">info@INSTALADCV2024.com</a>.</p>

            <h2>7. Seguridad de los datos</h2>
            <p>Implementamos medidas técnicas y organizativas apropiadas para garantizar la seguridad de tus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.</p>

            <h2>8. Reclamación ante la autoridad de control</h2>
            <p>Si consideras que el tratamiento de tus datos no es adecuado, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD): <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.</p>

            <p style="margin-top:var(--space-8);color:var(--color-text-muted)"><em>Última actualización: Marzo 2026</em></p>
          </div>
        </main>
      `;
    } else {
        return `
        <main class="page-content">
          <div class="legal-page container">
            <h1>Política de Privadesa</h1>

            <h2>1. Responsable del tractament</h2>
            <ul>
              <li><strong>Responsable:</strong> INSTALACIONES DCV 2024</li>
              <li><strong>Adreça:</strong> Carrer Salvador Dalí, 10, Oficina A-18, 43205 Reus, Tarragona</li>
              <li><strong>Email:</strong> info@INSTALADCV2024.com</li>
              <li><strong>Telèfon:</strong> 640 939 116</li>
            </ul>

            <h2>2. Finalitat del tractament de dades</h2>
            <p>Les dades personals que ens facilitis a través dels formularis de contacte seran tractades amb les següents finalitats:</p>
            <ul>
              <li>Gestionar la teva sol·licitud de contacte o pressupost.</li>
              <li>Respondre a les teves consultes o dubtes sobre els nostres serveis.</li>
              <li>Enviar-te comunicacions comercials, sempre que hagis donat el teu consentiment exprés.</li>
            </ul>

            <h2>3. Legitimació del tractament</h2>
            <p>La base legal per al tractament de les teves dades és:</p>
            <ul>
              <li>El consentiment que ens atorgues en omplir i enviar el formulari de contacte.</li>
              <li>L'interès legítim d'atendre la teva sol·licitud i oferir-te els nostres serveis.</li>
            </ul>

            <h2>4. Conservació de les dades</h2>
            <p>Les teves dades personals seran conservades durant el temps necessari per gestionar la teva consulta o pressupost, i es mantindran durant el termini legalment establert o fins que demanis la seva supressió.</p>

            <h2>5. Destinataris de les dades</h2>
            <p>No es cediran dades a tercers, tret d'obligació legal. Les dades podran ser tractades per proveïdors de serveis necessaris per a la gestió interna (allotjament, email), que actuen com a encarregats de tractament amb les degudes garanties.</p>

            <h2>6. Drets de l'usuari</h2>
            <p>Com a usuari, tens dret a:</p>
            <ul>
              <li><strong>Accés:</strong> Conèixer si estem tractant les teves dades.</li>
              <li><strong>Rectificació:</strong> Sol·licitar la correcció de dades inexactes.</li>
              <li><strong>Supressió:</strong> Sol·licitar l'eliminació de les teves dades.</li>
              <li><strong>Oposició:</strong> Oposar-te al tractament de les teves dades.</li>
              <li><strong>Limitació:</strong> Sol·licitar la limitació del tractament.</li>
              <li><strong>Portabilitat:</strong> Rebre les teves dades en un format estructurat.</li>
            </ul>
            <p>Per exercir aquests drets pots contactar-nos a <a href="mailto:info@INSTALADCV2024.com">info@INSTALADCV2024.com</a>.</p>

            <h2>7. Seguretat de les dades</h2>
            <p>Implementem mesures tècniques i organitzatives apropiades per garantir la seguretat de les teves dades personals i evitar la seva alteració, pèrdua, tractament o accés no autoritzat.</p>

            <h2>8. Reclamació davant l'autoritat de control</h2>
            <p>Si consideres que el tractament de les teves dades no és adequat, tens dret a presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (AEPD): <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.</p>

            <p style="margin-top:var(--space-8);color:var(--color-text-muted)"><em>Última actualització: Març 2026</em></p>
          </div>
        </main>
      `;
    }
}
