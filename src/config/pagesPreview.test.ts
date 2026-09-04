import { describe, expect, it } from 'vitest'
import { isPagesPreviewEnvironment, isPreviewEventAllowed, isPreviewRouteLocked, isPreviewStoryAllowed, isPreviewStoryTaxonAllowed, isPreviewTaxonAllowed } from './pagesPreview'

describe('Pages preview edition policy', () => {
  it('is opt-in and never applies to mobile builds', () => {
    expect(isPagesPreviewEnvironment({ PAGES_PREVIEW: 'true', mode: 'production' })).toBe(true)
    expect(isPagesPreviewEnvironment({ PAGES_PREVIEW: 'true', mode: 'mobile' })).toBe(false)
    expect(isPagesPreviewEnvironment({ PAGES_PREVIEW: undefined, mode: 'production' })).toBe(false)
  })

  it('keeps core and selected resource routes, while closing full directories/tools', () => {
    expect(isPreviewRouteLocked('home', new URLSearchParams(), true)).toBe(false)
    expect(isPreviewRouteLocked('explore', new URLSearchParams('taxon=dinosauria'), true)).toBe(false)
    expect(isPreviewRouteLocked('explore', new URLSearchParams('taxon=primates'), true)).toBe(true)
    expect(isPreviewRouteLocked('taxa', new URLSearchParams('id=perissodactyla'), true)).toBe(false)
    expect(isPreviewRouteLocked('taxa', new URLSearchParams(), true)).toBe(true)
    expect(isPreviewRouteLocked('registry', new URLSearchParams('id=6MB3T'), true)).toBe(true)
    expect(isPreviewRouteLocked('research', new URLSearchParams(), true)).toBe(true)
    expect(isPreviewRouteLocked('stories', new URLSearchParams(), true)).toBe(false)
    expect(isPreviewRouteLocked('stories', new URLSearchParams('id=whale-evidence-without-an-ancestor-ladder'), true)).toBe(false)
    expect(isPreviewRouteLocked('stories', new URLSearchParams('id=primates-evidence-without-an-ancestor-ladder'), true)).toBe(true)
    expect(isPreviewRouteLocked('events', new URLSearchParams(), true)).toBe(false)
    expect(isPreviewRouteLocked('events', new URLSearchParams('id=k-pg-extinction'), true)).toBe(false)
    expect(isPreviewRouteLocked('events', new URLSearchParams('id=great-oxidation'), true)).toBe(false)
    expect(isPreviewRouteLocked('explore', new URLSearchParams('taxon=dinosauria&story=whale-evidence-without-an-ancestor-ladder'), true)).toBe(true)
    expect(isPreviewRouteLocked('methods', new URLSearchParams(), true)).toBe(false)
    expect(isPreviewRouteLocked('data', new URLSearchParams(), true)).toBe(true)
    expect(isPreviewRouteLocked('taxa', new URLSearchParams(), false)).toBe(false)
  })

  it('does not allow a non-selected Explorer entity to bypass the package boundary', () => {
    expect(isPreviewTaxonAllowed('dinosauria')).toBe(true)
    expect(isPreviewTaxonAllowed('primates')).toBe(false)
    expect(isPreviewTaxonAllowed(null)).toBe(true)
    expect(isPreviewStoryAllowed('whale-evidence-without-an-ancestor-ladder')).toBe(true)
    expect(isPreviewStoryAllowed('primates-evidence-without-an-ancestor-ladder')).toBe(false)
    expect(isPreviewStoryTaxonAllowed('whale-evidence-without-an-ancestor-ladder', 'cetacea')).toBe(true)
    expect(isPreviewStoryTaxonAllowed('whale-evidence-without-an-ancestor-ladder', 'dinosauria')).toBe(false)
    expect(isPreviewEventAllowed('k-pg-extinction')).toBe(true)
    expect(isPreviewEventAllowed('great-oxidation')).toBe(true)
  })
})
