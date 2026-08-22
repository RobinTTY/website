import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { PersonalProjects } from '../data/Projects.js';

import '../components/about-me.js';
import '../components/project-showcase.js';
import '../components/section-separator.js';

@customElement('home-route')
export class HomeRoute extends LitElement {
  static styles = css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    :host {
      display: grid;
      grid-template-rows: 1fr auto;
      justify-items: center;

      /* One content width for everything below the hero, matching the width
         the hero's own copy is laid out against. */
      --content-max: 960px;
      --content-pad: 1.8rem;
    }

    about-me {
      /* Full-bleed: the hero paints its own ground edge to edge. */
      width: 100%;
      height: 78vh;
      min-height: 34rem;
      max-height: 52rem;
    }

    section-separator {
      /* Air on both sides so the hero clearly ends before the projects begin,
         rather than the figure running into the heading. */
      margin-top: 4em;
      margin-bottom: 3em;

      width: 100%;
      max-width: var(--content-max);
      padding: 0 var(--content-pad);
    }

    /* Below the card's two-column breakpoint the copy needs a narrower
       measure, so the shared width comes down with it. */
    @media (max-width: 860px) {
      :host {
        --content-max: 42rem;
      }
    }

    .projects {
      display: grid;
      /* minmax(0, …) lets the cards shrink below their content width instead
         of forcing the grid wider than the page. */
      grid-template-columns: minmax(0, 1fr);
      justify-items: center;
      gap: 4em;

      width: 100%;
      max-width: var(--content-max);
      padding: 0 var(--content-pad);
    }
  `;

  render() {
    return html`
      <about-me></about-me>
      <section-separator></section-separator>
      <div class="projects">
        ${repeat(
          PersonalProjects,
          (project, index) =>
            html` <project-showcase
              projectTitle=${project.title}
              description=${project.description}
              projectImageAssetPath=${project.projectImageAssetPath}
              projectImageWidth=${project.projectImageWidth}
              projectImageHeight=${project.projectImageHeight}
              .technologies=${project.technologies}
              .links=${project.links}
              ?imageOnLeft=${index % 2 === 0}
            ></project-showcase>`,
        )}
      </div>
    `;
  }
}
