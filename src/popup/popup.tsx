import { useEffect, useState } from 'react'

import { generateMDLink } from 'src/lib/link'

import 'src/style/global.css'

export const Popup = () => {
  const [data, setData] = useState('Page is not ready yet')

  useEffect(() => {
    const fetching = async () => {
      // const linkString = generateMDLink(url, html, {})
      // await navigator.clipboard.writeText(linkString)
      // setData(linkString)
      // setData(url)
    }

    fetching().catch(console.error)
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
