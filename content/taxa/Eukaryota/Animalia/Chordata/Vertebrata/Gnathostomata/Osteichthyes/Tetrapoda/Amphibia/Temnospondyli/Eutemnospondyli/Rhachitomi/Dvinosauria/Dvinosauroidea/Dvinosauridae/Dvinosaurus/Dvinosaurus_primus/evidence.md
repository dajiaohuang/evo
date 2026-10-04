---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Dvinosaurus primus
    rank: species
    sourceTaxonId: txn:56905
    name:
      en: Dvinosaurus primus
      zh: Dvinosaurus primus
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
      - occurrenceId: occ:388988
        collectionId: col:37202
        acceptedTaxonId: txn:56905
        taxonomicDifference: null
        referenceId: ref:9972
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: RU
          stateProvince: Archangel'sk
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 259.857
        youngerAgeMa: 256.8
      - occurrenceId: occ:388989
        collectionId: col:37202
        acceptedTaxonId: txn:56905
        identifiedTaxonId: txn:56904
        identifiedName: Dvinosaurus secundus
        taxonomicDifference: null
        referenceId: ref:9972
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: RU
          stateProvince: Archangel'sk
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 259.857
        youngerAgeMa: 256.8
      - occurrenceId: occ:388990
        collectionId: col:37202
        acceptedTaxonId: txn:56905
        identifiedTaxonId: txn:56906
        identifiedName: Dvinosaurus tertius
        taxonomicDifference: null
        referenceId: ref:9972
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: RU
          stateProvince: Archangel'sk
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 259.857
        youngerAgeMa: 256.8
      - occurrenceId: occ:1163741
        collectionId: col:80712
        acceptedTaxonId: txn:56905
        taxonomicDifference: null
        referenceId: ref:47937
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: RU
          stateProvince: Tatarstan
          county: Tetyushi
        stratigraphy:
          group: null
          formation: Ilyinskoe
          member: null
        olderAgeMa: 264.28
        youngerAgeMa: 259.857
      - occurrenceId: occ:1382082
        collectionId: col:93030
        acceptedTaxonId: txn:56905
        taxonomicDifference: null
        referenceId: ref:46409
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: RU
          stateProvince: Orenburg
          county: Sorochinsk
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 264.28
        youngerAgeMa: 256.8
      - occurrenceId: occ:1382089
        collectionId: col:187939
        acceptedTaxonId: txn:56905
        taxonomicDifference: null
        referenceId: ref:46409
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
        locality:
          countryCode: RU
          stateProvince: Vologda
          county: Velikoustyugskii
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 264.28
        youngerAgeMa: 256.8
      - occurrenceId: occ:1382095
        collectionId: col:93025
        acceptedTaxonId: txn:56905
        taxonomicDifference: null
        referenceId: ref:46409
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
        locality:
          countryCode: RU
          stateProvince: Vologda
          county: Velikii Ustyug
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 264.28
        youngerAgeMa: 256.8
      - occurrenceId: occ:1383090
        collectionId: col:28065
        acceptedTaxonId: txn:56905
        identifiedName: Dvinosaurus primus n. gen. n. sp.
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography
        locality:
          countryCode: RU
          stateProvince: Arkhangelsk
          county: Kotlas
        stratigraphy:
          group: null
          formation: Salarevo
          member: null
        olderAgeMa: 264.28
        youngerAgeMa: 256.8
      - occurrenceId: occ:1383091
        collectionId: col:28065
        acceptedTaxonId: txn:56905
        identifiedTaxonId: txn:56904
        identifiedName: Dvinosaurus secundus n. sp.
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
        locality:
          countryCode: RU
          stateProvince: Arkhangelsk
          county: Kotlas
        stratigraphy:
          group: null
          formation: Salarevo
          member: null
        olderAgeMa: 264.28
        youngerAgeMa: 256.8
      - occurrenceId: occ:1383092
        collectionId: col:28065
        acceptedTaxonId: txn:56905
        identifiedTaxonId: txn:56906
        identifiedName: Dvinosaurus tertius n. sp.
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography
        locality:
          countryCode: RU
          stateProvince: Arkhangelsk
          county: Kotlas
        stratigraphy:
          group: null
          formation: Salarevo
          member: null
        olderAgeMa: 264.28
        youngerAgeMa: 256.8
      - occurrenceId: occ:1383093
        collectionId: col:27952
        acceptedTaxonId: txn:56905
        taxonomicDifference: null
        referenceId: ref:57795
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography
        locality:
          countryCode: RU
          stateProvince: Arkhangelsk
          county: Kotlas
        stratigraphy:
          group: null
          formation: Salarevo
          member: null
        olderAgeMa: 264.28
        youngerAgeMa: 256.8
      - occurrenceId: occ:1417386
        collectionId: col:189501
        acceptedTaxonId: txn:56905
        taxonomicDifference: null
        referenceId: ref:14547
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography
        locality:
          countryCode: RU
          stateProvince: Orenburg
          county: Grachevskii
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 264.28
        youngerAgeMa: 259.857
      - occurrenceId: occ:1646274
        collectionId: col:104754
        acceptedTaxonId: txn:56905
        identifiedName: Dvinosaurus aff. primus
        taxonomicDifference: null
        referenceId: ref:87479
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography
        locality:
          countryCode: RU
          stateProvince: Vologda
          county: null
        stratigraphy:
          group: null
          formation: Poldarsa
          member: Kichuga
        olderAgeMa: 259.857
        youngerAgeMa: 254.14
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Dvinosaurus primus
      zh: Dvinosaurus primus
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
        id: txn:56905
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00017.json.gz
          field: /records/453
          queryName: Dvinosaurus primus
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

