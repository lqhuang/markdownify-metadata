import type { Manifest } from 'webextension-polyfill'

import { defineConfig } from 'vite'
import webExtension from 'vite-plugin-web-extension'

const manifest: () => Manifest.WebExtensionManifest = () => ({
  manifest_version: 2, // v3 is still buggy in Firefox
  name: 'markdownify-metadata',
  description: 'Extract website info into markdown link',
  version: '0.0.1',
  icons: {
    '64': 'icons/icon.png',
  },
  permissions: ['tabs', 'activeTab', 'clipboardWrite'],
  browser_action: {
    default_title: 'markdownify-metadata',
    default_icon: {
      '64': 'icons/icon.png',
    },
    default_popup: 'src/popup/index.html',
  },
  // content_scripts: [
  //   {
  //     matches: ['<all_urls>'],
  //     js: ['src/content_script.js'],
  //   },
  // ],
  options_ui: {
    page: 'src/options/index.html',
  },
})

const isDev = process.env.NODE_ENV !== 'production'
const isFirefox = process.env.EXTENSION === 'firefox'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [webExtension({ manifest })],
  define: {
    // 'import.meta.vitest': 'undefined',
  },
  resolve: {
    alias: {
      src: `${__dirname}/src`,
    },
  },
  build: {
    emptyOutDir: false,
    sourcemap: isDev ? 'inline' : false,
    copyPublicDir: true,
    watch: isDev ? {} : null,
    target: 'esnext',
  },
})
