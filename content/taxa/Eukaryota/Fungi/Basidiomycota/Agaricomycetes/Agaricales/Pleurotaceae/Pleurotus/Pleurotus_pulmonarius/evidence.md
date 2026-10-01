---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Pleurotus pulmonarius (Fr.) Quél.
    authorship: (Fr.) Quél.
    rank: species
    sourceDatasetId: "2073"
    checkedAt: 2026-09-25
    classificationPath:
      - id: CS5HF
        scientificName: Eukaryota (Chatton, 1925) Whittaker & Margulis, 1978
        authorship: (Chatton, 1925) Whittaker & Margulis, 1978
        rank: domain
        status: accepted
        sourceDatasetId: null
      - id: F
        scientificName: Fungi
        authorship: null
        rank: kingdom
        status: accepted
        sourceDatasetId: "2073"
      - id: BM
        scientificName: Basidiomycota
        authorship: null
        rank: phylum
        status: accepted
        sourceDatasetId: "2073"
      - id: 7C
        scientificName: Agaricomycetes
        authorship: null
        rank: class
        status: accepted
        sourceDatasetId: "2073"
      - id: N8
        scientificName: Agaricales
        authorship: null
        rank: order
        status: accepted
        sourceDatasetId: "2073"
      - id: 625RB
        scientificName: Pleurotaceae
        authorship: null
        rank: family
        status: accepted
        sourceDatasetId: "2073"
      - id: 6SW5
        scientificName: Pleurotus
        authorship: null
        rank: genus
        status: accepted
        sourceDatasetId: "2073"
      - id: 4KF7P
        scientificName: Pleurotus pulmonarius (Fr.) Quél.
        authorship: (Fr.) Quél.
        rank: species
        status: accepted
        sourceDatasetId: "2073"
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
      wild: No wild populations or field ecological interactions were studied.
      domesticated: The article tests cultivation performance and does not assess the full history or breadth of domestication.
      captive: Not applicable; this is managed fungal cultivation.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/4KF7P
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:4KF7P@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-25
            locator: Accepted species usage 4KF7P; exact name, authorship, rank, status, sourceDatasetId, and full accepted parent chain.
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 4KF7P. https://doi.org/10.48580/dgywk.
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
        - referenceId: ref-ae3662c2-589c-8793-a971-52e35510d3f4
          metadataVariant: 0
          sourceKey: huang2024pleurotus-camellia-shell
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator
            licenseAppliesTo: The article text under its item-level CC BY 4.0 notice; claim paraphrased and no table or figure is reproduced.
            stableId: doi:10.3390/foods13182946
            locator: Methods §§2.1–2.2; Results Tables 1–2; article copyright and license statement.
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
      queryOrPath: Pinned COL26.8 ChecklistBank dataset 316115 usage 4KF7P; DOI 10.3390/foods13182946.
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
              - huang2024pleurotus-camellia-shell
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

# Pleurotus pulmonarius

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact accepted COL26.8 usage verified in the release-pinned ChecklistBank search registry, then followed through every accepted parent node in the pinned hierarchy registry.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Exact accepted COL26.8 species usage 4KF7P. The biological evidence concerns reported total yield from one managed bag-cultivation experiment using strain Hangxiu 1; it does not characterize wild populations or other strains and cultivation systems.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2073
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
Publisher article page copyright/license notice; Crossref item license metadata lists https://creativecommons.org/licenses/by/4.0/.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Huang Y, Wang W, Lu N, Yu J, Chen S, Liang Z (2024). The Role of Camellia Shell Substrates in Modulating the Nutritional Characteristics of Pleurotus pulmonarius. Foods 13(18):2946. https://doi.org/10.3390/foods13182946. CC BY 4.0. Claim paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Reported total yield and biological efficiency from one three-replicate bag-cultivation trial with the Hangxiu 1 strain; trial location and dates are not reported.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact COL26.8 identity and focused review of one primary managed cultivation experiment; not a complete species ecology or seven-facet review.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Verified the accepted usage and each accepted parent node in the pinned COL26.8 hierarchy; reviewed strain and substrate methods, treatment tables, replicate basis, significance statements, and item-level article copyright/license notice.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Primary research article directly naming Pleurotus pulmonarius and reporting a defined cultivation treatment, yield outcome, and replicate basis.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Wild habitat, natural substrate use, ecology beyond managed cultivation, morphology, life history, evolution, distribution, fossils, and conservation claims not established by this cultivation experiment.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The substrate-yield experiment does not document diagnostic morphology or species-level anatomical variation.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The study does not assess a full life cycle, wild development, or reproduction outside managed cultivation.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
In one managed bag-cultivation experiment with the Hangxiu 1 strain, the A3 substrate treatment replacing 20% of cottonseed shell with camellia shell produced a reported total yield of 407.83 ± 24.93 g per bag and biological efficiency of 72.83 ± 4.45% (mean ± SD, n=3). The article reports no significant yield or biological-efficiency difference among the tested 0–20% replacement treatments. The result is limited to this cultivation experiment and strain.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
在一项使用 Hangxiu 1 菌株的袋式人工栽培试验中，A3 基质以山茶壳替代 20% 棉籽壳，报告的总产量为每袋 407.83 ± 24.93 克，生物学效率为 72.83 ± 4.45%（均值 ± 标准差，n=3）。文章报告，在所测 0–20% 替代处理之间，产量或生物学效率差异均未达到显著水平。该结果仅适用于这一菌株和栽培试验。
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Methods §§2.1–2.2 for strain, substrate, and experimental design; Results Tables 1–2 for total yield, biological efficiency, and treatment comparisons.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Trial location and dates are not stated; the Hangxiu 1 strain was supplied by Hangzhou Academy of Agricultural Sciences and camellia shells were sourced from Quzhou, Zhejiang, China.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Cultivated mushrooms grown in prepared substrate bags; wild populations were not studied.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
One strain and managed substrate trial does not establish wild ecology, natural substrate use, or cultivation performance across strains, sites, seasons, and systems.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
The study does not analyze phylogeny or evolutionary history.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The trial does not establish a geographic range; its cultivation setting is not stated.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
The selected study does not assess fossil occurrences or geological age.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
The cultivation experiment does not assess wild population status, threats, or conservation categories.
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
