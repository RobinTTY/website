import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('section-separator')
export class SectionSeparator extends LitElement {
  static styles = css`
    :host::before,
    :host::after {
      content: '';
      display: inline-block;
      position: relative;
      width: min(20vw, 300px);
      height: 1px;
      top: -0.35em;
      background-color: rgb(168, 178, 209);
    }

    span {
      padding: 0 1em;
    }

    @media (max-width: 768px) {
      span {
        font-size: 0.85em;
      }
    }
  `;

  @property({ type: String })
  sectionTitle = 'Personal projects';

  render() {
    return html`<span>${this.sectionTitle}</span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'section-separator': SectionSeparator;
  }
}
