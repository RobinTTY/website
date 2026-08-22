import { AnchorData } from './AnchorData.js';

export type Project = {
  title: string;
  description: string;
  /**
   * Path to the project image without an extension. A matching .avif and
   * .webp are emitted for every project, and the markup offers both.
   */
  projectImageBasePath: string;
  /** Intrinsic pixel size of the image, so the browser can reserve its box. */
  projectImageWidth: number;
  projectImageHeight: number;
  technologies: string[];
  links: Array<AnchorData>;
};
