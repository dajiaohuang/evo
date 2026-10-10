---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Paratomarctus temerarius
    rank: species
    sourceDatasetId: null
    name:
      zh: Paratomarctus temerarius
      en: Paratomarctus temerarius
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
            title: PBDB accepted record — Paratomarctus temerarius
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=44882&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:44882; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:44882
            selectedOccurrenceIds:
              - occ:184789
              - occ:184863
              - occ:184873
              - occ:184968
              - occ:185070
              - occ:185098
              - occ:185182
              - occ:185259
              - occ:185368
              - occ:186089
              - occ:186131
              - occ:186175
              - occ:186209
              - occ:186250
              - occ:186302
              - occ:187141
              - occ:187227
              - occ:188415
              - occ:188495
              - occ:188617
              - occ:189205
              - occ:189660
              - occ:190441
              - occ:190725
              - occ:191021
              - occ:191330
              - occ:191403
              - occ:191688
              - occ:191691
              - occ:191703
              - occ:191929
              - occ:191964
              - occ:191979
              - occ:192067
              - occ:192097
              - occ:192365
              - occ:192371
              - occ:192386
              - occ:192461
              - occ:192574
              - occ:192630
              - occ:192680
              - occ:1386620
              - occ:1520957
              - occ:1531887
            selectedCollectionIds:
              - col:18109
              - col:18123
              - col:18124
              - col:18131
              - col:18144
              - col:18155
              - col:18164
              - col:18172
              - col:18192
              - col:18261
              - col:18265
              - col:18272
              - col:18275
              - col:18281
              - col:18284
              - col:18424
              - col:18442
              - col:18627
              - col:18642
              - col:18665
              - col:18803
              - col:18894
              - col:19056
              - col:19088
              - col:19157
              - col:19274
              - col:19287
              - col:19362
              - col:19364
              - col:19366
              - col:19422
              - col:19432
              - col:19435
              - col:19457
              - col:19463
              - col:19519
              - col:19520
              - col:19522
              - col:19535
              - col:19548
              - col:19556
              - col:19568
              - col:190543
              - col:212623
              - col:214888
            sourceReferenceIds:
              - ref:3558
              - ref:6294
              - ref:3510
              - ref:3342
              - ref:2560
              - ref:59118
              - ref:73434
              - ref:74134
            originalIdentificationMappings:
              - occurrenceId: occ:186302
                originalIdentifiedName: Tomarctus temerarius
                acceptedName: Paratomarctus temerarius
                difference: recombined as
              - occurrenceId: occ:189205
                originalIdentifiedName: Tomarctus temerarius
                acceptedName: Paratomarctus temerarius
                difference: recombined as
              - occurrenceId: occ:191021
                originalIdentifiedName: Tephrocyon temerarius
                acceptedName: Paratomarctus temerarius
                difference: recombined as
              - occurrenceId: occ:1386620
                originalIdentifiedName: Canis temerarius n. sp.
                acceptedName: Paratomarctus temerarius
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

# Paratomarctus temerarius
