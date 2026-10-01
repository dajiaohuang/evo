---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:39240
    scientificName: Archaeopteryx
    commonName: Archaeopteryx
    commonNameZh: 始祖鸟
    rank: genus
    parentName: Avialae
    extinct: true
    geography:
      - Late Jurassic lithographic limestones of Bavaria, Germany
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
      - rauhut-2018-oldest-archaeopteryx
      - voeten-2018-archaeopteryx-flight
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Avialae/Archaeopteryx/research/Archaeopteryx
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
        - referenceId: rauhut-2018-oldest-archaeopteryx
          relation: supports
          quoteLocator: Geological setting; Systematic palaeontology; Figures 1–5; Table 1
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Avialae/Archaeopteryx/research/Archaeopteryx
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Rauhut et al. 2018 DOI 10.7717/peerj.4191
      referenceLinks:
        - referenceId: rauhut-2018-oldest-archaeopteryx
          relation: supports
          quoteLocator: Geological setting; Figure 1; specimen and locality catalogue
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Avialae/Archaeopteryx/research/Archaeopteryx
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Rauhut et al. 2018 DOI 10.7717/peerj.4191
      referenceLinks:
        - referenceId: rauhut-2018-oldest-archaeopteryx
          relation: supports
          quoteLocator: Systematic palaeontology; phylogenetic discussion; Table 1
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Avialae/Archaeopteryx/research/Archaeopteryx
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Rauhut et al. 2018 DOI 10.7717/peerj.4191
      referenceLinks:
        - referenceId: voeten-2018-archaeopteryx-flight
          relation: supports
          figure: Figures 1–4
          quoteLocator: Voeten Figures 1–4; comparative bone-geometry analysis; Supplementary Data 1–2
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Avialae/Archaeopteryx/research/Archaeopteryx
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
      reviewedAgainstReferenceVersion: Rauhut et al. 2018 DOI 10.7717/peerj.4191
      referenceLinks:
        - referenceId: rauhut-2018-oldest-archaeopteryx
          relation: supports
          figure: Figures 2–32
          quoteLocator: Specimen description
        - referenceId: voeten-2018-archaeopteryx-flight
          relation: supports
          figure: Figures 1–3
          quoteLocator: Synchrotron cross-sections
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Avialae/Archaeopteryx/research/Archaeopteryx
      rangeKind: global-composite
      taxonomicConcept: Referred Archaeopteryx specimens
      geographicScope: Late Jurassic lithographic limestones of Bavaria, Germany
      olderMa: 150
      youngerMa: 148
      status: available
      uncertainty:
        olderMa: 151
        youngerMa: 147
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Avialae/Archaeopteryx/research/Archaeopteryx/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: rauhut-2018-oldest-archaeopteryx
          locator: Geological setting; Systematic palaeontology; Figures 1–5; Table 1
      reviewStatus: automated-audit-passed
---

# Archaeopteryx

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Painten specimen extends referred Archaeopteryx material into the earliest Tithonian; the 150–148 Ma atlas interval is a formation- and specimen-bounded envelope, not the origin of Avialae or crown birds.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
A referred specimen and geological setting directly support the extension, but numerical endpoints summarize correlated horizons and referral is taxonomic; medium confidence prevents a false exact FAD.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/0/reviewedAgainstReferenceVersion -->
Voeten et al. 2018 DOI 10.1038/s41467-018-03296-8; current supporting reference reconciled by automated source audit 2026-09-22, superseding the stale Rauhut 2018 marker
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
All securely referred Archaeopteryx specimens discussed here come from Late Jurassic Bavarian lithographic limestones; that observed concentration does not demonstrate global absence elsewhere.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Named specimens and quarries directly establish the Bavarian record. High confidence concerns occurrence locations only and explicitly avoids an absence or endemism claim.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Archaeopteryx is a Late Jurassic avialan outside crown Neornithes; substantial anatomical variation among referred specimens does not make it the direct ancestor of living birds.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
Specimen anatomy and repeated phylogenetic placement support avialan affinity, while crown definition excludes the genus. High confidence applies to that scope, not to one immutable internal avialan topology.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Wing-bone geometry is compatible with short-burst active flight in comparative models, but the evidence does not directly observe behaviour, endurance or a modern crown-bird flight stroke.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
Synchrotron cross-sections provide direct geometry, while locomotor category comes from comparison with living birds. Medium confidence preserves that model boundary.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Referred Archaeopteryx skeletons preserve toothed jaws, a long bony tail and feather associations, while wing-bone cross-sections differ from those of specialized soaring birds.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The listed hard-tissue and feather associations are specimen observations, and synchrotron sections are repeatable measurements. High confidence does not assign one flight performance to every specimen.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
归入标本及其地质背景直接支持延长记录，但数值端点概括相关层位且归属本身是分类判断；中等置信度避免虚假的精确首现。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
具名标本和采石场直接确立巴伐利亚记录；高置信度只涉及出现地点，并明确避免缺失或特有性主张。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
标本解剖和重复系统位置支持鸟翼类亲缘，而冠群定义排除该属；高置信度只适用于这一范围，不代表鸟翼类内部只有一个固定拓扑。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
同步辐射截面提供直接几何数据，而运动类别来自与现生鸟类比较；中等置信度保留这一模型边界。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
所列硬组织和羽毛关联是标本观察，同步辐射截面是可复测数据；高置信度不把同一种飞行性能强加给每件标本。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
派恩滕标本把归入 Archaeopteryx 的材料延伸到提通期最早期；图谱 1.50–1.48 亿年前区间是地层组和标本限定的包络，而非鸟翼类或冠群鸟类起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
这里讨论的可靠 Archaeopteryx 归入标本均来自晚侏罗世巴伐利亚石版灰岩；这种观察到的集中分布不能证明其他地区全球性缺失。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
Archaeopteryx 是位于冠群今鸟类之外的晚侏罗世鸟翼类；归入标本间的显著解剖变异也不使它成为现生鸟类的直系祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
翼骨几何在比较模型中与短时主动飞行相容，但证据没有直接观察行为、耐力或现代冠群鸟类的飞行拍动。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
归入 Archaeopteryx 的骨骼保存有齿颌、长骨质尾和羽毛关联，其翼骨截面也不同于专门滑翔鸟类。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Numerical endpoints summarize correlated Kimmeridgian–Tithonian horizons; they are not a global Avialae FAD or a directly dated origin.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The referred Painten specimen extends the sampled genus into the earliest Tithonian; other Bavarian specimens occupy younger lithographic-limestone horizons.
<!-- /evo:text -->
