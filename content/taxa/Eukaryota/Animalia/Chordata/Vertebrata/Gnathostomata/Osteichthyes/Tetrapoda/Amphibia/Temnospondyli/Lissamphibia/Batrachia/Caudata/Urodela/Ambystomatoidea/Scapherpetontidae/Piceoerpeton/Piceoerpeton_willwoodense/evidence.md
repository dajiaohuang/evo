---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Piceoerpeton willwoodense
    rank: species
    sourceTaxonId: txn:110561
    name:
      en: Piceoerpeton willwoodense
      zh: Piceoerpeton willwoodense
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
    originalBibliography: C. A. M. Meszoely. 1967. A new cryptobranchid salamander from the Early Eocene of Wyoming. Copeia 1967(2):346-349
    occurrenceEvidence:
      - occurrenceId: occ:462999
        collectionId: col:15082
        acceptedTaxonId: txn:110561
        taxonomicDifference: null
        referenceId: ref:28586
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Big Horn
        stratigraphy:
          group: null
          formation: Fort Union
          member: null
        olderAgeMa: 57.5
        youngerAgeMa: 56
      - occurrenceId: occ:520379
        collectionId: col:15000
        acceptedTaxonId: txn:110561
        taxonomicDifference: null
        referenceId: ref:28586
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: US
          stateProvince: North Dakota
          county: Billings
        stratigraphy:
          group: null
          formation: Bullion Creek
          member: null
        olderAgeMa: 60.9
        youngerAgeMa: 57.5
      - occurrenceId: occ:520523
        collectionId: col:15017
        acceptedTaxonId: txn:110561
        taxonomicDifference: null
        referenceId: ref:14358
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Big Horn
        stratigraphy:
          group: null
          formation: Fort Union
          member: null
        olderAgeMa: 60.9
        youngerAgeMa: 57.5
      - occurrenceId: occ:580609
        collectionId: col:15583
        acceptedTaxonId: txn:110561
        taxonomicDifference: null
        referenceId: ref:44340
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: CA
          stateProvince: Northwest Territories
          county: null
        stratigraphy:
          group: Eureka Sound
          formation: Margaret
          member: null
        olderAgeMa: 56
        youngerAgeMa: 51.1
      - occurrenceId: occ:707207
        collectionId: col:75868
        acceptedTaxonId: txn:110561
        identifiedTaxonId: var:110561
        identifiedName: Piceoerpeton willwoodensis n. gen. n. sp.
        taxonomicDifference: corrected to
        referenceId: ref:25640
        bibliography: C. A. M. Meszoely. 1967. A new cryptobranchid salamander from the Early Eocene of Wyoming. Copeia 1967(2):346-349
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Park
        stratigraphy:
          group: null
          formation: Willwood
          member: null
        olderAgeMa: 56
        youngerAgeMa: 51.1
      - occurrenceId: occ:787819
        collectionId: col:14978
        acceptedTaxonId: txn:110561
        taxonomicDifference: null
        referenceId: ref:28586
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
        locality:
          countryCode: CA
          stateProvince: Saskatchewan
          county: null
        stratigraphy:
          group: null
          formation: Ravenscrag
          member: null
        olderAgeMa: 60.9
        youngerAgeMa: 57.5
      - occurrenceId: occ:787820
        collectionId: col:14955
        acceptedTaxonId: txn:110561
        taxonomicDifference: null
        referenceId: ref:28586
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: Carter
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 60.9
        youngerAgeMa: 57.5
      - occurrenceId: occ:787821
        collectionId: col:15176
        acceptedTaxonId: txn:110561
        taxonomicDifference: null
        referenceId: ref:28586
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Park
        stratigraphy:
          group: null
          formation: Fort Union
          member: null
        olderAgeMa: 57.5
        youngerAgeMa: 56
      - occurrenceId: occ:787822
        collectionId: col:15028
        acceptedTaxonId: txn:110561
        taxonomicDifference: null
        referenceId: ref:28586
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Park
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 57.5
        youngerAgeMa: 56
      - occurrenceId: occ:787823
        collectionId: col:14934
        acceptedTaxonId: txn:110561
        taxonomicDifference: null
        referenceId: ref:28586
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: null
          formation: Paskapoo
          member: null
        olderAgeMa: 60.9
        youngerAgeMa: 57.5
      - occurrenceId: occ:787824
        collectionId: col:85096
        acceptedTaxonId: txn:110561
        taxonomicDifference: null
        referenceId: ref:28586
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Park
        stratigraphy:
          group: null
          formation: Fort Union
          member: null
        olderAgeMa: 60.9
        youngerAgeMa: 57.5
      - occurrenceId: occ:787825
        collectionId: col:14931
        acceptedTaxonId: txn:110561
        taxonomicDifference: null
        referenceId: ref:28586
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography
        locality:
          countryCode: US
          stateProvince: North Dakota
          county: Grant
        stratigraphy:
          group: null
          formation: Slope
          member: null
        olderAgeMa: 60.9
        youngerAgeMa: 57.5
      - occurrenceId: occ:1395697
        collectionId: col:15048
        acceptedTaxonId: txn:110561
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: Powder River
        stratigraphy:
          group: null
          formation: Fort Union
          member: Tongue River
        olderAgeMa: 60.9
        youngerAgeMa: 57.5
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Piceoerpeton willwoodense
      zh: Piceoerpeton willwoodense
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
        id: txn:110561
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00019.json.gz
          field: /records/151
          queryName: Piceoerpeton willwoodense
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

# Piceoerpeton willwoodense

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:110561; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
B. G. Naylor and D. W. Krause. 1981. Piceoerpeton, a giant early Tertiary salamander from western North America. Journal of Paleontology 55(3):507-523
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
B. G. Naylor and D. W. Krause. 1981. Piceoerpeton, a giant early Tertiary salamander from western North America. Journal of Paleontology 55(3):507-523
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
D. W. Krause. 1980. Early Tertiary amphibians from the Bighorn Basin, Wyoming. University of Michigan Papers on Paleontology 243:69-71
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
J. D. Gardner. 2012. Revision of Piceoerpeton MESZOELY (Caudata: Scapherpetontidae) and description of a new species from the late Maastrichtian and ? early Paleocene of western North America. Bulletin de la Société Géologique de France 183(6):611-620
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
B. G. Naylor and D. W. Krause. 1981. Piceoerpeton, a giant early Tertiary salamander from western North America. Journal of Paleontology 55(3):507-523
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
B. G. Naylor and D. W. Krause. 1981. Piceoerpeton, a giant early Tertiary salamander from western North America. Journal of Paleontology 55(3):507-523
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
B. G. Naylor and D. W. Krause. 1981. Piceoerpeton, a giant early Tertiary salamander from western North America. Journal of Paleontology 55(3):507-523
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
B. G. Naylor and D. W. Krause. 1981. Piceoerpeton, a giant early Tertiary salamander from western North America. Journal of Paleontology 55(3):507-523
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography -->
B. G. Naylor and D. W. Krause. 1981. Piceoerpeton, a giant early Tertiary salamander from western North America. Journal of Paleontology 55(3):507-523
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography -->
B. G. Naylor and D. W. Krause. 1981. Piceoerpeton, a giant early Tertiary salamander from western North America. Journal of Paleontology 55(3):507-523
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography -->
B. G. Naylor and D. W. Krause. 1981. Piceoerpeton, a giant early Tertiary salamander from western North America. Journal of Paleontology 55(3):507-523
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed; no external expert review is claimed.
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对；没有外部专家审评。
<!-- /evo:text -->
