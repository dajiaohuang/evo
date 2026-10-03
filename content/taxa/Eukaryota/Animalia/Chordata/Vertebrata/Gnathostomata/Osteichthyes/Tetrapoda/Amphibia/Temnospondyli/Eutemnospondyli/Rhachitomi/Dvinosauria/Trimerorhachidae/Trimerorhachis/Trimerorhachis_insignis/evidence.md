---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Trimerorhachis insignis
    rank: species
    sourceTaxonId: txn:90711
    name:
      en: Trimerorhachis insignis
      zh: Trimerorhachis insignis
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
    originalBibliography: E. Daly. 1973. A Lower Permian vertebrate fauna from southern Oklahoma. Journal of Paleontology 47(3):562-589
    occurrenceEvidence:
      - occurrenceId: occ:220192
        collectionId: col:22714
        acceptedTaxonId: txn:90711
        taxonomicDifference: null
        referenceId: ref:5693
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Wichita
        stratigraphy:
          group: null
          formation: Bead Mountain
          member: null
        olderAgeMa: 290.1
        youngerAgeMa: 283.3
      - occurrenceId: occ:295944
        collectionId: col:28143
        acceptedTaxonId: txn:90711
        identifiedTaxonId: txn:194933
        identifiedName: Trimerorhachis alleni n. sp.
        taxonomicDifference: null
        referenceId: ref:28729
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Baylor
        stratigraphy:
          group: Wichita
          formation: Belle Plains
          member: null
        olderAgeMa: 290.1
        youngerAgeMa: 283.3
      - occurrenceId: occ:295950
        collectionId: col:28145
        acceptedTaxonId: txn:90711
        identifiedTaxonId: txn:345365
        identifiedName: Trimerorhachis medius n. sp.
        taxonomicDifference: null
        referenceId: ref:7693
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Baylor
        stratigraphy:
          group: Wichita
          formation: Petrolia
          member: null
        olderAgeMa: 290.1
        youngerAgeMa: 283.3
      - occurrenceId: occ:295966
        collectionId: col:28238
        acceptedTaxonId: txn:90711
        identifiedTaxonId: txn:309285
        identifiedName: Trimerorhachis bilobatus n. sp.
        taxonomicDifference: null
        referenceId: ref:26948
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Archer
        stratigraphy:
          group: Wichita
          formation: Belle Plains
          member: null
        olderAgeMa: 290.1
        youngerAgeMa: 283.3
      - occurrenceId: occ:786936
        collectionId: col:27704
        acceptedTaxonId: txn:90711
        identifiedName: Trimerorhachis cf. insignis
        taxonomicDifference: null
        referenceId: ref:28508
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Knox
        stratigraphy:
          group: Clear Fork
          formation: Vale
          member: null
        olderAgeMa: 283.3
        youngerAgeMa: 274.4
      - occurrenceId: occ:787458
        collectionId: col:79402
        acceptedTaxonId: txn:90711
        taxonomicDifference: null
        referenceId: ref:28557
        bibliography: E. C. Olson. 1967. Early Permian Vertebrates. Oklahoma Geological Survey Circular 74:1-111
        locality:
          countryCode: US
          stateProvince: Oklahoma
          county: Noble
        stratigraphy:
          group: Sumner
          formation: Wellington
          member: null
        olderAgeMa: 290.1
        youngerAgeMa: 283.3
      - occurrenceId: occ:787528
        collectionId: col:84941
        acceptedTaxonId: txn:90711
        identifiedName: Trimerorhachis cf. insignis
        taxonomicDifference: null
        referenceId: ref:26635
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
        locality:
          countryCode: US
          stateProvince: Oklahoma
          county: Noble
        stratigraphy:
          group: Sumner
          formation: Wellington
          member: null
        olderAgeMa: 286
        youngerAgeMa: 274.4
      - occurrenceId: occ:787561
        collectionId: col:79815
        acceptedTaxonId: txn:90711
        taxonomicDifference: null
        referenceId: ref:28557
        bibliography: E. C. Olson. 1967. Early Permian Vertebrates. Oklahoma Geological Survey Circular 74:1-111
        locality:
          countryCode: US
          stateProvince: Oklahoma
          county: Kay
        stratigraphy:
          group: Sumner
          formation: Wellington
          member: McCann Sandstone
        olderAgeMa: 286
        youngerAgeMa: 274.4
      - occurrenceId: occ:787990
        collectionId: col:80741
        acceptedTaxonId: txn:90711
        taxonomicDifference: null
        referenceId: ref:28611
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Baylor
        stratigraphy:
          group: Wichita
          formation: Petrolia
          member: null
        olderAgeMa: 290.1
        youngerAgeMa: 283.3
      - occurrenceId: occ:790491
        collectionId: col:85567
        acceptedTaxonId: txn:90711
        identifiedName: Trimerorhachis cf. insignis
        taxonomicDifference: null
        referenceId: ref:26635
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography
        locality:
          countryCode: US
          stateProvince: Oklahoma
          county: Noble
        stratigraphy:
          group: Sumner
          formation: Wellington
          member: null
        olderAgeMa: 286
        youngerAgeMa: 274.4
      - occurrenceId: occ:790501
        collectionId: col:11165
        acceptedTaxonId: txn:90711
        taxonomicDifference: null
        referenceId: ref:4113
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Archer
        stratigraphy:
          group: Wichita
          formation: Nocona
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 290.1
      - occurrenceId: occ:1317986
        collectionId: col:177019
        acceptedTaxonId: txn:90711
        taxonomicDifference: null
        referenceId: ref:58444
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Baylor
        stratigraphy:
          group: Clear Fork
          formation: Vale
          member: null
        olderAgeMa: 283.3
        youngerAgeMa: 274.4
      - occurrenceId: occ:1328469
        collectionId: col:67735
        acceptedTaxonId: txn:90711
        taxonomicDifference: null
        referenceId: ref:59144
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Taylor
        stratigraphy:
          group: null
          formation: Vale
          member: null
        olderAgeMa: 283.3
        youngerAgeMa: 274.4
      - occurrenceId: occ:1328492
        collectionId: col:178739
        acceptedTaxonId: txn:90711
        taxonomicDifference: null
        referenceId: ref:59144
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/13/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: "Haskell "
        stratigraphy:
          group: Clear Fork
          formation: Vale
          member: null
        olderAgeMa: 286
        youngerAgeMa: 274.4
      - occurrenceId: occ:1339959
        collectionId: col:84716
        acceptedTaxonId: txn:90711
        taxonomicDifference: null
        referenceId: ref:60077
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/14/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Archer
        stratigraphy:
          group: Wichita
          formation: Petrolia
          member: null
        olderAgeMa: 290.1
        youngerAgeMa: 283.3
      - occurrenceId: occ:1340038
        collectionId: col:180991
        acceptedTaxonId: txn:90711
        identifiedName: Trimerorhachis cf. insignis
        taxonomicDifference: null
        referenceId: ref:28557
        bibliography: E. C. Olson. 1967. Early Permian Vertebrates. Oklahoma Geological Survey Circular 74:1-111
        locality:
          countryCode: US
          stateProvince: Oklahoma
          county: Jefferson
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 286
        youngerAgeMa: 274.4
      - occurrenceId: occ:1567369
        collectionId: col:221391
        acceptedTaxonId: txn:90711
        taxonomicDifference: null
        referenceId: ref:77534
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/16/bibliography
        locality:
          countryCode: US
          stateProvince: Oklahoma
          county: Tillman
        stratigraphy:
          group: Sumner
          formation: Garber Sandstone
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 251.902
      - occurrenceId: occ:1567392
        collectionId: col:221392
        acceptedTaxonId: txn:90711
        taxonomicDifference: null
        referenceId: ref:77534
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/17/bibliography
        locality:
          countryCode: US
          stateProvince: Oklahoma
          county: Tillman
        stratigraphy:
          group: Sumner
          formation: Garber Sandstone
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 251.902
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Trimerorhachis insignis
      zh: Trimerorhachis insignis
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
        id: txn:90711
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00017.json.gz
          field: /records/441
          queryName: Trimerorhachis insignis
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 1
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Trimerorhachis insignis

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:90711; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
W. C. Parrish. 1978. Paleoenvironmental analysis of a Lower Permian bonebed and adjacent sediments, Wichita County, Texas. Palaeogeography, Palaeoclimatology, Palaeoecology 24:209-237
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
E. C. Case. 1910. New or little known reptiles and amphibians from the Permian (?) of Texas. Bulletin of the American Museum of Natural History 28:163-181
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
A. S. Romer. 1928. Vertebrate faunal horizons in the Texas Permo-Carboniferous red beds. University of Texas Bulletin 2801:67-108
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
E. D. Cope. 1883. Fourth contribution to the history of the Permian formation of Texas. Paleontological Bulletin 36:628-636
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
E. C. Olson. 1955. Fauna of the Vale and Choza: 10. Trimerorhachis: Including a Revison of Pre-Vale Species. Fieldiana: Geology 10(21):225-274
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
E. C. Olson. 1970. New and little known genera and species of vertebrates from the Lower Permian of Oklahoma. Fieldiana: Geology 18(3):359-434
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
K. Pawley. 2007. The Postcranial Skeleton of Trimerorhachis insignis Cope, 1878 (Temnospondyli: Trimerorhachidae): A Plesiomorphic Temnospondyl from the Lower Permian of North America. Journal of Paleontology 81(5):873-894
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography -->
E. C. Olson. 1970. New and little known genera and species of vertebrates from the Lower Permian of Oklahoma. Fieldiana: Geology 18(3):359-434
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography -->
P. M. Sander. 1987. Taphonomy of the Lower Permian Geraldine Bonebed in Archer County, Texas. Palaeogeography, Palaeoclimatology, Palaeoecology 61:221-236
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography -->
E. C. Olson. 1958. Fauna of the Vale and Choza: Summary, Review, and Integration of the Geology and the Faunas. Fieldiana Geology 10(32):397-448
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography -->
E. C. Olson and J. G. Mead. 1982. The Vale Formation (Lower Permian): Its Vertebrates and Paleoecology. Texas Memorial Museum Bulletin 29
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/13/bibliography -->
E. C. Olson and J. G. Mead. 1982. The Vale Formation (Lower Permian): Its Vertebrates and Paleoecology. Texas Memorial Museum Bulletin 29
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/14/bibliography -->
R. Kissel. 2010. Morphology, Phylogeny, and Evolution of Diadectidae (Cotylosauria: Diadectomorpha). University of Toronto
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/16/bibliography -->
J. Zidek, G.D. Johnson, and W. May, A. Claborn. 2003. New Specimens of Xenacanth and Hybodont Sharks (Elasmobranchii: Xenacanthida and Hybodontoidea) from the Lower Permian of Southwestern Oklahoma. Oklahoma Geology Notes 63(4):136-147
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/17/bibliography -->
J. Zidek, G.D. Johnson, and W. May, A. Claborn. 2003. New Specimens of Xenacanth and Hybodont Sharks (Elasmobranchii: Xenacanthida and Hybodontoidea) from the Lower Permian of Southwestern Oklahoma. Oklahoma Geology Notes 63(4):136-147
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed; no external expert review is claimed.
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对；没有外部专家审评。
<!-- /evo:text -->
