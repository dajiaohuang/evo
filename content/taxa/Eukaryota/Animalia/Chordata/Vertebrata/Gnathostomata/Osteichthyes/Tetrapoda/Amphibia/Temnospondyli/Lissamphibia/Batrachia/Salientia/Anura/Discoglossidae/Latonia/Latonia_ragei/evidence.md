---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Latonia ragei
    rank: species
    sourceTaxonId: txn:331571
    name:
      en: Latonia ragei
      zh: Latonia ragei
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
      - occurrenceId: occ:1089635
        collectionId: col:136919
        acceptedTaxonId: txn:331571
        identifiedName: Latonia aff. ragei
        taxonomicDifference: null
        referenceId: ref:43777
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: FR
          stateProvince: Midi-Pyrenees
          county: Gers
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 16.9
        youngerAgeMa: 15.98
      - occurrenceId: occ:1091801
        collectionId: col:48325
        acceptedTaxonId: txn:331571
        taxonomicDifference: null
        referenceId: ref:43885
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
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
      - occurrenceId: occ:1302380
        collectionId: col:174065
        acceptedTaxonId: txn:331571
        taxonomicDifference: null
        referenceId: ref:56762
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: AT
          stateProvince: null
          county: null
        stratigraphy:
          group: null
          formation: Laa
          member: null
        olderAgeMa: 15.98
        youngerAgeMa: 13.82
      - occurrenceId: occ:1302392
        collectionId: col:174066
        acceptedTaxonId: txn:331571
        taxonomicDifference: null
        referenceId: ref:56762
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: AT
          stateProvince: null
          county: null
        stratigraphy:
          group: null
          formation: Laa
          member: null
        olderAgeMa: 15.98
        youngerAgeMa: 13.82
      - occurrenceId: occ:1302396
        collectionId: col:174067
        acceptedTaxonId: txn:331571
        taxonomicDifference: null
        referenceId: ref:56762
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: AT
          stateProvince: null
          county: null
        stratigraphy:
          group: null
          formation: Laa
          member: null
        olderAgeMa: 15.98
        youngerAgeMa: 13.82
      - occurrenceId: occ:1304479
        collectionId: col:136755
        acceptedTaxonId: txn:331571
        identifiedName: Latonia ragei n. sp.
        taxonomicDifference: null
        referenceId: ref:56985
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
        locality:
          countryCode: FR
          stateProvince: Aquitaine
          county: Lot-et-Garonne
        stratigraphy:
          group: null
          formation: Agenais Limestone
          member: null
        olderAgeMa: 22.4
        youngerAgeMa: 20
      - occurrenceId: occ:1304480
        collectionId: col:125333
        acceptedTaxonId: txn:331571
        taxonomicDifference: null
        referenceId: ref:56985
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
        locality:
          countryCode: FR
          stateProvince: Auvergne
          county: Allier
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 23.04
        youngerAgeMa: 20.45
      - occurrenceId: occ:1469275
        collectionId: col:37789
        acceptedTaxonId: txn:331571
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
      - occurrenceId: occ:1663346
        collectionId: col:31907
        acceptedTaxonId: txn:331571
        identifiedName: Latonia cf. ragei
        taxonomicDifference: null
        referenceId: ref:89503
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
        locality:
          countryCode: GR
          stateProvince: null
          county: null
        stratigraphy:
          group: null
          formation: Spilia
          member: null
        olderAgeMa: 5.09
        youngerAgeMa: 3.55
      - occurrenceId: occ:1663354
        collectionId: col:31229
        acceptedTaxonId: txn:331571
        identifiedName: Latonia cf. ragei
        taxonomicDifference: null
        referenceId: ref:89503
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography
        locality:
          countryCode: GR
          stateProvince: null
          county: null
        stratigraphy:
          group: null
          formation: Spilia
          member: null
        olderAgeMa: 5.09
        youngerAgeMa: 3.55
      - occurrenceId: occ:1663363
        collectionId: col:31900
        acceptedTaxonId: txn:331571
        identifiedName: Latonia cf. ragei
        taxonomicDifference: null
        referenceId: ref:89503
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography
        locality:
          countryCode: GR
          stateProvince: null
          county: null
        stratigraphy:
          group: null
          formation: Spilia
          member: null
        olderAgeMa: 5.09
        youngerAgeMa: 3.55
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Latonia ragei
      zh: Latonia ragei
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
        id: txn:331571
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00019.json.gz
          field: /records/37
          queryName: Latonia ragei
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

# Latonia ragei

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:331571; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
S. Hossini. 1993. A new species of Latonia (Anura, Discoglossidae) from the lower Miocene of France. Amphibia-Reptilia 14:237-245
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
J.-C. Rage and S. Bailon. 2005. Amphibians and squamate reptiles from the late early Miocene (MN 4) of Béon 1 (Montréal-du-Gers, southwestern France). Geodiversitas 27(3):413-441
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
R. Böttcher, E. P. J. Heizmann, and M. W. Rasser, R. Ziegler. 2009. Biostratigraphy and palaeoecology of a Middle Miocene (Karpathian, MN 5) fauna from the northern margin of the North Alpine Foreland Basin (Oggenhausen 2, SW' Germany). Neues Jahrbuch für Geologie und Paläontologie, Abhandlungen 254(1/2):237-260
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
M. Böhme. 2002. Lower Vertebrates (Teleostei, Amphibia, Sauria) from the Karpatian of the Korneuburg Basin - Paleoecological, environmental and paleoclimatical implications. Beiträge Paläontologie 27:339-353
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
M. Böhme. 2002. Lower Vertebrates (Teleostei, Amphibia, Sauria) from the Karpatian of the Korneuburg Basin - Paleoecological, environmental and paleoclimatical implications. Beiträge Paläontologie 27:339-353
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
M. Böhme. 2002. Lower Vertebrates (Teleostei, Amphibia, Sauria) from the Karpatian of the Korneuburg Basin - Paleoecological, environmental and paleoclimatical implications. Beiträge Paläontologie 27:339-353
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
S. Hossini. 1993. A new species of Latonia (Anura, Discoglossidae) from the lower Miocene of France. Amphibia-Reptilia 14:237-245
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
S. Hossini. 1993. A new species of Latonia (Anura, Discoglossidae) from the lower Miocene of France. Amphibia-Reptilia 14:237-245
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
P. M. Tempfer. 2005. The Herpetofauna (Amphibia: Caudata, Anura; Reptilia: Sclerogiossa) of the Upper Miocene Locality Kohfidisch (Burgenland, Austria). Beiträge zur Paläontologie von Österreich 29:145-253
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
G. Georgalis, A. Villa, and M. Ivanov, M. Delfino. 2024. New diverse amphibian and reptile assemblages from the late Neogene of northern Greece provide novel insights into the emergence of extant herpetofaunas of the southern Balkans. Swiss Journal of Palaeontology 143(34):1-91
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography -->
G. Georgalis, A. Villa, and M. Ivanov, M. Delfino. 2024. New diverse amphibian and reptile assemblages from the late Neogene of northern Greece provide novel insights into the emergence of extant herpetofaunas of the southern Balkans. Swiss Journal of Palaeontology 143(34):1-91
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography -->
G. Georgalis, A. Villa, and M. Ivanov, M. Delfino. 2024. New diverse amphibian and reptile assemblages from the late Neogene of northern Greece provide novel insights into the emergence of extant herpetofaunas of the southern Balkans. Swiss Journal of Palaeontology 143(34):1-91
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed;
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对。
<!-- /evo:text -->
