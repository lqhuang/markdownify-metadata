import type { PlasmoMessaging } from '@plasmohq/messaging'

export type RequestBody = undefined

export type ResponseBody = {
  html: string
  url: string
}

const handler: PlasmoMessaging.MessageHandler<
  RequestBody,
  ResponseBody
  // eslint-disable-next-line @typescript-eslint/require-await
> = async (req, resp) => {
  const message = window.document.querySelector('html')?.innerHTML
  resp.send({
    html: message ?? '',
    url: window.location.href,
  })
}

export default handler
