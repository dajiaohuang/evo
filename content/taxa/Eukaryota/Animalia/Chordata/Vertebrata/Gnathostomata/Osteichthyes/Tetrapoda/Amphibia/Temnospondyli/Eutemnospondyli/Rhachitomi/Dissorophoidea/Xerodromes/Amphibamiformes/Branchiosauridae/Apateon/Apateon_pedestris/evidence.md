---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Apateon pedestris
    rank: species
    sourceTaxonId: txn:229308
    name:
      en: Apateon pedestris
      zh: Apateon pedestris
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
    originalBibliography: H. Meyer. 1840. Phoca ambiguua, Munster. Beitrage zur Petrefacten-Kunde 3:1-11
    occurrenceEvidence:
      - occurrenceId: occ:297321
        collectionId: col:28463
        acceptedTaxonId: txn:229308
        identifiedTaxonId: var:358775
        identifiedName: cf. Branchiosaurus petrolei
        taxonomicDifference: null
        referenceId: ref:7845
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: IT
          stateProvince: Sardinia
          county: Ogliastra region
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 251.902
      - occurrenceId: occ:297323
        collectionId: col:28464
        acceptedTaxonId: txn:229308
        identifiedTaxonId: var:358775
        identifiedName: cf. Branchiosaurus petrolei
        taxonomicDifference: null
        referenceId: ref:7845
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: IT
          stateProvince: Sardinia
          county: Ogliastra region
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 251.902
      - occurrenceId: occ:297325
        collectionId: col:28465
        acceptedTaxonId: txn:229308
        identifiedTaxonId: var:358775
        identifiedName: cf. Branchiosaurus petrolei
        taxonomicDifference: null
        referenceId: ref:7845
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: IT
          stateProvince: Sardinia
          county: Ogliastra region
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 251.902
      - occurrenceId: occ:1338623
        collectionId: col:180798
        acceptedTaxonId: txn:229308
        identifiedName: Apateon pedestris n. gen. n. sp.
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: DE
          stateProvince: Rhineland-Palatine
          county: null
        stratigraphy:
          group: null
          formation: Meisenheim
          member: null
        olderAgeMa: 303.7
        youngerAgeMa: 293.52
      - occurrenceId: occ:1338624
        collectionId: col:180797
        acceptedTaxonId: txn:229308
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: DE
          stateProvince: Rhineland-Palatine
          county: null
        stratigraphy:
          group: null
          formation: Meisenheim
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 290.1
      - occurrenceId: occ:1338625
        collectionId: col:85451
        acceptedTaxonId: txn:229308
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
        locality:
          countryCode: DE
          stateProvince: Rhineland-Palatinate
          county: Kaiserslautern
        stratigraphy:
          group: Rotliegend
          formation: Meisenheim
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 293.52
      - occurrenceId: occ:1338626
        collectionId: col:178736
        acceptedTaxonId: txn:229308
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
        locality:
          countryCode: DE
          stateProvince: Rhineland-Palatine
          county: Bad Kreuznach
        stratigraphy:
          group: Rotliegend
          formation: Meisenheim
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 283.3
      - occurrenceId: occ:1338627
        collectionId: col:180796
        acceptedTaxonId: txn:229308
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography
        locality:
          countryCode: DE
          stateProvince: Rhineland-Palatinate
          county: Kusel district
        stratigraphy:
          group: null
          formation: Meisenheim
          member: M7
        olderAgeMa: 298.9
        youngerAgeMa: 293.52
      - occurrenceId: occ:1338628
        collectionId: col:180800
        acceptedTaxonId: txn:229308
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
        locality:
          countryCode: DE
          stateProvince: Rhineland-Palatine
          county: Bad Kreuznach
        stratigraphy:
          group: null
          formation: Meisenheim
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 290.1
      - occurrenceId: occ:1338629
        collectionId: col:176500
        acceptedTaxonId: txn:229308
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography
        locality:
          countryCode: FR
          stateProvince: Saone et Loire
          county: null
        stratigraphy:
          group: null
          formation: Millery Series
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 283.3
      - occurrenceId: occ:1338630
        collectionId: col:180801
        acceptedTaxonId: txn:229308
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography
        locality:
          countryCode: FR
          stateProvince: Burgundy
          county: Saône-et-Loire
        stratigraphy:
          group: null
          formation: Autun
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 283.3
      - occurrenceId: occ:1338631
        collectionId: col:180802
        acceptedTaxonId: txn:229308
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography
        locality:
          countryCode: DE
          stateProvince: Rhineland-Palatine
          county: Bad Kreuznach
        stratigraphy:
          group: null
          formation: Meisenheim
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 293.52
      - occurrenceId: occ:1338632
        collectionId: col:180803
        acceptedTaxonId: txn:229308
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography
        locality:
          countryCode: DE
          stateProvince: Rhineland-Palatinate
          county: Kusel
        stratigraphy:
          group: null
          formation: Quirnbach
          member: null
        olderAgeMa: 300.3
        youngerAgeMa: 297.7
      - occurrenceId: occ:1338633
        collectionId: col:180804
        acceptedTaxonId: txn:229308
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/13/bibliography
        locality:
          countryCode: DE
          stateProvince: Rhineland-Palatine
          county: Kusel
        stratigraphy:
          group: null
          formation: Meisenheim
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 293.52
      - occurrenceId: occ:1338634
        collectionId: col:180805
        acceptedTaxonId: txn:229308
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/14/bibliography
        locality:
          countryCode: DE
          stateProvince: Rhineland-Palatine
          county: null
        stratigraphy:
          group: null
          formation: Meisenheim
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 293.52
      - occurrenceId: occ:1338768
        collectionId: col:180806
        acceptedTaxonId: txn:229308
        taxonomicDifference: null
        referenceId: ref:28828
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/15/bibliography
        locality:
          countryCode: DE
          stateProvince: Rhineland-Palatine
          county: null
        stratigraphy:
          group: null
          formation: Meisenheim
          member: null
        olderAgeMa: 298.9
        youngerAgeMa: 290.1
      - occurrenceId: occ:1670655
        collectionId: col:236920
        acceptedTaxonId: txn:229308
        identifiedTaxonId: var:358775
        identifiedName: Branchiosaurus petrolei
        taxonomicDifference: null
        referenceId: ref:89767
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/16/bibliography
        locality:
          countryCode: FR
          stateProvince: Saône-et-Loire
          county: null
        stratigraphy:
          group: null
          formation: Great Seams
          member: null
        olderAgeMa: 307.4
        youngerAgeMa: 300.3
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Apateon pedestris
      zh: Apateon pedestris
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
        id: txn:229308
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00018.json.gz
          field: /records/7
          queryName: Apateon pedestris
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

