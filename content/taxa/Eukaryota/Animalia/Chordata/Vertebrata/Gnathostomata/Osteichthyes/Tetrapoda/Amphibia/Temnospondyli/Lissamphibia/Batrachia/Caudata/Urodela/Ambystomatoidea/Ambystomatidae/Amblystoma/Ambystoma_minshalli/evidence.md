---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Ambystoma minshalli
    rank: species
    sourceTaxonId: txn:393913
    name:
      en: Ambystoma minshalli
      zh: Ambystoma minshalli
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
      - occurrenceId: occ:286988
        collectionId: col:18284
        acceptedTaxonId: txn:393913
        identifiedName: Ambystoma minshalli n. sp.
        taxonomicDifference: null
        referenceId: ref:25657
        bibliography: J. A. Tihen and C. J. Chantell. 1963. Urodele remains from the Valentine Formation of Nebraska. Copeia 1963(3):505-510
        locality:
          countryCode: US
          stateProvince: Nebraska
          county: Brown
        stratigraphy:
          group: Ogallala
          formation: Valentine
          member: Cornell Dam
        olderAgeMa: 16.3
        youngerAgeMa: 12.5
      - occurrenceId: occ:287339
        collectionId: col:18442
        acceptedTaxonId: txn:393913
        taxonomicDifference: null
        referenceId: ref:7565
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: US
          stateProvince: Nebraska
          county: Cherry
        stratigraphy:
          group: Ogallala
          formation: Valentine
          member: Crookston Bridge
        olderAgeMa: 16.3
        youngerAgeMa: 12.5
      - occurrenceId: occ:287793
        collectionId: col:27481
        acceptedTaxonId: txn:393913
        taxonomicDifference: null
        referenceId: ref:733
        bibliography: R. M. Joeckel. 1988. A new late Miocene herpetofauna from Franklin County, Nebraska. Copeia 1988(3):787-789
        locality:
          countryCode: US
          stateProvince: Nebraska
          county: Franklin
        stratigraphy:
          group: Ogallala
          formation: null
          member: null
        olderAgeMa: 16.3
        youngerAgeMa: 12.5
      - occurrenceId: occ:288032
        collectionId: col:27507
        acceptedTaxonId: txn:393913
        taxonomicDifference: null
        referenceId: ref:7572
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: US
          stateProvince: Nebraska
          county: Knox
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 16.3
        youngerAgeMa: 12.5
      - occurrenceId: occ:288058
        collectionId: col:18397
        acceptedTaxonId: txn:393913
        taxonomicDifference: null
        referenceId: ref:7574
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: US
          stateProvince: South Dakota
          county: Charles Mix
        stratigraphy:
          group: null
          formation: Fort Randall
          member: null
        olderAgeMa: 16.3
        youngerAgeMa: 12.5
      - occurrenceId: occ:288086
        collectionId: col:17963
        acceptedTaxonId: txn:393913
        identifiedName: Ambystoma aff. minshalli
        taxonomicDifference: null
        referenceId: ref:7577
        bibliography: D. A. Yatkola. 1976. Mid-Miocene lizards from western Nebraska. Copeia 1976(4):645-654
        locality:
          countryCode: US
          stateProvince: Nebraska
          county: Box Butte
        stratigraphy:
          group: null
          formation: Runningwater
          member: null
        olderAgeMa: 18.5
        youngerAgeMa: 16.3
      - occurrenceId: occ:288101
        collectionId: col:18303
        acceptedTaxonId: txn:393913
        taxonomicDifference: null
        referenceId: ref:1717
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
        locality:
          countryCode: US
          stateProvince: South Dakota
          county: Charles Mix
        stratigraphy:
          group: null
          formation: Fort Randall
          member: '"rock rose" zone'
        olderAgeMa: 16.3
        youngerAgeMa: 12.5
      - occurrenceId: occ:289373
        collectionId: col:18141
        acceptedTaxonId: txn:393913
        taxonomicDifference: null
        referenceId: ref:705
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography
        locality:
          countryCode: US
          stateProvince: Nebraska
          county: Brown
        stratigraphy:
          group: Ogallala
          formation: Valentine
          member: Cornell Dam
        olderAgeMa: 16.3
        youngerAgeMa: 12.5
      - occurrenceId: occ:1108117
        collectionId: col:18102
        acceptedTaxonId: txn:393913
        taxonomicDifference: null
        referenceId: ref:781
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
        locality:
          countryCode: US
          stateProvince: Nebraska
          county: Banner
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 16.3
        youngerAgeMa: 12.5
      - occurrenceId: occ:1108126
        collectionId: col:18208
        acceptedTaxonId: txn:393913
        taxonomicDifference: null
        referenceId: ref:781
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography
        locality:
          countryCode: US
          stateProvince: Nebraska
          county: Banner
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 16.3
        youngerAgeMa: 12.5
      - occurrenceId: occ:1379363
        collectionId: col:188779
        acceptedTaxonId: txn:393913
        taxonomicDifference: null
        referenceId: ref:63362
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography
        locality:
          countryCode: US
          stateProvince: Nebraska
          county: Antelope
        stratigraphy:
          group: null
          formation: Ash Hollow
          member: Cap Rock
        olderAgeMa: 12.5
        youngerAgeMa: 9.4
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Ambystoma minshalli
      zh: Ambystoma minshalli
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
        id: txn:393913
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00019.json.gz
          field: /records/161
          queryName: Ambystoma minshalli
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

# Ambystoma minshalli

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:393913; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
R. Estes. 1981. Handbuch der Paläoherpetologie/Encyclopedia of Paleoherpetology. Part 2. Gymnophiona, Caudata. Gustav Fischer Verlag, Stuttgart
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
R. Estes and J. A. Tihen. 1964. Lower vertebrates from the Valentine Formation of Nebraska. American Midland Naturalist 72(2):453-472
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
J. A. Holman. 1996. Glad Tidings, a late middle Miocene herpetofauna from northeastern Nebraska. Journal of Herpetology 30(3):430-432
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
J. A. Holman. 1978. Herpetofauna of the Bijou Hills local fauna (late Miocene: Barstovian) of South Dakota. Herpetologica 34(3):253-257
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
M. Green and J. A. Holman. 1977. A late Tertiary stream channel fauna from South Bijou Hill, South Dakota. Journal of Paleontology 51(3):543-547
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
J. A. Holman. 1973. Reptiles of the Egelhoff local fauna (Upper Miocene) of Nebraska. Contributions from the Museum of Paleontology, University of Michigan 24(12):125-134
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
M. R. Voorhies, J. A. Holman, and X.-X. Xu . 1987. The Hottell Ranch rhino quarries (basal Ogallala: medial Barstovian), Banner County, Nebraska. Part I: Geologic setting, faunal lists, lower vertebrates. Contributions to Geology, University of Wyoming 25(1):55-69
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography -->
M. R. Voorhies, J. A. Holman, and X.-X. Xu . 1987. The Hottell Ranch rhino quarries (basal Ogallala: medial Barstovian), Banner County, Nebraska. Part I: Geologic setting, faunal lists, lower vertebrates. Contributions to Geology, University of Wyoming 25(1):55-69
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography -->
S. T. Tucker, R. E. Otto, and R. M. Joeckel, M. R. Voorhies. 2014. The geology and paleontology of Ashfall Fossil Beds, a late Miocene (Clarendonian) mass-death assemblage, Antelope County and adjacent Knox County, Nebraska, USA. Geological Society of America Field Guide 36:1-22
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed;
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对。
<!-- /evo:text -->
