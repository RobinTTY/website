import { Router } from '@lit-labs/router/router.js';
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../routes/home-route.js';
import './footer-content.js';

@customElement('personal-website')
export class PersonalWebsite extends LitElement {
  static styles = css`
    :host {
      /* dvh tracks the retracting mobile browser chrome; vh is the fallback. */
      min-height: 100vh;
      min-height: 100dvh;
      display: grid;
      grid-template-rows: auto 1fr auto;
      align-items: center;
      justify-items: center;

      font-size: 26px;
      font-weight: 700;
    }

    /* Lets the home hero span the viewport; routed content that wants to
       be narrow constrains itself. */
    main {
      width: 100%;
    }

    header {
      padding: 1em;
    }

    /* No nav yet — an empty header would otherwise hold open a band of page
       background above the hero. */
    header:empty {
      display: none;
    }

    footer {
      margin-top: 2em;
    }
  `;

  private _routes = [
    { path: '/', render: () => html`<home-route></home-route>` },
    { path: '/projects', render: () => html`<h1>Projects</h1>` },
    { path: '/about', render: () => html`<h1>About</h1>` },
    { path: '/*', render: () => html`<h1>404 - Not found :(</h1>` },
  ];

  private _router = new Router(this, this._routes);

  render() {
    return html`
      <header></header>
      <main>${this._router.outlet()}</main>
      <footer>
        <footer-content></footer-content>
      </footer>
    `;
  }
}
