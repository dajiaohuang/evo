---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Plagioscutum ochevi
    rank: species
    sourceTaxonId: txn:169912
    name:
      en: Plagioscutum ochevi
      zh: Plagioscutum ochevi
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
      - occurrenceId: occ:839582
        collectionId: col:93156
        acceptedTaxonId: txn:169912
        taxonomicDifference: null
        referenceId: ref:28844
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: RU
          stateProvince: Orenburg
          county: Sol'-Iletsk
        stratigraphy:
          group: null
          formation: Donguz
          member: null
        olderAgeMa: 243.43
        youngerAgeMa: 241.464
      - occurrenceId: occ:877603
        collectionId: col:97409
        acceptedTaxonId: txn:169912
        taxonomicDifference: null
        referenceId: ref:28844
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: RU
          stateProvince: Orenburg
          county: Sol'-Iletsk
        stratigraphy:
          group: null
          formation: Donguz
          member: null
        olderAgeMa: 247
        youngerAgeMa: 241.464
      - occurrenceId: occ:877630
        collectionId: col:97414
        acceptedTaxonId: txn:169912
        taxonomicDifference: null
        referenceId: ref:28844
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: RU
          stateProvince: Bashkortostan
          county: null
        stratigraphy:
          group: null
          formation: Donguz
          member: null
        olderAgeMa: 247
        youngerAgeMa: 241.464
      - occurrenceId: occ:877636
        collectionId: col:97415
        acceptedTaxonId: txn:169912
        taxonomicDifference: null
        referenceId: ref:28844
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: RU
          stateProvince: Bashkortostan
          county: null
        stratigraphy:
          group: null
          formation: Donguz
          member: null
        olderAgeMa: 243.43
        youngerAgeMa: 241.464
      - occurrenceId: occ:1383177
        collectionId: col:189562
        acceptedTaxonId: txn:169912
        identifiedName: Plagioscutum ochevi n. gen. n. sp.
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: RU
          stateProvince: Orenburg
          county: null
        stratigraphy:
          group: null
          formation: Donguz
          member: null
        olderAgeMa: 247
        youngerAgeMa: 241.464
      - occurrenceId: occ:1383185
        collectionId: col:189564
        acceptedTaxonId: txn:169912
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
        locality:
          countryCode: KZ
          stateProvince: null
          county: null
        stratigraphy:
          group: null
          formation: El'tonskiy
          member: null
        olderAgeMa: 247
        youngerAgeMa: 237
      - occurrenceId: occ:1416271
        collectionId: col:28850
        acceptedTaxonId: txn:169912
        taxonomicDifference: null
        referenceId: ref:28844
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
        locality:
          countryCode: RU
          stateProvince: Orenburg
          county: Sol'-Iletsk
        stratigraphy:
          group: null
          formation: Donguz
          member: null
        olderAgeMa: 243.43
        youngerAgeMa: 241.464
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Plagioscutum ochevi
      zh: Plagioscutum ochevi
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
        id: txn:169912
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00018.json.gz
          field: /records/270
          queryName: Plagioscutum ochevi
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Plagioscutum ochevi

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:169912; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/en -->
PBDB-recorded taxon concept, parent chain and database occurrence summaries. Not a synthesis of the original publications.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/zh -->
PBDB 记载的分类概念、父链及数据库出现记录概括；未综合原出版物的研究内容。
<!-- /evo:text -->

## pbdb-fossil-reader / originalBibliography

<!-- evo:text /records/pbdb-fossil-reader/originalBibliography -->
M. A. Shishkin, I. V. Novikov, and Y. M. Gubin. 2000. Permian and Triassic temnospondyls from Russia. The Age of Dinosaurs in Russia and Mongolia. Cambridge University Press, Cambridge
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
V. P. Tverdokhlebov, G. I. Tverdokhlebova, and M. V. Surkov, M. J. Benton. 2003. Tetrapod localities from the Triassic of the SE of European Russia. Earth-Science Reviews 60(1-2):1-66
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
V. P. Tverdokhlebov, G. I. Tverdokhlebova, and M. V. Surkov, M. J. Benton. 2003. Tetrapod localities from the Triassic of the SE of European Russia. Earth-Science Reviews 60(1-2):1-66
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
V. P. Tverdokhlebov, G. I. Tverdokhlebova, and M. V. Surkov, M. J. Benton. 2003. Tetrapod localities from the Triassic of the SE of European Russia. Earth-Science Reviews 60(1-2):1-66
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
V. P. Tverdokhlebov, G. I. Tverdokhlebova, and M. V. Surkov, M. J. Benton. 2003. Tetrapod localities from the Triassic of the SE of European Russia. Earth-Science Reviews 60(1-2):1-66
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
R. R. Schoch and A. R. Milner. 2014. Handbook of Paleoherpetology Part 3A2 Temnospondyli I.. Munich: Verlag Dr Friedrich Pfeil.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
R. R. Schoch and A. R. Milner. 2014. Handbook of Paleoherpetology Part 3A2 Temnospondyli I.. Munich: Verlag Dr Friedrich Pfeil.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
V. P. Tverdokhlebov, G. I. Tverdokhlebova, and M. V. Surkov, M. J. Benton. 2003. Tetrapod localities from the Triassic of the SE of European Russia. Earth-Science Reviews 60(1-2):1-66
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed;
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对。
<!-- /evo:text -->
