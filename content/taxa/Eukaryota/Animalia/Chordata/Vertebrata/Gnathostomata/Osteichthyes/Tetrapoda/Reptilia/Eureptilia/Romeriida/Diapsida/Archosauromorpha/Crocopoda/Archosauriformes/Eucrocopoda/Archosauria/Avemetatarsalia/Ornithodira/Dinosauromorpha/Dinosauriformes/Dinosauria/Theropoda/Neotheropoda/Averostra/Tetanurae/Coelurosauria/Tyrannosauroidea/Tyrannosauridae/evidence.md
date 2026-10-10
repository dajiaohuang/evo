---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Tyrannosauridae
    commonName: Tyrannosaurs
    commonNameZh: 暴龙类
    rank: family
    taxonId: txn:38606
    firstAppearance: 83
    lastAppearance: 66
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Tyrannosauridae
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      referenceLinks:
        - referenceId: brusatte-2010-tyrannosaur-paleobiology
          relation: supports
          pages: 1481–1485
          figure: Figures 1–3
          quoteLocator: Phylogeny and anatomy synthesis; growth and biomechanics; concluding limitations
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Tyrannosauridae
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      referenceLinks:
        - relation: supports
          referenceId: brusatte-2010-tyrannosaur-paleobiology
          pages: 1481–1485
          figure: Figures 1–3
          quoteLocator: Phylogeny and anatomy synthesis; growth and biomechanics; concluding limitations
        - relation: contextualizes
          referenceId: ics-2026-06
          pages: International Chronostratigraphic Chart v2026/06
          figure: Global chronostratigraphic scale
          quoteLocator: Numerical boundaries for named geological stages used to bound the source sample
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Tyrannosauridae
      rangeKind: global-composite
      taxonomicConcept: Tyrannosauridae — source-bounded sample window
      geographicScope: Late Cretaceous tyrannosaurid sample synthesized by Brusatte et al.
      olderMa: 84
      youngerMa: 66
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Tyrannosauridae/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: brusatte-2010-tyrannosaur-paleobiology
          locator: 1481–1485; Phylogeny and anatomy synthesis; growth and biomechanics; concluding limitations
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      evidenceLevel: literature-synthesized
  catalogue-profile:
    scientificName: Tyrannosauridae
    rank: family
    sourceDatasetId: null
    name:
      zh: Tyrannosauridae
      en: Tyrannosauridae
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
      - topic: readingPath
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
    sources:
      referenceBindings:
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB classification — Tyrannosauridae
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=38606
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
            pbdbTaxonId: txn:38606
            readingTargets:
              - name: Nanuqsaurus hoglundi
                pbdbTaxonId: txn:289802
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Tyrannosauridae/Tyrannosaurinae/Nanuqsaurus/Nanuqsaurus_hoglundi
              - name: Thanatotheristes degrootorum
                pbdbTaxonId: txn:424538
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Tyrannosauridae/Tyrannosaurinae/Daspletosaurini/Thanatotheristes/Thanatotheristes_degrootorum
              - name: Daspletosaurus horneri
                pbdbTaxonId: txn:351539
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Tyrannosauridae/Tyrannosaurinae/Daspletosaurini/Daspletosaurus/Daspletosaurus_horneri
              - name: Daspletosaurus wilsoni
                pbdbTaxonId: txn:468710
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Tyrannosauridae/Tyrannosaurinae/Daspletosaurini/Daspletosaurus/Daspletosaurus_wilsoni
              - name: Daspletosaurus torosus
                pbdbTaxonId: txn:57258
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Tyrannosauridae/Tyrannosaurinae/Daspletosaurini/Daspletosaurus/Daspletosaurus_torosus
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
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Tyrannosauridae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Tyrannosauridae is represented by a systematic synthesis of its sampled anatomy, growth and biomechanics; family-wide patterns are review-bounded and do not turn Tyrannosaurus into a proxy for every member or set exact range endpoints.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The review integrates several independent specimen studies, while behavior and lineage-wide generalization remain inferential. Medium confidence preserves heterogeneity.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Tyrannosauridae is displayed at 84–66 Ma only as the review-bounded sampled family record, not exact global origination or extinction. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Tyrannosauridae uses Brusatte, S.L.; Norell, M.A.; Carr, T.D.; Erickson, G.M.; Hutchinson, J.R.; Balanoff, A.M.; Bever, G.S.; Choiniere, J.N.; Makovicky, P.J.; Xu, X. (2010) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Late Cretaceous tyrannosaurid sample synthesized by Brusatte et al.; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
综述整合多项独立标本研究，而行为及全支系概括仍属推断；中等置信度保留异质性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Tyrannosauridae 采用 Brusatte, S.L.; Norell, M.A.; Carr, T.D.; Erickson, G.M.; Hutchinson, J.R.; Balanoff, A.M.; Bever, G.S.; Choiniere, J.N.; Makovicky, P.J.; Xu, X.（2010）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Late Cretaceous tyrannosaurid sample synthesized by Brusatte et al.；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
暴龙科由对取样解剖、生长和生物力学的系统综合表示；科级格局受综述范围限制，不把霸王龙当作每个成员的替身，也不设定精确范围端点。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Tyrannosauridae 仅以 84–66 Ma 展示为综述限定的科级采样记录，而非精确全球起源或灭绝。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the review-bounded sampled family record, not exact global origination or extinction; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Tyrannosaur Paleobiology: New Research on Ancient Exemplar Organisms directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
