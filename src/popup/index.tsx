// import type { RequestBody, ResponseBody } from 'src/contents/messages/get-html'

import { useEffect, useState } from 'react'

import { sendToContentScript } from '@plasmohq/messaging'

import { generateMDLink } from 'src/lib/link'

import 'src/style/global.css'

export default function IndexPopup() {
  const [data, setData] = useState('Page is not ready yet')

  useEffect(() => {
    // const fetching = async () => {
    //   const { html, url } = await sendToContentScript<
    //     RequestBody,
    //     ResponseBody
    //   >({ name: 'whatever', body: undefined }, window)
    //   const linkString = generateMDLink(url, html, {})
    //   setData(linkString)
    //   await navigator.clipboard.writeText(linkString)
    // }
    // fetching().catch(console.error)

    // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    setData('xxxxxxxx')
  })

  return (
    <div
      style={{
        padding: 16,
      }}
    >
      {data}
    </div>
  )
}
