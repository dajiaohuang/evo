---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Macaca radiata (É. Geoffroy Saint-Hilaire, 1812)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 冠猕猴
      en: Bonnet macaque
    reviewStatus: source-linked
    checkedAt: 2026-09-29
    sections:
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/0/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/0
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/1/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/1/sourceIds/0
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/2/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/2/sourceIds/0
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/3/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/3/sourceIds/0
    sources:
      referenceBindings:
        - referenceId: ref-a14071bd-adc4-8b9a-a9e4-bb77fda12a5c
          metadataVariant: 0
          sourceKey: erinjery2017
          usage:
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-50af144b-dba6-8939-ac97-7a548e4fcc55
          metadataVariant: 0
          sourceKey: grunstra2018
          usage:
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/2/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/3WWP2
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
  catalogue-dossier:
    checkedAt: 2026-09-28
    scientificName: Macaca radiata (É. Geoffroy Saint-Hilaire, 1812)
    rank: species
    sourceDatasetId: "2144"
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      parentChain:
        - id: 5HYC
          name: Macaca
          authorship: Lacépède, 1799
          rank: genus
          status: accepted
        - id: L4C
          name: Papionini
          authorship: null
          rank: tribe
          status: accepted
        - id: JB3
          name: Cercopithecinae
          authorship: Gray, 1821
          rank: subfamily
          status: accepted
        - id: 7X9
          name: Cercopithecidae
          authorship: Gray, 1821
          rank: family
          status: accepted
        - id: 4X9
          name: Cercopithecoidea
          authorship: Gray, 1821
          rank: superfamily
          status: accepted
        - id: 4PM
          name: Simiiformes
          authorship: Haeckel, 1866
          rank: infraorder
          status: accepted
        - id: 4DT
          name: Haplorrhini
          authorship: Pocock, 1918
          rank: suborder
          status: accepted
        - id: 3W7
          name: Primates
          authorship: Linnaeus, 1758
          rank: order
          status: accepted
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/domesticated
      fossil: Fossil evidence has not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 7
          sourceKey: col
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/3WWP2
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115, DOI 10.48580/dgywk
            stableId: col:3WWP2@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-26
            locator: Accepted species usage 3WWP2; accepted status, sourceDatasetId 2144, parentId 5HYC and full accepted parent chain.
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - stableId
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseAssessment
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
        - referenceId: ref-685b3617-bf2c-8170-a9b4-b3fb5a80f9ca
          metadataVariant: 0
          sourceKey: erinjery2017
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0182140
            accessedAt: 2026-09-27
            attribution: Erinjery JJ, Kumar S, Kumara HN, Mohan K, Dhananjaya T, Sundararaj P, Kent R, Singh M. (2017).
            locator: Methods §§2.3–2.6; Results §§3.2, 3.4, 3.5.1; Discussion conservation recommendation.
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0182140
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - stableId
            - publishedAt
            - accessedAt
            - attribution
            - locator
            - license
            - licenseAssessment
            - licenseAppliesTo
            - licenseUrl
            - licenseVersion
            - rightsEvidenceUrl
            - rightsEvidenceLocator
            - rightsHolder
            - scope
        - referenceId: ref-3e67f425-0e71-8a7d-a7ca-5bce7aafbdf5
          metadataVariant: 0
          sourceKey: grunstra2018
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo
            licenseEvidenceLocator: JATS article <permissions>/<license>/<license-p>; article is open access under CC BY 4.0 and requires attribution.
            stableId: doi:10.1002/ajpa.23439
            accessedAt: 2026-09-28
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution
            locator: Methods §2.1; Table 1, Macaca radiata row; Discussion §4, opening paragraph.
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://www.ebi.ac.uk/europepmc/webservices/rest/PMC6492120/fullTextXML
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - stableId
            - publishedAt
            - accessedAt
            - attribution
            - locator
            - license
            - licenseAssessment
            - licenseAppliesTo
            - licenseUrl
            - licenseVersion
            - rightsEvidenceUrl
            - rightsEvidenceLocator
            - licenseEvidenceUrl
            - licenseEvidenceLocator
            - rightsHolder
            - scope
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
              - grunstra2018
            locator: Methods §2.1; Table 1, Macaca radiata row; Discussion §4, opening paragraph.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            sourceIds:
              - erinjery2017
            locator: Methods §2.6 Roadside survey; Results §3.5.1 Population dynamics.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/text
            sourceIds:
              - erinjery2017
            locator: Methods §§2.3–2.4; Results §3.2 Occupancy modelling of bonnet macaques in forest areas.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/2/text
            sourceIds:
              - erinjery2017
            locator: Methods §2.5 Survey of temple sites/tourist spots; Results §3.4.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/2/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/2/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
      evolution:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      fossil:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/fossil/gaps/0
      conservation:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/text
            sourceIds:
              - erinjery2017
            locator: Results §3.5.1; Discussion, conservation recommendation for hillocks and selected temple/tourist locations.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/conservation/gaps/0
    completeness:
      status: incomplete
      reasons:
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/0
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/1
    expertReview:
      status: not-reviewed
      reviewers: []
      reviewDigest: null
  atlas-node:
    name: Macaca radiata
    commonName: Bonnet Macaque
    commonNameZh: 冠毛猕猴
    rank: species
    taxonId: ""
    colUsageId: 3WWP2
    colDatasetId: "2144"
    firstAppearance: 0
    lastAppearance: 0
    extinct: false
    parentRelationshipKind: taxonomic-parent
    entityKind: taxon
    contentLevel: dossier
