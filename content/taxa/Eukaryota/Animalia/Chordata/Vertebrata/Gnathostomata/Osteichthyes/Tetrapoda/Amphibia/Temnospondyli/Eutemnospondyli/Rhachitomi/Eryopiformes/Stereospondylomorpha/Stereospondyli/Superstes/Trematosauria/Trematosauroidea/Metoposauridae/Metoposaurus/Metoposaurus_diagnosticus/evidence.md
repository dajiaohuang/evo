---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Metoposaurus diagnosticus
    rank: species
    sourceTaxonId: txn:157511
    name:
      en: Metoposaurus diagnosticus
      zh: Metoposaurus diagnosticus
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
      - occurrenceId: occ:486123
        collectionId: col:36106
        acceptedTaxonId: txn:157511
        identifiedName: Metoposaurus cf. diagnosticus
        taxonomicDifference: null
        referenceId: ref:12980
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: FR
          stateProvince: Lorraine
          county: Meuthe-et-Moselle
        stratigraphy:
          group: null
          formation: Grès à Avicula contorta
          member: null
        olderAgeMa: 205.7
        youngerAgeMa: 201.4
      - occurrenceId: occ:880951
        collectionId: col:97735
        acceptedTaxonId: txn:157511
        identifiedTaxonId: txn:170548
        identifiedName: Metoposaurus heimi
        taxonomicDifference: null
        referenceId: ref:31149
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: DE
          stateProvince: Bayern
          county: Bamberg
        stratigraphy:
          group: Keuper
          formation: Hassberge
          member: Blasensandstein
        olderAgeMa: 237
        youngerAgeMa: 227.3
      - occurrenceId: occ:881085
        collectionId: col:97736
        acceptedTaxonId: txn:157511
        identifiedTaxonId: txn:170548
        identifiedName: Metoposaurus heimi
        taxonomicDifference: null
        referenceId: ref:33402
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: DE
          stateProvince: Bayern
          county: Bamberg
        stratigraphy:
          group: Keuper
          formation: Hassberge
          member: Blasensandstein
        olderAgeMa: 237
        youngerAgeMa: 227.3
      - occurrenceId: occ:881089
        collectionId: col:97737
        acceptedTaxonId: txn:157511
        identifiedTaxonId: txn:170548
        identifiedName: Metoposaurus heimi n. sp.
        taxonomicDifference: null
        referenceId: ref:31149
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: DE
          stateProvince: Bayern
          county: Bamberg
        stratigraphy:
          group: Keuper
          formation: Hassberge
          member: Blasensandstein
        olderAgeMa: 237
        youngerAgeMa: 227.3
      - occurrenceId: occ:881093
        collectionId: col:97738
        acceptedTaxonId: txn:157511
        identifiedTaxonId: txn:170548
        identifiedName: Metoposaurus heimi
        taxonomicDifference: null
        referenceId: ref:33402
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: DE
          stateProvince: Bayern
          county: Bamberg
        stratigraphy:
          group: Keuper
          formation: Hassberge
          member: Blasensandstein
        olderAgeMa: 237
        youngerAgeMa: 227.3
      - occurrenceId: occ:930385
        collectionId: col:97870
        acceptedTaxonId: txn:157511
        identifiedTaxonId: var:157511
        identifiedName: Metopias diagnosticus n. gen. n. sp.
        taxonomicDifference: recombined as
        referenceId: ref:43878
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
        locality:
          countryCode: DE
          stateProvince: Baden-Württemberg
          county: Stuttgart
        stratigraphy:
          group: Keuper
          formation: Stuttgart
          member: Schilfsandstein
        olderAgeMa: 237
        youngerAgeMa: 227.3
      - occurrenceId: occ:930388
        collectionId: col:106459
        acceptedTaxonId: txn:157511
        taxonomicDifference: null
        referenceId: ref:28828
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
        locality:
          countryCode: DE
          stateProvince: Baden-Württemberg
          county: Heilbronn
        stratigraphy:
          group: Keuper
          formation: Stuttgart
          member: Schilfsandstein
        olderAgeMa: 237
        youngerAgeMa: 227.3
      - occurrenceId: occ:930395
        collectionId: col:106463
        acceptedTaxonId: txn:157511
        taxonomicDifference: null
        referenceId: ref:27868
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography
        locality:
          countryCode: DE
          stateProvince: Baden-Württemberg
          county: Heilbronn
        stratigraphy:
          group: Keuper
          formation: Weser
          member: Lehrberg Beds
        olderAgeMa: 237
        youngerAgeMa: 227.3
      - occurrenceId: occ:930826
        collectionId: col:106510
        acceptedTaxonId: txn:157511
        identifiedName: Metoposaurus aff. diagnosticus
        taxonomicDifference: null
        referenceId: ref:35598
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
        locality:
          countryCode: IT
          stateProvince: Bolzano
          county: null
        stratigraphy:
          group: null
          formation: Raibl
          member: null
        olderAgeMa: 237
        youngerAgeMa: 227.3
      - occurrenceId: occ:932452
        collectionId: col:106997
        acceptedTaxonId: txn:157511
        taxonomicDifference: null
        referenceId: ref:35596
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography
        locality:
          countryCode: DE
          stateProvince: Baden-Württemberg
          county: Rems-Murr-Kreis
        stratigraphy:
          group: Keuper
          formation: Weser
          member: Lehrberg Beds
        olderAgeMa: 237
        youngerAgeMa: 227.3
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Metoposaurus diagnosticus
      zh: Metoposaurus diagnosticus
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
        id: txn:157511
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00018.json.gz
          field: /records/145
          queryName: Metoposaurus diagnosticus
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 7
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Metoposaurus diagnosticus

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:157511; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
R. Owen. 1861. Palaeontology, or a Systematic Summary of Extinct Animals and their Geological Relations. Second Edition. Adam and Charles Black, Edinburgh
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
G. Cuny and G. Ramboer. 1991. Nouvelles donnees sur la faune et l'age de Saint Nicolas de Port [New data on the fauna and age of Saint Nicolas de Port]. Revue de Paléobiologie, Genève 10(1):69-78
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
O. Kuhn. 1932. Labyrinthodonten und Parasuchier aus dem mittleren Keuper von Ebrach in Oberfranken. Neues Jahrbuch für Mineralogie, Geologie und Paläontologie 69:94-144
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
O. Kuhn. 1936. Weitere Parasuchier und Labyrinthodonten aus dem Blasensandstein des mittleren Keuper von Ebrach [Further parasuchians and labyrinthodonts from the Blasensandstein of the middle Keuper of Ebrach]. Paläontographica Abteilung A 83:61-98
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
O. Kuhn. 1932. Labyrinthodonten und Parasuchier aus dem mittleren Keuper von Ebrach in Oberfranken. Neues Jahrbuch für Mineralogie, Geologie und Paläontologie 69:94-144
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
O. Kuhn. 1936. Weitere Parasuchier und Labyrinthodonten aus dem Blasensandstein des mittleren Keuper von Ebrach [Further parasuchians and labyrinthodonts from the Blasensandstein of the middle Keuper of Ebrach]. Paläontographica Abteilung A 83:61-98
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
E. Fraas. 1896. Die Schwäbischen Trias-Saurier nach dem Material der Kgl. Naturalien-Sammlung in Stuttgart zusammengestellt [Swabian Triassic dinosaurs based on the material in the Royal Natural History Collection compiled in Stuttgart]. Festgabe des Königlichen Naturalien-Cabinets In Stuttgart zur 42 Versammlung der Deutschen geologischen Gesellschaft in Stuttgart, August 1896. E. Schweizerbart'sche Verlag-handlung (E. Koch), Stuttgart
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
R. Schoch and A. R. Milner. 2000. Stereospondyli. Handbuch der Paläoherpetologie - Encyclopedia of Paleoherpetology 3B:1-203
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
T. Sulej. 2002. Species discrimination of the Late Triassic temnospondyl amphibian Metoposaurus diagnosticus. Acta Palaeontologica Polonica 47(3):535-546
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
P. Leonardi. 1952. Un osso nasale di Metoposaurus nei tufi a pachicardie dell' Alpe di Suisi (Dolomiti occidentali). Revista Italiana di Paleontologia 58:145-147
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography -->
A. R. Milner and R. R. Schoch. 2004. The latest metoposaurids from Europe. Neues Jahrbuch für Geologie und Paläontologie, Abhandlungen 232(2):231-252
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed;
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对。
<!-- /evo:text -->
