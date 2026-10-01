---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:54833
    scientificName: Tyrannosaurus rex
    commonName: Tyrannosaurus rex
    commonNameZh: 霸王龙
    rank: species
    parentName: Tyrannosauridae
    extinct: true
    geography:
      - Western North America
      - Hell Creek, Lance and age-equivalent latest Maastrichtian formations
    overview:
      markdown: page.en.md
      field: /records/atlas-profile/overview
    ecology:
      diet:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/diet
      habitat:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/habitat
      locomotion:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/locomotion
      bodySize:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/bodySize
      guild:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/guild
    traits:
      - markdown: page.en.md
        field: /records/atlas-profile/traits/0
      - markdown: page.en.md
        field: /records/atlas-profile/traits/1
      - markdown: page.en.md
        field: /records/atlas-profile/traits/2
    evidenceSummary:
      markdown: page.en.md
      field: /records/atlas-profile/evidenceSummary
    confidence: medium
    referenceIds:
      - horner-2011-hell-creek-dinosaur-census
      - carr-2020-tyrannosaurus-growth-series
      - gignac-2017-tyrannosaurus-osteophagy
      - loewen-2013-tyrannosaur-biogeography
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Tyrannosauridae/Tyrannosaurinae/Tyrannosaurini/Tyrannosaurus/Tyrannosaurus_rex/research/Tyrannosaurus_rex
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/0/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: horner-2011-hell-creek-dinosaur-census
          relation: supports
          quoteLocator: Figure 1; Tables 1 and S1–S6; locality census
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Tyrannosauridae/Tyrannosaurinae/Tyrannosaurini/Tyrannosaurus/Tyrannosaurus_rex/research/Tyrannosaurus_rex
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Horner et al. 2011 DOI 10.1371/journal.pone.0016574
      referenceLinks:
        - referenceId: horner-2011-hell-creek-dinosaur-census
          relation: supports
          figure: Figure 1
          quoteLocator: Locality and stratigraphic census
        - referenceId: loewen-2013-tyrannosaur-biogeography
          relation: contextualizes
          figure: Figures 1–8
          quoteLocator: Event-based biogeographic analyses
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Tyrannosauridae/Tyrannosaurinae/Tyrannosaurini/Tyrannosaurus/Tyrannosaurus_rex/research/Tyrannosaurus_rex
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Carr 2020 DOI 10.7717/peerj.9192
      referenceLinks:
        - referenceId: carr-2020-tyrannosaurus-growth-series
          relation: supports
          figure: Figure 2
          quoteLocator: "Abstract; Methods: specimen sample and cladistic analysis; Results: ontogram and growth categories; Tables 1–4"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Tyrannosauridae/Tyrannosaurinae/Tyrannosaurini/Tyrannosaurus/Tyrannosaurus_rex/research/Tyrannosaurus_rex
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Horner et al. 2011 DOI 10.1371/journal.pone.0016574
      referenceLinks:
        - referenceId: gignac-2017-tyrannosaurus-osteophagy
          relation: supports
          figure: Figures 1–4
          quoteLocator: Gignac 2017 Figures 1–4; Results; supplementary measurements
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Tyrannosauridae/Tyrannosaurinae/Tyrannosaurini/Tyrannosaurus/Tyrannosaurus_rex/research/Tyrannosaurus_rex
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Carr 2020 DOI 10.7717/peerj.9192
      referenceLinks:
        - referenceId: carr-2020-tyrannosaurus-growth-series
          relation: supports
          figure: Figures 2 and 6–10
          quoteLocator: "Abstract; Methods: specimen sample; Results: ontogram and growth categories; character dataset and specimen catalogue"
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
    - markdown: evidence.md
      field: /records/claim-rationales.zh/2
    - markdown: evidence.md
      field: /records/claim-rationales.zh/3
    - markdown: evidence.md
      field: /records/claim-rationales.zh/4
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
    - markdown: evidence.md
      field: /records/claim-statements.zh/2
    - markdown: evidence.md
      field: /records/claim-statements.zh/3
    - markdown: evidence.md
      field: /records/claim-statements.zh/4
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Tyrannosauridae/Tyrannosaurinae/Tyrannosaurini/Tyrannosaurus/Tyrannosaurus_rex/research/Tyrannosaurus_rex
      rangeKind: global-composite
      taxonomicConcept: Tyrannosaurus rex and referred latest Maastrichtian material
      geographicScope: Western North America; Hell Creek, Lance and approximately coeval strata
      olderMa: 68
      youngerMa: 66
      status: available
      uncertainty:
        olderMa: 68.2
        youngerMa: 66.043
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Tyrannosauridae/Tyrannosaurinae/Tyrannosaurini/Tyrannosaurus/Tyrannosaurus_rex/research/Tyrannosaurus_rex/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: horner-2011-hell-creek-dinosaur-census
          locator: Figure 1; Tables 1 and S1–S6; locality census
        - referenceId: renne-2013-kpg-timescale
          locator: 684–687; Figures 1–3; 40Ar/39Ar boundary age
      reviewStatus: automated-audit-passed
