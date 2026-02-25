import { defineConfig } from 'wxt'

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  modules: ['@wxt-dev/module-react'],
  // react: {},
  manifest: {
    name: 'markdownify-metadata',
    action: {},
    permissions: [
      'storage',
      'sidePanel',
      'scripting',
      'tabs',
      'activeTab',
      'clipboardWrite',
    ],
    host_permissions: ['https://github.com/*', 'https://gitlab.com/*'],
    optional_host_permissions: ['https://*/*', 'wss://*/*'],
  },
})
