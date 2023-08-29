import { load } from 'cheerio'

export const makeMarkdownLink = (html: string) => {
  const doc = load(html)
  const fullUrl = doc('meta[property="og:url"]').attr('content')
  console.log('fullUrl', fullUrl)
  const about = doc('.f4.my-3').text()?.trim()
  const short = fullUrl?.substring(19)
  const href = doc(
    'div.my-3:nth-child(3) > span:nth-child(2) > a:nth-child(1)',
  ).attr('href')

  // console.log('href', href)
  // const realHref = href?.startsWith('')

  return href
    ? `- [${short}](${fullUrl}): ${about} <${href}>`
    : `- [${short}](${fullUrl}): ${about}`
}
