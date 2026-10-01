---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Trichoplax adhaerens Schulze, 1883
    authorship: Schulze, 1883
    rank: species
    sourceDatasetId: "1123"
    checkedAt: 2026-09-25
    classificationPath:
      - id: CS5HF
        scientificName: Eukaryota (Chatton, 1925) Whittaker & Margulis, 1978
        authorship: (Chatton, 1925) Whittaker & Margulis, 1978
        rank: domain
        status: accepted
        sourceDatasetId: null
      - id: N
        scientificName: Animalia
        authorship: null
        rank: kingdom
        status: accepted
        sourceDatasetId: null
      - id: B8V3N
        scientificName: Placozoa Grell, 1971
        authorship: Grell, 1971
        rank: phylum
        status: accepted
        sourceDatasetId: "1123"
      - id: B8SG2
        scientificName: Uniplacotomia Tessler, Neumann, Osigus, DeSalle & Schierwater, 2022
        authorship: Tessler, Neumann, Osigus, DeSalle & Schierwater, 2022
        rank: class
        status: accepted
        sourceDatasetId: "1123"
      - id: B8SG5
        scientificName: Trichoplacea Tessler, Neumann, Osigus, DeSalle & Schierwater, 2022
        authorship: Tessler, Neumann, Osigus, DeSalle & Schierwater, 2022
        rank: order
        status: accepted
        sourceDatasetId: "1123"
      - id: 84KW8
        scientificName: Trichoplacidae Bütschli & Hatschek, 1905
        authorship: Bütschli & Hatschek, 1905
        rank: family
        status: accepted
        sourceDatasetId: "1123"
      - id: 84VF5
        scientificName: Trichoplax Schulze, 1883
        authorship: Schulze, 1883
        rank: genus
        status: accepted
        sourceDatasetId: "1123"
      - id: 58HL4
        scientificName: Trichoplax adhaerens Schulze, 1883
        authorship: Schulze, 1883
        rank: species
        status: accepted
        sourceDatasetId: "1123"
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
      sourceIds:
        - col
    lifeStatusScope:
      wild: Wild occurrence and behavior were not assessed by these laboratory observations.
      domesticated: Domestication was not studied; laboratory culture is not treated as domestication.
      captive: Evidence concerns laboratory-cultured animals observed under controlled food conditions.
      fossil: Fossil occurrence and geological age were not assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 1
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/58HL4
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:58HL4@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-25
            locator: Accepted species usage 58HL4; exact name, authorship, rank, status, sourceDatasetId, and full accepted parent chain.
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 58HL4. https://doi.org/10.48580/dgywk.
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
            - licenseAppliesTo
            - attribution
        - referenceId: ref-d19d4b05-bc8c-859e-a0e5-80a876f4f67e
          metadataVariant: 0
          sourceKey: smith2015trichoplax
          usage:
            licenseEvidenceLocator: Article-level rights notice states the CC0 1.0 Universal public-domain dedication.
            licenseAppliesTo: Article text as designated in the rights notice. Claim paraphrased; no figure, movie, or table reused.
            stableId: doi:10.1371/journal.pone.0136098
            locator: Results, Trichoplax stops movements and ciliary beating in the presence of food; article rights notice.
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
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
    systematicSearch:
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/scope
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/method
      queryOrPath: Pinned COL26.8 ChecklistBank dataset 316115 usage 58HL4; DOI 10.1371/journal.pone.0136098.
      inclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/inclusionCriteria
      exclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/exclusionCriteria
      date: 2026-09-25
      searcher: Evo source audit
    facets:
      morphology:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: not-assessed
        claims: []
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
            translationStatus: translated
            originalLanguage: en
            sourceIds:
              - smith2015trichoplax
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/locator
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
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      fossil:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/fossil/gaps/0
      conservation:
        status: not-assessed
        claims: []
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
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/2
    expertReview:
      status: not-reviewed
      reviewers: []
      reviewDigest: null
---

# Trichoplax adhaerens

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact accepted COL26.8 usage verified in the release-pinned ChecklistBank search registry, then followed through every accepted parent node in the pinned hierarchy registry.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Exact accepted COL26.8 species usage 58HL4. The cited article reports behavior in laboratory-cultured animals under controlled food-present and food-absent conditions, not wild behavior.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 1123
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Smith C.L., Pivovarova N., Reese T.S. (2015). PLOS ONE 10(9):e0136098. https://doi.org/10.1371/journal.pone.0136098. CC0 1.0. Claim paraphrased; no figures, movies, or tables reused.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Quantitative food-associated pauses in one laboratory culture context only.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact COL26.8 identity and focused review of one primary laboratory behavior article; not a complete species ecology or seven-facet review.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Verified the accepted usage and each accepted parent node in the pinned COL26.8 registry; reviewed laboratory methods, food-present and food-absent results, and the item-level rights notice.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Primary study directly identifying Trichoplax and reporting quantitative observations under defined food-present and food-absent laboratory conditions.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Wild feeding generalization, complete natural diet or distribution, morphology, evolution, fossil, and conservation claims not established by this laboratory study.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
This behavior experiment does not assess species morphology or diagnostic variation.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The reported feeding pauses do not establish a complete natural life-history account or reproduction.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
In laboratory observations, 90% of Trichoplax animals observed with microalgae present (n=30) paused within the first 17 minutes, compared with 22% without food (n=76). Animals observed with food spent an average 39% of observation time paused (12 animals; 5.8 hours total), versus 2.6% without food (65 animals; 33.5 hours total). These are results from the reported culture conditions, not estimates of wild feeding behavior or species-wide rates.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
在实验室观察中，有微藻时观察到的 Trichoplax 个体有 90%（n=30）在前 17 分钟内暂停运动；无食物时为 22%（n=76）。有食物时，个体平均有 39% 的观察时间处于暂停状态（12 个体，共 5.8 小时）；无食物时为 2.6%（65 个体，共 33.5 小时）。这些结果仅适用于论文报告的培养条件，不能视为野外行为或整个物种的发生率估计。
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Results, Trichoplax stops movements and ciliary beating in the presence of food, paragraphs beginning ‘Some animals moved continually’ and ‘Trichoplax paused more frequently’; Methods, Animals.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Laboratory observations comparing food-present and food-absent conditions; the reported food was the microalga Rhodamonas salina. The paper does not give field locations or a wild collection period for these measurements.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Laboratory-cultured animals observed on a glass substrate; no wild population was observed for this claim.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
One laboratory strain and food treatment do not establish wild behavior, geographic or seasonal variation, natural diet breadth, or species-wide feeding rates.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
This article does not analyze phylogeny or evolutionary history.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Laboratory cultures do not establish a geographic range or wild occurrence map.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
This article does not assess fossil occurrences or geological age.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
This laboratory study does not assess wild population trends, threats, or conservation status.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One focused primary source supports a bounded claim in ecology only.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The other six scientific facets remain explicitly not assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent external expert review has been completed.
<!-- /evo:text -->
