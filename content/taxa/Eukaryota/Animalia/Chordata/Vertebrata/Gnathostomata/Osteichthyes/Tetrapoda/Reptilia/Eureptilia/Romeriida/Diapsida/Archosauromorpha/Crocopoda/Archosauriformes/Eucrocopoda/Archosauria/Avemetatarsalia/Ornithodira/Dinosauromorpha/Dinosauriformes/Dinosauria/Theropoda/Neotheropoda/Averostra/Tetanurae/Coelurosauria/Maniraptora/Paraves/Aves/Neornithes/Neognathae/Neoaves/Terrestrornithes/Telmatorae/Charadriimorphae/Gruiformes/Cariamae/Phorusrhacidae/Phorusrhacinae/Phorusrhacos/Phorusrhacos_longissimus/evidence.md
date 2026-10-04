---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Phorusrhacos longissimus
    rank: species
    sourceDatasetId: null
    name:
      zh: Phorusrhacos longissimus
      en: Phorusrhacos longissimus
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Phorusrhacos longissimus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=53570&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: pbdbDinosaurOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:53570; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:53570
            selectedOccurrenceIds:
              - occ:810652
              - occ:810653
              - occ:810654
              - occ:810655
              - occ:810656
              - occ:810662
              - occ:810663
              - occ:810664
              - occ:810665
              - occ:810666
              - occ:1124775
              - occ:1124801
              - occ:1479020
              - occ:1479738
              - occ:1513886
              - occ:1513938
              - occ:1513979
              - occ:1514185
              - occ:1514298
              - occ:1599773
            selectedCollectionIds:
              - col:27313
              - col:66154
              - col:142529
              - col:142533
              - col:176571
              - col:176603
              - col:211270
              - col:176563
              - col:176594
              - col:176565
              - col:176566
              - col:197691
            sourceReferenceIds:
              - ref:29788
              - ref:46189
              - ref:70760
              - ref:70785
              - ref:72945
              - ref:72947
              - ref:35669
              - ref:72951
              - ref:81908
            originalIdentificationMappings:
              - occurrenceId: occ:810652
                originalIdentifiedName: Phororhacos longissimus
                acceptedName: Phorusrhacos longissimus
                difference: recombined as
              - occurrenceId: occ:810653
                originalIdentifiedName: Stereornis rollieri n. gen. n. sp.
                acceptedName: Phorusrhacos longissimus
                difference: null
              - occurrenceId: occ:810654
                originalIdentifiedName: Stereornis gaudryi n. sp.
                acceptedName: Phorusrhacos longissimus
                difference: null
              - occurrenceId: occ:810655
                originalIdentifiedName: Mesembriornis studeri n. sp.
                acceptedName: Phorusrhacos longissimus
                difference: null
              - occurrenceId: occ:810656
                originalIdentifiedName: Mesembriornis quatrefragesi n. sp.
                acceptedName: Phorusrhacos longissimus
                difference: null
              - occurrenceId: occ:810662
                originalIdentifiedName: Darwinornis copei n. gen. n. sp.
                acceptedName: Phorusrhacos longissimus
                difference: null
              - occurrenceId: occ:810663
                originalIdentifiedName: Darwinornis zitteli n. sp.
                acceptedName: Phorusrhacos longissimus
                difference: null
              - occurrenceId: occ:810664
                originalIdentifiedName: Darwinornis socialis n. sp.
                acceptedName: Phorusrhacos longissimus
                difference: null
              - occurrenceId: occ:810665
                originalIdentifiedName: Owenornis affinis n. gen. n. sp.
                acceptedName: Phorusrhacos longissimus
                difference: null
              - occurrenceId: occ:810666
                originalIdentifiedName: Owenornis lydekkeri n. sp.
                acceptedName: Phorusrhacos longissimus
                difference: null
              - occurrenceId: occ:1479738
                originalIdentifiedName: Phororhacos longissimus
                acceptedName: Phorusrhacos longissimus
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

# Phorusrhacos longissimus
