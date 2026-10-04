---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Cladosictis patagonica
    rank: species
    sourceDatasetId: null
    name:
      zh: Cladosictis patagonica
      en: Cladosictis patagonica
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
            title: PBDB accepted record — Cladosictis patagonica
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=53477&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:53477; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:53477
            selectedOccurrenceIds:
              - occ:1106022
              - occ:1124776
              - occ:1315971
              - occ:1315972
              - occ:1315973
              - occ:1315974
              - occ:1315975
              - occ:1315976
              - occ:1315977
              - occ:1315978
              - occ:1315979
              - occ:1315980
              - occ:1315981
              - occ:1315982
              - occ:1315983
              - occ:1315984
              - occ:1315985
              - occ:1315986
              - occ:1315987
              - occ:1315988
              - occ:1315989
              - occ:1316293
              - occ:1316310
              - occ:1316900
              - occ:1316901
              - occ:1316902
              - occ:1316903
              - occ:1316976
              - occ:1316977
              - occ:1316978
              - occ:1316979
              - occ:1316980
              - occ:1316981
              - occ:1316982
              - occ:1316983
              - occ:1316984
              - occ:1316985
              - occ:1506184
              - occ:1512688
              - occ:1595538
            selectedCollectionIds:
              - col:139845
              - col:142529
              - col:142533
              - col:27313
              - col:176576
              - col:176635
              - col:176602
              - col:176578
              - col:176636
              - col:176599
              - col:176563
              - col:176570
              - col:176565
              - col:176594
              - col:176593
              - col:176590
              - col:176567
              - col:176596
              - col:176598
              - col:176569
              - col:176572
              - col:176581
              - col:176584
              - col:176585
              - col:176575
              - col:210153
              - col:210638
              - col:198569
            sourceReferenceIds:
              - ref:44988
              - ref:46189
              - ref:58306
              - ref:58202
              - ref:58227
              - ref:72465
              - ref:72910
              - ref:81713
            originalIdentificationMappings:
              - occurrenceId: occ:1315979
                originalIdentifiedName: Agustylus primaevus n. sp.
                acceptedName: Cladosictis patagonica
                difference: null
              - occurrenceId: occ:1315983
                originalIdentifiedName: Cladosictis patagonica n. gen. n. sp.
                acceptedName: Cladosictis patagonica
                difference: null
              - occurrenceId: occ:1315986
                originalIdentifiedName: Proviverra trouessarti n. sp.
                acceptedName: Cladosictis patagonica
                difference: null
              - occurrenceId: occ:1316901
                originalIdentifiedName: Cladosictis petersoni n. sp.
                acceptedName: Cladosictis patagonica
                difference: null
              - occurrenceId: occ:1316902
                originalIdentifiedName: Cladosictis dissimilis n. sp.
                acceptedName: Cladosictis patagonica
                difference: null
              - occurrenceId: occ:1316903
                originalIdentifiedName: Hathliacynus fischeri n. sp.
                acceptedName: Cladosictis patagonica
                difference: null
              - occurrenceId: occ:1316976
                originalIdentifiedName: Agustylus cynoides n. sp.
                acceptedName: Cladosictis patagonica
                difference: null
              - occurrenceId: occ:1316977
                originalIdentifiedName: Cladosictis lateralis n. sp.
                acceptedName: Cladosictis patagonica
                difference: null
              - occurrenceId: occ:1316978
                originalIdentifiedName: Agustylus minus n. sp.
                acceptedName: Cladosictis patagonica
                difference: null
              - occurrenceId: occ:1316979
                originalIdentifiedName: Ictioborus fenestratus n. sp.
                acceptedName: Cladosictis patagonica
                difference: null
              - occurrenceId: occ:1316980
                originalIdentifiedName: Protoproviverra ensidens n. sp.
                acceptedName: Cladosictis patagonica
                difference: null
              - occurrenceId: occ:1316982
                originalIdentifiedName: Hathliacynus cultridens n. sp.
                acceptedName: Cladosictis patagonica
                difference: null
              - occurrenceId: occ:1316983
                originalIdentifiedName: Hathliacynus lustratus n. sp.
                acceptedName: Cladosictis patagonica
                difference: null
              - occurrenceId: occ:1316984
                originalIdentifiedName: Hathliacynus rollieri n. sp.
                acceptedName: Cladosictis patagonica
                difference: null
              - occurrenceId: occ:1316985
                originalIdentifiedName: Amphithereutes obscurus n. sp.
                acceptedName: Cladosictis patagonica
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

# Cladosictis patagonica