---

# Macaca radiata

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
南印度多个道路、森林和人类活动地点的 2017 年研究；计数、占域模型及规划建议各自限于其局部样点。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
A 2017 study of roadside, forest and human-use sites in southern India; counts, occupancy models and planning suggestions retain their distinct local sampling limits.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
跨 12 种猕猴的博物馆颅齿比较；冠猕猴样本来自研究表列的印度南部和西部标本。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Museum craniodental comparison across twelve macaque species; the M. radiata sample comprises specimens listed from South and West India.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/title -->
Catalogue of Life COL26.8 · source 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
固定版本中的接受名、作者、等级和分类父链；不支持生物学正文。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
Pinned accepted name, authorship, rank and parent classification; not biological evidence.
<!-- /evo:text -->

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact accepted COL26.8 species usage 3WWP2; the accepted parentId chain was checked against the pinned ChecklistBank dataset 316115 and local COL26.8 hierarchy records.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 accepted usage 3WWP2 only. Its accepted species identity and parent chain are pinned to the 2026-08-20 release. The 2018 morphology evidence is a bounded museum sample and does not revise the taxonomic circumscription.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Existing ecology claims concern local free-ranging roadside and forest samples in southern India. The 2018 museum craniodental comparison preferred wild-caught/wild-shot material but occasionally included captive or unprovenanced specimens; its collection years are unreported. Neither evidence set is a current range-wide population estimate.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / domesticated

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/domesticated -->
Domestication has not been assessed. The morphology study occasionally included captive museum material, which is not evidence of domestication.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Identity only: accepted scientific name and authorship, rank, status, sourceDatasetId and classification in pinned COL26.8.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Article text under the stated CC BY 4.0 license; separately credited third-party material remains subject to its original rights.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Primary study reporting bounded forest occupancy, temple/tourist-site history and roadside counts in southern India. The selected record does not reproduce article text or present any one sample as a current range-wide estimate.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
The article is identified as open access under CC BY 4.0; separately credited third-party material retains its own rights. No article text, figures, or morphometric data are redistributed here.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Grunstra NDS, Mitteroecker P, Foley RA. (2018). A multivariate ecogeographic analysis of macaque craniodental variation. American Journal of Physical Anthropology, 166(2), 386–400. doi:10.1002/ajpa.23439.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Primary museum craniodental morphometric comparison of 12 macaque species and 711 specimens. Table 1 lists 79 M. radiata specimens from South and West India (46 male, 33 female); the sample includes subadults. Authors preferred wild-caught/wild-shot specimens but occasionally included captive or unprovenanced material. The result is an interspecific comparison, not a species-wide or within-species estimate.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Across 12 macaque species (711 museum specimens), Grunstra et al. reported a weak interspecific latitudinal gradient in overall craniodental size and listed M. radiata among the near-equatorial examples tending smaller (Discussion §4, opening paragraph). Table 1 lists 79 M. radiata specimens (46 male, 33 female) from South and West India. The sample includes subadults and was preferably wild-caught or wild-shot, but occasionally included captive or unprovenanced specimens (§2.1; Table 1). This is a cross-species comparison and does not establish within-species geographic variation, diagnostic characters, current body size, or an exclusively wild sample.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
在涵盖12种猕猴、711件博物馆标本的比较中，Grunstra 等报告总体颅齿大小存在较弱的种间纬度梯度，并将 M. radiata 列为近赤道一侧倾向较小的示例（讨论§4首段）。表1列出79件印度猕猴标本（雄46、雌33），来源标注为印度南部和西部。样本包含亚成体，研究优先使用野外捕获或猎获标本，但也偶尔纳入圈养或来源地不明的标本（§2.1；表1）。这是一项种间比较，不能据此推断该种内部的地理变异、诊断特征、当前体型，也不能说样本全部来自野外。
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Museum specimens labelled South and West India in Table 1; specimen collection years are not reported. The result is from an interspecific analysis published in 2018, not a current field survey.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Museum material was preferably wild-caught or wild-shot, but the authors occasionally included captive or unprovenanced specimens; the claim does not describe a purely wild sample or a current population.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
This single cross-species museum comparison does not establish within-species morphological variation, geographic or sex-linked variation, diagnostic characters, developmental patterns, or species-wide specimen coverage; a systematic morphology literature search remains incomplete.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Reproduction, growth, survival and longevity evidence remain unassessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Along the surveyed roadsides connecting Mysore, India, reported total counts fell from 889 bonnet macaques in 2003 to 407 in 2015 (46% of the earlier count). The January–February 2015 resurvey covered 464 km, and roadside strips were defined within 15 m from the road centre on each side. These local roadside counts are not a species-wide abundance estimate or a causal test.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Roadside populations along major roads connecting Mysore, southern India; counts compared for 2003 and 2015. The 2015 resurvey took place in January–February and covered 464 km.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Free-ranging roadside groups in the species' native range; the sample is local and habitat-specific, not range-wide.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/text -->
In the Parambikulam landscape of Kerala, the study detected 54 bonnet macaque groups in 33 of 64 sampled grid cells. A single-season occupancy model estimated mean cell occupancy at 0.51 ± 0.08 (SE) and detection probability at 0.25 ± 0.05 (SE). These are modelled results for one forest survey, not species-wide forest occupancy or abundance.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/placeTimeScope -->
Parambikulam landscape, Kerala, India; 64 sampled grid cells in the study's single-season forest occupancy survey.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/lifeStatus -->
Free-ranging groups in one forest survey; site occupancy and detectability are modelled locally and are not a range-wide estimate.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/2/text -->
In its temple/tourist-site comparison and historical site records, the 2017 study reported bonnet macaques at about 31% of assessed locations, reappearance after translocation in about 20% of cases, and elimination or disappearance at more than 48%. The comparison draws on surveys and site histories from southern India; it is not current range-wide occupancy or abundance.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/2/placeTimeScope -->
Temple/tourist locations in southern India; prior Karnataka comparison from 2001–2004 and resurvey period November 2009–September 2015, as described by the paper.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/2/lifeStatus -->
Free-ranging groups at human-use sites; the finding is a historical site-status summary rather than a contemporary range-wide survey.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Evidence remains limited to one 2017 study and local survey frames; broader habitat, seasonal and population variation, range-wide ecology and causal mechanisms remain unassessed.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
No evolutionary, genomic or phylogenetic literature review was completed for this record.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
A local set of roadside survey routes is not a current or historical species-range inventory.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil search or occurrence assessment was completed for this record.
<!-- /evo:text -->

## conservation / claims / text

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/text -->
For the surveyed southern Indian landscapes, the authors proposed selected vegetated hillocks and temple/tourist locations as possible conservation reserves, based partly on local roadside persistence at Chamundi Hill and declines on other monitored roads. This is a 2017 study recommendation, not a statutory designation, current threat category or range-wide recovery plan.
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope -->
Mysore-connected roadsides and selected southern Indian human-use sites discussed in the 2017 article; recommendation is based on local monitoring, with Chamundi Hill persistence reported over about 25 years.
<!-- /evo:text -->

## conservation / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus -->
Free-ranging populations in human-modified southern Indian settings; no formal taxon-wide status assessment is implied.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
Current formal conservation category, contemporary range-wide population trend and independently reviewed recovery actions remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One bounded 2018 interspecific craniodental comparison now supports a morphology claim; life history, evolution, distribution, and fossil evidence remain not assessed, and broader morphology and ecology remain incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
No systematic literature search or independent external expert review has been completed.
<!-- /evo:text -->
