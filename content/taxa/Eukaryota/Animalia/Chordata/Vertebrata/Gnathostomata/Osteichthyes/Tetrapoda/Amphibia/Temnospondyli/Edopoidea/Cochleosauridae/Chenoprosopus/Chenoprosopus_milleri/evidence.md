---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Chenoprosopus milleri
    rank: species
    sourceTaxonId: txn:139020
    name:
      en: Chenoprosopus milleri
      zh: Chenoprosopus milleri
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
      - occurrenceId: occ:790525
        collectionId: col:85337
        acceptedTaxonId: txn:139020
        identifiedName: Chenoprosopus milleri n. gen. n. sp.
        taxonomicDifference: null
        referenceId: ref:28944
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: US
          stateProvince: New Mexico
          county: Rio Arriba
        stratigraphy:
          group: null
          formation: Abo/Cutler
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 286
      - occurrenceId: occ:1315235
        collectionId: col:176499
        acceptedTaxonId: txn:139020
        identifiedTaxonId: txn:204063
        identifiedName: Chenoprosopus lewisi n. sp.
        taxonomicDifference: null
        referenceId: ref:58101
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Clay County
        stratigraphy:
          group: Bowie
          formation: Markley
          member: null
        olderAgeMa: 303.7
        youngerAgeMa: 286
      - occurrenceId: occ:1335610
        collectionId: col:180106
        acceptedTaxonId: txn:139020
        taxonomicDifference: null
        referenceId: ref:59746
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: US
          stateProvince: New Mexico
          county: Rio Arriba
        stratigraphy:
          group: Cutler
          formation: El Cobre Canyon
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 286
      - occurrenceId: occ:1335676
        collectionId: col:80833
        acceptedTaxonId: txn:139020
        taxonomicDifference: null
        referenceId: ref:59746
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: US
          stateProvince: New Mexico
          county: Rio Arriba
        stratigraphy:
          group: null
          formation: Abo/Cutler
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 286
      - occurrenceId: occ:1337201
        collectionId: col:180383
        acceptedTaxonId: txn:139020
        taxonomicDifference: null
        referenceId: ref:59746
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: US
          stateProvince: New Mexico
          county: Rio Arriba
        stratigraphy:
          group: Cutler
          formation: El Cobre Canyon
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 286
      - occurrenceId: occ:1337209
        collectionId: col:180384
        acceptedTaxonId: txn:139020
        taxonomicDifference: null
        referenceId: ref:59746
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
        locality:
          countryCode: US
          stateProvince: New Mexico
          county: Rio Arriba
        stratigraphy:
          group: Cutler
          formation: El Cobre Canyon
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 286
      - occurrenceId: occ:1339746
        collectionId: col:34761
        acceptedTaxonId: txn:139020
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
        locality:
          countryCode: US
          stateProvince: New Mexico
          county: Rio Arriba
        stratigraphy:
          group: null
          formation: Cutler
          member: null
        olderAgeMa: 303.7
        youngerAgeMa: 298.9
      - occurrenceId: occ:1339752
        collectionId: col:180940
        acceptedTaxonId: txn:139020
        taxonomicDifference: null
        referenceId: ref:60077
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography
        locality:
          countryCode: US
          stateProvince: New Mexico
          county: Rio Arriba
        stratigraphy:
          group: null
          formation: Cutler
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 286
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Chenoprosopus milleri
      zh: Chenoprosopus milleri
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
        id: txn:139020
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00019.json.gz
          field: /records/190
          queryName: Chenoprosopus milleri
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

# Chenoprosopus milleri

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:139020; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
M. G. Mehl. 1913. A description of Chenoprosopus milleri gen. et sp. nov. Permo-Carboniferous Vertebrates from New Mexico. Carnegie Institution of Washington Publication 181:11-16
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
M. G. Mehl. 1913. A description of Chenoprosopus milleri gen. et sp. nov.  In E. C. Case, S. W. Williston, & M. G. Mehl (eds.), Permo-Carboniferous Vertebrates from New Mexico. Carnegie Institution of Washington Publication. Washington: Carnegie Institution of Washington. 181:11-16
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
R. W. Hook. 1993. Chenoprosopus lewisi, a new cochleosaurid amphibian (Amphibia: Temnospondyli) from the Permo-Carboniferous of north-central Texas. Annals of Carnegie Museum 62:273-291
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
S. G. Lucas, S. K. Harris, and J. A. Spielmann, D. S. Berman, A. C. Henrici, A. B. Heckert, K. E. Zeigler, L. F. Rinehart. 2005. Early Permian Vertebrate Assemblage and its Biostratigraphic Significance, Arroyo del Agua, Rio Arriba County, New Mexico. New Mexico Geological Society, 56th Field Conference Guidebook, Geology of the Chama Basin
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
S. G. Lucas, S. K. Harris, and J. A. Spielmann, D. S. Berman, A. C. Henrici, A. B. Heckert, K. E. Zeigler, L. F. Rinehart. 2005. Early Permian Vertebrate Assemblage and its Biostratigraphic Significance, Arroyo del Agua, Rio Arriba County, New Mexico. New Mexico Geological Society, 56th Field Conference Guidebook, Geology of the Chama Basin
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
S. G. Lucas, S. K. Harris, and J. A. Spielmann, D. S. Berman, A. C. Henrici, A. B. Heckert, K. E. Zeigler, L. F. Rinehart. 2005. Early Permian Vertebrate Assemblage and its Biostratigraphic Significance, Arroyo del Agua, Rio Arriba County, New Mexico. New Mexico Geological Society, 56th Field Conference Guidebook, Geology of the Chama Basin
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
S. G. Lucas, S. K. Harris, and J. A. Spielmann, D. S. Berman, A. C. Henrici, A. B. Heckert, K. E. Zeigler, L. F. Rinehart. 2005. Early Permian Vertebrate Assemblage and its Biostratigraphic Significance, Arroyo del Agua, Rio Arriba County, New Mexico. New Mexico Geological Society, 56th Field Conference Guidebook, Geology of the Chama Basin
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
R. R. Schoch and A. R. Milner. 2014. Handbook of Paleoherpetology Part 3A2 Temnospondyli I.. Munich: Verlag Dr Friedrich Pfeil.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
R. Kissel. 2010. Morphology, Phylogeny, and Evolution of Diadectidae (Cotylosauria: Diadectomorpha). University of Toronto
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed; no external expert review is claimed.
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对；没有外部专家审评。
<!-- /evo:text -->
