import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { AnchorData } from '../models/AnchorData.js';

@customElement('project-showcase')
export class ProjectShowcase extends LitElement {
  // TODO: Overlay text on picture for small viewports
  static styles = css`
    :host {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
    }

    img {
      z-index: 0;
      border-radius: 4px;
      filter: blur(1px);
    }

    img:hover {
      filter: none;
      transition: filter 0.5s ease;
    }

    .project-information {
      z-index: 1;
      display: grid;
      grid-template-rows: auto;
      gap: 0.4em;
    }

    .title {
      text-shadow: 1px 1px 0 #000000a3, -1px -1px 0 #000000a3,
        1px -1px 0 #000000a3, -1px 1px 0 #000000a3, 1px 1px 0 #000000a3;
    }

    .description {
      padding: 1.5em 2em;
      background-color: rgb(17, 34, 64);
      border-radius: 4px;
      box-shadow: 0 10px 20px -15px #121111;
      color: rgb(168, 178, 209);
    }

    .technologies {
      color: rgb(168, 178, 209);
      display: flex;
      list-style: none;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
    }

    .technologies > li {
      padding: 0.2em 0.4em;
    }

    .links > logo-anchor {
      padding: 0.1em;
    }

    @media (max-width: 860px) {
      :host {
        max-width: 600px;
      }

      img {
        grid-area: 1 / 1 / 1 / -1;
        width: 100%;
        filter: brightness(0.2);
      }

      .project-information {
        grid-area: 1 / 2 / 1 / 11;
        min-width: 0;
      }

      .title {
        font-size: 0.9em;
        font-weight: 600;
      }

      .description {
        font-size: 0.45em;
        font-weight: 500;
        text-align: justify;
      }

      .technologies {
        font-size: 0.45em;
        font-weight: 600;
      }
    }

    @media (min-width: 861px) {
      :host {
        max-width: 800px;
      }

      .content-left {
        grid-area: 1 / 1 / 1 / 8;
      }

      .content-right {
        grid-area: 1 / 6 / 1 / -1;
      }

      img {
        height: 360px;
        filter: brightness(0.5);
      }

      .description {
        font-size: 0.55em;
        font-weight: 500;
        text-align: justify;
      }

      .technologies {
        font-size: 0.5em;
        font-weight: 600;
      }
    }
  `;

  @property({ type: String })
  projectTitle = '';

  @property({ type: String })
  description = '';

  @property({ type: String })
  projectImageAssetPath = '';

  @property({ attribute: false })
  technologies: string[] = [];

  @property({ attribute: false })
  links: Array<AnchorData> = [];

  @property({ type: Boolean })
  imageOnLeft = false;

  render() {
    const imgClass = {
      'content-left': this.imageOnLeft,
      'content-right': !this.imageOnLeft,
    };
    const projectInfoClass = {
      'content-left': !this.imageOnLeft,
      'content-right': this.imageOnLeft,
    };

    const img = html`
      <img
        class=${classMap(imgClass)}
        src=${this.projectImageAssetPath}
        alt=${this.projectTitle}
      />
    `;

    const projectInformation = html`
      <div class="project-information ${classMap(projectInfoClass)}">
        <div class="title">${this.projectTitle}</div>
        <div class="description">${this.description}</div>
        <ul class="technologies">
          ${repeat(
            this.technologies,
            technology => html`<li>${technology}</li>`
          )}
        </ul>
        <div class="links">
          ${repeat(
            this.links,
            link => html`
              <logo-anchor
                assetPath=${link.logoAssetPath}
                imgAlt=${link.alt}
                linkUrl=${link.href}
                logoSize="24px"
              ></logo-anchor>
            `
          )}
        </div>
      </div>
    `;

    return html` ${img} ${projectInformation} `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'project-showcase': ProjectShowcase;
  }
}
