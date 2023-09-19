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

      height: 1px;
      top: -0.35em;
      background-color: rgb(168, 178, 209);
    }

    span {
      padding: 0 1em;
    }

    @media (min-width: 769px) {
      :host::before,
      :host::after {
        width: min(25vw, 300px);
      }
    }

    @media (max-width: 768px) {
      :host::before,
      :host::after {
        width: 20vw;
      }

      span {
        font-size: 0.85em;
      }
    }

    @media (max-width: 450px) {
      :host::before,
      :host::after {
        width: 15vw;
      }

      span {
        font-size: 0.75em;
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
