---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Subhyracodon mitis
    rank: species
    sourceDatasetId: null
    name:
      zh: Subhyracodon mitis
      en: Subhyracodon mitis
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
            title: PBDB accepted record — Subhyracodon mitis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=43702&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:43702; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:43702
            selectedOccurrenceIds:
              - occ:177842
              - occ:178273
              - occ:178970
              - occ:179941
              - occ:179979
              - occ:1220363
              - occ:1220364
              - occ:1220365
              - occ:1220366
              - occ:1220367
              - occ:1280897
              - occ:1487218
            selectedCollectionIds:
              - col:16885
              - col:16938
              - col:17006
              - col:17141
              - col:17153
              - col:16977
              - col:16986
              - col:16942
              - col:17025
              - col:17010
              - col:101961
              - col:206997
            sourceReferenceIds:
              - ref:1235
              - ref:6294
              - ref:2711
              - ref:17555
              - ref:51726
              - ref:55503
              - ref:71195
            originalIdentificationMappings:
              - occurrenceId: occ:177842
                originalIdentifiedName: Caenopus mitis
                acceptedName: Subhyracodon mitis
                difference: recombined as
              - occurrenceId: occ:178273
                originalIdentifiedName: Caenopus mitis
                acceptedName: Subhyracodon mitis
                difference: recombined as
              - occurrenceId: occ:178970
                originalIdentifiedName: Caenopus mitis
                acceptedName: Subhyracodon mitis
                difference: recombined as
              - occurrenceId: occ:179979
                originalIdentifiedName: Aceratherium mite
                acceptedName: Subhyracodon mitis
                difference: recombined as
              - occurrenceId: occ:1220363
                originalIdentifiedName: Aceratherium mite n. sp.
                acceptedName: Subhyracodon mitis
                difference: recombined as
              - occurrenceId: occ:1280897
                originalIdentifiedName: Caenopus pumilus
                acceptedName: Subhyracodon mitis
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

# Subhyracodon mitis
