---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Andrias scheuchzeri
    rank: species
    sourceTaxonId: txn:64153
    name:
      en: Andrias scheuchzeri
      zh: Andrias scheuchzeri
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
      - occurrenceId: occ:472476
        collectionId: col:46955
        acceptedTaxonId: txn:64153
        taxonomicDifference: null
        referenceId: ref:12472
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: DE
          stateProvince: null
          county: null
        stratigraphy:
          group: null
          formation: Ville
          member: Frimmersdorf
        olderAgeMa: 15.98
        youngerAgeMa: 13.82
      - occurrenceId: occ:650520
        collectionId: col:49102
        acceptedTaxonId: txn:64153
        taxonomicDifference: null
        referenceId: ref:23602
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: DE
          stateProvince: Baden-Württemberg
          county: City of Ulm
        stratigraphy:
          group: Molasse
          formation: Brackwater Molasse
          member: Grimmelfinger Schichten
        olderAgeMa: 20.45
        youngerAgeMa: 15.98
      - occurrenceId: occ:650591
        collectionId: col:70332
        acceptedTaxonId: txn:64153
        taxonomicDifference: null
        referenceId: ref:23602
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
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
      - occurrenceId: occ:650601
        collectionId: col:70337
        acceptedTaxonId: txn:64153
        taxonomicDifference: null
        referenceId: ref:23602
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
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
      - occurrenceId: occ:650608
        collectionId: col:70338
        acceptedTaxonId: txn:64153
        taxonomicDifference: null
        referenceId: ref:23602
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
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
      - occurrenceId: occ:650732
        collectionId: col:69098
        acceptedTaxonId: txn:64153
        taxonomicDifference: null
        referenceId: ref:23602
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography
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
      - occurrenceId: occ:1139818
        collectionId: col:84364
        acceptedTaxonId: txn:64153
        taxonomicDifference: null
        referenceId: ref:46985
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
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
      - occurrenceId: occ:1468595
        collectionId: col:84606
        acceptedTaxonId: txn:64153
        taxonomicDifference: null
        referenceId: ref:70399
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography
        locality:
          countryCode: DE
          stateProvince: North Rhine-Westfalia
          county: Rhein-Sieg
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 27.3
        youngerAgeMa: 23.04
      - occurrenceId: occ:1481997
        collectionId: col:206345
        acceptedTaxonId: txn:64153
        taxonomicDifference: null
        referenceId: ref:70899
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
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
      - occurrenceId: occ:1627940
        collectionId: col:48446
        acceptedTaxonId: txn:64153
        taxonomicDifference: null
        referenceId: ref:85134
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography
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
      - occurrenceId: occ:1651513
        collectionId: col:59664
        acceptedTaxonId: txn:64153
        taxonomicDifference: null
        referenceId: ref:88173
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography
        locality:
          countryCode: HU
          stateProvince: Pecs Megyei Varos
          county: null
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 12.8
        youngerAgeMa: 11.63
      - occurrenceId: occ:1674749
        collectionId: col:237418
        acceptedTaxonId: txn:64153
        identifiedName: Andrias cf. scheuchzeri
        taxonomicDifference: null
        referenceId: ref:90036
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography
        locality:
          countryCode: HU
          stateProvince: null
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
      en: Andrias scheuchzeri
      zh: Andrias scheuchzeri
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
        id: txn:64153
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00019.json.gz
          field: /records/111
          queryName: Andrias scheuchzeri
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 6
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Andrias scheuchzeri

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:64153; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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
T. Mors, F. Hocht, and B. Wutzler. 2000. Die erst Wirbeltierfauna aus der miozanen Braunkohle der Niederrheinischen Bucht (Ville-Schichten, Tagebau Hambach) [The first vertebrate fauna from the Miocene Ville Series of the Lower Rhine Embayment (Hambach open cast mine, western Germany)]. Paläontologische Zeitschrift 74(1/2):145-170
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
T. Mors, F. Hocht, and B. Wutzler. 2000. Die erst Wirbeltierfauna aus der miozanen Braunkohle der Niederrheinischen Bucht (Ville-Schichten, Tagebau Hambach) [The first vertebrate fauna from the Miocene Ville Series of the Lower Rhine Embayment (Hambach open cast mine, western Germany)]. Paläontologische Zeitschrift 74(1/2):145-170
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
V. J. Sach and E. P. J. Heizmann. 2001. Stratigraphy and mammal faunas of the Brackwassermolasse in the surroundings of Ulm (Southwest Germany). Stuttgarter Beiträge zur Naturkunde Serie B (Geologie und Paläontologie) 310:1-95
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
V. J. Sach and E. P. J. Heizmann. 2001. Stratigraphy and mammal faunas of the Brackwassermolasse in the surroundings of Ulm (Southwest Germany). Stuttgarter Beiträge zur Naturkunde Serie B (Geologie und Paläontologie) 310:1-95
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
V. J. Sach and E. P. J. Heizmann. 2001. Stratigraphy and mammal faunas of the Brackwassermolasse in the surroundings of Ulm (Southwest Germany). Stuttgarter Beiträge zur Naturkunde Serie B (Geologie und Paläontologie) 310:1-95
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
V. J. Sach and E. P. J. Heizmann. 2001. Stratigraphy and mammal faunas of the Brackwassermolasse in the surroundings of Ulm (Southwest Germany). Stuttgarter Beiträge zur Naturkunde Serie B (Geologie und Paläontologie) 310:1-95
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/5/bibliography -->
V. J. Sach and E. P. J. Heizmann. 2001. Stratigraphy and mammal faunas of the Brackwassermolasse in the surroundings of Ulm (Southwest Germany). Stuttgarter Beiträge zur Naturkunde Serie B (Geologie und Paläontologie) 310:1-95
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
M. Böhme. 2008. Ectothermic vertebrates (Teleostei, Allocaudata, Urodela, Anura, Testudines, Choristodera, Crocodylia, Squamata) from the Upper Oligocene of Oberleichtersbach (Northern Bavaria, Germany). Courier Forschungsinstitut Senckenberg 260:161-183
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
T. Mors. 2002. Biostratigraphy and paleoecology of continental Tertiary vertebrate faunas in the Lower Rhine Embayment (NW-Germany). Netherlands Journal of Geosciences 81(2):177-183
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
M. Bohme, N. Spassov, and J. Fuss, A. Troscher, A. S. Deane, J. Prieto, T. Lechner, D. R. Begun. 2019. A new Miocene ape and locomotion in the ancestor of great apes and humans. Nature
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography -->
V. A. Codrea, M. Bordeianu, and M. Venczel. 2022. Amphibians and squamate reptiles from the late Miocene of Fălciu (Eastern Romania). Palaeontologica Electronica 25(2):a19
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/10/bibliography -->
Z. Szentesi, K. Sebe, and M. Szabó. 2020. Giant salamander from the Miocene of the Mecsek mountains (Pécs‑Danitzpuszta, southwestern Hungary). PalZ 94:353-366
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography -->
K. Sebe, M. Szabó, and Z. Szentesi, L. Pandolfi, N. Jankó, I. Magyar. 2024. Fossils from the Upper Miocene (Pannonian) sands of the Pécsvárad sand pit (Eastern Mecsek Mts., SW Hungary). Geoloski Anali Balkanskoga Poluostrva 85(1):49-71\
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed; no external expert review is claimed.
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对；没有外部专家审评。
<!-- /evo:text -->
