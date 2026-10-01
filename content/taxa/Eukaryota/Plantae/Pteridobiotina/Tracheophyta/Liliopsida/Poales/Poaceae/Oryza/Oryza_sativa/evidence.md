---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Oryza sativa L.
    rank: species
    sourceDatasetId: "2232"
    checkedAt: 2026-09-25
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
    lifeStatusScope:
      wild: Wild-rice comparisons in the cited genomic paper concern Oryza rufipogon and are not treated as O. sativa occurrences.
      domesticated: Cultivated Asian rice; the cited domestication inference is identified as one study's model-based conclusion.
      fossil: Fossil occurrence and geological age have not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 30
          sourceKey: col
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/6SZF3
            version: COL26.8 released 2026-08-20; pinned registry snapshot in this repository
            locator: Accepted species usage 6SZF3; exact scientificName, authorship, rank, status, and sourceDatasetId fields
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
        - referenceId: ref-3ef1fb5e-6144-80a5-a332-43e521216f9d
          metadataVariant: 0
          sourceKey: kewflora
          usage:
            locator: "Kew Species Profiles: Description and Ecology; the page identifies the profile as [KSP] and its source license"
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
        - referenceId: ref-cc718b2b-36a7-8f00-abb4-a7fed32810cf
          metadataVariant: 0
          sourceKey: huang2012
          usage:
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
        - referenceId: ref-7d054173-005f-899a-a4ee-db7ccab5248f
          metadataVariant: 0
          sourceKey: roy2015neindiarice
          usage:
            licenseEvidenceLocator: Article Copyright notice before Introduction; its Creative Commons Attribution License link resolves to CC BY 4.0.
            licenseAppliesTo: Article text; separately credited third-party material may be excluded. Claims are paraphrased; no figure is reused.
            stableId: doi:10.1371/journal.pone.0129607
            locator: Materials and Methods, Plant materials; Fig. 1 and accompanying caption.
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/scope
            accessedAt: 2026-09-25
          originalFields:
            - id
            - title
            - url
            - stableId
            - version
            - publishedAt
            - locator
            - license
            - rightsHolder
            - licenseEvidenceUrl
            - licenseEvidenceLocator
            - licenseAppliesTo
            - attribution
            - licenseVersion
            - licenseUrl
            - licenseAssessment
            - scope
            - accessedAt
    facets:
      morphology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/textZh
            sourceIds:
              - kewflora
            locator: POWO page, Kew Species Profiles section 'Description'
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh
            sourceIds:
              - kewflora
            locator: POWO page, General information, introductory species summary
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/textZh
            sourceIds:
              - kewflora
            locator: POWO page, Kew Species Profiles section 'Ecology'
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
      evolution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/textZh
            sourceIds:
              - huang2012
            locator: Abstract; Results, genome-wide patterns and domestication sweeps; Methods, accession sampling
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/textZh
            translationStatus: translated
            originalLanguage: en
            sourceIds:
              - roy2015neindiarice
            locator: Materials and Methods, Plant materials; Fig. 1 and accompanying caption.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      fossil:
        status: not-assessed
      conservation:
        status: not-assessed
    completeness:
      status: incomplete
      reasons:
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/0
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/1
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/2
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/3
    expertReview:
      status: not-reviewed
---

