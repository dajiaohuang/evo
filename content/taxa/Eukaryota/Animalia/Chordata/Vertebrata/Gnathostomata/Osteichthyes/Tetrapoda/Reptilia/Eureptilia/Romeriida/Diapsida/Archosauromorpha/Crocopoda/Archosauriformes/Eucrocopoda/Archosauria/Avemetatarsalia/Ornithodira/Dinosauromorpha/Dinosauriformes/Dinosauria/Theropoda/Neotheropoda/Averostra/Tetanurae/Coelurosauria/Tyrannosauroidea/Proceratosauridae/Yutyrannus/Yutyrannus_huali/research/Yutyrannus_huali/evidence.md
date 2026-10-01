---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:230947
    scientificName: Yutyrannus huali
    commonName: Yutyrannus
    commonNameZh: 羽王龙
    rank: species
    parentName: Yutyrannus huali
    extinct: true
    geography:
      - Yixian Formation, Liaoning Province, China
      - "Three-skeleton sample: ZCDM V5000, ZCDM V5001 and ELDM V1001"
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
      - xu-2012-yutyrannus
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Proceratosauridae/Yutyrannus/Yutyrannus_huali/research/Yutyrannus_huali
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Xu et al. 2012 DOI 10.1038/nature10906
      referenceLinks:
        - referenceId: xu-2012-yutyrannus
          relation: supports
          pages: 92–95
          figure: Figure 3; Supplementary Information
          quoteLocator: Abstract; systematic description; phylogenetic analysis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Proceratosauridae/Yutyrannus/Yutyrannus_huali/research/Yutyrannus_huali
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
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Xu et al. 2012 DOI 10.1038/nature10906
      referenceLinks:
        - referenceId: xu-2012-yutyrannus
          relation: supports
          pages: 92–95
          figure: Figures 1–2; Supplementary Information
          quoteLocator: Abstract; holotype and referred specimens; locality and horizon
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Proceratosauridae/Yutyrannus/Yutyrannus_huali/research/Yutyrannus_huali
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Xu et al. 2012 DOI 10.1038/nature10906
      referenceLinks:
        - referenceId: xu-2012-yutyrannus
          relation: supports
          pages: 92–95
          figure: Figures 1–2; Supplementary Information
          quoteLocator: Abstract; specimen descriptions; integumentary structures
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Proceratosauridae/Yutyrannus/Yutyrannus_huali/research/Yutyrannus_huali
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
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Xu et al. 2012 DOI 10.1038/nature10906
      referenceLinks:
        - referenceId: xu-2012-yutyrannus
          relation: supports
          pages: 92–95
          figure: Figures 1–3; Supplementary Information
          quoteLocator: Abstract; specimen descriptions; phylogenetic analysis
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
    - markdown: evidence.md
      field: /records/claim-rationales.zh/2
    - markdown: evidence.md
      field: /records/claim-rationales.zh/3
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
    - markdown: evidence.md
      field: /records/claim-statements.zh/2
    - markdown: evidence.md
      field: /records/claim-statements.zh/3
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Proceratosauridae/Yutyrannus/Yutyrannus_huali/research/Yutyrannus_huali
      rangeKind: global-composite
      taxonomicConcept:
        markdown: evidence.md
        field: /records/ranges/0/taxonomicConcept
      geographicScope: Named source locality only; no complete global geographic-temporal range is assigned
      olderMa: 0
      youngerMa: 0
      status: withheld-pending-provenance
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: withheld-no-range-evidence
      confidence: low
      claimPaths: []
      referenceLocators:
        - referenceId: xu-2012-yutyrannus
          locator: Cited named specimen and locality; no complete global range is claimed.
      reviewStatus: not-reviewed
  field-claim-overrides:
    - firstAppearance:
        status: not-assessed
      lastAppearance:
        status: not-assessed
---

