---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Micropholis stowi
    rank: species
    sourceTaxonId: txn:255226
    name:
      en: Micropholis stowi
      zh: Micropholis stowi
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
    originalBibliography:
      markdown: evidence.md
      field: /records/pbdb-fossil-reader/originalBibliography
    occurrenceEvidence:
      - occurrenceId: occ:1134116
        collectionId: col:144320
        acceptedTaxonId: txn:255226
        identifiedName: Micropholis stowi n. gen. n. sp.
        taxonomicDifference: null
        referenceId: ref:46658
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: ZA
          stateProvince: Eastern Cape
          county: Graaff-Reinet
        stratigraphy:
          group: Beaufort
          formation: Katberg
          member: null
        olderAgeMa: 251.902
        youngerAgeMa: 250.8
      - occurrenceId: occ:1134117
        collectionId: col:13043
        acceptedTaxonId: txn:255226
        taxonomicDifference: null
        referenceId: ref:46658
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: ZA
          stateProvince: Eastern Cape
          county: Chris Hani
        stratigraphy:
          group: Beaufort
          formation: Katberg
          member: null
        olderAgeMa: 251.902
        youngerAgeMa: 247
      - occurrenceId: occ:1134118
        collectionId: col:144321
        acceptedTaxonId: txn:255226
        taxonomicDifference: null
        referenceId: ref:46658
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: ZA
          stateProvince: Eastern Cape
          county: null
        stratigraphy:
          group: Beaufort
          formation: Katberg
          member: null
        olderAgeMa: 251.902
        youngerAgeMa: 250.8
      - occurrenceId: occ:1134119
        collectionId: col:144322
        acceptedTaxonId: txn:255226
        taxonomicDifference: null
        referenceId: ref:46658
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: ZA
          stateProvince: Eastern Cape
          county: null
        stratigraphy:
          group: Beaufort
          formation: Katberg
          member: null
        olderAgeMa: 251.902
        youngerAgeMa: 250.8
      - occurrenceId: occ:1134120
        collectionId: col:98602
        acceptedTaxonId: txn:255226
        taxonomicDifference: null
        referenceId: ref:46658
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: ZA
          stateProvince: Free State
          county: null
        stratigraphy:
          group: Beaufort
          formation: Katberg
          member: null
        olderAgeMa: 251.902
        youngerAgeMa: 247
      - occurrenceId: occ:1134121
        collectionId: col:144323
        acceptedTaxonId: txn:255226
        taxonomicDifference: null
        referenceId: ref:46658
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
        locality:
          countryCode: ZA
          stateProvince: Free State
          county: Xhariep
        stratigraphy:
          group: Beaufort
          formation: Katberg
          member: null
        olderAgeMa: 251.902
        youngerAgeMa: 250.8
      - occurrenceId: occ:1134122
        collectionId: col:105608
        acceptedTaxonId: txn:255226
        taxonomicDifference: null
        referenceId: ref:46658
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
        locality:
          countryCode: ZA
          stateProvince: Free State
          county: null
        stratigraphy:
          group: Beaufort
          formation: Katberg
          member: null
        olderAgeMa: 251.902
        youngerAgeMa: 250.8
      - occurrenceId: occ:1134124
        collectionId: col:144325
        acceptedTaxonId: txn:255226
        taxonomicDifference: null
        referenceId: ref:46658
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography
        locality:
          countryCode: ZA
          stateProvince: Free State
          county: Xhariep
        stratigraphy:
          group: Beaufort
          formation: Katberg
          member: null
        olderAgeMa: 251.902
        youngerAgeMa: 250.8
      - occurrenceId: occ:1134125
        collectionId: col:144326
        acceptedTaxonId: txn:255226
        taxonomicDifference: null
        referenceId: ref:46658
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
        locality:
          countryCode: ZA
          stateProvince: Free State
          county: Xhariep
        stratigraphy:
          group: Beaufort
          formation: Katberg
          member: null
        olderAgeMa: 251.902
        youngerAgeMa: 247
      - occurrenceId: occ:1134126
        collectionId: col:144327
        acceptedTaxonId: txn:255226
        taxonomicDifference: null
        referenceId: ref:46658
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography
        locality:
          countryCode: ZA
          stateProvince: Free State
          county: Xhariep
        stratigraphy:
          group: Beaufort
          formation: Katberg
          member: null
        olderAgeMa: 251.902
        youngerAgeMa: 250.8
      - occurrenceId: occ:1134127
        collectionId: col:144328
        acceptedTaxonId: txn:255226
        taxonomicDifference: null
        referenceId: ref:46658
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography
        locality:
          countryCode: ZA
          stateProvince: Free State
          county: Thabo Mofutsanyane
        stratigraphy:
          group: Beaufort
          formation: Normandien
          member: Harrismith
        olderAgeMa: 251.902
        youngerAgeMa: 250.8
      - occurrenceId: occ:1142024
        collectionId: col:13043
        acceptedTaxonId: txn:255226
        identifiedTaxonId: txn:267010
        identifiedName: Petrophryne granulata n. gen. n. sp.
        taxonomicDifference: null
        referenceId: ref:47028
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography
        locality:
          countryCode: ZA
          stateProvince: Eastern Cape
          county: Chris Hani
        stratigraphy:
          group: Beaufort
          formation: Katberg
          member: null
        olderAgeMa: 251.902
        youngerAgeMa: 247
      - occurrenceId: occ:1561169
        collectionId: col:220333
        acceptedTaxonId: txn:255226
        taxonomicDifference: null
        referenceId: ref:76958
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography
        locality:
          countryCode: AQ
          stateProvince: null
          county: null
        stratigraphy:
          group: Beacon
          formation: Fremouw
          member: null
        olderAgeMa: 251.902
        youngerAgeMa: 247
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Micropholis stowi
      zh: Micropholis stowi
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
        id: txn:255226
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00018.json.gz
          field: /records/38
          queryName: Micropholis stowi
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

