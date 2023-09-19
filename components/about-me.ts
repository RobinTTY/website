import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { Socials } from '../data/Socials.js';

import './logo-anchor.js';

@customElement('about-me')
export class AboutMe extends LitElement {
  static styles = css`
    :host {
      display: grid;
      grid-template-rows: 1fr auto;
      gap: 1em;
      place-items: center;
      place-content: center;
    }

    #first-glance {
      display: inline-grid;
      grid-template-rows: 1fr auto;
      gap: 0.15em;
    }

    #details {
      font-size: 0.8em;
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
      gap: 0.6em;
      place-content: end;
    }
  `;

  render() {
    return html`
      <div id="first-glance">
        <span>Hey, I am</span>
        <h1>Robin Müller</h1>
        <div id="socials-container">
          ${repeat(
            Socials,
            social => html`
              <logo-anchor
                assetPath=${social.logoAssetPath}
                imgAlt=${social.alt}
                linkUrl=${social.href}
                logoSize="36px"
              ></logo-anchor>
            `
          )}
        </div>
      </div>
    `;
  }
}
