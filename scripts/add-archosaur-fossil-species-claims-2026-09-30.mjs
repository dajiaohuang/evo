import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'

const targets = [
  {
    id: 'carnufex_carolinensis',
    speciesName: 'Carnufex carolinensis',
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
    speciesName: 'Asteriornis maastrichtensis',
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
    speciesName: 'Ankylosaurus magniventris',
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
    speciesName: 'Buriolestes schultzi',
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
    speciesName: 'Yinlong downsi',
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
    speciesName: 'Yutyrannus huali',
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
const speciesScopeEn = {
  taxonomy: 'For the species-level page, this assessment applies to the named species and its cited diagnosis; it does not imply a broader genus sample.',
  biogeography: 'For the species-level page, this assessment covers the cited occurrence or localities only and does not estimate a complete range.',
  morphology: 'For the species-level page, this assessment covers the characters observed in the cited specimens; unsampled variation remains outside it.',
  ecology: 'For the species-level page, this assessment covers only ecological inferences tied to the cited specimens; unmeasured fields remain unassigned.',
}
const speciesScopeZh = {
  taxonomy: '本种级页面的判断仅适用于所引材料中的该种及其描述，不表示存在更广泛的属级样本。',
  biogeography: '本种级页面的判断仅覆盖所引化石记录或地点，不据此估算完整分布。',
  morphology: '本种级页面的判断仅覆盖所引标本中观察到的性状；未取样的种内变异不在此结论内。',
  ecology: '本种级页面的判断仅覆盖与所引标本相关的生态推断；未测量字段继续保持未指定。',
}
const claims = JSON.parse(readFileSync(claimsPath, 'utf8'))
const rationalesZh = JSON.parse(readFileSync(rationalesPath, 'utf8'))
const claimsById = new Map(claims.map(claim => [claim.id, claim]))
let added = 0
let updatedClaims = 0
let addedChineseRationales = 0
let updatedChineseRationales = 0

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
    claim.confidenceRationale = source.confidenceRationale + ' ' + target.speciesName + ': ' + speciesScopeEn[claimType]
    const sourceRationaleZh = rationalesZh[sourceClaimId]
    assert.ok(sourceRationaleZh, `Missing Chinese confidence rationale for ${sourceClaimId}`)
    const speciesRationaleZh = sourceRationaleZh + ' ' + target.speciesName + '：' + speciesScopeZh[claimType]
    if (!Object.hasOwn(rationalesZh, claim.id)) addedChineseRationales += 1
    else if (rationalesZh[claim.id] !== speciesRationaleZh) updatedChineseRationales += 1
    rationalesZh[claim.id] = speciesRationaleZh
    const existing = claimsById.get(claim.id)
    if (existing) {
      const comparable = structuredClone(existing)
      comparable.confidenceRationale = claim.confidenceRationale
      assert.deepEqual(comparable, claim, `Conflicting claim ${claim.id}`)
      if (existing.confidenceRationale !== claim.confidenceRationale) updatedClaims += 1
      Object.assign(existing, claim)
    }
    else {
      claims.push(claim)
      claimsById.set(claim.id, claim)
      added += 1
    }
  }
}

writeFileSync(claimsPath, `${JSON.stringify(claims, null, 2)}\n`, 'utf8')
writeFileSync(rationalesPath, `${JSON.stringify(rationalesZh, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({ species: targets.map(target => target.id), addedClaims: added, updatedClaims, addedChineseRationales, updatedChineseRationales }, null, 2))