# Oryza sativa

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact accepted species usage matched in the pinned COL26.8 registry by COL ID, scientific name, authorship, rank, status, and sourceDatasetId.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species Oryza sativa as represented by COL26.8 usage 6SZF3. Cultivar-group and population-genomic claims retain the scope of their respective cited sources.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2232
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted-name identity and source-dataset relation only.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Kew botanical profile; generalizations about rice cultivation remain bounded to the account's description.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Abstract; Results, genome-wide patterns and domestication sweeps; methods describe 1,083 O. sativa and 446 O. rufipogon accessions
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Population-genomic sampling and the authors' domestication model; this is a published inference, not settled consensus.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution -->
Roy S., Banerjee A., Mawkhlieng B., Misra A.K., Pattanayak A. et al. (2015). PLOS ONE 10(6):e0129607. https://doi.org/10.1371/journal.pone.0129607. CC BY 4.0. Claims paraphrased; no figures reused.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
One source supports regional provenance of a selected ex-situ cultivated rice germplasm sample only.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Kew's species profile describes Asian rice as a grass that can exceed 1 m in height and reach 5 m in deep water; its upright stem has joint-like nodes bearing leaves, and its grains grow on arching branch-like spikes.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
邱园物种简介将亚洲栽培稻描述为禾草，植株可高于 1 米，深水条件下茎可达 5 米；直立茎具节状节点，每节生叶，谷粒生于拱垂的枝状穗上。
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Species-profile description; the 5 m figure is explicitly associated with deep-water growth and is not a typical height estimate.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Cultivated Asian rice profile; wild Oryza species are outside this claim.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Cultivar, developmental, and environment-associated morphological variation have not been systematically assessed.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
POWO's general-information account classifies O. sativa as an annual or helophyte. This short account does not specify cultivar, site, or growth-cycle conditions.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
POWO 的一般信息将 O. sativa 记为一年生或沼生植物；该简要记录未细分品种、地点或生长周期条件。
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Live POWO account accessed 2026-09-24; no specific cultivation trial or sampling period is given.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Cultigen account; this classification is not extended to wild Oryza relatives.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Germination, flowering, seed maturation, perenniality under ratooning, and cultivar-specific life cycles remain unassessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Kew's profile says O. sativa is commonly found in river valleys and other water-abundant areas, while also noting cultivation in some dryland areas.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
邱园简介指出，O. sativa 常见于河谷及其他水源充足地区，同时也记载部分地区采用旱地栽培。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Kew species-profile summary; it does not quantify habitat prevalence or cover all regional cultivation systems.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Cultivated rice; no wild ecological niche is inferred.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Cultivation ecology, interactions, and environmental variation across regions have not been systematically reviewed.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
Huang et al. (2012) analyzed genomes from 1,083 O. sativa accessions, 446 O. rufipogon accessions, and 15 outgroup accessions. Their analyses inferred that japonica was first domesticated from a particular O. rufipogon population near the middle Pearl River in southern China, and that indica later arose through crosses involving japonica and local wild rice. This is the study's model-based conclusion and is not presented as settled consensus.
<!-- /evo:text -->

## evolution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/textZh -->
Huang 等（2012）分析了 1,083 份 O. sativa、446 份 O. rufipogon 及 15 份外群材料的基因组。作者据此推断，粳稻最初由中国南部珠江中游附近的一个特定 O. rufipogon 种群驯化形成，随后籼稻由粳稻与当地野生稻杂交形成。此处保留为该研究的模型推断，不表述为已无争议的共识。
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Study published 2012; inference is based on its sampled accessions and genomic analysis.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Cultivated O. sativa populations are compared with wild O. rufipogon; the wild source species is not conflated with the dossier taxon.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
Alternative domestication histories and later genome-wide evidence have not been systematically compared.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
A 2015 genebank study analyzed 107 aromatic and quality Oryza sativa accessions. Passport information placed the sampled accessions in Assam (54), Nagaland (21), Manipur (16), Mizoram (9), Sikkim (5), and Arunachal Pradesh (2), in Northeast India. These are origins recorded for a selected cultivated germplasm sample, not a complete or current range map for rice.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/textZh -->
一项 2015 年的种质库研究分析了 107 份香型及优质 Oryza sativa 种质材料。护照信息将这些样本的来源地记为印度东北部的阿萨姆邦（54 份）、那加兰邦（21 份）、曼尼普尔邦（16 份）、米佐拉姆邦（9 份）、锡金邦（5 份）和阿鲁纳恰尔邦（2 份）。这些是精选栽培种质样本的来源记录，并非水稻完整或当前分布图。
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
The article was published 2015-06-12. The 107 accessions were sampled from the National Genebank, NBPGR using characterization and passport data; original collection dates are not reported in the cited methods.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Cultivated aromatic and quality landrace accessions held ex situ in the National Genebank. The study does not report wild O. sativa occurrences; its O. rufipogon comparisons are outside this claim.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The article documents selected germplasm origins in six Northeast Indian states, not the complete present-day cultivated range, wild distribution, abundance, or geographic coverage of all Oryza sativa groups.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only selected morphology, life-form, ecology, and one population-genomic domestication study have been assessed; distribution, fossil evidence, and conservation remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
A systematic literature review and comparison of cultivar and source concepts with the full COL26.8 species concept remain incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent expert review has been completed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/3 -->
The distribution facet now has one source-bounded supplemental claim; other facets and independent expert review remain incomplete.
<!-- /evo:text -->
