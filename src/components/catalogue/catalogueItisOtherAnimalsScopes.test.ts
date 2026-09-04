import { describe, expect, it } from 'vitest'
import { catalogueItisOtherAnimalsScopes } from './catalogueItisOtherAnimalsScopes'

describe('Other Animals ITIS scope inventory', () => {
  it('publishes all 28 descriptor-backed exact roots', () => {
    expect(catalogueItisOtherAnimalsScopes).toHaveLength(28)
    expect(catalogueItisOtherAnimalsScopes.find((scope) => scope.scope === 'ctenophora')?.roots).toEqual(new Set(['B8V3L']))
    expect(catalogueItisOtherAnimalsScopes.find((scope) => scope.scope === 'tunicata-cephalochordata')?.roots).toEqual(new Set(['7NF2Z', '7NF2Q']))
    expect(catalogueItisOtherAnimalsScopes.every((scope) => scope.packageId === 'other-animals' && scope.excludedRoots.size === 0)).toBe(true)
  })
})
