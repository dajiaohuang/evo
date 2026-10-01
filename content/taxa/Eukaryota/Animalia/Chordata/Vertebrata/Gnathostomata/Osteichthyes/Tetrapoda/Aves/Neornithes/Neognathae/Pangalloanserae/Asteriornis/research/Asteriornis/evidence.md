---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:413463
    scientificName: Asteriornis
    commonName: Asteriornis
    commonNameZh: 星辰鸟
    rank: genus
    parentName: Neornithes
    extinct: true
    geography:
      - Maastricht Formation, CBR-Romontbos quarry, Belgium
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
      - field-2020-asteriornis
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Neornithes/Neognathae/Pangalloanserae/Asteriornis/research/Asteriornis
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: field-2020-asteriornis concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: field-2020-asteriornis
          relation: supports
          pages: 397–401
          figure: Figures 1–4; Extended Data Figure 7
          quoteLocator: Holotype; Geological setting; age constraint; Phylogenetic analyses
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Neornithes/Neognathae/Pangalloanserae/Asteriornis/research/Asteriornis
      claimType: taxonomy
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Field et al. 2020 DOI 10.1038/s41586-020-2096-0
      referenceLinks:
        - referenceId: field-2020-asteriornis
          relation: supports
          pages: 397–401
          figure: Figure 3; Extended Data Figure 9
          quoteLocator: Systematic palaeontology; parsimony and tip-dated Bayesian phylogenetic analyses
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Neornithes/Neognathae/Pangalloanserae/Asteriornis/research/Asteriornis
      claimType: biogeography
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Field et al. 2020 DOI 10.1038/s41586-020-2096-0
      referenceLinks:
        - referenceId: field-2020-asteriornis
          relation: supports
          pages: 397–401
          figure: Figure 3; Extended Data Figure 7
          quoteLocator: Geological setting and provenance; Northern Hemisphere biogeographic discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Neornithes/Neognathae/Pangalloanserae/Asteriornis/research/Asteriornis
      claimType: morphology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Field et al. 2020 DOI 10.1038/s41586-020-2096-0
      referenceLinks:
        - referenceId: field-2020-asteriornis
          relation: supports
          pages: 397–401
          figure: Figures 1–2; Extended Data Figure 7
          quoteLocator: Holotype and CT description; comparative skull and quadrate morphology
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Neornithes/Neognathae/Pangalloanserae/Asteriornis/research/Asteriornis
      claimType: ecology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Field et al. 2020 DOI 10.1038/s41586-020-2096-0
      referenceLinks:
        - referenceId: field-2020-asteriornis
          relation: supports
          pages: 397–401
          figure: Extended Data Figure 8
          quoteLocator: Mean body-mass estimate and discussion of possible littoral ecology
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
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Neornithes/Neognathae/Pangalloanserae/Asteriornis/research/Asteriornis
      rangeKind: global-composite
      taxonomicConcept: Asteriornis maastrichtensis holotype occurrence
      geographicScope: Maastricht Formation, Belgium
      olderMa: 66.8
      youngerMa: 66.7
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
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Neornithes/Neognathae/Pangalloanserae/Asteriornis/research/Asteriornis/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: field-2020-asteriornis
          locator: 397–401; Figures 1–4; Extended Data Figure 7; Holotype; Geological setting; Phylogenetic analyses
      reviewStatus: automated-audit-passed
---

# Asteriornis

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Asteriornis is anchored by CT-imaged holotype NHMM 2013 008 from a tightly constrained latest Maastrichtian horizon in Belgium; the occurrence is not a global crown-bird FAD and its crown placement remains analysis-dependent.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The specimen and horizon are direct, while alternative phylogenetic methods place it differently. High confidence applies to occurrence, not a universal crown boundary.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Field et al. named Asteriornis maastrichtensis from holotype NHMM 2013 008; parsimony placed it as sister to crown Galloanserae whereas tip-dated Bayesian analysis placed it as the stemward-most Pangalliformes member, so exact crown position remains method-dependent.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The name, type and two reported topology results are explicit. Confidence remains medium because the analyses disagree on the exact near-galloanseran branch and do not establish direct ancestry.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
NHMM 2013 008 comes from the Maastricht Formation at the CBR-Romontbos quarry in Belgium; its Northern Hemisphere occurrence challenges a Gondwanan-origin hypothesis in the cited analysis but does not identify the geographic origin of crown birds.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The quarry and formation provenance are direct records. The broader biogeographic consequence is framed only as a challenge to one hypothesis, not as proof of an alternative origin.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
NHMM 2013 008 includes a nearly complete, three-dimensionally preserved skull and associated postcranial elements and exhibits a combination of galliform-like and anseriform-like cranial features in the authors' comparison.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The CT-imaged specimen, preserved elements and comparative cranial observations are documented directly. High confidence is confined to the sampled anatomy rather than its universal phylogenetic interpretation.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The cited study estimates a mean body mass of 394 g and proposes only a possible littoral ecology from small size and depositional context; it does not resolve species-specific diet, locomotor performance or a feeding guild.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The body mass is a skeletal-scaling model result and littoral ecology is explicitly tentative. The remaining ecological fields are withheld because the study does not directly support them.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
标本与层位是直接证据，而不同系统发育方法给出不同位置。高置信度适用于出现记录，不适用于普遍冠群边界。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
名称、模式标本与两项拓扑结果均有明确报告。两种分析对近鸡雁类的具体位置并不一致，且不建立直系祖先关系，因此置信度为中等。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
采石场和地层组来源是直接记录。更广泛的生物地理意义仅表述为对一个假说的挑战，而不是另一种起源的证明。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
CT 成像标本、保存构件与比较头骨观察均有直接记录。高置信度只覆盖取样解剖，不延伸为普遍系统位置。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
体重是骨骼尺度模型结果，滨岸生态在原文中也明确只是可能性。论文未直接支持的其余生态字段保持不详。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Asteriornis 由比利时严格约束的最晚马斯特里赫特期层位中、经 CT 成像的正模 NHMM 2013 008 锚定；该记录不是全球冠群鸟类首现，其冠群位置仍依赖分析。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The interval is a study-level occurrence or model-bounded navigation envelope, not a direct date on ancestry or a guaranteed global first appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
NHMM 2013 008 includes a three-dimensionally preserved skull imaged by CT plus associated postcrania from a tightly constrained Maastrichtian horizon.
<!-- /evo:text -->
