import { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ReadingWindow } from './ReadingWindow'

vi.mock('../../i18n', () => ({ useI18n: () => ({ language: 'zh' }) }))

function Fixture() {
  const [open, setOpen] = useState(false)
  const [showOpener, setShowOpener] = useState(true)
  const [route, setRoute] = useState('one')
  return <>
    {showOpener && <button type="button" onClick={() => setOpen(true)}>open reader</button>}
    <button type="button" onClick={() => setShowOpener(false)}>remove opener</button>
    <button type="button" onClick={() => setRoute('two')}>change node</button>
    <button type="button">outside control</button>
    <input aria-label="outside input" />
    <ReadingWindow
      routeKey={`#/taxa?id=${route}`}
      page={open ? <>
        <button type="button" onKeyDown={event => { if (event.key === 'Escape') event.preventDefault() }}>child escape handler</button>
        <div role="dialog" aria-label="nested"><button type="button">nested action</button></div>
        <input aria-label="reader input" />
        <button type="button">article control {route}</button>
      </> : null}
      onClose={() => setOpen(false)}
    />
  </>
}

const closeName = '关闭阅读窗，回到地图'

describe('ReadingWindow keyboard and focus lifecycle', () => {
  it('retains Escape handling, child-handled boundaries, and close-focus restoration', () => {
    render(<Fixture />)
    const opener = screen.getByRole('button', { name: 'open reader' })
    opener.focus()
    fireEvent.click(opener)
    const reader = document.querySelector('.reading-window')!
    const close = screen.getByRole('button', { name: closeName })
    expect(document.activeElement).toBe(close)

    fireEvent.keyDown(screen.getByRole('textbox', { name: 'outside input' }), { key: 'Escape' })
    fireEvent.keyDown(screen.getByRole('textbox', { name: 'reader input' }), { key: 'Escape' })
    fireEvent.keyDown(screen.getByRole('button', { name: 'child escape handler' }), { key: 'Escape' })
    fireEvent.keyDown(screen.getByRole('button', { name: 'nested action' }), { key: 'Escape' })
    expect(reader.classList.contains('is-hidden')).toBe(false)

    fireEvent.keyDown(close, { key: 'Escape' })
    expect(reader.classList.contains('is-hidden')).toBe(true)
    expect(document.activeElement).toBe(opener)
    fireEvent.click(opener)
    fireEvent.click(screen.getByRole('button', { name: closeName }))
    expect(reader.classList.contains('is-hidden')).toBe(true)
    expect(document.activeElement).toBe(opener)
  })

  it('uses visible outside focus if the opener is removed before close', () => {
    render(<Fixture />)
    const opener = screen.getByRole('button', { name: 'open reader' })
    opener.focus()
    fireEvent.click(opener)
    const fallback = screen.getByRole('button', { name: 'remove opener' })
    fireEvent.click(fallback)
    fireEvent.keyDown(screen.getByRole('button', { name: closeName }), { key: 'Escape' })
    expect(document.activeElement).toBe(fallback)
  })

  it('does not steal focus from a newly focused reader control on route change', () => {
    render(<Fixture />)
    fireEvent.click(screen.getByRole('button', { name: 'open reader' }))
    const userChoice = screen.getByRole('button', { name: '扩大阅读窗' })
    userChoice.focus()
    fireEvent.click(screen.getByRole('button', { name: 'change node' }))
    expect(screen.getByRole('button', { name: 'article control two' })).toBeTruthy()
    expect(document.activeElement).toBe(userChoice)
  })

  it('does not steal focus after the user moves to an outside control', () => {
    render(<Fixture />)
    fireEvent.click(screen.getByRole('button', { name: 'open reader' }))
    const outsideChoice = screen.getByRole('button', { name: 'outside control' })
    outsideChoice.focus()
    fireEvent.click(screen.getByRole('button', { name: 'change node' }))
    expect(document.activeElement).toBe(outsideChoice)
  })

  it('falls back to a visible reader control when route change hides the focused old-node control', () => {
    render(<Fixture />)
    fireEvent.click(screen.getByRole('button', { name: 'open reader' }))
    const oldControl = screen.getByRole('button', { name: 'article control one' })
    oldControl.focus()
    fireEvent.click(screen.getByRole('button', { name: 'change node' }))
    expect(document.activeElement).toBe(screen.getByRole('button', { name: closeName }))
    expect(document.activeElement).not.toBe(oldControl)
  })

  it('keeps initial open focus and the ordinary close fallback contract; unmounts safely', () => {
    const { unmount } = render(<Fixture />)
    const opener = screen.getByRole('button', { name: 'open reader' })
    opener.focus()
    fireEvent.click(opener)
    expect(document.activeElement).toBe(screen.getByRole('button', { name: closeName }))
    fireEvent.click(screen.getByRole('button', { name: 'remove opener' }))
    fireEvent.click(screen.getByRole('button', { name: closeName }))
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'remove opener' }))
    expect(() => unmount()).not.toThrow()
  })
})
