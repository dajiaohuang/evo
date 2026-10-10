---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Latonia gigantea
    rank: species
    sourceTaxonId: txn:249806
    name:
      en: Latonia gigantea
      zh: Latonia gigantea
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
      - occurrenceId: occ:650735
        collectionId: col:69098
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:23602
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
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
      - occurrenceId: occ:1079012
        collectionId: col:134954
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:43315
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
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
      - occurrenceId: occ:1081724
        collectionId: col:135812
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:43465
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: RO
          stateProvince: Arad
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 12.8
        youngerAgeMa: 11.63
      - occurrenceId: occ:1083490
        collectionId: col:136066
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:43517
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: HU
          stateProvince: North Hungary
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 5.333
        youngerAgeMa: 3.6
      - occurrenceId: occ:1083491
        collectionId: col:136067
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:43517
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: HU
          stateProvince: North Hungary
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 5.333
        youngerAgeMa: 3.6
      - occurrenceId: occ:1083492
        collectionId: col:136068
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:43517
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
        locality:
          countryCode: HU
          stateProvince: North Hungary
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 5.333
        youngerAgeMa: 3.6
      - occurrenceId: occ:1091856
        collectionId: col:34615
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:43888
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
        locality:
          countryCode: DE
          stateProvince: Bavaria
          county: Kelheim
        stratigraphy:
          group: Molasse
          formation: Upper Freshwater Molasse
          member: null
        olderAgeMa: 15.98
        youngerAgeMa: 13.82
      - occurrenceId: occ:1260504
        collectionId: col:167497
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:54667
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography
        locality:
          countryCode: HU
          stateProvince: Nograd
          county: Paszto
        stratigraphy:
          group: null
          formation: Sajovolgyi
          member: null
        olderAgeMa: 13.82
        youngerAgeMa: 11.1
      - occurrenceId: occ:1260680
        collectionId: col:167509
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:54667
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
        locality:
          countryCode: HU
          stateProvince: Nograd
          county: Paszto
        stratigraphy:
          group: null
          formation: Sajovolgyi
          member: null
        olderAgeMa: 13.82
        youngerAgeMa: 11.1
      - occurrenceId: occ:1260715
        collectionId: col:167512
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:54667
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography
        locality:
          countryCode: HU
          stateProvince: Nograd
          county: Paszto
        stratigraphy:
          group: null
          formation: Sajovolgyi
          member: null
        olderAgeMa: 13.82
        youngerAgeMa: 11.1
      - occurrenceId: occ:1265186
        collectionId: col:75481
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:55045
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography
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
      - occurrenceId: occ:1266134
        collectionId: col:168132
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:55074
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography
        locality:
          countryCode: HU
          stateProvince: Heves
          county: Eger
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 12.75
        youngerAgeMa: 11.1
      - occurrenceId: occ:1266135
        collectionId: col:168164
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:55074
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography
        locality:
          countryCode: HU
          stateProvince: Heves
          county: Eger
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 12.75
        youngerAgeMa: 11.1
      - occurrenceId: occ:1266141
        collectionId: col:168177
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:55074
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/13/bibliography
        locality:
          countryCode: HU
          stateProvince: Heves
          county: Eger
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 11.1
        youngerAgeMa: 9.67
      - occurrenceId: occ:1266145
        collectionId: col:168187
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:55074
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/14/bibliography
        locality:
          countryCode: HU
          stateProvince: Heves
          county: Eger
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 11.1
        youngerAgeMa: 9.67
      - occurrenceId: occ:1266146
        collectionId: col:168189
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:55074
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/15/bibliography
        locality:
          countryCode: HU
          stateProvince: Heves
          county: Eger
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 11.1
        youngerAgeMa: 9.67
      - occurrenceId: occ:1266147
        collectionId: col:168190
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:55074
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/16/bibliography
        locality:
          countryCode: HU
          stateProvince: Heves
          county: Eger
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 11.1
        youngerAgeMa: 9.67
      - occurrenceId: occ:1266148
        collectionId: col:168191
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:55074
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/17/bibliography
        locality:
          countryCode: HU
          stateProvince: Heves
          county: Eger
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 11.1
        youngerAgeMa: 9.67
      - occurrenceId: occ:1309555
        collectionId: col:175727
        acceptedTaxonId: txn:249806
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
      - occurrenceId: occ:1388853
        collectionId: col:69435
        acceptedTaxonId: txn:249806
        identifiedName: Latonia cf. gigantea
        taxonomicDifference: null
        referenceId: ref:64277
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/19/bibliography
        locality:
          countryCode: GR
          stateProvince: Thrace
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 16.9
        youngerAgeMa: 15.98
      - occurrenceId: occ:1432166
        collectionId: col:199780
        acceptedTaxonId: txn:249806
        identifiedName: Latonia cf. gigantea
        taxonomicDifference: null
        referenceId: ref:67945
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/20/bibliography
        locality:
          countryCode: RS
          stateProvince: Serbia
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 20.45
        youngerAgeMa: 15.98
      - occurrenceId: occ:1432170
        collectionId: col:199781
        acceptedTaxonId: txn:249806
        identifiedName: Latonia cf. gigantea
        taxonomicDifference: null
        referenceId: ref:67945
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/21/bibliography
        locality:
          countryCode: RS
          stateProvince: Serbia
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 20.45
        youngerAgeMa: 15.98
      - occurrenceId: occ:1432178
        collectionId: col:199782
        acceptedTaxonId: txn:249806
        identifiedName: Latonia cf. gigantea
        taxonomicDifference: null
        referenceId: ref:67945
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/22/bibliography
        locality:
          countryCode: RS
          stateProvince: Serbia
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 20.45
        youngerAgeMa: 15.98
      - occurrenceId: occ:1434046
        collectionId: col:200044
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:68035
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/23/bibliography
        locality:
          countryCode: RO
          stateProvince: Bihor
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 13.82
        youngerAgeMa: 12.75
      - occurrenceId: occ:1434122
        collectionId: col:200051
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:68035
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/24/bibliography
        locality:
          countryCode: RO
          stateProvince: Bihor
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 12.75
        youngerAgeMa: 11.1
      - occurrenceId: occ:1468788
        collectionId: col:205187
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:70404
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/25/bibliography
        locality:
          countryCode: DE
          stateProvince: Bavaria
          county: Neu-Ulm
        stratigraphy:
          group: North Alpine Foreland Basin
          formation: Upper Freshwater Molasse
          member: Untere Fluviatile Serie
        olderAgeMa: 15.98
        youngerAgeMa: 13.82
      - occurrenceId: occ:1469274
        collectionId: col:37789
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:70425
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/26/bibliography
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
      - occurrenceId: occ:1482007
        collectionId: col:206345
        acceptedTaxonId: txn:249806
        taxonomicDifference: null
        referenceId: ref:70899
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/27/bibliography
        locality:
          countryCode: DE
          stateProvince: Bavaria
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 11.63
        youngerAgeMa: 7.246
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Latonia gigantea
      zh: Latonia gigantea
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
        id: txn:249806
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00019.json.gz
          field: /records/38
          queryName: Latonia gigantea
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

