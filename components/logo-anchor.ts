import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('logo-anchor')
export class LogoAnchor extends LitElement {
  static styles = css`
    a {
      display: inline-block;
      text-decoration: none;
    }
    img {
      filter: invert(1);
      display: block;
    }

    .logo:hover {
      filter: invert(0.5);
      transition: filter 0.2s ease;
    }
  `;

  @property({ type: String })
  assetPath = '';

  @property({ type: String })
  logoSize = '100%';

  @property({ type: String })
  logoAlt = '';

  @property({ type: String })
  linkUrl = '';

  render() {
    return html`
      <a href=${this.linkUrl} target="_blank" rel="noopener noreferrer">
        <img
          class="logo"
          height=${this.logoSize}
          src=${this.assetPath}
          alt="${this.logoAlt} logo"
          loading="lazy"
          fetchpriority="high"
        />
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'logo-anchor': LogoAnchor;
  }
}
