import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('about-me')
export class AboutMe extends LitElement {
  static styles = css`
    :host {
      display: grid;
      grid-template-rows: 1fr 1fr;
    }

    h1 {
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(90deg, #ff4d4d, #f9cb28);
      letter-spacing: -0.06em;

      margin: 0;
      padding: 0;
    }

    #socials-container {
      display: grid;
      grid-template-columns: repeat(3, auto);
      gap: 0.5em;
      place-content: start;
    }

    .brand-logo {
      height: 40px;
      filter: invert(1);
    }
  `;

  render() {
    return html`
      <h1>Robin Müller</h1>
      <div id="socials-container">
        <img
          class="brand-logo"
          src="/assets/third-party/github.svg"
          alt="Github logo"
          loading="lazy"
          fetchpriority="high"
        />
        <img
          class="brand-logo"
          src="/assets/third-party/linkedin.svg"
          alt="LinkedIn logo"
          loading="lazy"
          fetchpriority="high"
        />
        <img
          class="brand-logo"
          src="/assets/third-party/twitter.svg"
          alt="Twitter logo"
          loading="lazy"
          fetchpriority="high"
        />
      </div>
    `;
  }
}
