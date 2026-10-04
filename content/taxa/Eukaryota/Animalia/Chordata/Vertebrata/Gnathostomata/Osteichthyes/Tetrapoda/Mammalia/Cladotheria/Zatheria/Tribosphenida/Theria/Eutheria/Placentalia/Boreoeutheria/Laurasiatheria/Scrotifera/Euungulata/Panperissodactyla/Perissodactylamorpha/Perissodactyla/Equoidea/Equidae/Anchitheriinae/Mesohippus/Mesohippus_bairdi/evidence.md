---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Mesohippus bairdi
    rank: species
    sourceDatasetId: null
    name:
      zh: Mesohippus bairdi
      en: Mesohippus bairdi
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
            title: PBDB accepted record — Mesohippus bairdi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=49712&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:49712; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:49712
            selectedOccurrenceIds:
              - occ:177838
              - occ:177948
              - occ:177991
              - occ:178119
              - occ:178128
              - occ:178268
              - occ:178730
              - occ:178959
              - occ:179356
              - occ:179383
              - occ:179621
              - occ:179652
              - occ:179686
              - occ:179698
              - occ:179797
              - occ:179807
              - occ:179839
              - occ:179848
              - occ:179895
              - occ:179981
              - occ:180004
              - occ:180030
              - occ:180046
              - occ:180059
              - occ:180088
              - occ:180112
              - occ:180140
              - occ:180567
              - occ:1267813
              - occ:1640009
            selectedCollectionIds:
              - col:16885
              - col:16915
              - col:16918
              - col:16924
              - col:16925
              - col:16938
              - col:16977
              - col:17006
              - col:17055
              - col:17062
              - col:17094
              - col:17098
              - col:17101
              - col:17102
              - col:17109
              - col:17111
              - col:17115
              - col:17116
              - col:17133
              - col:17153
              - col:17154
              - col:17162
              - col:17164
              - col:17165
              - col:17173
              - col:17174
              - col:17180
              - col:17296
              - col:17088
            sourceReferenceIds:
              - ref:1235
              - ref:6294
              - ref:1757
              - ref:1570
              - ref:3318
              - ref:1328
              - ref:1923
              - ref:6205
              - ref:3359
              - ref:3163
              - ref:3041
              - ref:3170
              - ref:2711
              - ref:1498
              - ref:55149
            originalIdentificationMappings:
              - occurrenceId: occ:177838
                originalIdentifiedName: Mesohippus viejensis
                acceptedName: Mesohippus bairdi
                difference: null
              - occurrenceId: occ:178730
                originalIdentifiedName: Mesohippus proteulophus
                acceptedName: Mesohippus bairdi
                difference: null
              - occurrenceId: occ:179621
                originalIdentifiedName: Mesohippus bairdii
                acceptedName: Mesohippus bairdi
                difference: recombined as
              - occurrenceId: occ:179839
                originalIdentifiedName: Miohippus bairdii
                acceptedName: Mesohippus bairdi
                difference: recombined as
              - occurrenceId: occ:179895
                originalIdentifiedName: Mesohippus bairdii
                acceptedName: Mesohippus bairdi
                difference: recombined as
              - occurrenceId: occ:180567
                originalIdentifiedName: Mesohippus bairdii
                acceptedName: Mesohippus bairdi
                difference: recombined as
              - occurrenceId: occ:1267813
                originalIdentifiedName: Mesohippus bairdii
                acceptedName: Mesohippus bairdi
                difference: recombined as
              - occurrenceId: occ:1640009
                originalIdentifiedName: Mesohippus hypostylus
                acceptedName: Mesohippus bairdi
                difference: null
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

# Mesohippus bairdi