# Yutyrannus huali

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Yutyrannus huali is described from three nearly complete skeletons representing two ontogenetic stages, and its basal tyrannosauroid placement is the result of the study's sampled phylogenetic analysis rather than a direct-ancestor claim.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The named specimens and diagnosis are directly reported, while the wider placement depends on character coding, comparative sample and analysis settings. Yutyrannus huali: For the species-level page, this assessment applies to the named species and its cited diagnosis; it does not imply a broader genus sample.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
This profile's geographic statement is limited to the Lower Cretaceous Yixian Formation of Liaoning Province, China, from which the three named Yutyrannus skeletons were reported; it does not assert a genus-wide distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The formation and provincial provenance are directly reported for the three-skeleton sample, but that sample cannot establish a complete geographic range. Yutyrannus huali: For the species-level page, this assessment covers the cited occurrence or localities only and does not estimate a complete range.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The named Yutyrannus skeletons preserve a three-fingered manus, a typical theropod pes and long filamentous integumentary structures; these described structures do not directly establish their colour, complete body coverage or a single function.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The primary study documents the named skeletons and their integumentary structures directly; the explicit limits prevent anatomical preservation from being promoted to colour or functional evidence. Yutyrannus huali: For the species-level page, this assessment covers the characters observed in the cited specimens; unsampled variation remains outside it.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The cited study records specimen anatomy, large body size and filamentous integument but does not directly observe diet, habitat preference, locomotor behaviour, insulation, display or performance; those ecological interpretations remain unassigned here.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The specimens and their preserved structures are direct evidence, but ecological roles and feather functions require inferences beyond what the study directly observes. Yutyrannus huali: For the species-level page, this assessment covers only ecological inferences tied to the cited specimens; unmeasured fields remain unassigned.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
具名标本和诊断有直接记录，而更广泛的系统位置依赖性状编码、比较样本和分析设定。 Yutyrannus huali：本种级页面的判断仅适用于所引材料中的该种及其描述，不表示存在更广泛的属级样本。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
三件标本的地层和省级产地有直接记录，但该样本不能建立完整地理分布。 Yutyrannus huali：本种级页面的判断仅覆盖所引化石记录或地点，不据此估算完整分布。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
一手论文直接记录具名骨架及其丝状体被；明确保留其不等同于颜色、全身体被或单一功能的边界。 Yutyrannus huali：本种级页面的判断仅覆盖所引标本中观察到的性状；未取样的种内变异不在此结论内。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
标本和保存结构是直接证据，但生态角色与羽毛功能需要超出论文直接观察的推断。 Yutyrannus huali：本种级页面的判断仅覆盖与所引标本相关的生态推断；未测量字段继续保持未指定。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Yutyrannus huali 依据代表两个个体发育阶段的三具近完整骨骼描述；其基干暴龙超科位置是研究所取样系统发育分析的结果，而非直系祖先主张。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
具名羽王龙骨骼保存三指手部、典型兽脚类足部和长丝状体被结构；这些被描述的结构不能直接确立其颜色、全身体表覆盖或单一功能。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
本档案的地理陈述限定于三具具名羽王龙骨骼所报道的中国辽宁下白垩统义县组；它不宣称属级完整分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
所引研究记录了标本解剖、大体型和丝状体被，但没有直接观察食性、生境偏好、运动行为、保温、展示或性能；这些生态解释在此保持未指定。
<!-- /evo:text -->

## ranges / taxonomicConcept

<!-- evo:text /records/ranges/0/taxonomicConcept -->
PBDB accepted fossil species txn:230947 (Yutyrannus huali); profile scope is the cited specimen record, not a global range synthesis
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Zero values are non-display placeholders; the cited specimen study does not establish a complete global first and last appearance range.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The frozen PBDB roster supports accepted name, rank, OID and immediate parent. The selected literature supports the described specimen evidence, not a complete global range for Yutyrannus huali.
<!-- /evo:text -->
