---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Salamandra sansaniensis
    rank: species
    sourceTaxonId: txn:58729
    name:
      en: Salamandra sansaniensis
      zh: Salamandra sansaniensis
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
      - occurrenceId: occ:451681
        collectionId: col:12840
        acceptedTaxonId: txn:58729
        taxonomicDifference: null
        referenceId: ref:11647
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: FR
          stateProvince: Quercy, Midi-Pyrenees Region
          county: Tarn-et-Garonne Departement
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 41.03
        youngerAgeMa: 37.71
      - occurrenceId: occ:501985
        collectionId: col:51002
        acceptedTaxonId: txn:58729
        taxonomicDifference: null
        referenceId: ref:70380
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: AT
          stateProvince: null
          county: null
        stratigraphy:
          group: null
          formation: Grund
          member: null
        olderAgeMa: 15.98
        youngerAgeMa: 13.82
      - occurrenceId: occ:652741
        collectionId: col:58983
        acceptedTaxonId: txn:58729
        taxonomicDifference: null
        referenceId: ref:23644
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: SK
          stateProvince: Bratislava
          county: Bratislava IV
        stratigraphy:
          group: Baden
          formation: Studienka
          member: Sandberg
        olderAgeMa: 13.82
        youngerAgeMa: 11.63
      - occurrenceId: occ:1079010
        collectionId: col:134954
        acceptedTaxonId: txn:58729
        taxonomicDifference: null
        referenceId: ref:43315
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
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
      - occurrenceId: occ:1083585
        collectionId: col:60281
        acceptedTaxonId: txn:58729
        identifiedName: Salamandra (cf. Salamandra) sansaniensis
        taxonomicDifference: variant of
        referenceId: ref:43525
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: FR
          stateProvince: null
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 27.3
        youngerAgeMa: 23.04
      - occurrenceId: occ:1091809
        collectionId: col:48325
        acceptedTaxonId: txn:58729
        taxonomicDifference: null
        referenceId: ref:43885
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
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
      - occurrenceId: occ:1091852
        collectionId: col:34615
        acceptedTaxonId: txn:58729
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
      - occurrenceId: occ:1431363
        collectionId: col:175587
        acceptedTaxonId: txn:58729
        taxonomicDifference: null
        referenceId: ref:67851
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography
        locality:
          countryCode: AT
          stateProvince: null
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 12.8
        youngerAgeMa: 11.63
      - occurrenceId: occ:1627982
        collectionId: col:69617
        acceptedTaxonId: txn:58729
        taxonomicDifference: null
        referenceId: ref:85138
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
        locality:
          countryCode: DE
          stateProvince: Rhineland-Palatinate
          county: Mainz
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 23.04
        youngerAgeMa: 22.4
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Salamandra sansaniensis
      zh: Salamandra sansaniensis
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
        id: txn:58729
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00019.json.gz
          field: /records/137
          queryName: Salamandra sansaniensis
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

# Salamandra sansaniensis

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:58729; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
J.-C. Rage. 1988. Le gisement du Bretou (Phosphorites du Quercy, Tarn-et-Garonne, France) et sa faune des vertebres de l'Eocene superieur; 1. Amphibiens et reptiles. [Le Bretou locality (Quercy Phosphorites, Tarn-et-Garonne, France) and its late Eocene vertebrate fauna; 1. Amphibians and reptiles.]. Palaeontographica Abteilung A 205(1-6):3-27
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
J.-C. Rage. 1988. Le gisement du Bretou (Phosphorites du Quercy, Tarn-et-Garonne, France) et sa faune des vertebres de l'Eocene superieur; 1. Amphibiens et reptiles. [Le Bretou locality (Quercy Phosphorites, Tarn-et-Garonne, France) and its late Eocene vertebrate fauna; 1. Amphibians and reptiles.]. Palaeontographica Abteilung A 205(1-6):3-27
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
P. M. Miklas-Tempfer. 2003. The Miocene herpetofaunas of Grund (Caudata; Chelonii, Sauria, Serpentes) and Mühlbach am Manhartsberg (Chelonii, Sauria, Amphisbaenia, Serpentes), Lower Austria. Annalen des Naturhistorischen Museums in Wien 104(A):195-235
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
M. Sabol and M. Kovac. 2006. Badenian palaeoenvironment, faunal succesion and biostratigraphy: A case study from Northern Vienna Basin, Devinska Nova Ves-Bonanza site (Western Carpathians, Slovakia). Beitrage zur Palaontologie 30:415-425
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
M. Ivanov and M. Böhme. 2011. Snakes from Griesbeckerzell (Langhian, Early Badenian), North Alpine Foreland Basin (Germany), with comments on the evolution of snake faunas in Central Europe during the Miocene Climatic Optimum. Geodiversitas 33(3):411-449
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
M. Augé and J.-C. Rage. 1995. Le Garouillas et les sites contemporains (Oligocene, MP 25) des Phosphorites du Quercy (Lot, Tarn-et-Garonne, France) et leurs faunas de vertebres. 2. Amphibiens et squamates. Palaeontographica Abteilung A 236(1-6):11-32
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
R. Böttcher, E. P. J. Heizmann, and M. W. Rasser, R. Ziegler. 2009. Biostratigraphy and palaeoecology of a Middle Miocene (Karpathian, MN 5) fauna from the northern margin of the North Alpine Foreland Basin (Oggenhausen 2, SW' Germany). Neues Jahrbuch für Geologie und Paläontologie, Abhandlungen 254(1/2):237-260
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
M. Böhme. 2010. Ectothermic vertebrates (Actinopterygii, Allocaudata, Urodela, Anura, Crocodylia, Squamata) from the Miocene of Sandelzhausen (Germany, Bavaria) and their implications for environment reconstruction and palaeoclimate. Paläontologische Zeitschrift 84(1):3-41
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
M. Böhme and D. Vasilyan. 2014. Ectothermic vertebrates from the late Middle Miocene of Gratkorn (Austria, Styria). Palaeobiodiversity and Palaeoenvironments 92:21-40
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
A. Villa, S. Gobbi, and M. Delfino. 2022. Additions to the early Miocene herpetofauna of Weisenau (Germany):
urodeles and squamates from a rediscovered historical collection
in Italy. PalZ 96:113-127
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed;
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对。
<!-- /evo:text -->
