---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Isodectes obtusus
    rank: species
    sourceTaxonId: txn:137370
    name:
      en: Isodectes obtusus
      zh: Isodectes obtusus
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
      - occurrenceId: occ:296061
        collectionId: col:28264
        acceptedTaxonId: txn:137370
        identifiedTaxonId: var:120982
        identifiedName: Pariotichus megalops n. sp.
        taxonomicDifference: null
        referenceId: ref:7693
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
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
      - occurrenceId: occ:788994
        collectionId: col:85292
        acceptedTaxonId: txn:137370
        identifiedTaxonId: txn:137427
        identifiedName: Sauropleura latithorax n. sp.
        taxonomicDifference: null
        referenceId: ref:28740
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: US
          stateProvince: Ohio
          county: Jefferson
        stratigraphy:
          group: Allegheny
          formation: null
          member: Upper Freeport Coal
        olderAgeMa: 309.8
        youngerAgeMa: 307.4
      - occurrenceId: occ:788995
        collectionId: col:85292
        acceptedTaxonId: txn:137370
        identifiedTaxonId: var:137370
        identifiedName: Dendrerpeton obtusum n. sp.
        taxonomicDifference: recombined as
        referenceId: ref:28717
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: US
          stateProvince: Ohio
          county: Jefferson
        stratigraphy:
          group: Allegheny
          formation: null
          member: Upper Freeport Coal
        olderAgeMa: 309.8
        youngerAgeMa: 307.4
      - occurrenceId: occ:843497
        collectionId: col:28256
        acceptedTaxonId: txn:137370
        identifiedTaxonId: txn:162311
        identifiedName: "? Acheloma casei n. sp."
        taxonomicDifference: null
        referenceId: ref:31846
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
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
      - occurrenceId: occ:1337581
        collectionId: col:85292
        acceptedTaxonId: txn:137370
        identifiedTaxonId: txn:192951
        identifiedName: Tuditanus tabulatus n. sp.
        taxonomicDifference: null
        referenceId: ref:28743
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: US
          stateProvince: Ohio
          county: Jefferson
        stratigraphy:
          group: Allegheny
          formation: null
          member: Upper Freeport Coal
        olderAgeMa: 309.8
        youngerAgeMa: 307.4
      - occurrenceId: occ:1337582
        collectionId: col:165526
        acceptedTaxonId: txn:137370
        identifiedTaxonId: txn:192953
        identifiedName: Tuditanus sculptilis n. sp.
        taxonomicDifference: null
        referenceId: ref:28743
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
        locality:
          countryCode: US
          stateProvince: Pennsylvania
          county: Beaver
        stratigraphy:
          group: Allegheny
          formation: Upper Kittanning Coal
          member: null
        olderAgeMa: 312.8
        youngerAgeMa: 306
      - occurrenceId: occ:1337583
        collectionId: col:165526
        acceptedTaxonId: txn:137370
        identifiedTaxonId: txn:192952
        identifiedName: Tuditanus minimus n. sp.
        taxonomicDifference: null
        referenceId: ref:28743
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
        locality:
          countryCode: US
          stateProvince: Pennsylvania
          county: Beaver
        stratigraphy:
          group: Allegheny
          formation: Upper Kittanning Coal
          member: null
        olderAgeMa: 312.8
        youngerAgeMa: 306
      - occurrenceId: occ:1337584
        collectionId: col:85292
        acceptedTaxonId: txn:137370
        identifiedTaxonId: txn:345382
        identifiedName: Colosteus foveatus n. sp.
        taxonomicDifference: null
        referenceId: ref:58984
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography
        locality:
          countryCode: US
          stateProvince: Ohio
          county: Jefferson
        stratigraphy:
          group: Allegheny
          formation: null
          member: Upper Freeport Coal
        olderAgeMa: 309.8
        youngerAgeMa: 307.4
      - occurrenceId: occ:1337585
        collectionId: col:176092
        acceptedTaxonId: txn:137370
        taxonomicDifference: null
        referenceId: ref:57803
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
        locality:
          countryCode: US
          stateProvince: Ohio
          county: Mahoning County
        stratigraphy:
          group: Allegheny
          formation: null
          member: null
        olderAgeMa: 312.8
        youngerAgeMa: 306
      - occurrenceId: occ:1337586
        collectionId: col:79598
        acceptedTaxonId: txn:137370
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography
        locality:
          countryCode: US
          stateProvince: Illinois
          county: Grundy/Will
        stratigraphy:
          group: null
          formation: Carbondale
          member: Francis Creek Shale
        olderAgeMa: 309.8
        youngerAgeMa: 307.4
      - occurrenceId: occ:1337587
        collectionId: col:28264
        acceptedTaxonId: txn:137370
        identifiedTaxonId: txn:345389
        identifiedName: Trimerorhachis conangulus n. sp.
        taxonomicDifference: null
        referenceId: ref:28358
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography
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
      - occurrenceId: occ:1337590
        collectionId: col:28256
        acceptedTaxonId: txn:137370
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography
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
      - occurrenceId: occ:1339841
        collectionId: col:126535
        acceptedTaxonId: txn:137370
        identifiedTaxonId: var:137431
        identifiedName: cf. Saurerpeton obtusum
        taxonomicDifference: recombined as
        referenceId: ref:60077
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography
        locality:
          countryCode: US
          stateProvince: Pennsylvania
          county: Allegheny
        stratigraphy:
          group: Conemaugh
          formation: null
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
      en: Isodectes obtusus
      zh: Isodectes obtusus
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
        id: txn:137370
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00017.json.gz
          field: /records/463
          queryName: Isodectes obtusus
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

