---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Mahavisaurus dentatus
    rank: species
    sourceTaxonId: txn:251514
    name:
      en: Mahavisaurus dentatus
      zh: Mahavisaurus dentatus
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
    originalBibliography: J.-P. Lehman. 1966. Nouveaux Stégocéphales de Madagascar. Annales de Paléontologie (Vertébrés) 52:117-139
    occurrenceEvidence:
      - occurrenceId: occ:1132147
        collectionId: col:144083
        acceptedTaxonId: txn:251514
        identifiedName: Mahavisaurus dentatus n. gen. n. sp.
        taxonomicDifference: null
        referenceId: ref:46587
        bibliography: J.-P. Lehman. 1966. Nouveaux Stégocéphales de Madagascar. Annales de Paléontologie (Vertébrés) 52:117-139
        locality:
          countryCode: MG
          stateProvince: Diana
          county: Ambilobe
        stratigraphy:
          group: Sakamena
          formation: Middle Sakamena
          member: null
        olderAgeMa: 251.902
        youngerAgeMa: 248.6
      - occurrenceId: occ:1132148
        collectionId: col:144086
        acceptedTaxonId: txn:251514
        identifiedTaxonId: txn:251515
        identifiedName: Lyrosaurus australis n. gen. n. sp.
        taxonomicDifference: null
        referenceId: ref:46587
        bibliography: J.-P. Lehman. 1966. Nouveaux Stégocéphales de Madagascar. Annales de Paléontologie (Vertébrés) 52:117-139
        locality:
          countryCode: MG
          stateProvince: Diana
          county: Ambilobe
        stratigraphy:
          group: null
          formation: Middle Sakamena
          member: null
        olderAgeMa: 251.902
        youngerAgeMa: 248.6
      - occurrenceId: occ:1418697
        collectionId: col:144081
        acceptedTaxonId: txn:251514
        identifiedTaxonId: txn:251515
        identifiedName: Lyrosaurus australis
        taxonomicDifference: null
        referenceId: ref:66848
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: MG
          stateProvince: Diana
          county: Ambilobe
        stratigraphy:
          group: Sakamena
          formation: Middle Sakamena
          member: null
        olderAgeMa: 251.902
        youngerAgeMa: 248.6
      - occurrenceId: occ:1418698
        collectionId: col:144094
        acceptedTaxonId: txn:251514
        identifiedTaxonId: txn:251515
        identifiedName: Lyrosaurus australis
        taxonomicDifference: null
        referenceId: ref:66848
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: MG
          stateProvince: Diana
          county: Ambilobe
        stratigraphy:
          group: Sakamena
          formation: Middle Sakamena
          member: null
        olderAgeMa: 251.902
        youngerAgeMa: 248.6
      - occurrenceId: occ:1418699
        collectionId: col:119513
        acceptedTaxonId: txn:251514
        taxonomicDifference: null
        referenceId: ref:66848
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: MG
          stateProvince: null
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 250.8
        youngerAgeMa: 248.6
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Mahavisaurus dentatus
      zh: Mahavisaurus dentatus
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
        id: txn:251514
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00018.json.gz
          field: /records/307
          queryName: Mahavisaurus dentatus
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

# Mahavisaurus dentatus

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:251514; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
S. Maganuco, G. Pasini, and M. Auditore. 2014. A revision of the short-faced stereospondyls Mahavisaurus dentatus and Lyrosaurus australisfrom the Lower Triassic of Madagascar: cranial anatomy, ontogenetic remarks, palaeoecology and rhytidosteid phylogeny. Memorie della Società Italiana di Scienze Naturali e del Museo Civico di Storia Naturale di Milano 39:1-64
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
S. Maganuco, G. Pasini, and M. Auditore. 2014. A revision of the short-faced stereospondyls Mahavisaurus dentatus and Lyrosaurus australisfrom the Lower Triassic of Madagascar: cranial anatomy, ontogenetic remarks, palaeoecology and rhytidosteid phylogeny. Memorie della Società Italiana di Scienze Naturali e del Museo Civico di Storia Naturale di Milano 39:1-64
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
S. Maganuco, G. Pasini, and M. Auditore. 2014. A revision of the short-faced stereospondyls Mahavisaurus dentatus and Lyrosaurus australisfrom the Lower Triassic of Madagascar: cranial anatomy, ontogenetic remarks, palaeoecology and rhytidosteid phylogeny. Memorie della Società Italiana di Scienze Naturali e del Museo Civico di Storia Naturale di Milano 39:1-64
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed;
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对。
<!-- /evo:text -->
