import { Project } from '../models/Project.js';

export const PersonalProjects: Project[] = [
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
    projectImageBasePath: '/assets/projects/pfd',
    projectImageWidth: 964,
    projectImageHeight: 764,
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
      'A C# client for the open banking API of Nordigen. Allows users to access bank account information, balances and transactions for more than 2300 banks.',
    projectImageBasePath: '/assets/projects/nordigen-api-client',
    projectImageWidth: 708,
    projectImageHeight: 535,
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
    projectImageBasePath: '/assets/projects/bme680',
    projectImageWidth: 786,
    projectImageHeight: 583,
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
    projectImageBasePath: '/assets/projects/website',
    projectImageWidth: 1050,
    projectImageHeight: 625,
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
