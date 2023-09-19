import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { Project } from '../models/Project.js';

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
      margin-top: 30vh;
      margin-bottom: 30vh;
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

  private _projects: Project[] = [
    {
      title: 'Personal Finance Dashboard',
      description:
        'A web app built to visualize your personal finances, with tools that help analyze spending habits and performance of investments. Interacts with bank/stock APIs to automate much of the process.',
      technologies: [
        'React',
        'Mantine',
        'Nivo',
        '.NET',
        'GraphQL',
        'MongoDB',
        'SQLite',
      ],
      projectImageAssetPath: '/assets/projects/pfd.png',
      links: [
        {
          alt: 'Github',
          logoAssetPath: '/assets/brands/github.svg',
          href: 'https://github.com/RobinTTY/PersonalFinanceDashboard',
        },
        {
          alt: 'Website',
          logoAssetPath: '/assets/common/external-link.svg',
          href: 'https://robintty.github.io/PersonalFinanceDashboard/',
        },
      ],
    },
    {
      title: 'Nordigen API client',
      description:
        'A C# client for the open banking API of Nordigen. Allows users to access bank account information, balances and transactions for more 2300 banks.',
      projectImageAssetPath: '/assets/projects/nordigen-api-client.png',
      technologies: ['C#', '.NET 7', 'REST', 'Nordigen API'],
      links: [
        {
          alt: 'Github',
          logoAssetPath: '/assets/brands/github.svg',
          href: 'https://github.com/RobinTTY/NordigenApiClient',
        },
        {
          alt: 'Nuget',
          logoAssetPath: '/assets/brands/nuget.svg',
          href: 'https://www.nuget.org/packages/RobinTTY.NordigenApiClient',
        },
      ],
    },
    {
      title: 'BME680 Driver',
      description:
        'Device driver for the Bosch BME680 temperature, humidity, pressure and air quality sensor. ',
      projectImageAssetPath: '/assets/projects/bme680.webp',
      technologies: ['C#', 'IOT', 'Hardware'],
      links: [
        {
          alt: 'Github',
          logoAssetPath: '/assets/brands/github.svg',
          href: 'https://github.com/RobinTTY/BME680',
        },
        {
          alt: 'Nuget',
          logoAssetPath: '/assets/brands/nuget.svg',
          href: 'https://www.nuget.org/packages/Bme680Driver/',
        },
      ],
    },
    {
      title: 'Website',
      description:
        'My personal website (you are here). Built using Lit, a lightweight web components library.',
      projectImageAssetPath: '/assets/projects/website.png',
      technologies: ['TypeScript', 'Lit', 'Web Components'],
      links: [
        {
          alt: 'Github',
          logoAssetPath: '/assets/brands/github.svg',
          href: 'https://github.com/RobinTTY/RobinTTY.github.io',
        },
        {
          alt: 'Website',
          logoAssetPath: '/assets/common/external-link.svg',
          href: 'https://www.robintty.com/',
        },
      ],
    },
  ];

  render() {
    return html`
      <about-me></about-me>
      <section-separator></section-separator>
      <div class="projects">
        ${repeat(
          this._projects,
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
