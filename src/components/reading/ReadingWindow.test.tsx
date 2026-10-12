import { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { ReadingWindow } from './ReadingWindow'

vi.mock('../../i18n', () => ({ useI18n: () => ({ language: 'zh' }) }))

function Article() {
  const [open, setOpen] = useState(false)
  return <button onClick={() => setOpen(!open)}>{open ? '材料已展开' : '展开材料'}</button>
}

it('retains article controls and scroll position after comparison and folding', () => {
  const close = vi.fn()
  const { container, rerender } = render(<ReadingWindow routeKey="#/taxa?id=one" page={<Article />} onClose={close} />)
  fireEvent.click(screen.getByRole('button', { name: '展开材料' }))
  const scroll = container.querySelector<HTMLDivElement>('.reading-window__scroll')!
  scroll.scrollTop = 400
  fireEvent.scroll(scroll)
  rerender(<ReadingWindow routeKey="#/compare?left=one" page={<p>比较内容</p>} onClose={close} />)
  expect(scroll.scrollTop).toBe(0)
  rerender(<ReadingWindow routeKey="#/taxa?id=one" page={<Article />} onClose={close} />)
  expect(scroll.scrollTop).toBe(400)
  expect(screen.getByRole('button', { name: '材料已展开' })).toBeVisible()
  fireEvent.click(screen.getByRole('button', { name: '收起阅读窗' }))
  fireEvent.click(screen.getByRole('button', { name: /继续阅读/ }))
  expect(screen.getByRole('button', { name: '材料已展开' })).toBeVisible()
  fireEvent.click(screen.getByRole('button', { name: '关闭阅读窗，回到地图' }))
  expect(close).toHaveBeenCalledOnce()
})
