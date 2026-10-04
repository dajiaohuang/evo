---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Patriolestes novaceki
    rank: species
    sourceDatasetId: null
    name:
      zh: Patriolestes novaceki
      en: Patriolestes novaceki
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
            title: PBDB accepted record — Patriolestes novaceki
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=50037&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:50037; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:50037
            selectedOccurrenceIds:
              - occ:176127
              - occ:176507
              - occ:176521
              - occ:176536
              - occ:176592
              - occ:176677
              - occ:176703
              - occ:176721
              - occ:176755
              - occ:176777
              - occ:176790
              - occ:176800
              - occ:176808
              - occ:176821
              - occ:176832
              - occ:176847
              - occ:176849
              - occ:176850
              - occ:176851
              - occ:176853
              - occ:176854
              - occ:176858
              - occ:176862
              - occ:176866
              - occ:176883
              - occ:176890
              - occ:176901
              - occ:176910
              - occ:176915
              - occ:176919
              - occ:176921
              - occ:176922
              - occ:176929
              - occ:176945
              - occ:176965
              - occ:176979
              - occ:177009
              - occ:177027
              - occ:177046
              - occ:177047
              - occ:177049
              - occ:177052
              - occ:177055
              - occ:177056
              - occ:177057
              - occ:177059
            selectedCollectionIds:
              - col:16616
              - col:16665
              - col:16666
              - col:16667
              - col:16677
              - col:16697
              - col:16705
              - col:16706
              - col:16710
              - col:16713
              - col:16714
              - col:16715
              - col:16716
              - col:16718
              - col:16719
              - col:16720
              - col:16721
              - col:16722
              - col:16723
              - col:16724
              - col:16725
              - col:16727
              - col:16728
              - col:16731
              - col:16736
              - col:16737
              - col:16738
              - col:16739
              - col:16740
              - col:16741
              - col:16743
              - col:16744
              - col:16745
              - col:16746
              - col:16747
              - col:16748
              - col:16751
              - col:16752
              - col:16754
              - col:16755
              - col:16756
              - col:16757
              - col:16758
              - col:16759
              - col:16760
              - col:16761
            sourceReferenceIds:
              - ref:6294
              - ref:3542
            originalIdentificationMappings:
              - occurrenceId: occ:176858
                originalIdentifiedName: Patriolestes novaceki n. sp.
                acceptedName: Patriolestes novaceki
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

# Patriolestes novaceki
