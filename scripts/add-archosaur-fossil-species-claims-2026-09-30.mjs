import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'

const targets = [
  {
    id: 'carnufex_carolinensis',
    packagePath: 'data/packages/archosauria/crocodylomorphs-birds',
    sourceClaimIds: {
      taxonomy: 'claim:taxon:carnufex:taxonomy',
      biogeography: 'claim:taxon:carnufex:biogeography',
      morphology: 'claim:taxon:carnufex:morphology',
      ecology: 'claim:taxon:carnufex:ecology',
    },
  },
  {
    id: 'asteriornis_maastrichtensis',
    packagePath: 'data/packages/archosauria/crocodylomorphs-birds',
    sourceClaimIds: {
      taxonomy: 'claim:taxon:asteriornis:taxonomy',
      biogeography: 'claim:taxon:asteriornis:biogeography',
      morphology: 'claim:taxon:asteriornis:morphology',
      ecology: 'claim:taxon:asteriornis:ecology',
    },
  },
  {
    id: 'ankylosaurus_magniventris',
    packagePath: 'data/packages/archosauria/dinosauria',
    sourceClaimIds: {
      taxonomy: 'claim:taxon:ankylosaurus',
      biogeography: 'claim:taxon:ankylosaurus:profile-biogeography',
      morphology: 'claim:taxon:ankylosaurus:profile-morphology',
      ecology: 'claim:taxon:ankylosaurus:profile-ecology',
    },
  },
  {
    id: 'buriolestes_schultzi',
    packagePath: 'data/packages/archosauria/dinosauria',
    sourceClaimIds: {
      taxonomy: 'claim:taxon:buriolestes:profile-taxonomy',
      biogeography: 'claim:taxon:buriolestes:profile-biogeography',
      morphology: 'claim:taxon:buriolestes:profile-morphology',
      ecology: 'claim:taxon:buriolestes:profile-ecology',
    },
  },
  {
    id: 'yinlong_downsi',
    packagePath: 'data/packages/archosauria/dinosauria',
    sourceClaimIds: {
      taxonomy: 'claim:taxon:yinlong:profile-taxonomy',
      biogeography: 'claim:taxon:yinlong:profile-biogeography',
      morphology: 'claim:taxon:yinlong:profile-morphology',
      ecology: 'claim:taxon:yinlong:profile-ecology',
    },
  },
  {
    id: 'yutyrannus_huali',
    packagePath: 'data/packages/archosauria/dinosauria',
    sourceClaimIds: {
      taxonomy: 'claim:taxon:yutyrannus:profile-taxonomy',
      biogeography: 'claim:taxon:yutyrannus:profile-biogeography',
      morphology: 'claim:taxon:yutyrannus:profile-morphology',
      ecology: 'claim:taxon:yutyrannus:profile-ecology',
    },
  },
]

const claimsPath = 'data/evidence/claims.json'
const rationalesPath = 'data/evidence/claim-rationales.zh.json'
const claims = JSON.parse(readFileSync(claimsPath, 'utf8'))
const rationalesZh = JSON.parse(readFileSync(rationalesPath, 'utf8'))
const claimsById = new Map(claims.map(claim => [claim.id, claim]))
let added = 0
let addedChineseRationales = 0

for (const target of targets) {
  const profile = JSON.parse(readFileSync(`${target.packagePath}/profiles.source.json`, 'utf8'))
    .find(entry => entry.id === target.id)
  assert.ok(profile, `Missing source profile ${target.id}`)
  const profileReferenceIds = new Set(profile.referenceIds)

  for (const [claimType, sourceClaimId] of Object.entries(target.sourceClaimIds)) {
    const source = claimsById.get(sourceClaimId)
    assert.ok(source, `Missing audited source claim ${sourceClaimId}`)
    assert.equal(source.subjectId.startsWith('taxon:'), true)
    assert.equal(source.claimType, claimType, `${sourceClaimId}: claim type mismatch`)
    for (const link of source.referenceLinks) {
      assert.ok(profileReferenceIds.has(link.referenceId), `${target.id} does not cite ${link.referenceId}`)
    }

    const claim = structuredClone(source)
    claim.id = `claim:taxon:${target.id}:${claimType}`
    claim.subjectId = `taxon:${target.id}`
    const sourceRationaleZh = rationalesZh[sourceClaimId]
    assert.ok(sourceRationaleZh, `Missing Chinese confidence rationale for ${sourceClaimId}`)
    if (Object.hasOwn(rationalesZh, claim.id)) {
      assert.equal(rationalesZh[claim.id], sourceRationaleZh, `Conflicting Chinese confidence rationale for ${claim.id}`)
    } else {
      rationalesZh[claim.id] = sourceRationaleZh
      addedChineseRationales += 1
    }
    const existing = claimsById.get(claim.id)
    if (existing) assert.deepEqual(existing, claim, `Conflicting claim ${claim.id}`)
    else {
      claims.push(claim)
      claimsById.set(claim.id, claim)
      added += 1
    }
  }
}

writeFileSync(claimsPath, `${JSON.stringify(claims, null, 2)}\n`, 'utf8')
writeFileSync(rationalesPath, `${JSON.stringify(rationalesZh, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({ species: targets.map(target => target.id), addedClaims: added, addedChineseRationales }, null, 2))
