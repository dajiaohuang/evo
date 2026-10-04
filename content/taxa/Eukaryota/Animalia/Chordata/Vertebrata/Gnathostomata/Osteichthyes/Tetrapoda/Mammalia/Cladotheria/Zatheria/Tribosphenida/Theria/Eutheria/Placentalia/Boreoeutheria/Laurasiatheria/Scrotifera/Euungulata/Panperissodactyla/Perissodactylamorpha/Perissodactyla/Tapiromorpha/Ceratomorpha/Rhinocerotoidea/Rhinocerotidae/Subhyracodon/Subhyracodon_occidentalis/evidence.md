---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Subhyracodon occidentalis
    rank: species
    sourceDatasetId: null
    name:
      zh: Subhyracodon occidentalis
      en: Subhyracodon occidentalis
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbMammaliaTaxonomy20261002
          - pbdbMammaliaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: occurrences
        sourceIds:
          - pbdbMammaliaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: timeline
        sourceIds:
          - pbdbMammaliaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: evidence
        sourceIds:
          - pbdbMammaliaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: sources
        sourceIds:
          - pbdbMammaliaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaTaxonomy20261002
          usage:
            title: PBDB accepted record — Subhyracodon occidentalis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=51353&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:51353; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:51353
            selectedOccurrenceIds:
              - occ:178971
              - occ:179397
              - occ:179416
              - occ:179468
              - occ:179511
              - occ:179581
              - occ:179679
              - occ:179847
              - occ:179851
              - occ:179893
              - occ:179951
              - occ:179980
              - occ:180561
              - occ:1211453
              - occ:1220362
              - occ:1280896
              - occ:1654767
              - occ:1654768
              - occ:1654769
            selectedCollectionIds:
              - col:17006
              - col:17064
              - col:17072
              - col:17081
              - col:17082
              - col:17090
              - col:17101
              - col:17116
              - col:17117
              - col:17133
              - col:17142
              - col:17153
              - col:17295
              - col:16919
              - col:17125
              - col:101961
              - col:17120
              - col:99845
            sourceReferenceIds:
              - ref:1235
              - ref:1803
              - ref:2404
              - ref:1570
              - ref:51726
              - ref:1923
              - ref:3041
              - ref:3040
              - ref:3170
              - ref:6294
              - ref:2711
              - ref:50051
              - ref:55503
              - ref:3176
            originalIdentificationMappings:
              - occurrenceId: occ:178971
                originalIdentifiedName: Aceratherium trigonodum n. sp.
                acceptedName: Subhyracodon occidentalis
                difference: null
              - occurrenceId: occ:179893
                originalIdentifiedName: Caenopus occidentalis
                acceptedName: Subhyracodon occidentalis
                difference: recombined as
              - occurrenceId: occ:179980
                originalIdentifiedName: Aceratherium occidentale
                acceptedName: Subhyracodon occidentalis
                difference: recombined as
              - occurrenceId: occ:180561
                originalIdentifiedName: Aceratherium occidentale
                acceptedName: Subhyracodon occidentalis
                difference: recombined as
              - occurrenceId: occ:1211453
                originalIdentifiedName: Aceratherium exiguum n. sp.
                acceptedName: Subhyracodon occidentalis
                difference: null
              - occurrenceId: occ:1280896
                originalIdentifiedName: Caenopus occidentalis
                acceptedName: Subhyracodon occidentalis
                difference: recombined as
            scope:
              zh: 所选有引文、年代和地点的无疑问限定种级记录；不是全种生态或形态综合。
              en: Selected cited species-level records without uncertain qualifiers, with ages and locality context; not whole-species ecology or morphology.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
            - accessedAt
            - responseSha256
            - pbdbTaxonId
            - selectedOccurrenceIds
            - selectedCollectionIds
            - sourceReferenceIds
            - originalIdentificationMappings
            - scope
        - referenceId: ref-c4887d31-ff09-4384-b816-a87cb63d0c54
          metadataVariant: 0
          sourceKey: pbdbOccurrenceFields20261002
          usage:
            locator: "occs/list_doc.html: accepted_no/name; identified_name/modifiers; max_ma/min_ma; collection fields; env, strat and ctaph output blocks; taxa/list_doc.html: parent and app fields."
            accessedAt: 2026-10-02
            scope:
              zh: 解释数据库出现、采集、年代与层位字段，不替代原论文或标本复核。
              en: Interpret database occurrence, collection, age and strata fields; not a substitute for original papers or specimen review.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
            - accessedAt
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Subhyracodon occidentalis
