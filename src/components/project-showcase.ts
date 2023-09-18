import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { AnchorData } from '../models/AnchorData.js';

@customElement('project-showcase')
export class ProjectShowcase extends LitElement {
  // TODO: Overlay text on picture for small viewports
  static styles = css`
    :host {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
      max-width: 800px;
    }

    img {
      grid-row: 1;
      grid-column: 1 / 8;
      border-radius: 4px;
      z-index: 0;
      filter: blur(1px);
    }

    img:hover {
      filter: none;
      transition: filter 0.5s ease;
    }

    .project-information {
      grid-row: 1;
      grid-column: 6 / -1;
      z-index: 1;

      display: grid;
      grid-template-rows: auto;
      gap: 0.4em;
      text-align: right;
    }

    .description {
      padding: 1.5em 2em;
      background-color: rgb(17, 34, 64);
      border-radius: 4px;
      box-shadow: 0 10px 20px -15px #121111;

      font-size: 0.55em;
      font-weight: 500;
      text-align: justify;
      color: rgb(168, 178, 209);
    }

    .technologies {
      color: rgb(168, 178, 209);
      font-size: 0.5em;
      font-weight: 600;
    }

    .technologies > span {
      padding: 0.2em 0.4em;
    }

    .links > logo-anchor {
      padding: 0.1em;
    }
  `;

  @property({ type: String })
  projectTitle = '';

  @property({ type: String })
  description = '';

  @property({ attribute: false })
  technologies: string[] = [];

  @property({ attribute: false })
  links: Array<AnchorData> = [];

  render() {
    return html`
      <img
        src="../assets/projects/example-project-card.png"
        alt="example-project-card"
        height="360px"
      />
      <div class="project-information">
        <div class="title">${this.projectTitle}</div>
        <div class="description">${this.description}</div>
        <div class="technologies">
          ${repeat(
            this.technologies,
            technology => html`<span>${technology}</span>`
          )}
        </div>
        <div class="links">
          ${repeat(
            this.links,
            link => html`
              <logo-anchor
                assetPath=${link.logoAssetPath}
                imgAlt=${link.alt}
                linkUrl=${link.href}
                logoSize=${ifDefined(link.logoSize)}
              ></logo-anchor>
            `
          )}
        </div>
      </div>
    `;
  }
}
