import type { PlasmoCSConfig } from 'plasmo'

export const config: PlasmoCSConfig = {
  matches: ['<all_urls>'],
  all_frames: true,
  run_at: 'document_end',
}

console.log('Hello from content script!')
