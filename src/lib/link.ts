import { load, type CheerioAPI } from 'cheerio'
import { getMetaData } from '@/metadata'

export const makeGithubLink = (doc: CheerioAPI) => {
  const title = getMetaData('title', doc)
  const url = getMetaData('url', doc)
  const short = url.substring(19)

  const about = doc('.f4.tmp-my-3').text()?.trim()
  const href = doc(
    'div.tmp-my-3:nth-child(3) > span:nth-child(2) > a:nth-child(1)',
  ).attr('href')

  // console.log('href:', href)

  return href
    ? `- [gh:${short}](${url}): ${about} <${href}>`
    : `- [gh:${short}](${url}): ${about}`
}

/**
 * Test cases
 *
 * 1. https://codeberg.org/ziglang/zig
 */
export const makeCodebergLink = (doc: CheerioAPI) => {
  const title = getMetaData('title', doc)
  const url = getMetaData('url', doc)
  const short = url.substring(21)

  const about = doc('div#repo-desc > span.description').text()?.trim()
  const href = doc('div#repo-desc > a').attr('href')
  // console.log('href:', href)

  return href
    ? `- [codeberg:${short}](${url}): ${about} <${href}>`
    : `- [codeberg:${short}](${url}): ${about}`
}

/**
 * Test cases
 *
 * 1. https://gitlab.com/antora/antora
 */
export const makeGitlabLink = (doc: CheerioAPI) => {
  const title = getMetaData('title', doc)
  const url = getMetaData('url', doc)
  const short = url.substring(19)

  const about = doc('div.read-more-content').text()?.trim()
  // const href = doc('div#repo-desc > a').attr('href')
  // console.log('href:', href)

  return `- [gitlab:${short}](${url}): ${about}`
}

export const generateMDLink = (url: string, html: string, options: object) => {
  const doc = load(html)
  if (url.startsWith('https://github.com')) {
    return makeGithubLink(doc)
  } else if (url.startsWith('https://codeberg.org')) {
    return makeCodebergLink(doc)
  } else if (url.startsWith('https://gitlab.com')) {
    return makeGitlabLink(doc)
  } else {
    const title = getMetaData('title', doc)
    const description = getMetaData('description', doc)
    return `- [${title}](${url}): ${description}`
  }
}
