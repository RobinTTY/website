import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('footer-content')
export class FooterContent extends LitElement {
  static styles = css`
    :host {
      padding: var(--padding-content-area);
      display: grid;
      grid-template-columns: auto auto;
      gap: 0.5rem;
    }

    #lit-logo {
      height: 2rem;
      padding-left: 0.1em;
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
          fetchpriority="high"
        />
      </a>
    `;
  }
}
