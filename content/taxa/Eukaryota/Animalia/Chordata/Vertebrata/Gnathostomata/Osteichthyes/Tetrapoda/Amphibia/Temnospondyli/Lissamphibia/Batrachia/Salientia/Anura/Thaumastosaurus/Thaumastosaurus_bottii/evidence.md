---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Thaumastosaurus bottii
    rank: species
    sourceTaxonId: txn:346345
    name:
      en: Thaumastosaurus bottii
      zh: Thaumastosaurus bottii
    reviewStatus: source-linked
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
    originalBibliography: J.-C. Rage. 1988. The oldest known colubrid snakes. The state of the art. Acta Zoologica Cracoviensia 31(13):457-474
    occurrenceEvidence:
      - occurrenceId: occ:1341212
        collectionId: col:179194
        acceptedTaxonId: txn:346345
        identifiedName: Thaumastosaurus bottii n. sp.
        taxonomicDifference: null
        referenceId: ref:60203
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: FR
          stateProvince: Languedoc-Roussillon-Midi-Pyrénées
          county: Lot
        stratigraphy:
          group: null
          formation: Quercy Phosphorites
          member: null
        olderAgeMa: 37.71
        youngerAgeMa: 15.98
      - occurrenceId: occ:1416426
        collectionId: col:182607
        acceptedTaxonId: txn:346345
        taxonomicDifference: null
        referenceId: ref:66667
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: CH
          stateProvince: Canton de Vaud
          county: Mormont
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 41.03
        youngerAgeMa: 37.71
      - occurrenceId: occ:1416427
        collectionId: col:182385
        acceptedTaxonId: txn:346345
        taxonomicDifference: null
        referenceId: ref:66667
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: CH
          stateProvince: Jura
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 41.03
        youngerAgeMa: 37.71
      - occurrenceId: occ:1416433
        collectionId: col:195853
        acceptedTaxonId: txn:346345
        taxonomicDifference: null
        referenceId: ref:66667
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: CH
          stateProvince: null
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 37.71
        youngerAgeMa: 33.9
      - occurrenceId: occ:1416437
        collectionId: col:195854
        acceptedTaxonId: txn:346345
        taxonomicDifference: null
        referenceId: ref:66667
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: CH
          stateProvince: null
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 37.71
        youngerAgeMa: 33.9
      - occurrenceId: occ:1416443
        collectionId: col:195855
        acceptedTaxonId: txn:346345
        taxonomicDifference: null
        referenceId: ref:66667
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
        locality:
          countryCode: CH
          stateProvince: null
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 37.71
        youngerAgeMa: 33.9
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Thaumastosaurus bottii
      zh: Thaumastosaurus bottii
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
        id: txn:346345
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00018.json.gz
          field: /records/443
          queryName: Thaumastosaurus bottii
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 2
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Thaumastosaurus bottii

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:346345; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/en -->
PBDB-recorded taxon concept, parent chain and database occurrence summaries. Not a synthesis of the original publications.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/zh -->
PBDB 记载的分类概念、父链及数据库出现记录概括；未综合原出版物的研究内容。
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
J.-C. Rage. 2006. The lower vertebrates from the Eocene and Oligocene of the Phosphorites du Quercy (France): an overview. Strata 1(13):161-173
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
D. Vasilyan. 2018. Eocene Western European endemic genus Thaumastosaurus: new insights into the question "Are the Ranidae known prior to the Oligocene?''. PeerJ 6:e5511:1-24
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
D. Vasilyan. 2018. Eocene Western European endemic genus Thaumastosaurus: new insights into the question "Are the Ranidae known prior to the Oligocene?''. PeerJ 6:e5511:1-24
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
D. Vasilyan. 2018. Eocene Western European endemic genus Thaumastosaurus: new insights into the question "Are the Ranidae known prior to the Oligocene?''. PeerJ 6:e5511:1-24
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
D. Vasilyan. 2018. Eocene Western European endemic genus Thaumastosaurus: new insights into the question "Are the Ranidae known prior to the Oligocene?''. PeerJ 6:e5511:1-24
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
D. Vasilyan. 2018. Eocene Western European endemic genus Thaumastosaurus: new insights into the question "Are the Ranidae known prior to the Oligocene?''. PeerJ 6:e5511:1-24
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed; no external expert review is claimed.
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对；没有外部专家审评。
<!-- /evo:text -->
