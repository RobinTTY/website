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
    :host {
      display: grid;
      grid-template-rows: 1fr auto;
      justify-items: center;
    }

    about-me {
      height: 75vh;
    }

    section-separator {
      margin-bottom: 3em;
    }

    .projects {
      display: grid;
      grid-template-columns: auto;
      gap: 4em;

      padding: 0 1em;
    }
  `;

  render() {
    return html`
      <about-me></about-me>
      <section-separator></section-separator>
      <div class="projects">
        ${repeat(
          PersonalProjects,
          (project, index) => html` <project-showcase
            projectTitle=${project.title}
            description=${project.description}
            projectImageAssetPath=${project.projectImageAssetPath}
            .technologies=${project.technologies}
            .links=${project.links}
            ?imageOnLeft=${index % 2 === 0}
          ></project-showcase>`
        )}
      </div>
    `;
  }
}
