import type { RuleSet } from './types'

const title: RuleSet<string> = {
  rules: [
    doc => doc('title').text(),
    doc => doc('meta[name="og:title"][content]').attr('content'),
    doc => doc('meta[property="og:title"][content]').attr('content'),
  ],
  processor(value, context) {
    return value ?? 'no title found'
  },
}

const url: RuleSet<string> = {
  rules: [
    doc => doc('meta[property="og:url"][content]').attr('content'),
    doc => doc('meta[name="og:url"][content]').attr('content'),
  ],
  processor(value, context) {
    return value ?? 'no url found'
  },
}

const description: RuleSet<string> = {
  rules: [
    doc => doc('meta[property="description" i][content]').attr('content'),
    doc => doc('meta[name="description" i][content]').attr('content'),
    doc => doc('meta[property="summary" i][content]').attr('content'),
    doc => doc('meta[name="summary" i][content]').attr('content'),
    doc => doc('meta[property="og:description"][content]').attr('content'),
    doc => doc('meta[name="og:description"][content]').attr('content'),
    doc => doc('meta[property="twitter:description"][content]').attr('content'),
    doc => doc('meta[name="twitter:description"][content]').attr('content'),
  ],
  processor(value, context) {
    return value ?? 'no description found'
  },
}

export const metadataRules = {
  title,
  url,
  description,
}