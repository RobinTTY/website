import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { SocialData } from '../models/social-data.js';

import './logo-container.js';

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
      gap: 0.5em;
      place-content: end;
    }
  `;

  private _socials: SocialData[] = [
    {
      name: 'Github',
      assetPath: '/assets/third-party/github.svg',
      websiteUrl: 'https://github.com/RobinTTY',
    },
    {
      name: 'LinkedIn',
      assetPath: '/assets/third-party/linkedin.svg',
      websiteUrl: 'https://www.linkedin.com/in/robintty',
    },
    {
      name: 'Twitter',
      assetPath: '/assets/third-party/twitter.svg',
      websiteUrl: 'https://twitter.com/Robin_tty',
    },
  ];

  render() {
    return html`
      <div id="first-glance">
        <h1>Robin Müller</h1>
        <div id="socials-container">
          ${repeat(
            this._socials,
            social => html`
              <logo-container
                assetPath=${social.assetPath}
                imgAlt=${social.name}
                linkUrl=${social.websiteUrl}
              ></logo-container>
            `
          )}
        </div>
      </div>
    `;
  }
}
