---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Prosiren elinorae
    rank: species
    sourceTaxonId: txn:156379
    name:
      en: Prosiren elinorae
      zh: Prosiren elinorae
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
      - occurrenceId: occ:289605
        collectionId: col:14408
        acceptedTaxonId: txn:156379
        taxonomicDifference: null
        referenceId: ref:7600
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Hood
        stratigraphy:
          group: Trinity
          formation: Twin Mountains
          member: null
        olderAgeMa: 119.57
        youngerAgeMa: 113.2
      - occurrenceId: occ:289634
        collectionId: col:27604
        acceptedTaxonId: txn:156379
        taxonomicDifference: null
        referenceId: ref:7600
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Erath
        stratigraphy:
          group: Trinity
          formation: Paluxy
          member: null
        olderAgeMa: 113.2
        youngerAgeMa: 100.5
      - occurrenceId: occ:289648
        collectionId: col:27606
        acceptedTaxonId: txn:156379
        taxonomicDifference: null
        referenceId: ref:7600
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Erath
        stratigraphy:
          group: Trinity
          formation: Paluxy
          member: null
        olderAgeMa: 113.2
        youngerAgeMa: 100.5
      - occurrenceId: occ:289653
        collectionId: col:14411
        acceptedTaxonId: txn:156379
        taxonomicDifference: null
        referenceId: ref:7600
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Erath
        stratigraphy:
          group: null
          formation: Paluxy
          member: null
        olderAgeMa: 113.2
        youngerAgeMa: 100.5
      - occurrenceId: occ:289725
        collectionId: col:14375
        acceptedTaxonId: txn:156379
        identifiedName: Prosiren elinorae n. gen. n. sp.
        taxonomicDifference: null
        referenceId: ref:42824
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Wise
        stratigraphy:
          group: Trinity
          formation: Antlers
          member: Middle
        olderAgeMa: 119.57
        youngerAgeMa: 110.1
      - occurrenceId: occ:289739
        collectionId: col:14388
        acceptedTaxonId: txn:156379
        taxonomicDifference: null
        referenceId: ref:7600
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Montague
        stratigraphy:
          group: Trinity
          formation: Antlers
          member: null
        olderAgeMa: 119.57
        youngerAgeMa: 110.1
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Prosiren elinorae
      zh: Prosiren elinorae
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
        id: txn:156379
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00019.json.gz
          field: /records/53
          queryName: Prosiren elinorae
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

# Prosiren elinorae

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:156379; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
C. J. Goin and W. Auffenberg. 1958. New salamanders of the family Sirenidae from the Cretaceous of North America. Fieldiana: Geology 10(33):449-459
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
D. A. Winkler, P. A. Murry, and L. L. Jacobs. 1990. Early Cretaceous (Comanchean) vertebrates of central Texas. Journal of Vertebrate Paleontology 10(1):95-116
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
D. A. Winkler, P. A. Murry, and L. L. Jacobs. 1990. Early Cretaceous (Comanchean) vertebrates of central Texas. Journal of Vertebrate Paleontology 10(1):95-116
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
D. A. Winkler, P. A. Murry, and L. L. Jacobs. 1990. Early Cretaceous (Comanchean) vertebrates of central Texas. Journal of Vertebrate Paleontology 10(1):95-116
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
D. A. Winkler, P. A. Murry, and L. L. Jacobs. 1990. Early Cretaceous (Comanchean) vertebrates of central Texas. Journal of Vertebrate Paleontology 10(1):95-116
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
C. J. Goin and W. Auffenberg. 1958. New salamanders of the family Sirenidae from the Cretaceous of North America. Fieldiana: Geology 10(33):449-459
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
D. A. Winkler, P. A. Murry, and L. L. Jacobs. 1990. Early Cretaceous (Comanchean) vertebrates of central Texas. Journal of Vertebrate Paleontology 10(1):95-116
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed;
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对。
<!-- /evo:text -->
