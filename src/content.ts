import type { PlasmoCSConfig } from 'plasmo'

export const config: PlasmoCSConfig = {
  matches: ['<all_urls>'],
  all_frames: true,
  run_at: 'document_end',
}

// console.log('content_script.js loaded')

// browser.runtime.onMessage.addListener(request => {
//   console.log('content_script.js received message', request)
//   if (request.type === 'getHtml') {
//     const html = document.documentElement.outerHTML

//     return html
//   } else {
//     return null
//   }
// })

// console.log('content_script.js done')
