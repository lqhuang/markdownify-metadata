import type { CheerioAPI } from 'cheerio'

export type Rule<T> = (doc: CheerioAPI) => T | undefined

export type RuleSet<T> = {
  rules: Rule<T>[]
  scorer?: (result: T | undefined, index: number) => number
  processor?: (value: T | undefined, context: unknown) => T
}
