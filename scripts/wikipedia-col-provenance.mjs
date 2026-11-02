import assert from 'node:assert/strict'

const optionalSources = [
  'ncbiId', 'ncbiSynonym', 'ncbiCatalogSynonym', 'ncbiLineage', 'ncbiLineageAuthority',
  'ncbiOriginalNameAuthority', 'ncbiGeneralAuthor', 'ncbiGeneralOriginalAuthor', 'ncbiIdentityHolds', 'candidateIdentityHeldUrls',
  'nominateSubgenusParent', 'subgenusSameFamilyGenus', 'subgenusFamilyUnidentifiedGenus', 'qualifiedUnkeyedSpecies', 'ncbiHigherSynonymPeer', 'registryAbbrevPeer', 'registryAmbiguousSynonym', 'registryAmbiguousPeer', 'exactSourceSynonym', 'itisCrossSource', 'itisCrossUnkeyed',
]

export function validateOptionalProvenance(manifest) {
  for (const name of optionalSources) {
    if (manifest[name] !== undefined) assert.match(manifest[name]?.sourceSha256 ?? '', /^[a-f0-9]{64}$/, `Invalid ${name} source hash`)
  }
}
