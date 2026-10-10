---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Microraptor
    rank: genus
    sourceDatasetId: null
    name:
      zh: Microraptor
      en: Microraptor
    checkedAt: 2026-10-03
    sections:
      - topic: readingPath
        sourceIds:
          - gong2012MicroraptorHanqingi
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: readingPath
        sourceIds:
          - hwang2002MicroraptorZhaoianus
          - dyke2013MicroraptorWindTunnel
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: overview
        sourceIds:
          - dyke2013MicroraptorWindTunnel
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: readingPath
        sourceIds:
          - dyke2013MicroraptorWindTunnel
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: readingPath
        sourceIds:
          - pbdbDinosaurOccurrences20261002
          - hwang2002MicroraptorZhaoianus
          - gong2012MicroraptorHanqingi
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: readingPath
        sourceIds:
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
    sources:
      referenceBindings:
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB classification — Microraptor
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=68238
            locator: Recorded PBDB parent closure beneath the already documented Dinosauria COL-compatible storage anchor.
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
            locator: 2026-10-02 recorded hierarchy and this batch’s selected member occurrence rows.
            accessedAt: 2026-10-02
            pbdbTaxonId: txn:68238
            readingTargets:
              - name: Microraptor zhaoianus
                pbdbTaxonId: txn:68239
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Deinonychosauria/Dromaeosauridae/Microraptorinae/Microraptor/Microraptor_zhaoianus
              - name: Microraptor gui
                pbdbTaxonId: txn:68246
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Deinonychosauria/Dromaeosauridae/Microraptorinae/Microraptor/Microraptor_gui
              - name: Microraptor hanqingi
                pbdbTaxonId: txn:245206
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Deinonychosauria/Dromaeosauridae/Microraptorinae/Microraptor/Microraptor_hanqingi
            scope:
              zh: 本批物种出现记录的阅读路径，不是整个类群的生态总结。
              en: Reading path through this batch’s species occurrence records, not a whole-group ecological summary.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
            - accessedAt
            - pbdbTaxonId
            - readingTargets
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
        - referenceId: dyke-2013-microraptor-wind-tunnel
          metadataVariant: 0
          sourceKey: dyke2013MicroraptorWindTunnel
          usage:
            title: Aerodynamic performance of the feathered dinosaur Microraptor and the evolution of feathered flight
            url: https://doi.org/10.1038/ncomms3489
            locator: "Complete nine-page primary article: Results, Discussion, Methods, Figures 1–8 captions; Figure 2 visually inspected; specimen/model distinction in Model making and Figure 5 caption."
            accessedAt: 2026-10-03
            scope:
              zh: 基于化石复原模型的 2013 年风洞实验与轨迹计算；模型混合具名物种正模和属级标本，不是活体行为或全部种的共同性能。
              en: 2013 wind-tunnel experiments and trajectory calculations on fossil-based reconstructions combining a named-species holotype and a genus-level specimen; not observed behavior or common performance of all species.
          originalFields:
            - id
            - title
            - url
            - locator
            - accessedAt
            - scope
        - referenceId: ref-5bb42319-57c5-4fbd-b5d7-dc457c3d47db
          metadataVariant: 0
          sourceKey: hwang2002MicroraptorZhaoianus
          usage:
            title: "New Specimens of Microraptor zhaoianus (Theropoda: Dromaeosauridae) from Northeastern China"
            url: https://doi.org/10.1206%2F0003-0082(2002)381%3C0001%3ANSOMZT%3E2.0.CO%3B2
            locator: "Complete main pp. 1–31: Introduction, Material, Description, Discussion, Phylogenetic Analysis, Conclusions; references pp. 32–33; Appendix 3. Figure 22 visually inspected. Image-only measurements and matrix appendices were not read row by row."
            accessedAt: 2026-10-03
            scope:
              zh: 两件 CAGS 标本的 2002 年骨骼重描述与作者比较分析，不是原标本复量、羽毛专论或活体运动观察。
              en: 2002 anatomical redescription of two CAGS specimens and the authors’ comparative analysis; not specimen remeasurement, a plumage monograph or observed locomotion.
          originalFields:
            - id
            - title
            - url
            - locator
            - accessedAt
            - scope
        - referenceId: ref-9bcd7263-8aaa-48da-8fbd-97576bee88e8
          metadataVariant: 0
          sourceKey: gong2012MicroraptorHanqingi
          usage:
            title: A new species of Microraptor from the Jehol Biota of northeastern China
            url: https://doi.org/10.1016/j.palwor.2012.05.003
            accessedAt: 2026-10-03
            locator: "Author-uploaded ResearchGate transcription: front matter; section 3 Materials and methods; section 4 Type paragraph. Selected passages only; complete anatomical account and images not read."
            scope:
              zh: 原始描述中已读取的正模保存与制备方法；不是完整论文、独立标本鉴定或种界裁决。
              en: Selected original-description passages on holotype preservation and preparation; not a complete paper, independent identification or species-boundary decision.
          originalFields:
            - id
            - title
            - doi
            - authors
            - publishedAt
            - url
            - accessedAt
            - locator
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Microraptor
