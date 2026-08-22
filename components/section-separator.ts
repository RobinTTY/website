import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('section-separator')
export class SectionSeparator extends LitElement {
  static styles = css`
    :host {
      display: flex;
      align-items: center;
      gap: 1em;
      width: 100%;
    }

    /* The rules take whatever space the title leaves, so the separator always
       spans exactly the content width it is given. */
    :host::before,
    :host::after {
      content: '';
      flex: 1;
      min-width: 0;
      height: 1px;
      background-color: rgb(168, 178, 209);
    }

    span {
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      span {
        font-size: 0.85em;
      }
    }

    @media (max-width: 450px) {
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
