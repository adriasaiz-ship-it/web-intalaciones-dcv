import { i18n } from '../../i18n.js';

export function renderAvisoLegal() {
    const isEs = i18n.lang === 'es';
    
    if (isEs) {
        return `
        <main class="page-content">
          <div class="legal-page container">
            <h1>Aviso Legal</h1>
            
            <h2>1. Identificación del titular</h2>
            <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa al usuario de los siguientes datos:</p>
            <ul>
              <li><strong>Denominación social:</strong> INSTALACIONES DCV 2024</li>
              <li><strong>Domicilio:</strong> Calle Salvador Dalí, 10, Oficina A-18, 43205 Reus, Tarragona</li>
              <li><strong>Email:</strong> info@INSTALADCV2024.com</li>
              <li><strong>Teléfono:</strong> 640 939 116</li>
            </ul>

            <h2>2. Objeto</h2>
            <p>El presente Aviso Legal regula el uso del sitio web instaladcv2024.com, del que es titular INSTALACIONES DCV 2024. La navegación por el sitio web atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.</p>

            <h2>3. Propiedad intelectual e industrial</h2>
            <p>Los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a INSTALACIONES DCV 2024, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso de la web.</p>

            <h2>4. Condiciones de uso</h2>
            <p>El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que INSTALACIONES DCV 2024 ofrece a través de su sitio web y a no emplearlos para:</p>
            <ul>
              <li>Realizar actividades ilícitas o contrarias a la buena fe y al orden público.</li>
              <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico, de apología del terrorismo o atentatorio contra los derechos humanos.</li>
              <li>Provocar daños en los sistemas físicos y lógicos del sitio web, de sus proveedores o de terceras personas.</li>
            </ul>

            <h2>5. Exclusión de responsabilidad</h2>
            <p>INSTALACIONES DCV 2024 no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos.</p>

            <h2>6. Legislación aplicable</h2>
            <p>Para la resolution de todas las controversias o cuestiones relacionadas con el presente sitio web, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos los Juzgados y Tribunales de Reus.</p>

            <p style="margin-top:var(--space-8);color:var(--color-text-muted)"><em>Última actualización: Marzo 2026</em></p>
          </div>
        </main>
      `;
    } else {
        return `
        <main class="page-content">
          <div class="legal-page container">
            <h1>Avís Legal</h1>
            
            <h2>1. Identificació del titular</h2>
            <p>En compliment de l'article 10 de la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i Comerç Electrònic, s'informa l'usuari de les següents dades:</p>
            <ul>
              <li><strong>Denominació social:</strong> INSTALACIONES DCV 2024</li>
              <li><strong>Domicili:</strong> Carrer Salvador Dalí, 10, Oficina A-18, 43205 Reus, Tarragona</li>
              <li><strong>Email:</strong> info@INSTALADCV2024.com</li>
              <li><strong>Telèfon:</strong> 640 939 116</li>
            </ul>

            <h2>2. Objecte</h2>
            <p>El present Avís Legal regula l'ús del lloc web instaladcv2024.com, del que és titular INSTALACIONES DCV 2024. La navegació pel lloc web atribueix la condició d'usuari d'aquest i implica l'acceptació plena i sense reserves de totes i cadascuna de les disposicions incloses en aquest Avís Legal.</p>

            <h2>3. Propietat intel·lectual i industrial</h2>
            <p>Els continguts del lloc web, incloent-hi textos, fotografies, gràfics, imatges, icones, tecnologia, programari, així com el seu disseny gràfic i codis font, constitueixen una obra la propietat de la qual pertany a INSTALACIONES DCV 2024, sense que es puguin entendre cedits a l'usuari cap dels drets d'explotació sobre aquests més enllà del que és estrictament necessari per al correcte ús de la web.</p>

            <h2>4. Condicions d'ús</h2>
            <p>L'usuari es compromet a fer un ús adequat dels continguts i serveis que INSTALACIONES DCV 2024 ofereix a través del seu lloc web i a no emprar-los per a:</p>
            <ul>
              <li>Realitzar activitats il·lícites o contràries a la bona fe i a l'ordre públic.</li>
              <li>Difundir continguts o propaganda de caràcter racista, xenòfob, pornogràfic, d'apologia del terrorisme o atentatori contra els drets humans.</li>
              <li>Provocar danys en els sistemes físics i lògics del lloc web, dels seus proveïdors o de terceres persones.</li>
            </ul>

            <h2>5. Exclusió de responsabilitat</h2>
            <p>INSTALACIONES DCV 2024 no es fa responsable, en cap cas, dels danys i perjudicis de qualsevol naturalesa que poguessin ocasionar, a títol enunciatiu: errors o omissions en els continguts, falta de disponibilitat del portal o la transmissió de virus o programes maliciosos.</p>

            <h2>2. Legislació aplicable</h2>
            <p>Per a la resolució de totes les controvèrsies o qüestions relacionades amb el present lloc web, serà d'aplicació la legislació espanyola, a la qual se sotmeten expressament les parts, essent competents per a la resolució de tots els conflictes els Jutjats i Tribunals de Reus.</p>

            <p style="margin-top:var(--space-8);color:var(--color-text-muted)"><em>Última actualització: Març 2026</em></p>
          </div>
        </main>
      `;
    }
}
