---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Chelotriton paradoxus
    rank: species
    sourceTaxonId: txn:64187
    name:
      en: Chelotriton paradoxus
      zh: Chelotriton paradoxus
    checkedAt: 2026-10-02
    sections:
      - topic: taxonomy
        title:
          en: Recorded fossil concept
          zh: 来源记载的化石概念
        text:
          en:
            markdown: page.en.md
            field: /records/pbdb-fossil-reader/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/pbdb-fossil-reader/sections/0/text/zh
        sourceIds:
          - pbdb
      - topic: fossil
        title:
          en: Fossil occurrence evidence
          zh: 化石出现记录
        text:
          en:
            markdown: page.en.md
            field: /records/pbdb-fossil-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/pbdb-fossil-reader/sections/1/text/zh
        sourceIds:
          - pbdb
      - topic: taxonomy
        readerSectionKind: primary-fossil-research
        sourceIds:
          - primary-fossil-pmc4589347-paradoxus
        title:
          en: A familiar species label conceals unresolved fossil assignments
          zh: 熟悉种名之下有未解决化石归属
        text:
          en:
            markdown: page.en.md
            field: /records/pbdb-fossil-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/pbdb-fossil-reader/sections/2/text/zh
      - topic: morphology
        readerSectionKind: primary-fossil-research
        sourceIds:
          - primary-fossil-pmc4589347-paradoxus
        title:
          en: Neotype-locality comparisons have their own anatomical scope
          zh: 新模产地比较有自身解剖范围
        text:
          en:
            markdown: page.en.md
            field: /records/pbdb-fossil-reader/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/pbdb-fossil-reader/sections/3/text/zh
      - topic: development
        readerSectionKind: primary-fossil-research
        sourceIds:
          - primary-fossil-pmc4589347-paradoxus
        title:
          en: Historical metamorphosis interpretations were revised for referred material
          zh: 归入材料的历史变态解释曾修订
        text:
          en:
            markdown: page.en.md
            field: /records/pbdb-fossil-reader/sections/4/text/en
          zh:
            markdown: page.zh.md
            field: /records/pbdb-fossil-reader/sections/4/text/zh
      - topic: taxonomy
        readerSectionKind: primary-fossil-research
        sourceIds:
          - primary-fossil-pmc7369190-paradoxus
        title:
          en: The 2020 study labels its paradoxus association tentative
          zh: 2020 年研究将 paradoxus 关联标为暂定
        text:
          en:
            markdown: page.en.md
            field: /records/pbdb-fossil-reader/sections/5/text/en
          zh:
            markdown: page.zh.md
            field: /records/pbdb-fossil-reader/sections/5/text/zh
      - topic: fossil
        readerSectionKind: primary-fossil-research
        sourceIds:
          - primary-fossil-pmc7369190-paradoxus
        title:
          en: Deposit ages and reconstructed skulls have distinct evidence roles
          zh: 沉积年代与重建头骨具有不同证据角色
        text:
          en:
            markdown: page.en.md
            field: /records/pbdb-fossil-reader/sections/6/text/en
          zh:
            markdown: page.zh.md
            field: /records/pbdb-fossil-reader/sections/6/text/zh
      - topic: overview
        readerSectionKind: amphibia-collection-placeholder
        title:
          en: Research text pending
          zh: 研究正文待整理
        text:
          en:
            markdown: page.en.md
            field: /records/amphibia-collection-placeholder/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibia-collection-placeholder/sections/0/text/zh
        sourceIds:
          - amphibia-collection-status
    sources:
      referenceBindings:
        - referenceId: ref-f1e3d50c-c9eb-48f1-8ba8-098589af8953
          metadataVariant: 0
          sourceKey: pbdb
          usage:
            locator:
              markdown: evidence.md
              field: /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator
            scope:
              en:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - version
            - url
            - accessedAt
            - license
            - licenseAssessment
            - rightsEvidenceUrl
            - licenseAppliesTo
            - attribution
            - locator
            - scope
        - referenceId: ref-e2e04022-53dd-4a54-a9de-957c7d568588
          metadataVariant: 0
          sourceKey: primary-fossil-pmc4589347-paradoxus
          usage:
            locator:
              markdown: evidence.md
              field: /records/pbdb-fossil-reader/sources/referenceBindings/1/usage/locator
            scope:
              en:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/sources/referenceBindings/1/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/sources/referenceBindings/1/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - year
            - doi
            - url
            - accessedAt
            - license
            - licenseUrl
            - licenseAssessment
            - attribution
            - locator
            - scope
        - referenceId: ref-0cf2133a-2367-40e4-a3dc-d9ca8347d1d0
          metadataVariant: 0
          sourceKey: primary-fossil-pmc7369190-paradoxus
          usage:
            locator:
              markdown: evidence.md
              field: /records/pbdb-fossil-reader/sources/referenceBindings/2/usage/locator
            scope:
              en:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/sources/referenceBindings/2/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/sources/referenceBindings/2/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - year
            - doi
            - url
            - accessedAt
            - license
            - licenseUrl
            - licenseAssessment
            - attribution
            - locator
            - scope
        - referenceId: ref-amphibia-collection-index-2026-10-03
          metadataVariant: 0
          sourceKey: amphibia-collection-status
          usage:
            locator: docs/amphibia-content/reference-index.md
          originalFields:
            - id
            - title
            - url
            - locator
            - scope
    originalBibliography:
      markdown: evidence.md
      field: /records/pbdb-fossil-reader/originalBibliography
    occurrenceEvidence:
      - occurrenceId: occ:472478
        collectionId: col:46955
        acceptedTaxonId: txn:64187
        taxonomicDifference: null
        referenceId: ref:12472
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: DE
          stateProvince: null
          county: null
        stratigraphy:
          group: null
          formation: Ville
          member: Frimmersdorf
        olderAgeMa: 15.98
        youngerAgeMa: 13.82
      - occurrenceId: occ:1081720
        collectionId: col:135812
        acceptedTaxonId: txn:64187
        taxonomicDifference: null
        referenceId: ref:43465
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: RO
          stateProvince: Arad
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 12.8
        youngerAgeMa: 11.63
      - occurrenceId: occ:1083586
        collectionId: col:60281
        acceptedTaxonId: txn:64187
        identifiedName: Chelotriton (cf. Chelotriton) paradoxus
        taxonomicDifference: variant of
        referenceId: ref:43525
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: FR
          stateProvince: null
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 27.3
        youngerAgeMa: 23.04
      - occurrenceId: occ:1091810
        collectionId: col:48325
        acceptedTaxonId: txn:64187
        taxonomicDifference: null
        referenceId: ref:43885
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: DE
          stateProvince: Baden-Württemberg
          county: Heidenheim
        stratigraphy:
          group: Molasse
          formation: Upper Freshwater Molasse
          member: null
        olderAgeMa: 15.98
        youngerAgeMa: 13.82
      - occurrenceId: occ:1431361
        collectionId: col:175587
        acceptedTaxonId: txn:64187
        identifiedName: Chelotriton aff. paradoxus
        taxonomicDifference: null
        referenceId: ref:67851
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: AT
          stateProvince: null
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 12.8
        youngerAgeMa: 11.63
      - occurrenceId: occ:1468550
        collectionId: col:42594
        acceptedTaxonId: txn:64187
        taxonomicDifference: null
        referenceId: ref:70397
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
        locality:
          countryCode: PL
          stateProvince: Silesia
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 15.98
        youngerAgeMa: 11.63
      - occurrenceId: occ:1468596
        collectionId: col:84606
        acceptedTaxonId: txn:64187
        taxonomicDifference: null
        referenceId: ref:70399
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
        locality:
          countryCode: DE
          stateProvince: North Rhine-Westfalia
          county: Rhein-Sieg
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 27.3
        youngerAgeMa: 23.04
      - occurrenceId: occ:1469268
        collectionId: col:37789
        acceptedTaxonId: txn:64187
        taxonomicDifference: null
        referenceId: ref:70425
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography
        locality:
          countryCode: AT
          stateProvince: Burgenland
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 8.725
        youngerAgeMa: 7.9
      - occurrenceId: occ:1627934
        collectionId: col:196590
        acceptedTaxonId: txn:64187
        identifiedName: Chelotriton cf. paradoxus
        taxonomicDifference: null
        referenceId: ref:85134
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
        locality:
          countryCode: RU
          stateProvince: Adygea
          county: Maykop District
        stratigraphy:
          group: null
          formation: "Gaverdovsky "
          member: null
        olderAgeMa: 11.63
        youngerAgeMa: 5.333
      - occurrenceId: occ:1627944
        collectionId: col:48446
        acceptedTaxonId: txn:64187
        identifiedName: Chelotriton cf. paradoxus
        taxonomicDifference: null
        referenceId: ref:85134
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography
        locality:
          countryCode: UA
          stateProvince: Khmel'nitsk'yi
          county: Shepetivka
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 11.63
        youngerAgeMa: 8.725
      - occurrenceId: occ:1627966
        collectionId: col:196591
        acceptedTaxonId: txn:64187
        identifiedName: Chelotriton cf. paradoxus
        taxonomicDifference: null
        referenceId: ref:85134
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography
        locality:
          countryCode: RU
          stateProvince: Adygea
          county: Maykop District
        stratigraphy:
          group: null
          formation: "Gaverdovsky "
          member: null
        olderAgeMa: 11.63
        youngerAgeMa: 5.333
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
    primaryStudyScopes:
      - doi: 10.1371/journal.pone.0137068
        referenceId: ref-e2e04022-53dd-4a54-a9de-957c7d568588
        sourceKey: primary-fossil-pmc4589347-paradoxus
        sourceFile: data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC4589347/article.xml
        sourceConcept: 2015 comparisons to paradoxus neotype-locality material; MB.Am.45 and Enspel/Randeck assignments unresolved
        evidenceRead:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/primaryStudyScopes/0/evidenceRead
        contemporaryConceptEquivalence: not-independently-certified
        rightsBoundary:
          license: CC BY (version not explicit in XML)
          licenseUrl: https://creativecommons.org/licenses/by/
          attribution: Own factual synthesis and Chinese translation of the original study; no figures reproduced.
        sectionEvidence:
          - sectionOrdinal: 0
            topic: taxonomy
            heading:
              en: A familiar species label conceals unresolved fossil assignments
              zh: 熟悉种名之下有未解决化石归属
            referenceId: ref-e2e04022-53dd-4a54-a9de-957c7d568588
            sourceKey: primary-fossil-pmc4589347-paradoxus
            locator: PMC4589347 XML sec009 paragraph 2; sec020 paragraphs 0–4, 8
            locatorPrecision: manually-recorded-section-and-paragraph-label
            evidenceSummary:
              en:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/0/evidenceSummary/en
              zh:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/0/evidenceSummary/zh
            scope:
              en:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/0/scope/en
              zh:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/0/scope/zh
          - sectionOrdinal: 1
            topic: morphology
            heading:
              en: Neotype-locality comparisons have their own anatomical scope
              zh: 新模产地比较有自身解剖范围
            referenceId: ref-e2e04022-53dd-4a54-a9de-957c7d568588
            sourceKey: primary-fossil-pmc4589347-paradoxus
            locator: PMC4589347 XML sec007 paragraphs 5–7; sec014 paragraphs 1–2; sec020 paragraphs 1, 7
            locatorPrecision: manually-recorded-section-and-paragraph-label
            evidenceSummary:
              en:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/1/evidenceSummary/en
              zh:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/1/evidenceSummary/zh
            scope:
              en:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/1/scope/en
              zh:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/1/scope/zh
          - sectionOrdinal: 2
            topic: development
            heading:
              en: Historical metamorphosis interpretations were revised for referred material
              zh: 归入材料的历史变态解释曾修订
            referenceId: ref-e2e04022-53dd-4a54-a9de-957c7d568588
            sourceKey: primary-fossil-pmc4589347-paradoxus
            locator: PMC4589347 XML sec013 paragraph 3; sec019 paragraph 4; sec020 paragraphs 4, 9
            locatorPrecision: manually-recorded-section-and-paragraph-label
            evidenceSummary:
              en:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/2/evidenceSummary/en
              zh:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/2/evidenceSummary/zh
            scope:
              en:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/2/scope/en
              zh:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/2/scope/zh
      - doi: 10.1111/joa.13201
        referenceId: ref-0cf2133a-2367-40e4-a3dc-d9ca8347d1d0
        sourceKey: primary-fossil-pmc7369190-paradoxus
        sourceFile: data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC7369190/article.xml
        sourceConcept: 2020 tentative Enspel/Randeck paradoxus association, not certified species equivalence
        evidenceRead:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/primaryStudyScopes/1/evidenceRead
        contemporaryConceptEquivalence: not-independently-certified
        rightsBoundary:
          license: CC BY 4.0
          licenseUrl: https://creativecommons.org/licenses/by/4.0/
          attribution: Own factual synthesis and Chinese translation of the original study; no figures reproduced.
        sectionEvidence:
          - sectionOrdinal: 0
            topic: taxonomy
            heading:
              en: The 2020 study labels its paradoxus association tentative
              zh: 2020 年研究将 paradoxus 关联标为暂定
            referenceId: ref-0cf2133a-2367-40e4-a3dc-d9ca8347d1d0
            sourceKey: primary-fossil-pmc7369190-paradoxus
            locator: PMC7369190 section 0 paragraph 0; section 5 paragraph 3; XML joa13201-sec-0008 paragraphs 0–1
            locatorPrecision: manually-recorded-section-and-paragraph-label
            evidenceSummary:
              en:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/1/sectionEvidence/0/evidenceSummary/en
              zh:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/1/sectionEvidence/0/evidenceSummary/zh
            scope:
              en:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/1/sectionEvidence/0/scope/en
              zh:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/1/sectionEvidence/0/scope/zh
          - sectionOrdinal: 1
            topic: fossil
            heading:
              en: Deposit ages and reconstructed skulls have distinct evidence roles
              zh: 沉积年代与重建头骨具有不同证据角色
            referenceId: ref-0cf2133a-2367-40e4-a3dc-d9ca8347d1d0
            sourceKey: primary-fossil-pmc7369190-paradoxus
            locator:
              markdown: evidence.md
              field: /records/pbdb-fossil-reader/primaryStudyScopes/1/sectionEvidence/1/locator
            locatorPrecision: manually-recorded-section-and-paragraph-label
            evidenceSummary:
              en:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/1/sectionEvidence/1/evidenceSummary/en
              zh:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/1/sectionEvidence/1/evidenceSummary/zh
            scope:
              en:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/1/sectionEvidence/1/scope/en
              zh:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/1/sectionEvidence/1/scope/zh
    primaryBiologicalSynthesisComplete: false
  amphibia-collection-placeholder:
    name:
      en: Chelotriton paradoxus
      zh: Chelotriton paradoxus
    sections:
      - topic: overview
        title:
          en: Research text pending
          zh: 研究正文待整理
        text:
          en:
            markdown: page.en.md
            field: /records/amphibia-collection-placeholder/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibia-collection-placeholder/sections/0/text/zh
    collectionLedgerPath: docs/amphibia-content/full-roster-literature-collection.json
    concepts:
      - authority: PBDB snapshot2026-10-02
        id: txn:64187
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00019.json.gz
          field: /records/71
          queryName: Chelotriton paradoxus
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 4
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Chelotriton paradoxus

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:64187; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/en -->
PBDB-recorded taxon concept, parent chain and database occurrence summaries. Not a synthesis of the original publications.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/zh -->
PBDB 记载的分类概念、父链及数据库出现记录概括；未综合原出版物的研究内容。
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/1/usage/locator -->
Diagnosis and raw XML Material/locality, Affinities, skull outline/roof/other head parts, postcranium, heterochrony, Chelotriton diversity and phylogenetic method paragraphs read; MB.Am.45 genus-only specimen, comparative named taxa kept separate; no original cited specimens, figures or matrix independently examined
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/1/usage/scope/en -->
Published specimen or comparative scope only; database concept equivalence, species-wide biology and full phylogenetic placement are not independently certified.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/1/usage/scope/zh -->
仅限出版标本或比较范围；数据库概念等同性、全物种生物学及完整系统位置未经独立认证。
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/2/usage/locator -->
Materials/methods, landmark and geometric analysis, lateral/dorsal results, raw XML fossil morphology and phylogeny/ecology/shape results, morphology/phylogeny discussion and raw ecology discussion read; Table1 counts/footnotes; eight tentative Chelotriton fossils, taphonomic/estimation bounds, no independent scans/landmark or original cited ecological studies examined
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/2/usage/scope/en -->
Published specimen or comparative scope only; database concept equivalence, species-wide biology and full phylogenetic placement are not independently certified.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/2/usage/scope/zh -->
仅限出版标本或比较范围；数据库概念等同性、全物种生物学及完整系统位置未经独立认证。
<!-- /evo:text -->

