import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { NodeReadingSections } from './NodeReadingSections'

it('opens the real source beside its finding and retains an explicit source-language account', () => {
  render(<NodeReadingSections language="zh" sources={[{ id: 'study:source', title: 'Original study', url: 'https://example.org/paper', scope: 'The sampled specimens only.' }]} sections={[
    { id: 'specimen', topic: 'morphology', text: { en: 'Two specimens preserve eight fin spines.' }, sourceIds: ['study:source'], locator: 'Fig. 4', context: ['One collection; no behaviour was recorded.'] },
  ]} />)
  expect(screen.getByText('Two specimens preserve eight fin spines.').closest('[lang]')).toHaveAttribute('lang', 'en')
  expect(screen.getByText(/原语言/)).toBeInTheDocument()
  expect(screen.getByText('One collection; no behaviour was recorded.')).toBeVisible()
  fireEvent.click(screen.getByText('本段的来源与材料'))
  expect(screen.getByRole('link', { name: 'Original study ↗' })).toHaveAttribute('href', 'https://example.org/paper')
  expect(screen.getByText('Fig. 4')).toBeVisible()
})
