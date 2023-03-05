import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { SocialData } from '../models/social-data.js';

@customElement('about-me')
export class AboutMe extends LitElement {
  static styles = css`
    :host {
      display: grid;
      grid-template-rows: auto;
      gap: 0.15em;
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
      place-content: end;
    }

    .brand-logo {
      height: 36px;
      filter: invert(1);
    }
  `;

  private _socials: SocialData[] = [
    { name: 'Github', assetPath: '/assets/third-party/github.svg' },
    { name: 'LinkedIn', assetPath: '/assets/third-party/linkedin.svg' },
    { name: 'Twitter', assetPath: '/assets/third-party/twitter.svg' },
  ];

  render() {
    return html`
      <h1>Robin Müller</h1>
      <div id="socials-container">
        ${repeat(
          this._socials,
          social => html`<img
            class="brand-logo"
            src=${social.assetPath}
            alt="${social.name} logo"
            loading="lazy"
            fetchpriority="high"
          />`
        )}
      </div>
    `;
  }
}
