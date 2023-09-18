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
      links: [
        {
          alt: 'Github',
          logoAssetPath: '/assets/brands/github.svg',
          href: 'https://github.com/RobinTTY/PersonalFinanceDashboard',
          logoSize: '24px',
        },
        {
          alt: 'Website',
          logoAssetPath: '/assets/common/external-link.svg',
          href: 'https://robintty.github.io/PersonalFinanceDashboard/',
          logoSize: '24px',
        },
      ],
    },
    // {
    //   title: 'NordigenApiClient',
    //   description: 'A C# client for the open banking API of nordigen.com',
    //   technologies: ['C#', '.NET 7', 'API'],
    //   links: [],
    // },
    // {
    //   title: 'Website',
    //   description: 'My personal website (you are here)',
    //   technologies: ['TypeScript', 'LitElement', 'Web Components'],
    //   links: [],
    // },
    // {
    //   title: 'TBA...',
    //   description:
    //     'A tracker for your personal finances I am currently working on',
    //   technologies: ['React', 'C#', 'GraphQL'],
    //   links: [],
    // },
    // {
    //   title: 'BME680 Driver',
    //   description:
    //     'Device driver for the Bosch BME680 temperature, humidity, pressure, air quality sensor',
    //   technologies: ['C#', 'IOT', 'Hardware'],
    //   links: [],
    // },
  ];

  render() {
    return html`
      <about-me></about-me>
      <section-separator></section-separator>
      ${repeat(
        this._projects,
        project => html` <project-showcase
          projectTitle=${project.title}
          description=${project.description}
          .technologies=${project.technologies}
          .links=${project.links}
        ></project-showcase>`
      )}
    `;
  }
}