# Latonia gigantea

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:249806; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
M. Venczel and E. Stiuca. 2008. Late middle Miocene amphibians and squamate reptiles from Taut, Romania. Geodiversitas 30(4):731-763
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
V. J. Sach and E. P. J. Heizmann. 2001. Stratigraphy and mammal faunas of the Brackwassermolasse in the surroundings of Ulm (Southwest Germany). Stuttgarter Beiträge zur Naturkunde Serie B (Geologie und Paläontologie) 310:1-95
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
M. Ivanov and M. Böhme. 2011. Snakes from Griesbeckerzell (Langhian, Early Badenian), North Alpine Foreland Basin (Germany), with comments on the evolution of snake faunas in Central Europe during the Miocene Climatic Optimum. Geodiversitas 33(3):411-449
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
M. Venczel and E. Stiuca. 2008. Late middle Miocene amphibians and squamate reptiles from Taut, Romania. Geodiversitas 30(4):731-763
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
M. Venczel. 2001. Anurans and squamates from the Lower Pliocene (MN 14) Osztramos 1 locality (Northern Hungary). Fragmenta Palaeontologica Hungarica 19:79-90
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
M. Venczel. 2001. Anurans and squamates from the Lower Pliocene (MN 14) Osztramos 1 locality (Northern Hungary). Fragmenta Palaeontologica Hungarica 19:79-90
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
M. Venczel. 2001. Anurans and squamates from the Lower Pliocene (MN 14) Osztramos 1 locality (Northern Hungary). Fragmenta Palaeontologica Hungarica 19:79-90
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
M. Böhme. 2010. Ectothermic vertebrates (Actinopterygii, Allocaudata, Urodela, Anura, Crocodylia, Squamata) from the Miocene of Sandelzhausen (Germany, Bavaria) and their implications for environment reconstruction and palaeoclimate. Paläontologische Zeitschrift 84(1):3-41
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
E. Gál, J. Hír, and E. Kessler, J. Kókay, L. Mészáros, M. Vencel. 1999. Középs & #337;-miocén & #337;smaradványok, a Mátrasz & #337;l & #337;s , Rákóczi-kápolna alatti útbevágásból. I. A Mátrasz & #337;l & #337;s 1. lel & #337;hely [Middle miocene fossils from the road cut below the Rákóczi chapel at Mátrasz & #337;l & #337;s. I. The site Mátrasz & #337;l & #337;s 1]. Folia Historico Naturalia Musei Matraensis 23:33-78
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
E. Gál, J. Hír, and E. Kessler, J. Kókay, L. Mészáros, M. Vencel. 1999. Középs & #337;-miocén & #337;smaradványok, a Mátrasz & #337;l & #337;s , Rákóczi-kápolna alatti útbevágásból. I. A Mátrasz & #337;l & #337;s 1. lel & #337;hely [Middle miocene fossils from the road cut below the Rákóczi chapel at Mátrasz & #337;l & #337;s. I. The site Mátrasz & #337;l & #337;s 1]. Folia Historico Naturalia Musei Matraensis 23:33-78
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography -->
E. Gál, J. Hír, and E. Kessler, J. Kókay, L. Mészáros, M. Vencel. 1999. Középs & #337;-miocén & #337;smaradványok, a Mátrasz & #337;l & #337;s , Rákóczi-kápolna alatti útbevágásból. I. A Mátrasz & #337;l & #337;s 1. lel & #337;hely [Middle miocene fossils from the road cut below the Rákóczi chapel at Mátrasz & #337;l & #337;s. I. The site Mátrasz & #337;l & #337;s 1]. Folia Historico Naturalia Musei Matraensis 23:33-78
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography -->
R. L. Bernor, L. Kordos L. Rook et al. 2004. Recent Advances on Multidisciplinary Research at Rudabánya, Late Miocene (MN9), Hungary: a compendium. Palaeontographia Italica 89:3-36
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography -->
M. Venczel and J. Hír. 2013. Amphibians and Squamates from the Miocene of Felsőtárkány Basin, N-Hungary. Palaeontographica, Abteilung A: Paleozoology – Stratigraphy 300(1–6):117-158
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography -->
M. Venczel and J. Hír. 2013. Amphibians and Squamates from the Miocene of Felsőtárkány Basin, N-Hungary. Palaeontographica, Abteilung A: Paleozoology – Stratigraphy 300(1–6):117-158
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/13/bibliography -->
M. Venczel and J. Hír. 2013. Amphibians and Squamates from the Miocene of Felsőtárkány Basin, N-Hungary. Palaeontographica, Abteilung A: Paleozoology – Stratigraphy 300(1–6):117-158
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/14/bibliography -->
M. Venczel and J. Hír. 2013. Amphibians and Squamates from the Miocene of Felsőtárkány Basin, N-Hungary. Palaeontographica, Abteilung A: Paleozoology – Stratigraphy 300(1–6):117-158
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/15/bibliography -->
M. Venczel and J. Hír. 2013. Amphibians and Squamates from the Miocene of Felsőtárkány Basin, N-Hungary. Palaeontographica, Abteilung A: Paleozoology – Stratigraphy 300(1–6):117-158
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/16/bibliography -->
M. Venczel and J. Hír. 2013. Amphibians and Squamates from the Miocene of Felsőtárkány Basin, N-Hungary. Palaeontographica, Abteilung A: Paleozoology – Stratigraphy 300(1–6):117-158
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/17/bibliography -->
M. Venczel and J. Hír. 2013. Amphibians and Squamates from the Miocene of Felsőtárkány Basin, N-Hungary. Palaeontographica, Abteilung A: Paleozoology – Stratigraphy 300(1–6):117-158
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/19/bibliography -->
G. L. Georgalis, A. Villa, and M. Ivanov, S. Roussiakis, P. Skandalos, M. Delfino. 2017. Early Miocene herpetofaunas from the Greek localities of Aliveri and Karydia – bridging a gap in the knowledge of amphibians and reptiles from the early Neogene of southeastern Europe. Historical Biology
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/20/bibliography -->
D. Đurić. 2016. The Early Miocene herpetofauna (Amphibia and Squamata) from Sibnica, Serbia. Special Issue of the Natural History Museum in Belgrade: Life on the Shore - geological and palaeontological research in the Neogene of Sibnica and vicinity (Levač Basin, Central Serbia) Part 1
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/21/bibliography -->
D. Đurić. 2016. The Early Miocene herpetofauna (Amphibia and Squamata) from Sibnica, Serbia. Special Issue of the Natural History Museum in Belgrade: Life on the Shore - geological and palaeontological research in the Neogene of Sibnica and vicinity (Levač Basin, Central Serbia) Part 1
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/22/bibliography -->
D. Đurić. 2016. The Early Miocene herpetofauna (Amphibia and Squamata) from Sibnica, Serbia. Special Issue of the Natural History Museum in Belgrade: Life on the Shore - geological and palaeontological research in the Neogene of Sibnica and vicinity (Levač Basin, Central Serbia) Part 1
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/23/bibliography -->
M. Venczel, J. Hír, and R. R. Huza, E. Popa D. Golban. 2005. A new middle Miocene vertebrate fauna from Subpiatrǎ (Bihor County, Romania). Nymphaea 12:23-38
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/24/bibliography -->
M. Venczel, J. Hír, and R. R. Huza, E. Popa D. Golban. 2005. A new middle Miocene vertebrate fauna from Subpiatrǎ (Bihor County, Romania). Nymphaea 12:23-38
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/25/bibliography -->
J. Prieto, M. Böhme, and H. Maurer, K. Heissig, H. A. Abdul Aziz. 2009. Biostratigraphy and sedimentology of the Fluviatile Untere Serie (Early and Middle Miocene) in the central part of the North Alpine Foreland Basin: implications for palaeoenvironment and climate. International Journal of Earth Sciences 98:1767-1791
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/26/bibliography -->
P. M. Tempfer. 2005. The Herpetofauna (Amphibia: Caudata, Anura; Reptilia: Sclerogiossa) of the Upper Miocene Locality Kohfidisch (Burgenland, Austria). Beiträge zur Paläontologie von Österreich 29:145-253
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/27/bibliography -->
M. Bohme, N. Spassov, and J. Fuss, A. Troscher, A. S. Deane, J. Prieto, T. Lechner, D. R. Begun. 2019. A new Miocene ape and locomotion in the ancestor of great apes and humans. Nature
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed;
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对。
<!-- /evo:text -->
