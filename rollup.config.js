import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets';
import esbuild from 'rollup-plugin-esbuild';
import { generateSW } from 'rollup-plugin-workbox';
import path from 'path';

export default {
  input: 'index.html',
  output: {
    entryFileNames: '[hash].js',
    chunkFileNames: '[hash].js',
    assetFileNames: '[hash][extname]',
    format: 'es',
    dir: 'dist',
  },
  preserveEntrySignatures: false,

  plugins: [
    /** Enable using HTML as rollup entrypoint */
    html({
      minify: true,
      injectServiceWorker: true,
      serviceWorkerPath: 'dist/sw.js',
      /**
       * The copyfiles step already places everything under dist/assets, and
       * the plugin cannot rewrite url() inside inline @font-face. Letting
       * it hash-extract linked assets would emit a second copy under a hashed
       * name and leave the preload pointing somewhere the CSS never requests.
       */
      extractAssets: false,
    }),
    /** Resolve bare module imports */
    nodeResolve(),
    /** Minify JS, compile JS to a lower language target */
    esbuild({
      minify: true,
      target: ['chrome100', 'firefox100', 'safari15.4'],
    }),
    /** Bundle assets references via import.meta.url */
    importMetaAssets(),
    /** Minify html and css tagged template literals */
    babel({
      babelHelpers: 'bundled',
      plugins: [
        [
          'babel-plugin-template-html-minifier',
          {
            modules: { lit: ['html', { name: 'css', encapsulation: 'style' }] },
            failOnError: false,
            strictCSS: true,
            htmlMinifier: {
              collapseWhitespace: true,
              conservativeCollapse: true,
              removeComments: true,
              caseSensitive: true,
              minifyCSS: true,
            },
          },
        ],
      ],
    }),
    /** Create and inject a service worker */
    generateSW({
      // Variants only some clients ever fetch stay out of the precache and
      // come from the network instead: the 2x portrait, and the WebP project
      // fallbacks that exist for browsers without AVIF.
      globIgnores: [
        'polyfills/*.js',
        'nomodule-*.js',
        'assets/portrait/figure-1120.*',
        'assets/projects/*.webp',
      ],
      navigateFallback: '/index.html',
      // where to output the generated sw
      swDest: path.join('dist', 'sw.js'),
      // directory to match patterns against to be precached
      globDirectory: path.join('dist'),
      // cache the shell plus every asset the pages actually reference, so the
      // site is usable offline rather than loading with missing images
      globPatterns: ['**/*.{html,js,css,webmanifest,svg,png,webp,avif,ico,woff2}'],
      skipWaiting: true,
      clientsClaim: true,
      runtimeCaching: [{ urlPattern: 'polyfills/*.js', handler: 'CacheFirst' }],
    }),
  ],
};