# Apateon pedestris

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:229308; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
A. Ronchi and A. Tintori. 1997. First amphibian find in Early Permian from Sardinia (Italy). Rivista Italiana di Paleontologia e Stratigrafia 103(1):29-38
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
A. Ronchi and A. Tintori. 1997. First amphibian find in Early Permian from Sardinia (Italy). Rivista Italiana di Paleontologia e Stratigrafia 103(1):29-38
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
A. Ronchi and A. Tintori. 1997. First amphibian find in Early Permian from Sardinia (Italy). Rivista Italiana di Paleontologia e Stratigrafia 103(1):29-38
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
R. R. Schoch and A. R. Milner. 2014. Handbook of Paleoherpetology Part 3A2 Temnospondyli I.. Munich: Verlag Dr Friedrich Pfeil.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
R. R. Schoch and A. R. Milner. 2014. Handbook of Paleoherpetology Part 3A2 Temnospondyli I.. Munich: Verlag Dr Friedrich Pfeil.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
R. R. Schoch and A. R. Milner. 2014. Handbook of Paleoherpetology Part 3A2 Temnospondyli I.. Munich: Verlag Dr Friedrich Pfeil.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
R. R. Schoch and A. R. Milner. 2014. Handbook of Paleoherpetology Part 3A2 Temnospondyli I.. Munich: Verlag Dr Friedrich Pfeil.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
R. R. Schoch and A. R. Milner. 2014. Handbook of Paleoherpetology Part 3A2 Temnospondyli I.. Munich: Verlag Dr Friedrich Pfeil.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
R. R. Schoch and A. R. Milner. 2014. Handbook of Paleoherpetology Part 3A2 Temnospondyli I.. Munich: Verlag Dr Friedrich Pfeil.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography -->
R. R. Schoch and A. R. Milner. 2014. Handbook of Paleoherpetology Part 3A2 Temnospondyli I.. Munich: Verlag Dr Friedrich Pfeil.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography -->
R. R. Schoch and A. R. Milner. 2014. Handbook of Paleoherpetology Part 3A2 Temnospondyli I.. Munich: Verlag Dr Friedrich Pfeil.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography -->
R. R. Schoch and A. R. Milner. 2014. Handbook of Paleoherpetology Part 3A2 Temnospondyli I.. Munich: Verlag Dr Friedrich Pfeil.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography -->
R. R. Schoch and A. R. Milner. 2014. Handbook of Paleoherpetology Part 3A2 Temnospondyli I.. Munich: Verlag Dr Friedrich Pfeil.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/13/bibliography -->
R. R. Schoch and A. R. Milner. 2014. Handbook of Paleoherpetology Part 3A2 Temnospondyli I.. Munich: Verlag Dr Friedrich Pfeil.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/14/bibliography -->
R. R. Schoch and A. R. Milner. 2014. Handbook of Paleoherpetology Part 3A2 Temnospondyli I.. Munich: Verlag Dr Friedrich Pfeil.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/15/bibliography -->
R. Schoch and A. R. Milner. 2000. Stereospondyli. Handbuch der Paläoherpetologie - Encyclopedia of Paleoherpetology 3B:1-203
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/16/bibliography -->
V. Perrier and S. Charbonnier. 2014. The Montceau-les-Mines Lagerstätte (Late Carboniferous, France). Comptes Rendus Palevol 13(5):353-367
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed;
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对。
<!-- /evo:text -->
