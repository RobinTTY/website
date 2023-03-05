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
      padding: var(--padding-content-area);
    }
  `;

  render() {
    return html`
      <header></header>
      <main>
        <about-me></about-me>
      </main>
      <footer>
        <footer-content></footer-content>
      </footer>
    `;
  }
}
