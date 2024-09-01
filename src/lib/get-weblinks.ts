export const getWebLinks = (text: string): string[] => {
  const linkRegex = /http[s]?:\/\/\S+/gi // 匹配所有网页链接的正则表达式
  const lines = text.split('\n')
  const links: string[] = []

  for (const rawline of lines) {
    const line = rawline.trim()
    const matches =
      !line.startsWith('#') && !line.startsWith('//') && line.match(linkRegex)

    if (matches) {
      links.push(...matches)
    }
  }

  return links
}

// in-source test suites
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('extract url', () => {
    const text = `这是一段文本，包含多行文本。
这一行包含一个网页链接: https://google.com
这一行不包含任何链接。
这一行包含另一个网页链接: http://example.com`

    expect(getWebLinks(text)).toStrictEqual([
      'https://google.com',
      'http://example.com',
    ])
  })

  it('comments', () => {
    const text = `
    // https://google.com
    # https://github.com
    https://github.com/google
`

    expect(getWebLinks(text)).toStrictEqual(['https://github.com/google'])
  })

  it('nothing', () => {
    const text = `
    // https://google.com
    # https://github.com
    hddttps://github.com/google
`

    expect(getWebLinks(text)).toStrictEqual([])
  })
}
