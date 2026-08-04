import { AnchorData } from './AnchorData.js';

export type Project = {
  title: string;
  description: string;
  projectImageAssetPath: string;
  /** Intrinsic pixel size of the image, so the browser can reserve its box. */
  projectImageWidth: number;
  projectImageHeight: number;
  technologies: string[];
  links: Array<AnchorData>;
};
