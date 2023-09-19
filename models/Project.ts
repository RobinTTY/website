import { AnchorData } from './AnchorData.js';

export type Project = {
  title: string;
  description: string;
  projectImageAssetPath: string;
  technologies: string[];
  links: Array<AnchorData>;
};
