import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('footer-content')
export class FooterContent extends LitElement {
  static styles = css`
    :host {
      padding: var(--padding-content-area);
      display: grid;
      grid-template-columns: auto auto;
      gap: 0.25rem;
      place-items: center;

      font-size: 0.8em;
    }

    a {
      display: grid;
      place-items: center;
      height: 38px;
      width: 38px;
      padding: 0.05em;
      border-radius: 2em;
      filter: drop-shadow(0px 0px 10px #0000006e);
    }

    #lit-logo {
      height: 32px;
    }
  `;

  render() {
    return html`
      Built with
      <a href="https://lit.dev" target="_blank" rel="noopener noreferrer">
        <img
          id="lit-logo"
          src="/assets/third-party/lit.svg"
          alt="Lit logo"
          loading="lazy"
        />
      </a>
    `;
  }
}
