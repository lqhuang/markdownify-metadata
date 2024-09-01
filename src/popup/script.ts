import browser from 'webextension-polyfill'

import { generateMDLink } from 'src/lib/link'

const [currTab] = await browser.tabs.query({
  lastFocusedWindow: true,
  currentWindow: true,
  active: true,
})
// console.log(currTab)
const { title, url, status } = currTab

if (status === 'complete') {
  const response = await browser.tabs.executeScript({
    code: `document.documentElement.outerHTML`,
  })
  // console.log(response.length)
  const html = response[0] as string
  const url = currTab.url!
  const linkString = generateMDLink(url, html, {})
  document.querySelector('#popup-content')!.innerHTML = `
      <code>${linkString}</code>
    `
  await navigator.clipboard.writeText(linkString)
} else {
  document.querySelector('#popup-content')!.innerHTML = `
      Page is not ready yet
    `
}

// const linkString = makeMarkdownLink(html)

// document.querySelector('#popup-content')!.innerHTML = `
//   <code>${linkString}</code>
// `
