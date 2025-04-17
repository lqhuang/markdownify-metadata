import { useEffect, useState } from 'react'

import { browser } from 'wxt/browser'

import { generateMDLink } from '@/lib/link'

import '@/styles/globals.css'

export function App() {
  const [data, setData] = useState('Page is not ready yet')

  useEffect(() => {
    const fetching = async () => {
      const [currTab] = await browser.tabs.query({
        lastFocusedWindow: true,
        currentWindow: true,
        active: true,
      })
      const { title, url, status } = currTab
      if (status === 'complete' && url) {
        const response = await browser.tabs.executeScript({
          code: `document.documentElement.outerHTML`,
        })
        // console.log(response.length)
        const html = response[0] as string
        const linkString = generateMDLink(url, html, {})

        setData(linkString)

        await navigator.clipboard.writeText(linkString)
      }
    }

    fetching().catch(console.error)
  })

  return <div className="prose p-4">{data}</div>
}
