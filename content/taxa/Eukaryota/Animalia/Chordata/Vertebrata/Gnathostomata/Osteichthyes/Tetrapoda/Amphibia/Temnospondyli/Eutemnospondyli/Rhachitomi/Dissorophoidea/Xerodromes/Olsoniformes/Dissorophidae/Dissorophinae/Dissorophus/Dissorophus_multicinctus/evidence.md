---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Dissorophus multicinctus
    rank: species
    sourceTaxonId: txn:255227
    name:
      en: Dissorophus multicinctus
      zh: Dissorophus multicinctus
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
    originalBibliography: E. D. Cope. 1895. A batrachian armadillo. The American Naturalist 29:998
    occurrenceEvidence:
      - occurrenceId: occ:229273
        collectionId: col:22671
        acceptedTaxonId: txn:255227
        taxonomicDifference: null
        referenceId: ref:5719
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 283.3
        youngerAgeMa: 274.4
      - occurrenceId: occ:296025
        collectionId: col:28256
        acceptedTaxonId: txn:255227
        taxonomicDifference: null
        referenceId: ref:54069
        bibliography: E. D. Cope. 1895. A batrachian armadillo. The American Naturalist 29:998
        locality:
          countryCode: US
          stateProvince: Texas
          county: Baylor/Willbarger
        stratigraphy:
          group: Clear Fork
          formation: Arroyo
          member: null
        olderAgeMa: 283.3
        youngerAgeMa: 274.4
      - occurrenceId: occ:296079
        collectionId: col:28266
        acceptedTaxonId: txn:255227
        identifiedTaxonId: txn:138239
        identifiedName: Otocoelus testudineus n. gen. n. sp.
        taxonomicDifference: null
        referenceId: ref:28869
        bibliography: E. D. Cope. 1896. The Ancestry of the Testudinata. The American Naturalist 30(353):398-400
        locality:
          countryCode: US
          stateProvince: Texas
          county: Baylor
        stratigraphy:
          group: Clear Fork
          formation: Arroyo
          member: null
        olderAgeMa: 283.3
        youngerAgeMa: 274.4
      - occurrenceId: occ:296103
        collectionId: col:28270
        acceptedTaxonId: txn:255227
        taxonomicDifference: null
        referenceId: ref:7693
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Baylor
        stratigraphy:
          group: Clear Fork
          formation: Arroyo
          member: null
        olderAgeMa: 283.3
        youngerAgeMa: 274.4
      - occurrenceId: occ:1339766
        collectionId: col:180945
        acceptedTaxonId: txn:255227
        identifiedName: Dissorophus multicinctus n. gen. n. sp.
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 274.4
      - occurrenceId: occ:1340563
        collectionId: col:22670
        acceptedTaxonId: txn:255227
        identifiedTaxonId: txn:138239
        identifiedName: Otocoelus testudineus
        taxonomicDifference: null
        referenceId: ref:30068
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 283.3
        youngerAgeMa: 274.4
      - occurrenceId: occ:1545290
        collectionId: col:67862
        acceptedTaxonId: txn:255227
        identifiedName: Dissorophus cf. multicinctus
        taxonomicDifference: null
        referenceId: ref:75543
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
        locality:
          countryCode: US
          stateProvince: Oklahoma
          county: Comanche
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 290.1
        youngerAgeMa: 283.3
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Dissorophus multicinctus
      zh: Dissorophus multicinctus
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
        id: txn:255227
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00017.json.gz
          field: /records/477
          queryName: Dissorophus multicinctus
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 3
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Dissorophus multicinctus

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:255227; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
T. E. White. 1939. Osteology of Seymouria baylorensis Broili. Bulletin of the Museum of Comparative Zoology 85(5):325-409
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
A. S. Romer. 1928. Vertebrate faunal horizons in the Texas Permo-Carboniferous red beds. University of Texas Bulletin 2801:67-108
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
R. R. Schoch and A. R. Milner. 2014. Handbook of Paleoherpetology Part 3A2 Temnospondyli I.. Munich: Verlag Dr Friedrich Pfeil.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
W. F. Cummins. 1908. The Localities and Horizons of Permian Vertebrate Fossils in Texas. Journal of Geology 16(8):737-745
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
B. M. Gee, J. J. Bevitt, and R. R. Reisz. 2019. Dissorophid diversity at the early Permian cave system near Richards Spur, Oklahoma, USA. Palaeontologia Electronica 22(2:a46):1-32
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed; no external expert review is claimed.
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对；没有外部专家审评。
<!-- /evo:text -->