# Dvinosaurus primus

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:56905; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
P. P. Sushkin. 1936. Notes on the pre-Jurassic tetrapods from USSR. III. Dvinosaurus amalitzki, a perennibranchiate stegocephalian from the Upper Permian of North Dvina. Akademiya Nauk SSSR, Trudy Paleozoologicheskogo Instituta 5:43-91
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
P. P. Sushkin. 1936. Notes on the pre-Jurassic tetrapods from USSR. III. Dvinosaurus amalitzki, a perennibranchiate stegocephalian from the Upper Permian of North Dvina. Akademiya Nauk SSSR, Trudy Paleozoologicheskogo Instituta 5:43-91
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
P. P. Sushkin. 1936. Notes on the pre-Jurassic tetrapods from USSR. III. Dvinosaurus amalitzki, a perennibranchiate stegocephalian from the Upper Permian of North Dvina. Akademiya Nauk SSSR, Trudy Paleozoologicheskogo Instituta 5:43-91
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
P. P. Sushkin. 1936. Notes on the pre-Jurassic tetrapods from USSR. III. Dvinosaurus amalitzki, a perennibranchiate stegocephalian from the Upper Permian of North Dvina. Akademiya Nauk SSSR, Trudy Paleozoologicheskogo Instituta 5:43-91
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
A. G. Sennikov. 1997. [An enigmatic reptile from the Upper Permian of the Volga River Basin]. Paleontologicheskii Zhurnal 1997(1):95-103
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
M. F. Ivakhnenko. 2011. Permian and Triassic therocephals (Eutherapsida) of Eastern Europe. Paleontological Journal 45(9):981-1144
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
M. F. Ivakhnenko. 2011. Permian and Triassic therocephals (Eutherapsida) of Eastern Europe. Paleontological Journal 45(9):981-1144
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
M. F. Ivakhnenko. 2011. Permian and Triassic therocephals (Eutherapsida) of Eastern Europe. Paleontological Journal 45(9):981-1144
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
V. P. Tverdokhlebov, G. I. Tverdokhlebova, and A. V. Minikh, M. V. Surkov, M. J. Benton. 2005. Upper Permian vertebrates and their sedimentological context in the South Urals, Russia. Earth-Science Reviews 69:27-77
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/12/bibliography -->
M.P. Arefiev, V.K. Golubev, and YP Balabanov, EV Karasev, AV Minikh, MG Minikh, II Molostovskaya, OP Yaroshenko, MA Zhokina-Naumcheva. 2015. Type and reference sections of the Permian–Triassic continental sequences of the East European Platform: main isotope, magnetic, and biotic events. XVIII International Congress on the Carboniferous and Permian Sukhona and Severnaya Dvina Rivers field trip
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed; no external expert review is claimed.
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对；没有外部专家审评。
<!-- /evo:text -->
