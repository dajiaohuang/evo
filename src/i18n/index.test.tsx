import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import profiles from '../../data/packages/mammalia/perissodactyla/profiles.json'
import events from '../../data/events.json'
import stories from '../../data/stories.json'
import claims from '../../data/evidence/claims.json'
import claimRationalesZh from '../../data/evidence/claim-rationales.zh.json'
import claimStatementsZh from '../../data/evidence/claim-statements.zh.json'
import media from '../../data/media.json'
import tree from '../../data/navigation/atlas-ontology.json'
import treeEvidence from '../../data/tree/evidence.json'
import calibrations from '../../data/packages/mammalia/perissodactyla/phylogeny/calibrations.json'
import manifest from '../../data/manifest.json'
import { periods } from '../services/geology'
import { hasChineseTranslation, I18nProvider, useI18n } from '.'

const uiSources = import.meta.glob(['../App.tsx', '../components/**/*.tsx'], {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function LanguageProbe() {
  const { language, setLanguage, t } = useI18n()
  return (
    <div>
      <span>{language}</span>
      <span>{t('Explore')}</span>
      <button onClick={() => setLanguage('zh')}>中文</button>
    </div>
  )
}

interface CommonNameNode {
  commonName: string
  children: CommonNameNode[]
}

function flattenCommonNames(node: CommonNameNode): string[] {
  return [node.commonName, ...node.children.flatMap((child) => flattenCommonNames(child))]
}

describe('site language state', () => {
  beforeEach(() => {
    window.localStorage.clear()
    window.localStorage.setItem('evo-atlas-language', 'en')
  })

  it('switches the document and persists Chinese', () => {
    render(<I18nProvider><LanguageProbe /></I18nProvider>)
    expect(screen.getByText('Explore')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: '中文' }))

    expect(screen.getByText('探索')).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('zh-CN')
    expect(window.localStorage.getItem('evo-atlas-language')).toBe('zh')
  })
})

describe('Chinese catalog coverage', () => {
  it('covers every static UI message passed to the translator', () => {
    const missing: string[] = []
    for (const [file, source] of Object.entries(uiSources)) {
      for (const match of source.matchAll(/\bt\(\s*(['"])(.*?)\1/g)) {
        if (!hasChineseTranslation(match[2])) missing.push(`${file}: ${match[2]}`)
      }
    }
    expect(missing).toEqual([])
  })

  it('covers every dynamic narrative rendered through the translator', () => {
    expect(Object.keys(claimRationalesZh).sort()).toEqual(claims.map((claim) => claim.id).sort())
    const translatedClaimStatements = new Set(Object.keys(claimStatementsZh))
    const knownClaimStatements = new Set(claims.map((claim) => claim.statement))
    expect(claims.filter((claim) => claim.reviewedBy === 'Evo Atlas automated evidence decomposition').every((claim) => translatedClaimStatements.has(claim.statement))).toBe(true)
    expect([...translatedClaimStatements].every((statement) => knownClaimStatements.has(statement))).toBe(true)
    const dynamicCopy = [
      ...profiles.flatMap((profile) => [
        profile.overview,
        ...profile.geography,
        ...Object.values(profile.ecology),
        ...profile.traits,
        profile.evidenceSummary,
      ]),
      ...events.flatMap((event) => [
        event.summary,
        ...event.regions,
        ...event.clades,
        ...event.evidenceItems.map((item) => item.statement),
        ...event.uncertaintyItems.map((item) => item.statement),
      ]),
      ...stories.flatMap((story) => [
        story.dek,
        ...story.steps.flatMap((step) => [step.title, step.text, step.annotation, step.view].filter(Boolean)),
      ]),
      ...claims.filter((claim) => !Object.hasOwn(claimStatementsZh, claim.statement)).map((claim) => claim.statement),
      ...media.flatMap((asset) => [asset.title, asset.type.replace('-', ' '), asset.licenseNote]),
      calibrations.scope,
      calibrations.model,
      ...calibrations.estimates.flatMap((estimate) => [
        estimate.nodeLabel,
        estimate.method,
        estimate.note,
        estimate.locator.figure,
      ]),
      treeEvidence.navigationModel,
      ...Object.values(treeEvidence.default).filter((value): value is string => typeof value === 'string'),
      ...Object.values(treeEvidence.nodes).flatMap((record) => Object.values(record).filter((value): value is string => typeof value === 'string')),
      ...flattenCommonNames(tree),
      ...periods.flatMap((period) => [period.name, period.era, period.eon, period.description]),
      ...manifest.sources.flatMap((source) => [source.role, source.mode]),
      ...manifest.limitations,
    ].filter((copy): copy is string => typeof copy === 'string' && copy.length > 0)

    const missing = [...new Set(dynamicCopy.filter((copy) => !hasChineseTranslation(copy)))]
    expect(missing).toEqual([])
  })
})
