---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Mioproteus caucasicus
    rank: species
    sourceTaxonId: txn:393901
    name:
      en: Mioproteus caucasicus
      zh: Mioproteus caucasicus
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
      - occurrenceId: occ:650592
        collectionId: col:70332
        acceptedTaxonId: txn:393901
        taxonomicDifference: null
        referenceId: ref:23602
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: DE
          stateProvince: null
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 23.04
        youngerAgeMa: 15.98
      - occurrenceId: occ:650733
        collectionId: col:69098
        acceptedTaxonId: txn:393901
        taxonomicDifference: null
        referenceId: ref:23602
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: DE
          stateProvince: Baden-Württemberg
          county: Alb-Donau
        stratigraphy:
          group: Molasse
          formation: Brackwater Molasse
          member: Kirchberg beds
        olderAgeMa: 20.45
        youngerAgeMa: 15.98
      - occurrenceId: occ:1079008
        collectionId: col:134954
        acceptedTaxonId: txn:393901
        taxonomicDifference: null
        referenceId: ref:43315
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: DE
          stateProvince: Bavaria
          county: Aichach-Friedberg
        stratigraphy:
          group: Molasse
          formation: Upper Freshwater Molasse
          member: Fluviatile Untere Serie
        olderAgeMa: 15.98
        youngerAgeMa: 13.82
      - occurrenceId: occ:1091808
        collectionId: col:48325
        acceptedTaxonId: txn:393901
        taxonomicDifference: null
        referenceId: ref:43885
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: DE
          stateProvince: Baden-Württemberg
          county: Heidenheim
        stratigraphy:
          group: Molasse
          formation: Upper Freshwater Molasse
          member: null
        olderAgeMa: 15.98
        youngerAgeMa: 13.82
      - occurrenceId: occ:1265179
        collectionId: col:75481
        acceptedTaxonId: txn:393901
        taxonomicDifference: null
        referenceId: ref:55045
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: HU
          stateProvince: Borsod-Abaúj-Zemplén
          county: Edelény
        stratigraphy:
          group: null
          formation: Edelény
          member: null
        olderAgeMa: 11.1
        youngerAgeMa: 9.67
      - occurrenceId: occ:1309556
        collectionId: col:175727
        acceptedTaxonId: txn:393901
        taxonomicDifference: null
        referenceId: ref:57549
        bibliography: V. Sach. 2010. Einmal Miozän und zurück – Zeitreise am Maurerkopf bei Edelbeuren. Oberschwaben Naturnah 2010:41-45
        locality:
          countryCode: DE
          stateProvince: Baden-Wurttemberg
          county: Biberach
        stratigraphy:
          group: Molasse
          formation: Upper Freshwater Molasse
          member: null
        olderAgeMa: 15.98
        youngerAgeMa: 13.82
      - occurrenceId: occ:1439738
        collectionId: col:200980
        acceptedTaxonId: txn:393901
        identifiedName: Mioproteus cf. caucasicus
        taxonomicDifference: null
        referenceId: ref:68879
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
        locality:
          countryCode: KZ
          stateProvince: null
          county: null
        stratigraphy:
          group: null
          formation: Aral
          member: null
        olderAgeMa: 23.04
        youngerAgeMa: 5.333
      - occurrenceId: occ:1469261
        collectionId: col:37789
        acceptedTaxonId: txn:393901
        taxonomicDifference: null
        referenceId: ref:70425
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography
        locality:
          countryCode: AT
          stateProvince: Burgenland
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 8.725
        youngerAgeMa: 7.9
      - occurrenceId: occ:1627923
        collectionId: col:36143
        acceptedTaxonId: txn:393901
        taxonomicDifference: null
        referenceId: ref:85134
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
        locality:
          countryCode: MD
          stateProvince: Tighina Departement
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 11.63
        youngerAgeMa: 5.333
      - occurrenceId: occ:1627933
        collectionId: col:196590
        acceptedTaxonId: txn:393901
        taxonomicDifference: null
        referenceId: ref:85134
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography
        locality:
          countryCode: RU
          stateProvince: Adygea
          county: Maykop District
        stratigraphy:
          group: null
          formation: "Gaverdovsky "
          member: null
        olderAgeMa: 11.63
        youngerAgeMa: 5.333
      - occurrenceId: occ:1627943
        collectionId: col:48446
        acceptedTaxonId: txn:393901
        taxonomicDifference: null
        referenceId: ref:85134
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography
        locality:
          countryCode: UA
          stateProvince: Khmel'nitsk'yi
          county: Shepetivka
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 11.63
        youngerAgeMa: 8.725
      - occurrenceId: occ:1627965
        collectionId: col:196591
        acceptedTaxonId: txn:393901
        taxonomicDifference: null
        referenceId: ref:85134
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography
        locality:
          countryCode: RU
          stateProvince: Adygea
          county: Maykop District
        stratigraphy:
          group: null
          formation: "Gaverdovsky "
          member: null
        olderAgeMa: 11.63
        youngerAgeMa: 5.333
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Mioproteus caucasicus
      zh: Mioproteus caucasicus
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
        id: txn:393901
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00019.json.gz
          field: /records/141
          queryName: Mioproteus caucasicus
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

