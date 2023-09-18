import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('logo-container')
export class LogoContainer extends LitElement {
  static styles = css`
    .brand-logo {
      height: 36px;
      filter: invert(1);
    }
  `;

  @property({ type: String })
  assetPath = '';

  @property({ type: String })
  imgAlt = '';

  @property({ type: String })
  linkUrl = '';

  render() {
    return html`
      <a href=${this.linkUrl} target="_blank" rel="noopener noreferrer">
        <img
          class="brand-logo"
          src=${this.assetPath}
          alt="${this.imgAlt} logo"
          loading="lazy"
          fetchpriority="high"
        />
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'logo-container': LogoContainer;
  }
}
