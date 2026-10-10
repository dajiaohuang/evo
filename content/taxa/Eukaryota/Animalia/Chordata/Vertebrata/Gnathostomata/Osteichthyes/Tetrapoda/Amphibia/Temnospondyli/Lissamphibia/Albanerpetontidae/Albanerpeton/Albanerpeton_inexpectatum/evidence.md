---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Albanerpeton inexpectatum
    rank: species
    sourceTaxonId: txn:114402
    name:
      en: Albanerpeton inexpectatum
      zh: Albanerpeton inexpectatum
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
      - occurrenceId: occ:1008651
        collectionId: col:110928
        acceptedTaxonId: txn:114402
        identifiedName: Albanerpeton inexpectatum n. gen. n. sp.
        taxonomicDifference: null
        referenceId: ref:39272
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: FR
          stateProvince: Rhône-Alpes
          county: Isére
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 15.98
        youngerAgeMa: 11.1
      - occurrenceId: occ:1091851
        collectionId: col:34615
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:43888
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
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
      - occurrenceId: occ:1139817
        collectionId: col:84364
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:46985
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: DE
          stateProvince: Bavaria
          county: Bad Kissingen
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 27.3
        youngerAgeMa: 23.04
      - occurrenceId: occ:1144038
        collectionId: col:48173
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:52039
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: CZ
          stateProvince: Ústí nad Labem
          county: Chomutov
        stratigraphy:
          group: null
          formation: Most
          member: null
        olderAgeMa: 20.45
        youngerAgeMa: 15.98
      - occurrenceId: occ:1148300
        collectionId: col:32191
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:47304
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: FR
          stateProvince: Midi-Pyrenees
          county: Gers
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 15.98
        youngerAgeMa: 11.63
      - occurrenceId: occ:1217118
        collectionId: col:49418
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:52039
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
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
      - occurrenceId: occ:1217119
        collectionId: col:48321
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:52039
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
        locality:
          countryCode: DE
          stateProvince: Bayern
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 11.63
        youngerAgeMa: 7.246
      - occurrenceId: occ:1217120
        collectionId: col:48320
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:52039
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography
        locality:
          countryCode: DE
          stateProvince: Bayern
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 20.45
        youngerAgeMa: 13.82
      - occurrenceId: occ:1217122
        collectionId: col:74538
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:52039
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
        locality:
          countryCode: AT
          stateProvince: Styria
          county: Voitsberg
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 16.9
        youngerAgeMa: 15.98
      - occurrenceId: occ:1217123
        collectionId: col:74539
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:52039
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography
        locality:
          countryCode: AT
          stateProvince: Styria
          county: Voitsberg
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 16.9
        youngerAgeMa: 15.98
      - occurrenceId: occ:1217124
        collectionId: col:159022
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:52039
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography
        locality:
          countryCode: DE
          stateProvince: Bavaria
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 16.9
        youngerAgeMa: 15.98
      - occurrenceId: occ:1217125
        collectionId: col:28629
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:52039
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography
        locality:
          countryCode: DE
          stateProvince: Bavaria
          county: Eichstätt
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 16.9
        youngerAgeMa: 15.98
      - occurrenceId: occ:1217126
        collectionId: col:69179
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:52039
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography
        locality:
          countryCode: DE
          stateProvince: Baden-Württemberg
          county: Alb-Donau
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 20
        youngerAgeMa: 16.9
      - occurrenceId: occ:1217127
        collectionId: col:68040
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:52039
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/13/bibliography
        locality:
          countryCode: DE
          stateProvince: Bavaria
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 20
        youngerAgeMa: 16.9
      - occurrenceId: occ:1217130
        collectionId: col:45612
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:52039
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/14/bibliography
        locality:
          countryCode: DE
          stateProvince: Bayern
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 15.98
        youngerAgeMa: 13.82
      - occurrenceId: occ:1217131
        collectionId: col:45613
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:52039
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/15/bibliography
        locality:
          countryCode: DE
          stateProvince: Bayern
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 15.98
        youngerAgeMa: 13.82
      - occurrenceId: occ:1217132
        collectionId: col:66943
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:52039
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/16/bibliography
        locality:
          countryCode: AT
          stateProvince: Niederösterreich
          county: Mödling
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 11.1
        youngerAgeMa: 9.67
      - occurrenceId: occ:1217133
        collectionId: col:136199
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:52039
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/17/bibliography
        locality:
          countryCode: FR
          stateProvince: Rhône-Alpes
          county: Isére
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 12.75
        youngerAgeMa: 11.1
      - occurrenceId: occ:1432165
        collectionId: col:199780
        acceptedTaxonId: txn:114402
        identifiedName: Albanerpeton cf. inexpectatum
        taxonomicDifference: null
        referenceId: ref:67945
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/18/bibliography
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
      - occurrenceId: occ:1432169
        collectionId: col:199781
        acceptedTaxonId: txn:114402
        identifiedName: Albanerpeton cf. inexpectatum
        taxonomicDifference: null
        referenceId: ref:67945
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/19/bibliography
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
      - occurrenceId: occ:1432177
        collectionId: col:199782
        acceptedTaxonId: txn:114402
        identifiedName: Albanerpeton cf. inexpectatum
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
      - occurrenceId: occ:1555712
        collectionId: col:31605
        acceptedTaxonId: txn:114402
        identifiedName: Albanerpeton cf. inexpectatum
        taxonomicDifference: null
        referenceId: ref:76408
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/21/bibliography
        locality:
          countryCode: TR
          stateProvince: Tekirdağ
          county: null
        stratigraphy:
          group: null
          formation: Lignite-Sandstone
          member: null
        olderAgeMa: 33.9
        youngerAgeMa: 27.3
      - occurrenceId: occ:1566196
        collectionId: col:176199
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:77386
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/22/bibliography
        locality:
          countryCode: DE
          stateProvince: Bavaria
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 20
        youngerAgeMa: 15.98
      - occurrenceId: occ:1566197
        collectionId: col:174117
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:77386
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/23/bibliography
        locality:
          countryCode: DE
          stateProvince: Bavaria
          county: Eichstätt
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 16.9
        youngerAgeMa: 15.98
      - occurrenceId: occ:1566198
        collectionId: col:221169
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:77386
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/24/bibliography
        locality:
          countryCode: DE
          stateProvince: Bayern
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 33.9
        youngerAgeMa: 27.3
      - occurrenceId: occ:1566199
        collectionId: col:91490
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:77386
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/25/bibliography
        locality:
          countryCode: DE
          stateProvince: Bayern
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 33.9
        youngerAgeMa: 27.3
      - occurrenceId: occ:1614263
        collectionId: col:228327
        acceptedTaxonId: txn:114402
        taxonomicDifference: null
        referenceId: ref:83243
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/26/bibliography
        locality:
          countryCode: DE
          stateProvince: Hesse
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 20
        youngerAgeMa: 15.98
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Albanerpeton inexpectatum
      zh: Albanerpeton inexpectatum
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
        id: txn:114402
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00018.json.gz
          field: /records/367
          queryName: Albanerpeton inexpectatum
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 4
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Albanerpeton inexpectatum

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:114402; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
R. Estes and R. Hoffstetter. 1976. Les urodèles du Miocène de La Grive-Saint-Alban (Isère, France) [The urodeles from the Miocene of La Grive-Saint-Alban (Isère, France)]. Bulletin du Muséum National d’Histoire Naturelle, Sciences de la Terre 57:297-343
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
R. Estes and R. Hoffstetter. 1976. Les urodèles du Miocène de La Grive-Saint-Alban (Isère, France) [The urodeles from the Miocene of La Grive-Saint-Alban (Isère, France)]. Bulletin du Muséum National d’Histoire Naturelle, Sciences de la Terre 57:297-343
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
M. Böhme. 2010. Ectothermic vertebrates (Actinopterygii, Allocaudata, Urodela, Anura, Crocodylia, Squamata) from the Miocene of Sandelzhausen (Germany, Bavaria) and their implications for environment reconstruction and palaeoclimate. Paläontologische Zeitschrift 84(1):3-41
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
M. Böhme. 2008. Ectothermic vertebrates (Teleostei, Allocaudata, Urodela, Anura, Testudines, Choristodera, Crocodylia, Squamata) from the Upper Oligocene of Oberleichtersbach (Northern Bavaria, Germany). Courier Forschungsinstitut Senckenberg 260:161-183
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
J. D. Gardner and M. Böhme. 2008. Review of the Albanerpetontidae (Lissamphibia), with comments on the paleoecological preferences of European Tertiary albanerpetontids.  In J. T. Sankey & S. Baszio (ed.), Vertebrate Microfossil Assemblages: Their Role in Paleoecology and Paleobiogeography. Bloomington: Indiana University Press.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
J. C. Rage and S. Hossini. 2000. Les Amphibians du Miocene moyen de Sansan. Memoires du Museum national d'Histoire naturelle 183:177-217
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
J. D. Gardner and M. Böhme. 2008. Review of the Albanerpetontidae (Lissamphibia), with comments on the paleoecological preferences of European Tertiary albanerpetontids.  In J. T. Sankey & S. Baszio (ed.), Vertebrate Microfossil Assemblages: Their Role in Paleoecology and Paleobiogeography. Bloomington: Indiana University Press.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
J. D. Gardner and M. Böhme. 2008. Review of the Albanerpetontidae (Lissamphibia), with comments on the paleoecological preferences of European Tertiary albanerpetontids.  In J. T. Sankey & S. Baszio (ed.), Vertebrate Microfossil Assemblages: Their Role in Paleoecology and Paleobiogeography. Bloomington: Indiana University Press.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
J. D. Gardner and M. Böhme. 2008. Review of the Albanerpetontidae (Lissamphibia), with comments on the paleoecological preferences of European Tertiary albanerpetontids.  In J. T. Sankey & S. Baszio (ed.), Vertebrate Microfossil Assemblages: Their Role in Paleoecology and Paleobiogeography. Bloomington: Indiana University Press.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
J. D. Gardner and M. Böhme. 2008. Review of the Albanerpetontidae (Lissamphibia), with comments on the paleoecological preferences of European Tertiary albanerpetontids.  In J. T. Sankey & S. Baszio (ed.), Vertebrate Microfossil Assemblages: Their Role in Paleoecology and Paleobiogeography. Bloomington: Indiana University Press.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography -->
J. D. Gardner and M. Böhme. 2008. Review of the Albanerpetontidae (Lissamphibia), with comments on the paleoecological preferences of European Tertiary albanerpetontids.  In J. T. Sankey & S. Baszio (ed.), Vertebrate Microfossil Assemblages: Their Role in Paleoecology and Paleobiogeography. Bloomington: Indiana University Press.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography -->
J. D. Gardner and M. Böhme. 2008. Review of the Albanerpetontidae (Lissamphibia), with comments on the paleoecological preferences of European Tertiary albanerpetontids.  In J. T. Sankey & S. Baszio (ed.), Vertebrate Microfossil Assemblages: Their Role in Paleoecology and Paleobiogeography. Bloomington: Indiana University Press.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography -->
J. D. Gardner and M. Böhme. 2008. Review of the Albanerpetontidae (Lissamphibia), with comments on the paleoecological preferences of European Tertiary albanerpetontids.  In J. T. Sankey & S. Baszio (ed.), Vertebrate Microfossil Assemblages: Their Role in Paleoecology and Paleobiogeography. Bloomington: Indiana University Press.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography -->
J. D. Gardner and M. Böhme. 2008. Review of the Albanerpetontidae (Lissamphibia), with comments on the paleoecological preferences of European Tertiary albanerpetontids.  In J. T. Sankey & S. Baszio (ed.), Vertebrate Microfossil Assemblages: Their Role in Paleoecology and Paleobiogeography. Bloomington: Indiana University Press.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/13/bibliography -->
J. D. Gardner and M. Böhme. 2008. Review of the Albanerpetontidae (Lissamphibia), with comments on the paleoecological preferences of European Tertiary albanerpetontids.  In J. T. Sankey & S. Baszio (ed.), Vertebrate Microfossil Assemblages: Their Role in Paleoecology and Paleobiogeography. Bloomington: Indiana University Press.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/14/bibliography -->
J. D. Gardner and M. Böhme. 2008. Review of the Albanerpetontidae (Lissamphibia), with comments on the paleoecological preferences of European Tertiary albanerpetontids.  In J. T. Sankey & S. Baszio (ed.), Vertebrate Microfossil Assemblages: Their Role in Paleoecology and Paleobiogeography. Bloomington: Indiana University Press.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/15/bibliography -->
J. D. Gardner and M. Böhme. 2008. Review of the Albanerpetontidae (Lissamphibia), with comments on the paleoecological preferences of European Tertiary albanerpetontids.  In J. T. Sankey & S. Baszio (ed.), Vertebrate Microfossil Assemblages: Their Role in Paleoecology and Paleobiogeography. Bloomington: Indiana University Press.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/16/bibliography -->
J. D. Gardner and M. Böhme. 2008. Review of the Albanerpetontidae (Lissamphibia), with comments on the paleoecological preferences of European Tertiary albanerpetontids.  In J. T. Sankey & S. Baszio (ed.), Vertebrate Microfossil Assemblages: Their Role in Paleoecology and Paleobiogeography. Bloomington: Indiana University Press.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/17/bibliography -->
J. D. Gardner and M. Böhme. 2008. Review of the Albanerpetontidae (Lissamphibia), with comments on the paleoecological preferences of European Tertiary albanerpetontids.  In J. T. Sankey & S. Baszio (ed.), Vertebrate Microfossil Assemblages: Their Role in Paleoecology and Paleobiogeography. Bloomington: Indiana University Press.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/18/bibliography -->
D. Đurić. 2016. The Early Miocene herpetofauna (Amphibia and Squamata) from Sibnica, Serbia. Special Issue of the Natural History Museum in Belgrade: Life on the Shore - geological and palaeontological research in the Neogene of Sibnica and vicinity (Levač Basin, Central Serbia) Part 1
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/19/bibliography -->
D. Đurić. 2016. The Early Miocene herpetofauna (Amphibia and Squamata) from Sibnica, Serbia. Special Issue of the Natural History Museum in Belgrade: Life on the Shore - geological and palaeontological research in the Neogene of Sibnica and vicinity (Levač Basin, Central Serbia) Part 1
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/20/bibliography -->
D. Đurić. 2016. The Early Miocene herpetofauna (Amphibia and Squamata) from Sibnica, Serbia. Special Issue of the Natural History Museum in Belgrade: Life on the Shore - geological and palaeontological research in the Neogene of Sibnica and vicinity (Levač Basin, Central Serbia) Part 1
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/21/bibliography -->
G. L. Georgalis, A. Čerňanský, and S. Mayda. 2021. Late Paleogene herpetofaunas from the crossroads between two continents – new amphibian and reptile remains from the Oligocene of southern Balkans and Anatolia. Comptes Rendus Palevol 20(15):253-275
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/22/bibliography -->
J. D. Gardner, A. Villa, and S. Colombero, M. Venczel, M. Delfino. 2021. A Messinian (latest Miocene) occurrence for Albanerpeton Estes & Hoffstetter, 1976 (Lissamphibia: Albanerpetontidae) at Moncucco Torinese, Piedmont Basin, northwestern Italy, and a review of the European Cenozoic record for albanerpetontids. Geodiversitas 43(14):391-404
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/23/bibliography -->
J. D. Gardner, A. Villa, and S. Colombero, M. Venczel, M. Delfino. 2021. A Messinian (latest Miocene) occurrence for Albanerpeton Estes & Hoffstetter, 1976 (Lissamphibia: Albanerpetontidae) at Moncucco Torinese, Piedmont Basin, northwestern Italy, and a review of the European Cenozoic record for albanerpetontids. Geodiversitas 43(14):391-404
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/24/bibliography -->
J. D. Gardner, A. Villa, and S. Colombero, M. Venczel, M. Delfino. 2021. A Messinian (latest Miocene) occurrence for Albanerpeton Estes & Hoffstetter, 1976 (Lissamphibia: Albanerpetontidae) at Moncucco Torinese, Piedmont Basin, northwestern Italy, and a review of the European Cenozoic record for albanerpetontids. Geodiversitas 43(14):391-404
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/25/bibliography -->
J. D. Gardner, A. Villa, and S. Colombero, M. Venczel, M. Delfino. 2021. A Messinian (latest Miocene) occurrence for Albanerpeton Estes & Hoffstetter, 1976 (Lissamphibia: Albanerpetontidae) at Moncucco Torinese, Piedmont Basin, northwestern Italy, and a review of the European Cenozoic record for albanerpetontids. Geodiversitas 43(14):391-404
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/26/bibliography -->
D. Vasilyan, A. Čerňanský, and Z. Szyndlar, T. Mörs. 2022. Amphibian and reptilian fauna from the early Miocene of Echzell, Germany. Fossil Record 25(1):99-145
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed;
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对。
<!-- /evo:text -->
