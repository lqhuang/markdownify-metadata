import type { CheerioAPI } from 'cheerio'
import type { RuleSet } from './types'

import { maxBy } from 'es-toolkit'

import { metadataRules } from './rules'

export type RuleName = keyof typeof metadataRules

const defaultScorer = <T>(result: T | undefined, index: number) =>
  result ? length - index : 0

const defaultProcessor = <T>(value: T | undefined, context: unknown) =>
  value as T

export const runRule = <T>(ruleSet: RuleSet<T>, doc: CheerioAPI): T => {
  const processor = ruleSet.processor ?? defaultProcessor

  const scorer = ruleSet.scorer ?? defaultScorer

  const scored = ruleSet.rules.map((rule, index) => {
    const result = processor(rule(doc), {})
    return {
      score: scorer(result, index),
      content: result,
    }
  })

  const best = maxBy(scored, item => item.score)!
  return best.content
}

const getMetaData = function (name: RuleName, doc: CheerioAPI) {
  const result = runRule(metadataRules[name], doc)
  return result
}

export { getMetaData }
