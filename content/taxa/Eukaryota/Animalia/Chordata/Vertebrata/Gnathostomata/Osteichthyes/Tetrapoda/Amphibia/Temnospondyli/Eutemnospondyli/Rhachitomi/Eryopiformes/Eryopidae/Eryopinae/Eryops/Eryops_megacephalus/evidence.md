---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Eryops megacephalus
    rank: species
    sourceTaxonId: txn:70397
    name:
      en: Eryops megacephalus
      zh: Eryops megacephalus
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
      - occurrenceId: occ:219910
        collectionId: col:22635
        acceptedTaxonId: txn:70397
        taxonomicDifference: null
        referenceId: ref:5743
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: null
        stratigraphy:
          group: Wichita
          formation: Archer City
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 286
      - occurrenceId: occ:296021
        collectionId: col:28253
        acceptedTaxonId: txn:70397
        identifiedTaxonId: var:138120
        identifiedName: Dimetrodon gigas
        taxonomicDifference: null
        referenceId: ref:7693
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Baylor
        stratigraphy:
          group: Wichita
          formation: Waggoner Ranch
          member: null
        olderAgeMa: 290.1
        youngerAgeMa: 274.4
      - occurrenceId: occ:296097
        collectionId: col:28267
        acceptedTaxonId: txn:70397
        identifiedTaxonId: var:138120
        identifiedName: Dimetrodon gigas
        taxonomicDifference: null
        referenceId: ref:9228
        bibliography: "S. W. Williston. 1911. American Permian Vertebrates.. Chicago: University of Chicago Press."
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
      - occurrenceId: occ:346290
        collectionId: col:11165
        acceptedTaxonId: txn:70397
        taxonomicDifference: null
        referenceId: ref:4113
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
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
      - occurrenceId: occ:787459
        collectionId: col:79402
        acceptedTaxonId: txn:70397
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
      - occurrenceId: occ:787562
        collectionId: col:79815
        acceptedTaxonId: txn:70397
        identifiedName: Eryops cf. megacephalus
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
      - occurrenceId: occ:787580
        collectionId: col:79815
        acceptedTaxonId: txn:70397
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
      - occurrenceId: occ:789067
        collectionId: col:85301
        acceptedTaxonId: txn:70397
        taxonomicDifference: null
        referenceId: ref:28758
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Baylor
        stratigraphy:
          group: Wichita
          formation: Lueders
          member: Maybelle limestone
        olderAgeMa: 290.1
        youngerAgeMa: 274.4
      - occurrenceId: occ:789965
        collectionId: col:79162
        acceptedTaxonId: txn:70397
        taxonomicDifference: null
        referenceId: ref:5743
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Archer
        stratigraphy:
          group: Wichita
          formation: Archer City
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 286
      - occurrenceId: occ:790492
        collectionId: col:85567
        acceptedTaxonId: txn:70397
        identifiedName: Eryops cf. megacephalus
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
      - occurrenceId: occ:799808
        collectionId: col:87054
        acceptedTaxonId: txn:70397
        taxonomicDifference: null
        referenceId: ref:14253
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography
        locality:
          countryCode: US
          stateProvince: Oklahoma
          county: Grant
        stratigraphy:
          group: Sumner
          formation: Garber
          member: null
        olderAgeMa: 286
        youngerAgeMa: 274.4
      - occurrenceId: occ:814505
        collectionId: col:85733
        acceptedTaxonId: txn:70397
        identifiedTaxonId: var:138120
        identifiedName: Dimetrodon gigas
        taxonomicDifference: null
        referenceId: ref:30068
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography
        locality:
          countryCode: US
          stateProvince: Oklahoma
          county: Cotton
        stratigraphy:
          group: Sumner
          formation: Garber
          member: null
        olderAgeMa: 290.1
        youngerAgeMa: 274.4
      - occurrenceId: occ:1242744
        collectionId: col:28256
        acceptedTaxonId: txn:70397
        identifiedTaxonId: txn:309178
        identifiedName: Anisodexis imbricarius n. gen. n. sp.
        taxonomicDifference: null
        referenceId: ref:17702
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography
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
      - occurrenceId: occ:1317917
        collectionId: col:177000
        acceptedTaxonId: txn:70397
        taxonomicDifference: null
        referenceId: ref:58444
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/13/bibliography
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
      - occurrenceId: occ:1317987
        collectionId: col:177019
        acceptedTaxonId: txn:70397
        taxonomicDifference: null
        referenceId: ref:58444
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/14/bibliography
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
      - occurrenceId: occ:1328468
        collectionId: col:67735
        acceptedTaxonId: txn:70397
        taxonomicDifference: null
        referenceId: ref:59144
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/15/bibliography
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
      - occurrenceId: occ:1328481
        collectionId: col:178738
        acceptedTaxonId: txn:70397
        taxonomicDifference: null
        referenceId: ref:59144
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/16/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Taylor
        stratigraphy:
          group: Clear Fork
          formation: Vale
          member: null
        olderAgeMa: 283.3
        youngerAgeMa: 274.4
      - occurrenceId: occ:1339957
        collectionId: col:84716
        acceptedTaxonId: txn:70397
        taxonomicDifference: null
        referenceId: ref:60077
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/17/bibliography
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
      - occurrenceId: occ:1339963
        collectionId: col:180978
        acceptedTaxonId: txn:70397
        taxonomicDifference: null
        referenceId: ref:60077
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/18/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Archer
        stratigraphy:
          group: Wichita
          formation: Archer City
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 286
      - occurrenceId: occ:1340028
        collectionId: col:180990
        acceptedTaxonId: txn:70397
        taxonomicDifference: null
        referenceId: ref:28557
        bibliography: E. C. Olson. 1967. Early Permian Vertebrates. Oklahoma Geological Survey Circular 74:1-111
        locality:
          countryCode: US
          stateProvince: Oklahoma
          county: Grant
        stratigraphy:
          group: null
          formation: Garber
          member: null
        olderAgeMa: 286
        youngerAgeMa: 274.4
      - occurrenceId: occ:1340039
        collectionId: col:180991
        acceptedTaxonId: txn:70397
        identifiedName: Eryops cf. megacephalus
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
      - occurrenceId: occ:1429156
        collectionId: col:108766
        acceptedTaxonId: txn:70397
        taxonomicDifference: null
        referenceId: ref:30068
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/21/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: null
        stratigraphy:
          group: null
          formation: Clyde
          member: Grape Creek
        olderAgeMa: 290.1
        youngerAgeMa: 283.3
      - occurrenceId: occ:1567370
        collectionId: col:221391
        acceptedTaxonId: txn:70397
        taxonomicDifference: null
        referenceId: ref:77534
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/22/bibliography
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
      - occurrenceId: occ:1567393
        collectionId: col:221392
        acceptedTaxonId: txn:70397
        taxonomicDifference: null
        referenceId: ref:77534
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/23/bibliography
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
      en: Eryops megacephalus
      zh: Eryops megacephalus
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
        id: txn:70397
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00018.json.gz
          field: /records/83
          queryName: Eryops megacephalus
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 15
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Eryops megacephalus

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:70397; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
E. D. Cope. 1877. Descriptions of extinct Vertebrata from the Permian and Triassic formations of the United States. Proceedings of the American Philosophical Society 17(100):182-193
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
P. M. Sander. 1989. Early Permian Depositional Environments of Pond Bonebeds in Central Archer County, Texas. Palaeogeography, Palaeoclimatology, Palaeoecology 69:1-21
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
A. S. Romer. 1928. Vertebrate faunal horizons in the Texas Permo-Carboniferous red beds. University of Texas Bulletin 2801:67-108
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
P. M. Sander. 1987. Taphonomy of the Lower Permian Geraldine Bonebed in Archer County, Texas. Palaeogeography, Palaeoclimatology, Palaeoecology 61:221-236
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
D. S. Berman. 1970. Vertebrate Fossils from the Lueders Formation, Lower Permian of North-Central Texas. University of California Publications in Geological Sciences 86:1-61
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
P. M. Sander. 1989. Early Permian Depositional Environments of Pond Bonebeds in Central Archer County, Texas. Palaeogeography, Palaeoclimatology, Palaeoecology 69:1-21
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography -->
E. C. Olson. 1970. New and little known genera and species of vertebrates from the Lower Permian of Oklahoma. Fieldiana: Geology 18(3):359-434
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography -->
N. J. Czaplewski, R. L. Cifelli, and W. Langston. 1994. Catalog of type and figured fossil vertebrates, Oklahoma Museum of Natural History. Oklahoma Geological Survey Special Publication 94-1:1-35
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography -->
W. F. Cummins. 1908. The Localities and Horizons of Permian Vertebrate Fossils in Texas. Journal of Geology 16(8):737-745
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography -->
E. D. Cope. 1882. Third contribution to the history of the Vertebrata of the Permian formation of Texas. Proceedings of the American Philosophical Society 20:447-461
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/13/bibliography -->
E. C. Olson. 1958. Fauna of the Vale and Choza: Summary, and Integration of the Geology and the Faunas. Fieldiana Geology 10(32):397-448
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/14/bibliography -->
E. C. Olson. 1958. Fauna of the Vale and Choza: Summary, and Integration of the Geology and the Faunas. Fieldiana Geology 10(32):397-448
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/15/bibliography -->
E. C. Olson and J. G. Mead. 1982. The Vale Formation (Lower Permian): Its Vertebrates and Paleoecology. Texas Memorial Museum Bulletin 29
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/16/bibliography -->
E. C. Olson and J. G. Mead. 1982. The Vale Formation (Lower Permian): Its Vertebrates and Paleoecology. Texas Memorial Museum Bulletin 29
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/17/bibliography -->
R. Kissel. 2010. Morphology, Phylogeny, and Evolution of Diadectidae (Cotylosauria: Diadectomorpha). University of Toronto
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/18/bibliography -->
R. Kissel. 2010. Morphology, Phylogeny, and Evolution of Diadectidae (Cotylosauria: Diadectomorpha). University of Toronto
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/21/bibliography -->
W. F. Cummins. 1908. The Localities and Horizons of Permian Vertebrate Fossils in Texas. Journal of Geology 16(8):737-745
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/22/bibliography -->
J. Zidek, G.D. Johnson, and W. May, A. Claborn. 2003. New Specimens of Xenacanth and Hybodont Sharks (Elasmobranchii: Xenacanthida and Hybodontoidea) from the Lower Permian of Southwestern Oklahoma. Oklahoma Geology Notes 63(4):136-147
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/23/bibliography -->
J. Zidek, G.D. Johnson, and W. May, A. Claborn. 2003. New Specimens of Xenacanth and Hybodont Sharks (Elasmobranchii: Xenacanthida and Hybodontoidea) from the Lower Permian of Southwestern Oklahoma. Oklahoma Geology Notes 63(4):136-147
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed;
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对。
<!-- /evo:text -->
