import { Fragment } from 'react'
import { readerInlineParts } from '../../utils/nodeReading.mjs'

export function ReaderInlineText({ text }: { text: string }) {
  return <>{readerInlineParts(text).map((part, index) => <Fragment key={index}>
    {part.type === 'emphasis' ? <em>{part.text}</em> : part.type === 'code' ? <code>{part.text}</code> : part.text}
  </Fragment>)}</>
}
