---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Platyhystrix rugosus
    rank: species
    sourceTaxonId: txn:194929
    name:
      en: Platyhystrix rugosus
      zh: Platyhystrix rugosus
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
      - occurrenceId: occ:149741
        collectionId: col:13257
        acceptedTaxonId: txn:194929
        identifiedName: cf. Platyhystrix rugosus
        taxonomicDifference: null
        referenceId: ref:4394
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: US
          stateProvince: Utah
          county: San Juan
        stratigraphy:
          group: null
          formation: Cutler
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 290.1
      - occurrenceId: occ:789986
        collectionId: col:85479
        acceptedTaxonId: txn:194929
        taxonomicDifference: null
        referenceId: ref:28872
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: US
          stateProvince: Colorado
          county: San Miguel
        stratigraphy:
          group: null
          formation: Cutler
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 286
      - occurrenceId: occ:1335613
        collectionId: col:180106
        acceptedTaxonId: txn:194929
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
      - occurrenceId: occ:1335679
        collectionId: col:80833
        acceptedTaxonId: txn:194929
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
      - occurrenceId: occ:1337203
        collectionId: col:180383
        acceptedTaxonId: txn:194929
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
      - occurrenceId: occ:1337212
        collectionId: col:180384
        acceptedTaxonId: txn:194929
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
      - occurrenceId: occ:1339757
        collectionId: col:180940
        acceptedTaxonId: txn:194929
        taxonomicDifference: null
        referenceId: ref:60077
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
        olderAgeMa: 298.9
        youngerAgeMa: 286
      - occurrenceId: occ:1339765
        collectionId: col:180944
        acceptedTaxonId: txn:194929
        identifiedTaxonId: var:194929
        identifiedName: Ctenosaurus rugosus n. sp.
        taxonomicDifference: recombined as
        referenceId: ref:28729
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
      - occurrenceId: occ:1339893
        collectionId: col:34761
        acceptedTaxonId: txn:194929
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
        olderAgeMa: 303.7
        youngerAgeMa: 298.9
      - occurrenceId: occ:1340539
        collectionId: col:180989
        acceptedTaxonId: txn:194929
        identifiedName: cf. Platyhystrix rugosus
        taxonomicDifference: null
        referenceId: ref:60092
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography
        locality:
          countryCode: US
          stateProvince: New Mexico
          county: San Miguel
        stratigraphy:
          group: null
          formation: Sangre de Cristo
          member: null
        olderAgeMa: 303.7
        youngerAgeMa: 290.1
      - occurrenceId: occ:1340547
        collectionId: col:181077
        acceptedTaxonId: txn:194929
        identifiedName: Platyhystrix cf. rugosus
        taxonomicDifference: null
        referenceId: ref:60092
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography
        locality:
          countryCode: US
          stateProvince: New Mexico
          county: Otero
        stratigraphy:
          group: null
          formation: Laborcita
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
      en: Platyhystrix rugosus
      zh: Platyhystrix rugosus
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
        id: txn:194929
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00018.json.gz
          field: /records/1
          queryName: Platyhystrix rugosus
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

# Platyhystrix rugosus

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:194929; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
E. C. Case. 1910. New or little known reptiles and amphibians from the Permian (?) of Texas. Bulletin of the American Museum of Natural History 28:163-181
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
P. P. Vaughn. 1962. Vertebrates from the Halgaito Tongue of the Cutler Formation, Permian of San Juan County, Utah. Journal of Paleontology 36(3):529-539
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
G. E. Lewis and P. P. Vaughn. 1965. Early Permian Vertebrates from the Cutler Formation of the Placerville Area, Colorado. United States Geological Survey Professional Papers 503-C:C1-C46
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
R. Kissel. 2010. Morphology, Phylogeny, and Evolution of Diadectidae (Cotylosauria: Diadectomorpha). University of Toronto
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
E. C. Case. 1910. New or little known reptiles and amphibians from the Permian (?) of Texas. Bulletin of the American Museum of Natural History 28:163-181
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
R. Kissel. 2010. Morphology, Phylogeny, and Evolution of Diadectidae (Cotylosauria: Diadectomorpha). University of Toronto
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography -->
D. S. Berman. 1993. Lower Permian vertebrate localities of New Mexico and their assemblages.  In S. G. Lucas, J. Zidek (eds.), Vertebrate Paleontology of New Mexico. New Mexico Museum of Natural History and Science Bulletin 2
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography -->
D. S. Berman. 1993. Lower Permian vertebrate localities of New Mexico and their assemblages.  In S. G. Lucas, J. Zidek (eds.), Vertebrate Paleontology of New Mexico. New Mexico Museum of Natural History and Science Bulletin 2
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed; no external expert review is claimed.
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对；没有外部专家审评。
<!-- /evo:text -->
