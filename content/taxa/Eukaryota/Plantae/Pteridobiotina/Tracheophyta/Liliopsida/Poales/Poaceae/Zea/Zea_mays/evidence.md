---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Zea mays L.
    authorship: L.
    rank: species
    sourceDatasetId: "2232"
    checkedAt: 2026-09-25
    classificationPath:
      - id: CS5HF
        scientificName: Eukaryota (Chatton, 1925) Whittaker & Margulis, 1978
        authorship: (Chatton, 1925) Whittaker & Margulis, 1978
        rank: domain
        status: accepted
        sourceDatasetId: null
      - id: P
        scientificName: Plantae
        authorship: null
        rank: kingdom
        status: accepted
        sourceDatasetId: null
      - id: CMQ8S
        scientificName: Pteridobiotina Britton & Brown
        authorship: Britton & Brown
        rank: subkingdom
        status: accepted
        sourceDatasetId: null
      - id: TP
        scientificName: Tracheophyta
        authorship: null
        rank: phylum
        status: accepted
        sourceDatasetId: null
      - id: L2L
        scientificName: Liliopsida
        authorship: null
        rank: class
        status: accepted
        sourceDatasetId: null
      - id: 627VM
        scientificName: Poales Small
        authorship: Small
        rank: order
        status: accepted
        sourceDatasetId: null
      - id: 627FW
        scientificName: Poaceae
        authorship: null
        rank: family
        status: accepted
        sourceDatasetId: "2232"
      - id: 8W4SX
        scientificName: Zea L.
        authorship: L.
        rank: genus
        status: accepted
        sourceDatasetId: "2232"
      - id: 5CXX5
        scientificName: Zea mays L.
        authorship: L.
        rank: species
        status: accepted
        sourceDatasetId: "2232"
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
      wild: The study includes teosinte accessions but is not a census of wild populations or current wild occurrence.
      domesticated:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/domesticated
      captive: Captive populations were not studied.
      fossil: Fossil evidence and geological age were not assessed in this claim.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/5CXX5
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:5CXX5@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-25
            locator: Accepted species usage 5CXX5; exact name, authorship, rank, status, sourceDatasetId, and full accepted parent chain.
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 5CXX5. https://doi.org/10.48580/dgywk.
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
        - referenceId: ref-c07c0988-0bae-89dd-a7c8-b100ee5b1348
          metadataVariant: 0
          sourceKey: xu2022zea
          usage:
            licenseEvidenceLocator: Rights and permissions states CC BY 4.0 and identifies conditions for separately credited third-party material.
            licenseAppliesTo: Article text unless excluded by a third-party credit line. Claim paraphrased; no figure or table reused.
            stableId: doi:10.1186/s12870-022-03427-w
            locator: Results, Genetic structure within the genus Zea; Rights and permissions.
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
      queryOrPath: Pinned COL26.8 ChecklistBank dataset 316115 usage 5CXX5; DOI 10.1186/s12870-022-03427-w.
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
        status: not-assessed
        claims: []
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
            translationStatus: translated
            originalLanguage: en
            sourceIds:
              - xu2022zea
            locator: Results, Genetic structure within the genus Zea; Methods, Plant material and Genotyping and SNP quality control.
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

# Zea mays

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact accepted COL26.8 usage verified in the release-pinned ChecklistBank search registry, then followed through every accepted parent node in the pinned hierarchy registry.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Exact accepted COL26.8 species usage 5CXX5. The cited study makes a population-genetic inference from sampled maize lines and teosinte accessions, not a complete evolutionary account for the species.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / domesticated

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/domesticated -->
The sampled maize inbred lines represent cultivated germplasm; this study analyzes ancestry and selection rather than the full domestication process.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2232
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Xu G., Zhang X., Chen W. et al. (2022). BMC Plant Biology 22:72. https://doi.org/10.1186/s12870-022-03427-w. CC BY 4.0. Claim paraphrased; no figures or tables reused.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
One population-genomic phylogenetic interpretation for the study's sampled maize and teosinte germplasm.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact COL26.8 identity and focused review of one primary population-genomic study; not a complete species evolution or seven-facet review.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Verified the accepted COL usage and every accepted parent node in the pinned COL26.8 registry; reviewed sampled materials, SNP methods, neighbor-joining result, authors' interpretation, and item-level rights notice.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Primary genomic study directly including Zea mays and reporting phylogenetic or population-genetic results with sample scope and interpretation.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Direct observation of ancient domestication, exhaustive ancestry, full species-wide phylogeny, morphology, life history, ecology, distribution, fossils, and conservation not established by this study.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
This population-genomic study does not assess diagnostic morphology across the accepted species usage.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The study does not assess the species' complete life history or demographic rates.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The population-genomic analysis does not establish ecological relationships or habitat use.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
In a population-genomic sample of 982 maize inbred lines and 190 teosinte accessions, the study's neighbor-joining tree grouped the sampled maize lines into a monophyletic clade, with sampled Central Balsas Zea mays ssp. parviglumis accessions closest to maize. The authors interpreted this pattern as support for one maize domestication event and the Balsas River valley as its center. This is an inference from sampled germplasm, not a direct observation of domestication or a complete evolutionary account.
<!-- /evo:text -->

## evolution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/textZh -->
在一项包含 982 个玉米自交系和 190 份大刍草种质的群体基因组样本中，邻接法系统树将所采样的玉米材料聚为一个单系支，并显示采自中央巴尔萨斯地区的 Zea mays ssp. parviglumis 材料与玉米最近。作者将这一模式解释为支持玉米发生过一次驯化、且巴尔萨斯河谷是驯化中心。这是基于抽样种质的推断，不是对驯化过程的直接观察，也不是完整的物种进化史。
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Genome-wide analysis of 982 maize inbred lines and 190 teosinte accessions sampled from Mexico and Central America; article published 2022-02-18. The claim is limited to the sampled lines and the study's population-genetic interpretation.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Evidence includes cultivated maize inbred lines and sampled teosinte accessions; it is not a census of wild populations.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
A population-genomic analysis of sampled germplasm supports a bounded relationship and domestication inference but does not provide a complete evolutionary history, full subspecies coverage, or direct archaeological observation.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Sampled accessions from Mexico and Central America are not a complete current range map.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
This article does not analyze fossil occurrences or geological age.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
The study does not establish current wild population trends, threats, or conservation status.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One focused primary source supports a bounded claim in evolution only.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The other six scientific facets remain explicitly not assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent external expert review has been completed.
<!-- /evo:text -->
