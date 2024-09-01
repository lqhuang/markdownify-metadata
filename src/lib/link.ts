import { load, type CheerioAPI } from 'cheerio'
import { getMetaData } from 'src/metadata'

export const makeGithubLink = (doc: CheerioAPI) => {
  const title = getMetaData('title', doc)
  const url = getMetaData('url', doc)
  const short = url.substring(19)

  const about = doc('.f4.my-3').text()?.trim()
  const href = doc(
    'div.my-3:nth-child(3) > span:nth-child(2) > a:nth-child(1)',
  ).attr('href')

  console.log('href:', href)

  return href
    ? `- [${short}](${url}): ${about} <${href}>`
    : `- [${short}](${url}): ${about}`
}

export const generateMDLink = (url: string, html: string, options: object) => {
  const doc = load(html)
  if (url.startsWith('https://github.com')) {
    return makeGithubLink(doc)
  } else {
    const title = getMetaData('title', doc)
    const description = getMetaData('description', doc)
    return `- [${title}](${url}): ${description}`
  }
}
