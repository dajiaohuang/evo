---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Metanoiamys agorus
    rank: species
    sourceDatasetId: null
    name:
      zh: Metanoiamys agorus
      en: Metanoiamys agorus
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
            title: PBDB accepted record — Metanoiamys agorus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=48449&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:48449; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:48449
            selectedOccurrenceIds:
              - occ:176004
              - occ:176133
              - occ:176135
              - occ:176138
              - occ:176140
              - occ:176143
              - occ:176549
              - occ:176573
              - occ:176582
              - occ:176602
              - occ:176606
              - occ:176610
              - occ:176622
              - occ:176637
              - occ:176683
              - occ:176686
              - occ:176698
              - occ:176714
              - occ:176731
              - occ:176740
              - occ:176744
              - occ:176752
              - occ:176764
              - occ:176770
              - occ:176783
              - occ:176803
              - occ:176848
              - occ:176852
              - occ:176855
              - occ:176859
              - occ:176865
              - occ:176897
              - occ:176907
              - occ:176916
              - occ:176923
              - occ:176939
              - occ:176959
              - occ:176974
              - occ:176992
              - occ:177020
              - occ:177043
              - occ:177048
              - occ:177050
              - occ:177053
              - occ:177058
              - occ:177060
              - occ:177074
            selectedCollectionIds:
              - col:16601
              - col:16616
              - col:16617
              - col:16618
              - col:16619
              - col:16620
              - col:16669
              - col:16674
              - col:16676
              - col:16677
              - col:16678
              - col:16680
              - col:16682
              - col:16684
              - col:16697
              - col:16700
              - col:16704
              - col:16705
              - col:16706
              - col:16707
              - col:16708
              - col:16709
              - col:16710
              - col:16711
              - col:16713
              - col:16715
              - col:16720
              - col:16723
              - col:16725
              - col:16727
              - col:16730
              - col:16737
              - col:16738
              - col:16740
              - col:16744
              - col:16745
              - col:16746
              - col:16747
              - col:16748
              - col:16751
              - col:16752
              - col:16755
              - col:16756
              - col:16757
              - col:16760
              - col:16761
              - col:16762
            sourceReferenceIds:
              - ref:6294
              - ref:1195
              - ref:3541
            originalIdentificationMappings:
              - occurrenceId: occ:176714
                originalIdentifiedName: Metanoiamys agorus n. sp.
                acceptedName: Metanoiamys agorus
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

# Metanoiamys agorus