# Micropholis stowi

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:255226; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
T. H. Huxley. 1859. On some Amphibian and Reptilian Remains from South Africa and Australia. Quarterly Journal of the Geological Society 15:642-649
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
R. R. Schoch and B. S. Rubidge. 2005. The amphibamid Micropholis from the Lystrosaurus Assemblage Zone of South Africa. Journal of Vertebrate Paleontology 25(3):502-522
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
R. R. Schoch and B. S. Rubidge. 2005. The amphibamid Micropholis from the Lystrosaurus Assemblage Zone of South Africa. Journal of Vertebrate Paleontology 25(3):502-522
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
R. R. Schoch and B. S. Rubidge. 2005. The amphibamid Micropholis from the Lystrosaurus Assemblage Zone of South Africa. Journal of Vertebrate Paleontology 25(3):502-522
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
R. R. Schoch and B. S. Rubidge. 2005. The amphibamid Micropholis from the Lystrosaurus Assemblage Zone of South Africa. Journal of Vertebrate Paleontology 25(3):502-522
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
R. R. Schoch and B. S. Rubidge. 2005. The amphibamid Micropholis from the Lystrosaurus Assemblage Zone of South Africa. Journal of Vertebrate Paleontology 25(3):502-522
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
R. R. Schoch and B. S. Rubidge. 2005. The amphibamid Micropholis from the Lystrosaurus Assemblage Zone of South Africa. Journal of Vertebrate Paleontology 25(3):502-522
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
R. R. Schoch and B. S. Rubidge. 2005. The amphibamid Micropholis from the Lystrosaurus Assemblage Zone of South Africa. Journal of Vertebrate Paleontology 25(3):502-522
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
R. R. Schoch and B. S. Rubidge. 2005. The amphibamid Micropholis from the Lystrosaurus Assemblage Zone of South Africa. Journal of Vertebrate Paleontology 25(3):502-522
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
R. R. Schoch and B. S. Rubidge. 2005. The amphibamid Micropholis from the Lystrosaurus Assemblage Zone of South Africa. Journal of Vertebrate Paleontology 25(3):502-522
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography -->
R. R. Schoch and B. S. Rubidge. 2005. The amphibamid Micropholis from the Lystrosaurus Assemblage Zone of South Africa. Journal of Vertebrate Paleontology 25(3):502-522
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography -->
R. R. Schoch and B. S. Rubidge. 2005. The amphibamid Micropholis from the Lystrosaurus Assemblage Zone of South Africa. Journal of Vertebrate Paleontology 25(3):502-522
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography -->
D. M. S. Watson. 1913. Micropholis stowi, Huxley, a temnospondylus amphibian from South Africa. Geological Magazine (Decade V) 10:340-346
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography -->
B. M. Gee and C. A. Sidor. 2021. First record of the amphibamiform Micropholis stowi from the lower Fremouw Formation (Lower Triassic) of Antarctica. Journal of Vertebrate Paleontology 41(1):e1904251
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed; no external expert review is claimed.
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对；没有外部专家审评。
<!-- /evo:text -->