---

# Tyrannosaurus rex

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Measured Hell Creek occurrences place Tyrannosaurus in latest Maastrichtian strata up to the K–Pg boundary; the 68–66 Ma atlas envelope is rounded and does not claim a global genus origination at 68 Ma.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Specimen positions within the Hell Creek section and the independently dated boundary are direct, but formation-wide sampling cannot guarantee the genus FAD; medium confidence marks the rounded envelope.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/0/reviewedAgainstReferenceVersion -->
Gignac and Erickson 2017 DOI 10.1038/s41598-017-02161-w; current supporting reference reconciled by automated source audit 2026-09-22, superseding the stale Horner 2011 marker
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Tyrannosaurus specimens are documented in western North American latest Maastrichtian formations; broader dispersal routes inferred for tyrannosaurids remain model-dependent and are not treated as direct Tyrannosaurus movements.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Localities directly support western North American occurrence, whereas ancestral-area reconstruction depends on topology and area coding; medium confidence separates observation from route inference.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
A multi-institution growth series documents substantial ontogenetic cranial variation within referred Tyrannosaurus rex specimens, but ontogenetic assignment and synonymy remain analytical decisions rather than directly observed life histories.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
Many scored specimens provide repeatable anatomy, but sequence ordering and taxonomic referral are interpretive. Medium confidence reflects that asymmetry without discarding the observations.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Tyrannosaurus tooth marks and coprolite contents directly demonstrate bone consumption, while prey choice, population density, bite force and tooth pressure remain separate behavioural or mechanical inferences.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
Bone modification and embedded or ingested material directly establish osteophagy. High confidence is confined to consumption evidence and does not elevate demographic or performance models to observations.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Robust cranial and dental anatomy and two-fingered forelimbs are repeatedly preserved, while the cited growth series shows that several skull proportions change across assigned ontogenetic stages.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
Repeated specimen anatomy supports the listed structures with high confidence; the exact growth trajectory remains dependent on referral and stage ordering rather than a tracked individual.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
地狱溪剖面中的标本位置与独立测定的界线是直接证据，但全组取样不能保证属级首现；中等置信度标记这一舍入延限。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
地点直接支持北美西部出现，而祖先区域重建依赖拓扑和区域编码；中等置信度把观察与路线推断分开。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
大量评分标本提供可复核解剖，但序列排序与分类归属仍是解释；中等置信度反映这种不对称，而不否定观察。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
骨表改造和嵌入或摄入材料直接确立食骨行为；高置信度仅限摄食证据，不把种群或性能模型提升为观察。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
重复标本解剖以高置信度支持所列结构；精确生长轨迹仍依赖标本归属和阶段排序，而非追踪同一个体。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
实测地狱溪出现记录把 Tyrannosaurus 置于最晚马斯特里赫特期并延续到 K–Pg 界线；图谱 6800–6600 万年前的范围是舍入包络，不声称该属在 6800 万年前全球起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
最晚马斯特里赫特期的北美西部地层直接记录了 Tyrannosaurus 标本；更广的暴龙科扩散路线仍依赖模型，不被当作 Tyrannosaurus 个体迁移的直接证据。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
跨机构生长序列记录了归入 Tyrannosaurus rex 标本的显著头骨个体发育变化，但发育阶段分配和同物异名处理仍是分析决定，不是直接观察的生命史。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
Tyrannosaurus 的齿痕和粪化石内容直接证明食骨，但猎物选择、种群密度、咬合力和牙压仍是彼此独立的行为或力学推断。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
粗壮的头骨和牙齿解剖以及二指前肢在多个标本中反复保存；所引生长序列还显示若干头骨比例随指定个体发育阶段变化。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The displayed endpoints are a rounded latest Maastrichtian envelope. Census sampling does not prove a global genus FAD, and the younger uncertainty records the dated K–Pg boundary rather than a last individual.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Measured Hell Creek specimen positions document latest Maastrichtian occurrence; the range closes at the independently dated K–Pg boundary without claiming instantaneous disappearance everywhere.
<!-- /evo:text -->