# Isodectes obtusus

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:137370; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
E. D. Cope. 1868. Synopsis of the Extinct Batrachia of North America. Proceedings of the Academy of Natural Sciences of Philadelphia 1868:208-221
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
A. S. Romer. 1928. Vertebrate faunal horizons in the Texas Permo-Carboniferous red beds. University of Texas Bulletin 2801:67-108
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
E. D. Cope. 1897. On New Paleozoic Vertebrata from Illinois, Ohio and Pennsylvania. Proceedings of the American Philosophical Society 36:71-91
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
E. D. Cope. 1868. Synopsis of the Extinct Batrachia of North America. Proceedings of the Academy of Natural Sciences of Philadelphia 1868:208-221
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
F. Broili. 1913. Über zwei Stegocephalenreste aus dem texanischen Perm. Neues Jahrbuch für Mineralogie, Geologie und Paläontologie 1913(1):96-100
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
R. L. Moodie. 1909. A contribution to a monograph of the extinct Amphibia of North America. New forms from the Carboniferous. Journal of Geology 17(1):38-82
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
R. L. Moodie. 1909. A contribution to a monograph of the extinct Amphibia of North America. New forms from the Carboniferous. Journal of Geology 17(1):38-82
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
R. L. Moodie. 1909. A contribution to a monograph of the extinct Amphibia of North America. New forms from the Carboniferous. Journal of Geology 17(1):38-82
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
E. D. Cope. 1869. Synopsis of the Extinct Batrachia, Reptilia and Aves of North America. Part I. Transactions of the American Philosophical Society, New Series 14:1-104
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
R. W. Hook and D. Baird. 1994. A new fish and tetrapod assemblage from the Allegheny Group (late Westphalian, Upper Carboniferous) of eastern Ohio, USA.  In U. Heidtke (ed.), New Research on Permo-Carboniferous Faunas. Bad Durkheim: Pollichia.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography -->
R. R. Schoch and A. R. Milner. 2014. Handbook of Paleoherpetology Part 3A2 Temnospondyli I.. Munich: Verlag Dr Friedrich Pfeil.
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography -->
E. D. Cope. 1896. Second contribution to the history of the Cotylosauria. Proceedings of the American Philosophical Society 35(151):122-139
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography -->
R. R. Schoch and A. R. Milner. 2014. Handbook of Paleoherpetology Part 3A2 Temnospondyli I.. Munich: Verlag Dr Friedrich Pfeil.
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
