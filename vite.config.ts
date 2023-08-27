import type { Manifest } from 'webextension-polyfill-ts'

import { defineConfig } from 'vite'
import webExtension from '@samrum/vite-plugin-web-extension'

const manifest: Manifest.WebExtensionManifest = {
  manifest_version: 3,
  name: 'markify-webinfo',
  description: 'Extract website info into markdown link',
  version: '0.0.1',
  icons: {
    '64': 'icons/icon.png',
  },
  content_scripts: [
    {
      matches: ['*://github.com/*'],
      js: ['src/content_script.js'],
    },
  ],
  action: {
    default_icon: {
      '64': 'icons/icon.png',
    },
    default_popup: 'src/action/index.html',
    default_title: 'markify',
  },
  options_ui: {
    page: 'src/options/index.html',
  },
}

const isDev = process.env.NODE_ENV !== 'production'
const isFirefox = process.env.EXTENSION === 'firefox'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'import.meta.vitest': 'undefined',
  },
  resolve: {
    alias: {
      src: `${__dirname}/src`,
    },
  },
  plugins: [
    webExtension({
      manifest,
    }),
  ],
  assetsInclude: ['icons/**.png'],
  build: {
    // assetsDir: "assets",
  },
})
