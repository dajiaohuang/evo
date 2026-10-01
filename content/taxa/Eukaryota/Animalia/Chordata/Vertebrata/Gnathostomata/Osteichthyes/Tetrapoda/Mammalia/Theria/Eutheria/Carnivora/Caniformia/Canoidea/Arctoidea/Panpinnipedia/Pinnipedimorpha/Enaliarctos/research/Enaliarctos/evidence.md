---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:36916
    scientificName: Enaliarctos
    commonName: Enaliarctos
    commonNameZh: 始海豹
    rank: genus
    parentName: Pinnipedimorpha
    extinct: true
    geography:
      - Pyramid Hill Sandstone Member, Jewett Sand
      - Central California, United States
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
      - berta-ray-1990-enaliarctos
      - berta-ray-wyss-1989-enaliarctos
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Canoidea/Arctoidea/Panpinnipedia/Pinnipedimorpha/Enaliarctos/research/Enaliarctos
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/0/reviewedAgainstReferenceVersion
      referenceLinks:
        - relation: supports
          referenceId: berta-ray-1990-enaliarctos
          pages: 141–157
          figure: Figures 1–8
          quoteLocator: Skeletal description; locality; limb proportions
        - relation: supports
          referenceId: berta-ray-wyss-1989-enaliarctos
          pages: 60–62
          quoteLocator: "Abstract: nearly complete skeleton from California rocks, approximately 23 million years old"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Canoidea/Arctoidea/Panpinnipedia/Pinnipedimorpha/Enaliarctos/research/Enaliarctos
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: berta-ray-1990-enaliarctos primary-study locator checked for 2026.09 carnivora profile expansion
      referenceLinks:
        - relation: supports
          referenceId: berta-ray-1990-enaliarctos
          pages: 141–157
          figure: Figures 1–8; Tables 1–6
          quoteLocator: Skeletal description; systematic comparison; locomotor capabilities
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Canoidea/Arctoidea/Panpinnipedia/Pinnipedimorpha/Enaliarctos/research/Enaliarctos
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: berta-ray-1990-enaliarctos primary-study locator checked for 2026.09 carnivora profile expansion
      referenceLinks:
        - relation: supports
          referenceId: berta-ray-1990-enaliarctos
          pages: 141–157
          figure: Figure 1
          quoteLocator: Locality and geological setting; Pyramid Hill Sandstone Member of the Jewett Sand
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Canoidea/Arctoidea/Panpinnipedia/Pinnipedimorpha/Enaliarctos/research/Enaliarctos
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: berta-ray-1990-enaliarctos primary-study locator checked for 2026.09 carnivora profile expansion
      referenceLinks:
        - relation: supports
          referenceId: berta-ray-1990-enaliarctos
          pages: 141–157
          figure: Figures 1–8; Tables 1–6
          quoteLocator: Skeletal description; vertebral column; forelimb and hindlimb morphology
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Canoidea/Arctoidea/Panpinnipedia/Pinnipedimorpha/Enaliarctos/research/Enaliarctos
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: berta-ray-1990-enaliarctos primary-study locator checked for 2026.09 carnivora profile expansion
      referenceLinks:
        - relation: supports
          referenceId: berta-ray-1990-enaliarctos
          pages: 141–157
          figure: Figures 4–8; Tables 3–6
          quoteLocator: Locomotor capabilities; limb proportions; vertebral-column comparison
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Canoidea/Arctoidea/Panpinnipedia/Pinnipedimorpha/Enaliarctos/research/Enaliarctos
      rangeKind: global-composite
      taxonomicConcept: Enaliarctos mealsi skeleton occurrence
      geographicScope: Jewett Sand, California, USA
      olderMa: 23
      youngerMa: 23
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Canoidea/Arctoidea/Panpinnipedia/Pinnipedimorpha/Enaliarctos/research/Enaliarctos/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: berta-ray-1990-enaliarctos
          locator: 141–157; Figures 1–8; Tables 1–6; Skeletal description; Limb proportions; Locomotor interpretation
        - referenceId: berta-ray-wyss-1989-enaliarctos
          locator: "60–62; abstract: nearly complete skeleton from California rocks, approximately 23 million years old"
      reviewStatus: automated-audit-passed
