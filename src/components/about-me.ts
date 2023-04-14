import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { SocialData } from '../models/social-data.js';

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

    .brand-logo {
      height: 36px;
      filter: invert(1);
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
      websiteUrl: 'https://www.linkedin.com/in/robin-m%C3%BCller-574782170/',
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
              <a
                href=${social.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="brand-logo"
                  src=${social.assetPath}
                  alt="${social.name} logo"
                  loading="lazy"
                  fetchpriority="high"
                />
              </a>
            `
          )}
        </div>
      </div>
    `;
  }
}
