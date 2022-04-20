import { ManifestV3Export } from 'rollup-plugin-chrome-extension'

const manifest: ManifestV3Export = {
  manifest_version: 3,
  name: 'crx',
  version: '0.0.1',
  background: {
    type: 'module',
    service_worker: 'src/background/index.ts'
  },
  icons: {
    '16': 'src/assets/logo.png',
    '48': 'src/assets/logo.png',
    '128': 'src/assets/logo.png'
  },
  action: {
    default_title: 'popup',
    // default_icon: 'src/asts/logo.png'
    default_popup: 'src/popup/index.html',
    default_icon: {
      16: 'src/assets/logo.png',
      48: 'src/assets/logo.png',
      128: 'src/assets/logo.png'
    }
  },
  options_page: 'src/options/index.html',
  content_scripts: [
    { js: ['src/content-scripts/index.ts'], matches: ['*://*/*'] }
  ]
}

export default manifest