## pbdb-fossil-reader / originalBibliography

<!-- evo:text /records/pbdb-fossil-reader/originalBibliography -->
T. Mors, F. Hocht, and B. Wutzler. 2000. Die erst Wirbeltierfauna aus der miozanen Braunkohle der Niederrheinischen Bucht (Ville-Schichten, Tagebau Hambach) [The first vertebrate fauna from the Miocene Ville Series of the Lower Rhine Embayment (Hambach open cast mine, western Germany)]. Paläontologische Zeitschrift 74(1/2):145-170
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
T. Mors, F. Hocht, and B. Wutzler. 2000. Die erst Wirbeltierfauna aus der miozanen Braunkohle der Niederrheinischen Bucht (Ville-Schichten, Tagebau Hambach) [The first vertebrate fauna from the Miocene Ville Series of the Lower Rhine Embayment (Hambach open cast mine, western Germany)]. Paläontologische Zeitschrift 74(1/2):145-170
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
M. Venczel and E. Stiuca. 2008. Late middle Miocene amphibians and squamate reptiles from Taut, Romania. Geodiversitas 30(4):731-763
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
M. Augé and J.-C. Rage. 1995. Le Garouillas et les sites contemporains (Oligocene, MP 25) des Phosphorites du Quercy (Lot, Tarn-et-Garonne, France) et leurs faunas de vertebres. 2. Amphibiens et squamates. Palaeontographica Abteilung A 236(1-6):11-32
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
R. Böttcher, E. P. J. Heizmann, and M. W. Rasser, R. Ziegler. 2009. Biostratigraphy and palaeoecology of a Middle Miocene (Karpathian, MN 5) fauna from the northern margin of the North Alpine Foreland Basin (Oggenhausen 2, SW' Germany). Neues Jahrbuch für Geologie und Paläontologie, Abhandlungen 254(1/2):237-260
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
M. Böhme and D. Vasilyan. 2014. Ectothermic vertebrates from the late Middle Miocene of Gratkorn (Austria, Styria). Palaeobiodiversity and Palaeoenvironments 92:21-40
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
M. Mlynarski. 1984. Notes on the amphibian and reptilian fauna of the Polish Miocene. Acta Zoologica Cracoviensia 27(8):127-148
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
T. Mors. 2002. Biostratigraphy and paleoecology of continental Tertiary vertebrate faunas in the Lower Rhine Embayment (NW-Germany). Netherlands Journal of Geosciences 81(2):177-183
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
P. M. Tempfer. 2005. The Herpetofauna (Amphibia: Caudata, Anura; Reptilia: Sclerogiossa) of the Upper Miocene Locality Kohfidisch (Burgenland, Austria). Beiträge zur Paläontologie von Österreich 29:145-253
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
V. A. Codrea, M. Bordeianu, and M. Venczel. 2022. Amphibians and squamate reptiles from the late Miocene of Fălciu (Eastern Romania). Palaeontologica Electronica 25(2):a19
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography -->
V. A. Codrea, M. Bordeianu, and M. Venczel. 2022. Amphibians and squamate reptiles from the late Miocene of Fălciu (Eastern Romania). Palaeontologica Electronica 25(2):a19
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography -->
V. A. Codrea, M. Bordeianu, and M. Venczel. 2022. Amphibians and squamate reptiles from the late Miocene of Fălciu (Eastern Romania). Palaeontologica Electronica 25(2):a19
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
Partial database and primary-study fossil reader. Specimen identity, preservation, historical assignments and inferred life habits retain separate scopes. Remaining biological synthesis are incomplete.
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
部分数据库及原研究化石读本。标本身份、保存状况、历史归属及推断生活习性各自限定范围，其余生物学综述及。
<!-- /evo:text -->

## pbdb-fossil-reader / primaryStudyScopes / evidenceRead

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/evidenceRead -->
Diagnosis and raw XML Material/locality, Affinities, skull outline/roof/other head parts, postcranium, heterochrony, Chelotriton diversity and phylogenetic method paragraphs read; MB.Am.45 genus-only specimen, comparative named taxa kept separate; no original cited specimens, figures or matrix independently examined
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / evidenceSummary

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/0/evidenceSummary/en -->
The 2015 paper challenges earlier placement of the Orsberg specimen MB.Am.45 in paradoxus and retains it as Chelotriton sp. Comparisons distinguish neotype-locality material from Enspel and Randeck skeletons traditionally assigned the same name. Thus the 18-by-35-mm skull, extreme posterior jaw joints and forelimb lengths of MB.Am.45 are not paradoxus measurements. The database concept remains retained for navigation, while original specimen identity requires a separate revision. The article’s arguments do not establish a newly named species or complete the reconciliation of every database occurrence.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / evidenceSummary

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/0/evidenceSummary/zh -->
2015 年论文质疑此前将 Orsberg 标本 MB.Am.45 放入 paradoxus，保留为 Chelotriton sp.。比较将新模产地材料与传统归入同名的 Enspel、Randeck 骨骼分开。因此 MB.Am.45 十八乘三十五毫米头骨、极后移颌关节及前肢长度不是 paradoxus 测量。数据库概念保留导航，原标本身份仍需独立修订。论文论证没有建立新命名物种，也未完成每条数据库出现记录核对。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/0/scope/en -->
Published specimen or comparative scope only; database concept equivalence, species-wide biology and full phylogenetic placement are not independently certified.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/0/scope/zh -->
仅限出版标本或比较范围；数据库概念等同性、全物种生物学及完整系统位置未经独立认证。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / evidenceSummary

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/1/evidenceSummary/en -->
The source cites two to four processes per rib in paradoxus material from the neotype locality and an approximately 30–35° orientation of a frontal process to the sagittal plane. Those are comparative reports from particular material, not a universal adult diagnosis or directly remeasured specimens here. The paper records uncertain or variable vertebral and cranial characters across the genus, including preservation-dependent differences. It does not transfer the genus diagnosis’s body-length range or MB.Am.45’s incomplete wrist and digit anatomy to every paradoxus fossil.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / evidenceSummary

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/1/evidenceSummary/zh -->
来源引述 paradoxus 新模产地材料每肋二至四突，以及额骨突相对矢状面约三十至三十五度方向。这是特定材料比较报告，不是通用成体诊断，也不是这里直接重测标本。论文记录属内不定或可变椎骨、头骨性状，含保存相关差别。不能将属诊断体长范围或 MB.Am.45 不完整腕指解剖转移至每个 paradoxus 化石。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/1/scope/en -->
Published specimen or comparative scope only; database concept equivalence, species-wide biology and full phylogenetic placement are not independently certified.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/1/scope/zh -->
仅限出版标本或比较范围；数据库概念等同性、全物种生物学及完整系统位置未经独立认证。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / evidenceSummary

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/2/evidenceSummary/en -->
Some skeletons traditionally called paradoxus were earlier interpreted as having a fully metamorphosed hyobranchial apparatus; later cited work interpreted Enspel and Randeck material as retaining larval components. The 2015 discussion uses this as a comparative mosaic-development example. It does not demonstrate that every paradoxus population was paedomorphic, establish a larval duration or measure breeding biology. Because the same paper questions several species assignments, developmental interpretation and the recorded name must remain separate evidence fields.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / evidenceSummary

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/2/evidenceSummary/zh -->
传统称 paradoxus 的一些骨骼，较早被解释为舌鳃装置完全变态；后来引述研究将 Enspel、Randeck 材料解释为保留幼体部分。2015 年讨论将其用于比较镶嵌发育实例，没有证明每个 paradoxus 种群幼态保持、确定幼体年限或测繁殖生物学。论文同时质疑多个种级归属，因此发育解释与记录名称应保留为独立证据。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/2/scope/en -->
Published specimen or comparative scope only; database concept equivalence, species-wide biology and full phylogenetic placement are not independently certified.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/2/scope/zh -->
仅限出版标本或比较范围；数据库概念等同性、全物种生物学及完整系统位置未经独立认证。
<!-- /evo:text -->

## pbdb-fossil-reader / primaryStudyScopes / evidenceRead

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/1/evidenceRead -->
Materials/methods, landmark and geometric analysis, lateral/dorsal results, raw XML fossil morphology and phylogeny/ecology/shape results, morphology/phylogeny discussion and raw ecology discussion read; Table1 counts/footnotes; eight tentative Chelotriton fossils, taphonomic/estimation bounds, no independent scans/landmark or original cited ecological studies examined
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / evidenceSummary

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/1/sectionEvidence/0/evidenceSummary/en -->
Seven Enspel fossils and one Randeck fossil were tentatively associated with paradoxus, following cited earlier work. Their differing skull shapes prompted the suggestion that the deposits may contain different species, and the authors state that named Chelotriton species await validation. Consequently, the study’s pooled fossil shape and size comparisons cannot be certified as a single paradoxus population trait. This preserves the earlier 2015 concerns about historical assignments rather than silently treating a later citation as final identity confirmation.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / evidenceSummary

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/1/sectionEvidence/0/evidenceSummary/zh -->
依引述较早工作，Enspel 七个、Randeck 一个化石暂与 paradoxus 关联。不同头骨形状促成两地点或含不同种的建议，作者记具名 Chelotriton 种仍待验证。因此所合并化石形状及大小比较不能认证为单一 paradoxus 种群性状。这保留 2015 年对历史归属的疑问，不把较晚引用悄然当作最终身份确认。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/1/sectionEvidence/0/scope/en -->
Published specimen or comparative scope only; database concept equivalence, species-wide biology and full phylogenetic placement are not independently certified.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/1/sectionEvidence/0/scope/zh -->
仅限出版标本或比较范围；数据库概念等同性、全物种生物学及完整系统位置未经独立认证。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / locator

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/1/sectionEvidence/1/locator -->
PMC7369190 section 1 paragraph 1; section 2 paragraph 0; XML joa13201-sec-0009 paragraph 1; joa13201-sec-0012 paragraphs 2–3
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / evidenceSummary

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/1/sectionEvidence/1/evidenceSummary/en -->
The cited 24.8–24.6-million-year Enspel interval and 17–15-million-year Randeck interval date the sampled deposits. They do not show continuous occupation by one species between those ages. Shape analysis included estimated missing landmarks and symmetrization of distorted Enspel fossils, and post-hoc comparisons omitted the single Randeck sample. Palaeoclimate and terrestrial-life interpretations belong to the comparative study, not independently established paradoxus thermal limits or directly preserved reproductive behaviour.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / evidenceSummary

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/1/sectionEvidence/1/evidenceSummary/zh -->
引述 Enspel 24.8–24.6 百万年及 Randeck 十七至十五百万年区间是所采沉积年代，不证明同一种在两年代间连续占据。形状分析包含缺失标志点估计及变形 Enspel 化石对称化，事后比较排除 Randeck 单样本。古气候及陆生解释属于比较研究，不是独立建立的 paradoxus 耐温或直接保存繁殖行为。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/1/sectionEvidence/1/scope/en -->
Published specimen or comparative scope only; database concept equivalence, species-wide biology and full phylogenetic placement are not independently certified.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/1/sectionEvidence/1/scope/zh -->
仅限出版标本或比较范围；数据库概念等同性、全物种生物学及完整系统位置未经独立认证。
<!-- /evo:text -->
