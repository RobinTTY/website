import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('personal-website')
export class PersonalWebsite extends LitElement {
  @property({ type: String }) header = 'My app';

  static styles = css`
    :host {
      height: 100vh;
      display: grid;
      grid-template-rows: auto 1fr auto;
      align-items: center;

      background-color: #1a202c;
      color: white;

      font-size: 32px;
      font-weight: 700;
      line-height: 1.125;
    }
  `;

  render() {
    return html`
      <header>Header</header>
      <main>Content</main>
      <footer>Footer</footer>
    `;
  }
}
