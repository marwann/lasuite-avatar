import Head from 'next/head'
import Script from 'next/script'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function Avatar() {
  return (
    <>
      <Head>
        <title>Générateur d&apos;avatar d&apos;absence · LaSuite</title>
        <meta name="description" content="Générez un avatar « absent » aux couleurs de LaSuite : overlay plein sur votre photo + icône (palmier, lune, avion…). 100 % navigateur." />
        <meta property="og:title" content="Générateur d'avatar d'absence · LaSuite" />
        <meta property="og:description" content="Uploadez votre photo, choisissez un motif, téléchargez votre avatar." />
      </Head>

      <header className="topbar">
        <div className="topbar__inner">
          <a className="brand-gouv" href="https://gouvernement.fr" target="_blank" rel="noopener" aria-label="Gouvernement - Liberté, Égalité, Fraternité">
            <img className="brand-gouv__logo" src={`${BASE}/assets/gouv.svg`} alt="GOUVERNEMENT - Liberté, Égalité, Fraternité" />
          </a>
          <span className="header-sep" aria-hidden="true" />
          <a className="brand" href="https://lasuite.numerique.gouv.fr/" target="_blank" rel="noopener">
            <img className="brand__logo" src={`${BASE}/assets/lasuite.svg`} alt="LaSuite" />
          </a>
        </div>
      </header>

      <main className="container main">
        <section className="hero">
          <h1>Générateur d&apos;avatar d&apos;absence</h1>
          <p>
            Ajoutez votre photo depuis votre ordinateur, choisissez un motif et
            téléchargez un avatar aux couleurs de LaSuite, que vous pourrez ensuite
            utiliser sur Tchap pour prévenir vos collègues de votre absence !
            Aucun fichier n&apos;est envoyé : tout reste dans votre navigateur.
          </p>
        </section>

        <div className="grid">
          <div className="preview-wrap">
            <div className="card preview">
              <div className="preview__head">
                <span className="meta">Aperçu · 1024×1024 · PNG</span>
              </div>
              <div className="canvas-wrap">
                <canvas id="avatar" width="1024" height="1024" aria-label="Aperçu de l'avatar" />
              </div>
              <div className="actions">
                <button id="btn-download" className="btn btn--primary" type="button">Envoyer une photo</button>
                <button id="btn-copy" className="btn btn--outline" type="button" hidden>Copier</button>
                <button id="btn-reset" className="btn btn--ghost" type="button">Réinitialiser</button>
              </div>
            </div>
          </div>

          <div className="controls">
            <section className="step">
              <div className="step__head"><span className="step__n">1</span><h2>Votre photo</h2></div>
              <label id="dropzone" className="dropzone" htmlFor="file">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M5 20h14"/>
                </svg>
                <span className="dropzone__title">Glissez une photo ou <span className="link">parcourez</span></span>
                <span className="dropzone__hint">PNG / JPG · idéalement carré · traitée localement</span>
                <input id="file" type="file" accept="image/*" hidden />
              </label>
              <div id="adjust" className="adjust" hidden>
                <label className="slider">
                  <div className="slider__head"><span>Zoom</span><span id="zoom-val" className="mono">1.00</span></div>
                  <input id="zoom" type="range" min="1" max="3" step="0.02" defaultValue="1" />
                </label>
                <label className="slider">
                  <div className="slider__head"><span>Cadrage horizontal</span><span id="offx-val" className="mono">0.00</span></div>
                  <input id="offx" type="range" min="-1" max="1" step="0.02" defaultValue="0" />
                </label>
                <label className="slider">
                  <div className="slider__head"><span>Cadrage vertical</span><span id="offy-val" className="mono">0.00</span></div>
                  <input id="offy" type="range" min="-1" max="1" step="0.02" defaultValue="0" />
                </label>
              </div>
            </section>

            <section className="step">
              <div className="step__head"><span className="step__n">2</span><h2>Motif</h2></div>
              <div id="reasons" className="reasons" />
            </section>

            <section className="step">
              <div className="step__head"><span className="step__n">3</span><h2>Style</h2></div>

              <div className="field">
                <div className="field__label">Couleur</div>
                <div id="scheme" className="segmented" data-group="scheme">
                  <button type="button" data-value="blue" className="seg is-active"><span className="sw" style={{background:'var(--brand)'}} />Bleu LaSuite</button>
                  <button type="button" data-value="red" className="seg"><span className="sw" style={{background:'var(--red)'}} />Rouge</button>
                  <button type="button" data-value="navy" className="seg"><span className="sw" style={{background:'#2845C1'}} />Bleu nuit</button>
                </div>
              </div>

              <div className="field">
                <div className="field__label">Intensité</div>
                <label className="slider">
                  <div className="slider__head"><span id="alpha-val" className="mono">0.55</span></div>
                  <input id="alpha" type="range" min="0.2" max="0.9" step="0.01" defaultValue="0.55" />
                </label>
              </div>
            </section>
          </div>
        </div>

        <div className="tool-footer">
          <span>Outil réalisé pour les agents de la fonction publique. Aucun fichier n&apos;est envoyé&nbsp;: tout est traité localement dans votre navigateur.</span>
          <span className="tool-footer__links">
            <a href="https://lasuite.numerique.gouv.fr/" target="_blank" rel="noopener">LaSuite</a>
            <span aria-hidden="true">·</span>
            <a href="https://tchap.gouv.fr/" target="_blank" rel="noopener">Tchap</a>
            <span aria-hidden="true">·</span>
            <a href="https://docs.numerique.gouv.fr/docs/63680152-249d-4772-b0c8-4621737755d4/" target="_blank" rel="noopener">Comment changer son avatar sur Tchap&nbsp;?</a>
          </span>
        </div>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__top">
            <a className="footer-brand" href="https://lasuite.numerique.gouv.fr/" target="_blank" rel="noopener" aria-label="LaSuite - Direction interministérielle du numérique">
              <img src={`${BASE}/assets/marianne.svg`} alt="" aria-hidden className="footer-marianne-logo" />
              <span className="footer-brand-sep" aria-hidden="true" />
              <span className="footer-brand__text">Direction<br />interministérielle<br />du numérique</span>
            </a>
            <div className="footer-right">
              <a href="https://numerique.gouv.fr" target="_blank" rel="noopener" aria-label="numerique.gouv.fr - Nouvelle fenêtre">
                <img src={`${BASE}/numeriquegouv.png`} alt="numerique.gouv.fr - L'alliance du numérique de l'État" className="footer-numerique-logo" />
              </a>
              <ul className="footer-external-links">
                <li><a href="https://legifrance.gouv.fr/fr/" target="_blank" rel="noopener">legifrance.gouv.fr</a></li>
                <li><a href="https://info.gouv.fr/fr/" target="_blank" rel="noopener">info.gouv.fr</a></li>
                <li><a href="https://www.service-public.gouv.fr/" target="_blank" rel="noopener">service-public.gouv.fr</a></li>
                <li><a href="https://www.data.gouv.fr/fr/" target="_blank" rel="noopener">data.gouv.fr</a></li>
              </ul>
            </div>
          </div>
          <div className="site-footer__bottom">
            <ul className="footer-internal-links">
              <li><a href="https://lasuite.numerique.gouv.fr/mentions-legales" target="_blank" rel="noopener">Mentions légales</a></li>
              <li><a href="https://lasuite.numerique.gouv.fr/suivi" target="_blank" rel="noopener">Politique de confidentialité</a></li>
              <li><a href="https://lasuite.numerique.gouv.fr/accessibilite" target="_blank" rel="noopener">Accessibilité</a></li>
              <li>
                <a href="https://github.com/suitenumerique/" target="_blank" rel="noopener" aria-label="GitHub LaSuite - Nouvelle fenêtre">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  Code source
                </a>
              </li>
            </ul>
            <p className="footer-license">
              Sauf mention contraire, tous les contenus de ce site sont sous{' '}
              <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank" rel="noopener">licence etalab-2.0</a>
            </p>
          </div>
        </div>
      </footer>

      <Script src={`${BASE}/app.js`} strategy="afterInteractive" />
    </>
  )
}
