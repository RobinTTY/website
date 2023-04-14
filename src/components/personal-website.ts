import { Router } from '@lit-labs/router/router.js';
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import './about-me.js';
import './footer-content.js';

@customElement('personal-website')
export class PersonalWebsite extends LitElement {
  static styles = css`
    :host {
      height: 100vh;
      display: grid;
      grid-template-rows: auto 1fr auto;
      align-items: center;
      justify-items: center;

      font-size: 26px;
      font-weight: 700;
    }

    header {
      padding: 1em;
    }
  `;

  private _routes = [
    { path: '/', render: () => html`<about-me></about-me>` },
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
