import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

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
      /* The brand SVGs carry only a viewBox, so they have no intrinsic size.
         Reserving a square box keeps them from collapsing to zero width
         before they load; contain preserves each icon's own ratio. */
      height: var(--logo-size);
      width: var(--logo-size);
      object-fit: contain;
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
      <a
        href=${this.linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        style=${styleMap({ '--logo-size': this.logoSize })}
      >
        <img class="logo" src=${this.assetPath} alt="${this.logoAlt} logo" />
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'logo-anchor': LogoAnchor;
  }
}
