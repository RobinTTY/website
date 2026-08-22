import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { Socials } from '../data/Socials.js';

/** Intrinsic ratio of the cut-out figure, used to reserve its box up front. */
const FIGURE_RATIO = 1.0811;
const FIGURE_WIDTH = 560;

@customElement('about-me')
export class AboutMe extends LitElement {
  static styles = css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    :host {
      display: grid;
      position: relative;
      width: 100%;
      overflow: hidden;
      isolation: isolate;

      /* Deep at the top, resolving into the page's own color at the bottom
         edge so the hero meets the projects section without a seam. */
      background: linear-gradient(
        to bottom,
        #10141d 0%,
        #151a26 72%,
        #1a202c 100%
      );
    }

    /* The atmosphere layers are siblings of the frame, not children, so they
       span the whole viewport. Bounded by the frame they would be clipped at
       its max-width, leaving a hard vertical edge mid-page. */
    #glow,
    #vignette,
    #grain {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    #glow {
      z-index: 0;
      /* Tracks the figure, which sits just right of the centred frame. */
      background: radial-gradient(
        circle 820px at calc(50% + 340px) 46%,
        #ff7a4542 0%,
        #bf4a5e20 40%,
        transparent 72%
      );
    }

    #vignette {
      z-index: 2;
      background: linear-gradient(to bottom, transparent 62%, #1a202cd9 100%);
    }

    /* Film grain — keeps the glow from banding on dark screens. */
    #grain {
      z-index: 4;
      opacity: 0.05;
      mix-blend-mode: overlay;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E");
    }

    /* Keeps the figure and the text in relation to each other on wide
       viewports instead of drifting apart to opposite screen edges. */
    #frame {
      position: relative;
      width: 100%;
      max-width: 1180px;
      margin: 0 auto;
    }

    #figure {
      position: absolute;
      z-index: 1;
      right: -40px;
      bottom: -70px;
      width: clamp(20rem, 44vw, ${FIGURE_WIDTH}px);
      /* Overrides the width/height attributes' presentational hint; those are
         only there to reserve the box before the image arrives. */
      height: auto;
      /* The source photo clips the shoulders, so dissolve the bottom edge
         rather than showing the cut. */
      -webkit-mask-image: linear-gradient(to bottom, #000 76%, transparent 99%);
      mask-image: linear-gradient(to bottom, #000 76%, transparent 99%);
    }

    #content {
      position: relative;
      z-index: 3;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 0 3.6rem;
      max-width: 34rem;
    }

    .label {
      font-size: 0.7rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #ff8a5c;
      margin-bottom: 1.4rem;
    }

    h1 {
      font-size: clamp(2.6rem, 6.2vw, 5.4rem);
      font-weight: 800;
      line-height: 0.92;
      letter-spacing: -0.045em;
      color: #fff;
      margin: 0 0 1.5rem;
    }

    #bio {
      font-size: 1.1rem;
      font-weight: 400;
      line-height: 1.6;
      color: #a4adbe;
      margin: 0 0 1.9rem;
      max-width: 25rem;
    }

    #socials {
      display: flex;
      flex-wrap: wrap;
      gap: 1.6rem;
    }

    #socials a {
      font-size: 0.7rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #dbe1ec;
      text-decoration: none;
      border-bottom: 1px solid #ffffff2e;
      padding-bottom: 3px;
      transition:
        color 0.2s ease,
        border-color 0.2s ease;
    }

    #socials a:hover {
      color: #fff;
      border-bottom-color: #ff8a5c;
    }

    #socials a:focus-visible {
      outline: 2px solid #ff8a5c;
      outline-offset: 4px;
    }

    /* Below this there is no room for figure and text side by side, so the
       figure moves behind the copy instead of under it. The scrim then has to
       carry the contrast that the layout was providing before. */
    @media (max-width: 900px) {
      #glow {
        background: radial-gradient(
          circle 520px at 50% 62%,
          #ff7a4542 0%,
          #bf4a5e20 42%,
          transparent 74%
        );
      }

      #figure {
        right: auto;
        left: 50%;
        transform: translateX(-50%);
        bottom: -40px;
        width: min(30rem, 118vw);
        -webkit-mask-image: linear-gradient(
          to bottom,
          #000 72%,
          transparent 97%
        );
        mask-image: linear-gradient(to bottom, #000 72%, transparent 97%);
      }

      /* Strong where the copy sits, out of the way over his face, then
         resolving into the page color at the bottom edge. */
      #vignette {
        background: linear-gradient(
          to bottom,
          #0e121ae0 0%,
          #0e121ac9 30%,
          #0e121a73 48%,
          #0e121a00 64%,
          #1a202c4d 86%,
          #1a202cf2 100%
        );
      }

      #content {
        justify-content: flex-start;
        padding: 3.4rem 1.8rem 0;
        max-width: none;
      }

      #bio {
        font-size: 1rem;
        max-width: 24rem;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #socials a {
        transition: none;
      }
    }
  `;

  render() {
    return html`
      <div id="glow"></div>
      <div id="frame">
        <picture>
          <source
            type="image/avif"
            srcset="
              /assets/portrait/figure-560.avif   560w,
              /assets/portrait/figure-1120.avif 1120w
            "
            sizes="(max-width: 900px) 24rem, (max-width: 1280px) 44vw, ${FIGURE_WIDTH}px"
          />
          <source
            type="image/webp"
            srcset="
              /assets/portrait/figure-560.webp   560w,
              /assets/portrait/figure-1120.webp 1120w
            "
            sizes="(max-width: 900px) 24rem, (max-width: 1280px) 44vw, ${FIGURE_WIDTH}px"
          />
          <img
            id="figure"
            src="/assets/portrait/figure-560.webp"
            width=${FIGURE_WIDTH}
            height=${Math.round(FIGURE_WIDTH / FIGURE_RATIO)}
            alt=""
            fetchpriority="high"
            decoding="async"
          />
        </picture>
        <div id="content">
          <span class="label">Software developer</span>
          <h1>Robin<br />Müller</h1>
          <p id="bio">
            Currently working primarily with .NET and web technologies. Also
            having fun with all sorts of cloud platforms, Kubernetes and similar
            things.
          </p>
          <div id="socials">
            ${repeat(
              Socials,
              social => html`
                <a href=${social.href} target="_blank" rel="noopener noreferrer"
                  >${social.alt}</a
                >
              `,
            )}
          </div>
        </div>
      </div>
      <div id="vignette"></div>
      <div id="grain"></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'about-me': AboutMe;
  }
}
