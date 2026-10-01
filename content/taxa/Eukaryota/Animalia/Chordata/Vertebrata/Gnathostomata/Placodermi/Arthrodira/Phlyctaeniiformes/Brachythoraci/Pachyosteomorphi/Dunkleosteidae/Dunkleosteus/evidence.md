---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Dunkleosteus
    commonName: Dunkleosteus
    commonNameZh: 邓氏鱼
    rank: genus
    taxonId: txn:34328
    firstAppearance: 380
    lastAppearance: 359
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Placodermi/Arthrodira/Phlyctaeniiformes/Brachythoraci/Pachyosteomorphi/Dunkleosteidae/Dunkleosteus
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: anderson-westneat-2007-dunkleosteus-feeding DOI 10.1098/rsbl.2006.0569; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: anderson-westneat-2007-dunkleosteus-feeding
          pages: 77–80
          figure: Figures 1–3
          quoteLocator: Skull reconstruction; linkage model; bite-force calculations
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Placodermi/Arthrodira/Phlyctaeniiformes/Brachythoraci/Pachyosteomorphi/Dunkleosteidae/Dunkleosteus
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas automated primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: carr-hlavin-2010-eubrachythoraci; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: carr-hlavin-2010-eubrachythoraci
          pages: 195–222
          figure: Figures 1–13; locality and systematic descriptions
          quoteLocator: Two named Dunkleosteus species; Ohio Shale and Kettle Point horizons
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Placodermi/Arthrodira/Phlyctaeniiformes/Brachythoraci/Pachyosteomorphi/Dunkleosteidae/Dunkleosteus
      rangeKind: global-composite
      taxonomicConcept: Dunkleosteus species sampled by Carr and Hlavin 2010
      geographicScope: Ohio Shale, United States, and Kettle Point Formation, Canada
      olderMa: 372.15
      youngerMa: 358.86
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Placodermi/Arthrodira/Phlyctaeniiformes/Brachythoraci/Pachyosteomorphi/Dunkleosteidae/Dunkleosteus/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: carr-hlavin-2010-eubrachythoraci
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Dunkleosteus

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A reconstructed Dunkleosteus terrelli skull and linkage model yield explicit estimates of jaw kinematics and bite force. The estimates depend on geometry and muscle assumptions and are not direct observations of behaviour, ecology or a genus-wide body plan.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded morphology statement at the supplied locator. The confidence does not extend beyond the estimates depend on geometry and muscle assumptions and are not direct observations of behaviour, ecology or a genus-wide body plan.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Two named Dunkleosteus species from Upper Devonian formations support a 372.15–358.86 Ma Famennian sample envelope; it is not an exhaustive genus-wide FAD or LAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Dunkleosteus species sampled by Carr and Hlavin 2010: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的形态表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Dunkleosteus species sampled by Carr and Hlavin 2010：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
重建的 Dunkleosteus terrelli 头骨与连杆模型给出明确的颌运动和咬合力估计。这些估计依赖几何与肌肉假设，不是行为、生态或全属体型的直接观测。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
上泥盆统地层中的两个具名邓氏鱼物种支持 3.7215–3.5886 亿年前的法门期样本范围；这不是该属穷尽性的全球首现或末现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Stage-level envelope across the two named Upper Devonian formation samples.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The study sample anchors the genus in the Famennian without claiming exhaustive global endpoints.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
195–222; Figures 1–13; locality and systematic descriptions; Two named Dunkleosteus species; Ohio Shale and Kettle Point horizons
<!-- /evo:text -->