# Mioproteus caucasicus

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:393901; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
V. J. Sach and E. P. J. Heizmann. 2001. Stratigraphy and mammal faunas of the Brackwassermolasse in the surroundings of Ulm (Southwest Germany). Stuttgarter Beiträge zur Naturkunde Serie B (Geologie und Paläontologie) 310:1-95
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
V. J. Sach and E. P. J. Heizmann. 2001. Stratigraphy and mammal faunas of the Brackwassermolasse in the surroundings of Ulm (Southwest Germany). Stuttgarter Beiträge zur Naturkunde Serie B (Geologie und Paläontologie) 310:1-95
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
M. Ivanov and M. Böhme. 2011. Snakes from Griesbeckerzell (Langhian, Early Badenian), North Alpine Foreland Basin (Germany), with comments on the evolution of snake faunas in Central Europe during the Miocene Climatic Optimum. Geodiversitas 33(3):411-449
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
R. Böttcher, E. P. J. Heizmann, and M. W. Rasser, R. Ziegler. 2009. Biostratigraphy and palaeoecology of a Middle Miocene (Karpathian, MN 5) fauna from the northern margin of the North Alpine Foreland Basin (Oggenhausen 2, SW' Germany). Neues Jahrbuch für Geologie und Paläontologie, Abhandlungen 254(1/2):237-260
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
R. L. Bernor, L. Kordos L. Rook et al. 2004. Recent Advances on Multidisciplinary Research at Rudabánya, Late Miocene (MN9), Hungary: a compendium. Palaeontographia Italica 89:3-36
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
D.V. Malakhov. 2003. The earliest known record of Mioproteus (Caudata; Proteidae) from the Middle Miocene of Central Kazakhstan. Biota 4:67-72
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
P. M. Tempfer. 2005. The Herpetofauna (Amphibia: Caudata, Anura; Reptilia: Sclerogiossa) of the Upper Miocene Locality Kohfidisch (Burgenland, Austria). Beiträge zur Paläontologie von Österreich 29:145-253
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
V. A. Codrea, M. Bordeianu, and M. Venczel. 2022. Amphibians and squamate reptiles from the late Miocene of Fălciu (Eastern Romania). Palaeontologica Electronica 25(2):a19
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography -->
V. A. Codrea, M. Bordeianu, and M. Venczel. 2022. Amphibians and squamate reptiles from the late Miocene of Fălciu (Eastern Romania). Palaeontologica Electronica 25(2):a19
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography -->
V. A. Codrea, M. Bordeianu, and M. Venczel. 2022. Amphibians and squamate reptiles from the late Miocene of Fălciu (Eastern Romania). Palaeontologica Electronica 25(2):a19
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography -->
V. A. Codrea, M. Bordeianu, and M. Venczel. 2022. Amphibians and squamate reptiles from the late Miocene of Fălciu (Eastern Romania). Palaeontologica Electronica 25(2):a19
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed;
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对。
<!-- /evo:text -->
