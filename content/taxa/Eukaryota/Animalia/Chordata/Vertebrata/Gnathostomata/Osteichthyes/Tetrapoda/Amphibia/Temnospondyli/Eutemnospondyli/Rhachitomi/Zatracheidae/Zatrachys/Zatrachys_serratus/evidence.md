---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Zatrachys serratus
    rank: species
    sourceTaxonId: txn:255221
    name:
      en: Zatrachys serratus
      zh: Zatrachys serratus
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
      - occurrenceId: occ:148245
        collectionId: col:13080
        acceptedTaxonId: txn:255221
        taxonomicDifference: null
        referenceId: ref:7693
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: US
          stateProvince: Texas
          county: Archer
        stratigraphy:
          group: Wichita
          formation: Admiral
          member: null
        olderAgeMa: 290.1
        youngerAgeMa: 283.3
      - occurrenceId: occ:296595
        collectionId: col:28394
        acceptedTaxonId: txn:255221
        taxonomicDifference: null
        referenceId: ref:7820
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: US
          stateProvince: Oklahoma
          county: McClain
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 286
      - occurrenceId: occ:789966
        collectionId: col:79162
        acceptedTaxonId: txn:255221
        taxonomicDifference: null
        referenceId: ref:5743
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
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
      - occurrenceId: occ:1021845
        collectionId: col:125142
        acceptedTaxonId: txn:255221
        taxonomicDifference: null
        referenceId: ref:40605
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: US
          stateProvince: West Virginia
          county: Ohio
        stratigraphy:
          group: null
          formation: Pittsburgh
          member: Benwood Limestone
        olderAgeMa: 303.7
        youngerAgeMa: 298.9
      - occurrenceId: occ:1037998
        collectionId: col:127110
        acceptedTaxonId: txn:255221
        taxonomicDifference: null
        referenceId: ref:40605
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: US
          stateProvince: West Virginia
          county: Monongalia
        stratigraphy:
          group: null
          formation: Washington
          member: Middle Washington Limestone
        olderAgeMa: 298.9
        youngerAgeMa: 286
      - occurrenceId: occ:1335612
        collectionId: col:180106
        acceptedTaxonId: txn:255221
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
      - occurrenceId: occ:1335678
        collectionId: col:80833
        acceptedTaxonId: txn:255221
        taxonomicDifference: null
        referenceId: ref:59746
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
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
      - occurrenceId: occ:1337211
        collectionId: col:180384
        acceptedTaxonId: txn:255221
        taxonomicDifference: null
        referenceId: ref:59746
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography
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
      - occurrenceId: occ:1339753
        collectionId: col:180940
        acceptedTaxonId: txn:255221
        taxonomicDifference: null
        referenceId: ref:60077
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
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
      - occurrenceId: occ:1339768
        collectionId: col:180946
        acceptedTaxonId: txn:255221
        taxonomicDifference: null
        referenceId: ref:40605
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography
        locality:
          countryCode: US
          stateProvince: West Virginia
          county: Ohio
        stratigraphy:
          group: Dunkard
          formation: Greene
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 286
      - occurrenceId: occ:1339769
        collectionId: col:180947
        acceptedTaxonId: txn:255221
        taxonomicDifference: null
        referenceId: ref:40605
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography
        locality:
          countryCode: US
          stateProvince: West Virginia
          county: Ohio
        stratigraphy:
          group: Dunkard
          formation: Greene
          member: Upper Dallas
        olderAgeMa: 298.9
        youngerAgeMa: 286
      - occurrenceId: occ:1339948
        collectionId: col:77412
        acceptedTaxonId: txn:255221
        taxonomicDifference: null
        referenceId: ref:60077
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography
        locality:
          countryCode: US
          stateProvince: New Mexico
          county: Rio Arriba
        stratigraphy:
          group: null
          formation: Abo/Cutler
          member: null
        olderAgeMa: 303.7
        youngerAgeMa: 286
      - occurrenceId: occ:1339958
        collectionId: col:84716
        acceptedTaxonId: txn:255221
        taxonomicDifference: null
        referenceId: ref:60077
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography
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
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Zatrachys serratus
      zh: Zatrachys serratus
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
        id: txn:255221
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00018.json.gz
          field: /records/62
          queryName: Zatrachys serratus
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

# Zatrachys serratus

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:255221; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
R. R. Schoch. 2013. The evolution of major temnospondyl clades: an inclusive phylogenetic analysis. Journal of Systematic Palaeontology
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
A. S. Romer. 1928. Vertebrate faunal horizons in the Texas Permo-Carboniferous red beds. University of Texas Bulletin 2801:67-108
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
E. C. Olson. 1965. Zatrachys serratus Cope (Amphibia; labyrinthodontia) from McClain County, Oklahoma. Oklahoma Geology Notes 25(4):91-97
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
P. M. Sander. 1989. Early Permian Depositional Environments of Pond Bonebeds in Central Archer County, Texas. Palaeogeography, Palaeoclimatology, Palaeoecology 69:1-21
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
M. Urban and D. S. Berman. 2007. First occurrence of the late Paleozoic amphibian Zatrachys serratus (Temnospondyli, Zatrachydidae) in the Eastern United States. Annals of Carnegie Museum 76(3):157-164
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
M. Urban and D. S. Berman. 2007. First occurrence of the late Paleozoic amphibian Zatrachys serratus (Temnospondyli, Zatrachydidae) in the Eastern United States. Annals of Carnegie Museum 76(3):157-164
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
S. G. Lucas, S. K. Harris, and J. A. Spielmann, D. S. Berman, A. C. Henrici, A. B. Heckert, K. E. Zeigler, L. F. Rinehart. 2005. Early Permian Vertebrate Assemblage and its Biostratigraphic Significance, Arroyo del Agua, Rio Arriba County, New Mexico. New Mexico Geological Society, 56th Field Conference Guidebook, Geology of the Chama Basin
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
S. G. Lucas, S. K. Harris, and J. A. Spielmann, D. S. Berman, A. C. Henrici, A. B. Heckert, K. E. Zeigler, L. F. Rinehart. 2005. Early Permian Vertebrate Assemblage and its Biostratigraphic Significance, Arroyo del Agua, Rio Arriba County, New Mexico. New Mexico Geological Society, 56th Field Conference Guidebook, Geology of the Chama Basin
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
S. G. Lucas, S. K. Harris, and J. A. Spielmann, D. S. Berman, A. C. Henrici, A. B. Heckert, K. E. Zeigler, L. F. Rinehart. 2005. Early Permian Vertebrate Assemblage and its Biostratigraphic Significance, Arroyo del Agua, Rio Arriba County, New Mexico. New Mexico Geological Society, 56th Field Conference Guidebook, Geology of the Chama Basin
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
R. Kissel. 2010. Morphology, Phylogeny, and Evolution of Diadectidae (Cotylosauria: Diadectomorpha). University of Toronto
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography -->
M. Urban and D. S. Berman. 2007. First occurrence of the late Paleozoic amphibian Zatrachys serratus (Temnospondyli, Zatrachydidae) in the Eastern United States. Annals of Carnegie Museum 76(3):157-164
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography -->
M. Urban and D. S. Berman. 2007. First occurrence of the late Paleozoic amphibian Zatrachys serratus (Temnospondyli, Zatrachydidae) in the Eastern United States. Annals of Carnegie Museum 76(3):157-164
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography -->
R. Kissel. 2010. Morphology, Phylogeny, and Evolution of Diadectidae (Cotylosauria: Diadectomorpha). University of Toronto
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography -->
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