---

# Enaliarctos

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Enaliarctos profile is anchored by the virtually complete Enaliarctos mealsi skeleton LACM 4321 from the Jewett Sand at an explicitly approximate age of 23 Ma; its swimming and terrestrial capabilities are comparative models, not a global genus range or direct pinniped ancestor claim.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The named skeleton and formation are direct; locomotor reconstruction remains inferential and is excluded from the temporal bound.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/0/reviewedAgainstReferenceVersion -->
Berta, Ray & Wyss 1989 DOI 10.1126/science.244.4900.60 and Berta & Ray 1990 DOI 10.1080/02724634.1990.10011803 audited 2026-09-01
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Berta and Ray describe LACM 4321 as Enaliarctos mealsi and test pinniped relationships from its skeletal anatomy; their sampled topology is not a direct-ancestor assertion or a universal pinniped phylogeny.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The named skeleton and the study's comparative analysis are explicit, whereas the broader phylogenetic interpretation remains model- and taxon-sample-dependent.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The profiled Enaliarctos mealsi skeleton comes from the Pyramid Hill Sandstone Member of the Jewett Sand in central California; this occurrence does not establish a genus-wide Pacific distribution or pinniped dispersal route.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The member and central-California occurrence are directly reported for LACM 4321; the claim does not extend one locality into an inferred distribution.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
LACM 4321 preserves a virtually complete skeleton, including lumbar vertebrae and flipper-like limbs with developed bony processes and muscle-attachment areas documented in the anatomical description.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The preserved skeletal elements and comparative descriptions are directly documented for the named specimen; functional consequences are kept separate.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Comparative axial and limb morphology is used to infer aquatic and terrestrial locomotor capability for LACM 4321, but the study does not directly observe diet, habitual habitat, swimming strokes or a feeding guild.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The skeletal measurements support a bounded functional comparison, while behaviour and ecology are not directly preserved and remain unassigned.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
具名骨架与地层属于直接证据；运动复原仍属推断，不进入时间边界。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
具名骨架和研究的比较分析均有明确记录，但更宽泛的系统发育解释仍取决于模型与类群取样。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
LACM 4321 的地层段与加利福尼亚中部出现记录均有直接报告；本主张不把单一产地外推为推断分布。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
所保存的骨骼构件及其比较性描述直接记录于具名标本；功能后果另行保留。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
骨骼测量支持有界的功能比较，但行为与生态并未直接保存，因此保持未赋值。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Enaliarctos 档案由 Jewett Sand 的近乎完整 Enaliarctos mealsi 骨架 LACM 4321 锚定，其年龄明确仅为约 2300 万年前；游泳与陆地能力属于比较模型，不是全球属级范围或鳍足类直接祖先主张。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Berta 与 Ray 将 LACM 4321 描述为 Enaliarctos mealsi，并以其骨骼解剖检验鳍足类关系；该研究的取样拓扑不是直系祖先断言，也不是普遍的鳍足类系统树。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
档案中的 Enaliarctos mealsi 骨架来自加利福尼亚中部 Jewett Sand 的 Pyramid Hill Sandstone Member；这一出现记录不能确立属级的太平洋分布或鳍足类扩散路线。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
LACM 4321 保存了一具近乎完整的骨架，包括腰椎以及在解剖描述中记录的、具有发达骨突和肌肉附着区的鳍状肢。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
研究以轴骨和肢骨的比较形态推断 LACM 4321 的水生与陆生运动能力，但并未直接观察食性、习性栖息地、游泳动作或摄食功能群。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The source reports approximately 23 Ma; this rounded specimen age is not a precise radiometric date, direct ancestry date, or guaranteed global first or last appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The primary report places the nearly complete LACM 4321 skeleton at approximately 23 Ma; the detailed study describes its virtually complete anatomy and bounded locomotor comparisons.
<!-- /evo:text -->
